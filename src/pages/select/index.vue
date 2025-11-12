<template>
  <div class="select-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Select API"
      :props="selectApiProps"
      props-title="Select Attributes"
      :events="selectApiEvents"
      :exposes="selectApiExposes"
      exposes-title="Select Exposes"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import Solid from "./components/solid.vue";
import MultiGroup from "./components/multiGroup.vue";

const sections = [Basic, Solid, MultiGroup];

const selectApiProps = [
  {
    name: "modelValue / v-model",
    type: "string / number / boolean / object / array",
    default: "-",
    description: "绑定值",
  },
  {
    name: "multiple",
    type: "boolean",
    default: "false",
    description: "是否多选",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "valueKey",
    type: "string",
    default: "value",
    description: "作为 value 唯一标识的键名，绑定值为对象类型时必填",
  },
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "尺寸，可选值：large / default / small",
  },
  {
    name: "clearable",
    type: "boolean",
    default: "false",
    description: "是否可以清空选项",
  },
  {
    name: "collapseTags",
    type: "boolean",
    default: "false",
    description: "多选时是否将选中值按文字的形式展示",
  },
  {
    name: "multipleLimit",
    type: "number",
    default: "0",
    description: "多选时用户最多可以选择的项目数，为 0 则不限制",
  },
  {
    name: "name",
    type: "string",
    default: "-",
    description: "select input 的 name 属性",
  },
  {
    name: "autocomplete",
    type: "string",
    default: "off",
    description: "select input 的 autocomplete 属性",
  },
  {
    name: "placeholder",
    type: "string",
    default: "-",
    description: "占位符",
  },
  {
    name: "filterable",
    type: "boolean",
    default: "false",
    description: "是否可搜索",
  },
  {
    name: "allowCreate",
    type: "boolean",
    default: "false",
    description: "是否允许用户创建新条目，需配合 filterable 使用",
  },
  {
    name: "filterMethod",
    type: "function",
    default: "-",
    description: "自定义搜索方法",
  },
  {
    name: "remote",
    type: "boolean",
    default: "false",
    description: "是否为远程搜索",
  },
  {
    name: "remoteMethod",
    type: "function",
    default: "-",
    description: "远程搜索方法",
  },
  {
    name: "remoteShowSuffix",
    type: "boolean",
    default: "false",
    description: "远程搜索时是否显示后缀图标",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "是否正在从远程获取数据",
  },
  {
    name: "loadingText",
    type: "string",
    default: "Loading",
    description: "远程加载时显示的文字",
  },
  {
    name: "noMatchText",
    type: "string",
    default: "No matching data",
    description: "搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置",
  },
  {
    name: "noDataText",
    type: "string",
    default: "No data",
    description: "无选项时显示的文字，也可以使用 empty 插槽设置",
  },
  {
    name: "popperClass",
    type: "string",
    default: "-",
    description: "Select 下拉框的类名",
  },
  {
    name: "reserveKeyword",
    type: "boolean",
    default: "false",
    description: "多选且可搜索时，选中一个选项后是否保留当前搜索关键词",
  },
  {
    name: "defaultFirstOption",
    type: "boolean",
    default: "false",
    description: "在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用",
  },
  {
    name: "popperAppendToBody",
    type: "boolean",
    default: "true",
    description: "是否将弹出框插入至 body 元素",
  },
  {
    name: "automaticDropdown",
    type: "boolean",
    default: "false",
    description: "对于不可搜索的 Select，是否在输入框获得焦点后自动展开选项",
  },
  {
    name: "clearIcon",
    type: "string",
    default: "CircleClose",
    description: "自定义清空图标的类名",
  },
  {
    name: "suffixIcon",
    type: "string",
    default: "ArrowDown",
    description: "自定义后缀图标的类名",
  },
  {
    name: "tagType",
    type: "string",
    default: "info",
    description: "多选时标签的类型",
  },
  {
    name: "validateEvent",
    type: "boolean",
    default: "true",
    description: "输入时是否触发表单的校验",
  },
];

const selectApiEvents = [
  {
    name: "change",
    description: "选中值发生变化时触发",
    params: "(val: string | number | boolean | object | array)",
  },
  {
    name: "visibleChange",
    description: "下拉框出现/隐藏时触发",
    params: "(visible: boolean)",
  },
  {
    name: "removeTag",
    description: "多选模式下移除 tag 时触发",
    params: "(val: string | number | boolean | object)",
  },
  {
    name: "clear",
    description: "可清空的单选模式下用户点击清空按钮时触发",
    params: "()",
  },
  {
    name: "blur",
    description: "当 input 失去焦点时触发",
    params: "(event: FocusEvent)",
  },
  {
    name: "focus",
    description: "当 input 获得焦点时触发",
    params: "(event: FocusEvent)",
  },
  {
    name: "keydown",
    description: "当 input 按下键盘时触发",
    params: "(event: KeyboardEvent)",
  },
  {
    name: "keyup",
    description: "当 input 释放键盘时触发",
    params: "(event: KeyboardEvent)",
  },
];

const selectApiExposes = [
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
    name: "clearSelection",
    description: "清空选择",
    type: "() => void",
  },
  {
    name: "handleResize",
    description: "处理尺寸变化",
    type: "() => void",
  },
  {
    name: "inputRef",
    description: "input 元素",
    type: "HTMLInputElement",
  },
  {
    name: "selectRef",
    description: "select 元素",
    type: "HTMLElement",
  },
];
</script>

<style scoped lang="scss">
.select-page {
  .doc-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: 1px solid var(--el-border-color-lighter);
    border-radius: 8px;
    background: var(--el-bg-color);
    transition: all 0.3s ease;
  }

  .doc-item span {
    margin-top: 8px;
    font-size: 12px;
    color: var(--el-text-color-regular);
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 16px;

    .doc-item {
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    .doc-item {
      padding: 10px;
    }
  }
}
</style>

