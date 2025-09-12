import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import IconsPage from '@/pages/IconsPage.vue'
import ButtonPage from '@/pages/ButtonPage.vue'

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
      title: '字体图标',
      icon: 'star-filled'
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
