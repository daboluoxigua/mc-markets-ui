<demo>
## 自定义消息弹出的位置
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button plain @click="openTopRight">Top Right</m-button>
      <span>Top Right</span>
    </div>
    <div class="doc-item">
      <m-button plain @click="openBottomRight">Bottom Right</m-button>
      <span>Bottom Right</span>
    </div>
    <div class="doc-item">
      <m-button plain @click="openBottomLeft">Bottom Left</m-button>
      <span>Bottom Left</span>
    </div>
    <div class="doc-item">
      <m-button plain @click="openTopLeft">Top Left</m-button>
      <span>Top Left</span>
    </div>
  </div>
</template>

<script setup>
import { ElNotification } from "element-plus";

const openTopRight = () => {
  ElNotification({
    title: "Custom Position",
    message: "I am at the top right corner",
  });
};

const openBottomRight = () => {
  ElNotification({
    title: "Custom Position",
    message: "I am at the bottom right corner",
    position: "bottom-right",
  });
};

const openBottomLeft = () => {
  ElNotification({
    title: "Custom Position",
    message: "I am at the bottom left corner",
    position: "bottom-left",
  });
};

const openTopLeft = () => {
  ElNotification({
    title: "Custom Position",
    message: "I am at the top left corner",
    position: "top-left",
  });
};
</script>
<!-- #endregion snippet -->

