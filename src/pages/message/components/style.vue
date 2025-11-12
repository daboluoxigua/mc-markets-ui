<demo>
## 自定义样式
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button @click="openCustomClass">自定义类名</m-button>
      <span>Custom Class</span>
    </div>
    <div class="doc-item">
      <m-button @click="openCustomDuration">自定义时长</m-button>
      <span>Custom Duration</span>
    </div>
  </div>
</template>

<script setup>
import { Message } from "@mc-markets/ui";

const openCustomClass = () => {
  Message.success({
    message: "这是一条带自定义样式的消息",
    customClass: "custom-message-class",
  });
};

const openCustomDuration = () => {
  Message.success({
    message: "这条消息会在 5 秒后自动关闭",
    duration: 5000,
  });
};
</script>
<!-- #endregion snippet -->

