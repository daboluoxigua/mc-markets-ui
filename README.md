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

## 📦 演示部署

### Gitee Pages（推荐）

```bash
# 一键部署到Gitee Pages（直接部署到master分支）
npm run deploy:gitee:build
```

### 本地预览

```bash
# 使用内置服务器
npm run serve:local

# 使用Vite预览
npm run preview:demo
```

## 📚 文档

- [部署指南](DEPLOYMENT.md) - 详细的部署说明
- [Gitee部署指南](GITEE_DEPLOYMENT.md) - Gitee Pages专用指南

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
| `npm run deploy:gitee` | 部署到Gitee Pages（需先构建） |
| `npm run deploy:gitee:build` | 构建并部署到Gitee Pages |
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

## 🌐 在线演示

部署后可通过以下地址访问演示：

- **Gitee Pages**: `https://您的用户名.gitee.io/仓库名`

## 📄 许可证

MIT License
