<demo>
## 位置控制
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button @click="() => openPositionMessage('top')">顶部</m-button>
      <span>Top</span>
    </div>
    <div class="doc-item">
      <m-button @click="() => openPositionMessage('top-left')">左上</m-button>
      <span>Top Left</span>
    </div>
    <div class="doc-item">
      <m-button @click="() => openPositionMessage('top-right')">右上</m-button>
      <span>Top Right</span>
    </div>
    <div class="doc-item">
      <m-button @click="() => openPositionMessage('bottom')">底部</m-button>
      <span>Bottom</span>
    </div>
    <div class="doc-item">
      <m-button @click="() => openPositionMessage('bottom-left')">左下</m-button>
      <span>Bottom Left</span>
    </div>
    <div class="doc-item">
      <m-button @click="() => openPositionMessage('bottom-right')">右下</m-button>
      <span>Bottom Right</span>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { Message } from "@mc-markets/ui";

const counts = reactive({
  top: 0,
  bottom: 0,
  "top-left": 0,
  "top-right": 0,
  "bottom-left": 0,
  "bottom-right": 0,
});

const openPositionMessage = (placement) => {
  counts[placement] += 1;
  const text = `这是来自 ${placement} 位置的第 ${counts[placement]} 条消息`;

  const map = {
    top: "success",
    "top-left": "success",
    "top-right": "success",
    bottom: "warning",
    "bottom-left": "warning",
    "bottom-right": "error",
  };

  const type = map[placement] || "success";

  Message[type]({
    message: text,
    placement,
  });
};
</script>
<!-- #endregion snippet -->

