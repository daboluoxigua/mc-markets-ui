<demo>
## 自定义列模板
</demo>
<!-- #region snippet -->
<template>
  <m-table :data="tableData" style="width: 100%">
    <m-table-column prop="date" label="日期" width="180" />
    <m-table-column prop="name" label="姓名" width="180" />
    <m-table-column prop="address" label="地址" align="right" />
    <m-table-column label="操作" align="right">
      <template #default="scope">
        <m-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</m-button>
        <m-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
          删除
        </m-button>
      </template>
    </m-table-column>
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

const handleEdit = (index, row) => {
  console.log("编辑:", index, row);
};

const handleDelete = (index, row) => {
  console.log("删除:", index, row);
};
</script>
<!-- #endregion snippet -->

