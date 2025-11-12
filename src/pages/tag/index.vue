<template>
  <div class="tag-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Tag API"
      :props="tagApiProps"
      props-title="Tag Attributes"
      :events="tagApiEvents"
      events-title="Tag Events"
      :slots="tagApiSlots"
      slots-title="Tag Slots"
    />

    <ApiDocs
      title="CheckTag API"
      :props="checkTagApiProps"
      props-title="CheckTag Attributes"
      :events="checkTagApiEvents"
      events-title="CheckTag Events"
      :slots="checkTagApiSlots"
      slots-title="CheckTag Slots"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import Status from "./components/status.vue";
import Closable from "./components/closable.vue";
import Dynamic from "./components/dynamic.vue";
import Size from "./components/size.vue";
import Theme from "./components/theme.vue";
import Round from "./components/round.vue";
import CustomColor from "./components/customColor.vue";
import TransitionDemo from "./components/transition.vue";
import Interaction from "./components/interaction.vue";

const sections = [
  Basic,
  Status,
  Closable,
  Dynamic,
  Size,
  Theme,
  Round,
  CustomColor,
  TransitionDemo,
  Interaction,
];

const tagApiProps = [
  {
    name: "type",
    type: "enum",
    default: "primary",
    description: "Tag 的类型，可选值：success / info / primary / danger",
  },
  {
    name: "status",
    type: "enum",
    default: "",
    description:
      "业务状态类型，可选值：success（绿色+前置成功图标）/ warning（黄色+前置 loading）/ danger（红色+前置错误图标）",
  },
  {
    name: "closable",
    type: "boolean",
    default: "false",
    description: "是否可关闭",
  },
  {
    name: "disable-transitions",
    type: "boolean",
    default: "false",
    description: "是否禁用渐变动画",
  },
  {
    name: "hit",
    type: "boolean",
    default: "false",
    description: "是否有边框描边",
  },
  {
    name: "color",
    type: "string",
    default: "-",
    description: "背景色",
  },
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "Tag 的尺寸，可选值：large / default / small",
  },
  {
    name: "effect",
    type: "enum",
    default: "light",
    description: "Tag 的主题，可选值：dark / light / plain",
  },
  {
    name: "round",
    type: "boolean",
    default: "false",
    description: "Tag 是否为圆形",
  },
  {
    name: "prefixIcon",
    type: "string",
    default: "",
    description: "前置图标类名",
  },
  {
    name: "suffixIcon",
    type: "string",
    default: "",
    description: "后置图标类名",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "是否显示加载状态",
  },
];

const tagApiEvents = [
  {
    name: "click",
    description: "点击 Tag 时触发的事件",
    params: "(event: MouseEvent)",
  },
  {
    name: "close",
    description: "关闭 Tag 时触发的事件",
    params: "(event: MouseEvent)",
  },
];

const tagApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
];

const checkTagApiProps = [
  {
    name: "checked / v-model:checked",
    type: "boolean",
    default: "false",
    description: "是否选中",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "type",
    type: "enum",
    default: "primary",
    description: "CheckTag 类型，可选值：primary / success / info / primary / danger",
  },
];

const checkTagApiEvents = [
  {
    name: "change",
    description: "点击 Check Tag 时触发的事件",
    params: "(status: boolean)",
  },
];

const checkTagApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
];
</script>

<style scoped lang="scss">
.tag-page {
  :deep(.doc-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 20px;
    margin-bottom: 20px;
  }

  :deep(.doc-item) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: 1px solid var(--el-border-color-lighter);
    border-radius: 8px;
    background: var(--el-bg-color);
    transition: all 0.3s ease;
  }



  :deep(.tag-container) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;
  }

  :deep(.tag-input) {
    width: 80px;
  }

  :deep(.button-new-tag) {
    margin-left: 8px;
  }

  :deep(.theme-container) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;
  }

  :deep(.theme-label) {
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-right: 8px;
    min-width: 40px;
  }
}
</style>
