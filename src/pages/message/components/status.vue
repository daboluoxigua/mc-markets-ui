<demo>
## 不同状态
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button @click="openSuccess">Success</m-button>
      <span>Success</span>
    </div>
    <div class="doc-item">
      <m-button @click="openWarning">Warning</m-button>
      <span>Warning</span>
    </div>
    <div class="doc-item">
      <m-button @click="openError">Error</m-button>
      <span>Error</span>
    </div>
  </div>
</template>

<script setup>
import { Message } from "@mc-markets/ui";

const openSuccess = () => {
  Message.success("恭喜，这是一条成功消息");
};

const openWarning = () => {
  Message.warning("警告，这是一条警告消息");
};

const openError = () => {
  Message.error("糟糕，这是一条错误消息");
};
</script>
<!-- #endregion snippet -->

