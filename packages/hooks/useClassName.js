import { computed, useAttrs } from 'vue'
import { classNames, excludeAttrs } from '@packages/utils/classNames.js'

/**
 * 类名 Hook
 * @param {string} defaultClass - 默认的类名
 * @param {string} excludeKey - 要排除的属性名，默认为 'popperClass'
 * @returns {Object} 包含 mergedAttrs 和 className 的对象
 */
export function useClassName(defaultClass, excludeKey = 'popperClass') {
  const attrs = useAttrs()
  
  // 排除指定属性
  const mergedAttrs = computed(() => excludeAttrs(attrs, excludeKey))
  
  // 计算类名
  const className = computed(() => classNames(defaultClass, attrs[excludeKey]))
  
  return {
    mergedAttrs,
    className
  }
}
