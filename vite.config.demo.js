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
          silenceDeprecations: ['legacy-js-api']
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
    minify: 'esbuild', // 使用 esbuild 进行压缩，更快且无需额外依赖
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          'element-vendor': ['element-plus'],
          'ui-vendor': ['@mc-markets/ui']
        }
      }
    },
    // esbuild 压缩配置
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
