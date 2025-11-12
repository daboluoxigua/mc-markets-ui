<demo>
## 基础用法
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button plain @click="openAuto">Closes automatically</m-button>
      <span>Auto Close</span>
    </div>
    <div class="doc-item">
      <m-button plain @click="openPersistent">Won't close automatically</m-button>
      <span>Persistent</span>
    </div>
  </div>
</template>

<script setup>
import { h } from "vue";
import { ElNotification } from "element-plus";

const openAuto = () => {
  ElNotification({
    title: "Title",
    message: h("i", { style: "color: teal" }, "This is a reminder"),
  });
};

const openPersistent = () => {
  ElNotification({
    title: "Prompt",
    message: "This is a message that does not automatically close",
    duration: 0,
  });
};
</script>
<!-- #endregion snippet -->

