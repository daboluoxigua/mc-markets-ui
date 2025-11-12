<template>
  <div class="radio-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Radio API"
      :props="radioApiProps"
      props-title="Radio Attributes"
      :events="radioApiEvents"
      events-title="Radio Events"
      :slots="radioApiSlots"
      slots-title="Radio Slots"
    />

    <ApiDocs
      title="RadioGroup API"
      :props="radioGroupApiProps"
      props-title="RadioGroup Attributes"
      :events="radioGroupApiEvents"
      events-title="RadioGroup Events"
      :slots="radioGroupApiSlots"
      slots-title="RadioGroup Slots"
    />

    <ApiDocs
      title="RadioButton API"
      :props="radioButtonApiProps"
      props-title="RadioButton Attributes"
      :slots="radioButtonApiSlots"
      slots-title="RadioButton Slots"
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

const sections = [Basic, Disabled, Group, Options];

const radioApiProps = [
  {
    name: "model-value / v-model",
    type: "string / number / boolean",
    default: "—",
    description: "选中项绑定值",
  },
  {
    name: "value",
    type: "string / number / boolean",
    default: "—",
    description: "单选框的值",
    version: "2.6.0",
  },
  {
    name: "label",
    type: "string / number / boolean",
    default: "—",
    description: "单选框的 label 如果value没有值， label则作为value使用",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用单选框",
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
    default: "—",
    description: "单选框的尺寸",
    values: ["large", "default", "small"],
  },
  {
    name: "name",
    type: "string",
    default: "—",
    description: "原始 name 属性",
  },
];

const radioApiEvents = [
  {
    name: "change",
    description: "绑定值变化时触发的事件",
    params: "Function",
  },
];

const radioApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
];

const radioGroupApiProps = [
  {
    name: "model-value / v-model",
    type: "string / number / boolean",
    default: "—",
    description: "绑定值",
  },
  {
    name: "size",
    type: "string",
    default: "default",
    description: "单选框按钮或边框按钮的大小",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "validate-event",
    type: "boolean",
    default: "true",
    description: "输入时是否触发表单的校验",
  },
  {
    name: "text-color",
    type: "string",
    default: "#ffffff",
    description: "按钮形式的 Radio 激活时的文本颜色",
  },
  {
    name: "fill",
    type: "string",
    default: "#409eff",
    description: "按钮形式的 Radio 激活时的填充色和边框色",
  },
  {
    name: "aria-label",
    type: "string",
    default: "—",
    description: "与 RadioGroup 中的 aria-label 属性相同",
    version: "2.7.2",
  },
  {
    name: "name",
    type: "string",
    default: "—",
    description: "原生 name 属性",
  },
];

const radioGroupApiEvents = [
  {
    name: "change",
    description: "绑定值变化时触发的事件",
    params: "Function",
  },
];

const radioGroupApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
];

const radioButtonApiProps = [
  {
    name: "label",
    type: "string / number",
    default: "—",
    description: "单选按钮的值",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
];

const radioButtonApiSlots = [
  {
    name: "default",
    description: "自定义按钮内容",
  },
];
</script>

<style scoped lang="scss">
.radio-page {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
}
</style>

