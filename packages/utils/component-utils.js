/**
 * 组件工具函数
 * 提供各种组件相关的辅助功能
 */

import { getComponentWithFallback } from './fallback-utils.js'

/**
 * 创建组件工具函数集合
 * @param {Object} components 组件映射表
 * @param {Object} elementPlusMapping Element Plus 映射表
 * @param {Object} ElementPlus Element Plus 对象
 * @param {Object} allComponents 所有组件对象
 * @returns {Object} 工具函数集合
 */
export function createComponentUtils(components, elementPlusMapping, ElementPlus, allComponents) {
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
      return getComponentWithFallback(name, components, elementPlusMapping, ElementPlus)
    } else {
      const prefixedName = `m-${name.toLowerCase()}`
      return getComponentWithFallback(prefixedName, components, elementPlusMapping, ElementPlus)
    }
  }

  /**
   * 检查组件是否存在（包括回退机制）
   * @param {string} name 组件名称
   * @returns {boolean} 是否存在
   */
  const hasComponentWithFallback = (name) => {
    return getComponentWithFallback(name, components, elementPlusMapping, ElementPlus) !== undefined
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

  return {
    getComponentNames,
    hasComponent,
    getComponent,
    getAllComponents,
    getComponentByName,
    hasComponentWithFallback,
    getAllAvailableComponents,
    getComponentStats,
    validateComponent
  }
}
