<template>
  <div class="message-page">
    <DemoSection
      title="消息示例"
      :component="[
        StatusMessages,
        ClosableMessages,
        HtmlMessages,
        GroupingMessages,
        PlacementMessages,
        IconMessages,
        StyleMessages,
        GlobalMessages,
        InteractiveMessages,
      ]"
    />

    <ApiDocs
      title="Message API"
      :props="messageApiProps"
      props-title="Message 配置项"
      :events="messageApiEvents"
      events-title="Message 事件"
      :methods="messageApiMethods"
      methods-title="Message 方法"
    />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import StatusMessages from "./components/status.vue";
import ClosableMessages from "./components/closable.vue";
import HtmlMessages from "./components/html.vue";
import GroupingMessages from "./components/grouping.vue";
import PlacementMessages from "./components/placement.vue";
import IconMessages from "./components/icon.vue";
import StyleMessages from "./components/style.vue";
import GlobalMessages from "./components/global.vue";
import InteractiveMessages from "./components/interactive.vue";

const messageApiProps = [
  {
    name: "message",
    type: "string / VNode / Function",
    default: "''",
    description: "消息文字",
  },
  {
    name: "type",
    type: "enum",
    default: "success",
    description: "消息类型，可选值：success / warning / error",
    values: ["success", "warning", "error"],
  },
  {
    name: "icon",
    type: "string / Component",
    default: "-",
    description: "自定义图标，该属性会覆盖 type 的图标",
  },
  {
    name: "dangerouslyUseHTMLString",
    type: "boolean",
    default: "false",
    description: "是否将 message 属性作为 HTML 片段处理",
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
    default: "3000",
    description: "显示时间，单位毫秒。设为 0 则不会自动关闭",
  },
  {
    name: "showClose",
    type: "boolean",
    default: "false",
    description: "是否显示关闭按钮",
  },
  {
    name: "onClose",
    type: "Function",
    default: "-",
    description: "关闭时的回调函数，参数为被关闭的 message 实例",
  },
  {
    name: "offset",
    type: "number",
    default: "16",
    description: "设置到视口边缘的距离",
  },
  {
    name: "placement",
    type: "enum",
    default: "top",
    description: "消息放置位置",
    values: ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"],
  },
  {
    name: "appendTo",
    type: "CSSSelector / HTMLElement",
    default: "-",
    description: "设置 message 的根元素，默认为 document.body",
  },
  {
    name: "grouping",
    type: "boolean",
    default: "false",
    description: "合并内容相同的消息，不支持 VNode 类型的消息",
  },
  {
    name: "repeatNum",
    type: "number",
    default: "1",
    description: "重复次数，类似 Badge。与 grouping 一起使用时作为初始数量",
  },
];

const messageApiEvents = [
  {
    name: "close",
    description: "关闭时的回调函数",
    params: "(instance: MessageInstance)",
  },
];

const messageApiMethods = [
  {
    name: "Message(options)",
    description: "显示消息",
    params: "(options: MessageOptions | string)",
  },
  {
    name: "Message.success(message)",
    description: "显示成功消息",
    params: "(message: string)",
  },
  {
    name: "Message.warning(message)",
    description: "显示警告消息",
    params: "(message: string)",
  },
  {
    name: "Message.error(message)",
    description: "显示错误消息",
    params: "(message: string)",
  },
  {
    name: "instance.close()",
    description: "关闭当前的 Message 实例",
    params: "()",
  },
  {
    name: "Message.closeAll()",
    description: "关闭所有 Message 实例",
    params: "()",
  },
];
</script>

<style scoped lang="scss">
.message-page {
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

  :deep(.custom-message-class) {
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
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

