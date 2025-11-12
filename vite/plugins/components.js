import components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VantResolver } from '@vant/auto-import-resolver';

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
      VantResolver(),
    ], // ElementPlus按需加载
  });
}
