import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import path from "path";
import createVitePlugins from "./vite/plugins";
import pxtorem from "postcss-pxtorem";
import postcssVarPxToRem from "./vite/plugins/postcss-var-pxtorem";

// 演示站点配置（按环境变量/模式决定是否启用 H5 的 pxtorem）
export default defineConfig(({ mode }) => {
  const isH5 = process.env.VITE_H5 === '1' || mode === 'h5'
  return {
    plugins: [
      ...createVitePlugins(),
    ],
    server: {
      hmr: {
        overlay: false
      },
      port: 3000,
      open: true
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api', 'if-function']
        }
      },
      postcss: isH5 ? {
        plugins: [
          // 转换常规声明 px -> rem
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
            exclude: /node_modules/i,
            minPixelValue: 1,
            selectorBlackList: ['html']
          }),
          // 额外：转换 CSS 变量值中的 px -> rem
          postcssVarPxToRem({ rootValue: 37.5, precision: 4 })
        ]
      } : undefined
    },
    build: {
    outDir: "demo-dist", // 演示站点输出目录
    assetsDir: "assets",
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // 用函数拆分：Vant 按子模块单独成 chunk，避免同一 chunk 内多处 createNamespace 的 bem 重复声明
        manualChunks(id) {
          if (id.includes('node_modules/vant')) {
            const m = id.match(/vant[\/\\](?:es|lib)[\/\\]([^\/\\]+)/);
            return m ? `vant-${m[1]}` : 'vant';
          }
          if (id.includes('node_modules/vue') || id.includes('node_modules/@vue')) return 'vue-vendor';
          if (id.includes('node_modules/vue-router')) return 'vue-vendor';
          if (id.includes('node_modules/element-plus')) return 'element-vendor';
          if (id.includes('packages') || id.includes('@mc-markets/ui')) return 'ui-vendor';
        }
      }
    },
    esbuild: {
      drop: ['console', 'debugger']
    },
    // 复制 public 目录下的文件
    copyPublicDir: true
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@packages": fileURLToPath(new URL("./packages", import.meta.url)),
        "@mc-markets/ui": fileURLToPath(new URL("./packages", import.meta.url))
      },
    },
    // 演示站点特定配置
    base: '/mc-markets-ui/',
    define: {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }
  }
});
