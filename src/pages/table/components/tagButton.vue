<demo>
## Tag和Button组合表格
</demo>
<!-- #region snippet -->
<template>
  <m-table
    ref="tableRef"
    :data="tableData"
    style="width: 100%"
    tooltip-effect="light"
  >
    <m-table-column
      v-for="(column, index) in tableColumns"
      :key="column.prop || column.label || index"
      :prop="column.prop"
      :label="column.label"
      :min-width="columnMinWidths[index] || 80"
      :align="column.align"
      :fixed="column.fixed"
    >
      <template v-if="column.render" #default="scope">
        <RenderWrapper :render="column.render" :scope="scope" />
      </template>
      <template v-else-if="column.slot === 'status'" #default="scope">
        <div style="display: flex; align-items: center; gap: 8px;">
          <img
            :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"
            alt="avatar"
            class="table-avatar"
          />
          <m-tag :type="getStatusType(scope.row.status)">
            {{ scope.row.status }}
          </m-tag>
        </div>
      </template>
      <template v-else-if="column.slot === 'level'" #default="scope">
        <m-tag :type="getLevelType(scope.row.level)">
          {{ scope.row.level }}
        </m-tag>
      </template>
      <template v-else-if="column.slot === 'action'" #default="scope">
        <div class="handle-button-group">
          <m-button text @click="handleView(scope.$index, scope.row)"
            >查看</m-button
          >
          <m-button link @click="handleEdit(scope.$index, scope.row)"
            >编辑</m-button
          >
          <m-button text @click="handleDelete(scope.$index, scope.row)"
            >删除</m-button
          >
        </div>
      </template>
    </m-table-column>
  </m-table>
</template>

<script setup>
import { reactive, ref, onMounted, h, defineComponent } from "vue";
import { useTableColumnWidth } from "@packages/hooks/useTableColumnWidth.js";

// Render 函数包装组件
const RenderWrapper = defineComponent({
  props: {
    render: {
      type: Function,
      required: true,
    },
    scope: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return () => props.render(h, props.scope);
  },
});

const tableRef = ref(null);

// 使用表格列宽度计算 Hook
const { columnMinWidths, calculateColumnWidths } = useTableColumnWidth({
  cellPadding: 16, // 单元格左右间距各8px，共16px
  minWidth: 80, // 列最小宽度
  delay: 200, // 延迟时间，确保表格完全渲染
});

// 表格列配置
const tableColumns = reactive([
  {
    prop: "id",
    label: "ID",
    width: "80",
  },
  {
    prop: "name",
    label: "姓名2",
    render: (h, scope) => {
      return h("div", {
        style: {
          fontSize: "36px",
        },
      },scope.row.name);
    },
  },
  {
    prop: "department",
    label: "部门",
  },
  {
    prop: "status",
    label: "状态",
    slot: "status",
  },
  {
    prop: "level",
    label: "等级",
    width: "120",
    slot: "level",
  },
  {
    label: "操作",
    align: "right",
    fixed: "right",
    slot: "action",
  },
]);

const tableData = reactive([
  {
    id: 1,
    name: "张三张三张三张三张三张三张三张三张三张三2",
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
  {
    id: 7,
    name: "测试换行",
    department: "测试部",
    status: "xx",
    level: "xx",
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


// 在组件挂载后计算列宽度
onMounted(() => {
  calculateColumnWidths(tableRef, (metadata) => {
    console.log(metadata);
  });
});
</script>
<style lang="scss" scoped>
.handle-button-group {
  display: flex;
  gap: 8px;
  .m-button {
    margin: 0 4px;
  }
}

.table-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
<!-- #endregion snippet -->
