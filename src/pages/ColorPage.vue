<template>
  <div class="color-showcase">
    <h1 class="title">MC Markets 颜色系统</h1>
    
    <!-- 背景色 -->
    <section class="color-section">
      <h2 class="section-title">背景色 (Background Colors)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in backgroundColors" :key="index" class="color-item" @click="copyToClipboard(color.cssVar)">
          <div class="color-swatch" :style="{ backgroundColor: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.cssVar }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 文本色 -->
    <section class="color-section">
      <h2 class="section-title">文本色 (Text Colors)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in textColors" :key="index" class="color-item" @click="copyToClipboard(color.cssVar)">
          <div class="color-swatch" :style="{ backgroundColor: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.cssVar }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 边框色 -->
    <section class="color-section">
      <h2 class="section-title">边框色 (Border Colors)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in borderColors" :key="index" class="color-item" @click="copyToClipboard(color.cssVar)">
          <div class="color-swatch" :style="{ backgroundColor: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.cssVar }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 按钮色 -->
    <section class="color-section">
      <h2 class="section-title">按钮色 (Button Colors)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in buttonColors" :key="index" class="color-item" @click="copyToClipboard(color.cssVar)">
          <div class="color-swatch" :style="{ backgroundColor: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.cssVar }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 图标色 -->
    <section class="color-section">
      <h2 class="section-title">图标色 (Icon Colors)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in iconColors" :key="index" class="color-item" @click="copyToClipboard(color.cssVar)">
          <div class="color-swatch" :style="{ backgroundColor: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.cssVar }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 复制功能
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    // 显示成功提示
    showCopySuccess(text)
  } catch (err) {
    console.error('复制失败:', err)
    // 降级方案：使用传统方法
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    showCopySuccess(text)
  }
}

// 显示复制成功提示
const showCopySuccess = (text) => {
  // 创建临时提示元素
  const toast = document.createElement('div')
  toast.textContent = `已复制: ${text}`
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--all-green-5);
    color: var(--all-gray-1);
    padding: 12px 16px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 9999;
    transition: opacity 0.3s ease;
  `
  
  document.body.appendChild(toast)
  
  // 2秒后移除提示
  setTimeout(() => {
    toast.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, 2000)
}

// 背景色数据
const backgroundColors = ref([
  { name: 'Primary Background', value: 'var(--bg-primary)', cssVar: '--bg-primary' },
  { name: 'Secondary Background', value: 'var(--bg-secondary)', cssVar: '--bg-secondary' },
  { name: 'Tertiary Background', value: 'var(--bg-tertiary)', cssVar: '--bg-tertiary' },
  { name: 'Tertiary Hover', value: 'var(--bg-tertiary-hover)', cssVar: '--bg-tertiary-hover' },
  { name: 'Quaternary Background', value: 'var(--bg-quaternary)', cssVar: '--bg-quaternary' },
  { name: 'White Background', value: 'var(--bg-white)', cssVar: '--bg-white' },
  { name: 'Black Background', value: 'var(--bg-black)', cssVar: '--bg-black' },
  { name: 'Brand Background', value: 'var(--bg-brand)', cssVar: '--bg-brand' },
  { name: 'Brand Hover', value: 'var(--bg-brand-hover)', cssVar: '--bg-brand-hover' },
  { name: 'Brand Secondary', value: 'var(--bg-brand-secondary)', cssVar: '--bg-brand-secondary' },
  { name: 'Error Primary', value: 'var(--bg-error-primary)', cssVar: '--bg-error-primary' },
  { name: 'Error Secondary', value: 'var(--bg-error-secondary)', cssVar: '--bg-error-secondary' },
  { name: 'Error Solid', value: 'var(--bg-error-solid)', cssVar: '--bg-error-solid' },
  { name: 'Success Primary', value: 'var(--bg-success-primary)', cssVar: '--bg-success-primary' },
  { name: 'Success Secondary', value: 'var(--bg-success-secondary)', cssVar: '--bg-success-secondary' },
  { name: 'Success Solid', value: 'var(--bg-success-solid)', cssVar: '--bg-success-solid' },
  { name: 'Warning Primary', value: 'var(--bg-warning-primary)', cssVar: '--bg-warning-primary' },
  { name: 'Warning Secondary', value: 'var(--bg-warning-secondary)', cssVar: '--bg-warning-secondary' },
  { name: 'Warning Solid', value: 'var(--bg-warning-solid)', cssVar: '--bg-warning-solid' }
])

// 文本色数据
const textColors = ref([
  { name: 'Primary Text', value: 'var(--text-primary)', cssVar: '--text-primary' },
  { name: 'Secondary Text', value: 'var(--text-secondary)', cssVar: '--text-secondary' },
  { name: 'Tertiary Text', value: 'var(--text-tertiary)', cssVar: '--text-tertiary' },
  { name: 'Tertiary Hover', value: 'var(--text-tertiary-hover)', cssVar: '--text-tertiary-hover' },
  { name: 'Quaternary Text', value: 'var(--text-quaternary)', cssVar: '--text-quaternary' },
  { name: 'White Text', value: 'var(--text-white)', cssVar: '--text-white' },
  { name: 'Brand Text', value: 'var(--text-brand)', cssVar: '--text-brand' },
  { name: 'Brand Hover', value: 'var(--text-brand-hover)', cssVar: '--text-brand-hover' },
  { name: 'Error Primary', value: 'var(--text-error-primary)', cssVar: '--text-error-primary' },
  { name: 'Success Primary', value: 'var(--text-success-primary)', cssVar: '--text-success-primary' },
  { name: 'Warning Primary', value: 'var(--text-warning-primary)', cssVar: '--text-warning-primary' }
])

// 边框色数据
const borderColors = ref([
  { name: 'Primary Border', value: 'var(--border-primary)', cssVar: '--border-primary' },
  { name: 'Secondary Border', value: 'var(--border-secondary)', cssVar: '--border-secondary' },
  { name: 'Tertiary Border', value: 'var(--border-tertiary)', cssVar: '--border-tertiary' },
  { name: 'White Border', value: 'var(--border-white)', cssVar: '--border-white' },
  { name: 'Brand Border', value: 'var(--border-brand)', cssVar: '--border-brand' },
  { name: 'Brand Hover', value: 'var(--border-brand-hover)', cssVar: '--border-brand-hover' },
  { name: 'Error Border', value: 'var(--border-error)', cssVar: '--border-error' }
])

// 按钮色数据
const buttonColors = ref([
  { name: 'Brand Button', value: 'var(--button-brand)', cssVar: '--button-brand' },
  { name: 'Brand Hover', value: 'var(--button-brand-hover)', cssVar: '--button-brand-hover' },
  { name: 'Primary Button', value: 'var(--button-primary)', cssVar: '--button-primary' },
  { name: 'Primary Hover', value: 'var(--button-primary---hover)', cssVar: '--button-primary---hover' },
  { name: 'White Button', value: 'var(--button-white)', cssVar: '--button-white' }
])

// 图标色数据
const iconColors = ref([
  { name: 'Primary Icon', value: 'var(--icon-primary)', cssVar: '--icon-primary' },
  { name: 'Secondary Icon', value: 'var(--icon-secondary)', cssVar: '--icon-secondary' },
  { name: 'Tertiary Icon', value: 'var(--icon-tertiary)', cssVar: '--icon-tertiary' },
  { name: 'Tertiary Hover', value: 'var(--icon-tertiary-hover)', cssVar: '--icon-tertiary-hover' },
  { name: 'White Icon', value: 'var(--icon-white)', cssVar: '--icon-white' },
  { name: 'Brand Icon', value: 'var(--icon-brand)', cssVar: '--icon-brand' }
])
</script>

<style scoped lang="scss">
.color-showcase {
  padding: 24px;
  background: var(--all-gray-10);
  color: var(--all-gray-1);
  min-height: 100vh;
}

.title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: var(--all-yellow-4);
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin: 40px 0 20px 0;
  color: var(--all-gray-1);
  border-bottom: 2px solid var(--all-gray-5);
  padding-bottom: 8px;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--all-gray-7);
  border-radius: 8px;
  padding: 12px;
  border: 1px solid var(--all-gray-6);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  position: relative;
}

.color-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.color-item:hover::after {
  content: '点击复制';
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--all-gray-1);
  color: var(--all-gray-10);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0.9;
}

.color-swatch {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  margin-bottom: 6px;
  border: 1px solid var(--all-gray-6);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.color-swatch.white {
  background-color: var(--all-base-white);
  border-color: var(--all-gray-5);
}

.color-swatch.black {
  background-color: var(--all-base-black);
  border-color: var(--all-gray-5);
}

.color-info {
  text-align: center;
}

.color-name {
  display: block;
  font-weight: 600;
  font-size: 14px;
  color: var(--all-gray-1);
  margin-bottom: 4px;
}

.color-value {
  display: block;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: var(--all-gray-4);
  background: var(--all-gray-9);
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid var(--all-gray-6);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .color-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
  }
  
  .color-swatch {
    width: 25px;
    height: 25px;
  }
  
  .color-item {
    padding: 12px;
  }
}
</style>