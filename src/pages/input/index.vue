<template>
  <div class="input-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Input API"
      :props="inputApiProps"
      props-title="Input Attributes"
      :events="inputApiEvents"
      events-title="Input Events"
      :exposes="inputApiExposes"
      exposes-title="Input Exposes"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import IconButton from "./components/iconButton.vue";
import WordLimit from "./components/wordLimit.vue";

const sections = [Basic, IconButton, WordLimit];

const inputApiProps = [
  {
    name: "modelValue / v-model",
    type: "string / number",
    default: "-",
    description: "绑定值",
  },
  {
    name: "type",
    type: "string",
    default: "text",
    description: "类型",
  },
  {
    name: "placeholder",
    type: "string",
    default: "-",
    description: "输入框占位文本",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "readonly",
    type: "boolean",
    default: "false",
    description: "是否只读",
  },
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "尺寸，可选值：large / default / small",
  },
  {
    name: "maxlength",
    type: "number",
    default: "-",
    description: "最大输入长度",
  },
  {
    name: "minlength",
    type: "number",
    default: "-",
    description: "最小输入长度",
  },
  {
    name: "showWordLimit",
    type: "boolean",
    default: "false",
    description: "是否显示输入字数统计，只在 type 为 'text' 或 'textarea' 的时候有效",
  },
  {
    name: "clearable",
    type: "boolean",
    default: "false",
    description: "是否可清空",
  },
  {
    name: "showPassword",
    type: "boolean",
    default: "false",
    description: "是否显示切换密码图标",
  },
  {
    name: "autocomplete",
    type: "string",
    default: "off",
    description: "原生 autocomplete 属性",
  },
  {
    name: "autofocus",
    type: "boolean",
    default: "false",
    description: "原生 autofocus 属性",
  },
  {
    name: "form",
    type: "string",
    default: "-",
    description: "原生 form 属性",
  },
  {
    name: "name",
    type: "string",
    default: "-",
    description: "原生 name 属性",
  },
  {
    name: "id",
    type: "string",
    default: "-",
    description: "原生 id 属性",
  },
  {
    name: "resize",
    type: "string",
    default: "none",
    description: "控制是否能被用户缩放",
  },
  {
    name: "autosize",
    type: "boolean | object",
    default: "false",
    description: "自适应内容高度，仅 textarea 有效。 可以接受一个对象，例如 { minRows: 2, maxRows: 6 }",
  },
  {
    name: "autocomplete",
    type: "string",
    default: "off",
    description: "原生 autocomplete 属性",
  },
  {
    name: "prefix-icon",
    type: "string",
    default: "-",
    description: "输入框头部图标",
  },
  {
    name: "suffix-icon",
    type: "string",
    default: "-",
    description: "输入框尾部图标",
  },
  {
    name: "rows",
    type: "number",
    default: "2",
    description: "输入框行数，仅 textarea 有效",
  },
];

const inputApiEvents = [
  {
    name: "blur",
    description: "在 Input 失去焦点时触发",
    params: "(event: FocusEvent)",
  },
  {
    name: "focus",
    description: "在 Input 获得焦点时触发",
    params: "(event: FocusEvent)",
  },
  {
    name: "change",
    description: "仅在 modelValue 改变时触发",
    params: "(value: string | number)",
  },
  {
    name: "input",
    description: "在 Input 框中输入时触发",
    params: "(value: string | number)",
  },
  {
    name: "clear",
    description: "在点击由 clearable 属性生成的清空按钮时触发",
    params: "()",
  },
];

const inputApiExposes = [
  {
    name: "focus",
    description: "使 input 获取焦点",
    type: "() => void",
  },
  {
    name: "blur",
    description: "使 input 失去焦点",
    type: "() => void",
  },
  {
    name: "select",
    description: "选择 input 文字",
    type: "() => void",
  },
  {
    name: "input",
    description: "原生 input 元素",
    type: "Ref<HTMLInputElement>",
  },
  {
    name: "textarea",
    description: "原生 textarea 元素",
    type: "Ref<HTMLTextAreaElement>",
  },
];
</script>

<style scoped lang="scss">
.input-page {
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

