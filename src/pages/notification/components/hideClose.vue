<demo>
## 隐藏关闭按钮
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button plain @click="openHideClose">Hide close button</m-button>
      <span>Hide Close</span>
    </div>
  </div>
</template>

<script setup>
import { ElNotification } from "element-plus";

const openHideClose = () => {
  ElNotification({
    title: "Info",
    message: "This is a message without close button",
    showClose: false,
  });
};
</script>
<!-- #endregion snippet -->

