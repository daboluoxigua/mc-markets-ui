<template>
  <div class="notifi-message-page">
    <DemoSection :component="sections" />

    <ApiDocs
      title="NotifiMessage API"
      :props="notifiMessageApiProps"
      props-title="NotifiMessage 属性"
      :methods="notifiMessageApiMethods"
      methods-title="NotifiMessage 方法"
    />

    <m-notifi-message />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import CustomNotification from "./components/custom.vue";
import UsageExample from "./components/usage.vue";

const sections = [CustomNotification, UsageExample];

const notifiMessageApiProps = [
  {
    name: "title",
    type: "string",
    default: "''",
    description: "通知标题",
  },
  {
    name: "message",
    type: "string",
    default: "''",
    description: "通知内容",
  },
  {
    name: "duration",
    type: "number",
    default: "4500",
    description: "显示时间，单位毫秒。设为 0 则不会自动关闭",
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
    name: "offset",
    type: "number",
    default: "20",
    description: "偏移的距离，单位像素",
  },
  {
    name: "slotContent",
    type: "VNode / Function",
    default: "—",
    description: "自定义底部插槽内容，支持 VNode 或返回 VNode 的函数",
  },
];

const notifiMessageApiMethods = [
  {
    name: "show(options)",
    description: "显示自定义通知",
    params: "options: { title?, message?, duration?, position?, showClose?, offset?, slotContent? }",
  },
  {
    name: "close(id)",
    description: "关闭指定 ID 的通知",
    params: "id: number",
  },
  {
    name: "closeAll()",
    description: "关闭所有通知",
    params: "无参数",
  },
];
</script>

<style scoped lang="scss">
.notifi-message-page {
  display: flex;
  flex-direction: column;
  gap: 32px;

  :deep(.example-notification-block + .example-notification-block) {
    margin-top: 10px;
  }

  :deep(.notification-demo-container .el-button + .el-button) {
    margin-left: 10px;
  }
}

:global(html.dark) {
  .notifi-message-page {
    :deep(.example-demonstration pre) {
      background: #0d1117;
      border: 1px solid #30363d;

      code {
        color: #e6edf3;
      }
    }
  }
}

@media (max-width: 768px) {
  .notifi-message-page {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .notifi-message-page {
    padding: 12px;
  }
}
</style>
