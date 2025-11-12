<demo>
## 自定义图标
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button @click="openCustomIcon">自定义图标</m-button>
      <span>Custom Icon</span>
    </div>
    <div class="doc-item">
      <m-button @click="openNoIcon">无图标</m-button>
      <span>No Icon</span>
    </div>
  </div>
</template>

<script setup>
import { Message } from "@mc-markets/ui";

const openCustomIcon = () => {
  Message.success({
    message: "这是一条带自定义图标的消息",
    icon: "Star",
  });
};

const openNoIcon = () => {
  Message.success({
    message: "这是一条没有图标的消息",
    showIcon: false,
    icon: "",
  });
};
</script>
<!-- #endregion snippet -->

