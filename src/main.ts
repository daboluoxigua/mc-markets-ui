import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

import '@mc-markets/ui/styles/index.scss'
// 引入字体图标样式
import '@/styles/font/iconfont.css'

const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')