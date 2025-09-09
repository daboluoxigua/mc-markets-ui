# @mc-markets/ui 样式系统

## 概述

本项目提供了完整的 Element Plus 主题定制解决方案，包括 SCSS 变量覆盖、CSS 变量配置和主题管理工具。

## 文件结构

```
packages/styles/
├── index.scss              # 样式入口文件
├── variables.scss          # Element Plus 主题变量覆盖
├── variables.scss          # SCSS 变量和 CSS 变量定义
├── theme-config.ts         # 主题管理工具
└── variables/              # 详细样式变量
    ├── index.scss
    ├── border-mode.css
    ├── color-modes-dark.css
    ├── primitives-style.css
    ├── radius-mode.css
    ├── spacing-mode.css
    ├── typography-desktop.css
    └── typography-mobile.css
```

## 使用方法

### 1. 导入完整样式

```typescript
// 导入所有样式（推荐）
import '@mc-markets/ui/styles/index'

// 或者分别导入
import '@mc-markets/ui/scss-variables'
```

### 2. 使用主题管理工具

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
  primaryColor: '#1890ff',
  dark: false
})

// 动态修改主色调
setPrimaryColor('#52c41a')

// 切换暗色主题
toggleDark()

// 使用主题管理器
const manager = themeConfigManager.getInstance()
manager.setSuccessColor('#67c23a')
```

### 3. 在 Vue 组件中使用

```vue
<template>
  <div class="custom-theme">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
  </div>
</template>

<script setup>
import { setPrimaryColor } from '@mc-markets/ui'

// 动态设置主题色
setPrimaryColor('#722ed1')
</script>
```

### 4. 自定义 CSS 变量

```css
/* 在你的样式文件中覆盖 CSS 变量 */
:root {
  --el-color-primary: #1890ff;
  --el-color-success: #52c41a;
  --el-border-radius-base: 8px;
}
```

## 样式覆盖原理

### SCSS 变量覆盖

`variables.scss` 文件使用 Element Plus 的 `@use` 语法来覆盖默认变量：

```scss
@use 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #000, // 覆盖主色调
    ),
  ),
  $font-size: (
    'base': 14px, // 覆盖基础字体大小
  ),
);
```

### CSS 变量覆盖

`variables.scss` 文件定义了完整的 SCSS 变量和 CSS 变量系统，支持：

- 亮色/暗色主题切换
- 动态颜色调整
- 自定义主题类

## 主题配置选项

### ThemeConfig 接口

```typescript
interface ThemeConfig {
  name?: string              // 主题名称
  dark?: boolean            // 是否暗色主题
  cssVars?: Record<string, string>  // 自定义CSS变量
  customClass?: string      // 自定义类名
  primaryColor?: string     // 主色调
  successColor?: string     // 成功色
  warningColor?: string     // 警告色
  dangerColor?: string      // 危险色
  infoColor?: string        // 信息色
}
```

## 注意事项

1. **导入顺序**：确保在导入 Element Plus 样式之前导入自定义样式
2. **构建工具**：需要支持 SCSS 的构建工具（如 Vite、Webpack）
3. **浏览器兼容性**：CSS 变量需要现代浏览器支持
4. **性能考虑**：建议在生产环境中使用构建后的 CSS 文件

## 示例项目

查看 `src/components/ThemeDemo.vue` 文件了解完整的使用示例。
