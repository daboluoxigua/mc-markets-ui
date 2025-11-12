<demo>
## 使用 HTML 片段作为正文内容
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button plain @click="openHtml">Use HTML String</m-button>
      <span>HTML String</span>
    </div>
  </div>
</template>

<script setup>
import { ElNotification } from "element-plus";

const openHtml = () => {
  ElNotification({
    title: "HTML String",
    dangerouslyUseHTMLString: true,
    message: "<strong>This is <i>HTML</i> string</strong>",
  });
};
</script>
<!-- #endregion snippet -->

