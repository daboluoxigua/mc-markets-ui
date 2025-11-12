<demo>
## 单独引用
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button plain @click="openManual">Import Notification</m-button>
      <span>Import Notification</span>
    </div>
  </div>
</template>

<script setup>
import { ElNotification } from "element-plus";

const openManual = () => {
  ElNotification({
    title: "Import Notification",
    message: "This is a notification imported separately",
  });
};
</script>
<!-- #endregion snippet -->

