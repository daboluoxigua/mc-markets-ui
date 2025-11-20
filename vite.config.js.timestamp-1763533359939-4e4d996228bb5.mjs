// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/code/npm-mc-markets-ui/node_modules/vite/dist/node/index.js";
import path from "path";

// vite/plugins/index.js
import vue from "file:///D:/code/npm-mc-markets-ui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/code/npm-mc-markets-ui/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";

// vite/plugins/inspector.js
import Inspector from "file:///D:/code/npm-mc-markets-ui/node_modules/vite-plugin-vue-inspector/dist/index.mjs";
function createInspector() {
  if (process.env.NODE_ENV === "development" && process.env.VUE_INSPECTOR === "true") {
    return Inspector({
      // 减少性能开销
      enabled: true
    });
  }
  return null;
}

// vite/plugins/auto-import.js
import autoImport from "file:///D:/code/npm-mc-markets-ui/node_modules/unplugin-auto-import/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/code/npm-mc-markets-ui/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { VantResolver } from "file:///D:/code/npm-mc-markets-ui/node_modules/@vant/auto-import-resolver/dist/index.js";
function createAutoImport() {
  return autoImport({
    imports: [
      "vue",
      "vue-router",
      "pinia"
    ],
    resolvers: [ElementPlusResolver(), VantResolver()],
    dirs: [
      "./src/utils/composables/**"
    ],
    // 禁用 TypeScript 声明文件生成
    dts: false,
    // 开发环境优化
    ...process.env.NODE_ENV === "development" && {
      // 减少文件监听
      cache: true,
      // 禁用不必要的功能
      vueTemplate: false
    }
  });
}

// vite/plugins/components.js
import components from "file:///D:/code/npm-mc-markets-ui/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver as ElementPlusResolver2 } from "file:///D:/code/npm-mc-markets-ui/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import { VantResolver as VantResolver2 } from "file:///D:/code/npm-mc-markets-ui/node_modules/@vant/auto-import-resolver/dist/index.js";
function createComponents() {
  return components({
    dirs: ["src/components"],
    include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/],
    // 禁用 TypeScript 声明文件生成
    dts: false,
    resolvers: [
      ElementPlusResolver2({
        importStyle: "sass"
      }),
      VantResolver2()
    ]
    // ElementPlus按需加载
  });
}

// vite/plugins/demo-plugin.js
import fs from "node:fs";
import { baseParse } from "file:///D:/code/npm-mc-markets-ui/node_modules/@vue/compiler-core/index.js";
import { marked } from "file:///D:/code/npm-mc-markets-ui/node_modules/marked/lib/marked.esm.js";
var demo_plugin_default = () => {
  return {
    name: "vite-plugin-demo",
    transform: (code, path2) => {
      if (!/vue&type=demo/.test(path2)) {
        return;
      }
      const filePath = path2.split("?")[0];
      const file = fs.readFileSync(filePath).toString();
      const parsed = baseParse(file).children.find((n) => n.tag === "demo");
      const sourceCode = file.split(parsed.loc.source).join("").trim().replace(/<!--\s?#(end)?region\s?snippet\s-->\n?/g, "");
      const [, title, description] = marked.parse(parsed.children[0].loc.source).match(/^<h\d>([^<]*)<\/h\d>([\s\S]*)/);
      return `export default Comp => {
        Comp.code = ${JSON.stringify(sourceCode)}
        Comp.title = ${JSON.stringify(title)}
        Comp.description = ${JSON.stringify(description)}
      }`;
    }
  };
};

// vite/plugins/index.js
function createVitePlugins() {
  const vitePlugins = [vue(), vueJsx()];
  vitePlugins.push(createInspector());
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createComponents());
  vitePlugins.push(demo_plugin_default());
  return vitePlugins;
}

// vite.config.js
import dts from "file:///D:/code/npm-mc-markets-ui/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\code\\npm-mc-markets-ui";
var __vite_injected_original_import_meta_url = "file:///D:/code/npm-mc-markets-ui/vite.config.js";
var vite_config_default = ({ command, mode }) => {
  const isDev = command === "serve";
  const isLib = mode === "lib";
  return defineConfig({
    plugins: [
      ...createVitePlugins(),
      ...isLib ? [
        dts({
          insertTypesEntry: true,
          copyDtsFiles: true,
          include: ["packages/**/*"],
          exclude: ["src/**/*", "**/*.stories.*", "**/*.test.*"]
        })
      ] : []
    ],
    server: {
      hmr: {
        overlay: false
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"],
          // 确保自定义样式优先级
          additionalData: `
            // \u63D0\u9AD8\u81EA\u5B9A\u4E49\u6837\u5F0F\u4F18\u5148\u7EA7
            @use "sass:math";
            @use "sass:map";
            @use "sass:list";
          `
        }
      },
      // 确保组件样式优先级
      postcss: {
        plugins: [
          // 增加样式优先级的 PostCSS 插件
          {
            postcssPlugin: "increase-specificity",
            Rule(rule) {
              if (rule.selector && rule.selector.includes(".el-")) {
                rule.selector = rule.selector.split(",").map((selector) => {
                  const trimmed = selector.trim();
                  if (trimmed.startsWith(".el-")) {
                    return `.mc-ui-override ${trimmed}`;
                  }
                  return trimmed;
                }).join(", ");
              }
            }
          }
        ]
      }
    },
    build: isLib ? {
      outDir: "dist",
      cssCodeSplit: false,
      sourcemap: true,
      minify: "esbuild",
      lib: {
        entry: {
          index: path.resolve(__vite_injected_original_dirname, "./packages/index.js")
        },
        name: "McMarketsUI",
        formats: ["es", "cjs"]
      },
      rollupOptions: {
        external: [
          "vue",
          "element-plus",
          /^vue\/.*/,
          /^element-plus\/.*/
        ],
        output: [
          {
            format: "es",
            entryFileNames: "[name].mjs",
            chunkFileNames: "[name]-[hash].mjs",
            assetFileNames: "[name].[ext]",
            exports: "named",
            preserveModules: false
          },
          {
            format: "cjs",
            entryFileNames: "[name].cjs",
            chunkFileNames: "[name]-[hash].cjs",
            assetFileNames: "[name].[ext]",
            exports: "named"
          }
        ]
      },
      target: "es2015",
      reportCompressedSize: false
    } : void 0,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
        "@packages": fileURLToPath(new URL("./packages", __vite_injected_original_import_meta_url)),
        "@mc-markets/ui": fileURLToPath(new URL("./packages", __vite_injected_original_import_meta_url))
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAidml0ZS9wbHVnaW5zL2luZGV4LmpzIiwgInZpdGUvcGx1Z2lucy9pbnNwZWN0b3IuanMiLCAidml0ZS9wbHVnaW5zL2F1dG8taW1wb3J0LmpzIiwgInZpdGUvcGx1Z2lucy9jb21wb25lbnRzLmpzIiwgInZpdGUvcGx1Z2lucy9kZW1vLXBsdWdpbi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcbnBtLW1jLW1hcmtldHMtdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcbnBtLW1jLW1hcmtldHMtdWlcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvbnBtLW1jLW1hcmtldHMtdWkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGNyZWF0ZVZpdGVQbHVnaW5zIGZyb20gXCIuL3ZpdGUvcGx1Z2luc1wiO1xyXG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0ICh7IGNvbW1hbmQsIG1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGlzRGV2ID0gY29tbWFuZCA9PT0gJ3NlcnZlJ1xyXG4gIGNvbnN0IGlzTGliID0gbW9kZSA9PT0gJ2xpYidcclxuICBcclxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgLi4uY3JlYXRlVml0ZVBsdWdpbnMoKSxcclxuICAgICAgLi4uKGlzTGliID8gW1xyXG4gICAgICAgIGR0cyh7XHJcbiAgICAgICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxyXG4gICAgICAgICAgY29weUR0c0ZpbGVzOiB0cnVlLFxyXG4gICAgICAgICAgaW5jbHVkZTogW1wicGFja2FnZXMvKiovKlwiXSxcclxuICAgICAgICAgIGV4Y2x1ZGU6IFtcInNyYy8qKi8qXCIsIFwiKiovKi5zdG9yaWVzLipcIiwgXCIqKi8qLnRlc3QuKlwiXSxcclxuICAgICAgICB9KVxyXG4gICAgICBdIDogW10pXHJcbiAgICBdLFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIGhtcjoge1xyXG4gICAgICAgIG92ZXJsYXk6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjc3M6IHtcclxuICAgICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICAgIHNjc3M6IHtcclxuICAgICAgICAgIHNpbGVuY2VEZXByZWNhdGlvbnM6IFsnbGVnYWN5LWpzLWFwaSddLFxyXG4gICAgICAgICAgLy8gXHU3ODZFXHU0RkREXHU4MUVBXHU1QjlBXHU0RTQ5XHU2ODM3XHU1RjBGXHU0RjE4XHU1MTQ4XHU3RUE3XHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYFxyXG4gICAgICAgICAgICAvLyBcdTYzRDBcdTlBRDhcdTgxRUFcdTVCOUFcdTRFNDlcdTY4MzdcdTVGMEZcdTRGMThcdTUxNDhcdTdFQTdcclxuICAgICAgICAgICAgQHVzZSBcInNhc3M6bWF0aFwiO1xyXG4gICAgICAgICAgICBAdXNlIFwic2FzczptYXBcIjtcclxuICAgICAgICAgICAgQHVzZSBcInNhc3M6bGlzdFwiO1xyXG4gICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8gXHU3ODZFXHU0RkREXHU3RUM0XHU0RUY2XHU2ODM3XHU1RjBGXHU0RjE4XHU1MTQ4XHU3RUE3XHJcbiAgICAgIHBvc3Rjc3M6IHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAvLyBcdTU4OUVcdTUyQTBcdTY4MzdcdTVGMEZcdTRGMThcdTUxNDhcdTdFQTdcdTc2ODQgUG9zdENTUyBcdTYzRDJcdTRFRjZcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcG9zdGNzc1BsdWdpbjogJ2luY3JlYXNlLXNwZWNpZmljaXR5JyxcclxuICAgICAgICAgICAgUnVsZShydWxlKSB7XHJcbiAgICAgICAgICAgICAgLy8gXHU0RTNBXHU4MUVBXHU1QjlBXHU0RTQ5XHU2ODM3XHU1RjBGXHU1ODlFXHU1MkEwXHU2NzQzXHU5MUNEXHJcbiAgICAgICAgICAgICAgaWYgKHJ1bGUuc2VsZWN0b3IgJiYgcnVsZS5zZWxlY3Rvci5pbmNsdWRlcygnLmVsLScpKSB7XHJcbiAgICAgICAgICAgICAgICBydWxlLnNlbGVjdG9yID0gcnVsZS5zZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAuc3BsaXQoJywnKVxyXG4gICAgICAgICAgICAgICAgICAubWFwKHNlbGVjdG9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmltbWVkID0gc2VsZWN0b3IudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFx1NEUzQSBFbGVtZW50IFBsdXMgXHU5MDA5XHU2MkU5XHU1NjY4XHU1ODlFXHU1MkEwXHU2NzQzXHU5MUNEXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyaW1tZWQuc3RhcnRzV2l0aCgnLmVsLScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYC5tYy11aS1vdmVycmlkZSAke3RyaW1tZWR9YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyaW1tZWQ7XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcsICcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiBpc0xpYiA/IHtcclxuICAgICAgb3V0RGlyOiBcImRpc3RcIixcclxuICAgICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcclxuICAgICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgICBtaW5pZnk6ICdlc2J1aWxkJyxcclxuICAgICAgbGliOiB7XHJcbiAgICAgICAgZW50cnk6IHtcclxuICAgICAgICAgIGluZGV4OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vcGFja2FnZXMvaW5kZXguanNcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuYW1lOiBcIk1jTWFya2V0c1VJXCIsXHJcbiAgICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcclxuICAgICAgfSxcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgICAndnVlJyxcclxuICAgICAgICAgICdlbGVtZW50LXBsdXMnLFxyXG4gICAgICAgICAgL152dWVcXC8uKi8sXHJcbiAgICAgICAgICAvXmVsZW1lbnQtcGx1c1xcLy4qL1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3V0cHV0OiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcm1hdDogJ2VzJyxcclxuICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0ubWpzJyxcclxuICAgICAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdbbmFtZV0tW2hhc2hdLm1qcycsXHJcbiAgICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnW25hbWVdLltleHRdJyxcclxuICAgICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcclxuICAgICAgICAgICAgcHJlc2VydmVNb2R1bGVzOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvcm1hdDogJ2NqcycsXHJcbiAgICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmNqcycsXHJcbiAgICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiAnW25hbWVdLVtoYXNoXS5janMnLFxyXG4gICAgICAgICAgICBhc3NldEZpbGVOYW1lczogJ1tuYW1lXS5bZXh0XScsXHJcbiAgICAgICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgdGFyZ2V0OiAnZXMyMDE1JyxcclxuICAgICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxyXG4gICAgfSA6IHVuZGVmaW5lZCxcclxuXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAgIFwiQHBhY2thZ2VzXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vcGFja2FnZXNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgICAgXCJAbWMtbWFya2V0cy91aVwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3BhY2thZ2VzXCIsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcbnBtLW1jLW1hcmtldHMtdWlcXFxcdml0ZVxcXFxwbHVnaW5zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXG5wbS1tYy1tYXJrZXRzLXVpXFxcXHZpdGVcXFxccGx1Z2luc1xcXFxpbmRleC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9ucG0tbWMtbWFya2V0cy11aS92aXRlL3BsdWdpbnMvaW5kZXguanNcIjtpbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xyXG5cclxuaW1wb3J0IGNyZWF0ZUluc3BlY3RvciBmcm9tIFwiLi9pbnNwZWN0b3JcIjtcclxuaW1wb3J0IGNyZWF0ZUF1dG9JbXBvcnQgZnJvbSBcIi4vYXV0by1pbXBvcnRcIjtcclxuaW1wb3J0IGNyZWF0ZUNvbXBvbmVudHMgZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgY3JlYXRlRGVtb1BsdWdpbiBmcm9tIFwiLi9kZW1vLXBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVml0ZVBsdWdpbnMoKSB7XHJcbiAgY29uc3Qgdml0ZVBsdWdpbnMgPSBbdnVlKCksIHZ1ZUpzeCgpXTtcclxuICB2aXRlUGx1Z2lucy5wdXNoKGNyZWF0ZUluc3BlY3RvcigpKTtcclxuICB2aXRlUGx1Z2lucy5wdXNoKGNyZWF0ZUF1dG9JbXBvcnQoKSk7XHJcbiAgdml0ZVBsdWdpbnMucHVzaChjcmVhdGVDb21wb25lbnRzKCkpO1xyXG4gIHZpdGVQbHVnaW5zLnB1c2goY3JlYXRlRGVtb1BsdWdpbigpKTtcclxuICByZXR1cm4gdml0ZVBsdWdpbnM7XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXG5wbS1tYy1tYXJrZXRzLXVpXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxucG0tbWMtbWFya2V0cy11aVxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcaW5zcGVjdG9yLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL25wbS1tYy1tYXJrZXRzLXVpL3ZpdGUvcGx1Z2lucy9pbnNwZWN0b3IuanNcIjtpbXBvcnQgSW5zcGVjdG9yIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1pbnNwZWN0b3InXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbnNwZWN0b3IoKSB7XHJcbiAgLy8gXHU1M0VBXHU1NzI4XHU1RjAwXHU1M0QxXHU3M0FGXHU1ODgzXHU0RTE0XHU4QkJFXHU3RjZFXHU0RTg2XHU3M0FGXHU1ODgzXHU1M0Q4XHU5MUNGXHU2NUY2XHU1NDJGXHU3NTI4IEluc3BlY3RvclxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiBwcm9jZXNzLmVudi5WVUVfSU5TUEVDVE9SID09PSAndHJ1ZScpIHtcclxuICAgIHJldHVybiBJbnNwZWN0b3Ioe1xyXG4gICAgICAvLyBcdTUxQ0ZcdTVDMTFcdTYwMjdcdTgwRkRcdTVGMDBcdTk1MDBcclxuICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXG5wbS1tYy1tYXJrZXRzLXVpXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxucG0tbWMtbWFya2V0cy11aVxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcYXV0by1pbXBvcnQuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvbnBtLW1jLW1hcmtldHMtdWkvdml0ZS9wbHVnaW5zL2F1dG8taW1wb3J0LmpzXCI7aW1wb3J0IGF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcclxuaW1wb3J0IHsgVmFudFJlc29sdmVyIH0gZnJvbSAnQHZhbnQvYXV0by1pbXBvcnQtcmVzb2x2ZXInO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBdXRvSW1wb3J0KCkge1xyXG4gIHJldHVybiBhdXRvSW1wb3J0KHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgJ3Z1ZScsXHJcbiAgICAgICd2dWUtcm91dGVyJyxcclxuICAgICAgJ3BpbmlhJyxcclxuICAgIF0sXHJcbiAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCksIFZhbnRSZXNvbHZlcigpXSxcclxuICAgIGRpcnM6IFtcclxuICAgICAgJy4vc3JjL3V0aWxzL2NvbXBvc2FibGVzLyoqJyxcclxuICAgIF0sXHJcbiAgICAvLyBcdTc5ODFcdTc1MjggVHlwZVNjcmlwdCBcdTU4RjBcdTY2MEVcdTY1ODdcdTRFRjZcdTc1MUZcdTYyMTBcclxuICAgIGR0czogZmFsc2UsXHJcbiAgICAvLyBcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcdTRGMThcdTUzMTZcclxuICAgIC4uLihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiB7XHJcbiAgICAgIC8vIFx1NTFDRlx1NUMxMVx1NjU4N1x1NEVGNlx1NzZEMVx1NTQyQ1xyXG4gICAgICBjYWNoZTogdHJ1ZSxcclxuICAgICAgLy8gXHU3OTgxXHU3NTI4XHU0RTBEXHU1RkM1XHU4OTgxXHU3Njg0XHU1MjlGXHU4MEZEXHJcbiAgICAgIHZ1ZVRlbXBsYXRlOiBmYWxzZSxcclxuICAgIH0pLFxyXG4gIH0pXHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXG5wbS1tYy1tYXJrZXRzLXVpXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxucG0tbWMtbWFya2V0cy11aVxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcY29tcG9uZW50cy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS9ucG0tbWMtbWFya2V0cy11aS92aXRlL3BsdWdpbnMvY29tcG9uZW50cy5qc1wiO2ltcG9ydCBjb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XHJcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ0B2YW50L2F1dG8taW1wb3J0LXJlc29sdmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudHMoKSB7XHJcbiAgcmV0dXJuIGNvbXBvbmVudHMoe1xyXG4gICAgZGlyczogW1wic3JjL2NvbXBvbmVudHNcIl0sXHJcbiAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgL1xcLmpzeCQvXSxcclxuICAgIC8vIFx1Nzk4MVx1NzUyOCBUeXBlU2NyaXB0IFx1NThGMFx1NjYwRVx1NjU4N1x1NEVGNlx1NzUxRlx1NjIxMFxyXG4gICAgZHRzOiBmYWxzZSxcclxuICAgIHJlc29sdmVyczogW1xyXG4gICAgICBFbGVtZW50UGx1c1Jlc29sdmVyKHtcclxuICAgICAgICBpbXBvcnRTdHlsZTogXCJzYXNzXCIsXHJcbiAgICAgIH0pLFxyXG4gICAgICBWYW50UmVzb2x2ZXIoKSxcclxuICAgIF0sIC8vIEVsZW1lbnRQbHVzXHU2MzA5XHU5NzAwXHU1MkEwXHU4RjdEXHJcbiAgfSk7XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXG5wbS1tYy1tYXJrZXRzLXVpXFxcXHZpdGVcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFxucG0tbWMtbWFya2V0cy11aVxcXFx2aXRlXFxcXHBsdWdpbnNcXFxcZGVtby1wbHVnaW4uanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvbnBtLW1jLW1hcmtldHMtdWkvdml0ZS9wbHVnaW5zL2RlbW8tcGx1Z2luLmpzXCI7aW1wb3J0IGZzIGZyb20gJ25vZGU6ZnMnXHJcbmltcG9ydCB7IGJhc2VQYXJzZSB9IGZyb20gJ0B2dWUvY29tcGlsZXItY29yZSdcclxuXHJcbmltcG9ydCB7IG1hcmtlZCB9IGZyb20gJ21hcmtlZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWRlbW8nLFxyXG4gICAgICAgIHRyYW5zZm9ybTogKGNvZGUsIHBhdGgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCEvdnVlJnR5cGU9ZGVtby8udGVzdChwYXRoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLnNwbGl0KCc/JylbMF1cclxuICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBiYXNlUGFyc2UoZmlsZSkuY2hpbGRyZW4uZmluZChuID0+IG4udGFnID09PSAnZGVtbycpXHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUNvZGUgPSBmaWxlXHJcbiAgICAgICAgICAgICAgICAuc3BsaXQocGFyc2VkLmxvYy5zb3VyY2UpXHJcbiAgICAgICAgICAgICAgICAuam9pbignJylcclxuICAgICAgICAgICAgICAgIC50cmltKClcclxuXHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPCEtLVxccz8jKGVuZCk/cmVnaW9uXFxzP3NuaXBwZXRcXHMtLT5cXG4/L2csICcnKVxyXG4gICAgICAgICAgICBjb25zdCBbLCB0aXRsZSwgZGVzY3JpcHRpb25dID0gbWFya2VkXHJcbiAgICAgICAgICAgICAgICAucGFyc2UocGFyc2VkLmNoaWxkcmVuWzBdLmxvYy5zb3VyY2UpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2goL148aFxcZD4oW148XSopPFxcL2hcXGQ+KFtcXHNcXFNdKikvKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGBleHBvcnQgZGVmYXVsdCBDb21wID0+IHtcclxuICAgICAgICBDb21wLmNvZGUgPSAke0pTT04uc3RyaW5naWZ5KHNvdXJjZUNvZGUpfVxyXG4gICAgICAgIENvbXAudGl0bGUgPSAke0pTT04uc3RyaW5naWZ5KHRpdGxlKX1cclxuICAgICAgICBDb21wLmRlc2NyaXB0aW9uID0gJHtKU09OLnN0cmluZ2lmeShkZXNjcmlwdGlvbil9XHJcbiAgICAgIH1gXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVEsU0FBUyxlQUFlLFdBQVc7QUFDdFMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVOzs7QUNGaVIsT0FBTyxTQUFTO0FBQ2xULE9BQU8sWUFBWTs7O0FDRHVSLE9BQU8sZUFBZTtBQUVqVCxTQUFSLGtCQUFtQztBQUV4QyxNQUFJLFFBQVEsSUFBSSxhQUFhLGlCQUFpQixRQUFRLElBQUksa0JBQWtCLFFBQVE7QUFDbEYsV0FBTyxVQUFVO0FBQUE7QUFBQSxNQUVmLFNBQVM7QUFBQSxJQUNYLENBQUM7QUFBQSxFQUNIO0FBQ0EsU0FBTztBQUNUOzs7QUNYOFMsT0FBTyxn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QUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLFFBQVE7QUFBQSxZQUNSLGdCQUFnQjtBQUFBLFlBQ2hCLGdCQUFnQjtBQUFBLFlBQ2hCLGdCQUFnQjtBQUFBLFlBQ2hCLFNBQVM7QUFBQSxZQUNULGlCQUFpQjtBQUFBLFVBQ25CO0FBQUEsVUFDQTtBQUFBLFlBQ0UsUUFBUTtBQUFBLFlBQ1IsZ0JBQWdCO0FBQUEsWUFDaEIsZ0JBQWdCO0FBQUEsWUFDaEIsZ0JBQWdCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLE1BQ1Isc0JBQXNCO0FBQUEsSUFDeEIsSUFBSTtBQUFBLElBRUosU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxRQUNwRCxhQUFhLGNBQWMsSUFBSSxJQUFJLGNBQWMsd0NBQWUsQ0FBQztBQUFBLFFBQ2pFLGtCQUFrQixjQUFjLElBQUksSUFBSSxjQUFjLHdDQUFlLENBQUM7QUFBQSxNQUN4RTtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFsiRWxlbWVudFBsdXNSZXNvbHZlciIsICJWYW50UmVzb2x2ZXIiLCAiRWxlbWVudFBsdXNSZXNvbHZlciIsICJWYW50UmVzb2x2ZXIiLCAicGF0aCJdCn0K
