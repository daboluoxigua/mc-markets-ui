<demo>
## 带状态表格
</demo>
<!-- #region snippet -->
<template>
  <m-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
    <m-table-column prop="date" label="日期" width="180" />
    <m-table-column prop="name" label="姓名" width="180" />
    <m-table-column prop="address" label="地址" align="right" />
  </m-table>
</template>

<script setup>
import { reactive } from "vue";

const tableData = reactive([
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
  },
]);

const tableRowClassName = ({ rowIndex }) => {
  if (rowIndex === 1) {
    return "warning-row";
  }
  if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};
</script>

<style scoped lang="scss">
:deep(.el-table .warning-row) {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

:deep(.el-table .success-row) {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
<!-- #endregion snippet -->

