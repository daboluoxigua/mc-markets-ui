/**
 * @mc-markets/ui - 自定义组件库
 * 
 * 提供自定义组件和工具函数
 * 
 * @version 1.0.19
 */

import { App } from 'vue'
import Dialog from './components/Dialog/index.vue'
import { Icon } from './components/Icon'
import { Tab, TabPane } from './components/Tab'

export { Dialog, Icon, Tab, TabPane }

// 样式相关
export * from './styles/theme-config'
export { default as variables } from './styles/variables.scss?inline'
export { default as styles } from './styles/index.scss?inline'


// ==================== 版本信息 ====================
const version = '1.0.19'
const author = 'chenyu'
const description = '自定义组件库，提供自定义组件和工具函数'

// ==================== 组件注册配置 ====================
const components = {
  Dialog,
  Icon,
  Tab,
  TabPane
}

// ==================== 安装函数 ====================
const install = (app: App): void => {
  // 注册自定义组件
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
  
  // 注册全局属性
  app.config.globalProperties.$mcMarketsUI = {
    version,
    author,
    description
  }
}

// ==================== 工具函数 ====================

// ==================== 默认导出类型定义 ====================
interface McMarketsUI {
  version: string
  author: string
  description: string
  install: (app: App) => void
}

// ==================== 默认导出 ====================
const mcMarketsUI: McMarketsUI = {
  version,
  author,
  description,
  install
}

export default mcMarketsUI