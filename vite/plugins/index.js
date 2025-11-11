import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import createInspector from "./inspector";
import createAutoImport from "./auto-import";
import createComponents from "./components";
import createDemoPlugin from "./demo-plugin";

export default function createVitePlugins() {
  const vitePlugins = [vue(), vueJsx()];
  vitePlugins.push(createInspector());
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createComponents());
  vitePlugins.push(createDemoPlugin());
  return vitePlugins;
}
