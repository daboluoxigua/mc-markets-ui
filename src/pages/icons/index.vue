<template>
  <div class="icons-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Icon 组件 API 文档"
      :props="iconApiProps"
      props-title="Icon 组件属性"
      :events="iconApiEvents"
      :css-classes="iconApiCssClasses"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import Sizes from "./components/sizes.vue";
import Colors from "./components/colors.vue";
import Animation from "./components/animation.vue";
import Flip from "./components/flip.vue";
import Combo from "./components/combo.vue";
import Click from "./components/click.vue";
import Library from "./components/library.vue";

const sections = [Basic, Sizes, Colors, Animation, Flip, Combo, Click, Library];

const iconApiProps = [
  {
    name: "name",
    type: "string",
    default: "-",
    description: "图标名称，必填。支持所有内置图标名称",
  },
  {
    name: "size",
    type: "string | number",
    default: "'16px'",
    description: "图标大小，支持数字(px)或字符串(如'2rem', '1.5em')",
  },
  {
    name: "color",
    type: "string",
    default: "'inherit'",
    description: "图标颜色，支持CSS颜色值(如'#ff0000', 'red', 'var(--el-color-primary)')",
  },
  {
    name: "spin",
    type: "boolean",
    default: "false",
    description: "是否启用旋转动画效果",
  },
  {
    name: "pulse",
    type: "boolean",
    default: "false",
    description: "是否启用脉冲动画效果",
  },
  {
    name: "rotate",
    type: "number",
    default: "0",
    description: "图标旋转角度，单位为度(0-360)",
  },
  {
    name: "flip",
    type: "'horizontal' | 'vertical' | 'both'",
    default: "undefined",
    description: "图标翻转方向：horizontal(水平翻转) / vertical(垂直翻转) / both(双向翻转)",
  },
  {
    name: "prefix",
    type: "string",
    default: "'icon'",
    description: "CSS类名前缀，用于生成图标类名",
  },
];

const iconApiEvents = [
  {
    name: "click",
    description: "点击图标时触发",
    params: "(event: MouseEvent)",
  },
];

const iconApiCssClasses = [
  {
    name: ".iconfont",
    description: "图标根元素基础样式类",
  },
  {
    name: ".icon-{name}",
    description: "具体图标样式类，{name}为图标名称",
  },
  {
    name: ".icon-spin",
    description: "旋转动画样式类（当 spin=true 时自动添加）",
  },
  {
    name: ".icon-pulse",
    description: "脉冲动画样式类（当 pulse=true 时自动添加）",
  },
  {
    name: ".icon-flip-horizontal",
    description: "水平翻转样式类（当 flip='horizontal' 时自动添加）",
  },
  {
    name: ".icon-flip-vertical",
    description: "垂直翻转样式类（当 flip='vertical' 时自动添加）",
  },
  {
    name: ".icon-flip-both",
    description: "双向翻转样式类（当 flip='both' 时自动添加）",
  },
];
</script>

<style scoped lang="scss">
.icons-page {
  :deep(.doc-grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, auto));
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

  :deep(.doc-item:hover) {
    border-color: var(--el-color-primary);
    box-shadow: 0 6px 18px rgba(64, 158, 255, 0.15);
  }

  :deep(.doc-item span) {
    margin-top: 8px;
    font-size: 12px;
    color: var(--el-text-color-regular);
    text-align: center;
  }

  :deep(.icon-preview) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: var(--el-fill-color-lighter);
    margin-bottom: 8px;
  }

  :deep(.icon-preview.primary) {
    background: rgba(64, 158, 255, 0.12);
    color: var(--el-color-primary);
  }

  :deep(.icon-preview.success) {
    background: rgba(103, 194, 58, 0.12);
    color: var(--el-color-success);
  }

  :deep(.icon-preview.warning) {
    background: rgba(230, 162, 60, 0.12);
    color: var(--el-color-warning);
  }

  :deep(.icon-preview.danger) {
    background: rgba(245, 108, 108, 0.12);
    color: var(--el-color-danger);
  }

  :deep(.icon-list) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 16px;
  }

  :deep(.icon-item) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 8px;
    background: var(--el-fill-color-lighter);
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      background: var(--el-fill-color);
    }
  }

  :deep(.icon-name) {
    margin-top: 8px;
    font-size: 12px;
    color: var(--el-text-color-secondary);
    text-align: center;
    word-break: break-all;
  }

  :deep(.search-input) {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;

    input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid var(--el-border-color);
      border-radius: 6px;
      font-size: 14px;
      transition: border-color 0.2s ease;

      &:focus {
        border-color: var(--el-color-primary);
        outline: none;
        box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.1);
      }
    }
  }

  :deep(.icon-actions) {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    button {
      padding: 4px 8px;
      border: 1px solid var(--el-border-color);
      border-radius: 4px;
      background: var(--el-fill-color-blank);
      cursor: pointer;
      font-size: 12px;
      transition: all 0.2s ease;

      &:hover {
        border-color: var(--el-color-primary);
        color: var(--el-color-primary);
      }
    }
  }

  :deep(.icon-preview-animation) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 12px;

    .icon-animation-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 12px;
      border-radius: 8px;
      background: var(--el-fill-color-lighter);
    }
  }

  :deep(.icon-playground) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;

    .icon-preview-area {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 120px;
      border-radius: 12px;
      background: var(--el-fill-color-darker);
      border: 1px solid var(--el-border-color-lighter);
    }

    .icon-controls {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;

      label {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 13px;
        color: var(--el-text-color-primary);
      }

      input,
      select {
        padding: 8px 12px;
        border: 1px solid var(--el-border-color);
        border-radius: 6px;
        background: var(--el-fill-color-blank);
        font-size: 13px;
        transition: all 0.2s ease;

        &:focus {
          border-color: var(--el-color-primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.1);
        }
      }
    }
  }

  @media (max-width: 1200px) {
    :deep(.doc-grid) {
      grid-template-columns: repeat(auto-fit, minmax(140px, auto));
    }
  }

  @media (max-width: 768px) {
    :deep(.icon-playground) {
      grid-template-columns: 1fr;

      .icon-controls {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>

