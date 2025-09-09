# @mc-markets/ui 使用指南

这是一个完整的 Element Plus 导出包，提供了 Element Plus 的所有功能，包括组件、指令、服务、样式、主题和国际化支持。

## 安装

```bash
npm install @mc-markets/ui
# 或
yarn add @mc-markets/ui
# 或
pnpm add @mc-markets/ui
```

## 基础使用

### 1. 完整导入（推荐）

```typescript
import { createApp } from 'vue'
import McMarketsUI from '@mc-markets/ui'
import '@mc-markets/ui/style' // 导入样式

const app = createApp(App)

// 使用默认配置
app.use(McMarketsUI)

// 或使用自定义配置
app.use(McMarketsUI, {
  locale: 'zh-cn', // 默认语言
  theme: {
    name: 'custom',
    dark: false,
    cssVars: {
      '--el-color-primary': '#409eff',
      '--el-color-success': '#67c23a'
    }
  },
  importStyle: true // 是否自动导入样式
})

app.mount('#app')
```

### 2. 按需导入

```typescript
import { createApp } from 'vue'
import { ElButton, ElInput, ElForm, ElFormItem } from '@mc-markets/ui'
import '@mc-markets/ui/style'

const app = createApp(App)

// 手动注册组件
app.component('ElButton', ElButton)
app.component('ElInput', ElInput)
app.component('ElForm', ElForm)
app.component('ElFormItem', ElFormItem)

app.mount('#app')
```

## 国际化支持

### 1. 使用内置语言包

```typescript
import { createApp } from 'vue'
import McMarketsUI, { locales, getLocale } from '@mc-markets/ui'

const app = createApp(App)

// 使用中文
app.use(McMarketsUI, {
  locale: 'zh-cn'
})

// 使用英文
app.use(McMarketsUI, {
  locale: 'en'
})

// 动态切换语言
const switchToEnglish = () => {
  const locale = getLocale('en')
  // 重新配置 Element Plus
}
```

### 2. 支持的语言列表

```typescript
import { supportedLocales } from '@mc-markets/ui'

console.log(supportedLocales)
// ['zh-cn', 'en', 'zh-tw', 'ja', 'ko', 'es', 'fr', 'de', ...]
```

## 主题定制

### 1. 使用主题管理器

```typescript
import { themeManager } from '@mc-markets/ui'

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
  },
  customClass: 'my-custom-theme'
})

// 切换暗色主题
themeManager.toggleDark()

// 获取当前主题
const currentTheme = themeManager.getTheme()
```

### 2. 在组件中使用

```vue
<template>
  <div>
    <el-button @click="toggleTheme">切换主题</el-button>
    <el-button @click="setCustomTheme">设置自定义主题</el-button>
  </div>
</template>

<script setup>
import { themeManager } from '@mc-markets/ui'

const toggleTheme = () => {
  themeManager.toggleDark()
}

const setCustomTheme = () => {
  themeManager.setTheme({
    name: 'blue',
    cssVars: {
      '--el-color-primary': '#1890ff'
    }
  })
}
</script>
```

## 样式覆盖和主题配置

### 1. 使用 CSS 变量（推荐）

```typescript
import { createApp } from 'vue'
import McMarketsUI from '@mc-markets/ui'
import '@mc-markets/ui/scss-variables' // 导入SCSS变量

const app = createApp(App)
app.use(McMarketsUI)
```

```css
/* 在你的 CSS 文件中 */
:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
  --el-color-info: #909399;
}

/* 暗色主题 */
.dark {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
  --el-color-info: #909399;
}
```

### 2. 使用 SCSS 变量

```scss
// 在你的 SCSS 文件中
@use '@mc-markets/ui/scss-variables' as *;

// 或者自定义变量
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #409eff,
    ),
    'success': (
      'base': #67c23a,
    ),
  )
);
```

### 3. JavaScript 动态配置

```typescript
import { 
  setTheme, 
  setPrimaryColor, 
  toggleDark,
  themeConfigManager 
} from '@mc-markets/ui'

// 设置主题
setTheme({
  name: 'custom',
  dark: false,
  primaryColor: '#1890ff',
  successColor: '#52c41a',
  warningColor: '#faad14',
  dangerColor: '#ff4d4f',
  infoColor: '#1890ff',
  cssVars: {
    '--el-border-radius-base': '6px',
    '--el-font-size-base': '14px'
  }
})

// 单独设置颜色
setPrimaryColor('#1890ff')
setSuccessColor('#52c41a')
setWarningColor('#faad14')
setDangerColor('#ff4d4f')
setInfoColor('#1890ff')

// 切换暗色主题
toggleDark()
```

## 高级用法

### 1. 自定义配置

```typescript
import { createApp } from 'vue'
import McMarketsUI, { 
  themeManager, 
  getLocale, 
  supportedLocales 
} from '@mc-markets/ui'

const app = createApp(App)

// 自定义配置
app.use(McMarketsUI, {
  locale: 'zh-cn',
  theme: {
    name: 'enterprise',
    dark: false,
    cssVars: {
      '--el-color-primary': '#1890ff',
      '--el-border-radius-base': '6px',
      '--el-font-size-base': '14px'
    }
  },
  importStyle: true
})

// 全局访问
app.config.globalProperties.$theme = themeManager
app.config.globalProperties.$locales = supportedLocales
```

### 2. 在组合式 API 中使用

```vue
<template>
  <div>
    <el-button @click="changeLanguage">切换语言</el-button>
    <el-button @click="changeTheme">切换主题</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { themeManager, getLocale, supportedLocales } from '@mc-markets/ui'

const currentLocale = ref('zh-cn')

const changeLanguage = () => {
  const currentIndex = supportedLocales.indexOf(currentLocale.value)
  const nextIndex = (currentIndex + 1) % supportedLocales.length
  currentLocale.value = supportedLocales[nextIndex]
  
  // 重新配置语言
  const locale = getLocale(currentLocale.value)
  // 这里需要重新配置 Element Plus
}

const changeTheme = () => {
  themeManager.toggleDark()
}
</script>
```

## 类型支持

```typescript
import type { 
  ThemeConfig, 
  McMarketsUI 
} from '@mc-markets/ui'

// 使用类型
const theme: ThemeConfig = {
  name: 'custom',
  dark: false,
  cssVars: {
    '--el-color-primary': '#409eff'
  }
}
```

## 注意事项

1. **样式导入**：确保导入了 Element Plus 的样式文件
2. **语言包**：所有语言包都已内置，无需额外安装
3. **主题切换**：主题切换是全局的，会影响整个应用
4. **性能优化**：建议使用按需导入来减少包体积
5. **兼容性**：需要 Vue 3.3+ 和 Element Plus 2.8+

## 完整示例

```vue
<template>
  <div class="app">
    <el-header>
      <el-menu mode="horizontal">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">关于</el-menu-item>
      </el-menu>
    </el-header>
    
    <el-main>
      <el-form :model="form" label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from '@mc-markets/ui'

const form = ref({
  username: '',
  password: ''
})

const submit = () => {
  ElMessage.success('提交成功！')
}
</script>

<style>
@import '@mc-markets/ui/style';
</style>
```

这个包提供了 Element Plus 的完整功能，包括所有组件、指令、服务、样式、主题和国际化支持，让您可以轻松地在项目中使用 Element Plus 的所有功能。
