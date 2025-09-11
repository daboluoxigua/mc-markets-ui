import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@mc-markets/ui/styles/index.scss'
import '@mc-markets/ui/styles/font/iconfont.scss'
import mcMarketsUI from '@mc-markets/ui'

const app = createApp(App)

app.use(ElementPlus)
app.use(mcMarketsUI)

app.mount('#app')