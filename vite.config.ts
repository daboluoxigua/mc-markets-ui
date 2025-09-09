import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import path from "path";
import createVitePlugins from "./vite/plugins";
import dts from 'vite-plugin-dts'
import { copyFileSync, existsSync } from 'fs'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      ...createVitePlugins(),
      dts(),
      // Element Plus 自动导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue', 'vue-router'],
        dts: true,
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
        ],
      }),
      Components({
        resolvers: [ElementPlusResolver({
          importStyle: 'sass'
        })],
        dts: true,
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/, /\.vue\?vue/, // .vue
        ],
      }),
      // 自定义插件：复制 Element Plus 样式文件
      {
        name: 'copy-element-plus-styles',
        writeBundle() {
          const elementPlusStylePath = path.resolve(__dirname, 'node_modules/element-plus/dist/index.css')
          const distStylePath = path.resolve(__dirname, 'dist/style.css')
          
          if (existsSync(elementPlusStylePath)) {
            copyFileSync(elementPlusStylePath, distStylePath)
            console.log('✅ Element Plus 样式文件已复制到 dist/style.css')
          } else {
            console.warn('⚠️  Element Plus 样式文件未找到:', elementPlusStylePath)
          }
        }
      }
    ],
    build: {
      outDir: "dist", //输出文件名称
      lib: {
        entry: path.resolve(__dirname, "./packages/index.ts"), //指定组件编译入口文件
        name: "McProUILibrary",
        fileName: (format) => `index.${format === 'es' ? 'js' : 'js'}`,
      }, //库编译模式配置
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue", "element-plus"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
            "element-plus": "ElementPlus",
          },
        },
      }, // rollup打包配置
    },

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./packages", import.meta.url)),
        "@mc-markets/ui": fileURLToPath(new URL("./packages", import.meta.url)),
      },
    },
    
    css: {
      preprocessorOptions: {
        scss: {
          // 可以在这里添加全局 SCSS 变量，但避免循环依赖
        },
      },
    },
  });
};
