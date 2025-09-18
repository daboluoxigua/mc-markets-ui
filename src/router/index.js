import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import IconsPage from '@/pages/IconsPage.vue'
import ButtonPage from '@/pages/ButtonPage.vue'
import TooltipPage from '@/pages/TooltipPage.vue'
import PaginationPage from '@/pages/PaginationPage.vue'
import InputPage from '@/pages/InputPage.vue'
import SelectPage from '@/pages/selectPage.vue'
import CheckboxPage from '@/pages/CheckboxPage.vue'
import RadioPage from '@/pages/RadioPage.vue'
import SwitchPage from '@/pages/SwitchPage.vue'
import TagPage from '@/pages/TagPage.vue'
import AlertPage from '@/pages/AlertPage.vue'
import DialogPage from '@/pages/DialogPage.vue'
import FormPage from '@/pages/FormPage.vue'
import TablePage from '@/pages/TablePage.vue'
import MessagePage from '@/pages/MessagePage.vue'
import NotificationPage from '@/pages/NotificationPage.vue'
import NotifiMessagePage from '@/pages/NotifiMessagePage.vue'
import DatePickerPage from '@/pages/DatePickerPage.vue'
import EmptyPage from '@/pages/EmptyPage.vue'
import BannerPage from '@/pages/BannerPage.vue'
import ColorPage from '@/pages/ColorPage.vue'
import TabsPage from '@/pages/TabsPage.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
