// 图标名称类型定义
export type IconName = 
  | 'withdraw'
  | 'deposit'
  | 'switch-camera'
  | 'receipt'
  | 'shield-check'
  | 'id-card'
  | 'user-round'
  | 'log-out'
  | 'arrow-right-left'
  | 'clipboard-minus'
  | 'chart-pie'
  | 'receipt-text'
  | 'brush-cleaning'
  | 'arrow-down-to-line'
  | 'circle-check-filled'
  | 'square-check'
  | 'square-check-empty'
  | 'photosolid'
  | 'customized'
  | 'customize-newspaper'
  | 'bell-ring'
  | 'eye'
  | 'bitcoin-convert'
  | 'ellipsis-vertical'
  | 'circle-help'
  | 'gift'
  | 'circle'
  | 'circle-dollar-sign'
  | 'chrome'
  | 'alarm'
  | 'refresh-cw'
  | 'search'
  | 'alert-circle'
  | 'graph-filled'
  | 'star-filled'
  | 'lucide-x'
  | 'plus'
  | 'map-pin'
  | 'loader-circle'
  | 'image'
  | 'lucide-image'
  | 'lucide-history'
  | 'key-round'
  | 'copy'
  | 'headset'
  | 'circle-x'
  | 'circle-user'
  | 'globe'
  | 'compass'
  | 'eye-off'
  | 'layout-grid'
  | 'heart-handshake'
  | 'credit-card'
  | 'earth'
  | 'linear-trash'
  | 'tabler_wallet_outline'
  | 'pig-money'
  | 'wallet-filled'
  | 'star-outline'
  | 'trending-up-down'
  | 'monitor'
  | 'graph-outline'
  | 'home-filled'
  | 'lucidecoins'
  | 'square-pen'
  | 'adjustments-horizontal'
  | 'home-outline'
  | 'user-cog'
  | 'minus'
  | 'circle-check'
  | 'customize-speakerphone'
  | 'book-open-text'
  | 'bitcoin-convert-filled'
  | 'calendar-clock'
  | 'check'
  | 'repeat-circle'
  | 'chevron-up'
  | 'customize-safe'
  | 'chevron-right'
  | 'bitcoin-convert-utline'
  | 'arrow-left-right'
  | 'customize'
  | 'lucide-check'
  | 'arrow-down-narrow-wide'
  | 'money-send'
  | 'chevron-left'
  | 'chevron-down'

// 图标翻转类型
export type IconFlip = 'horizontal' | 'vertical' | 'both'

// 图标大小类型
export type IconSize = string | number

// 图标颜色类型
export type IconColor = string

// 图标属性接口
export interface IconProps {
  name: IconName
  size?: IconSize
  color?: IconColor
  spin?: boolean
  pulse?: boolean
  rotate?: number
  flip?: IconFlip
  prefix?: string
}

// 图标事件接口
export interface IconEvents {
  click: [event: MouseEvent]
}

// 图标配置接口
export interface IconConfig {
  prefix: string
  fontFamily: string
  baseSize: string
  baseColor: string
}

// 默认图标配置
export const defaultIconConfig: IconConfig = {
  prefix: 'icon',
  fontFamily: 'iconfont',
  baseSize: '16px',
  baseColor: 'inherit'
}

// 图标信息接口
export interface IconInfo {
  name: string
  unicode: string
  unicodeDecimal: number
  fontClass: string
  description?: string
}

// 所有图标信息
export const iconList: IconInfo[] = [
  { name: 'withdraw', unicode: 'e7df', unicodeDecimal: 59359, fontClass: 'withdraw' },
  { name: 'deposit', unicode: 'e7e7', unicodeDecimal: 59367, fontClass: 'deposit' },
  { name: 'switch-camera', unicode: 'e7e9', unicodeDecimal: 59369, fontClass: 'switch-camera' },
  { name: 'receipt', unicode: 'e7e8', unicodeDecimal: 59368, fontClass: 'receipt' },
  { name: 'shield-check', unicode: 'e7e0', unicodeDecimal: 59360, fontClass: 'shield-check' },
  { name: 'id-card', unicode: 'e7e1', unicodeDecimal: 59361, fontClass: 'id-card' },
  { name: 'user-round', unicode: 'e7e2', unicodeDecimal: 59362, fontClass: 'user-round' },
  { name: 'log-out', unicode: 'e7e3', unicodeDecimal: 59363, fontClass: 'log-out' },
  { name: 'arrow-right-left', unicode: 'e7e4', unicodeDecimal: 59364, fontClass: 'arrow-right-left' },
  { name: 'clipboard-minus', unicode: 'e7e5', unicodeDecimal: 59365, fontClass: 'clipboard-minus' },
  { name: 'chart-pie', unicode: 'e7e6', unicodeDecimal: 59366, fontClass: 'chart-pie' },
  { name: 'receipt-text', unicode: 'e7de', unicodeDecimal: 59358, fontClass: 'receipt-text' },
  { name: 'brush-cleaning', unicode: 'e7dc', unicodeDecimal: 59356, fontClass: 'brush-cleaning' },
  { name: 'arrow-down-to-line', unicode: 'e7db', unicodeDecimal: 59355, fontClass: 'arrow-down-to-line' },
  { name: 'circle-check-filled', unicode: 'e7da', unicodeDecimal: 59354, fontClass: 'circle-check-filled' },
  { name: 'square-check', unicode: 'e7d9', unicodeDecimal: 59353, fontClass: 'square-check' },
  { name: 'square-check-empty', unicode: 'e7d8', unicodeDecimal: 59352, fontClass: 'square-check-empty' },
  { name: 'photosolid', unicode: 'e7d7', unicodeDecimal: 59351, fontClass: 'photosolid' },
  { name: 'customized', unicode: 'e7d6', unicodeDecimal: 59350, fontClass: 'customized' },
  { name: 'customize-newspaper', unicode: 'e7d5', unicodeDecimal: 59349, fontClass: 'customize-newspaper' },
  { name: 'bell-ring', unicode: 'e7d4', unicodeDecimal: 59348, fontClass: 'bell-ring' },
  { name: 'eye', unicode: 'e7d3', unicodeDecimal: 59347, fontClass: 'eye' },
  { name: 'bitcoin-convert', unicode: 'e7c7', unicodeDecimal: 59335, fontClass: 'bitcoin-convert' },
  { name: 'ellipsis-vertical', unicode: 'e7cd', unicodeDecimal: 59341, fontClass: 'ellipsis-vertical' },
  { name: 'circle-help', unicode: 'e7ce', unicodeDecimal: 59342, fontClass: 'circle-help' },
  { name: 'gift', unicode: 'e7cf', unicodeDecimal: 59343, fontClass: 'gift' },
  { name: 'circle', unicode: 'e7d0', unicodeDecimal: 59344, fontClass: 'circle' },
  { name: 'circle-dollar-sign', unicode: 'e7d1', unicodeDecimal: 59345, fontClass: 'circle-dollar-sign' },
  { name: 'chrome', unicode: 'e7d2', unicodeDecimal: 59346, fontClass: 'chrome' },
  { name: 'alarm', unicode: 'e7b3', unicodeDecimal: 59315, fontClass: 'alarm' },
  { name: 'refresh-cw', unicode: 'e7b4', unicodeDecimal: 59316, fontClass: 'refresh-cw' },
  { name: 'search', unicode: 'e7b5', unicodeDecimal: 59317, fontClass: 'search' },
  { name: 'alert-circle', unicode: 'e7b6', unicodeDecimal: 59318, fontClass: 'alert-circle' },
  { name: 'graph-filled', unicode: 'e7b7', unicodeDecimal: 59319, fontClass: 'graph-filled' },
  { name: 'star-filled', unicode: 'e7b8', unicodeDecimal: 59320, fontClass: 'star-filled' },
  { name: 'lucide-x', unicode: 'e7b9', unicodeDecimal: 59321, fontClass: 'lucide-x' },
  { name: 'plus', unicode: 'e7ba', unicodeDecimal: 59322, fontClass: 'plus' },
  { name: 'map-pin', unicode: 'e7bb', unicodeDecimal: 59323, fontClass: 'map-pin' },
  { name: 'loader-circle', unicode: 'e7bc', unicodeDecimal: 59324, fontClass: 'loader-circle' },
  { name: 'image', unicode: 'e7bd', unicodeDecimal: 59325, fontClass: 'image' },
  { name: 'lucide-image', unicode: 'e7be', unicodeDecimal: 59326, fontClass: 'lucide-image' },
  { name: 'lucide-history', unicode: 'e7bf', unicodeDecimal: 59327, fontClass: 'lucide-history' },
  { name: 'key-round', unicode: 'e7c0', unicodeDecimal: 59328, fontClass: 'key-round' },
  { name: 'copy', unicode: 'e7c1', unicodeDecimal: 59329, fontClass: 'copy' },
  { name: 'headset', unicode: 'e7c2', unicodeDecimal: 59330, fontClass: 'headset' },
  { name: 'circle-x', unicode: 'e7c3', unicodeDecimal: 59331, fontClass: 'circle-x' },
  { name: 'circle-user', unicode: 'e7c4', unicodeDecimal: 59332, fontClass: 'circle-user' },
  { name: 'globe', unicode: 'e7c5', unicodeDecimal: 59333, fontClass: 'globe' },
  { name: 'compass', unicode: 'e7c6', unicodeDecimal: 59334, fontClass: 'compass' },
  { name: 'eye-off', unicode: 'e7c8', unicodeDecimal: 59336, fontClass: 'eye-off' },
  { name: 'layout-grid', unicode: 'e7c9', unicodeDecimal: 59337, fontClass: 'layout-grid' },
  { name: 'heart-handshake', unicode: 'e7ca', unicodeDecimal: 59338, fontClass: 'heart-handshake' },
  { name: 'credit-card', unicode: 'e7cb', unicodeDecimal: 59339, fontClass: 'credit-card' },
  { name: 'earth', unicode: 'e7cc', unicodeDecimal: 59340, fontClass: 'earth' },
  { name: 'linear-trash', unicode: 'e7a3', unicodeDecimal: 59299, fontClass: 'linear-trash' },
  { name: 'tabler_wallet_outline', unicode: 'e7a4', unicodeDecimal: 59300, fontClass: 'tabler_wallet_outline' },
  { name: 'pig-money', unicode: 'e7a5', unicodeDecimal: 59301, fontClass: 'pig-money' },
  { name: 'wallet-filled', unicode: 'e7a6', unicodeDecimal: 59302, fontClass: 'wallet-filled' },
  { name: 'star-outline', unicode: 'e7a7', unicodeDecimal: 59303, fontClass: 'star-outline' },
  { name: 'trending-up-down', unicode: 'e7a8', unicodeDecimal: 59304, fontClass: 'trending-up-down' },
  { name: 'monitor', unicode: 'e7a9', unicodeDecimal: 59305, fontClass: 'monitor' },
  { name: 'graph-outline', unicode: 'e7aa', unicodeDecimal: 59306, fontClass: 'graph-outline' },
  { name: 'home-filled', unicode: 'e7ab', unicodeDecimal: 59307, fontClass: 'home-filled' },
  { name: 'lucidecoins', unicode: 'e7ac', unicodeDecimal: 59308, fontClass: 'lucidecoins' },
  { name: 'square-pen', unicode: 'e7ad', unicodeDecimal: 59309, fontClass: 'square-pen' },
  { name: 'adjustments-horizontal', unicode: 'e7ae', unicodeDecimal: 59310, fontClass: 'adjustments-horizontal' },
  { name: 'home-outline', unicode: 'e7af', unicodeDecimal: 59311, fontClass: 'home-outline' },
  { name: 'user-cog', unicode: 'e7b0', unicodeDecimal: 59312, fontClass: 'user-cog' },
  { name: 'minus', unicode: 'e7b1', unicodeDecimal: 59313, fontClass: 'minus' },
  { name: 'circle-check', unicode: 'e7b2', unicodeDecimal: 59314, fontClass: 'circle-check' },
  { name: 'customize-speakerphone', unicode: 'e7a2', unicodeDecimal: 59298, fontClass: 'customize-speakerphone' },
  { name: 'book-open-text', unicode: 'e797', unicodeDecimal: 59287, fontClass: 'book-open-text' },
  { name: 'bitcoin-convert-filled', unicode: 'e798', unicodeDecimal: 59288, fontClass: 'bitcoin-convert-filled' },
  { name: 'calendar-clock', unicode: 'e799', unicodeDecimal: 59289, fontClass: 'calendar-clock' },
  { name: 'check', unicode: 'e79a', unicodeDecimal: 59290, fontClass: 'check' },
  { name: 'repeat-circle', unicode: 'e79b', unicodeDecimal: 59291, fontClass: 'repeat-circle' },
  { name: 'chevron-up', unicode: 'e79c', unicodeDecimal: 59292, fontClass: 'chevron-up' },
  { name: 'customize-safe', unicode: 'e790', unicodeDecimal: 59280, fontClass: 'customize-safe' },
  { name: 'chevron-right', unicode: 'e79d', unicodeDecimal: 59293, fontClass: 'chevron-right' },
  { name: 'bitcoin-convert-utline', unicode: 'e79e', unicodeDecimal: 59294, fontClass: 'bitcoin-convert-utline' },
  { name: 'arrow-left-right', unicode: 'e7a0', unicodeDecimal: 59296, fontClass: 'arrow-left-right' },
  { name: 'customize', unicode: 'e7a1', unicodeDecimal: 59297, fontClass: 'customize' },
  { name: 'lucide-check', unicode: 'e794', unicodeDecimal: 59284, fontClass: 'lucide-check' },
  { name: 'arrow-down-narrow-wide', unicode: 'e793', unicodeDecimal: 59283, fontClass: 'arrow-down-narrow-wide' },
  { name: 'money-send', unicode: 'e791', unicodeDecimal: 59281, fontClass: 'money-send' },
  { name: 'chevron-left', unicode: 'e792', unicodeDecimal: 59282, fontClass: 'chevron-left' },
  { name: 'chevron-down', unicode: 'e796', unicodeDecimal: 59286, fontClass: 'chevron-down' }
]

// 根据名称获取图标信息
export function getIconInfo(name: IconName): IconInfo | undefined {
  return iconList.find(icon => icon.name === name)
}

// 根据Unicode获取图标信息
export function getIconByUnicode(unicode: string): IconInfo | undefined {
  return iconList.find(icon => icon.unicode === unicode)
}

// 搜索图标
export function searchIcons(keyword: string): IconInfo[] {
  const lowerKeyword = keyword.toLowerCase()
  return iconList.filter(icon => 
    icon.name.toLowerCase().includes(lowerKeyword) ||
    icon.fontClass.toLowerCase().includes(lowerKeyword)
  )
}
