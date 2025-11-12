<template>
  <div class="switch-page">
    <DemoSection
      title="Switch 示例"
      :component="sections"
    />

    <ApiDocs
      title="Switch API"
      :props="switchApiProps"
      props-title="Switch Attributes"
      :events="switchApiEvents"
      events-title="Switch Events"
      :slots="switchApiSlots"
      slots-title="Switch Slots"
      :exposes="switchApiExposes"
      exposes-title="Switch Exposes"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import Size from "./components/size.vue";
import Text from "./components/text.vue";
import Icons from "./components/icons.vue";
import ValueType from "./components/valueType.vue";
import Disabled from "./components/disabled.vue";
import Loading from "./components/loading.vue";
import BeforeChange from "./components/beforeChange.vue";
import ActionIcon from "./components/actionIcon.vue";
import ActionSlot from "./components/actionSlot.vue";

const sections = [
  Basic,
  Size,
  Text,
  Icons,
  ValueType,
  Disabled,
  Loading,
  BeforeChange,
  ActionIcon,
  ActionSlot,
];

const switchApiProps = [
  {
    name: "model-value / v-model",
    type: "boolean / string / number",
    default: "false",
    description: "绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "是否显示加载中",
  },
  {
    name: "size",
    type: "enum",
    default: "''",
    description: "switch 的大小",
  },
  {
    name: "width",
    type: "number / string",
    default: "''",
    description: "switch 的宽度",
  },
  {
    name: "inline-prompt",
    type: "boolean",
    default: "false",
    description: "无论图标或文本是否显示在点内，只会呈现文本的第一个字符",
  },
  {
    name: "active-icon",
    type: "string / Component",
    default: "—",
    description: "switch 状态为 on 时所显示图标，设置此项会忽略 active-text",
  },
  {
    name: "inactive-icon",
    type: "string / Component",
    default: "—",
    description: "switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text",
  },
  {
    name: "active-action-icon",
    type: "string / Component",
    default: "—",
    description: "on状态下显示的图标组件",
    version: "2.3.9",
  },
  {
    name: "inactive-action-icon",
    type: "string / Component",
    default: "—",
    description: "off状态下显示的图标组件",
    version: "2.3.9",
  },
  {
    name: "active-text",
    type: "string",
    default: "''",
    description: "switch 打开时的文字描述",
  },
  {
    name: "inactive-text",
    type: "string",
    default: "''",
    description: "switch 的状态为 off 时的文字描述",
  },
  {
    name: "active-value",
    type: "boolean / string / number",
    default: "true",
    description: "switch 状态为 on 时的值",
  },
  {
    name: "inactive-value",
    type: "boolean / string / number",
    default: "false",
    description: "switch的状态为 off 时的值",
  },
  {
    name: "name",
    type: "string",
    default: "''",
    description: "switch 对应的 name 属性",
  },
  {
    name: "validate-event",
    type: "boolean",
    default: "true",
    description: "是否触发表单验证",
  },
  {
    name: "before-change",
    type: "Function",
    default: "—",
    description: "switch 状态改变前的钩子，返回 false 或 Promise reject 则停止切换",
  },
  {
    name: "id",
    type: "string",
    default: "—",
    description: "input 的 id",
  },
  {
    name: "tabindex",
    type: "string / number",
    default: "—",
    description: "input 的 tabindex",
  },
  {
    name: "aria-label",
    type: "string",
    default: "—",
    description: "等价于原生 input aria-label 属性",
    version: "2.7.2",
  },
  {
    name: "active-color",
    type: "string",
    default: "''",
    description: "当在 on 状态时的背景颜色(推荐使用 CSS var --el-switch-on-color )",
    deprecated: true,
  },
  {
    name: "inactive-color",
    type: "string",
    default: "''",
    description: "off 状态时的背景颜色(推荐使用 CSS var --el-switch-off-color )",
    deprecated: true,
  },
  {
    name: "border-color",
    type: "string",
    default: "''",
    description: "开关的边框颜色 ( 推荐使用 CSS var --el-switch-border-color )",
    deprecated: true,
  },
  {
    name: "label",
    type: "string",
    default: "—",
    description: "等价于原生 input aria-label 属性",
    deprecated: true,
  },
];

const switchApiEvents = [
  {
    name: "change",
    description: "switch 状态发生变化时的回调函数",
    params: "Function",
  },
];

const switchApiSlots = [
  {
    name: "active-action",
    description: "自定义 active 行为",
    version: "2.4.4",
  },
  {
    name: "inactive-action",
    description: "自定义 inactive 行为",
    version: "2.4.4",
  },
];

const switchApiExposes = [
  {
    name: "focus",
    description: "手动 focus 到 switch 组件",
    type: "Function",
  },
];
</script>

<style scoped lang="scss">
.switch-page {
  :deep(.example-switch-block) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 8px;
  }

  :deep(.example-demonstration) {
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
}
</style>

