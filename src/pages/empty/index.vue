<template>
  <div class="empty-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Empty API"
      :props="emptyApiProps"
      props-title="Empty 属性"
      :slots="emptyApiSlots"
      slots-title="Empty 插槽"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import Presets from "./components/presets.vue";
import Size from "./components/size.vue";
import Footer from "./components/footer.vue";
import Description from "./components/description.vue";

const sections = [Basic, Presets, Size, Footer, Description];

const emptyApiProps = [
  {
    name: "image",
    type: "string",
    default: "'orders'",
    description: "图片地址或预设图片名称",
    values: [
      "404",
      "billing",
      "cart",
      "comments",
      "dashboard",
      "files",
      "inbox",
      "location",
      "network",
      "notifications",
      "orders",
      "records",
      "session",
      "subscription",
      "todo",
      "wishlist",
    ],
  },
  {
    name: "image-size",
    type: "number",
    default: "—",
    description: "图片大小（宽度）",
  },
  {
    name: "description",
    type: "string",
    default: "''",
    description: "文字描述",
  },
];

const emptyApiSlots = [
  {
    name: "default",
    description: "自定义底部内容",
  },
  {
    name: "image",
    description: "自定义图片",
  },
  {
    name: "description",
    description: "自定义描述文字",
  },
];
</script>

<style scoped lang="scss">
.empty-page {
  display: flex;
  flex-direction: column;
  gap: 32px;

  :deep(.example-empty-block) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  :deep(.empty-demo-container) {
    display: flex;
    justify-content: center;
  }
}
</style>
