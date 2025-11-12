<template>
  <div class="pagination-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Pagination API"
      :props="paginationApiProps"
      props-title="Pagination Attributes"
      :events="paginationApiEvents"
      events-title="Pagination Events"
      :slots="paginationApiSlots"
      slots-title="Pagination Slots"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import MaxPager from "./components/maxPager.vue";
import Background from "./components/background.vue";
import HideSinglePage from "./components/hideSinglePage.vue";
import Features from "./components/features.vue";

const sections = [Basic, MaxPager, Background, HideSinglePage, Features];

const paginationApiProps = [
  {
    name: "size",
    type: "enum",
    default: "'default'",
    description: "分页大小",
    version: "2.7.6",
  },
  {
    name: "background",
    type: "boolean",
    default: "false",
    description: "是否为分页按钮添加背景色",
  },
  {
    name: "page-size / v-model:page-size",
    type: "number",
    default: "—",
    description: "每页显示条目个数",
  },
  {
    name: "default-page-size",
    type: "number",
    default: "—",
    description: "每页默认的条目个数，不设置时默认为10",
  },
  {
    name: "total",
    type: "number",
    default: "—",
    description: "总条目数",
  },
  {
    name: "page-count",
    type: "number",
    default: "—",
    description:
      "总页数， total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性",
  },
  {
    name: "pager-count",
    type: "number",
    default: "7",
    description: "设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠",
  },
  {
    name: "current-page / v-model:current-page",
    type: "number",
    default: "—",
    description: "当前页数",
  },
  {
    name: "default-current-page",
    type: "number",
    default: "—",
    description: "当前页数的默认初始值，不设置时默认为 1",
  },
  {
    name: "layout",
    type: "string",
    default: "prev, pager, next, jumper, ->, total",
    description: "组件布局，子组件名用逗号分隔",
  },
  {
    name: "page-sizes",
    type: "object",
    default: "[10, 20, 30, 40, 50, 100]",
    description: "每页显示个数选择器的选项设置",
  },
  {
    name: "append-size-to",
    type: "string",
    default: "—",
    description: "下拉框挂载到哪个 DOM 元素",
    version: "2.8.4",
  },
  {
    name: "popper-class",
    type: "string",
    default: "''",
    description: "每页显示个数选择器的下拉框类名",
  },
  {
    name: "prev-text",
    type: "string",
    default: "''",
    description: "替代图标显示的上一页文字",
  },
  {
    name: "prev-icon",
    type: "string / Component",
    default: "ArrowLeft",
    description: "上一页的图标， 比 prev-text 优先级更高",
  },
  {
    name: "next-text",
    type: "string",
    default: "''",
    description: "替代图标显示的下一页文字",
  },
  {
    name: "next-icon",
    type: "string / Component",
    default: "ArrowRight",
    description: "下一页的图标， 比 next-text 优先级更低",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用分页",
  },
  {
    name: "teleported",
    type: "boolean",
    default: "true",
    description: "是否将下拉菜单teleport至 body",
    version: "2.3.13",
  },
  {
    name: "hide-on-single-page",
    type: "boolean",
    default: "false",
    description: "只有一页时是否隐藏",
  },
  {
    name: "small",
    type: "boolean",
    default: "false",
    description: "是否使用小型分页样式",
    deprecated: true,
  },
];

const paginationApiEvents = [
  {
    name: "size-change",
    description: "page-size 改变时触发",
    params: "Function",
  },
  {
    name: "current-change",
    description: "current-page 改变时触发",
    params: "Function",
  },
  {
    name: "change",
    description: "current-page 或 page-size 更改时触发",
    params: "Function",
    version: "2.4.4",
  },
  {
    name: "prev-click",
    description: "用户点击上一页按钮改变当前页时触发",
    params: "Function",
  },
  {
    name: "next-click",
    description: "用户点击下一页按钮改变当前页时触发",
    params: "Function",
  },
];

const paginationApiSlots = [
  {
    name: "default",
    description: "自定义内容 设置文案，需要在 layout 中列出 slot",
  },
];
</script>

<style scoped lang="scss">
.pagination-page {
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

