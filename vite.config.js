import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import path from "path";
import createVitePlugins from "./vite/plugins";

// https://vitejs.dev/config/
export default ({ command }) => {
  const isDev = command === 'serve'
  
  return defineConfig({
    plugins: [
      ...createVitePlugins(),
    ],
    server: {
      hmr: {
        overlay: false
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api']
        }
      },
      // 确保组件样式优先级
      postcss: {
        plugins: [
          // 可以在这里添加PostCSS插件来优化样式优先级
        ]
      }
    },
    build: {
      outDir: "dist", //输出文件名称
      cssCodeSplit: false, // 将所有CSS提取到一个文件中
      lib: {
        entry: path.resolve(__dirname, "./packages/index.js"), //指定组件编译入口文件
        name: "McProUILibrary",
        fileName: 'index.js',
        formats: ['es'], // 只生成 ES 模块格式
      }, //库编译模式配置
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue", "element-plus"],
        output: {
          format: 'es',
          entryFileNames: 'index.js',
        },
      }, // rollup打包配置
    },

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@packages": fileURLToPath(new URL("./packages", import.meta.url)),
        "@mc-markets/ui": fileURLToPath(new URL("./packages", import.meta.url))
      },
    },
  });
};
