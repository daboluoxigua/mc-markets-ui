# @mc-markets/ui 主题配置示例

基于 [Element Plus 官方主题定制指南](https://element-plus.org/zh-CN/guide/theming.html)，提供完整的主题配置解决方案。

## 🎨 主题配置方式

### 1. CSS 变量方式（推荐）

```typescript
import { createApp } from 'vue'
import McMarketsUI from '@mc-markets/ui'
import '@mc-markets/ui/css-variables' // 导入CSS变量

const app = createApp(App)
app.use(McMarketsUI)
```

```css
/* 在你的CSS文件中覆盖变量 */
:root {
  --el-color-primary: #1890ff;
  --el-color-success: #52c41a;
  --el-color-warning: #faad14;
  --el-color-danger: #ff4d4f;
  --el-color-info: #1890ff;
}

/* 暗色主题 */
.dark {
  --el-color-primary: #177ddc;
  --el-color-success: #49aa19;
  --el-color-warning: #d89614;
  --el-color-danger: #d9363e;
  --el-color-info: #177ddc;
}
```

### 2. SCSS 变量方式

```scss
// 在你的SCSS文件中
@use '@mc-markets/ui/scss-variables' as *;

// 或者自定义变量
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #1890ff,
    ),
    'success': (
      'base': #52c41a,
    ),
  )
);
```

### 3. JavaScript 动态配置

```typescript
import { 
  themeConfigManager, 
  setPrimaryColor, 
  setTheme, 
  toggleDark 
} from '@mc-markets/ui'

// 设置主色调
setPrimaryColor('#1890ff')

// 设置完整主题
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

// 切换暗色主题
toggleDark()
```

## 🛠️ 主题配置工具

### 基础配置

```typescript
import { 
  themeConfigManager,
  setTheme,
  getTheme,
  toggleDark,
  setPrimaryColor,
  setSuccessColor,
  setWarningColor,
  setDangerColor,
  setInfoColor
} from '@mc-markets/ui'

// 获取当前主题
const currentTheme = getTheme()
console.log(currentTheme)

// 设置主题
setTheme({
  name: 'blue-theme',
  dark: false,
  primaryColor: '#1890ff',
  customClass: 'my-custom-theme'
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

### 高级配置

```typescript
import { 
  themeConfigManager,
  setCssVar,
  getCssVar,
  exportTheme,
  importTheme,
  resetTheme
} from '@mc-markets/ui'

// 设置自定义CSS变量
setCssVar('--el-color-primary', '#1890ff')
setCssVar('--el-border-radius-base', '8px')
setCssVar('--el-font-size-base', '16px')

// 获取CSS变量值
const primaryColor = getCssVar('--el-color-primary')
console.log(primaryColor) // #1890ff

// 导出主题配置
const themeConfig = exportTheme()
console.log(themeConfig)

// 导入主题配置
importTheme(themeConfig)

// 重置主题
resetTheme()
```

## 🎯 实际使用示例

### Vue 组件中使用

```vue
<template>
  <div class="theme-demo">
    <el-button @click="changeTheme">切换主题</el-button>
    <el-button @click="toggleDarkMode">切换暗色模式</el-button>
    <el-button @click="setCustomColor">设置自定义颜色</el-button>
    
    <el-form>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  setTheme, 
  toggleDark, 
  setPrimaryColor,
  themeConfigManager 
} from '@mc-markets/ui'

const form = ref({
  username: '',
  password: ''
})

const themes = [
  { name: 'blue', color: '#1890ff' },
  { name: 'green', color: '#52c41a' },
  { name: 'purple', color: '#722ed1' },
  { name: 'orange', color: '#fa8c16' }
]

let currentThemeIndex = 0

const changeTheme = () => {
  currentThemeIndex = (currentThemeIndex + 1) % themes.length
  const theme = themes[currentThemeIndex]
  
  setTheme({
    name: theme.name,
    primaryColor: theme.color,
    cssVars: {
      '--el-border-radius-base': '6px',
      '--el-font-size-base': '14px'
    }
  })
}

const toggleDarkMode = () => {
  toggleDark()
}

const setCustomColor = () => {
  const color = prompt('请输入颜色值（如：#ff6b6b）')
  if (color) {
    setPrimaryColor(color)
  }
}

const submit = () => {
  console.log('提交表单:', form.value)
}
</script>

<style scoped>
.theme-demo {
  padding: 20px;
}
</style>
```

### 全局主题管理

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import McMarketsUI from '@mc-markets/ui'
import '@mc-markets/ui/css-variables'

const app = createApp(App)

// 使用主题配置
app.use(McMarketsUI, {
  theme: {
    name: 'enterprise',
    primaryColor: '#1890ff',
    successColor: '#52c41a',
    warningColor: '#faad14',
    dangerColor: '#ff4d4f',
    infoColor: '#1890ff',
    cssVars: {
      '--el-border-radius-base': '6px',
      '--el-font-size-base': '14px',
      '--el-spacing-base': '16px'
    }
  }
})

app.mount('#app')
```

### 响应式主题切换

```vue
<template>
  <div class="theme-switcher">
    <el-select v-model="selectedTheme" @change="handleThemeChange">
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
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { setTheme, toggleDark } from '@mc-markets/ui'

const selectedTheme = ref('blue')
const isDark = ref(false)

const themes = [
  { name: 'blue', label: '蓝色主题', color: '#1890ff' },
  { name: 'green', label: '绿色主题', color: '#52c41a' },
  { name: 'purple', label: '紫色主题', color: '#722ed1' },
  { name: 'orange', label: '橙色主题', color: '#fa8c16' }
]

const handleThemeChange = (themeName: string) => {
  const theme = themes.find(t => t.name === themeName)
  if (theme) {
    setTheme({
      name: theme.name,
      primaryColor: theme.color,
      dark: isDark.value
    })
  }
}

const handleDarkModeChange = (dark: boolean) => {
  setTheme({
    name: selectedTheme.value,
    dark: dark
  })
}

// 监听主题变化
watch([selectedTheme, isDark], () => {
  handleThemeChange(selectedTheme.value)
})
</script>
```

## 📱 移动端适配

```css
/* 移动端主题适配 */
@media (max-width: 768px) {
  :root {
    --el-font-size-base: 16px; /* 防止iOS缩放 */
    --el-spacing-base: 12px;
    --el-border-radius-base: 8px;
  }
}

/* 高分辨率屏幕适配 */
@media (-webkit-min-device-pixel-ratio: 2) {
  :root {
    --el-border-width: 0.5px;
  }
}
```

## 🎨 预设主题

```typescript
// 预设主题配置
export const presetThemes = {
  default: {
    name: 'default',
    primaryColor: '#409eff',
    successColor: '#67c23a',
    warningColor: '#e6a23c',
    dangerColor: '#f56c6c',
    infoColor: '#909399'
  },
  blue: {
    name: 'blue',
    primaryColor: '#1890ff',
    successColor: '#52c41a',
    warningColor: '#faad14',
    dangerColor: '#ff4d4f',
    infoColor: '#1890ff'
  },
  green: {
    name: 'green',
    primaryColor: '#52c41a',
    successColor: '#73d13d',
    warningColor: '#faad14',
    dangerColor: '#ff4d4f',
    infoColor: '#52c41a'
  },
  purple: {
    name: 'purple',
    primaryColor: '#722ed1',
    successColor: '#52c41a',
    warningColor: '#faad14',
    dangerColor: '#ff4d4f',
    infoColor: '#722ed1'
  }
}

// 使用预设主题
import { setTheme } from '@mc-markets/ui'
setTheme(presetThemes.blue)
```

## 🔧 构建工具配置

### Vite 配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@mc-markets/ui/scss-variables" as *;`
      }
    }
  }
})
```

### Webpack 配置

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@use "@mc-markets/ui/scss-variables" as *;`
            }
          }
        ]
      }
    ]
  }
}
```

## 📝 注意事项

1. **CSS变量优先级**：CSS变量具有更高的优先级，会覆盖SCSS变量
2. **性能考虑**：动态修改CSS变量比重新编译SCSS更高效
3. **浏览器兼容性**：CSS变量需要现代浏览器支持
4. **主题切换**：建议在应用初始化时设置主题，避免频繁切换
5. **样式隔离**：使用自定义类名来隔离不同主题的样式

## 🚀 最佳实践

1. **统一管理**：将主题配置集中管理，避免散落在各个组件中
2. **预设主题**：提供多种预设主题供用户选择
3. **响应式设计**：考虑不同屏幕尺寸下的主题适配
4. **用户偏好**：保存用户的主题选择到本地存储
5. **无障碍支持**：确保主题切换不影响可访问性

通过以上配置，您可以完全控制 Element Plus 的主题样式，实现个性化的UI设计！
