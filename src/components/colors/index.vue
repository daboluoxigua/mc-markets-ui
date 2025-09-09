<template>
  <div class="color-showcase">
    <h1 class="title">MC Markets 颜色系统</h1>
    
    <!-- 基础色 -->
    <section class="color-section">
      <h2 class="section-title">基础色 (Basic Colors)</h2>
      <div class="color-grid">
        <div class="color-item">
          <div class="color-swatch white"></div>
          <div class="color-info">
            <span class="color-name">White</span>
            <span class="color-value">--all-base-white</span>
          </div>
        </div>
        <div class="color-item">
          <div class="color-swatch black"></div>
          <div class="color-info">
            <span class="color-name">Black</span>
            <span class="color-value">--all-base-black</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 灰色系 -->
    <section class="color-section">
      <h2 class="section-title">灰色系 (Grayscale)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in grayColors" :key="index" class="color-item">
          <div class="color-swatch" :style="{ backgroundColor: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.cssVar }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 品牌色 -->
    <section class="color-section">
      <h2 class="section-title">品牌色 (Brand Colors)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in brandColors" :key="index" class="color-item">
          <div class="color-swatch" :style="{ backgroundColor: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.cssVar }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 辅助色 -->
    <section class="color-section">
      <h2 class="section-title">辅助色 (Auxiliary Colors)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in auxiliaryColors" :key="index" class="color-item">
          <div class="color-swatch" :style="{ backgroundColor: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.cssVar }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 错误色 -->
    <section class="color-section">
      <h2 class="section-title">错误色 (Error Colors)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in errorColors" :key="index" class="color-item">
          <div class="color-swatch" :style="{ backgroundColor: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.cssVar }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 警告色 -->
    <section class="color-section">
      <h2 class="section-title">警告色 (Warning Colors)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in warningColors" :key="index" class="color-item">
          <div class="color-swatch" :style="{ backgroundColor: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.cssVar }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 成功色 -->
    <section class="color-section">
      <h2 class="section-title">成功色 (Success Colors)</h2>
      <div class="color-grid">
        <div v-for="(color, index) in successColors" :key="index" class="color-item">
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

// 灰色系颜色数据
const grayColors = ref([
  { name: 'Gray 1', value: 'var(--all-gray-1)', cssVar: '--all-gray-1' },
  { name: 'Gray 2', value: 'var(--all-gray-2)', cssVar: '--all-gray-2' },
  { name: 'Gray 3', value: 'var(--all-gray-3)', cssVar: '--all-gray-3' },
  { name: 'Gray 4', value: 'var(--all-gray-4)', cssVar: '--all-gray-4' },
  { name: 'Gray 5 (Default)', value: 'var(--all-gray-5)', cssVar: '--all-gray-5' },
  { name: 'Gray 6', value: 'var(--all-gray-6)', cssVar: '--all-gray-6' },
  { name: 'Gray 7', value: 'var(--all-gray-7)', cssVar: '--all-gray-7' },
  { name: 'Gray 8', value: 'var(--all-gray-8)', cssVar: '--all-gray-8' },
  { name: 'Gray 9', value: 'var(--all-gray-9)', cssVar: '--all-gray-9' },
  { name: 'Gray 10', value: 'var(--all-gray-10)', cssVar: '--all-gray-10' }
])

// 品牌色颜色数据 (使用 yellow 色系)
const brandColors = ref([
  { name: 'Brand 1', value: 'var(--all-yellow-1)', cssVar: '--all-yellow-1' },
  { name: 'Brand 2', value: 'var(--all-yellow-2)', cssVar: '--all-yellow-2' },
  { name: 'Brand 3', value: 'var(--all-yellow-3)', cssVar: '--all-yellow-3' },
  { name: 'Brand 4 (Default)', value: 'var(--all-yellow-4)', cssVar: '--all-yellow-4' },
  { name: 'Brand 5', value: 'var(--all-yellow-5)', cssVar: '--all-yellow-5' },
  { name: 'Brand 6', value: 'var(--all-yellow-6)', cssVar: '--all-yellow-6' },
  { name: 'Brand 7', value: 'var(--all-yellow-7)', cssVar: '--all-yellow-7' },
  { name: 'Brand 8', value: 'var(--all-yellow-8)', cssVar: '--all-yellow-8' },
  { name: 'Brand 9', value: 'var(--all-yellow-9)', cssVar: '--all-yellow-9' },
  { name: 'Brand 10', value: 'var(--all-yellow-10)', cssVar: '--all-yellow-10' }
])

// 辅助色颜色数据 (使用 forest 色系)
const auxiliaryColors = ref([
  { name: 'Auxiliary 1', value: 'var(--all-forest-1)', cssVar: '--all-forest-1' },
  { name: 'Auxiliary 2', value: 'var(--all-forest-2)', cssVar: '--all-forest-2' },
  { name: 'Auxiliary 3', value: 'var(--all-forest-3)', cssVar: '--all-forest-3' },
  { name: 'Auxiliary 4 (Default)', value: 'var(--all-forest-4)', cssVar: '--all-forest-4' },
  { name: 'Auxiliary 5', value: 'var(--all-forest-5)', cssVar: '--all-forest-5' },
  { name: 'Auxiliary 6', value: 'var(--all-forest-6)', cssVar: '--all-forest-6' },
  { name: 'Auxiliary 7', value: 'var(--all-forest-7)', cssVar: '--all-forest-7' },
  { name: 'Auxiliary 8', value: 'var(--all-forest-8)', cssVar: '--all-forest-8' },
  { name: 'Auxiliary 9', value: 'var(--all-forest-9)', cssVar: '--all-forest-9' },
  { name: 'Auxiliary 10', value: 'var(--all-forest-10)', cssVar: '--all-forest-10' }
])

// 错误色颜色数据
const errorColors = ref([
  { name: 'Error 1', value: 'var(--all-red-1)', cssVar: '--all-red-1' },
  { name: 'Error 2', value: 'var(--all-red-2)', cssVar: '--all-red-2' },
  { name: 'Error 3', value: 'var(--all-red-3)', cssVar: '--all-red-3' },
  { name: 'Error 4', value: 'var(--all-red-4)', cssVar: '--all-red-4' },
  { name: 'Error 5 (Default)', value: 'var(--all-red-5)', cssVar: '--all-red-5' },
  { name: 'Error 6', value: 'var(--all-red-6)', cssVar: '--all-red-6' },
  { name: 'Error 7', value: 'var(--all-red-7)', cssVar: '--all-red-7' },
  { name: 'Error 8', value: 'var(--all-red-8)', cssVar: '--all-red-8' },
  { name: 'Error 9', value: 'var(--all-red-9)', cssVar: '--all-red-9' },
  { name: 'Error 10', value: 'var(--all-red-10)', cssVar: '--all-red-10' }
])

// 警告色颜色数据
const warningColors = ref([
  { name: 'Warning 1', value: 'var(--all-orange-1)', cssVar: '--all-orange-1' },
  { name: 'Warning 2', value: 'var(--all-orange-2)', cssVar: '--all-orange-2' },
  { name: 'Warning 3', value: 'var(--all-orange-3)', cssVar: '--all-orange-3' },
  { name: 'Warning 4', value: 'var(--all-orange-4)', cssVar: '--all-orange-4' },
  { name: 'Warning 5 (Default)', value: 'var(--all-orange-5)', cssVar: '--all-orange-5' },
  { name: 'Warning 6', value: 'var(--all-orange-6)', cssVar: '--all-orange-6' },
  { name: 'Warning 7', value: 'var(--all-orange-7)', cssVar: '--all-orange-7' },
  { name: 'Warning 8', value: 'var(--all-orange-8)', cssVar: '--all-orange-8' },
  { name: 'Warning 9', value: 'var(--all-orange-9)', cssVar: '--all-orange-9' },
  { name: 'Warning 10', value: 'var(--all-orange-10)', cssVar: '--all-orange-10' }
])

// 成功色颜色数据
const successColors = ref([
  { name: 'Success 1', value: 'var(--all-green-1)', cssVar: '--all-green-1' },
  { name: 'Success 2', value: 'var(--all-green-2)', cssVar: '--all-green-2' },
  { name: 'Success 3', value: 'var(--all-green-3)', cssVar: '--all-green-3' },
  { name: 'Success 4', value: 'var(--all-green-4)', cssVar: '--all-green-4' },
  { name: 'Success 5 (Default)', value: 'var(--all-green-5)', cssVar: '--all-green-5' },
  { name: 'Success 6', value: 'var(--all-green-6)', cssVar: '--all-green-6' },
  { name: 'Success 7', value: 'var(--all-green-7)', cssVar: '--all-green-7' },
  { name: 'Success 8', value: 'var(--all-green-8)', cssVar: '--all-green-8' },
  { name: 'Success 9', value: 'var(--all-green-9)', cssVar: '--all-green-9' },
  { name: 'Success 10', value: 'var(--all-green-10)', cssVar: '--all-green-10' }
])
</script>

<style scoped>
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
}

.color-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
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