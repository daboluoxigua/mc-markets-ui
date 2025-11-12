<demo>
## 基础使用
</demo>
<!-- #region snippet -->
<template>
  <div class="demo-container">
    <div class="demo-item">
      <h4>可关闭</h4>
      <m-banner
        type="info"
        content="点击右侧的 X 可以关闭这个 Banner"
        :closable="true"
        @close="handleClose('可关闭 Banner')"
      />
    </div>
    <div class="demo-item">
      <h4>不可关闭</h4>
      <m-banner
        type="warning"
        content="这个 Banner 无法关闭"
        :closable="false"
      />
    </div>
  </div>
</template>

<script setup>
import { MMessage } from "@mc-markets/ui";

const handleClose = (message) => {
  MMessage.success(`${message} 已关闭`);
};
</script>
<!-- #endregion snippet -->

