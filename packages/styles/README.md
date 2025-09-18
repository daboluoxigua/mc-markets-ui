# 样式覆盖说明

## 🎨 完全覆盖 Element Plus 样式

本组件库通过多层策略确保样式能够**完全覆盖** Element Plus 的默认样式：

### 📋 覆盖策略

#### 1. **CSS 变量覆盖**
通过 `@forward` 指令在编译时覆盖 Element Plus 的 SCSS 变量：
```scss
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': ( 'base': #FFD905 ),
    // ... 其他颜色配置
  )
);
```

#### 2. **组件级样式覆盖**
针对每个组件创建专门的覆盖样式文件：
- `components/button.scss` - Button 组件样式
- `components/select.scss` - Select 组件样式  
- `components/table.scss` - Table 组件样式
- 等等...

#### 3. **强制覆盖样式**
通过 `components/override.scss` 使用 `!important` 和高权重选择器：
```scss
.mc-ui-override .el-button {
  height: 40px !important;
  padding: 8px 16px !important;
  // ... 其他强制样式
}
```

#### 4. **PostCSS 优先级增强**
自动为样式选择器添加高权重前缀：
```javascript
// 自动将 .el-button 转换为 .mc-ui-override .el-button
```

#### 5. **JavaScript 运行时覆盖**
通过 `styleUtils.js` 在运行时动态添加覆盖类：
```javascript
import { applyGlobalOverride } from '@mc-markets/ui';
applyGlobalOverride(); // 全局应用样式覆盖
```

### 🚀 使用方法

#### 自动模式（推荐）
```javascript
import McUI from '@mc-markets/ui';
import '@mc-markets/ui/styles/index';

app.use(McUI); // 自动应用样式覆盖
```

#### 手动模式
```javascript
import { applyGlobalOverride, forceRefreshStyles } from '@mc-markets/ui';

// 应用全局覆盖
applyGlobalOverride();

// 强制刷新特定组件样式
forceRefreshStyles('.el-button');
```

#### 组件级覆盖
```javascript
import { addOverrideClass } from '@mc-markets/ui';

// 在组件挂载后添加覆盖类
mounted() {
  addOverrideClass(this.$el);
}
```

### 🎯 覆盖优先级

样式覆盖按以下优先级生效（从低到高）：

1. **Element Plus 默认样式** (最低优先级)
2. **CSS 变量覆盖** 
3. **组件样式文件**
4. **PostCSS 权重增强**
5. **强制覆盖样式 (!important)** (最高优先级)

### 📝 自定义样式

如需进一步自定义样式，建议按以下顺序：

1. **优先使用 CSS 变量**：
```scss
:root {
  --bg-brand: #your-color;
  --text-primary: #your-text-color;
}
```

2. **组件级覆盖**：
```scss
.mc-ui-override .el-button {
  // 你的自定义样式
}
```

3. **使用 !important**（最后手段）：
```scss
.el-button {
  color: red !important;
}
```

### 🔧 调试技巧

1. **检查覆盖类**：确保元素包含 `mc-ui-override` 类
2. **查看样式优先级**：使用浏览器开发工具检查样式覆盖情况  
3. **强制刷新**：调用 `forceRefreshStyles()` 重新应用覆盖
4. **全局覆盖**：确保 `document.body` 包含 `mc-ui-override` 类

### ⚠️ 注意事项

- 样式覆盖会在组件库初始化时自动应用
- 动态添加的 Element Plus 组件会被自动检测并应用覆盖
- 如果样式仍未生效，请检查 CSS 加载顺序
- 建议在应用根组件中引入样式文件以确保正确的加载顺序
