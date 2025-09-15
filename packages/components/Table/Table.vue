<template>
  <el-table v-bind="$attrs" class="m-table">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-table>
</template>

<script setup>
defineOptions({
  name: "MTable",
});
</script>
<style lang="scss">
// Table 组件样式 - 使用更具体的选择器确保样式优先级
.m-table.el-table {
  --el-table-header-bg-color: var(--bg-quaternary);
  --el-table-row-hover-bg-color: var(--bg-secondary);
  --el-table-border-color: var(--border-primary);
  --el-table-header-text-color: var(--text-tertiary);
  --el-table-tr-bg-color: transparent;

  border-radius: 8px;

  .el-table__row:last-of-type {
    .el-table__cell {
      border-bottom: none;
    }
  }

  .el-table__inner-wrapper::before {
    display: none;
  }
  th.el-table__cell.is-leaf {
    border-bottom: none;
  }
}
</style>
