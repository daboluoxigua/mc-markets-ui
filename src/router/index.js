import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import IconsPage from '@/pages/icons/index.vue'
import ButtonPage from '@/pages/button/index.vue'
import TooltipPage from '@/pages/tooltip/index.vue'
import PaginationPage from '@/pages/pagination/index.vue'
import InputPage from '@/pages/input/index.vue'
import SelectPage from '@/pages/select/index.vue'
import CheckboxPage from '@/pages/checkbox/index.vue'
import RadioPage from '@/pages/radio/index.vue'
import SwitchPage from '@/pages/switch/index.vue'
import TagPage from '@/pages/tag/index.vue'
import AlertPage from '@/pages/alert/index.vue'
import DialogPage from '@/pages/dialog/index.vue'
import FormPage from '@/pages/form/index.vue'
import TablePage from '@/pages/table/index.vue'
import MessagePage from '@/pages/message/index.vue'
import NotificationPage from '@/pages/notification/index.vue'
import NotifiMessagePage from '@/pages/notifiMessage/index.vue'
import DatePickerPage from '@/pages/datepicker/index.vue'
import EmptyPage from '@/pages/empty/index.vue'
import BannerPage from '@/pages/banner/index.vue'
import ColorPage from '@/pages/ColorPage.vue'
import TabsPage from '@/pages/tabs/index.vue'
import TabCardPage from '@/pages/tabCard/index.vue'
import BreadcrumbPage from '@/pages/breadcrumb/index.vue'
import PickerPage from '@/pages/picker/index.vue'

const routes = [
  {
    path: '/color',
    name: 'Color',
    component: ColorPage,
    meta: {
      title: '颜色'
    }
  },
  {
    path: '/',
    redirect: '/icons'
  },
  {
    path: '/icons',
    name: 'Icons',
    component: IconsPage,
    meta: {
      title: '字体图标'
    }
  },
  {
    path: '/button',
    name: 'Button',
    component: ButtonPage,
    meta: {
      title: 'Button 按钮'
    }
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: TooltipPage,
    meta: {
      title: 'Tooltip 文字提示'
    }
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: PaginationPage,
    meta: {
      title: 'Pagination 分页'
    }
  },
  {
    path: '/input',
    name: 'Input',
    component: InputPage,
    meta: {
      title: 'Input 输入框'
    }
  },
  {
    path: '/select',
    name: 'Select',
    component: SelectPage,
    meta: {
      title: 'Select 选择器'
    }
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: CheckboxPage,
    meta: {
      title: 'Checkbox 多选框'
    }
  },
  {
    path: '/radio',
    name: 'Radio',
    component: RadioPage,
    meta: {
      title: 'Radio 单选框'
    }
  },
  {
    path: '/switch',
    name: 'Switch',
    component: SwitchPage,
    meta: {
      title: 'Switch 开关'
    }
  },
  {
    path: '/tag',
    name: 'Tag',
    component: TagPage,
    meta: {
      title: 'Tag 标签'
    }
  },
  {
    path: '/alert',
    name: 'Alert',
    component: AlertPage,
    meta: {
      title: 'Alert 提示'
    }
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: DialogPage,
    meta: {
      title: 'Dialog 对话框'
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: FormPage,
    meta: {
      title: 'Form 表单'
    }
  },
  {
    path: '/table',
    name: 'Table',
    component: TablePage,
    meta: {
      title: 'Table 表格'
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: MessagePage,
    meta: {
      title: 'Message 消息提示'
    }
  },
  {
    path: '/notification',
    name: 'Notification',
    component: NotificationPage,
    meta: {
      title: 'Notification 通知'
    }
  },
  {
    path: '/notifi-message',
    name: 'NotifiMessage',
    component: NotifiMessagePage,
    meta: {
      title: 'NotifiMessage 通知消息'
    }
  },
  {
    path: '/datepicker',
    name: 'DatePicker',
    component: DatePickerPage,
    meta: {
      title: 'DatePicker 日期选择器'
    }
  },
  {
    path: '/empty',
    name: 'Empty',
    component: EmptyPage,
    meta: {
      title: 'Empty 空状态'
    }
  },
  {
    path: '/banner',
    name: 'Banner',
    component: BannerPage,
    meta: {
      title: 'Banner 横幅'
    }
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: TabsPage,
    meta: {
      title: 'Tabs 标签页'
    }
  },
  {
    path: '/tabcard',
    name: 'TabCard',
    component: TabCardPage,
    meta: {
      title: 'TabCard 标签卡片'
    }
  },
  {
    path: '/breadcrumb',
    name: 'Breadcrumb',
    component: BreadcrumbPage,
    meta: {
      title: 'Breadcrumb 面包屑'
    }
  },
  {
    path: '/picker',
    name: 'Picker',
    component: PickerPage,
    meta: {
      title: 'Picker 选择器'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
