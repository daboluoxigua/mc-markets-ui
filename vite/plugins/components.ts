import components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default function createComponents() {
  return components({
    dirs: ["src/components"],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: "./src/types/components.d.ts",
    resolvers: [
      ElementPlusResolver({
        importStyle: "sass",
        // 开发环境优化：减少解析开销
        ...(process.env.NODE_ENV === 'development' && {
          directives: false, // 禁用指令自动导入
        }),
      }),
    ], // ElementPlus按需加载
    // 开发环境优化
    ...(process.env.NODE_ENV === 'development' && {
      // 启用缓存减少重复解析
      cache: true,
      // 减少文件监听范围
      deep: false,
    }),
  });
}
