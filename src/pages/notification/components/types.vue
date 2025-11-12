<demo>
## 不同类型的通知
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button plain @click="openPrimary">Primary</m-button>
      <span>Primary</span>
    </div>
    <div class="doc-item">
      <m-button plain @click="openSuccess">Success</m-button>
      <span>Success</span>
    </div>
    <div class="doc-item">
      <m-button plain @click="openWarning">Warning</m-button>
      <span>Warning</span>
    </div>
    <div class="doc-item">
      <m-button plain @click="openInfo">Info</m-button>
      <span>Info</span>
    </div>
    <div class="doc-item">
      <m-button plain @click="openError">Error</m-button>
      <span>Error</span>
    </div>
  </div>
</template>

<script setup>
import { ElNotification } from "element-plus";

const openPrimary = () => {
  ElNotification({
    title: "Primary",
    message: "This is a primary message",
    type: "primary",
  });
};

const openSuccess = () => {
  ElNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};

const openWarning = () => {
  ElNotification({
    title: "Warning",
    message: "This is a warning message",
    type: "warning",
  });
};

const openInfo = () => {
  ElNotification({
    title: "Info",
    message: "This is an info message",
    type: "info",
  });
};

const openError = () => {
  ElNotification({
    title: "Error",
    message: "This is an error message",
    type: "error",
  });
};
</script>
<!-- #endregion snippet -->

