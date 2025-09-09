/**
 * 简化的主题配置工具
 * 基于 Element Plus 官方主题定制指南
 */

export interface ThemeConfig {
  name?: string
  dark?: boolean
  primaryColor?: string
  successColor?: string
  warningColor?: string
  dangerColor?: string
  infoColor?: string
  cssVars?: Record<string, string>
}

// 主题配置管理器
class ThemeManager {
  private currentTheme: ThemeConfig = { name: 'default', dark: false }
  
  /** 设置主题 */
  setTheme(theme: ThemeConfig): void {
    this.currentTheme = { ...this.currentTheme, ...theme }
    this.applyTheme()
  }
  
  /** 获取当前主题 */
  getTheme(): ThemeConfig {
    return { ...this.currentTheme }
  }
  
  /** 切换暗色主题 */
  toggleDark(): void {
    this.currentTheme.dark = !this.currentTheme.dark
    this.applyTheme()
  }
  
  /** 设置主色调 */
  setPrimaryColor(color: string): void {
    this.setCssVar('--el-color-primary', color)
    this.generateColorPalette(color, 'primary')
  }
  
  /** 设置成功色 */
  setSuccessColor(color: string): void {
    this.setCssVar('--el-color-success', color)
    this.generateColorPalette(color, 'success')
  }
  
  /** 设置警告色 */
  setWarningColor(color: string): void {
    this.setCssVar('--el-color-warning', color)
    this.generateColorPalette(color, 'warning')
  }
  
  /** 设置危险色 */
  setDangerColor(color: string): void {
    this.setCssVar('--el-color-danger', color)
    this.generateColorPalette(color, 'danger')
  }
  
  /** 设置信息色 */
  setInfoColor(color: string): void {
    this.setCssVar('--el-color-info', color)
    this.generateColorPalette(color, 'info')
  }
  
  /** 设置CSS变量 */
  setCssVar(name: string, value: string): void {
    const root = document.documentElement
    root.style.setProperty(name, value)
  }
  
  /** 获取CSS变量 */
  getCssVar(name: string): string {
    const root = document.documentElement
    return getComputedStyle(root).getPropertyValue(name).trim()
  }
  
  /** 生成颜色调色板 */
  private generateColorPalette(color: string, type: 'primary' | 'success' | 'warning' | 'danger' | 'info'): void {
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
  private applyTheme(): void {
    const root = document.documentElement
    
    // 应用暗色主题
    if (this.currentTheme.dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
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
  private hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }
  
  /** RGB转十六进制 */
  private rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
  }
  
  /** 生成浅色变体 */
  private generateLightColors(rgb: { r: number; g: number; b: number }): Record<number, string> {
    const colors: Record<number, string> = {}
    
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
  private generateDarkColors(rgb: { r: number; g: number; b: number }): Record<number, string> {
    const colors: Record<number, string> = {}
    
    for (let i = 1; i <= 2; i++) {
      const factor = i / 10
      const r = Math.round(rgb.r * (1 - factor))
      const g = Math.round(rgb.g * (1 - factor))
      const b = Math.round(rgb.b * (1 - factor))
      colors[i] = this.rgbToHex(r, g, b)
    }
    
    return colors
  }
}

// 导出主题管理器实例
export const themeManager = new ThemeManager()

// 导出便捷方法
export const setTheme = (theme: ThemeConfig) => themeManager.setTheme(theme)
export const getTheme = () => themeManager.getTheme()
export const toggleDark = () => themeManager.toggleDark()
export const setPrimaryColor = (color: string) => themeManager.setPrimaryColor(color)
export const setSuccessColor = (color: string) => themeManager.setSuccessColor(color)
export const setWarningColor = (color: string) => themeManager.setWarningColor(color)
export const setDangerColor = (color: string) => themeManager.setDangerColor(color)
export const setInfoColor = (color: string) => themeManager.setInfoColor(color)
export const setCssVar = (name: string, value: string) => themeManager.setCssVar(name, value)
export const getCssVar = (name: string) => themeManager.getCssVar(name)

// 支持的语言列表
export const supportedLocales = [
  'zh-cn', 'en', 'ja', 'ko', 'es', 'fr', 'de', 'it', 'pt', 'ru',
  'tr', 'uk', 'vi', 'th', 'id', 'ms', 'nl', 'sv', 'no', 'da',
  'fi', 'pl', 'cs', 'hu', 'ro', 'sk', 'sl', 'hr', 'bg', 'et',
  'lv', 'lt', 'el', 'he', 'ar', 'fa', 'hi', 'bn', 'ta', 'te',
  'mr', 'gu', 'kn', 'ml', 'ne', 'pa', 'km', 'lo', 'my', 'ka',
  'hy', 'az', 'kk', 'ky', 'uz', 'tk', 'mn'
]

// 语言标签映射
const localeLabels = {
  'zh-cn': '简体中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'it': 'Italiano',
  'pt': 'Português',
  'ru': 'Русский',
  'tr': 'Türkçe',
  'uk': 'Українська',
  'vi': 'Tiếng Việt',
  'th': 'ไทย',
  'id': 'Bahasa Indonesia',
  'ms': 'Bahasa Melayu',
  'nl': 'Nederlands',
  'sv': 'Svenska',
  'no': 'Norsk',
  'da': 'Dansk',
  'fi': 'Suomi',
  'pl': 'Polski',
  'cs': 'Čeština',
  'hu': 'Magyar',
  'ro': 'Română',
  'sk': 'Slovenčina',
  'sl': 'Slovenščina',
  'hr': 'Hrvatski',
  'bg': 'Български',
  'et': 'Eesti',
  'lv': 'Latviešu',
  'lt': 'Lietuvių',
  'el': 'Ελληνικά',
  'he': 'עברית',
  'ar': 'العربية',
  'fa': 'فارسی',
  'hi': 'हिन्दी',
  'bn': 'বাংলা',
  'ta': 'தமிழ்',
  'te': 'తెలుగు',
  'mr': 'मराठी',
  'gu': 'ગુજરાતી',
  'kn': 'ಕನ್ನಡ',
  'ml': 'മലയാളം',
  'ne': 'नेपाली',
  'pa': 'ਪੰਜਾਬੀ',
  'km': 'ខ្មែរ',
  'lo': 'ລາວ',
  'my': 'မြန်မာ',
  'ka': 'ქართული',
  'hy': 'Հայերեն',
  'az': 'Azərbaycan',
  'kk': 'Қазақ',
  'ky': 'Кыргыз',
  'uz': 'Oʻzbek',
  'tk': 'Türkmen',
  'mn': 'Монгол'
}

export const getLocaleLabel = (locale: string) => {
  return localeLabels[locale] || locale
}

// 简化的语言切换（实际项目中需要配置 Element Plus 的语言）
export const getLocale = (locale: string) => {
  return { locale }
}
