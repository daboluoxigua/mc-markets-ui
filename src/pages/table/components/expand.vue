<demo>
## 展开行
</demo>
<!-- #region snippet -->
<template>
  <m-table :data="tableData" style="width: 100%">
    <m-table-column type="expand">
      <template #default="props">
        <p>状态: {{ props.row.status }}</p>
        <p>城市: {{ props.row.city }}</p>
      </template>
    </m-table-column>
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
    status: "正常",
    city: "上海",
  },
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    status: "正常",
    city: "上海",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    status: "正常",
    city: "上海",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄",
    status: "正常",
    city: "上海",
  },
]);
</script>
<!-- #endregion snippet -->

