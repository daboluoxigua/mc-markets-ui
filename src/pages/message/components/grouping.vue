<demo>
## 分组消息合并
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button @click="openGroupingMessage">分组消息</m-button>
      <span>Grouping</span>
    </div>
    <div class="doc-item">
      <m-button @click="openMultipleMessages">多条消息</m-button>
      <span>Multiple</span>
    </div>
  </div>
</template>

<script setup>
import { Message } from "@mc-markets/ui";

const openGroupingMessage = () => {
  Message.success({
    message: "这是一条分组消息",
    grouping: true,
  });
};

const openMultipleMessages = () => {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      Message.success({
        message: "这是一条重复消息",
        grouping: true,
      });
    }, i * 500);
  }
};
</script>
<!-- #endregion snippet -->

