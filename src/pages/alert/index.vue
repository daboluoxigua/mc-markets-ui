<template>
  <div class="alert-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="Alert API"
      :props="alertApiProps"
      props-title="Alert 属性"
      :events="alertApiEvents"
      events-title="Alert 事件"
      :slots="alertApiSlots"
      slots-title="Alert 插槽"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import Theme from "./components/theme.vue";
import CustomClose from "./components/customClose.vue";
import IconUsage from "./components/iconUsage.vue";
import CustomColor from "./components/customColor.vue";
import CustomIcon from "./components/customIcon.vue";
import Center from "./components/center.vue";
import Description from "./components/description.vue";
import IconDescription from "./components/iconDescription.vue";
import Delay from "./components/delay.vue";

const sections = [
  Basic,
  Theme,
  CustomClose,
  IconUsage,
  CustomColor,
  CustomIcon,
  Center,
  Description,
  IconDescription,
  Delay,
];

const alertApiProps = [
  {
    name: "title",
    type: "string",
    default: "—",
    description: "Alert 标题。",
  },
  {
    name: "type",
    type: "enum",
    default: "success",
    description: "Alert 类型。",
    values: ["success", "warning", "error"],
  },
  {
    name: "description",
    type: "string",
    default: "—",
    description: "描述性文本",
  },
  {
    name: "closable",
    type: "boolean",
    default: "true",
    description: "是否可以关闭",
  },
  {
    name: "center",
    type: "boolean",
    default: "false",
    description: "文字是否居中",
  },
  {
    name: "close-text",
    type: "string",
    default: "—",
    description: "自定义关闭按钮文本",
  },
  {
    name: "show-icon",
    type: "boolean",
    default: "false",
    description: "是否显示类型图标",
  },
  {
    name: "use-custom-icon",
    type: "boolean",
    default: "true",
    description: "是否使用自定义图标",
  },
  {
    name: "effect",
    type: "enum",
    default: "light",
    description: "主题样式",
    values: ["light", "dark"],
  },
  {
    name: "show-after",
    type: "number",
    default: "0",
    description: "在触发后多久显示内容，单位毫秒",
    version: "2.10.0",
  },
  {
    name: "hide-after",
    type: "number",
    default: "200",
    description: "延迟关闭，单位毫秒",
    version: "2.10.0",
  },
  {
    name: "auto-close",
    type: "number",
    default: "0",
    description: "alert 出现后自动隐藏延时，单位毫秒",
    version: "2.10.0",
  },
];

const alertApiEvents = [
  {
    name: "open",
    description: "开启 Alert 时触发的事件",
    params: "Function",
    version: "2.10.0",
  },
  {
    name: "close",
    description: "关闭 Alert 时触发的事件",
    params: "Function",
  },
];

const alertApiSlots = [
  {
    name: "default",
    description: "Alert 内容描述",
  },
  {
    name: "title",
    description: "标题的内容",
  },
  {
    name: "icon",
    description: "icon 的内容",
    version: "2.9.7",
  },
];
</script>

<style scoped lang="scss">
.alert-page {
  :deep(.example-alert-block + .example-alert-block) {
    margin-top: 10px;
  }

  :deep(.example-alert-block .example-demonstration) {
    margin-bottom: 16px;
  }

  :deep(.alert-demo-container) {
    max-width: 600px;

    .el-alert {
      margin: 20px 0 0;

      &:first-child {
        margin: 0;
      }
    }

    .alert-demo-row {
      display: flex;
      gap: 40px;
      margin-top: 20px;

      .alert-demo-column {
        flex: 1;

        h4 {
          margin: 0 0 16px 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }
      }
    }

    .color-demo-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      margin-top: 20px;
    }

    .color-demo-item {
      .color-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
        padding: 8px 12px;
        background: var(--bg-secondary);
        border-radius: 4px;
        font-size: 12px;

        .color-label {
          font-weight: 600;
          color: var(--text-primary);
        }

        .color-details {
          display: flex;
          align-items: center;
          gap: 8px;

          .color-bg {
            width: 16px;
            height: 16px;
            border-radius: 2px;
            border: 1px solid var(--border-primary);
          }

          .color-text {
            font-family: monospace;
            font-size: 11px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 16px;

    :deep(.alert-demo-row) {
      flex-direction: column;
      gap: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
}
</style>

