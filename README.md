# @mc-markets/ui 

Vue 3 组件库，基于 Element Plus 的自定义组件

## 📖 在线演示

🌐 **演示地址**: [https://daboluoxigua.github.io/mc-markets-ui/](https://daboluoxigua.github.io/mc-markets-ui/)

演示站点通过 GitHub Actions 自动构建和部署，展示了所有组件的使用方法和效果。

## 🚀 快速开始

### 安装
```bash

# 生成凭证
git config --global credential.https://gitlab.mc-markets.com.username 用户名

# 安装依赖
npm i git+https://gitlab.mc-markets.com/lty/mcmarkets-ui.git#master

npm i git+https://gitlab.mc-markets.com/lty/mcmarkets-ui.git#v1.0.0
```

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