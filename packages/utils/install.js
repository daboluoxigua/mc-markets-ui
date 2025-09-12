/**
 * Vue 插件安装函数
 * 负责注册组件和全局属性
 */

import { registerComponentWithFallback } from './fallback-utils.js'

/**
 * 创建安装函数
 * @param {Object} options 安装选项
 * @param {Object} options.components 组件映射表
 * @param {Object} options.elementPlusMapping Element Plus 映射表
 * @param {Object} options.ElementPlus Element Plus 对象
 * @param {Object} options.version 版本信息
 * @param {string} options.author 作者
 * @param {string} options.description 描述
 * @returns {Function} 安装函数
 */
export function createInstallFunction({ 
  components, 
  elementPlusMapping, 
  ElementPlus, 
  version, 
  author, 
  description 
}) {
  return function install(app) {
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
      getComponentWithFallback: (name) => getComponentWithFallback(name, components, elementPlusMapping, ElementPlus), // 提供智能获取组件方法
      registerComponentWithFallback: (name) => registerComponentWithFallback(name, app, components, elementPlusMapping, ElementPlus) // 提供智能注册组件方法
    }
    
    // 注册全局方法，支持动态组件注册
    app.config.globalProperties.$registerMCComponent = (name) => {
      return registerComponentWithFallback(name, app, components, elementPlusMapping, ElementPlus)
    }
  }
}
