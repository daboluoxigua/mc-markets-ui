<template>
  <div class="tables-page">
    <h2>表格组件</h2>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="age" label="年龄" width="80" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="scope">
          <el-tag
            :type="scope.row.status === 'active' ? 'success' : 'danger'"
          >
            {{ scope.row.status === "active" ? "活跃" : "禁用" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <Button size="small" @click="handleEdit(scope.row)"
            >编辑</Button
          >
          <Button
            size="small"
            type="danger"
            @click="handleDelete(scope.row)"
            >删除</Button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      style="margin-top: 20px; text-align: right"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Button } from '@mc-markets/ui'

// 表格数据
const tableData = ref([
  { name: "张三", age: 25, email: "zhangsan@example.com", status: "active" },
  { name: "李四", age: 30, email: "lisi@example.com", status: "inactive" },
  { name: "王五", age: 28, email: "wangwu@example.com", status: "active" },
  { name: "赵六", age: 35, email: "zhaoliu@example.com", status: "active" },
])

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

const handleEdit = (row) => {
  ElMessage.info(`编辑用户: ${row.name}`)
}

const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(`确定要删除用户 ${row.name} 吗？`, "确认删除", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
    ElMessage.success("删除成功！")
  } catch {
    ElMessage.info("已取消删除")
  }
}
</script>

<style scoped>
.tables-page {
  padding: 20px;
}
</style>
