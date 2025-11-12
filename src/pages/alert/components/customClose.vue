<demo>
## 自定义关闭按钮
</demo>
<!-- #region snippet -->
<template>
  <div class="example-alert-block">
    <div class="example-demonstration">
      你可以自定义关闭按钮为文字或其他符号。你可以设置 Alert 组件是否为可关闭状态，
      关闭按钮的内容以及关闭时的回调函数同样可以定制。
    </div>
    <div class="alert-demo-container">
      <m-alert title="Unclosable alert" type="success" :closable="false" />
      <m-alert title="Customized close text" type="success" close-text="Gotcha" />
      <m-alert title="Alert with callback" type="warning" @close="handleClose" />
    </div>
  </div>
</template>

<script setup>
const handleClose = () => {
  console.log("Alert 已关闭");
};
</script>
<!-- #endregion snippet -->

