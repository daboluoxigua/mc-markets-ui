<template>
  <div class="tab-card-page">
    <div class="page-header">
      <h1>TabCard 标签卡片</h1>
      <p>类似图片中显示的标签卡片组件，支持切换功能</p>
    </div>

    <DemoSection :component="sections" />

    <ApiDocs
      title="TabCard API"
      :props="tabCardApiProps"
      props-title="TabCard Props"
      :events="tabCardApiEvents"
      events-title="TabCard Events"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import Disabled from "./components/disabled.vue";

const sections = [Basic, Disabled];

const tabCardApiProps = [
  {
    name: "modelValue / v-model",
    description: "绑定值，当前激活的标签名称",
    type: "string | number",
    default: "''",
  },
  {
    name: "disabled",
    description: "是否禁用整个组件",
    type: "boolean",
    default: "false",
  },
  {
    name: "options",
    description: "标签选项数组",
    type: "Array<{label: string, name: string, disabled?: boolean}>",
    default: "[]",
  },
];

const tabCardApiEvents = [
  {
    name: "update:modelValue",
    description: "绑定值变化时触发",
    params: "(value: string | number)",
  },
  {
    name: "change",
    description: "标签切换时触发",
    params: "(newValue: string | number, oldValue: string | number)",
  },
  {
    name: "tab-click",
    description: "标签被点击时触发",
    params: "(tabName: string | number)",
  },
];
</script>

<style scoped lang="scss">


</style>
