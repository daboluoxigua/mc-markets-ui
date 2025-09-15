# @mc-markets/ui Demo

Vue 3 组件库演示

## 🚀 快速开始

### 开发模式

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 启动演示开发服务器
npm run dev:demo
```

### 构建

```bash
# 构建组件库
npm run build

# 构建演示
npm run build:demo
```

## 📦 演示打包

### 构建静态HTML

```bash
# 构建演示为静态HTML文件
npm run build:demo
```

构建完成后，所有文件将输出到 `dist-demo/` 目录，可以直接在浏览器中打开 `dist-demo/index.html`。

### 本地预览

```bash
# 构建并直接在浏览器中打开
npm run open:demo

# 使用内置服务器
npm run serve:local

# 使用Vite预览
npm run preview:demo
```

## 📚 文档

- [部署指南](DEPLOYMENT.md) - 详细的打包和部署说明

## 🛠️ 可用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run dev:demo` | 启动演示开发服务器 |
| `npm run build` | 构建组件库 |
| `npm run build:demo` | 构建演示 |
| `npm run preview` | 预览组件库构建结果 |
| `npm run preview:demo` | 使用Vite预览演示 |
| `npm run serve:local` | 本地预览演示（内置服务器） |
| `npm run start:demo` | 构建并启动本地演示服务器 |
| `npm run open:demo` | 构建并直接在浏览器中打开演示 |
| `npm run clean:demo` | 清理演示构建文件 |
| `npm run test:static` | 测试静态访问配置 |

## 📁 项目结构

```
├── packages/           # 组件库源码
│   ├── components/     # 组件
│   ├── styles/         # 样式
│   └── index.js        # 入口文件
├── src/               # 演示源码
│   ├── pages/         # 演示页面
│   ├── components/    # 演示组件
│   └── router/        # 路由配置
├── dist/              # 组件库构建输出
├── dist-demo/         # 演示构建输出
└── scripts/           # 部署脚本
```

## 🌐 使用方式

构建后的演示文件位于 `dist-demo/` 目录，可以：

1. **直接打开**: 双击 `dist-demo/index.html` 在浏览器中打开
2. **本地服务器**: 使用 `npm run serve:local` 启动本地服务器
3. **分发**: 将 `dist-demo/` 目录复制到任何地方使用

## 📄 许可证

MIT License
