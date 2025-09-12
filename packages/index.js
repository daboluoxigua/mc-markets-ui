/**
 * @mc-markets/ui - 自定义组件库
 * 
 * 提供自定义组件和工具函数
 * 支持 Element Plus 组件回退机制
 * 导出 Element Plus 事件相关功能（Message、MessageBox、Notification、Loading 等）
 * 
 * @version 1.0.39
 */

// ==================== 导入依赖 ====================
import * as ElementPlus from 'element-plus'

// 导入工具函数
import { VERSION, AUTHOR, DESCRIPTION, ELEMENT_PLUS_MAPPING } from './utils/constants.js'
import { registerComponents, createComponentObjects } from './utils/component-registry.js'
import { getComponentWithFallback } from './utils/fallback-utils.js'
import { createInstallFunction } from './utils/install.js'
import { createComponentUtils } from './utils/component-utils.js'

// ==================== 组件注册 ====================
// 注册所有组件
const { components, componentExports } = registerComponents()

// 创建组件对象
const { allComponents, dynamicExports } = createComponentObjects(componentExports)

// ==================== 核心功能 ====================
// 创建安装函数
const install = createInstallFunction({
  components,
  elementPlusMapping: ELEMENT_PLUS_MAPPING,
  ElementPlus,
  version: VERSION,
  author: AUTHOR,
  description: DESCRIPTION
})

// 创建工具函数
const componentUtils = createComponentUtils(
  components, 
  ELEMENT_PLUS_MAPPING, 
  ElementPlus, 
  allComponents
)

// ==================== 导出部分 ====================
// 导出组件对象
export { allComponents, dynamicExports }

// 导出所有带 M 前缀的组件名（完全自动化）
// 手动导出已知的组件，确保向后兼容
export const MIcon = componentExports.Icon
export const MButton = componentExports.Button
export const MCard = componentExports.Card

// 注意：新组件需要通过 dynamicExports 对象访问
// 例如：import { dynamicExports } from '@mc-markets/ui'
// const { MMyNewComponent } = dynamicExports

// 样式相关
export * from './styles/theme-config.js'
export { default as variables } from './styles/variables.scss?inline'
export { default as styles } from './styles/index.scss?inline'

// 图标类型和工具函数
export * from './components/Icon/icon-types.js'

// Element Plus 事件导出
export const {
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElLoading
} = ElementPlus

// 导出 Element Plus 事件类型（如果可用）
export const ElementPlusEvents = {
  // 消息相关事件
  Message: ElementPlus.ElMessage,
  MessageBox: ElementPlus.ElMessageBox,
  Notification: ElementPlus.ElNotification,
  Loading: ElementPlus.ElLoading,
  
  // 其他可能的事件相关组件
  ...(ElementPlus.ElInfiniteScroll ? { InfiniteScroll: ElementPlus.ElInfiniteScroll } : {}),
  ...(ElementPlus.ElPopover ? { Popover: ElementPlus.ElPopover } : {}),
  ...(ElementPlus.ElTooltip ? { Tooltip: ElementPlus.ElTooltip } : {})
}

// ==================== 默认导出 ====================
const mcMarketsUI = {
  version: VERSION,
  author: AUTHOR,
  description: DESCRIPTION,
  install,
  // 工具函数
  ...componentUtils,
  // 回退机制相关
  getComponentWithFallback: (name) => getComponentWithFallback(name, components, ELEMENT_PLUS_MAPPING, ElementPlus),
  // 组件列表
  components: Object.keys(components),
  // 所有组件对象
  allComponents,
  // 动态导出对象
  dynamicExports,
  // Element Plus 映射表
  elementPlusMapping: ELEMENT_PLUS_MAPPING,
  // Element Plus 事件
  ElementPlusEvents
}

export default mcMarketsUI