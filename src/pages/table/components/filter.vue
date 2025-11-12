<demo>
## 筛选
</demo>
<!-- #region snippet -->
<template>
  <m-table :data="tableData" style="width: 100%">
    <m-table-column prop="date" label="日期" width="180" />
    <m-table-column prop="name" label="姓名" width="180" />
    <m-table-column
      prop="address"
      label="地址"
      align="right"
      :filters="filters"
      :filter-method="filterHandler"
    />
  </m-table>
</template>

<script setup>
import { reactive } from "vue";

const tableData = reactive([
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海",
  },
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "北京",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "北京",
  },
]);

const filters = [
  { text: "上海", value: "上海" },
  { text: "北京", value: "北京" },
];

const filterHandler = (value, row, column) => {
  const property = column.property;
  return row[property] === value;
};
</script>
<!-- #endregion snippet -->

