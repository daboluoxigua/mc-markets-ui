<template>
  <div id="app" class="demo-app">
    <!-- 头部导航 -->
    <el-header class="demo-header">
      <div class="header-content">
        <h1>@mc-markets/ui Demo</h1>
        <div class="header-actions">
          <el-select v-model="selectedTheme" @change="handleThemeChange" placeholder="选择主题">
            <el-option
              v-for="theme in themes"
              :key="theme.name"
              :label="theme.label"
              :value="theme.name"
            />
          </el-select>
          <el-switch
            v-model="isDark"
            @change="handleDarkModeChange"
            active-text="暗色模式"
            style="margin-left: 20px;"
          />
        </div>
      </div>
    </el-header>

    <!-- 主要内容 -->
    <el-container class="demo-container">
      <el-aside width="250px" class="demo-sidebar">
        <el-menu
          :default-active="activeMenu"
          @select="handleMenuSelect"
          class="demo-menu"
        >
          <el-menu-item index="components">
            <el-icon><Grid /></el-icon>
            <span>组件展示</span>
          </el-menu-item>
          <el-menu-item index="colors">
            <el-icon><Grid /></el-icon>
            <span>颜色</span>
          </el-menu-item>
          <el-menu-item index="buttons">
            <el-icon><Grid /></el-icon>
            <span>按钮</span>
          </el-menu-item>
          <el-menu-item index="forms">
            <el-icon><Edit /></el-icon>
            <span>表单组件</span>
          </el-menu-item>
          <el-menu-item index="tables">
            <el-icon><List /></el-icon>
            <span>表格组件</span>
          </el-menu-item>
          <el-menu-item index="theme">
            <el-icon><Setting /></el-icon>
            <span>主题配置</span>
          </el-menu-item>
          <el-menu-item index="i18n">
            <el-icon><Translation /></el-icon>
            <span>国际化</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main class="demo-main">
        <div class="demo-content">
          <!-- 组件展示 -->
          <div v-if="activeMenu === 'components'" class="demo-section">
            <h2>组件展示</h2>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-card class="demo-card">
                  <template #header>
                    <div class="card-header">
                      <span>按钮组件</span>
                    </div>
                  </template>
                  <div class="button-group">
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                    <el-button type="info">信息按钮</el-button>
                  </div>
                </el-card>
              </el-col>
              
              <el-col :span="8">
                <el-card class="demo-card">
                  <template #header>
                    <div class="card-header">
                      <span>输入组件</span>
                    </div>
                  </template>
                  <div class="input-group">
                    <el-input v-model="inputValue" placeholder="请输入内容" />
                    <el-input v-model="inputValue" placeholder="带图标" style="margin-top: 10px;">
                      <template #prefix>
                        <el-icon><Search /></el-icon>
                      </template>
                    </el-input>
                  </div>
                </el-card>
              </el-col>
              
              <el-col :span="8">
                <el-card class="demo-card">
                  <template #header>
                    <div class="card-header">
                      <span>其他组件</span>
                    </div>
                  </template>
                  <div class="other-group">
                    <el-switch v-model="switchValue" />
                    <el-rate v-model="rateValue" style="margin-top: 10px;" />
                    <el-progress :percentage="progressValue" style="margin-top: 10px;" />
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <!-- 颜色 -->
          <div v-if="activeMenu === 'colors'" class="demo-section">
            <h2>颜色</h2>
            <Colors />
          </div>
          <!-- 按钮 -->
          <div v-if="activeMenu === 'buttons'" class="demo-section">
            <h2>按钮</h2>
            <Buttons />
          </div>
          <!-- 表单组件 -->
          <div v-if="activeMenu === 'forms'" class="demo-section">
            <h2>表单组件</h2>
            <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="邮箱" prop="email">
                    <el-input v-model="form.email" placeholder="请输入邮箱" />
                  </el-form-item>
                </el-col>
              </el-row>
              
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="性别" prop="gender">
                    <el-select v-model="form.gender" placeholder="请选择性别">
                      <el-option label="男" value="male" />
                      <el-option label="女" value="female" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="生日" prop="birthday">
                    <el-date-picker
                      v-model="form.birthday"
                      type="date"
                      placeholder="选择日期"
                      style="width: 100%;"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              
              <el-form-item label="爱好" prop="hobbies">
                <el-checkbox-group v-model="form.hobbies">
                  <el-checkbox label="reading">阅读</el-checkbox>
                  <el-checkbox label="music">音乐</el-checkbox>
                  <el-checkbox label="sports">运动</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              
              <el-form-item label="描述" prop="description">
                <el-input
                  v-model="form.description"
                  type="textarea"
                  :rows="3"
                  placeholder="请输入描述"
                />
              </el-form-item>
              
              <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- 表格组件 -->
          <div v-if="activeMenu === 'tables'" class="demo-section">
            <h2>表格组件</h2>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" label="姓名" width="120" />
              <el-table-column prop="age" label="年龄" width="80" />
              <el-table-column prop="email" label="邮箱" />
              <el-table-column prop="status" label="状态" width="100">
                <template #default="scope">
                  <el-tag :type="scope.row.status === 'active' ? 'success' : 'danger'">
                    {{ scope.row.status === 'active' ? '活跃' : '禁用' }}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="150">
                <template #default="scope">
                  <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
                  <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            
            <el-pagination
              v-model:current-page="currentPage"
              v-model:page-size="pageSize"
              :page-sizes="[10, 20, 50, 100]"
              :total="total"
              layout="total, sizes, prev, pager, next, jumper"
              style="margin-top: 20px; text-align: right;"
            />
          </div>

          <!-- 主题配置 -->
          <div v-if="activeMenu === 'theme'" class="demo-section">
            <h2>主题配置</h2>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-card class="demo-card">
                  <template #header>
                    <div class="card-header">
                      <span>颜色配置</span>
                    </div>
                  </template>
                  <div class="color-config">
                    <el-form-item label="主色调">
                      <el-color-picker v-model="themeConfig.primaryColor" @change="updatePrimaryColor" />
                    </el-form-item>
                    <el-form-item label="成功色">
                      <el-color-picker v-model="themeConfig.successColor" @change="updateSuccessColor" />
                    </el-form-item>
                    <el-form-item label="警告色">
                      <el-color-picker v-model="themeConfig.warningColor" @change="updateWarningColor" />
                    </el-form-item>
                    <el-form-item label="危险色">
                      <el-color-picker v-model="themeConfig.dangerColor" @change="updateDangerColor" />
                    </el-form-item>
                  </div>
                </el-card>
              </el-col>
              
              <el-col :span="12">
                <el-card class="demo-card">
                  <template #header>
                    <div class="card-header">
                      <span>样式配置</span>
                    </div>
                  </template>
                  <div class="style-config">
                    <el-form-item label="圆角大小">
                      <el-slider v-model="borderRadius" @change="updateBorderRadius" :min="0" :max="20" />
                    </el-form-item>
                    <el-form-item label="字体大小">
                      <el-slider v-model="fontSize" @change="updateFontSize" :min="12" :max="20" />
                    </el-form-item>
                    <el-form-item label="间距大小">
                      <el-slider v-model="spacing" @change="updateSpacing" :min="8" :max="32" />
                    </el-form-item>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            
            <el-card class="demo-card" style="margin-top: 20px;">
              <template #header>
                <div class="card-header">
                  <span>主题预览</span>
                </div>
              </template>
              <div class="theme-preview">
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="info">信息按钮</el-button>
              </div>
            </el-card>
  </div>

          <!-- 国际化 -->
          <div v-if="activeMenu === 'i18n'" class="demo-section">
            <h2>国际化</h2>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-card class="demo-card">
                  <template #header>
                    <div class="card-header">
                      <span>语言切换</span>
                    </div>
                  </template>
                  <div class="language-config">
                    <el-select v-model="selectedLocale" @change="handleLocaleChange" placeholder="选择语言">
                      <el-option
                        v-for="locale in supportedLocales"
                        :key="locale"
                        :label="getLocaleLabel(locale)"
                        :value="locale"
                      />
                    </el-select>
                  </div>
                </el-card>
              </el-col>
              
              <el-col :span="12">
                <el-card class="demo-card">
                  <template #header>
                    <div class="card-header">
                      <span>日期时间</span>
                    </div>
                  </template>
                  <div class="datetime-demo">
                    <el-date-picker
                      v-model="dateValue"
                      type="datetime"
                      placeholder="选择日期时间"
                      style="width: 100%;"
                    />
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
// 自动导入 Element Plus 组件，无需手动导入
// 自动导入 Vue 组合式 API，无需手动导入
import { 
  setTheme, 
  setPrimaryColor, 
  setSuccessColor, 
  setWarningColor, 
  setDangerColor,
  setInfoColor,
  setCssVar,
  toggleDark,
  supportedLocales,
  getLocale,
  getLocaleLabel
} from './utils/theme'

// 响应式数据
const activeMenu = ref('components')
const selectedTheme = ref('blue')
const isDark = ref(false)
const inputValue = ref('')
const switchValue = ref(true)
const rateValue = ref(4)
const progressValue = ref(70)
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)
const selectedLocale = ref('zh-cn')
const dateValue = ref(new Date())

// 主题配置
const themeConfig = reactive({
  primaryColor: '#409eff',
  successColor: '#67c23a',
  warningColor: '#e6a23c',
  dangerColor: '#f56c6c',
  infoColor: '#909399'
})

const borderRadius = ref(4)
const fontSize = ref(14)
const spacing = ref(20)

// 表单数据
const form = reactive({
  username: '',
  email: '',
  gender: '',
  birthday: '',
  hobbies: [],
  description: ''
})

const formRef = ref()

// 表单验证规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  gender: [
    { required: true, message: '请选择性别', trigger: 'change' }
  ]
}

// 表格数据
const tableData = ref([
  { name: '张三', age: 25, email: 'zhangsan@example.com', status: 'active' },
  { name: '李四', age: 30, email: 'lisi@example.com', status: 'inactive' },
  { name: '王五', age: 28, email: 'wangwu@example.com', status: 'active' },
  { name: '赵六', age: 35, email: 'zhaoliu@example.com', status: 'active' }
])

// 主题选项
const themes = [
  { name: 'blue', label: '蓝色主题', color: '#1890ff' },
  { name: 'green', label: '绿色主题', color: '#52c41a' },
  { name: 'purple', label: '紫色主题', color: '#722ed1' },
  { name: 'orange', label: '橙色主题', color: '#fa8c16' },
  { name: 'red', label: '红色主题', color: '#ff4d4f' }
]

// 方法
const handleMenuSelect = (index) => {
  activeMenu.value = index
}

const handleThemeChange = (themeName) => {
  const theme = themes.find(t => t.name === themeName)
  if (theme) {
    setTheme({
      name: theme.name,
      primaryColor: theme.color,
      dark: isDark.value
    })
    ElMessage.success(`已切换到${theme.label}`)
  }
}

const handleDarkModeChange = (dark) => {
  setTheme({
    name: selectedTheme.value,
    dark: dark
  })
  ElMessage.success(dark ? '已切换到暗色模式' : '已切换到亮色模式')
}

const updatePrimaryColor = (color) => {
  setPrimaryColor(color)
  ElMessage.success('主色调已更新')
}

const updateSuccessColor = (color) => {
  setSuccessColor(color)
  ElMessage.success('成功色已更新')
}

const updateWarningColor = (color) => {
  setWarningColor(color)
  ElMessage.success('警告色已更新')
}

const updateDangerColor = (color) => {
  setDangerColor(color)
  ElMessage.success('危险色已更新')
}

const updateBorderRadius = (value) => {
  setCssVar('--el-border-radius-base', `${value}px`)
}

const updateFontSize = (value) => {
  setCssVar('--el-font-size-base', `${value}px`)
}

const updateSpacing = (value) => {
  setCssVar('--el-spacing-base', `${value}px`)
}

const handleLocaleChange = (locale) => {
  const localeConfig = getLocale(locale)
  ElMessage.success(`已切换到${getLocaleLabel(locale)}`)
}


const submitForm = async () => {
  try {
    await formRef.value.validate()
    ElMessage.success('表单提交成功！')
    console.log('表单数据:', form)
  } catch (error) {
    ElMessage.error('表单验证失败！')
  }
}

const resetForm = () => {
  formRef.value.resetFields()
  ElMessage.info('表单已重置')
}

const handleEdit = (row) => {
  ElMessage.info(`编辑用户: ${row.name}`)
}

const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(
      `确定要删除用户 ${row.name} 吗？`,
      '确认删除',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    ElMessage.success('删除成功！')
  } catch {
    ElMessage.info('已取消删除')
  }
}

// 生命周期
onMounted(() => {
  ElMessage.success('欢迎使用 @mc-markets/ui Demo！')
})
</script>

<style scoped>
.demo-app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.demo-header {
  background: var(--el-color-primary);
  color: white;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-content h1 {
  margin: 0;
  font-size: 24px;
}

.header-actions {
  display: flex;
  align-items: center;
}

.demo-container {
  flex: 1;
  height: calc(100vh - 60px);
}

.demo-sidebar {
  background: var(--el-bg-color-page);
  border-right: 1px solid var(--el-border-color);
}

.demo-menu {
  border: none;
  height: 100%;
}

.demo-main {
  padding: 20px;
  background: var(--el-bg-color);
}

.demo-content {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section h2 {
  margin-bottom: 20px;
  color: var(--el-text-color-primary);
}

.demo-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.other-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.color-config,
.style-config {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.theme-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.language-config,
.datetime-demo {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-container {
    flex-direction: column;
  }
  
  .demo-sidebar {
    width: 100% !important;
    height: auto;
  }
  
  .demo-menu {
    display: flex;
    overflow-x: auto;
  }
  
  .demo-menu .el-menu-item {
    white-space: nowrap;
  }
}
</style>