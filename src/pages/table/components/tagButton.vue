<demo>
## Tag和Button组合表格
</demo>
<!-- #region snippet -->
<template>
  <m-table
    :data="tableData"
    style="width: 100%"
    show-overflow-tooltip
    tooltip-effect="light"
  >
    <m-table-column prop="id" label="ID" width="80" />
    <m-table-column prop="name" label="姓名" />
    <m-table-column prop="department" label="部门" />
    <m-table-column prop="status" label="状态">
      <template #default="scope">
        <m-tag :type="getStatusType(scope.row.status)">
          {{ scope.row.status }}
        </m-tag>
      </template>
    </m-table-column>
    <m-table-column prop="level" label="等级" width="120">
      <template #default="scope">
        <m-tag :type="getLevelType(scope.row.level)">
          {{ scope.row.level }}
        </m-tag>
      </template>
    </m-table-column>
    <m-table-column label="操作" align="right" width="200" fixed="right">
      <template #default="scope">
        <m-button text @click="handleView(scope.$index, scope.row)">查看</m-button>
        <m-button link @click="handleEdit(scope.$index, scope.row)">编辑</m-button>
        <m-button text @click="handleDelete(scope.$index, scope.row)">删除</m-button>
      </template>
    </m-table-column>
  </m-table>
</template>

<script setup>
import { reactive } from "vue";

const tableData = reactive([
  {
    id: 1,
    name: "张三张三张三张三张三张三张三张三张三张三",
    department: "技术部",
    status: "在线",
    level: "高级",
  },
  {
    id: 2,
    name: "李四",
    department: "产品部",
    status: "离线",
    level: "中级",
  },
  {
    id: 3,
    name: "王五",
    department: "设计部",
    status: "忙碌",
    level: "初级",
  },
  {
    id: 4,
    name: "赵六",
    department: "运营部",
    status: "在线",
    level: "高级",
  },
  {
    id: 5,
    name: "钱七",
    department: "市场部",
    status: "离线",
    level: "中级",
  },
  {
    id: 6,
    name: "钱七",
    department: "市场部",
    status: "离线",
    level: "中级",
  },
]);

const statusMap = {
  在线: "success",
  离线: "info",
  忙碌: "warning",
};

const levelMap = {
  高级: "danger",
  中级: "warning",
  初级: "success",
};

const getStatusType = (status) => statusMap[status] || "info";
const getLevelType = (level) => levelMap[level] || "info";

const handleView = (index, row) => {
  console.log("查看:", index, row);
};

const handleEdit = (index, row) => {
  console.log("编辑:", index, row);
};

const handleDelete = (index, row) => {
  console.log("删除:", index, row);
};
</script>
<!-- #endregion snippet -->

