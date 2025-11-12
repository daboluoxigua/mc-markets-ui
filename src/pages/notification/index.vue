<template>
  <div class="notification-page">
    <DemoSection
      title="通知示例"
      :component="[
        BasicNotification,
        TypesNotification,
        PositionNotification,
        OffsetNotification,
        HtmlNotification,
        VNodeNotification,
        HideCloseNotification,
        GlobalNotification,
        ManualNotification,
      ]"
    />

    <ApiDocs
      title="Notification API"
      :props="notificationApiProps"
      props-title="Notification 属性"
      :events="notificationApiEvents"
      events-title="Notification 事件"
      :methods="notificationApiMethods"
      methods-title="Notification 方法"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import BasicNotification from "./components/basic.vue";
import TypesNotification from "./components/types.vue";
import PositionNotification from "./components/position.vue";
import OffsetNotification from "./components/offset.vue";
import HtmlNotification from "./components/html.vue";
import VNodeNotification from "./components/vnode.vue";
import HideCloseNotification from "./components/hideClose.vue";
import GlobalNotification from "./components/global.vue";
import ManualNotification from "./components/manual.vue";

const notificationApiProps = [
  {
    name: "title",
    type: "string",
    default: "''",
    description: "通知标题",
  },
  {
    name: "message",
    type: "string / VNode / Function",
    default: "''",
    description: "通知正文内容",
  },
  {
    name: "dangerouslyUseHTMLString",
    type: "boolean",
    default: "false",
    description: "是否将 message 属性作为 HTML 片段处理",
  },
  {
    name: "type",
    type: "enum",
    default: "''",
    description: "通知类型",
    values: ["primary", "success", "warning", "info", "error"],
  },
  {
    name: "icon",
    type: "string / Component",
    default: "—",
    description: "自定义图标。若设置了 type，则 icon 会被覆盖",
  },
  {
    name: "customClass",
    type: "string",
    default: "''",
    description: "自定义类名",
  },
  {
    name: "duration",
    type: "number",
    default: "4500",
    description: "显示时间，毫秒。为 0 则不会自动关闭",
  },
  {
    name: "position",
    type: "enum",
    default: "top-right",
    description: "自定义弹出位置",
    values: ["top-right", "top-left", "bottom-right", "bottom-left"],
  },
  {
    name: "showClose",
    type: "boolean",
    default: "true",
    description: "是否显示关闭按钮",
  },
  {
    name: "onClose",
    type: "Function",
    default: "—",
    description: "关闭时的回调函数",
  },
  {
    name: "onClick",
    type: "Function",
    default: "—",
    description: "点击 Notification 时的回调函数",
  },
  {
    name: "offset",
    type: "number",
    default: "0",
    description: "距屏幕边缘的偏移量（同一时刻所有实例应保持一致）",
  },
  {
    name: "appendTo",
    type: "CSSSelector / HTMLElement",
    default: "—",
    description: "设置 notification 的根元素，默认为 document.body",
  },
  {
    name: "zIndex",
    type: "number",
    default: "0",
    description: "初始 zIndex",
  },
  {
    name: "closeIcon",
    type: "string / Component",
    default: "Close",
    description: "自定义关闭图标",
  },
];

const notificationApiEvents = [
  {
    name: "close",
    description: "关闭通知时触发",
    params: "(instance: NotificationInstance)",
  },
  {
    name: "click",
    description: "点击通知时触发",
    params: "(instance: NotificationInstance)",
  },
];

const notificationApiMethods = [
  {
    name: "ElNotification(options)",
    description: "显示通知",
    params: "(options: NotificationOptions | string)",
  },
  {
    name: "ElNotification.success(options)",
    description: "显示成功通知",
    params: "(options: NotificationOptions | string)",
  },
  {
    name: "ElNotification.warning(options)",
    description: "显示警告通知",
    params: "(options: NotificationOptions | string)",
  },
  {
    name: "ElNotification.info(options)",
    description: "显示信息通知",
    params: "(options: NotificationOptions | string)",
  },
  {
    name: "ElNotification.error(options)",
    description: "显示错误通知",
    params: "(options: NotificationOptions | string)",
  },
  {
    name: "ElNotification.closeAll()",
    description: "关闭所有通知实例",
    params: "()",
  },
  {
    name: "ElNotification.updateOffsets(position)",
    description: "手动更新指定方向所有通知的偏移量",
    params: "(position: NotificationPosition)",
  },
];
</script>

<style scoped lang="scss">
.notification-page {
  .doc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 20px;
    margin-bottom: 20px;
  }

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

  @media (max-width: 1200px) {
    .doc-grid {
      grid-template-columns: repeat(auto-fit, minmax(180px, auto));
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .doc-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, auto));
      gap: 12px;
    }

    .doc-item {
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    .doc-grid {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .doc-item {
      padding: 10px;
    }
  }
}
</style>

