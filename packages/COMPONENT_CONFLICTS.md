# 组件冲突处理机制

## 概述

@mc-markets/ui 组件库提供了完善的组件冲突处理机制，确保自定义组件始终优先于 Element Plus 组件。

## 工作原理

### 1. 组件注册顺序

1. **优先注册自定义组件** - 所有自定义组件会首先注册，使用 `m-` 前缀
2. **条件注册 Element Plus 组件** - 只注册没有被自定义组件覆盖的 Element Plus 组件

### 2. 命名映射

自定义组件会自动进行命名映射：

```javascript
const nameMap = {
  'mradiogroup': 'm-radio-group',
  'mradiobutton': 'm-radio-button', 
  'mformitem': 'm-form-item',
  'moptiongroup': 'm-option-group',
  'mtabs': 'm-tabs',
  'mtabpane': 'm-tab-pane'
}
```

### 3. 冲突检测

系统会自动检测并处理以下冲突：

- ✅ **自定义组件优先** - 如果存在同名的自定义组件，将使用自定义组件
- ⚠️ **跳过重复注册** - 避免重复注册已存在的组件
- 📝 **详细日志** - 提供详细的注册过程日志

## 使用方法

### 基本使用

```javascript
import { createApp } from 'vue'
import McMarketsUI from '@mc-markets/ui'
import App from './App.vue'

const app = createApp(App)
app.use(McMarketsUI)
app.mount('#app')
```

### 检查组件注册状态

```javascript
import { createApp } from 'vue'
import McMarketsUI, { checkComponentRegistration } from '@mc-markets/ui'
import App from './App.vue'

const app = createApp(App)
app.use(McMarketsUI)

// 检查组件注册状态
const status = checkComponentRegistration(app)
console.log('组件注册状态:', status)

app.mount('#app')
```

## 自定义组件列表

当前支持的自定义组件：

| 组件名 | 注册名 | 覆盖的 Element Plus 组件 |
|-------|--------|-------------------------|
| MIcon | m-icon | ElIcon |
| MButton | m-button | ElButton |
| MInput | m-input | ElInput |
| MForm | m-form | ElForm |
| MFormItem | m-form-item | ElFormItem |
| MTooltip | m-tooltip | ElTooltip |
| MSelect | m-select | ElSelect |
| MOption | m-option | ElOption |
| MOptionGroup | m-option-group | ElOptionGroup |
| MPagination | m-pagination | ElPagination |
| MRadio | m-radio | ElRadio |
| MRadioGroup | m-radio-group | ElRadioGroup |
| MRadioButton | m-radio-button | ElRadioButton |
| MSwitch | m-switch | ElSwitch |
| MTag | m-tag | ElTag |
| MAlert | m-alert | ElAlert |
| MDialog | m-dialog | ElDialog |
| MNotification | m-notification | ElNotification |
| MDatePicker | m-date-picker | ElDatePicker |
| MEmpty | m-empty | ElEmpty |
| MTable | m-table | ElTable |
| MTableColumn | m-table-column | ElTableColumn |
| MBanner | m-banner | - |
| MTabs | m-tabs | ElTabs |
| MTabPane | m-tab-pane | ElTabPane |

## 调试信息

在开发模式下，控制台会显示详细的注册信息：

```
🚀 开始安装 @mc-markets/ui 组件库...
🔧 自定义组件列表: ['m-icon', 'm-button', 'm-input', ...]
🎯 注册自定义组件: m-button (MButton)
🎯 注册自定义组件: m-input (MInput)
...
✅ 注册 Element Plus 组件: m-breadcrumb
⚠️  组件 m-button 已存在，跳过注册
🎯 自定义组件覆盖: m-input (使用自定义组件)
...
✅ @mc-markets/ui 组件库安装完成!
```

## 最佳实践

1. **始终使用 `m-` 前缀** - 在模板中使用组件时，使用 `m-` 前缀
2. **检查组件状态** - 在开发时使用 `checkComponentRegistration` 验证组件注册
3. **查看控制台日志** - 关注控制台的组件注册日志，确保按预期工作
4. **优先使用自定义组件** - 当存在同名组件时，系统会自动使用自定义组件

## 故障排除

### 组件未按预期工作

1. 检查控制台日志，确认组件是否正确注册
2. 使用 `checkComponentRegistration` 查看组件状态
3. 确认模板中使用的是正确的组件名（`m-` 前缀）

### 样式冲突

1. 自定义组件使用了高优先级的 CSS 类名
2. 可以通过 `styleUtils` 工具进行样式覆盖
3. 确保导入了正确的样式文件
