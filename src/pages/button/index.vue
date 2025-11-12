<template>
    <DemoSection 
      :component="[Base,Disabled,Size,Status,Text]"
    ></DemoSection>
    <!-- API 文档 -->
    <ApiDocs
      title="Button API"
      :props="buttonApiProps"
      props-title="Button Attributes"
      :events="buttonApiEvents"
      :slots="buttonApiSlots"
      slots-title="Button Slots"
      :exposes="buttonApiExposes"
      exposes-title="Button Exposes"
    />

    <!-- ButtonGroup API 文档 -->
    <ApiDocs
      title="ButtonGroup API"
      :props="buttonGroupApiProps"
      props-title="ButtonGroup Attributes"
      :slots="buttonGroupApiSlots"
      slots-title="ButtonGroup Slots"
    />
</template>
<script setup>
import Base from './components/base.vue'
import Disabled from './components/disabled.vue'
import Size from './components/size.vue'
import Status from './components/status.vue'
import Text from './components/text.vue'
// API 文档数据
const buttonApiProps = [
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "尺寸，可选值：large / default / small",
  },
  {
    name: "type",
    type: "enum",
    default: "-",
    description:
      "按钮类型，在设置color时，后者优先。可选值：primary / success / warning / danger / info / text",
  },
  {
    name: "plain",
    type: "boolean",
    default: "false",
    description: "是否为朴素按钮",
  },
  {
    name: "text",
    type: "boolean",
    default: "false",
    description: "是否为文字按钮（2.2.0+）",
  },
  {
    name: "bg",
    type: "boolean",
    default: "false",
    description: "是否显示文字按钮背景颜色（2.2.0+）",
  },
  {
    name: "link",
    type: "boolean",
    default: "false",
    description: "是否为链接按钮（2.2.1+）",
  },
  {
    name: "round",
    type: "boolean",
    default: "false",
    description: "是否为圆角按钮",
  },
  {
    name: "circle",
    type: "boolean",
    default: "false",
    description: "是否为圆形按钮",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "是否为加载中状态",
  },
  {
    name: "loading-icon",
    type: "string / Component",
    default: "Loading",
    description: "自定义加载中状态图标组件",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "按钮是否为禁用状态",
  },
  {
    name: "icon",
    type: "string / Component",
    default: "-",
    description: "图标组件",
  },
  {
    name: "autofocus",
    type: "boolean",
    default: "false",
    description: "原生 autofocus 属性",
  },
  {
    name: "native-type",
    type: "enum",
    default: "button",
    description: "原生 type 属性，可选值：button / submit / reset",
  },
  {
    name: "auto-insert-space",
    type: "boolean",
    default: "false",
    description:
      "两个中文字符之间自动插入空格(仅当文本长度为 2 且所有字符均为中文时才生效)",
  },
  {
    name: "color",
    type: "string",
    default: "-",
    description:
      "自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色（beta）",
  },
  {
    name: "dark",
    type: "boolean",
    default: "false",
    description: "dark 模式, 意味着自动设置 color 为 dark 模式的颜色（beta）",
  },
  {
    name: "tag",
    type: "string / Component",
    default: "button",
    description: "自定义元素标签（2.3.4+）",
  },
];

const buttonApiEvents = [
  {
    name: "click",
    description: "点击按钮时触发",
    params: "(event: MouseEvent)",
  },
  {
    name: "focus",
    description: "按钮获得焦点时触发",
    params: "(event: FocusEvent)",
  },
  {
    name: "blur",
    description: "按钮失去焦点时触发",
    params: "(event: FocusEvent)",
  },
];

const buttonApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
  {
    name: "loading",
    description: "自定义加载中组件",
  },
  {
    name: "icon",
    description: "自定义图标组件",
  },
];

const buttonApiExposes = [
  {
    name: "ref",
    description: "按钮 html 元素",
    type: "object",
  },
  {
    name: "size",
    description: "按钮尺寸",
    type: "object",
  },
  {
    name: "type",
    description: "按钮类型",
    type: "object",
  },
  {
    name: "disabled",
    description: "按钮已禁用",
    type: "object",
  },
  {
    name: "shouldAddSpace",
    description: "是否在两个字符之间插入空格",
    type: "object",
  },
];

const buttonGroupApiProps = [
  {
    name: "size",
    type: "enum",
    default: "-",
    description:
      "用于控制该按钮组内按钮的大小，可选值：large / default / small",
  },
  {
    name: "type",
    type: "enum",
    default: "-",
    description:
      "用于控制该按钮组内按钮的类型，可选值：primary / success / warning / danger / info / text",
  },
];

const buttonGroupApiSlots = [
  {
    name: "default",
    description: "自定义按钮组内容",
    subTags: "Button",
  },
];
</script>