/**
 * @mc-markets/ui - 自定义组件库
 * 
 * 提供自定义组件和工具函数
 * 支持 Element Plus 组件回退机制
 * 将 Element Plus 组件前缀从 el- 转换为 m- 并导出
 * 导出 Element Plus 事件相关功能（Message、MessageBox、Notification、Loading 等）
 * 
 * @version 1.0.39
 */

import * as ElementPlusComponents from 'element-plus'
import MIcon from './components/Icon/Icon.vue'
import MButton from './components/Button/Button.vue'
import MCard from './components/Card/Card.vue'
import MInput from './components/Input/Input.vue'
import MForm from './components/Form/Form.vue'
import MFormItem from './components/FormItem/FormItem.vue'
import MTooltip from './components/Tooltip/Tooltip.vue'
import MSelect from './components/Select/select.vue'
import MCheckbox from './components/Checkbox/Checkbox.vue'
import MCheckboxGroup from './components/CheckboxGroup/CheckboxGroup.vue'
import MCheckboxButton from './components/CheckboxButton/CheckboxButton.vue'
import MPagination from './components/Pagination/Pagination.vue'
import MRadio from './components/Radio/Radio.vue'
import MRadioGroup from './components/RadioGroup/RadioGroup.vue'
import MRadioButton from './components/RadioButton/RadioButton.vue'
import MSwitch from './components/Switch/Switch.vue'

const components = [MIcon, MButton, MCard, MInput, MForm, MFormItem, MTooltip, MSelect, MCheckbox, MCheckboxGroup, MCheckboxButton, MPagination, MRadio, MRadioGroup, MRadioButton, MSwitch]

// 存储转换后的 Element Plus 组件
const convertedComponents = {}

function registerElementPlus(app) {
  // 获取已注册的自定义组件名称
  const customComponentNames = components.map(comp => {
    if (comp && comp.name && typeof comp.name === 'string') {
      let name = comp.name.toLowerCase()
      const nameMap = {
        'mcheckboxgroup': 'm-checkbox-group',
        'mcheckboxbutton': 'm-checkbox-button',
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
      // 将 MCheckboxGroup 转换为 m-checkbox-group
      let name = component.name.toLowerCase()
      // 处理特定的组件名称映射
      const nameMap = {
        'mcheckboxgroup': 'm-checkbox-group',
        'mcheckboxbutton': 'm-checkbox-button',
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

// 自动导出 Element Plus 函数
const exportedFns = {}
Object.entries(ElementPlusComponents).forEach(([key, value]) => {
  if (typeof value === 'function' && key.startsWith('El')) {
    exportedFns['m' + key.slice(2)] = value
  }
})

export default { install }
export { MIcon, MButton, MCard, MInput, MForm, MFormItem, MTooltip, MSelect, MCheckbox, MCheckboxGroup, MCheckboxButton, MPagination, MRadio, MRadioGroup, MRadioButton, MSwitch }
export const mFns = { ...exportedFns }

// 导出转换后的 Element Plus 组件
export const mComponents = { ...convertedComponents }
