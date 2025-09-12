import Inspector from 'vite-plugin-vue-inspector'

export default function createInspector() {
  // 只在开发环境且设置了环境变量时启用 Inspector
  if (process.env.NODE_ENV === 'development' && process.env.VUE_INSPECTOR === 'true') {
    return Inspector({
      // 减少性能开销
      enabled: true,
    })
  }
  return null
}
