import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import IconsPage from '@/pages/IconsPage.vue'
import ButtonPage from '@/pages/ButtonPage.vue'
import CardPage from '@/pages/CardPage.vue'
import TooltipPage from '@/pages/TooltipPage.vue'
import InputPage from '@/pages/InputPage.vue'
import SelectPage from '@/pages/selectPage.vue'
import CheckboxPage from '@/pages/CheckboxPage.vue'

const routes = [
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
    path: '/card',
    name: 'Card',
    component: CardPage,
    meta: {
      title: 'Card 卡片'
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
