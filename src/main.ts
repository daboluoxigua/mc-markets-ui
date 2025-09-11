import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@mc-markets/ui/styles/index.scss'
import '@mc-markets/ui/styles/font/iconfont.scss'
import { setTheme } from './utils/theme'

const app = createApp(App)

app.use(ElementPlus)

// 初始化默认黑暗主题
setTheme({
  name: 'default',
  dark: true,
})

app.mount('#app')