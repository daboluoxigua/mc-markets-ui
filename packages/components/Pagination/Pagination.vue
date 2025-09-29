<template>
  <el-pagination v-bind="$attrs" class="m-pagination">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-pagination>
</template>

<script setup>
defineOptions({
  name: "MPagination",
});
</script>

<style lang="scss">
.m-pagination {
  --el-border-color-hover: var(--border-tertiary) !important;
  --el-pagination-button-bg-color: var(--bg-tertiary-hover) !important;
  &.is-background .el-pager li.is-active {
    color: var(--text-quaternary) !important;
  }
  .el-pager li{
    border-radius: var(--xs);
    border: 1px solid transparent;
    &:hover {
      border: 1px solid var(--border-tertiary);
      color: var(--text-primary);
    }
  }
  .el-select .el-select__wrapper {
    width: 112px;
    min-height: 32px;
    padding: 5px 8px;
    border-radius: var(--xs);
    background-color: var(--bg-tertiary-hover);
  }
  .el-input .el-input__wrapper {
    height: 30px;
    border-radius: var(--xs);
    background-color: var(--bg-tertiary-hover);
  }
  .el-pagination.is-background {
    background-color: var(--bg-tertiary-hover);
  }
  .el-pager .number {
    font-size: var(--font-size-text-sm);
    font-weight: 500;
  }
  .btn-prev,
  .btn-next {
    &:disabled {
      background-color: transparent !important;
    }
    &:hover:not(:disabled) {
      border: 1px solid var(--border-tertiary);
      color: var(--text-primary);
    }
    background-color: transparent !important;
  }
}
</style>
