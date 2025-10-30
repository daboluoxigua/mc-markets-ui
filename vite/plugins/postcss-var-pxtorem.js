// 将 CSS 自定义属性（--var）中的 px 转换为 rem
// 仅处理以 `--` 开头的属性名，保持与 postcss-pxtorem 的 rootValue 一致

export default function postcssVarPxToRem(options = {}) {
  const rootValue = Number(options.rootValue) || 37.5
  const precision = typeof options.precision === 'number' ? options.precision : 4

  const pxRegex = /(-?\d*\.?\d+)px\b/g

  return {
    postcssPlugin: 'postcss-var-pxtorem',
    Declaration(decl) {
      if (!decl || typeof decl.prop !== 'string') return
      if (!decl.prop.startsWith('--')) return
      const value = decl.value
      if (!value || typeof value !== 'string') return
      if (!pxRegex.test(value)) return
      const next = value.replace(pxRegex, (_, num) => {
        const px = parseFloat(num)
        if (!isFinite(px)) return _
        const rem = px / rootValue
        return `${rem.toFixed(precision)}rem`
      })
      decl.value = next
    }
  }
}

// 兼容 PostCSS 插件格式
postcssVarPxToRem.postcss = true


