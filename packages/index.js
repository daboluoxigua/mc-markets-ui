/**
 * @mc-markets/ui - 自定义组件库
 * 
 * 提供自定义组件和工具函数
 * 
 * @version 1.0.37
 */

import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import Card from './components/Card/Card.vue'

export { 
  Icon, Button, Card
}

// 样式相关
export * from './styles/theme-config.js'
export { default as variables } from './styles/variables.scss?inline'
export { default as styles } from './styles/index.scss?inline'

// 图标类型和工具函数
export * from './components/Icon/icon-types.js'



// ==================== 版本信息 ====================
const version = '1.0.37'
const author = 'chenyu'
const description = '自定义组件库，提供自定义组件和工具函数'

// ==================== 组件注册配置 ====================
const components = {
  Icon,
  Button,
  Card
}

// ==================== 安装函数 ====================
const install = (app) => {
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

// ==================== 默认导出 ====================
const mcMarketsUI = {
  version,
  author,
  description,
  install
}

export default mcMarketsUI
