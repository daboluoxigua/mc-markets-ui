<demo>
## 基础用法
</demo>
<!-- #region snippet -->
<template>
  <div>
    <div class="example-pagination-block">
      <div class="example-demonstration">When you have few pages</div>
      <m-pagination layout="prev, pager, next" :total="50" />
    </div>
    <div class="example-pagination-block">
      <div class="example-demonstration">When you have more than 7 pages</div>
      <m-pagination layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}

.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
<!-- #endregion snippet -->

