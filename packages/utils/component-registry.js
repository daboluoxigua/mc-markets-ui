/**
 * 组件注册功能
 * 负责扫描、注册和管理组件
 */

/**
 * 扫描并注册 components 目录下的所有组件
 * @returns {Object} 包含 components 和 componentExports 的对象
 */
export function registerComponents() {
  // 自动扫描并注册 components 目录下的所有组件
  const componentModules = import.meta.glob('./components/**/*.vue', { eager: true })
  
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
  
  return { components, componentExports }
}

/**
 * 创建组件对象
 * @param {Object} componentExports 组件导出对象
 * @returns {Object} 包含 allComponents 和 dynamicExports 的对象
 */
export function createComponentObjects(componentExports) {
  // 创建一个包含所有组件的对象（原始组件名）
  const allComponents = { ...componentExports }
  
  // 创建一个包含所有组件的对象（包括 M 前缀版本）
  const dynamicExports = { ...componentExports }
  Object.entries(componentExports).forEach(([name, component]) => {
    dynamicExports[`M${name}`] = component
  })
  
  return { allComponents, dynamicExports }
}
