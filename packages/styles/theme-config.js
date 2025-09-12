/**
 * @mc-markets/ui - 主题配置工具
 * 
 * 基于 Element Plus 官方主题定制指南
 * @see https://element-plus.org/zh-CN/guide/theming.html
 */

export class ThemeConfigManager {
  constructor() {
    this.currentTheme = { name: 'default', dark: false }
  }
  
  static getInstance() {
    if (!ThemeConfigManager.instance) {
      ThemeConfigManager.instance = new ThemeConfigManager()
    }
    return ThemeConfigManager.instance
  }
  
  /** 设置主题 */
  setTheme(theme) {
    this.currentTheme = { ...this.currentTheme, ...theme }
    this.applyTheme()
  }
  
  /** 获取当前主题 */
  getTheme() {
    return { ...this.currentTheme }
  }
  
  /** 切换暗色主题 */
  toggleDark() {
    this.currentTheme.dark = !this.currentTheme.dark
    this.applyTheme()
  }
  
  /** 设置主色调 */
  setPrimaryColor(color) {
    this.setCssVar('--el-color-primary', color)
    this.generateColorPalette(color, 'primary')
  }
  
  /** 设置成功色 */
  setSuccessColor(color) {
    this.setCssVar('--el-color-success', color)
    this.generateColorPalette(color, 'success')
  }
  
  /** 设置警告色 */
  setWarningColor(color) {
    this.setCssVar('--el-color-warning', color)
    this.generateColorPalette(color, 'warning')
  }
  
  /** 设置危险色 */
  setDangerColor(color) {
    this.setCssVar('--el-color-danger', color)
    this.generateColorPalette(color, 'danger')
  }
  
  /** 设置信息色 */
  setInfoColor(color) {
    this.setCssVar('--el-color-info', color)
    this.generateColorPalette(color, 'info')
  }
  
  /** 设置CSS变量 */
  setCssVar(name, value) {
    const root = document.documentElement
    root.style.setProperty(name, value)
  }
  
  /** 获取CSS变量 */
  getCssVar(name) {
    const root = document.documentElement
    return getComputedStyle(root).getPropertyValue(name).trim()
  }
  
  /** 生成颜色调色板 */
  generateColorPalette(color, type) {
    const root = document.documentElement
    const baseColor = this.hexToRgb(color)
    
    if (!baseColor) return
    
    // 生成不同亮度的颜色
    const lightColors = this.generateLightColors(baseColor)
    const darkColors = this.generateDarkColors(baseColor)
    
    // 设置CSS变量
    root.style.setProperty(`--el-color-${type}`, color)
    root.style.setProperty(`--el-color-${type}-light-3`, lightColors[3])
    root.style.setProperty(`--el-color-${type}-light-5`, lightColors[5])
    root.style.setProperty(`--el-color-${type}-light-7`, lightColors[7])
    root.style.setProperty(`--el-color-${type}-light-8`, lightColors[8])
    root.style.setProperty(`--el-color-${type}-light-9`, lightColors[9])
    root.style.setProperty(`--el-color-${type}-dark-2`, darkColors[2])
  }
  
  /** 应用主题 */
  applyTheme() {
    const root = document.documentElement
    
    // 应用暗色主题
    if (this.currentTheme.dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    // 应用自定义类名
    if (this.currentTheme.customClass) {
      root.classList.add(this.currentTheme.customClass)
    }
    
    // 应用自定义CSS变量
    if (this.currentTheme.cssVars) {
      Object.entries(this.currentTheme.cssVars).forEach(([key, value]) => {
        root.style.setProperty(key, value)
      })
    }
    
    // 应用预设颜色
    if (this.currentTheme.primaryColor) {
      this.setPrimaryColor(this.currentTheme.primaryColor)
    }
    if (this.currentTheme.successColor) {
      this.setSuccessColor(this.currentTheme.successColor)
    }
    if (this.currentTheme.warningColor) {
      this.setWarningColor(this.currentTheme.warningColor)
    }
    if (this.currentTheme.dangerColor) {
      this.setDangerColor(this.currentTheme.dangerColor)
    }
    if (this.currentTheme.infoColor) {
      this.setInfoColor(this.currentTheme.infoColor)
    }
  }
  
  /** 十六进制颜色转RGB */
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }
  
  /** RGB转十六进制 */
  rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
  }
  
  /** 生成浅色变体 */
  generateLightColors(rgb) {
    const colors = {}
    
    for (let i = 1; i <= 9; i++) {
      const factor = (10 - i) / 10
      const r = Math.round(255 - (255 - rgb.r) * factor)
      const g = Math.round(255 - (255 - rgb.g) * factor)
      const b = Math.round(255 - (255 - rgb.b) * factor)
      colors[i] = this.rgbToHex(r, g, b)
    }
    
    return colors
  }
  
  /** 生成深色变体 */
  generateDarkColors(rgb) {
    const colors = {}
    
    for (let i = 1; i <= 2; i++) {
      const factor = i / 10
      const r = Math.round(rgb.r * (1 - factor))
      const g = Math.round(rgb.g * (1 - factor))
      const b = Math.round(rgb.b * (1 - factor))
      colors[i] = this.rgbToHex(r, g, b)
    }
    
    return colors
  }
  
  /** 重置主题 */
  resetTheme() {
    const root = document.documentElement
    root.className = ''
    root.style.cssText = ''
    this.currentTheme = { name: 'default', dark: false }
  }
  
  /** 导出主题配置 */
  exportTheme() {
    const root = document.documentElement
    const computedStyle = getComputedStyle(root)
    const cssVars = {}
    
    // 获取所有CSS变量
    for (let i = 0; i < computedStyle.length; i++) {
      const property = computedStyle[i]
      if (property.startsWith('--el-')) {
        cssVars[property] = computedStyle.getPropertyValue(property).trim()
      }
    }
    
    return JSON.stringify({
      ...this.currentTheme,
      cssVars
    }, null, 2)
  }
  
  /** 导入主题配置 */
  importTheme(config) {
    try {
      const themeConfig = JSON.parse(config)
      this.setTheme(themeConfig)
    } catch (error) {
      console.error('导入主题配置失败:', error)
    }
  }
}

// 导出主题管理器实例
export const themeConfigManager = ThemeConfigManager.getInstance()

// 导出便捷方法
export const setTheme = (theme) => themeConfigManager.setTheme(theme)
export const getTheme = () => themeConfigManager.getTheme()
export const toggleDark = () => themeConfigManager.toggleDark()
export const setPrimaryColor = (color) => themeConfigManager.setPrimaryColor(color)
export const setSuccessColor = (color) => themeConfigManager.setSuccessColor(color)
export const setWarningColor = (color) => themeConfigManager.setWarningColor(color)
export const setDangerColor = (color) => themeConfigManager.setDangerColor(color)
export const setInfoColor = (color) => themeConfigManager.setInfoColor(color)
export const setCssVar = (name, value) => themeConfigManager.setCssVar(name, value)
export const getCssVar = (name) => themeConfigManager.getCssVar(name)
export const resetTheme = () => themeConfigManager.resetTheme()
export const exportTheme = () => themeConfigManager.exportTheme()
export const importTheme = (config) => themeConfigManager.importTheme(config)
