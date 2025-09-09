import type { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import createInspector from "./inspector";
import createAutoImport from "./auto-import";
import createComponents from "./components";

export default function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()];
  vitePlugins.push(createInspector());
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createComponents());
  return vitePlugins;
}
