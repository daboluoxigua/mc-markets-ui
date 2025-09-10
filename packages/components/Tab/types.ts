// Tab 组件相关类型定义
import type { TabPaneName } from 'element-plus'

// Tab 组件基础属性
export interface TabBaseProps {
  modelValue?: TabPaneName
  type?: 'card' | 'border-card'
  closable?: boolean
  addable?: boolean
  editable?: boolean
  tabPosition?: 'top' | 'right' | 'bottom' | 'left'
  stretch?: boolean
  beforeLeave?: (activeName: TabPaneName, oldActiveName: TabPaneName) => boolean | Promise<boolean>
}

// Tab 组件事件
export interface TabEvents {
  'update:modelValue': [value: TabPaneName]
  'tab-click': [tab: any]
  'tab-change': [name: TabPaneName]
  'tab-remove': [name: TabPaneName]
  'tab-add': [event: any]
}

// TabPane 组件属性
export interface TabPaneProps {
  label?: string
  name?: string
  disabled?: boolean
  closable?: boolean
  lazy?: boolean
}

// Tab 组件配置
export interface TabConfig {
  defaultActiveName?: TabPaneName
  type?: 'card' | 'border-card'
  position?: 'top' | 'right' | 'bottom' | 'left'
  stretch?: boolean
}

// 默认配置
export const defaultTabConfig: TabConfig = {
  defaultActiveName: '1',
  type: 'card',
  position: 'top',
  stretch: false
}
