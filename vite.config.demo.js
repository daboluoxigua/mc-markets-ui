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
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          'element-vendor': ['element-plus'],
          'ui-vendor': ['@mc-markets/ui']
        }
      }
    },
    // 优化构建
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
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
