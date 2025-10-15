/**
 * @mc-markets/ui Resolver for unplugin-vue-components (CommonJS)
 * 
 * 使用方式：
 * const { McMarketsUiResolver } = require('@mc-markets/ui/resolver')
 * const Components = require('unplugin-vue-components/vite')
 * 
 * Components({
 *   resolvers: [McMarketsUiResolver()]
 * })
 */

/**
 * 组件库名称
 */
const LIB_NAME = '@mc-markets/ui'

/**
 * 组件前缀
 */
const PREFIX = 'M'

/**
 * 自定义组件列表
 * 这些组件有自定义实现，应该从 @mc-markets/ui 导入
 */
const CUSTOM_COMPONENTS = [
  'Icon',
  'Button',
  'Input',
  'Form',
  'FormItem',
  'Tooltip',
  'Select',
  'Option',
  'OptionGroup',
  'Pagination',
  'Radio',
  'RadioGroup',
  'RadioButton',
  'Switch',
  'Tag',
  'Alert',
  'Dialog',
  'Notification',
  'Message',
  'NotifiMessage',
  'DatePicker',
  'Empty',
  'Table',
  'TableColumn',
  'Banner',
  'Tabs',
  'TabPane',
  'TabCard',
  'TabCardItem',
  'Breadcrumb',
]

/**
 * 转换组件名称
 * MButton -> Button
 * MFormItem -> FormItem
 */
function transformComponentName(name) {
  if (!name.startsWith(PREFIX)) {
    return null
  }
  return name.slice(PREFIX.length)
}

/**
 * @mc-markets/ui Resolver
 * 
 * @param {Object} options - 配置选项
 * @param {boolean} options.importStyle - 是否导入样式，默认为 true
 * @param {string} options.styleType - 样式类型: 'css' | 'scss'，默认为 'css'
 * @param {boolean} options.fallbackToElementPlus - 是否回退到 Element Plus，默认为 false
 * @returns {Object} resolver 对象
 */
function McMarketsUiResolver(options) {
  options = options || {}
  const importStyle = options.importStyle !== undefined ? options.importStyle : true
  const styleType = options.styleType || 'css'
  const fallbackToElementPlus = options.fallbackToElementPlus || false

  return {
    type: 'component',
    resolve: function(name) {
      // 只处理以 M 开头的组件
      const componentName = transformComponentName(name)
      if (!componentName) {
        return
      }

      // 检查是否是自定义组件
      const isCustomComponent = CUSTOM_COMPONENTS.includes(componentName)

      if (isCustomComponent) {
        // 自定义组件，从 @mc-markets/ui 导入
        const result = {
          name: name,
          from: LIB_NAME,
        }

        // 导入样式
        if (importStyle) {
          if (styleType === 'scss') {
            result.sideEffects = LIB_NAME + '/styles/index.scss'
          } else {
            result.sideEffects = LIB_NAME + '/dist/style.css'
          }
        }

        return result
      } else if (fallbackToElementPlus) {
        // 非自定义组件，如果启用了回退，则从转换后的 Element Plus 组件导入
        return {
          name: name,
          from: LIB_NAME,
        }
      }

      // 不处理
      return
    },
  }
}

/**
 * 导出
 */
module.exports = {
  McMarketsUiResolver: McMarketsUiResolver,
}

module.exports.default = McMarketsUiResolver

