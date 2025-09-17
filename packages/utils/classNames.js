/**
 * 类名装饰器方法
 * @param {...(string|boolean|undefined|null)} classes - 类名参数
 * @returns {string} 合并后的类名字符串
 */
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

/**
 * 排除指定属性
 * @param {Object} attrs - 原始属性对象
 * @param {...string} excludeKeys - 要排除的属性名
 * @returns {Object} 排除指定属性后的新对象
 */
export const excludeAttrs = (attrs, ...excludeKeys) => {
  const result = { ...attrs }
  excludeKeys.forEach(key => {
    delete result[key]
  })
  return result
}

