/**
 * @mc-markets/ui - 自定义组件库
 * 
 * 提供自定义组件和工具函数
 * 支持 Element Plus 组件回退机制
 * 将 Element Plus 组件前缀从 el- 转换为 m- 并导出
 * 导出 Element Plus 事件相关功能（Message、MessageBox、Notification、Loading 等）
 * 
 * @version 1.0.43
 */

import * as ElementPlusComponents from 'element-plus'
// 导入样式文件
import './styles/index.scss'
import MIcon from './components/Icon/Icon.vue'
import MButton from './components/Button/Button.vue'
import MCard from './components/Card/Card.vue'
import MInput from './components/Input/Input.vue'
import MForm from './components/Form/Form.vue'
import MFormItem from './components/FormItem/FormItem.vue'
import MTooltip from './components/Tooltip/Tooltip.vue'
import MSelect from './components/Select/select.vue'
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
import MDatePicker from './components/DatePicker/DatePicker.vue'
import MEmpty from './components/Empty/Empty.vue'
import MTable from './components/Table/Table.vue'
import MBanner from './components/Banner/Banner.vue'
import MTabs from './components/Tabs/Tabs.vue'
import MTabPane from './components/Tabs/TabPane.vue'

const components = [MIcon, MButton, MCard, MInput, MForm, MFormItem, MTooltip, MSelect, MOption, MOptionGroup, MPagination, MRadio, MRadioGroup, MRadioButton, MSwitch, MTag, MAlert, MDialog, MNotification, MDatePicker, MEmpty, MTable, MBanner, MTabs, MTabPane]

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
        'moptiongroup': 'm-option-group'
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
        }
      }
      
      // 存储转换后的组件用于导出
      const exportName = 'M' + comp.name.slice(2) // ElButton -> MButton
      convertedComponents[exportName] = comp
    }
  })
}

const install = (app) => {
  // 先注册自定义组件
  components.forEach(component => {
    if (component && component.name && typeof component.name === 'string') {
      let name = component.name.toLowerCase()
      // 处理特定的组件名称映射
      const nameMap = {
        'mradiogroup': 'm-radio-group',
        'mradiobutton': 'm-radio-button',
        'mformitem': 'm-form-item',
        'moptiongroup': 'm-option-group'
      }
      name = nameMap[name] || name.replace(/^m/, 'm-')
      
      // 直接注册自定义组件，覆盖Element Plus组件
      app.component(name, component)
    }
  })
  
  // 然后注册转换后的 Element Plus 组件（只注册没有自定义组件覆盖的）
  registerElementPlus(app)
}

export default { install }
export { MIcon, MButton, MCard, MInput, MForm, MFormItem, MTooltip, MSelect, MPagination, MRadio, MRadioGroup, MRadioButton, MSwitch, MTag, MAlert, MDialog, MNotification, MDatePicker, MEmpty, MTable, MBanner }

// 手动导出常用的 Element Plus 函数（只导出函数，不导出组件）
export const MMessage = ElementPlusComponents.ElMessage
export const MMessageBox = ElementPlusComponents.ElMessageBox

// 导出转换后的 Element Plus 组件
export const mComponents = { ...convertedComponents }

// 导出常用的 Element Plus 组件
export const MTableColumn = convertedComponents.MTableColumn
export const MButtonGroup = convertedComponents.MButtonGroup
export const MBreadcrumb = convertedComponents.MBreadcrumb
export const MBreadcrumbItem = convertedComponents.MBreadcrumbItem
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
