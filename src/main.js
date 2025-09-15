import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 使用开发环境的组件库
import mcMarketsUI from '@mc-markets/ui'
import '@mc-markets/ui/styles/index.scss'
import '@mc-markets/ui/styles/font/iconfont.css'
import { setTheme } from './utils/theme'

const app = createApp(App)

app.use(mcMarketsUI)  // 注册组件库
app.use(router)

// 初始化默认黑暗主题
setTheme({
  name: 'default',
  dark: true,
})

app.mount('#app')
