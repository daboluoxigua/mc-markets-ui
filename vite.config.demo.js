import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import path from "path";
import createVitePlugins from "./vite/plugins";

// 演示站点配置
export default defineConfig({
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
    }
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
    }
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
});
