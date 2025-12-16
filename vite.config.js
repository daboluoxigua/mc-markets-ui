import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import path from "path";
import createVitePlugins from "./vite/plugins";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  const isDev = command === 'serve'
  const isLib = mode === 'lib'
  
  return defineConfig({
    plugins: [
      ...createVitePlugins(),
      ...(isLib ? [
        dts({
          insertTypesEntry: true,
          copyDtsFiles: true,
          include: ["packages/**/*"],
          exclude: ["src/**/*", "**/*.stories.*", "**/*.test.*"],
        })
      ] : [])
    ],
    server: {
      hmr: {
        overlay: false
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api', 'if-function'],
          // 确保自定义样式优先级
          additionalData: `
            // 提高自定义样式优先级
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
            postcssPlugin: 'increase-specificity',
            Rule(rule) {
              // 为自定义样式增加权重
              if (rule.selector && rule.selector.includes('.el-')) {
                rule.selector = rule.selector
                  .split(',')
                  .map(selector => {
                    const trimmed = selector.trim();
                    // 为 Element Plus 选择器增加权重
                    if (trimmed.startsWith('.el-')) {
                      return `.mc-ui-override ${trimmed}`;
                    }
                    return trimmed;
                  })
                  .join(', ');
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
      minify: 'esbuild',
      lib: {
        entry: {
          index: path.resolve(__dirname, "./packages/index.js"),
        },
        name: "McMarketsUI",
        formats: ['es', 'cjs'],
      },
      rollupOptions: {
        external: [
          'vue',
          'element-plus',
          /^vue\/.*/,
          /^element-plus\/.*/
        ],
        output: [
          {
            format: 'es',
            entryFileNames: '[name].mjs',
            chunkFileNames: '[name]-[hash].mjs',
            assetFileNames: '[name].[ext]',
            exports: 'named',
            preserveModules: false,
          },
          {
            format: 'cjs',
            entryFileNames: '[name].cjs',
            chunkFileNames: '[name]-[hash].cjs',
            assetFileNames: '[name].[ext]',
            exports: 'named',
          }
        ],
      },
      target: 'es2015',
      reportCompressedSize: false,
    } : undefined,

    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@packages": fileURLToPath(new URL("./packages", import.meta.url)),
        "@mc-markets/ui": fileURLToPath(new URL("./packages", import.meta.url))
      },
    },
  });
};
