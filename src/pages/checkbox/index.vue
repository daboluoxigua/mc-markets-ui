<template>
  <div class="checkbox-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Checkbox API"
      :props="checkboxApiProps"
      props-title="Checkbox Attributes"
      :events="checkboxApiEvents"
      events-title="Checkbox Events"
      :slots="checkboxApiSlots"
      slots-title="Checkbox Slots"
    />

    <ApiDocs
      title="CheckboxGroup API"
      :props="checkboxGroupApiProps"
      props-title="CheckboxGroup Attributes"
      :events="checkboxGroupApiEvents"
      events-title="CheckboxGroup Events"
      :slots="checkboxGroupApiSlots"
      slots-title="CheckboxGroup Slots"
    />

    <ApiDocs
      title="CheckboxButton API"
      :props="checkboxButtonApiProps"
      props-title="CheckboxButton Attributes"
      :slots="checkboxButtonApiSlots"
      slots-title="CheckboxButton Slots"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import Disabled from "./components/disabled.vue";
import Group from "./components/group.vue";
import Options from "./components/options.vue";
import Indeterminate from "./components/indeterminate.vue";
import Limit from "./components/limit.vue";
import Border from "./components/border.vue";

const sections = [Basic, Disabled, Group, Options, Indeterminate, Limit, Border];

const checkboxApiProps = [
  {
    name: "model-value / v-model",
    type: "string / number / boolean",
    default: "-",
    description: "绑定值",
  },
  {
    name: "value",
    type: "string / number / boolean / object",
    default: "-",
    description: "选中状态的值，只有在绑定对象类型为 array 时有效",
  },
  {
    name: "label",
    type: "string / number / boolean / object",
    default: "-",
    description:
      "选中状态的值，只有在绑定对象类型为 array 时有效。如果没有 value，label 则作为 value 使用",
  },
  {
    name: "true-value",
    type: "string / number",
    default: "-",
    description: "选中时的值",
  },
  {
    name: "false-value",
    type: "string / number",
    default: "-",
    description: "没有选中时的值",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "border",
    type: "boolean",
    default: "false",
    description: "是否显示边框",
  },
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "Checkbox 的尺寸，仅在 border 为真时有效",
  },
  {
    name: "name",
    type: "string",
    default: "-",
    description: "原生 name 属性",
  },
  {
    name: "checked",
    type: "boolean",
    default: "false",
    description: "当前是否勾选",
  },
  {
    name: "indeterminate",
    type: "boolean",
    default: "false",
    description: "设置不确定状态，仅负责样式控制",
  },
  {
    name: "validate-event",
    type: "boolean",
    default: "true",
    description: "输入时是否触发表单的校验",
  },
  {
    name: "tabindex",
    type: "string / number",
    default: "-",
    description: "输入框的 tabindex",
  },
  {
    name: "id",
    type: "string",
    default: "-",
    description: "input id",
  },
];

const checkboxApiEvents = [
  {
    name: "change",
    description: "当绑定值变化时触发的事件",
    params: "(value: string | number | boolean)",
  },
];

const checkboxApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
];

const checkboxGroupApiProps = [
  {
    name: "model-value / v-model",
    type: "object",
    default: "[]",
    description: "绑定值",
  },
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "多选框组尺寸",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "min",
    type: "number",
    default: "-",
    description: "可被勾选的 checkbox 的最小数量",
  },
  {
    name: "max",
    type: "number",
    default: "-",
    description: "可被勾选的 checkbox 的最大数量",
  },
  {
    name: "text-color",
    type: "string",
    default: "#ffffff",
    description: "当按钮为活跃状态时的字体颜色",
  },
  {
    name: "fill",
    type: "string",
    default: "#409eff",
    description: "当按钮为活跃状态时的边框和背景颜色",
  },
  {
    name: "tag",
    type: "string",
    default: "div",
    description: "复选框组元素标签",
  },
  {
    name: "validate-event",
    type: "boolean",
    default: "true",
    description: "是否触发表单验证",
  },
  {
    name: "options",
    type: "array",
    default: "-",
    description:
      "选项的数据源，value 的 key 和 label 和 disabled 可以通过 props 自定义",
  },
  {
    name: "props",
    type: "object",
    default: "-",
    description: "配置 options 的各项参数的选项",
  },
];

const checkboxGroupApiEvents = [
  {
    name: "change",
    description: "当绑定值变化时触发的事件",
    params: "(value: any[])",
  },
];

const checkboxGroupApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
];

const checkboxButtonApiProps = [
  {
    name: "label",
    type: "string / number / boolean",
    default: "-",
    description: "选中状态的值",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "name",
    type: "string",
    default: "-",
    description: "原生 name 属性",
  },
  {
    name: "checked",
    type: "boolean",
    default: "false",
    description: "当前是否勾选",
  },
];

const checkboxButtonApiSlots = [
  {
    name: "default",
    description: "自定义按钮内容",
  },
];
</script>

<style scoped lang="scss">
.checkbox-page {
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

  :deep(.doc-item span) {
    margin-top: 8px;
    font-size: 12px;
    color: var(--el-text-color-regular);
    text-align: center;
  }

  @media (max-width: 1200px) {
    :deep(.doc-grid) {
      grid-template-columns: repeat(auto-fit, minmax(180px, auto));
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    :deep(.doc-grid) {
      grid-template-columns: repeat(auto-fit, minmax(150px, auto));
      gap: 12px;
    }

    :deep(.doc-item) {
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    :deep(.doc-grid) {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    :deep(.doc-item) {
      padding: 10px;
    }
  }
}
</style>

