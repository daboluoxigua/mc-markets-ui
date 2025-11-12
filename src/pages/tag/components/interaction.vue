<demo>
## 交互演示
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-tag type="primary" @click="handleClick">点击事件</m-tag>
      <span>Click Event</span>
    </div>
    <div class="doc-item">
      <m-tag closable type="success" @close="handleCloseEvent">关闭事件</m-tag>
      <span>Close Event</span>
    </div>
  </div>
</template>

<script setup>
import { Message } from "@mc-markets/ui";

const handleClick = () => {
  Message.success("Tag 被点击了！");
};

const handleCloseEvent = () => {
  Message.info("Tag 关闭事件触发！");
};
</script>
<!-- #endregion snippet -->
