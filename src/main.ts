import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

// 导入 Element Plus 样式
import '../packages/styles/index.scss'

// 导入自定义样式
import './styles/demo.css'

const app = createApp(App)

// 使用 Element Plus
app.use(ElementPlus)
app.mount('#app')