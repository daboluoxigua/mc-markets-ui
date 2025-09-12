import components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default function createComponents() {
  return components({
    dirs: ["src/components"],
    include: [/\.vue$/, /\.vue\?vue/, /\.jsx$/],
    // 禁用 TypeScript 声明文件生成
    dts: false,
    resolvers: [
      ElementPlusResolver({
        importStyle: "sass",
      }),
    ], // ElementPlus按需加载
  });
}
