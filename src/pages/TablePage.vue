<template>
  <div class="table-page">
    <!-- 基础表格 -->
    <DemoSection title="基础表格">
      <m-table :data="tableData" style="width: 100%">
        <m-table-column prop="date" label="日期" width="180" />
        <m-table-column prop="name" label="姓名" width="180" />
        <m-table-column prop="address" label="地址" />
      </m-table>
    </DemoSection>

    <!-- 带斑马纹表格 -->
    <DemoSection title="带斑马纹表格">
      <m-table :data="tableData" stripe style="width: 100%">
        <m-table-column prop="date" label="日期" width="180" />
        <m-table-column prop="name" label="姓名" width="180" />
        <m-table-column prop="address" label="地址" />
      </m-table>
    </DemoSection>

    <!-- 带边框表格 -->
    <DemoSection title="带边框表格">
      <m-table :data="tableData" border style="width: 100%">
        <m-table-column prop="date" label="日期" width="180" />
        <m-table-column prop="name" label="姓名" width="180" />
        <m-table-column prop="address" label="地址" />
      </m-table>
    </DemoSection>

    <!-- 带状态表格 -->
    <DemoSection title="带状态表格">
      <m-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <m-table-column prop="date" label="日期" width="180" />
        <m-table-column prop="name" label="姓名" width="180" />
        <m-table-column prop="address" label="地址" />
      </m-table>
    </DemoSection>

    <!-- 固定表头 -->
    <DemoSection title="固定表头">
      <m-table :data="tableData" height="250" style="width: 100%">
        <m-table-column prop="date" label="日期" width="180" />
        <m-table-column prop="name" label="姓名" width="180" />
        <m-table-column prop="address" label="地址" />
      </m-table>
    </DemoSection>

    <!-- 多选 -->
    <DemoSection title="多选">
      <m-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <m-table-column type="selection" width="55" />
        <m-table-column prop="date" label="日期" width="180" />
        <m-table-column prop="name" label="姓名" width="180" />
        <m-table-column prop="address" label="地址" />
      </m-table>
      <div style="margin-top: 20px">
        <m-button @click="toggleSelection([tableData[1], tableData[2]])">
          切换第二、第三行的选中状态
        </m-button>
        <m-button @click="toggleSelection()">取消选择</m-button>
      </div>
    </DemoSection>

    <!-- 排序 -->
    <DemoSection title="排序">
      <m-table :data="tableData" style="width: 100%">
        <m-table-column prop="date" label="日期" width="180" sortable />
        <m-table-column prop="name" label="姓名" width="180" sortable />
        <m-table-column prop="address" label="地址" />
      </m-table>
    </DemoSection>

    <!-- 筛选 -->
    <DemoSection title="筛选">
      <m-table :data="tableData" style="width: 100%">
        <m-table-column prop="date" label="日期" width="180" />
        <m-table-column prop="name" label="姓名" width="180" />
        <m-table-column
          prop="address"
          label="地址"
          :filters="[
            { text: '上海', value: '上海' },
            { text: '北京', value: '北京' },
          ]"
          :filter-method="filterHandler"
        />
      </m-table>
    </DemoSection>

    <!-- 自定义列模板 -->
    <DemoSection title="自定义列模板">
      <m-table :data="tableData" style="width: 100%">
        <m-table-column prop="date" label="日期" width="180" />
        <m-table-column prop="name" label="姓名" width="180" />
        <m-table-column prop="address" label="地址" />
        <m-table-column label="操作">
          <template #default="scope">
            <m-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)"
            >
              编辑
            </m-button>
            <m-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </m-button>
          </template>
        </m-table-column>
      </m-table>
    </DemoSection>

    <!-- 展开行 -->
    <DemoSection title="展开行">
      <m-table :data="tableData" style="width: 100%">
        <m-table-column type="expand">
          <template #default="props">
            <p>状态: {{ props.row.status }}</p>
            <p>城市: {{ props.row.city }}</p>
          </template>
        </m-table-column>
        <m-table-column prop="date" label="日期" width="180" />
        <m-table-column prop="name" label="姓名" width="180" />
        <m-table-column prop="address" label="地址" />
      </m-table>
    </DemoSection>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import DemoSection from '@/components/DemoSection.vue'

// 表格数据
const tableData = reactive([
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    status: '正常',
    city: '上海'
  },
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    status: '正常',
    city: '上海'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    status: '正常',
    city: '上海'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    status: '正常',
    city: '上海'
  }
])

// 多选相关
const multipleTableRef = ref()
const multipleSelection = ref([])

// 方法
const tableRowClassName = ({ rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const toggleSelection = (rows) => {
  if (rows) {
    rows.forEach(row => {
      multipleTableRef.value.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value.clearSelection()
  }
}

const filterHandler = (value, row, column) => {
  const property = column['property']
  return row[property] === value
}

const handleEdit = (index, row) => {
  console.log(index, row)
}

const handleDelete = (index, row) => {
  console.log(index, row)
}
</script>

<style lang="scss" scoped>
.table-page {
  padding: 20px;
}

:deep(.el-table .warning-row) {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

:deep(.el-table .success-row) {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
