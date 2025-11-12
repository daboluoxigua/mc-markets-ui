<demo>
## HTML 片段消息
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button @click="openHtmlMessage">HTML 消息</m-button>
      <span>HTML Message</span>
    </div>
    <div class="doc-item">
      <m-button @click="openRichMessage">富文本消息</m-button>
      <span>Rich Message</span>
    </div>
  </div>
</template>

<script setup>
import { Message } from "@mc-markets/ui";

const openHtmlMessage = () => {
  Message.success({
    message: "<strong>这是</strong> <em>HTML</em> 消息",
    dangerouslyUseHTMLString: true,
  });
};

const openRichMessage = () => {
  Message.success({
    message: `
      <div style="line-height: 1.6;">
        <h4 style="margin: 0 0 8px 0; color: #67c23a;">富文本消息</h4>
        <p style="margin: 0; color: #606266;">这是一条包含 <span style="color: #f56c6c; font-weight: bold;">多种样式</span> 的消息</p>
        <ul style="margin: 8px 0 0 0; padding-left: 20px;">
          <li>支持 HTML 标签</li>
          <li>支持内联样式</li>
          <li>支持复杂布局</li>
        </ul>
      </div>
    `,
    dangerouslyUseHTMLString: true,
    duration: 5000,
  });
};
</script>
<!-- #endregion snippet -->

