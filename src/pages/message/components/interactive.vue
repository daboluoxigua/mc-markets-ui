<demo>
## 交互演示
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button @click="openLoadingMessage">加载消息</m-button>
      <span>Loading</span>
    </div>
    <div class="doc-item">
      <m-button @click="openAsyncMessage">异步消息</m-button>
      <span>Async</span>
    </div>
    <div class="doc-item">
      <m-button @click="openProgressMessage">进度消息</m-button>
      <span>Progress</span>
    </div>
  </div>
</template>

<script setup>
import { Message } from "@mc-markets/ui";

const openLoadingMessage = () => {
  const handler = Message.success({
    message: "正在加载中...",
    duration: 0,
    showClose: true,
  });

  setTimeout(() => {
    handler.close();
    Message.success("加载完成！");
  }, 2000);
};

const openAsyncMessage = () => {
  Message.success("开始异步操作...");

  setTimeout(() => {
    Message.success("异步操作完成！");
  }, 1500);
};

const openProgressMessage = () => {
  let progress = 0;
  const handler = Message.success({
    message: `上传进度: ${progress}%`,
    duration: 0,
    showClose: true,
  });

  const interval = setInterval(() => {
    progress += 10;
    handler.message = `上传进度: ${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        handler.close();
        Message.success("上传完成！");
      }, 500);
    }
  }, 300);
};
</script>
<!-- #endregion snippet -->

