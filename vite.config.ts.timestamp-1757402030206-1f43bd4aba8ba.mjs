// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/code/npm-mc-markets-ui/node_modules/vite/dist/node/index.js";
import path from "path";

// vite/plugins/index.ts
import vue from "file:///D:/code/npm-mc-markets-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/code/npm-mc-markets-ui/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";

// vite/plugins/inspector.ts
import Inspector from "file:///D:/code/npm-mc-markets-ui/node_modules/vite-plugin-vue-inspector/dist/index.mjs";
function createInspector() {
  return Inspector();
}

// vite/plugins/auto-import.ts
import autoImport from "file:///D:/code/npm-mc-markets-ui/node_modules/unplugin-auto-import/dist/vite.js";
function createAutoImport() {
  return autoImport({
    imports: [
      "vue",
      "vue-router",
      "pinia"
    ],
    dts: "./src/types/auto-imports.d.ts",
    dirs: [
      "./src/utils/composables/**"
    ]
  });
}

// vite/plugins/components.ts
import components from "file:///D:/code/npm-mc-markets-ui/node_modules/unplugin-vue-components/dist/vite.mjs";
function createComponents() {
  return components({
    dirs: ["src/components"],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: "./src/types/components.d.ts"
    // resolvers: [
    //   ElementPlusResolver({
    //     importStyle: "sass",
    //   }),
    // ], // ElementPlus按需加载
  });
}

// vite/plugins/index.ts
function createVitePlugins() {
  const vitePlugins = [vue(), vueJsx()];
  vitePlugins.push(createInspector());
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createComponents());
  return vitePlugins;
}

// vite.config.ts
import dts from "file:///D:/code/npm-mc-markets-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import { copyFileSync, existsSync } from "fs";
import AutoImport from "file:///D:/code/npm-mc-markets-ui/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/code/npm-mc-markets-ui/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/code/npm-mc-markets-ui/node_modules/unplugin-vue-components/dist/resolvers.mjs";
var __vite_injected_original_dirname = "D:\\code\\npm-mc-markets-ui";
var __vite_injected_original_import_meta_url = "file:///D:/code/npm-mc-markets-ui/vite.config.ts";
var vite_config_default = () => {
  return defineConfig({
    plugins: [
      ...createVitePlugins(),
      dts(),
      // Element Plus 自动导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ["vue", "vue-router"],
        dts: true,
        include: [
          /\.[tj]sx?$/,
          // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/
          // .vue
        ]
      }),
      Components({
        resolvers: [ElementPlusResolver({
          importStyle: "sass"
        })],
        dts: true,
        include: [
          /\.[tj]sx?$/,
          // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/
          // .vue
        ]
      }),
      // 自定义插件：复制 Element Plus 样式文件
      {
        name: "copy-element-plus-styles",
        writeBundle() {
          const elementPlusStylePath = path.resolve(__vite_injected_original_dirname, "node_modules/element-plus/dist/index.css");
          const distStylePath = path.resolve(__vite_injected_original_dirname, "dist/style.css");
          if (existsSync(elementPlusStylePath)) {
            copyFileSync(elementPlusStylePath, distStylePath);
            console.log("\u2705 Element Plus \u6837\u5F0F\u6587\u4EF6\u5DF2\u590D\u5236\u5230 dist/style.css");
          } else {
            console.warn("\u26A0\uFE0F  Element Plus \u6837\u5F0F\u6587\u4EF6\u672A\u627E\u5230:", elementPlusStylePath);
          }
        }
      }
    ],
    build: {
      outDir: "dist",
      //输出文件名称
      lib: {
        entry: path.resolve(__vite_injected_original_dirname, "./packages/index.ts"),
        //指定组件编译入口文件
        name: "McProUILibrary",
        fileName: (format) => `index.${format === "es" ? "js" : "js"}`
      },
      //库编译模式配置
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ["vue", "element-plus"],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: "Vue",
            "element-plus": "ElementPlus"
          }
        }
      }
      // rollup打包配置
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./packages", __vite_injected_original_import_meta_url)),
        "@mc-markets/ui": fileURLToPath(new URL("./packages", __vite_injected_original_import_meta_url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 可以在这里添加全局 SCSS 变量，但避免循环依赖
        }
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidml0ZS9wbHVnaW5zL2luZGV4LnRzIiwgInZpdGUvcGx1Z2lucy9pbnNwZWN0b3IudHMiLCAidml0ZS9wbHVnaW5zL2F1dG8taW1wb3J0LnRzIiwgInZpdGUvcGx1Z2lucy9jb21wb25lbnRzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcY29kZVxcXFxucG0tbWMtbWFya2V0cy11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxucG0tbWMtbWFya2V0cy11aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9ucG0tbWMtbWFya2V0cy11aS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJub2RlOnVybFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgY3JlYXRlVml0ZVBsdWdpbnMgZnJvbSBcIi4vdml0ZS9wbHVnaW5zXCI7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgeyBjb3B5RmlsZVN5bmMsIGV4aXN0c1N5bmMgfSBmcm9tICdmcydcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgLi4uY3JlYXRlVml0ZVBsdWdpbnMoKSxcclxuICAgICAgZHRzKCksXHJcbiAgICAgIC8vIEVsZW1lbnQgUGx1cyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcclxuICAgICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcclxuICAgICAgICBpbXBvcnRzOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ10sXHJcbiAgICAgICAgZHRzOiB0cnVlLFxyXG4gICAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XHJcbiAgICAgICAgICAvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXHJcbiAgICAgICAgXSxcclxuICAgICAgfSksXHJcbiAgICAgIENvbXBvbmVudHMoe1xyXG4gICAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoe1xyXG4gICAgICAgICAgaW1wb3J0U3R5bGU6ICdzYXNzJ1xyXG4gICAgICAgIH0pXSxcclxuICAgICAgICBkdHM6IHRydWUsXHJcbiAgICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgICAgL1xcLlt0al1zeD8kLywgLy8gLnRzLCAudHN4LCAuanMsIC5qc3hcclxuICAgICAgICAgIC9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC8vIC52dWVcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgICAgLy8gXHU4MUVBXHU1QjlBXHU0RTQ5XHU2M0QyXHU0RUY2XHVGRjFBXHU1OTBEXHU1MjM2IEVsZW1lbnQgUGx1cyBcdTY4MzdcdTVGMEZcdTY1ODdcdTRFRjZcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdjb3B5LWVsZW1lbnQtcGx1cy1zdHlsZXMnLFxyXG4gICAgICAgIHdyaXRlQnVuZGxlKCkge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudFBsdXNTdHlsZVBhdGggPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbm9kZV9tb2R1bGVzL2VsZW1lbnQtcGx1cy9kaXN0L2luZGV4LmNzcycpXHJcbiAgICAgICAgICBjb25zdCBkaXN0U3R5bGVQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2Rpc3Qvc3R5bGUuY3NzJylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKGV4aXN0c1N5bmMoZWxlbWVudFBsdXNTdHlsZVBhdGgpKSB7XHJcbiAgICAgICAgICAgIGNvcHlGaWxlU3luYyhlbGVtZW50UGx1c1N0eWxlUGF0aCwgZGlzdFN0eWxlUGF0aClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1x1MjcwNSBFbGVtZW50IFBsdXMgXHU2ODM3XHU1RjBGXHU2NTg3XHU0RUY2XHU1REYyXHU1OTBEXHU1MjM2XHU1MjMwIGRpc3Qvc3R5bGUuY3NzJylcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignXHUyNkEwXHVGRTBGICBFbGVtZW50IFBsdXMgXHU2ODM3XHU1RjBGXHU2NTg3XHU0RUY2XHU2NzJBXHU2MjdFXHU1MjMwOicsIGVsZW1lbnRQbHVzU3R5bGVQYXRoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIG91dERpcjogXCJkaXN0XCIsIC8vXHU4RjkzXHU1MUZBXHU2NTg3XHU0RUY2XHU1NDBEXHU3OUYwXHJcbiAgICAgIGxpYjoge1xyXG4gICAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vcGFja2FnZXMvaW5kZXgudHNcIiksIC8vXHU2MzA3XHU1QjlBXHU3RUM0XHU0RUY2XHU3RjE2XHU4QkQxXHU1MTY1XHU1M0UzXHU2NTg3XHU0RUY2XHJcbiAgICAgICAgbmFtZTogXCJNY1Byb1VJTGlicmFyeVwiLFxyXG4gICAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXQgPT09ICdlcycgPyAnanMnIDogJ2pzJ31gLFxyXG4gICAgICB9LCAvL1x1NUU5M1x1N0YxNlx1OEJEMVx1NkEyMVx1NUYwRlx1OTE0RFx1N0Y2RVxyXG4gICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgLy8gXHU3ODZFXHU0RkREXHU1OTE2XHU5MEU4XHU1MzE2XHU1OTA0XHU3NDA2XHU5MEEzXHU0RTlCXHU0RjYwXHU0RTBEXHU2MEYzXHU2MjUzXHU1MzA1XHU4RkRCXHU1RTkzXHU3Njg0XHU0RjlEXHU4RDU2XHJcbiAgICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiLCBcImVsZW1lbnQtcGx1c1wiXSxcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIC8vIFx1NTcyOCBVTUQgXHU2Nzg0XHU1RUZBXHU2QTIxXHU1RjBGXHU0RTBCXHU0RTNBXHU4RkQ5XHU0RTlCXHU1OTE2XHU5MEU4XHU1MzE2XHU3Njg0XHU0RjlEXHU4RDU2XHU2M0QwXHU0RjlCXHU0RTAwXHU0RTJBXHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHJcbiAgICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICAgIHZ1ZTogXCJWdWVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50LXBsdXNcIjogXCJFbGVtZW50UGx1c1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LCAvLyByb2xsdXBcdTYyNTNcdTUzMDVcdTkxNERcdTdGNkVcclxuICAgIH0sXHJcblxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3BhY2thZ2VzXCIsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAgIFwiQG1jLW1hcmtldHMvdWlcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9wYWNrYWdlc1wiLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIGNzczoge1xyXG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nzczoge1xyXG4gICAgICAgICAgLy8gXHU1M0VGXHU0RUU1XHU1NzI4XHU4RkQ5XHU5MUNDXHU2REZCXHU1MkEwXHU1MTY4XHU1QzQwIFNDU1MgXHU1M0Q4XHU5MUNGXHVGRjBDXHU0RjQ2XHU5MDdGXHU1MTREXHU1RkFBXHU3M0FGXHU0RjlEXHU4RDU2XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcY29kZVxcXFxucG0tbWMtbWFya2V0cy11aVxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcbnBtLW1jLW1hcmtldHMtdWlcXFxcdml0ZVxcXFxwbHVnaW5zXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL25wbS1tYy1tYXJrZXRzLXVpL3ZpdGUvcGx1Z2lucy9pbmRleC50c1wiO2ltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB2dWVKc3ggZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZS1qc3hcIjtcclxuXHJcbmltcG9ydCBjcmVhdGVJbnNwZWN0b3IgZnJvbSBcIi4vaW5zcGVjdG9yXCI7XHJcbmltcG9ydCBjcmVhdGVBdXRvSW1wb3J0IGZyb20gXCIuL2F1dG8taW1wb3J0XCI7XHJcbmltcG9ydCBjcmVhdGVDb21wb25lbnRzIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVZpdGVQbHVnaW5zKCkge1xyXG4gIGNvbnN0IHZpdGVQbHVnaW5zOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPSBbdnVlKCksIHZ1ZUpzeCgpXTtcclxuICB2aXRlUGx1Z2lucy5wdXNoKGNyZWF0ZUluc3BlY3RvcigpKTtcclxuICB2aXRlUGx1Z2lucy5wdXNoKGNyZWF0ZUF1dG9JbXBvcnQoKSk7XHJcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVDb21wb25lbnRzKCkpO1xyXG4gIHJldHVybiB2aXRlUGx1Z2lucztcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcbnBtLW1jLW1hcmtldHMtdWlcXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXG5wbS1tYy1tYXJrZXRzLXVpXFxcXHZpdGVcXFxccGx1Z2luc1xcXFxpbnNwZWN0b3IudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvbnBtLW1jLW1hcmtldHMtdWkvdml0ZS9wbHVnaW5zL2luc3BlY3Rvci50c1wiO2ltcG9ydCBJbnNwZWN0b3IgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWluc3BlY3RvcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUluc3BlY3RvcigpIHtcclxuICByZXR1cm4gSW5zcGVjdG9yKClcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcbnBtLW1jLW1hcmtldHMtdWlcXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXG5wbS1tYy1tYXJrZXRzLXVpXFxcXHZpdGVcXFxccGx1Z2luc1xcXFxhdXRvLWltcG9ydC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9ucG0tbWMtbWFya2V0cy11aS92aXRlL3BsdWdpbnMvYXV0by1pbXBvcnQudHNcIjtpbXBvcnQgYXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXV0b0ltcG9ydCgpIHtcclxuICByZXR1cm4gYXV0b0ltcG9ydCh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICd2dWUnLFxyXG4gICAgICAndnVlLXJvdXRlcicsXHJcbiAgICAgICdwaW5pYScsXHJcbiAgICBdLFxyXG4gICAgZHRzOiAnLi9zcmMvdHlwZXMvYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgZGlyczogW1xyXG4gICAgICAnLi9zcmMvdXRpbHMvY29tcG9zYWJsZXMvKionLFxyXG4gICAgXSxcclxuICB9KVxyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcY29kZVxcXFxucG0tbWMtbWFya2V0cy11aVxcXFx2aXRlXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcbnBtLW1jLW1hcmtldHMtdWlcXFxcdml0ZVxcXFxwbHVnaW5zXFxcXGNvbXBvbmVudHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvbnBtLW1jLW1hcmtldHMtdWkvdml0ZS9wbHVnaW5zL2NvbXBvbmVudHMudHNcIjtpbXBvcnQgY29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xyXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50cygpIHtcclxuICByZXR1cm4gY29tcG9uZW50cyh7XHJcbiAgICBkaXJzOiBbXCJzcmMvY29tcG9uZW50c1wiXSxcclxuICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwudHN4JC9dLFxyXG4gICAgZHRzOiBcIi4vc3JjL3R5cGVzL2NvbXBvbmVudHMuZC50c1wiLFxyXG4gICAgLy8gcmVzb2x2ZXJzOiBbXHJcbiAgICAvLyAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoe1xyXG4gICAgLy8gICAgIGltcG9ydFN0eWxlOiBcInNhc3NcIixcclxuICAgIC8vICAgfSksXHJcbiAgICAvLyBdLCAvLyBFbGVtZW50UGx1c1x1NjMwOVx1OTcwMFx1NTJBMFx1OEY3RFxyXG4gIH0pO1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVEsU0FBUyxlQUFlLFdBQVc7QUFDdFMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVOzs7QUNEakIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTs7O0FDRnVSLE9BQU8sZUFBZTtBQUVqVCxTQUFSLGtCQUFtQztBQUN4QyxTQUFPLFVBQVU7QUFDbkI7OztBQ0o4UyxPQUFPLGdCQUFnQjtBQUV0VCxTQUFSLG1CQUFvQztBQUN6QyxTQUFPLFdBQVc7QUFBQSxJQUNoQixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7OztBQ2Q0UyxPQUFP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
