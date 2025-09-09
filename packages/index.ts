/**
 * @mc-markets/ui - Element Plus 完整导出包
 * 
 * 提供 Element Plus 的完整导出，包括所有组件、指令、服务、样式、主题和国际化
 * 
 * @version 1.0.1
 * @author chenyu
 */

import type { App } from 'vue'
import * as ElementPlus from 'element-plus'
import ElementPlusLocaleZhCn from 'element-plus/dist/locale/zh-cn.mjs'
import ElementPlusLocaleEn from 'element-plus/dist/locale/en.mjs'
import ElementPlusLocaleZhTw from 'element-plus/dist/locale/zh-tw.mjs'
import ElementPlusLocaleJa from 'element-plus/dist/locale/ja.mjs'
import ElementPlusLocaleKo from 'element-plus/dist/locale/ko.mjs'
import ElementPlusLocaleEs from 'element-plus/dist/locale/es.mjs'
import ElementPlusLocaleFr from 'element-plus/dist/locale/fr.mjs'
import ElementPlusLocaleDe from 'element-plus/dist/locale/de.mjs'
import ElementPlusLocaleIt from 'element-plus/dist/locale/it.mjs'
import ElementPlusLocalePt from 'element-plus/dist/locale/pt.mjs'
import ElementPlusLocaleRu from 'element-plus/dist/locale/ru.mjs'
import ElementPlusLocaleTr from 'element-plus/dist/locale/tr.mjs'
import ElementPlusLocaleUk from 'element-plus/dist/locale/uk.mjs'
import ElementPlusLocaleVi from 'element-plus/dist/locale/vi.mjs'
import ElementPlusLocaleTh from 'element-plus/dist/locale/th.mjs'
import ElementPlusLocaleId from 'element-plus/dist/locale/id.mjs'
import ElementPlusLocaleMs from 'element-plus/dist/locale/ms.mjs'
import ElementPlusLocaleNl from 'element-plus/dist/locale/nl.mjs'
import ElementPlusLocaleSv from 'element-plus/dist/locale/sv.mjs'
import ElementPlusLocaleNo from 'element-plus/dist/locale/no.mjs'
import ElementPlusLocaleDa from 'element-plus/dist/locale/da.mjs'
import ElementPlusLocaleFi from 'element-plus/dist/locale/fi.mjs'
import ElementPlusLocalePl from 'element-plus/dist/locale/pl.mjs'
import ElementPlusLocaleCs from 'element-plus/dist/locale/cs.mjs'
import ElementPlusLocaleHu from 'element-plus/dist/locale/hu.mjs'
import ElementPlusLocaleRo from 'element-plus/dist/locale/ro.mjs'
import ElementPlusLocaleSk from 'element-plus/dist/locale/sk.mjs'
import ElementPlusLocaleSl from 'element-plus/dist/locale/sl.mjs'
import ElementPlusLocaleHr from 'element-plus/dist/locale/hr.mjs'
import ElementPlusLocaleBg from 'element-plus/dist/locale/bg.mjs'
import ElementPlusLocaleEt from 'element-plus/dist/locale/et.mjs'
import ElementPlusLocaleLv from 'element-plus/dist/locale/lv.mjs'
import ElementPlusLocaleLt from 'element-plus/dist/locale/lt.mjs'
import ElementPlusLocaleEl from 'element-plus/dist/locale/el.mjs'
import ElementPlusLocaleHe from 'element-plus/dist/locale/he.mjs'
import ElementPlusLocaleAr from 'element-plus/dist/locale/ar.mjs'
import ElementPlusLocaleFa from 'element-plus/dist/locale/fa.mjs'
import ElementPlusLocaleHi from 'element-plus/dist/locale/hi.mjs'
import ElementPlusLocaleBn from 'element-plus/dist/locale/bn.mjs'
import ElementPlusLocaleTa from 'element-plus/dist/locale/ta.mjs'
import ElementPlusLocaleTe from 'element-plus/dist/locale/te.mjs'
import ElementPlusLocalePa from 'element-plus/dist/locale/pa.mjs'
import ElementPlusLocaleKm from 'element-plus/dist/locale/km.mjs'
import ElementPlusLocaleLo from 'element-plus/dist/locale/lo.mjs'
import ElementPlusLocaleMy from 'element-plus/dist/locale/my.mjs'
import ElementPlusLocaleAz from 'element-plus/dist/locale/az.mjs'
import ElementPlusLocaleKk from 'element-plus/dist/locale/kk.mjs'
import ElementPlusLocaleKy from 'element-plus/dist/locale/ky.mjs'
import ElementPlusLocaleTk from 'element-plus/dist/locale/tk.mjs'
import ElementPlusLocaleMn from 'element-plus/dist/locale/mn.mjs'

// ==================== Element Plus 完整导出 ====================
// 导出所有 Element Plus 组件、指令、服务
export * from 'element-plus'

// 导出 Element Plus 默认实例
export { default as ElementPlus } from 'element-plus'

// ==================== 国际化支持 ====================
// 导出所有支持的语言包
export {
  ElementPlusLocaleZhCn,
  ElementPlusLocaleEn,
  ElementPlusLocaleZhTw,
  ElementPlusLocaleJa,
  ElementPlusLocaleKo,
  ElementPlusLocaleEs,
  ElementPlusLocaleFr,
  ElementPlusLocaleDe,
  ElementPlusLocaleIt,
  ElementPlusLocalePt,
  ElementPlusLocaleRu,
  ElementPlusLocaleTr,
  ElementPlusLocaleUk,
  ElementPlusLocaleVi,
  ElementPlusLocaleTh,
  ElementPlusLocaleId,
  ElementPlusLocaleMs,
  ElementPlusLocaleNl,
  ElementPlusLocaleSv,
  ElementPlusLocaleNo,
  ElementPlusLocaleDa,
  ElementPlusLocaleFi,
  ElementPlusLocalePl,
  ElementPlusLocaleCs,
  ElementPlusLocaleHu,
  ElementPlusLocaleRo,
  ElementPlusLocaleSk,
  ElementPlusLocaleSl,
  ElementPlusLocaleHr,
  ElementPlusLocaleBg,
  ElementPlusLocaleEt,
  ElementPlusLocaleLv,
  ElementPlusLocaleLt,
  ElementPlusLocaleEl,
  ElementPlusLocaleHe,
  ElementPlusLocaleAr,
  ElementPlusLocaleFa,
  ElementPlusLocaleHi,
  ElementPlusLocaleBn,
  ElementPlusLocaleTa,
  ElementPlusLocaleTe,
  ElementPlusLocalePa,
  ElementPlusLocaleKm,
  ElementPlusLocaleLo,
  ElementPlusLocaleMy,
  ElementPlusLocaleAz,
  ElementPlusLocaleKk,
  ElementPlusLocaleKy,
  ElementPlusLocaleTk,
  ElementPlusLocaleMn
}

// 语言包映射
export const locales = {
  'zh-cn': ElementPlusLocaleZhCn,
  'en': ElementPlusLocaleEn,
  'zh-tw': ElementPlusLocaleZhTw,
  'ja': ElementPlusLocaleJa,
  'ko': ElementPlusLocaleKo,
  'es': ElementPlusLocaleEs,
  'fr': ElementPlusLocaleFr,
  'de': ElementPlusLocaleDe,
  'it': ElementPlusLocaleIt,
  'pt': ElementPlusLocalePt,
  'ru': ElementPlusLocaleRu,
  'tr': ElementPlusLocaleTr,
  'uk': ElementPlusLocaleUk,
  'vi': ElementPlusLocaleVi,
  'th': ElementPlusLocaleTh,
  'id': ElementPlusLocaleId,
  'ms': ElementPlusLocaleMs,
  'nl': ElementPlusLocaleNl,
  'sv': ElementPlusLocaleSv,
  'no': ElementPlusLocaleNo,
  'da': ElementPlusLocaleDa,
  'fi': ElementPlusLocaleFi,
  'pl': ElementPlusLocalePl,
  'cs': ElementPlusLocaleCs,
  'hu': ElementPlusLocaleHu,
  'ro': ElementPlusLocaleRo,
  'sk': ElementPlusLocaleSk,
  'sl': ElementPlusLocaleSl,
  'hr': ElementPlusLocaleHr,
  'bg': ElementPlusLocaleBg,
  'et': ElementPlusLocaleEt,
  'lv': ElementPlusLocaleLv,
  'lt': ElementPlusLocaleLt,
  'el': ElementPlusLocaleEl,
  'he': ElementPlusLocaleHe,
  'ar': ElementPlusLocaleAr,
  'fa': ElementPlusLocaleFa,
  'hi': ElementPlusLocaleHi,
  'bn': ElementPlusLocaleBn,
  'ta': ElementPlusLocaleTa,
  'te': ElementPlusLocaleTe,
  'pa': ElementPlusLocalePa,
  'km': ElementPlusLocaleKm,
  'lo': ElementPlusLocaleLo,
  'my': ElementPlusLocaleMy,
  'az': ElementPlusLocaleAz,
  'kk': ElementPlusLocaleKk,
  'ky': ElementPlusLocaleKy,
  'tk': ElementPlusLocaleTk,
  'mn': ElementPlusLocaleMn
} as const

// 支持的语言列表
export const supportedLocales = Object.keys(locales) as Array<keyof typeof locales>

// ==================== 主题和样式支持 ====================
// 导出主题相关功能
export { useDark, useToggle } from '@vueuse/core'

// 导出主题配置工具
export * from './styles/theme-config'

// 主题配置接口
export interface ThemeConfig {
  /** 主题名称 */
  name?: string
  /** 是否暗色主题 */
  dark?: boolean
  /** 自定义CSS变量 */
  cssVars?: Record<string, string>
  /** 自定义类名 */
  customClass?: string
}

// 主题管理类
export class ThemeManager {
  private static instance: ThemeManager
  private currentTheme: ThemeConfig = { name: 'default', dark: false }
  
  static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager()
    }
    return ThemeManager.instance
  }
  
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
  
  /** 应用主题 */
  private applyTheme(): void {
    const root = document.documentElement
    if (this.currentTheme.dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    if (this.currentTheme.cssVars) {
      Object.entries(this.currentTheme.cssVars).forEach(([key, value]) => {
        root.style.setProperty(key, value)
      })
    }
    
    if (this.currentTheme.customClass) {
      root.classList.add(this.currentTheme.customClass)
    }
  }
}

// 导出主题管理器实例
export const themeManager = ThemeManager.getInstance()

// ==================== 版本信息 ====================
const version = '1.0.1'
const author = 'chenyu'
const description = 'Element Plus 完整导出包，提供所有组件、指令、服务、样式、主题和国际化'

// ==================== 安装函数 ====================
const install = (app: App, options?: {
  /** 默认语言 */
  locale?: keyof typeof locales
  /** 主题配置 */
  theme?: ThemeConfig
  /** 是否自动导入样式 */
  importStyle?: boolean
}): void => {
  // 注册 Element Plus
  app.use(ElementPlus, {
    locale: options?.locale ? locales[options.locale] : ElementPlusLocaleZhCn,
    size: 'default'
  })
  
  // 自动导入样式
  if (options?.importStyle !== false) {
    import('element-plus/dist/index.css')
  }
  
  // 应用主题
  if (options?.theme) {
    themeManager.setTheme(options.theme)
  }
  
  // 注册全局属性
  app.config.globalProperties.$mcMarketsUI = {
    version,
    author,
    description,
    themeManager,
    locales: supportedLocales
  }
  
  // 注册全局方法
  app.config.globalProperties.$theme = themeManager
  app.config.globalProperties.$locales = supportedLocales
}

// ==================== 工具函数 ====================
/** 获取语言包 */
export const getLocale = (locale: keyof typeof locales) => {
  return locales[locale] || ElementPlusLocaleZhCn
}

/** 切换语言 */
export const switchLocale = (locale: keyof typeof locales) => {
  return getLocale(locale)
}

/** 获取支持的语言列表 */
export const getSupportedLocales = () => {
  return supportedLocales
}

// ==================== 默认导出类型定义 ====================
interface McMarketsUI {
  version: string
  author: string
  description: string
  install: (app: App, options?: {
    locale?: keyof typeof locales
    theme?: ThemeConfig
    importStyle?: boolean
  }) => void
  themeManager: ThemeManager
  locales: typeof locales
  supportedLocales: typeof supportedLocales
  getLocale: typeof getLocale
  switchLocale: typeof switchLocale
  getSupportedLocales: typeof getSupportedLocales
}

// ==================== 默认导出 ====================
const mcMarketsUI: McMarketsUI = {
  version,
  author,
  description,
  install,
  themeManager,
  locales,
  supportedLocales,
  getLocale,
  switchLocale,
  getSupportedLocales
}

export default mcMarketsUI