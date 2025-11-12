<demo>
## 自定义描述
</demo>
<!-- #region snippet -->
<template>
  <div class="example-empty-block">
    <div class="example-demonstration">通过 description 插槽来自定义描述内容。</div>
    <div class="empty-demo-container">
      <m-empty>
        <template #description>
          <span>
            自定义 <a href="#">描述文字</a>
          </span>
        </template>
      </m-empty>
    </div>
  </div>
</template>

<style scoped lang="scss">
.example-demonstration a {
  color: var(--el-color-primary);
  text-decoration: none;
}
</style>
<!-- #endregion snippet -->
