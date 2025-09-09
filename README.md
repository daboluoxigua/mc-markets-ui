# @mc-markets/ui

一个功能强大的 Element Plus 完整导出包，提供所有组件、指令、服务、样式、主题和国际化支持。现已修复 Element Plus 组件自动导入问题，确保所有组件正常渲染。

## ✨ 特性

- 🚀 **Vue 3 + TypeScript** - 完全支持 Vue 3 Composition API 和 TypeScript
- 🎨 **Element Plus 完整导出** - 导出所有 Element Plus 组件、指令、服务
- 🌍 **多语言支持** - 内置 50+ 种语言包，支持国际化
- 🎨 **主题定制** - 支持动态主题切换和暗色模式
- 🔧 **开箱即用** - 提供完整的类型定义和示例代码
- 📦 **轻量级** - 基于 Element Plus 构建，保持一致的视觉风格
- 🛠️ **开发友好** - 完整的 TypeScript 支持和自动导入配置

## 📦 安装

```bash
npm install @mc-markets/ui
# 或
yarn add @mc-markets/ui
# 或
pnpm add @mc-markets/ui
```

### 依赖要求

```bash
# 安装 Element Plus（必需）
npm install element-plus
# 或
yarn add element-plus
# 或
pnpm add element-plus
```

## 🔧 使用

### 完整引入

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import McMarketsUI from '@mc-markets/ui'
import '@mc-markets/ui/dist/style.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(McMarketsUI)
app.mount('#app')
```

### 按需引入

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ElButton, ElInput, ElTable } from '@mc-markets/ui'
import '@mc-markets/ui/dist/style.css'

const app = createApp(App)
app.use(ElementPlus)
app.component('ElButton', ElButton)
app.component('ElInput', ElInput)
app.component('ElTable', ElTable)
app.mount('#app')
```

### 自动导入配置（推荐）

如果使用 Vite，可以配置自动导入：

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'css'
      })],
    }),
  ],
})
```

然后在 `main.ts` 中：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

## 🚀 快速开始

### 在线演示

访问 [在线演示](http://localhost:5175/) 查看所有组件的实际效果。

### 本地演示

```bash
# 克隆项目
git clone https://gitee.com/daboluoxigua/npm-mc-markets-ui.git

# 进入项目目录
cd npm-mc-markets-ui

# 安装依赖
npm install

# 启动演示服务器
npm run dev

# 访问 http://localhost:5173
```

## 🔧 问题修复

### Element Plus 组件导入问题

**问题描述：** 在之前的版本中，Element Plus 组件（如 `el-form`、`el-table` 等）无法正确自动导入，导致组件无法渲染。

**解决方案：**
1. 在 `main.ts` 中显式导入 Element Plus
2. 配置 Vite 自动导入插件
3. 确保样式文件正确加载

**修复后的配置：**

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
```

```typescript
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'css'
      })],
    }),
  ],
})
```

## 🌍 国际化支持

### 支持的语言

支持 50+ 种语言，包括：

- **中文** - zh-cn, zh-tw
- **英语** - en
- **日语** - ja
- **韩语** - ko
- **西班牙语** - es
- **法语** - fr
- **德语** - de
- **意大利语** - it
- **葡萄牙语** - pt
- **俄语** - ru
- **土耳其语** - tr
- **乌克兰语** - uk
- **越南语** - vi
- **泰语** - th
- **印尼语** - id
- **马来语** - ms
- **荷兰语** - nl
- **瑞典语** - sv
- **挪威语** - no
- **丹麦语** - da
- **芬兰语** - fi
- **波兰语** - pl
- **捷克语** - cs
- **匈牙利语** - hu
- **罗马尼亚语** - ro
- **斯洛伐克语** - sk
- **斯洛文尼亚语** - sl
- **克罗地亚语** - hr
- **保加利亚语** - bg
- **爱沙尼亚语** - et
- **拉脱维亚语** - lv
- **立陶宛语** - lt
- **希腊语** - el
- **希伯来语** - he
- **阿拉伯语** - ar
- **波斯语** - fa
- **印地语** - hi
- **孟加拉语** - bn
- **泰米尔语** - ta
- **泰卢固语** - te
- **旁遮普语** - pa
- **高棉语** - km
- **老挝语** - lo
- **缅甸语** - my
- **阿塞拜疆语** - az
- **哈萨克语** - kk
- **吉尔吉斯语** - ky
- **土库曼语** - tk
- **蒙古语** - mn

### 使用示例

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import McMarketsUI, { 
  ElementPlusLocaleZhCn, 
  ElementPlusLocaleEn,
  getLocale,
  switchLocale 
} from '@mc-markets/ui'

const app = createApp(App)

// 使用中文语言包
app.use(ElementPlus, {
  locale: ElementPlusLocaleZhCn
})

// 或者使用工具函数
const locale = getLocale('zh-cn')
app.use(ElementPlus, { locale })

app.use(McMarketsUI)
app.mount('#app')
```

## 🎨 主题定制

### 主题配置

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import McMarketsUI, { themeManager } from '@mc-markets/ui'

const app = createApp(App)

// 设置主题
themeManager.setTheme({
  name: 'custom',
  dark: false,
  cssVars: {
    '--el-color-primary': '#409eff',
    '--el-color-success': '#67c23a',
    '--el-color-warning': '#e6a23c',
    '--el-color-danger': '#f56c6c',
    '--el-color-info': '#909399'
  }
})

app.use(ElementPlus)
app.use(McMarketsUI)
app.mount('#app')
```

### 暗色模式

```typescript
import { themeManager } from '@mc-markets/ui'

// 切换暗色模式
themeManager.toggleDark()

// 设置暗色模式
themeManager.setTheme({
  name: 'dark',
  dark: true
})
```

## 🎯 组件使用

### 基础组件

```vue
<template>
  <div class="demo">
    <!-- 按钮组件 -->
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    
    <!-- 输入组件 -->
    <el-input v-model="inputValue" placeholder="请输入内容" />
    
    <!-- 选择器 -->
    <el-select v-model="selectValue" placeholder="请选择">
      <el-option label="选项1" value="1" />
      <el-option label="选项2" value="2" />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const selectValue = ref('')
</script>
```

### 表格组件

```vue
<template>
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
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

const tableData = ref([
  { name: '张三', age: 25, email: 'zhangsan@example.com', status: 'active' },
  { name: '李四', age: 30, email: 'lisi@example.com', status: 'inactive' },
  { name: '王五', age: 28, email: 'wangwu@example.com', status: 'active' }
])

const handleEdit = (row: any) => {
  console.log('编辑', row)
}

const handleDelete = (row: any) => {
  console.log('删除', row)
}
</script>
```

### 表单组件

```vue
<template>
  <el-form :model="form" :rules="rules" ref="formRef" label-width="100px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email" placeholder="请输入邮箱" />
    </el-form-item>
    <el-form-item label="性别" prop="gender">
      <el-select v-model="form.gender" placeholder="请选择性别">
        <el-option label="男" value="male" />
        <el-option label="女" value="female" />
      </el-select>
    </el-form-item>
    <el-form-item label="生日" prop="birthday">
      <el-date-picker
        v-model="form.birthday"
        type="date"
        placeholder="选择日期"
        style="width: 100%;"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const formRef = ref()

const form = reactive({
  username: '',
  email: '',
  gender: '',
  birthday: ''
})

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

const submitForm = async () => {
  try {
    await formRef.value.validate()
    console.log('表单提交成功！', form)
  } catch (error) {
    console.log('表单验证失败！')
  }
}

const resetForm = () => {
  formRef.value.resetFields()
}
</script>
```

## 🔧 API 配置

### 主题管理

| 方法 | 说明 | 参数 | 返回值 |
|------|------|------|--------|
| setTheme | 设置主题 | theme: ThemeConfig | void |
| getTheme | 获取当前主题 | - | ThemeConfig |
| toggleDark | 切换暗色模式 | - | void |

### 国际化

| 方法 | 说明 | 参数 | 返回值 |
|------|------|------|--------|
| getLocale | 获取语言包 | locale: string | Locale |
| switchLocale | 切换语言 | locale: string | Locale |
| getSupportedLocales | 获取支持的语言列表 | - | string[] |

### 主题配置接口

```typescript
interface ThemeConfig {
  /** 主题名称 */
  name?: string
  /** 是否暗色主题 */
  dark?: boolean
  /** 自定义CSS变量 */
  cssVars?: Record<string, string>
  /** 自定义类名 */
  customClass?: string
}
```

## 🎨 样式定制

组件库使用 CSS 变量，可以通过覆盖变量来自定义样式：

```css
:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
  --el-color-info: #909399;
  --el-border-radius-base: 4px;
  --el-font-size-base: 14px;
  --el-spacing-base: 20px;
}
```

## 📚 类型定义

完整的 TypeScript 类型定义：

```typescript
import type { 
  ThemeConfig,
  ThemeManager,
  McMarketsUI
} from '@mc-markets/ui'

// 导入所有 Element Plus 类型
import type { 
  ButtonProps,
  InputProps,
  TableProps,
  FormProps
} from '@mc-markets/ui'
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

[MIT License](LICENSE)

## 🔗 相关链接

- [Vue 3](https://vuejs.org/)
- [Element Plus](https://element-plus.org/)
- [TypeScript](https://www.typescriptlang.org/)

## 🛠️ 开发指南

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 类型检查
npm run type-check

# 代码格式化
npm run format

# 代码检查
npm run lint
```

### 构建和发布

```bash
# 构建项目
npm run build

# 发布到 npm（自动构建 + 发布）
npm run publish:lib
```

**注意：** 发布时会自动执行构建，无需手动构建。

### 项目结构

```
@mc-markets/ui/
├── packages/           # 组件库源码
│   ├── styles/        # 样式文件
│   ├── types/         # 类型定义
│   └── index.ts       # 入口文件
├── src/               # 演示应用源码
│   ├── components/    # 演示组件
│   ├── styles/        # 演示样式
│   ├── utils/         # 工具函数
│   ├── App.vue        # 主应用组件
│   └── main.ts        # 应用入口
├── dist/              # 构建输出
├── vite.config.ts     # Vite 配置
├── package.json       # 项目配置
└── README.md          # 项目文档
```

### 演示功能

当前演示应用包含以下功能：

- **组件展示** - 按钮、输入框、开关、评分、进度条等基础组件
- **表单组件** - 完整的表单示例，包含验证规则
- **表格组件** - 数据表格展示，支持分页和操作
- **主题配置** - 动态主题切换和颜色配置
- **国际化** - 多语言支持演示

访问 http://localhost:5175/ 查看完整演示。
