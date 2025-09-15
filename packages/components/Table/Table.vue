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
// Table 组件样式 - 无边框设计
.m-table.el-table {
  --el-table-header-bg-color: var(--bg-quaternary);
  --el-table-row-hover-bg-color: var(--bg-tertiary-hover);
  --el-table-border-color: transparent;
  --el-table-header-text-color: var(--text-tertiary);
  --el-table-tr-bg-color: transparent;

  border: none;
  border-radius: 8px;
  
  thead {
    th {
      font-weight: 500;
    }
    .cell {
      line-height: 28px;
    }
    .el-table__cell {
      padding: 8px 0px;
      border: none;
    }
  }

  .el-table__cell {
    padding: 18px 0px;
    border: none;
  }
  
  .cell {
    line-height: 20px;
    padding: 0 16px;
  }

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
  
  // 去掉所有边框
  .el-table__border-left-patch,
  .el-table__border-right-patch,
  .el-table__border-top-patch,
  .el-table__border-bottom-patch {
    display: none;
  }
  
  // 去掉单元格边框
  td.el-table__cell,
  th.el-table__cell {
    border-right: none;
    border-bottom: none;
  }
}
</style>
