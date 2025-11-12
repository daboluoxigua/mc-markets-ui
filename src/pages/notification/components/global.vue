<demo>
## 全局方法
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button plain @click="openGlobal">Global method</m-button>
      <span>Global Method</span>
    </div>
  </div>
</template>

<script setup>
import { ElNotification } from "element-plus";

const openGlobal = () => {
  ElNotification({
    title: "Global Method",
    message: "This is a global method call",
  });
};
</script>
<!-- #endregion snippet -->

