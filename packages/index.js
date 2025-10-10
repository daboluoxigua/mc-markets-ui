/**
 * @mc-markets/ui - 自定义组件库
 * 
 * 提供自定义组件和工具函数
 * 支持 Element Plus 组件回退机制
 * 将 Element Plus 组件前缀从 el- 转换为 m- 并导出
 * 导出 Element Plus 事件相关功能（Message、MessageBox、Notification、Loading 等）
 * 
 * @version 1.0.90
 */

import * as ElementPlusComponents from 'element-plus'
// 导入样式文件
import MIcon from './components/Icon/Icon.vue'
import MButton from './components/Button/Button.vue'
import MInput from './components/Input/Input.vue'
import MForm from './components/Form/Form.vue'
import MFormItem from './components/FormItem/FormItem.vue'
import MTooltip from './components/Tooltip/Tooltip.vue'
import MSelect from './components/Select/Select.vue'
import MOption from './components/Option/Option.vue'
import MOptionGroup from './components/OptionGroup/OptionGroup.vue'
import MPagination from './components/Pagination/Pagination.vue'
import MRadio from './components/Radio/Radio.vue'
import MRadioGroup from './components/RadioGroup/RadioGroup.vue'
import MRadioButton from './components/RadioButton/RadioButton.vue'
import MSwitch from './components/Switch/Switch.vue'
import MTag from './components/Tag/Tag.vue'
import MAlert from './components/Alert/Alert.vue'
import MDialog from './components/Dialog/Dialog.vue'
import MNotification from './components/Notification/Notification.vue'
import MMessage, { Message } from './components/Message/Message.vue'
import MNotifiMessage, { NotifiMessage } from './components/NotifiMessage/NotifiMessage.vue'
import MDatePicker from './components/DatePicker/DatePicker.vue'
import MEmpty from './components/Empty/Empty.vue'
import MTable from './components/Table/Table.vue'
import MTableColumn from './components/Table/TableColumn.vue'
import MBanner from './components/Banner/Banner.vue'
import MTabs from './components/Tabs/Tabs.vue'
import MTabPane from './components/Tabs/TabPane.vue'
import MTabCard from './components/TabCard/TabCard.vue'
import MTabCardItem from './components/TabCard/TabCardItem.vue'
import MBreadcrumb from './components/Breadcrumb/Breadcrumb.vue'

const components = [MIcon, MButton, MInput, MForm, MFormItem, MTooltip, MSelect, MOption, MOptionGroup, MPagination, MRadio, MRadioGroup, MRadioButton, MSwitch, MTag, MAlert, MDialog, MNotification, MMessage, MNotifiMessage, MDatePicker, MEmpty, MTable, MTableColumn, MBanner, MTabs, MTabPane, MTabCard, MTabCardItem, MBreadcrumb]

// 全局组件配置 - 需要自动创建实例的组件
const globalInstanceComponents = [
  { id: 'global-message-container', component: MMessage },
  { id: 'global-notification-container', component: MNotifiMessage }
]

// 创建单个全局组件实例
async function createGlobalComponent({ id, component }) {
  try {
    // 检查是否已存在，避免重复创建
    if (document.getElementById(id)) return
    
    const { createApp, h } = await import('vue')
    
    // 创建容器
    const container = document.createElement('div')
    container.id = id
    document.body.appendChild(container)
    
    // 创建并挂载 Vue 应用
    const app = createApp({
      render: () => h(component)
    })
    
    app.mount(`#${id}`)
  } catch (error) {
    console.warn(`Failed to create global component ${id}:`, error)
  }
}

// 创建所有全局组件实例
async function createGlobalComponents() {
  const promises = globalInstanceComponents.map(createGlobalComponent)
  await Promise.all(promises)
}

// 存储转换后的 Element Plus 组件
const convertedComponents = {}

function registerElementPlus(app) {
  // 获取已注册的自定义组件名称
  const customComponentNames = components.map(comp => {
    if (comp && comp.name && typeof comp.name === 'string') {
      let name = comp.name.toLowerCase()
      const nameMap = {
        'mradiogroup': 'm-radio-group',
        'mradiobutton': 'm-radio-button',
        'mformitem': 'm-form-item',
        'moptiongroup': 'm-option-group',
        'mtabs': 'm-tabs',
        'mtabpane': 'm-tab-pane',
        'mtabcard': 'm-tab-card',
        'mtabcarditem': 'm-tab-card-item',
        'mbreadcrumb': 'm-breadcrumb'
      }
      return nameMap[name] || name.replace(/^m/, 'm-')
    }
    return null
  }).filter(Boolean)

  
  Object.entries(ElementPlusComponents).forEach(([key, comp]) => {
    if (comp && comp.name && typeof comp.name === 'string' && comp.name.startsWith('El')) {
      // 将 ElOptionGroup 转换为 m-option-group
      const mName = 'm-' + comp.name.slice(2).replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '')
      
      // 只注册没有被自定义组件覆盖的Element Plus组件
      if (!customComponentNames.includes(mName)) {
        // 检查组件是否已经注册，避免重复注册警告
        if (!app._context.components[mName]) {
          app.component(mName, comp)
        } else {
        }
      } else {
      }
      
      // 存储转换后的组件用于导出
      const exportName = 'M' + comp.name.slice(2) // ElButton -> MButton
      convertedComponents[exportName] = comp
    }
  })
}

const install = (app) => {
  // 应用全局样式覆盖
  if (typeof window !== 'undefined') {
    import('./utils/styleUtils.js').then(({ applyGlobalOverride }) => {
      applyGlobalOverride();
    });
  }
  
  console.log('🚀 开始安装 @mc-markets/ui 组件库...')
  
  // 先注册自定义组件 - 确保优先级
  components.forEach(component => {
    if (component && component.name && typeof component.name === 'string') {
      let name = component.name.toLowerCase()
      // 处理特定的组件名称映射
      const nameMap = {
        'mradiogroup': 'm-radio-group',
        'mradiobutton': 'm-radio-button',
        'mformitem': 'm-form-item',
        'moptiongroup': 'm-option-group',
        'mtabs': 'm-tabs',
        'mtabpane': 'm-tab-pane',
        'mtabcard': 'm-tab-card',
        'mtabcarditem': 'm-tab-card-item',
        'mbreadcrumb': 'm-breadcrumb'
      }
      name = nameMap[name] || name.replace(/^m/, 'm-')
      
      // 强制注册自定义组件，确保覆盖任何已存在的组件
      app.component(name, component)
    }
  })
  
  // 然后注册转换后的 Element Plus 组件（只注册没有自定义组件覆盖的）
  registerElementPlus(app)
  
  // 自动创建全局组件实例
  if (typeof window !== 'undefined') {
    createGlobalComponents()
  }
}

// 工具函数：检查组件注册状态
export function checkComponentRegistration(app) {
  const registeredComponents = Object.keys(app._context.components || {})
  const customComponents = components.map(comp => {
    if (comp && comp.name && typeof comp.name === 'string') {
      let name = comp.name.toLowerCase()
      const nameMap = {
        'mradiogroup': 'm-radio-group',
        'mradiobutton': 'm-radio-button',
        'mformitem': 'm-form-item',
        'moptiongroup': 'm-option-group',
        'mtabs': 'm-tabs',
        'mtabpane': 'm-tab-pane',
        'mtabcard': 'm-tab-card',
        'mtabcarditem': 'm-tab-card-item',
        'mbreadcrumb': 'm-breadcrumb'
      }
      return nameMap[name] || name.replace(/^m/, 'm-')
    }
    return null
  }).filter(Boolean)
  
  console.log('📊 组件注册状态报告:')
  console.log('已注册的组件:', registeredComponents.filter(name => name.startsWith('m-')))
  console.log('自定义组件:', customComponents)
  
  return {
    registered: registeredComponents,
    custom: customComponents,
    conflicts: registeredComponents.filter(name => 
      name.startsWith('m-') && customComponents.includes(name)
    )
  }
}

export default { install }
export { MIcon, MButton, MInput, MForm, MFormItem, MTooltip, MSelect, MPagination, MRadio, MRadioGroup, MRadioButton, MSwitch, MTag, MAlert, MDialog, MNotification, MMessage, MNotifiMessage, MDatePicker, MEmpty, MTable, MTableColumn, MBanner, MTabs, MTabPane, MTabCard, MTabCardItem, MBreadcrumb }

// 导出样式工具函数
export { 
  addOverrideClass, 
  addComponentOverride, 
  applyGlobalOverride, 
  forceRefreshStyles,
  createOverrideComponent 
} from './utils/styleUtils.js'

// 手动导出常用的 Element Plus 函数（只导出函数，不导出组件）
export const MMessageBox = ElementPlusComponents.ElMessageBox

// 导出自定义组件的静态方法
export { Message, NotifiMessage }

// 导出转换后的 Element Plus 组件
export const mComponents = { ...convertedComponents }

// 导出常用的 Element Plus 组件
export const MButtonGroup = convertedComponents.MButtonGroup
export const MCarousel = convertedComponents.MCarousel
export const MCarouselItem = convertedComponents.MCarouselItem
export const MCascader = convertedComponents.MCascader
export const MCascaderPanel = convertedComponents.MCascaderPanel
export const MCheckTag = convertedComponents.MCheckTag
export const MCalendar = convertedComponents.MCalendar
export const MTimePicker = convertedComponents.MTimePicker
export const MDateTimePicker = convertedComponents.MDateTimePicker
export const MColorPicker = convertedComponents.MColorPicker
export const MTransfer = convertedComponents.MTransfer
export const MTree = convertedComponents.MTree
export const MTreeSelect = convertedComponents.MTreeSelect
export const MUpload = convertedComponents.MUpload
export const MImage = convertedComponents.MImage
export const MImageViewer = convertedComponents.MImageViewer
export const MBacktop = convertedComponents.MBacktop
export const MInfiniteScroll = convertedComponents.MInfiniteScroll
export const MAffix = convertedComponents.MAffix
export const MScrollbar = convertedComponents.MScrollbar
export const MResult = convertedComponents.MResult
export const MSkeleton = convertedComponents.MSkeleton
export const MLoading = convertedComponents.MLoading
export const MSpinner = convertedComponents.MSpinner
export const MProgress = convertedComponents.MProgress
export const MBadge = convertedComponents.MBadge
export const MAvatar = convertedComponents.MAvatar
export const MImagePreview = convertedComponents.MImagePreview
export const MTeleport = convertedComponents.MTeleport
export const MConfigProvider = convertedComponents.MConfigProvider
