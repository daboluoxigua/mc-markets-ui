import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 导入页面组件
import ComponentsPage from '@/pages/ComponentsPage.vue'
import IconsPage from '@/pages/IconsPage.vue'
import TabsPage from '@/pages/TabsPage.vue'
import AlertPage from '@/pages/AlertPage.vue'
import NotificationPage from '@/pages/NotificationPage.vue'
import DatePickerPage from '@/pages/DatePickerPage.vue'
import PaginationPage from '@/pages/PaginationPage.vue'
import BannerPage from '@/pages/BannerPage.vue'
import EmptyPage from '@/pages/EmptyPage.vue'
import TooltipsPage from '@/pages/TooltipsPage.vue'
import ButtonPage from '@/pages/ButtonPage.vue'
import InputPage from '@/pages/InputPage.vue'
import SelectPage from '@/pages/SelectPage.vue'
import TablePage from '@/pages/TablePage.vue'
import FormPage from '@/pages/FormPage.vue'
import CardPage from '@/pages/CardPage.vue'
import BadgePage from '@/pages/BadgePage.vue'
import ProgressPage from '@/pages/ProgressPage.vue'
import ColorsPage from '@/pages/ColorsPage.vue'
import ButtonsPage from '@/pages/ButtonsPage.vue'
import TagsPage from '@/pages/TagsPage.vue'
import FormsPage from '@/pages/FormsPage.vue'
import TablesPage from '@/pages/TablesPage.vue'
import ThemePage from '@/pages/ThemePage.vue'
import I18nPage from '@/pages/I18nPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/components'
  },
  {
    path: '/components',
    name: 'Components',
    component: ComponentsPage,
    meta: {
      title: '组件展示',
      icon: 'Grid'
    }
  },
  {
    path: '/icons',
    name: 'Icons',
    component: IconsPage,
    meta: {
      title: '字体图标',
      icon: 'star-filled'
    }
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: TabsPage,
    meta: {
      title: 'Tabs',
      icon: 'layout-grid'
    }
  },
  {
    path: '/alert',
    name: 'Alert',
    component: AlertPage,
    meta: {
      title: 'Alert',
      icon: 'alert-circle'
    }
  },
  {
    path: '/notification',
    name: 'Notification',
    component: NotificationPage,
    meta: {
      title: 'Notification',
      icon: 'bell'
    }
  },
  {
    path: '/datepicker',
    name: 'DatePicker',
    component: DatePickerPage,
    meta: {
      title: 'DatePicker',
      icon: 'calendar'
    }
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: PaginationPage,
    meta: {
      title: 'Pagination',
      icon: 'layout-grid'
    }
  },
  {
    path: '/banner',
    name: 'Banner',
    component: BannerPage,
    meta: {
      title: 'Banner',
      icon: 'flag'
    }
  },
  {
    path: '/empty',
    name: 'Empty',
    component: EmptyPage,
    meta: {
      title: 'Empty',
      icon: 'circle-help'
    }
  },
  {
    path: '/tooltips',
    name: 'Tooltips',
    component: TooltipsPage,
    meta: {
      title: 'Tooltips',
      icon: 'message-circle'
    }
  },
  {
    path: '/colors',
    name: 'Colors',
    component: ColorsPage,
    meta: {
      title: '颜色',
      icon: 'brush-cleaning'
    }
  },
  {
    path: '/button',
    name: 'Button',
    component: ButtonPage,
    meta: {
      title: 'Button 按钮',
      icon: 'square-check'
    }
  },
  {
    path: '/input',
    name: 'Input',
    component: InputPage,
    meta: {
      title: 'Input 输入框',
      icon: 'edit'
    }
  },
  {
    path: '/select',
    name: 'Select',
    component: SelectPage,
    meta: {
      title: 'Select 选择器',
      icon: 'chevron-down'
    }
  },
  {
    path: '/table',
    name: 'Table',
    component: TablePage,
    meta: {
      title: 'Table 表格',
      icon: 'layout-grid'
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: FormPage,
    meta: {
      title: 'Form 表单',
      icon: 'square-pen'
    }
  },
  {
    path: '/card',
    name: 'Card',
    component: CardPage,
    meta: {
      title: 'Card 卡片',
      icon: 'credit-card'
    }
  },
  {
    path: '/badge',
    name: 'Badge',
    component: BadgePage,
    meta: {
      title: 'Badge 徽章',
      icon: 'circle-check'
    }
  },
  {
    path: '/progress',
    name: 'Progress',
    component: ProgressPage,
    meta: {
      title: 'Progress 进度条',
      icon: 'trending-up'
    }
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: ButtonsPage,
    meta: {
      title: '按钮',
      icon: 'square-check'
    }
  },
  {
    path: '/tags',
    name: 'Tags',
    component: TagsPage,
    meta: {
      title: 'Tag 标签',
      icon: 'square-check'
    }
  },
  {
    path: '/forms',
    name: 'Forms',
    component: FormsPage,
    meta: {
      title: '表单组件',
      icon: 'square-pen'
    }
  },
  {
    path: '/tables',
    name: 'Tables',
    component: TablesPage,
    meta: {
      title: '表格组件',
      icon: 'layout-grid'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
