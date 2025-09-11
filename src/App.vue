<template>
  <div id="app" class="demo-app">
    <!-- 头部导航 -->
    <el-header class="demo-header">
      <div class="header-content">
        <h1>@mc-markets/ui Demo</h1>
        <div class="header-actions">
          <!-- 主题选择器和黑暗模式开关已移除，默认使用黑暗模式 -->
        </div>
      </div>
    </el-header>

    <!-- 主要内容 -->
    <el-container class="demo-container">
      <el-aside width="250px" class="demo-sidebar">
        <el-menu
          :default-active="$route.path"
          @select="handleMenuSelect"
          class="demo-menu"
          router
        >
          <el-menu-item
            v-for="route in menuRoutes"
            :key="route.path"
            :index="route.path"
          >
            <el-icon v-if="route.meta?.icon === 'Grid'"><Grid /></el-icon>
            <Icon v-else :name="route.meta?.icon" :size="16" />
            <span class="menu-text">{{ route.meta?.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main class="demo-main">
        <div class="demo-content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@mc-markets/ui'

const router = useRouter()

// 获取菜单路由
const menuRoutes = computed(() => {
  return router.getRoutes().filter(route => route.meta?.title)
})

// 菜单选择处理
const handleMenuSelect = (path) => {
  router.push(path)
}
</script>

<style scoped>
.demo-app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.demo-header {
  background: var(--el-color-primary);
  color: white;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-content h1 {
  margin: 0;
  font-size: 24px;
}

.header-actions {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 20px;
}

.demo-container {
  flex: 1;
  height: calc(100vh - 60px);
}

.demo-sidebar {
  background: var(--el-bg-color-page);
  border-right: 1px solid var(--el-border-color);
}

.demo-menu {
  border: none;
  height: 100%;
}

.menu-text {
  margin-left: 5px;
  transition: color 0.3s ease;
}

/* 确保菜单项中的图标和文本对齐 */
.demo-menu .el-menu-item {
  display: flex;
  align-items: center;
}

/* 菜单项悬停时文本颜色变化 */
.demo-menu .el-menu-item:hover .menu-text {
  color: var(--el-color-primary);
}

/* 菜单项激活时文本颜色 */
.demo-menu .el-menu-item.is-active .menu-text {
  color: var(--el-color-primary);
  font-weight: 500;
}

.demo-main {
  padding: 20px;
  background: var(--el-bg-color);
}

.demo-content {
  max-width: 1200px;
  margin: 0 auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-container {
    flex-direction: column;
  }

  .demo-sidebar {
    width: 100% !important;
    height: auto;
  }

  .demo-menu {
    display: flex;
    overflow-x: auto;
  }

  .demo-menu .el-menu-item {
    white-space: nowrap;
  }

  .header-content {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .header-actions {
    width: 100%;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .header-actions {
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }

  .header-actions .el-switch {
    margin-left: 0 !important;
  }
}
</style>