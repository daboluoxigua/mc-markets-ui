/**
 * @mc-markets/ui - 自定义组件库
 * 
 * 提供自定义组件和工具函数
 * 
 * @version 1.0.38
 */

import * as ElementPlus from 'element-plus'

// ==================== 智能组件注册 ====================
// 自动扫描并注册 components 目录下的所有组件
const componentModules = import.meta.glob('./components/**/*.vue', { eager: true })

// Element Plus 组件映射表（m- 前缀到 el- 前缀的映射）
const elementPlusMapping = {
  'm-input': 'ElInput',
  'm-button': 'ElButton',
  'm-card': 'ElCard',
  'm-form': 'ElForm',
  'm-form-item': 'ElFormItem',
  'm-select': 'ElSelect',
  'm-option': 'ElOption',
  'm-date-picker': 'ElDatePicker',
  'm-time-picker': 'ElTimePicker',
  'm-table': 'ElTable',
  'm-table-column': 'ElTableColumn',
  'm-pagination': 'ElPagination',
  'm-dialog': 'ElDialog',
  'm-drawer': 'ElDrawer',
  'm-popover': 'ElPopover',
  'm-tooltip': 'ElTooltip',
  'm-dropdown': 'ElDropdown',
  'm-dropdown-menu': 'ElDropdownMenu',
  'm-dropdown-item': 'ElDropdownItem',
  'm-menu': 'ElMenu',
  'm-menu-item': 'ElMenuItem',
  'm-submenu': 'ElSubMenu',
  'm-tabs': 'ElTabs',
  'm-tab-pane': 'ElTabPane',
  'm-steps': 'ElSteps',
  'm-step': 'ElStep',
  'm-breadcrumb': 'ElBreadcrumb',
  'm-breadcrumb-item': 'ElBreadcrumbItem',
  'm-alert': 'ElAlert',
  'm-notification': 'ElNotification',
  'm-message': 'ElMessage',
  'm-message-box': 'ElMessageBox',
  'm-loading': 'ElLoading',
  'm-infinite-scroll': 'ElInfiniteScroll',
  'm-image': 'ElImage',
  'm-avatar': 'ElAvatar',
  'm-badge': 'ElBadge',
  'm-tag': 'ElTag',
  'm-progress': 'ElProgress',
  'm-skeleton': 'ElSkeleton',
  'm-empty': 'ElEmpty',
  'm-descriptions': 'ElDescriptions',
  'm-descriptions-item': 'ElDescriptionsItem',
  'm-result': 'ElResult',
  'm-statistic': 'ElStatistic',
  'm-timeline': 'ElTimeline',
  'm-timeline-item': 'ElTimelineItem',
  'm-calendar': 'ElCalendar',
  'm-carousel': 'ElCarousel',
  'm-carousel-item': 'ElCarouselItem',
  'm-collapse': 'ElCollapse',
  'm-collapse-item': 'ElCollapseItem',
  'm-divider': 'ElDivider',
  'm-link': 'ElLink',
  'm-text': 'ElText',
  'm-space': 'ElSpace',
  'm-affix': 'ElAffix',
  'm-backtop': 'ElBacktop',
  'm-page-header': 'ElPageHeader',
  'm-radio': 'ElRadio',
  'm-radio-group': 'ElRadioGroup',
  'm-radio-button': 'ElRadioButton',
  'm-checkbox': 'ElCheckbox',
  'm-checkbox-group': 'ElCheckboxGroup',
  'm-checkbox-button': 'ElCheckboxButton',
  'm-switch': 'ElSwitch',
  'm-slider': 'ElSlider',
  'm-rate': 'ElRate',
  'm-color-picker': 'ElColorPicker',
  'm-transfer': 'ElTransfer',
  'm-tree': 'ElTree',
  'm-tree-select': 'ElTreeSelect',
  'm-cascader': 'ElCascader',
  'm-upload': 'ElUpload',
  'm-upload-dragger': 'ElUploadDragger',
  'm-upload-list': 'ElUploadList'
}

// 组件映射表
const components = {}
const componentExports = {}

// 处理组件注册
Object.entries(componentModules).forEach(([path, module]) => {
  try {
    // 提取组件名称，例如：./components/Button/Button.vue -> Button
    const componentName = path.split('/').pop().replace('.vue', '')
    
    // 获取组件的实际名称（从 defineOptions 中获取）
    const component = module.default
    
    // 验证组件是否有效
    if (!component || typeof component !== 'object') {
      console.warn(`[MC-Markets-UI] 跳过无效组件: ${path}`)
      return
    }
    
    const actualName = component.name || componentName
    
    // 注册到组件映射表（带 m- 前缀）
    const prefixedName = `m-${componentName.toLowerCase()}`
    components[prefixedName] = component
    
    // 同时导出原始组件名（不带前缀）
    componentExports[componentName] = component
    
    console.log(`[MC-Markets-UI] 成功注册组件: ${componentName} -> ${prefixedName}`)
  } catch (error) {
    console.error(`[MC-Markets-UI] 注册组件失败: ${path}`, error)
  }
})

// ==================== 智能回退机制 ====================
/**
 * 获取组件（支持 Element Plus 回退）
 * @param {string} name 组件名称
 * @returns {Component|undefined} 组件实例
 */
const getComponentWithFallback = (name) => {
  // 如果组件库中有该组件，直接返回
  if (components[name]) {
    return components[name]
  }
  
  // 检查是否需要回退到 Element Plus
  if (elementPlusMapping[name]) {
    const elementComponentName = elementPlusMapping[name]
    if (ElementPlus[elementComponentName]) {
      return ElementPlus[elementComponentName]
    }
  }
  
  return undefined
}

/**
 * 动态注册组件（支持回退机制）
 * @param {string} name 组件名称
 * @param {Object} app Vue 应用实例
 */
const registerComponentWithFallback = (name, app) => {
  const component = getComponentWithFallback(name)
  if (component) {
    app.component(name, component)
    return true
  }
  return false
}

// ==================== 智能动态导出 ====================
// 创建一个包含所有组件的对象（原始组件名）
const allComponents = { ...componentExports }

// 创建一个包含所有组件的对象（包括 M 前缀版本）
const dynamicExports = { ...componentExports }
Object.entries(componentExports).forEach(([name, component]) => {
  dynamicExports[`M${name}`] = component
})

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

// ==================== 版本信息 ====================
const version = '1.0.38'
const author = 'chenyu'
const description = '自定义组件库，提供自定义组件和工具函数'

// ==================== 安装函数 ====================
const install = (app) => {
  // 智能注册所有组件（带 m- 前缀）
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
  
  // 注册全局属性
  app.config.globalProperties.$mcMarketsUI = {
    version,
    author,
    description,
    components: Object.keys(components), // 提供已注册的组件列表
    elementPlusMapping, // 提供 Element Plus 映射表
    getComponentWithFallback, // 提供智能获取组件方法
    registerComponentWithFallback // 提供智能注册组件方法
  }
  
  // 注册全局方法，支持动态组件注册
  app.config.globalProperties.$registerMCComponent = (name) => {
    return registerComponentWithFallback(name, app)
  }
}

// ==================== 工具函数 ====================
/**
 * 获取所有已注册的组件名称
 * @returns {string[]} 组件名称列表
 */
const getComponentNames = () => Object.keys(components)

/**
 * 检查组件是否已注册
 * @param {string} name 组件名称
 * @returns {boolean} 是否已注册
 */
const hasComponent = (name) => name in components

/**
 * 获取组件
 * @param {string} name 组件名称
 * @returns {Component|undefined} 组件实例
 */
const getComponent = (name) => components[name]

/**
 * 获取所有组件（按需导入时使用）
 * @returns {Object} 所有组件的对象
 */
const getAllComponents = () => allComponents

/**
 * 根据组件名获取组件（支持多种格式和回退机制）
 * @param {string} name 组件名称（支持 m-button, button, Button 等格式）
 * @returns {Component|undefined} 组件实例
 */
const getComponentByName = (name) => {
  // 尝试直接获取
  if (components[name]) return components[name]
  
  // 尝试带 m- 前缀
  if (name.startsWith('m-')) {
    return getComponentWithFallback(name)
  } else {
    const prefixedName = `m-${name.toLowerCase()}`
    return getComponentWithFallback(prefixedName)
  }
}

/**
 * 检查组件是否存在（包括回退机制）
 * @param {string} name 组件名称
 * @returns {boolean} 是否存在
 */
const hasComponentWithFallback = (name) => {
  return getComponentWithFallback(name) !== undefined
}

/**
 * 获取所有可用的组件名称（包括 Element Plus 回退）
 * @returns {string[]} 组件名称列表
 */
const getAllAvailableComponents = () => {
  const customComponents = Object.keys(components)
  const elementComponents = Object.keys(elementPlusMapping)
  return [...new Set([...customComponents, ...elementComponents])]
}

/**
 * 获取组件统计信息
 * @returns {Object} 统计信息
 */
const getComponentStats = () => {
  return {
    customComponents: Object.keys(components).length,
    elementPlusComponents: Object.keys(elementPlusMapping).length,
    totalAvailable: getAllAvailableComponents().length,
    registeredComponents: Object.keys(components),
    elementPlusMappings: Object.keys(elementPlusMapping)
  }
}

/**
 * 验证组件是否存在（支持多种格式）
 * @param {string} name 组件名称
 * @returns {boolean} 是否存在
 */
const validateComponent = (name) => {
  // 检查自定义组件
  if (components[name]) return true
  
  // 检查 Element Plus 映射
  if (elementPlusMapping[name] && ElementPlus[elementPlusMapping[name]]) return true
  
  return false
}

// ==================== 默认导出 ====================
const mcMarketsUI = {
  version,
  author,
  description,
  install,
  // 工具函数
  getComponentNames,
  hasComponent,
  getComponent,
  getAllComponents,
  getComponentByName,
  // 回退机制相关
  getComponentWithFallback,
  hasComponentWithFallback,
  getAllAvailableComponents,
  registerComponentWithFallback,
  // 新增工具函数
  getComponentStats,
  validateComponent,
  // 组件列表
  components: Object.keys(components),
  // 所有组件对象
  allComponents,
  // 动态导出对象
  dynamicExports,
  // Element Plus 映射表
  elementPlusMapping
}

export default mcMarketsUI
