/**
 * 回退机制工具
 * 提供 Element Plus 组件回退功能
 */

/**
 * 获取组件（支持 Element Plus 回退）
 * @param {string} name 组件名称
 * @param {Object} components 组件映射表
 * @param {Object} elementPlusMapping Element Plus 映射表
 * @param {Object} ElementPlus Element Plus 对象
 * @returns {Component|undefined} 组件实例
 */
export function getComponentWithFallback(name, components, elementPlusMapping, ElementPlus) {
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
 * @param {Object} components 组件映射表
 * @param {Object} elementPlusMapping Element Plus 映射表
 * @param {Object} ElementPlus Element Plus 对象
 * @returns {boolean} 是否注册成功
 */
export function registerComponentWithFallback(name, app, components, elementPlusMapping, ElementPlus) {
  const component = getComponentWithFallback(name, components, elementPlusMapping, ElementPlus)
  if (component) {
    app.component(name, component)
    return true
  }
  return false
}
