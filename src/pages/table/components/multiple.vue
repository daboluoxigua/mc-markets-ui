<demo>
## 多选
</demo>
<!-- #region snippet -->
<template>
  <div>
    <m-table
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <m-table-column type="selection" width="55" />
      <m-table-column prop="date" label="日期" width="180" />
      <m-table-column prop="name" label="姓名" width="180" />
      <m-table-column prop="address" label="地址" align="right" />
    </m-table>
    <div style="margin-top: 20px">
      <m-button @click="toggleSelection([tableData[1], tableData[2]])">
        切换第二、第三行的选中状态
      </m-button>
      <m-button @click="toggleSelection()">取消选择</m-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const multipleTableRef = ref();
const multipleSelection = ref([]);

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

const handleSelectionChange = (val) => {
  multipleSelection.value = val;
};

const toggleSelection = (rows) => {
  if (rows && multipleTableRef.value) {
    rows.forEach((row) => {
      multipleTableRef.value.toggleRowSelection(row, undefined);
    });
  } else if (multipleTableRef.value) {
    multipleTableRef.value.clearSelection();
  }
};
</script>
<!-- #endregion snippet -->

