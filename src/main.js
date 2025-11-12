import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 使用开发环境的组件库
import 'vant/lib/index.css';
import '@mc-markets/ui/styles/index.scss'
import '@mc-markets/ui/styles/font/iconfont.css'
import '@mc-markets/ui/styles/colorfont/iconfont.css'
import '@mc-markets/ui/styles/vant.scss'
import { setTheme } from './utils/theme'
import ElementPlus from 'element-plus'

import mcMarketsUI from '@mc-markets/ui'
const app = createApp(App)

app.use(mcMarketsUI)  // 注册组件库
app.use(ElementPlus)
app.use(router)

// 初始化默认黑暗主题
setTheme({
  name: 'default',
  dark: true,
})

// 仅在 H5 构建启用：根据窗口宽度自适应根字体，配合 pxtorem rootValue=37.5
if (import.meta.env.VITE_H5 === '1') {
  const BASE_WIDTH = 375
  const ROOT_VALUE = 37.5
  const MIN_SCALE = 0.5

  const updateBodyScale = () => {
    const width = document.documentElement.clientWidth || window.innerWidth || BASE_WIDTH
    const scale = Math.max(MIN_SCALE, width / BASE_WIDTH)
    const fontSize = (ROOT_VALUE * scale).toFixed(4) + 'px'
    document.documentElement.style.fontSize = fontSize
  }

  // 首次应用
  updateBodyScale()

  // 监听窗口变化，简单去抖
  let __resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(__resizeTimer)
    __resizeTimer = setTimeout(updateBodyScale, 150)
  })
}

app.mount('#app')
