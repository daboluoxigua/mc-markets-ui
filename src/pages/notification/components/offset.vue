<demo>
## 有位置偏移的通知栏
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button plain @click="openOffset">Notification with offset</m-button>
      <span>Offset</span>
    </div>
  </div>
</template>

<script setup>
import { ElNotification } from "element-plus";

const openOffset = () => {
  ElNotification({
    title: "Offset",
    message: "This is a notification with offset",
    offset: 100,
  });
};
</script>
<!-- #endregion snippet -->

