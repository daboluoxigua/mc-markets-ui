# @mc-markets/ui 

Vue 3 组件库，基于 Element Plus 的自定义组件

## 📖 在线演示

🌐 **演示地址**: [https://daboluoxigua.github.io/mc-markets-ui/](https://daboluoxigua.github.io/mc-markets-ui/)

🌐 **npm仓库**: [https://www.npmjs.com/package/@mc-markets/ui](https://www.npmjs.com/package/@mc-markets/ui)

演示站点通过 GitHub Actions 自动构建和部署，展示了所有组件的使用方法和效果。

## 🚀 快速开始

### 安装
```bash
npm i @mc-markets/ui
```

### 使用方式

#### 方式一：完整导入（推荐用于演示）

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import McMarketsUI from '@mc-markets/ui'
import '@mc-markets/ui/dist/style'

const app = createApp(App)
app.use(McMarketsUI)
app.mount('#app')
```

#### 方式二：自动导入（推荐用于生产）⭐

使用 `unplugin-vue-components` 实现按需自动导入：

```bash
npm i -D unplugin-vue-components
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { McMarketsUiResolver } from '@mc-markets/ui/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [McMarketsUiResolver()]
    })
  ]
})
```

然后就可以直接在模板中使用组件，无需手动导入：

```vue
<template>
  <m-button type="primary">按钮</m-button>
  <m-input v-model="value" />
</template>
```

📘 详细配置请查看 [Resolver 使用指南](./RESOLVER_USAGE.md)

⚠️ **开发环境提示**：如果遇到 `does not provide an export named 'xxx'` 错误，请清除 Vite 缓存：
```bash
# 在你的项目目录运行
rm -rf node_modules/.vite
npm run dev -- --force
```

#### 方式三：手动按需导入

```vue
<script setup>
import { MButton, MInput } from '@mc-markets/ui'
import '@mc-markets/ui/dist/style'
</script>

<template>
  <m-button type="primary">按钮</m-button>
  <m-input v-model="value" />
</template>
```

### 文档开发模式
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建发布
npm run publish:lib
```
