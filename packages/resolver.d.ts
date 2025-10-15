/**
 * @mc-markets/ui Resolver for unplugin-vue-components
 */

/**
 * Resolver 配置选项
 */
export interface McMarketsUiResolverOptions {
  /**
   * 是否导入样式
   * @default true
   */
  importStyle?: boolean

  /**
   * 样式类型
   * @default 'css'
   */
  styleType?: 'css' | 'scss'

  /**
   * 是否回退到 Element Plus 组件
   * 如果为 true，未自定义的组件会从 @mc-markets/ui 导出的 Element Plus 组件中获取
   * @default false
   */
  fallbackToElementPlus?: boolean
}

/**
 * Component Resolver
 */
export interface ComponentResolver {
  type: 'component'
  resolve: (name: string) => ComponentResolveResult | undefined
}

/**
 * Component Resolve Result
 */
export interface ComponentResolveResult {
  name: string
  from: string
  sideEffects?: string
}

/**
 * @mc-markets/ui Resolver
 * 
 * @param options - 配置选项
 * @returns resolver 对象
 * 
 * @example
 * ```ts
 * // vite.config.ts
 * import { defineConfig } from 'vite'
 * import Components from 'unplugin-vue-components/vite'
 * import { McMarketsUiResolver } from '@mc-markets/ui/resolver'
 * 
 * export default defineConfig({
 *   plugins: [
 *     Components({
 *       resolvers: [
 *         McMarketsUiResolver({
 *           importStyle: true,
 *           styleType: 'css'
 *         })
 *       ]
 *     })
 *   ]
 * })
 * ```
 */
export function McMarketsUiResolver(options?: McMarketsUiResolverOptions): ComponentResolver

export default McMarketsUiResolver

