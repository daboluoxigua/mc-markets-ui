import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import IconsPage from '@/pages/IconsPage.vue'
import ButtonPage from '@/pages/ButtonPage.vue'
import CardPage from '@/pages/CardPage.vue'
import TooltipPage from '@/pages/TooltipPage.vue'
import InputPage from '@/pages/InputPage.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
