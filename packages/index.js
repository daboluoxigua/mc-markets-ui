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

const components = [MIcon, MButton, MCard, MInput, MForm, MFormItem, MTooltip, MSelect, MCheckbox, MCheckboxGroup, MCheckboxButton]

// 存储转换后的 Element Plus 组件
const convertedComponents = {}

function registerElementPlus(app) {
  Object.entries(ElementPlusComponents).forEach(([key, comp]) => {
    if (comp && comp.name && typeof comp.name === 'string' && comp.name.startsWith('El')) {
      // 将 ElButton 转换为 m-button
      const mName = comp.name.replace(/^El/, 'm-').toLowerCase()
      app.component(mName, comp)
      
      // 存储转换后的组件用于导出
      const exportName = 'M' + comp.name.slice(2) // ElButton -> MButton
      convertedComponents[exportName] = comp
    }
  })
}

const install = (app) => {
  // 先注册转换后的 Element Plus 组件
  registerElementPlus(app)
  
  // 然后注册自定义组件（覆盖同名的 Element Plus 组件）
  components.forEach(component => {
    if (component && component.name && typeof component.name === 'string') {
      const name = component.name.replace(/^M/, 'm-').toLowerCase()
      app.component(name, component)
    }
  })
}

// 自动导出 Element Plus 函数
const exportedFns = {}
Object.entries(ElementPlusComponents).forEach(([key, value]) => {
  if (typeof value === 'function' && key.startsWith('El')) {
    exportedFns['m' + key.slice(2)] = value
  }
})

export default { install }
export { MIcon, MButton, MCard, MInput, MForm, MFormItem, MTooltip, MSelect, MCheckbox, MCheckboxGroup, MCheckboxButton }
export const mFns = { ...exportedFns }

// 导出转换后的 Element Plus 组件
export const mComponents = { ...convertedComponents }
