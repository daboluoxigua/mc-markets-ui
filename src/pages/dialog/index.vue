<template>
  <div class="dialog-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Dialog API"
      :props="dialogApiProps"
      props-title="Dialog 属性"
      :events="dialogApiEvents"
      events-title="Dialog 事件"
      :slots="dialogApiSlots"
      slots-title="Dialog 插槽"
      :exposes="dialogApiExposes"
      exposes-title="Dialog 暴露的方法"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import BasicDialog from "./components/basic.vue";
import CustomContent from "./components/customContent.vue";
import CustomHeader from "./components/customHeader.vue";
import NestedDialog from "./components/nested.vue";
import CenteredDialog from "./components/centered.vue";
import AlignCenterDialog from "./components/alignCenter.vue";
import DestroyOnCloseDialog from "./components/destroyOnClose.vue";
import DraggableDialog from "./components/draggable.vue";
import FullscreenDialog from "./components/fullscreen.vue";
import NoModalDialog from "./components/noModal.vue";
import CustomTransitionDialog from "./components/customTransition.vue";

const sections = [
  BasicDialog,
  CustomContent,
  CustomHeader,
  NestedDialog,
  CenteredDialog,
  AlignCenterDialog,
  DestroyOnCloseDialog,
  DraggableDialog,
  FullscreenDialog,
  NoModalDialog,
  CustomTransitionDialog,
];

const dialogApiProps = [
  {
    name: "model-value / v-model",
    type: "boolean",
    default: "—",
    description: "是否显示 Dialog",
  },
  {
    name: "title",
    type: "string",
    default: "''",
    description: "Dialog 标题，也可通过具名 slot 传入",
  },
  {
    name: "width",
    type: "string / number",
    default: "''",
    description: "对话框的宽度，默认 50%",
  },
  {
    name: "fullscreen",
    type: "boolean",
    default: "false",
    description: "是否为全屏 Dialog",
  },
  {
    name: "top",
    type: "string",
    default: "''",
    description: "Dialog 的 margin-top 值，默认为 15vh",
  },
  {
    name: "modal",
    type: "boolean",
    default: "true",
    description: "是否需要遮罩层",
  },
  {
    name: "modal-class",
    type: "string",
    default: "''",
    description: "遮罩自定义类名",
  },
  {
    name: "append-to-body",
    type: "boolean",
    default: "false",
    description: "Dialog 自身是否插入至 body 元素",
  },
  {
    name: "append-to",
    type: "CSSSelector / HTMLElement",
    default: "body",
    description: "Dialog 挂载的 DOM 元素，覆盖 append-to-body",
  },
  {
    name: "lock-scroll",
    type: "boolean",
    default: "true",
    description: "Dialog 出现时是否锁定 body 滚动",
  },
  {
    name: "open-delay",
    type: "number",
    default: "0",
    description: "Dialog 打开的延迟时间，毫秒",
  },
  {
    name: "close-delay",
    type: "number",
    default: "0",
    description: "Dialog 关闭的延迟时间，毫秒",
  },
  {
    name: "close-on-click-modal",
    type: "boolean",
    default: "true",
    description: "是否可以通过点击 modal 关闭 Dialog",
  },
  {
    name: "close-on-press-escape",
    type: "boolean",
    default: "true",
    description: "是否可以通过按下 ESC 关闭 Dialog",
  },
  {
    name: "show-close",
    type: "boolean",
    default: "true",
    description: "是否显示关闭按钮",
  },
  {
    name: "before-close",
    type: "Function",
    default: "—",
    description: "关闭前的回调，调用 done() 才会真正关闭",
  },
  {
    name: "draggable",
    type: "boolean",
    default: "false",
    description: "是否开启拖拽",
  },
  {
    name: "overflow",
    type: "boolean",
    default: "false",
    description: "拖动范围是否可以超出可视区（draggable 时）",
  },
  {
    name: "center",
    type: "boolean",
    default: "false",
    description: "是否让 header 和 footer 居中布局",
  },
  {
    name: "align-center",
    type: "boolean",
    default: "false",
    description: "是否让对话框水平垂直居中",
  },
  {
    name: "destroy-on-close",
    type: "boolean",
    default: "false",
    description: "关闭时销毁内容",
  },
  {
    name: "close-icon",
    type: "string / Component",
    default: "—",
    description: "自定义关闭图标",
  },
  {
    name: "z-index",
    type: "number",
    default: "—",
    description: "Dialog 的 z-index",
  },
  {
    name: "header-aria-level",
    type: "string",
    default: "2",
    description: "header 的 aria-level 属性",
  },
  {
    name: "transition",
    type: "string / object",
    default: "dialog-fade",
    description: "自定义过渡效果名称或过渡对象",
  },
  {
    name: "custom-class",
    type: "string",
    default: "''",
    description: "自定义类名（已弃用）",
  },
];

const dialogApiEvents = [
  {
    name: "open",
    description: "Dialog 打开时触发",
    params: "()",
  },
  {
    name: "opened",
    description: "Dialog 打开动画结束时触发",
    params: "()",
  },
  {
    name: "close",
    description: "Dialog 关闭时触发",
    params: "()",
  },
  {
    name: "closed",
    description: "Dialog 关闭动画结束时触发",
    params: "()",
  },
  {
    name: "open-auto-focus",
    description: "Dialog 打开时自动获取焦点",
    params: "(el: HTMLElement)",
    version: "2.6.0",
  },
  {
    name: "close-auto-focus",
    description: "Dialog 关闭时自动获取焦点",
    params: "(el: HTMLElement)",
    version: "2.6.0",
  },
];

const dialogApiSlots = [
  {
    name: "default",
    description: "Dialog 内容",
  },
  {
    name: "header",
    description: "自定义 Dialog header 内容",
  },
  {
    name: "footer",
    description: "自定义 Dialog footer 内容",
  },
];

const dialogApiExposes = [
  {
    name: "visible",
    description: "Dialog 是否显示",
    type: "Ref<boolean>",
  },
  {
    name: "rendered",
    description: "Dialog 是否渲染",
    type: "Ref<boolean>",
  },
  {
    name: "open",
    description: "打开 Dialog",
    type: "() => void",
  },
  {
    name: "close",
    description: "关闭 Dialog",
    type: "(trigger?: Trigger) => void",
  },
  {
    name: "doClose",
    description: "关闭 Dialog",
    type: "() => void",
  },
];
</script>

<style scoped lang="scss">
.dialog-page {
  display: flex;
  flex-direction: column;
  gap: 32px;

  :deep(.dialog-demo-container) {
    display: flex;
    gap: 12px;

    &.flex-wrap {
      flex-wrap: wrap;
    }

    .gap-1 {
      gap: 0.25rem;
    }

    .ml-0 {
      margin-left: 0 !important;
    }
  }
}

@media (max-width: 768px) {
  .dialog-page {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .dialog-page {
    padding: 12px;
  }
}
</style>

