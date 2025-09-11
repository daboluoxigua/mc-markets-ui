<template>
  <div class="table-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%">
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%">
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 带斑马纹表格 -->
    <section class="demo-section">
      <h2>带斑马纹表格</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" stripe style="width: 100%">
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" stripe style="width: 100%">
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 带边框表格 -->
    <section class="demo-section">
      <h2>带边框表格</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" border style="width: 100%">
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" border style="width: 100%">
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 带状态表格 -->
    <section class="demo-section">
      <h2>带状态表格</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 固定表头 -->
    <section class="demo-section">
      <h2>固定表头</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" height="250" style="width: 100%">
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" height="250" style="width: 100%">
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 固定列 -->
    <section class="demo-section">
      <h2>固定列</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%">
            <TableColumn prop="date" label="日期" width="180" fixed />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="state" label="状态" width="180" />
            <TableColumn prop="city" label="城市" width="180" />
            <TableColumn prop="address" label="地址" />
            <TableColumn prop="zip" label="邮编" width="180" fixed="right" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%">
  <TableColumn prop="date" label="日期" width="180" fixed />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="state" label="状态" width="180" />
  <TableColumn prop="city" label="城市" width="180" />
  <TableColumn prop="address" label="地址" />
  <TableColumn prop="zip" label="邮编" width="180" fixed="right" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 多级表头 -->
    <section class="demo-section">
      <h2>多级表头</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%">
            <TableColumn prop="date" label="日期" width="180" />
            <el-table-column label="配送信息">
              <TableColumn prop="name" label="姓名" width="120" />
              <TableColumn label="地址">
                <TableColumn prop="state" label="状态" width="120" />
                <TableColumn prop="city" label="城市" width="120" />
                <TableColumn prop="address" label="地址" />
                <TableColumn prop="zip" label="邮编" width="120" />
              </TableColumn>
            </el-table-column>
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%">
  <TableColumn prop="date" label="日期" width="180" />
  <el-table-column label="配送信息">
    <TableColumn prop="name" label="姓名" width="120" />
    <TableColumn label="地址">
      <TableColumn prop="state" label="状态" width="120" />
      <TableColumn prop="city" label="城市" width="120" />
      <TableColumn prop="address" label="地址" />
      <TableColumn prop="zip" label="邮编" width="120" />
    </TableColumn>
  </el-table-column>
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 单选 -->
    <section class="demo-section">
      <h2>单选</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%" @current-change="handleCurrentChange">
            <TableColumn type="selection" width="55" />
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%" @current-change="handleCurrentChange">
  <TableColumn type="selection" width="55" />
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 多选 -->
    <section class="demo-section">
      <h2>多选</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
            <TableColumn type="selection" width="55" />
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
  <TableColumn type="selection" width="55" />
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 排序 -->
    <section class="demo-section">
      <h2>排序</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%">
            <TableColumn prop="date" label="日期" width="180" sortable />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%">
  <TableColumn prop="date" label="日期" width="180" sortable />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 筛选 -->
    <section class="demo-section">
      <h2>筛选</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%">
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterHandler" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%">
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterHandler" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义列模板 -->
    <section class="demo-section">
      <h2>自定义列模板</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%">
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
            <TableColumn label="操作">
              <template #default="scope">
                <Button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</Button>
                <Button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</Button>
              </template>
            </TableColumn>
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%">
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
  <TableColumn label="操作">
    <template #default="scope">
      <Button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</Button>
      <Button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</Button>
    </template>
  </TableColumn>
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 展开行 -->
    <section class="demo-section">
      <h2>展开行</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%">
            <TableColumn type="expand">
              <template #default="props">
                <p>状态: {{ props.row.state }}</p>
                <p>城市: {{ props.row.city }}</p>
                <p>地址: {{ props.row.address }}</p>
                <p>邮编: {{ props.row.zip }}</p>
              </template>
            </TableColumn>
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          <!-- {{ `<Table :data="tableData" style="width: 100%">
  <TableColumn type="expand">
    <template #default="props">
      <p>状态: {{ props.row.state }}</p>
      <p>城市: {{ props.row.city }}</p>
      <p>地址: {{ props.row.address }}</p>
      <p>邮编: {{ props.row.zip }}</p>
    </template>
  </TableColumn>
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }} -->
        </CodeToggle>
      </div>
    </section>

    <!-- 树形数据与懒加载 -->
    <section class="demo-section">
      <h2>树形数据与懒加载</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData3" style="width: 100%" row-key="id" border lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData3" style="width: 100%" row-key="id" border lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义表头 -->
    <section class="demo-section">
      <h2>自定义表头</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%">
            <TableColumn prop="date" width="180">
              <template #header>
                <span style="color: #409EFF">日期</span>
              </template>
            </TableColumn>
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%">
  <TableColumn prop="date" width="180">
    <template #header>
      <span style="color: #409EFF">日期</span>
    </template>
  </TableColumn>
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 表尾合计行 -->
    <section class="demo-section">
      <h2>表尾合计行</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%" show-summary>
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%" show-summary>
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 合并行或列 -->
    <section class="demo-section">
      <h2>合并行或列</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%" :span-method="spanMethod">
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%" :span-method="spanMethod">
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义索引 -->
    <section class="demo-section">
      <h2>自定义索引</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Table :data="tableData" style="width: 100%">
            <TableColumn type="index" :index="indexMethod" />
            <TableColumn prop="date" label="日期" width="180" />
            <TableColumn prop="name" label="姓名" width="180" />
            <TableColumn prop="address" label="地址" />
          </Table>
        </div>
        <CodeToggle>
          {{ `<Table :data="tableData" style="width: 100%">
  <TableColumn type="index" :index="indexMethod" />
  <TableColumn prop="date" label="日期" width="180" />
  <TableColumn prop="name" label="姓名" width="180" />
  <TableColumn prop="address" label="地址" />
</Table>` }}
        </CodeToggle>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Table, TableColumn, Button } from '@mc-markets/ui'
import CodeToggle from './CodeToggle.vue'
import { ref } from 'vue'

// 响应式数据
const tableData = ref([
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    state: '上海',
    city: '普陀区',
    zip: '200333'
  },
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    state: '上海',
    city: '普陀区',
    zip: '200333'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    state: '上海',
    city: '普陀区',
    zip: '200333'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    state: '上海',
    city: '普陀区',
    zip: '200333'
  },
  {
    date: '2016-05-08',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    state: '上海',
    city: '普陀区',
    zip: '200333'
  },
  {
    date: '2016-05-06',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    state: '上海',
    city: '普陀区',
    zip: '200333'
  },
  {
    date: '2016-05-07',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    state: '上海',
    city: '普陀区',
    zip: '200333'
  }
])

const tableData2 = ref([
  {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }
])

const tableData3 = ref([
  {
    id: 1,
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    hasChildren: true
  },
  {
    id: 2,
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  },
  {
    id: 3,
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    hasChildren: true
  },
  {
    id: 4,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }
])

// 方法
const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}

const handleCurrentChange = (val) => {
  console.log('当前行:', val)
}

const handleSelectionChange = (val) => {
  console.log('选中行:', val)
}

const filterHandler = (value, row, column) => {
  const property = column['property']
  return row[property] === value
}

const handleEdit = (index, row) => {
  console.log('编辑', index, row)
}

const handleDelete = (index, row) => {
  console.log('删除', index, row)
}

const load = (tree, treeNode, resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 31,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        id: 32,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
    ])
  }, 1000)
}

const spanMethod = ({ row, column, rowIndex, columnIndex }) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}

const indexMethod = (index) => {
  return index * 2
}
</script>

<style scoped>
.table-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #555;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

.demo-section {
  margin-bottom: 40px;
}

/* 演示卡片样式 */
.demo-card {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-preview {
  padding: 20px;
  background: #fafafa;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .table-demo {
    padding: 15px;
  }
}
</style>
