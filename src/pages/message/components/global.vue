<demo>
## 全局方法演示
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button @click="openGlobalMessage">全局消息</m-button>
      <span>Global Message</span>
    </div>
    <div class="doc-item">
      <m-button @click="closeAllMessages">关闭所有消息</m-button>
      <span>Close All</span>
    </div>
  </div>
</template>

<script setup>
import { Message } from "@mc-markets/ui";

const openGlobalMessage = () => {
  Message.success({
    message: "这是通过全局方法显示的消息",
  });
};

const closeAllMessages = () => {
  Message.closeAll();
  Message.success("所有消息已关闭");
};
</script>
<!-- #endregion snippet -->

