import { ref } from 'vue'

/**
 * 无感透传 ref 的 Hook
 * 通过 Proxy 将外部 ref 访问转发给内部 Element Plus 组件实例
 * 
 * @param {string} refName - 内部 ref 的名称，默认为 'innerRef'
 * @param {Object} options - 配置选项
 * @param {Object} options.compatibilityKeys - 兼容性字段映射 { key: value }
 * @returns {Object} 包含 innerRef 和 exposedProxy 的对象
 * 
 * @example
 * // 在组件中使用
 * const { innerRef, exposedProxy } = useExposeRef('innerTableRef')
 * defineExpose(exposedProxy)
 * 
 * // 在模板中使用
 * <el-table v-bind="$attrs" ref="innerTableRef">
 */
export function useExposeRef(refName = 'innerRef', options = {}) {
  const { compatibilityKeys = {} } = options
  
  // 创建内部 ref
  const innerRef = ref()
  
  // 创建 Proxy 代理对象
  const exposedProxy = new Proxy({}, {
    get(_target, key) {
      // 返回兼容性字段
      if (key in compatibilityKeys) {
        const value = compatibilityKeys[key]
        return typeof value === 'function' ? value() : value
      }
      
      // 保留默认兼容字段
      if (key === 'elRef' || key === refName) {
        return innerRef
      }
      // 动态生成 getter 方法：getElRef, getInnerRef, getInnerTableRef 等
      // 将 refName 转换为驼峰命名，如 innerTableRef -> InnerTableRef
      const getterMethodName = 'get' + refName.charAt(0).toUpperCase() + refName.slice(1)
      if (key === 'getElRef' || key === getterMethodName) {
        return () => innerRef.value
      }
      if (key === 'call') {
        return (method, ...args) => innerRef.value?.[method]?.(...args)
      }
      
      // 访问内部实例的属性或方法
      const target = innerRef.value
      if (!target) return undefined
      
      // 使用 Reflect.get 支持 Symbol 类型的 key
      const value = Reflect.get(target, key, target)
      // 如果是函数，绑定 this 指向原实例
      return typeof value === 'function' ? value.bind(target) : value
    },
    set(_target, key, val) {
      const target = innerRef.value
      if (target) {
        target[key] = val
      }
      return true
    },
    has(_target, key) {
      // 检查兼容字段
      const getterMethodName = `get${refName.charAt(0).toUpperCase() + refName.slice(1)}`
      if (key in compatibilityKeys || key === 'elRef' || key === refName || key === 'getElRef' || key === getterMethodName || key === 'call') {
        return true
      }
      // 检查内部实例
      const target = innerRef.value
      // 使用 Reflect.has 支持 Symbol 类型的 key
      return target ? Reflect.has(target, key) : false
    },
    ownKeys(_target) {
      const target = innerRef.value
      if (target) {
        return Reflect.ownKeys(target)
      }
      return []
    },
    getOwnPropertyDescriptor(_target, key) {
      // 检查兼容字段
      const getterMethodName = `get${refName.charAt(0).toUpperCase() + refName.slice(1)}`
      if (key in compatibilityKeys || key === 'elRef' || key === refName || key === 'getElRef' || key === getterMethodName || key === 'call') {
        return {
          enumerable: true,
          configurable: true
        }
      }
      
      // 检查内部实例
      const target = innerRef.value
      if (target && key in target) {
        return Reflect.getOwnPropertyDescriptor(target, key)
      }
      
      // 如果都不存在，返回 undefined（符合 Proxy 规范）
      return undefined
    }
  })
  
  return {
    innerRef,
    exposedProxy
  }
}
