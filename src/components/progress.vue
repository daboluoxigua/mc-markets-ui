<template>
  <div class="progress-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Progress :percentage="50" />
          <Progress :percentage="100" />
          <Progress :percentage="0" />
        </div>
        <CodeToggle>
          {{ `<Progress :percentage="50" />
<Progress :percentage="100" />
<Progress :percentage="0" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 百分比内显 -->
    <section class="demo-section">
      <h2>百分比内显</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Progress :percentage="50" :show-text="false" />
          <Progress :percentage="100" :show-text="false" />
          <Progress :percentage="0" :show-text="false" />
        </div>
        <CodeToggle>
          {{ `<Progress :percentage="50" :show-text="false" />
<Progress :percentage="100" :show-text="false" />
<Progress :percentage="0" :show-text="false" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义颜色 -->
    <section class="demo-section">
      <h2>自定义颜色</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Progress :percentage="50" color="#f56c6c" />
          <Progress :percentage="100" color="#67c23a" />
          <Progress :percentage="80" color="#409eff" />
        </div>
        <CodeToggle>
          {{ `<Progress :percentage="50" color="#f56c6c" />
<Progress :percentage="100" color="#67c23a" />
<Progress :percentage="80" color="#409eff" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 环形进度条 -->
    <section class="demo-section">
      <h2>环形进度条</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Progress :percentage="50" type="circle" />
          <Progress :percentage="100" type="circle" />
          <Progress :percentage="0" type="circle" />
        </div>
        <CodeToggle>
          {{ `<Progress :percentage="50" type="circle" />
<Progress :percentage="100" type="circle" />
<Progress :percentage="0" type="circle" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 动态进度条 -->
    <section class="demo-section">
      <h2>动态进度条</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Progress :percentage="percentage" />
          <Button @click="increase">增加</Button>
          <Button @click="decrease">减少</Button>
        </div>
        <CodeToggle>
          {{ `<Progress :percentage="percentage" />
<Button @click="increase">增加</Button>
<Button @click="decrease">减少</Button>` }}
        </CodeToggle>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Progress, Button } from '@mc-markets/ui'
import DemoSection from './DemoSection.vue'
import { ref } from 'vue'

// 响应式数据
const percentage = ref(0)

// 方法
const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}

const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
</script>

<style scoped>
.progress-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}


.demo-preview .el-progress {
  margin-bottom: 20px;
}

.demo-preview .el-button {
  margin-right: 10px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .progress-demo {
    padding: 15px;
  }
}
</style>
