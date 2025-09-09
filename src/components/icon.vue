<template>
  <div class="icon-demo">
    <!-- 基础使用 -->
    <section class="demo-section">
      <h2>基础使用</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <Icon name="home-filled" />
          <span>home-filled</span>
        </div>
        <div class="demo-item">
          <Icon name="user-round" />
          <span>user-round</span>
        </div>
        <div class="demo-item">
          <Icon name="search" />
          <span>search</span>
        </div>
        <div class="demo-item">
          <Icon name="star-filled" />
          <span>star-filled</span>
        </div>
      </div>
    </section>

    <!-- 不同大小 -->
    <section class="demo-section">
      <h2>不同大小</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <Icon name="home-filled" :size="16" />
          <span>16px</span>
        </div>
        <div class="demo-item">
          <Icon name="home-filled" :size="24" />
          <span>24px</span>
        </div>
        <div class="demo-item">
          <Icon name="home-filled" :size="32" />
          <span>32px</span>
        </div>
        <div class="demo-item">
          <Icon name="home-filled" :size="48" />
          <span>48px</span>
        </div>
        <div class="demo-item">
          <Icon name="home-filled" size="2rem" />
          <span>2rem</span>
        </div>
      </div>
    </section>

    <!-- 不同颜色 -->
    <section class="demo-section">
      <h2>不同颜色</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <Icon name="star-filled" color="#ff6b6b" />
          <span>红色</span>
        </div>
        <div class="demo-item">
          <Icon name="star-filled" color="#4ecdc4" />
          <span>青色</span>
        </div>
        <div class="demo-item">
          <Icon name="star-filled" color="#45b7d1" />
          <span>蓝色</span>
        </div>
        <div class="demo-item">
          <Icon name="star-filled" color="#96ceb4" />
          <span>绿色</span>
        </div>
        <div class="demo-item">
          <Icon name="star-filled" color="#feca57" />
          <span>黄色</span>
        </div>
      </div>
    </section>

    <!-- 动画效果 -->
    <section class="demo-section">
      <h2>动画效果</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <Icon name="refresh-cw" :spin="true" />
          <span>旋转</span>
        </div>
        <div class="demo-item">
          <Icon name="heart-handshake" :pulse="true" />
          <span>脉冲</span>
        </div>
        <div class="demo-item">
          <Icon name="arrow-right-left" :rotate="45" />
          <span>旋转45度</span>
        </div>
        <div class="demo-item">
          <Icon name="arrow-right-left" :rotate="90" />
          <span>旋转90度</span>
        </div>
      </div>
    </section>

    <!-- 翻转效果 -->
    <section class="demo-section">
      <h2>翻转效果</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <Icon name="arrow-right-left" />
          <span>原始</span>
        </div>
        <div class="demo-item">
          <Icon name="arrow-right-left" flip="horizontal" />
          <span>水平翻转</span>
        </div>
        <div class="demo-item">
          <Icon name="arrow-right-left" flip="vertical" />
          <span>垂直翻转</span>
        </div>
        <div class="demo-item">
          <Icon name="arrow-right-left" flip="both" />
          <span>双向翻转</span>
        </div>
      </div>
    </section>

    <!-- 组合效果 -->
    <section class="demo-section">
      <h2>组合效果</h2>
      <div class="demo-grid">
        <div class="demo-item">
          <Icon name="refresh-cw" :spin="true" color="#ff6b6b" :size="24" />
          <span>旋转+颜色+大小</span>
        </div>
        <div class="demo-item">
          <Icon name="heart-handshake" :pulse="true" color="#4ecdc4" :size="24" />
          <span>脉冲+颜色+大小</span>
        </div>
        <div class="demo-item">
          <Icon name="arrow-right-left" :rotate="45" flip="horizontal" color="#45b7d1" :size="24" />
          <span>旋转+翻转+颜色+大小</span>
        </div>
      </div>
    </section>

    <!-- 点击事件 -->
    <section class="demo-section">
      <h2>点击事件</h2>
      <div class="demo-grid">
        <div class="demo-item clickable" @click="handleIconClick('home-filled')">
          <Icon name="home-filled" :size="24" />
          <span>点击我</span>
        </div>
        <div class="demo-item clickable" @click="handleIconClick('star-filled')">
          <Icon name="star-filled" :size="24" />
          <span>点击我</span>
        </div>
        <div class="demo-item clickable" @click="handleIconClick('heart-handshake')">
          <Icon name="heart-handshake" :size="24" />
          <span>点击我</span>
        </div>
      </div>
      <p v-if="clickedIcon" class="click-result">
        你点击了图标: {{ clickedIcon }}
      </p>
    </section>

    <!-- 图标搜索和展示 -->
    <section class="demo-section">
      <h2>图标库 ({{ iconList.length }} 个)</h2>
      <div class="search-container">
        <input 
          v-model="searchKeyword" 
          type="text" 
          placeholder="搜索图标名称..."
          class="search-input"
        />
      </div>
      <div class="all-icons-grid">
        <div 
          v-for="icon in filteredIcons" 
          :key="icon.name"
          class="icon-item"
          :class="{ active: selectedIcon === icon.name }"
          @click="selectIcon(icon.name as IconName)"
        >
          <Icon :name="icon.name" :size="24" />
          <span class="icon-name">{{ icon.name }}</span>
          <span class="icon-class" @click.stop="copyIconClass(`icon-${icon.fontClass}`)">
            icon-{{ icon.fontClass }}
          </span>
        </div>
      </div>
    </section>

    <!-- 复制成功提示 -->
    <div v-if="copyMessage" class="copy-message">
      {{ copyMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@mc-markets/ui'
import { iconList, searchIcons, type IconName } from '../../packages/components/Icon/types'

// 响应式数据
const clickedIcon = ref<string>('')
const searchKeyword = ref('')
const selectedIcon = ref<IconName>('home-filled')
const copyMessage = ref<string>('')

// 计算属性
const filteredIcons = computed(() => {
  if (!searchKeyword.value) {
    return iconList
  }
  return searchIcons(searchKeyword.value)
})

// 方法
const handleIconClick = (iconName: string) => {
  clickedIcon.value = iconName
  setTimeout(() => {
    clickedIcon.value = ''
  }, 2000)
}

const selectIcon = (iconName: IconName) => {
  selectedIcon.value = iconName
}

const copyIconClass = async (className: string) => {
  try {
    await navigator.clipboard.writeText(className)
    copyMessage.value = `已复制: ${className}`
    setTimeout(() => {
      copyMessage.value = ''
    }, 2000)
  } catch (err) {
    // 降级方案
    const textArea = document.createElement('textarea')
    textArea.value = className
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    
    copyMessage.value = `已复制: ${className}`
    setTimeout(() => {
      copyMessage.value = ''
    }, 2000)
  }
}
</script>

<style scoped>
.icon-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 40px;
}

h2 {
  color: #555;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

.demo-section {
  margin-bottom: 40px;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafafa;
  transition: all 0.3s ease;
}

.demo-item:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.demo-item span {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  text-align: center;
}

.clickable {
  cursor: pointer;
  background: #e3f2fd !important;
}

.clickable:hover {
  background: #bbdefb !important;
}

.click-result {
  text-align: center;
  color: #4caf50;
  font-weight: bold;
  margin-top: 10px;
}

.search-container {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 15px;
}

.all-icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  background: #fafafa;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.icon-item:hover {
  background: #f0f0f0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.icon-item.active {
  background: #e3f2fd;
  border-color: #2196f3;
}

.icon-name {
  margin-top: 8px;
  font-size: 12px;
  color: #333;
  text-align: center;
  word-break: break-all;
}

.icon-class {
  margin-top: 4px;
  font-size: 10px;
  color: #666;
  font-family: monospace;
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.icon-class:hover {
  background: #e0e0e0;
  color: #2196f3;
}

.copy-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 15px;
  }
  
  .all-icons-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
  
  .demo-item {
    padding: 10px;
  }
  
  .icon-item {
    padding: 10px;
  }
}
</style>
