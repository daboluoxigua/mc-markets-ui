<template>
  <div class="tabs-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Tabs API"
      :props="tabsApiProps"
      props-title="Tabs Attributes"
      :events="tabsApiEvents"
      events-title="Tabs Events"
      :slots="tabsApiSlots"
      slots-title="Tabs Slots"
      :exposes="tabsApiExposes"
      exposes-title="Tabs Exposes"
    />

    <ApiDocs
      title="Tab-pane API"
      :props="tabPaneApiProps"
      props-title="Tab-pane Attributes"
      :events="tabPaneApiEvents"
      events-title="Tab-pane Events"
      :slots="tabPaneApiSlots"
      slots-title="Tab-pane Slots"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";

const sections = [Basic];

const tabsApiProps = [
  {
    name: "model-value / v-model",
    type: "string / number",
    default: "—",
    description: "绑定值，选中选项卡的 name，默认值是第一个 tab 的 name",
  },
  {
    name: "closable",
    type: "boolean",
    default: "false",
    description: "标签是否可关闭",
  },
];

const tabsApiEvents = [
  {
    name: "tab-click",
    description: "tab 被选中时触发",
    params: "tabName: string | number",
  },
  {
    name: "tab-change",
    description: "activeName 改变时触发",
    params: "newValue: string | number, oldValue: string | number",
  },
  {
    name: "tab-remove",
    description: "点击 tab 移除按钮时触发",
    params: "tabName: string | number",
  },
  {
    name: "tab-add",
    description: "点击 tab 新增按钮时触发",
    params: "—",
  },
  {
    name: "edit",
    description: "点击 tab 的新增或移除按钮后触发",
    params: 'tabName: string | number | null, action: "add" | "remove"',
  },
];

const tabsApiSlots = [
  {
    name: "default",
    description: "默认插槽",
    subTags: "Tab-pane",
  },
];

const tabsApiExposes = [
  {
    name: "activeTab",
    description: "当前活动的面板名称",
    type: "Ref<string | number>",
  },
  {
    name: "tabs",
    description: "所有注册的 tab 信息",
    type: "Ref<Array>",
  },
  {
    name: "handleTabClick",
    description: "处理 tab 点击的方法",
    type: "Function",
  },
  {
    name: "handleTabRemove",
    description: "处理 tab 移除的方法",
    type: "Function",
  },
  {
    name: "handleTabAdd",
    description: "处理 tab 添加的方法",
    type: "Function",
  },
  {
    name: "updateActiveBarPosition",
    description: "更新活动条位置的方法",
    type: "Function",
  },
];

const tabPaneApiProps = [
  {
    name: "label",
    type: "string",
    default: "''",
    description: "选项卡标题",
  },
  {
    name: "name",
    type: "string / number",
    default: "—",
    description:
      "与选项卡绑定值 value 对应的标识符，表示选项卡别名。默认值是 tab 面板的序列号，如第一个 tab 是 0",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "closable",
    type: "boolean",
    default: "false",
    description: "标签是否可关闭",
  },
];

const tabPaneApiEvents = [];

const tabPaneApiSlots = [
  {
    name: "default",
    description: "Tab-pane 的内容",
  },
];
</script>

<style scoped lang="scss">
.tabs-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
