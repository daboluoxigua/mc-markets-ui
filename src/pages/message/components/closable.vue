<demo>
## 可关闭的消息提示
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button @click="openCloseable">可关闭消息</m-button>
      <span>Closeable</span>
    </div>
    <div class="doc-item">
      <m-button @click="openPersistent">不自动关闭</m-button>
      <span>Persistent</span>
    </div>
    <div class="doc-item">
      <m-button @click="openWithCallback">带回调函数</m-button>
      <span>With Callback</span>
    </div>
  </div>
</template>

<script setup>
import { Message } from "@mc-markets/ui";

const openCloseable = () => {
  Message.success({
    message: "这是一条可关闭的消息",
    showClose: true,
  });
};

const openPersistent = () => {
  Message.warning({
    message: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa",
    duration: 0,
    showClose: true,
  });
};

const openWithCallback = () => {
  Message.success({
    message: "这条消息关闭时会触发回调",
    showClose: true,
    onClose: (instance) => {
      console.log("消息已关闭:", instance);
      Message.success("消息关闭回调已触发");
    },
  });
};
</script>
<!-- #endregion snippet -->

