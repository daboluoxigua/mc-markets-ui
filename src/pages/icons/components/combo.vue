<demo>
## 组合效果
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-icon name="refresh-cw" :spin="true" color="#ff6b6b" :size="24" />
      <span>旋转+颜色+大小</span>
    </div>
    <div class="doc-item">
      <m-icon name="heart-handshake" :pulse="true" color="#4ecdc4" :size="24" />
      <span>脉冲+颜色+大小</span>
    </div>
    <div class="doc-item">
      <m-icon
        name="arrow-right-left"
        :rotate="45"
        flip="horizontal"
        color="#45b7d1"
        :size="24"
      />
      <span>旋转+翻转+颜色+大小</span>
    </div>
  </div>
</template>
<!-- #endregion snippet -->

