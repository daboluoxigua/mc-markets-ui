/**
 * @mc-markets/ui - 自定义组件库
 * 
 * 提供自定义组件和工具函数
 * 
 * @version 1.0.37
 */

import { App } from 'vue'
import TDDialog from './components/Dialog/index.vue'
import { Icon } from './components/Icon'
import Tab from './components/Tab/Tab.vue'
import TabPane from './components/Tab/TabPane.vue'
import { Alert } from './components/Alert'
import { Notification } from './components/Notification'
import { DatePicker } from './components/DatePicker'
import { Pagination } from './components/Pagination'
import { Banner } from './components/Banner'
import { Empty } from './components/Empty'
import { Tooltips } from './components/Tooltips'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { Select, SelectOption } from './components/Select'
import { Table, TableColumn } from './components/Table'
import { Form, FormItem } from './components/Form'
import { Card } from './components/Card'
import { Badge } from './components/Badge'
import { Progress } from './components/Progress'
import { Loading } from './components/Loading'
import { Message } from './components/Message'
import { MessageBox } from './components/MessageBox'
import { Drawer } from './components/Drawer'

export { 
  TDDialog, Icon, Tab, TabPane, Alert, Notification, DatePicker, Pagination, Banner, Empty, Tooltips,
  Button, Input, Select, SelectOption, Table, TableColumn, Form, FormItem, Card, Badge, 
  Progress, Loading, Message, MessageBox, Drawer
}

// 样式相关
export * from './styles/theme-config'
export { default as variables } from './styles/variables.scss?inline'
export { default as styles } from './styles/index.scss?inline'


// ==================== 版本信息 ====================
const version = '1.0.37'
const author = 'chenyu'
const description = '自定义组件库，提供自定义组件和工具函数'

// ==================== 组件注册配置 ====================
const components = {
  TDDialog,
  Icon,
  Tab,
  TabPane,
  Alert,
  Notification,
  DatePicker,
  Pagination,
  Banner,
  Empty,
  Tooltips,
  Button,
  Input,
  Select,
  SelectOption,
  Table,
  TableColumn,
  Form,
  FormItem,
  Card,
  Badge,
  Progress,
  Loading,
  Message,
  MessageBox,
  Drawer
}

// ==================== 安装函数 ====================
const install = (app: App): void => {
  // 注册自定义组件
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
  
  // 注册全局属性
  app.config.globalProperties.$mcMarketsUI = {
    version,
    author,
    description
  }
}

// ==================== 工具函数 ====================

// ==================== 默认导出类型定义 ====================
interface McMarketsUI {
  version: string
  author: string
  description: string
  install: (app: App) => void
}

// ==================== 默认导出 ====================
const mcMarketsUI: McMarketsUI = {
  version,
  author,
  description,
  install
}

export default mcMarketsUI