<template>
  <div class="tooltip-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Tooltip API"
      :props="tooltipApiProps"
      props-title="Tooltip Attributes"
      :events="tooltipApiEvents"
      events-title="Tooltip Events"
      :slots="tooltipApiSlots"
      slots-title="Tooltip Slots"
      :exposes="tooltipApiExposes"
      exposes-title="Tooltip Exposes"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import Theme from "./components/theme.vue";
import MultiContent from "./components/multiContent.vue";
import Advanced from "./components/advanced.vue";
import RawHtml from "./components/rawHtml.vue";
import Singleton from "./components/singleton.vue";
import Controlled from "./components/controlled.vue";
import CustomTransition from "./components/customTransition.vue";
import AppendTo from "./components/appendTo.vue";

const sections = [
  Basic,
  Theme,
  MultiContent,
  Advanced,
  RawHtml,
  Singleton,
  Controlled,
  CustomTransition,
  AppendTo,
];

const tooltipApiProps = [
  {
    name: "append-to",
    type: "string / HTMLElement",
    default: "document.body",
    description: "指示 Tooltip 的内容将附加到哪个元素。",
  },
  {
    name: "effect",
    type: "enum",
    default: "dark",
    description: "默认提供的主题，可选值：dark / light",
  },
  {
    name: "content",
    type: "string",
    default: "''",
    description: "显示的内容，也可被 slot#content 覆盖",
  },
  {
    name: "raw-content",
    type: "boolean",
    default: "false",
    description: "content 中的内容是否作为 HTML 字符串处理",
  },
  {
    name: "placement",
    type: "enum",
    default: "bottom",
    description: "Tooltip 组件出现的位置",
  },
  {
    name: "fallback-placements",
    type: "array",
    default: "-",
    description: "Tooltip 可用的 positions 请查看popper.js 文档",
  },
  {
    name: "visible / v-model:visible",
    type: "boolean",
    default: "-",
    description: "Tooltip 组件可见性",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Tooltip 组件是否禁用",
  },
  {
    name: "offset",
    type: "number",
    default: "12",
    description: "出现位置的偏移量",
  },
  {
    name: "transition",
    type: "string",
    default: "-",
    description: "动画名称",
  },
  {
    name: "popper-options",
    type: "object",
    default: "{}",
    description: "popper.js 参数",
  },
  {
    name: "arrow-offset",
    type: "number",
    default: "5",
    description: "控制Tooltip的箭头相对于弹出窗口的偏移(添加)。",
  },
  {
    name: "show-after",
    type: "number",
    default: "0",
    description: "在触发后多久显示内容，单位毫秒",
  },
  {
    name: "show-arrow",
    type: "boolean",
    default: "true",
    description: "tooltip 的内容是否有箭头",
  },
  {
    name: "hide-after",
    type: "number",
    default: "200",
    description: "延迟关闭，单位毫秒",
  },
  {
    name: "auto-close",
    type: "number",
    default: "0",
    description: "tooltip 出现后自动隐藏延时，单位毫秒",
  },
  {
    name: "popper-class",
    type: "string",
    default: "-",
    description: "为 Tooltip 的 popper 添加类名",
  },
  {
    name: "enterable",
    type: "boolean",
    default: "true",
    description: "鼠标是否可进入到 tooltip 中",
  },
  {
    name: "tabindex",
    type: "number",
    default: "0",
    description: "tooltip 组件的 tabindex",
  },
  {
    name: "teleported",
    type: "boolean",
    default: "true",
    description: "Tooltip 的 popper 是否插入至 body 元素",
  },
];

const tooltipApiEvents = [
  {
    name: "show",
    description: "显示 Tooltip 时触发",
    params: "()",
  },
  {
    name: "hide",
    description: "隐藏 Tooltip 时触发",
    params: "()",
  },
];

const tooltipApiSlots = [
  {
    name: "default",
    description: "触发 Tooltip 的内容",
  },
  {
    name: "content",
    description: "自定义 Tooltip 内容",
  },
];

const tooltipApiExposes = [
  {
    name: "popoverRef",
    description: "Tooltip popper 实例引用",
    type: "Ref",
  },
  {
    name: "popperInstanceRef",
    description: "popper.js 实例引用",
    type: "ComputedRef",
  },
  {
    name: "contentRef",
    description: "内容区域引用",
    type: "ComputedRef",
  },
];
</script>

<style scoped lang="scss">
.tooltip-page {
  display: flex;
  flex-direction: column;
  gap: 32px;

  :deep(.doc-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  :deep(.doc-item) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border: 1px solid var(--el-border-color-lighter);
    border-radius: 8px;
    background: var(--el-bg-color);
  }

  :deep(.doc-item span) {
    margin-top: 8px;
    font-size: 12px;
    color: var(--el-text-color-secondary);
  }

  :deep(.tooltip-demo-row) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
}
</style>

