<demo>
## 禁用渐变动画
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-tag closable type="primary">默认动画</m-tag>
      <span>Default Animation</span>
    </div>
    <div class="doc-item">
      <m-tag closable :disable-transitions="true" type="success">禁用动画</m-tag>
      <span>Disabled Animation</span>
    </div>
  </div>
</template>
<!-- #endregion snippet -->
