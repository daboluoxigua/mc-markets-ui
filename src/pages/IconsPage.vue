<template>
  <div class="icons-page">
    <h2>字体图标</h2>
    <!-- 直接使用packages里的Icon组件展示 -->
    <div class="icon-demo">
      <div class="icon-section">
        <h3>基础图标</h3>
        <div class="icon-grid">
          <div class="icon-item" v-for="iconName in basicIcons" :key="iconName">
            <Icon :name="iconName" :size="24" />
            <span>{{ iconName }}</span>
          </div>
        </div>
      </div>
      
      <div class="icon-section">
        <h3>动画图标</h3>
        <div class="icon-grid">
          <div class="icon-item">
            <Icon name="refresh-cw" :size="24" :spin="true" />
            <span>旋转</span>
          </div>
          <div class="icon-item">
            <Icon name="heart-handshake" :size="24" :pulse="true" />
            <span>脉冲</span>
          </div>
          <div class="icon-item">
            <Icon name="arrow-right-left" :size="24" :rotate="45" />
            <span>旋转45度</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@mc-markets/ui'

const basicIcons = [
  'home-filled',
  'user-round', 
  'search',
  'star-filled',
  'circle-check',
  'alert-circle',
  'bell',
  'calendar',
  'flag',
  'message-circle'
]
</script>

<style scoped>
.icons-page {
  padding: 20px;
}

.icon-demo {
  margin-top: 20px;
}

.icon-section {
  margin-bottom: 30px;
}

.icon-section h3 {
  margin-bottom: 15px;
  color: var(--el-text-color-primary);
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  background: var(--el-bg-color);
  transition: all 0.3s ease;
}

.icon-item:hover {
  border-color: var(--el-color-primary);
  background: var(--el-color-primary-light-9);
}

.icon-item span {
  margin-top: 8px;
  font-size: 12px;
  color: var(--el-text-color-secondary);
  text-align: center;
}
</style>
