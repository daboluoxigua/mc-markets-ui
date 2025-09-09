# @mc-markets/ui Demo

这是一个完整的演示项目，展示了 `@mc-markets/ui` 包的所有功能，包括组件、主题配置、国际化等。

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

### 3. 构建生产版本

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

### 4. 预览生产版本

```bash
npm run preview
# 或
yarn preview
# 或
pnpm preview
```

## 📁 项目结构

```
src/
├── App.vue                 # 主应用组件
├── main.ts                 # 应用入口文件
├── index.html              # HTML 模板
├── components/             # 演示组件
│   ├── ThemeDemo.vue       # 主题配置演示
│   └── I18nDemo.vue        # 国际化演示
└── styles/
    └── demo.css            # 演示样式
```

## 🎨 功能演示

### 1. 组件展示
- **按钮组件**: 各种类型和状态的按钮
- **输入组件**: 输入框、选择器、日期选择器等
- **其他组件**: 开关、评分、进度条等

### 2. 表单组件
- **完整表单**: 包含各种表单元素的完整示例
- **表单验证**: 实时验证和错误提示
- **表单提交**: 提交和重置功能

### 3. 表格组件
- **数据表格**: 展示数据的表格组件
- **分页功能**: 分页器组件
- **操作按钮**: 编辑和删除操作

### 4. 主题配置
- **颜色配置**: 动态修改主题颜色
- **样式配置**: 调整圆角、字体、间距等
- **预设主题**: 多种预设主题选择
- **主题预览**: 实时预览主题效果

### 5. 国际化
- **语言切换**: 支持 40+ 种语言
- **日期格式**: 不同语言的日期时间格式
- **数字格式**: 数字、货币、百分比格式化
- **相对时间**: 相对时间显示

## 🛠️ 技术特性

### 1. 完整的 Element Plus 支持
- 所有组件、指令、服务
- 完整的 TypeScript 类型支持
- 样式和主题定制

### 2. 主题系统
- CSS 变量配置
- SCSS 变量支持
- JavaScript 动态配置
- 预设主题
- 暗色模式

### 3. 国际化支持
- 40+ 种语言包
- 动态语言切换
- 本地化格式

### 4. 响应式设计
- 移动端适配
- 平板端优化
- 桌面端体验

### 5. 无障碍支持
- 键盘导航
- 屏幕阅读器支持
- 高对比度模式

## 📱 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 🔧 开发工具

### Vite 配置
- 快速热重载
- TypeScript 支持
- CSS 预处理器
- 自动导入

### ESLint 配置
- 代码规范检查
- 自动修复
- Vue 3 支持

### Prettier 配置
- 代码格式化
- 统一风格

## 📦 依赖说明

### 核心依赖
- `vue`: ^3.2.47
- `@mc-markets/ui`: 本地包
- `element-plus`: ^2.8.3

### 开发依赖
- `vite`: ^4.2.1
- `@vitejs/plugin-vue`: ^4.1.0
- `typescript`: ^5.0.4
- `eslint`: ^8.38.0
- `prettier`: ^2.8.8

## 🎯 使用场景

### 1. 学习参考
- 了解如何使用 `@mc-markets/ui`
- 学习主题配置方法
- 掌握国际化实现

### 2. 开发测试
- 测试新功能
- 验证主题效果
- 检查国际化支持

### 3. 演示展示
- 向客户展示功能
- 技术分享演示
- 文档补充说明

## 🚀 部署说明

### 1. 静态部署
```bash
npm run build
# 将 dist 目录部署到静态服务器
```

### 2. Docker 部署
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 3. CDN 部署
- 上传到 CDN
- 配置缓存策略
- 启用 Gzip 压缩

## 🤝 贡献指南

### 1. 报告问题
- 使用 GitHub Issues
- 提供详细描述
- 包含复现步骤

### 2. 提交代码
- Fork 项目
- 创建功能分支
- 提交 Pull Request

### 3. 代码规范
- 遵循 ESLint 规则
- 使用 Prettier 格式化
- 添加必要的注释

## 📄 许可证

MIT License

## 🔗 相关链接

- [Element Plus 官方文档](https://element-plus.org/)
- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)

## 📞 联系方式

- 项目地址: https://github.com/mc-markets/ui
- 问题反馈: https://github.com/mc-markets/ui/issues
- 邮箱: support@mc-markets.com

---

**享受使用 @mc-markets/ui！** 🎉
