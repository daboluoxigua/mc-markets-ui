import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import path from "path";
import createVitePlugins from "./vite/plugins";

// 演示专用配置
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
    outDir: "dist-demo", // 演示输出目录
    assetsDir: "assets", // 静态资源目录
    sourcemap: false, // 生产环境不生成sourcemap
    minify: 'terser', // 使用terser压缩
    // SPA模式配置
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html") // 演示入口文件
      },
      output: {
        // 静态资源文件名格式
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        }
      }
    },
    // 构建优化
    terserOptions: {
      compress: {
        drop_console: true, // 移除console
        drop_debugger: true, // 移除debugger
      },
    },
    // 构建大小警告限制
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@packages": fileURLToPath(new URL("./packages", import.meta.url)),
      "@mc-markets/ui": fileURLToPath(new URL("./packages", import.meta.url))
    },
  },
  // 预览服务器配置
  preview: {
    port: 4173,
    open: true,
    cors: true
  }
});
