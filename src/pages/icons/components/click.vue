<demo>
## 点击事件
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item clickable" @click="handleIconClick('home-filled')">
      <m-icon name="home-filled" :size="24" />
      <span>点击我</span>
    </div>
  </div>
  <p v-if="clickedIcon" class="click-result">
    你点击了图标: {{ clickedIcon }}
  </p>
</template>

<script setup>
import { ref } from "vue";
import { Message } from "@mc-markets/ui";

const clickedIcon = ref("");

const handleIconClick = (iconName) => {
  clickedIcon.value = iconName;
  Message.success("复制成功");
  setTimeout(() => {
    clickedIcon.value = "";
  }, 2000);
};
</script>
<!-- #endregion snippet -->

