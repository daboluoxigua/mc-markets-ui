<template>
  <div class="banner-page">
    <DemoSection :component="sections" />
    <ApiDocs
      title="Banner 组件 API 文档"
      :props="bannerApiProps"
      props-title="Banner 组件属性"
      :events="bannerApiEvents"
      :css-classes="bannerApiCssClasses"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import CustomStyle from "./components/customStyle.vue";
import ComplexContent from "./components/complexContent.vue";

const sections = [Basic, CustomStyle, ComplexContent];

const bannerApiProps = [
  {
    name: "content",
    type: "string",
    default: "''",
    description: "横幅内容文本",
  },
  {
    name: "closable",
    type: "boolean",
    default: "true",
    description: "是否显示关闭按钮",
  },
  {
    name: "visible",
    type: "boolean",
    default: "true",
    description: "是否显示横幅，支持 v-model:visible",
  },
  {
    name: "backgroundColor",
    type: "string",
    default: "''",
    description: "自定义背景色，会覆盖默认的类型样式",
  },
  {
    name: "textColor",
    type: "string",
    default: "''",
    description: "自定义文字颜色，会覆盖默认的类型样式",
  },
  {
    name: "borderColor",
    type: "string",
    default: "''",
    description: "自定义边框颜色，会覆盖默认的类型样式",
  },
];

const bannerApiEvents = [
  {
    name: "close",
    description: "关闭横幅时触发",
    params: "()",
  },
  {
    name: "update:visible",
    description: "visible 值改变时触发",
    params: "(visible: boolean)",
  },
];

const bannerApiCssClasses = [
  {
    name: ".m-banner",
    description: "横幅根元素样式类",
  },
  {
    name: ".m-banner--closable",
    description: "可关闭横幅样式类",
  },
  {
    name: ".m-banner__content",
    description: "横幅内容容器样式类",
  },
  {
    name: ".m-banner__text",
    description: "横幅文本样式类",
  },
  {
    name: ".m-banner__close",
    description: "横幅关闭按钮样式类",
  },
];
</script>

<style scoped lang="scss">
.banner-page {
  :deep(.demo-container) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  :deep(.demo-item) {
    h4 {
      margin: 0 0 12px 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--el-text-color-primary);
    }

    .button-group {
      display: flex;
      gap: 12px;
      margin-top: 12px;
    }
  }

  :deep(.banner-with-actions) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .actions {
      display: flex;
      gap: 8px;
      margin-left: 16px;
    }
  }

  @media (max-width: 768px) {
    :deep(.banner-with-actions) {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;

      .actions {
        margin-left: 0;
      }
    }

    :deep(.button-group) {
      flex-direction: column;
    }
  }
}
</style>

