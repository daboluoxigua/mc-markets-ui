<template>
  <section class="demo-section">
    <h2>{{ title }}</h2>
    <div class="demo-card">
      <div class="demo-preview">
        <slot name="preview"></slot>
      </div>
      <CodeToggle>
        <slot name="preview"></slot>
      </CodeToggle>
    </div>
  </section>
</template>

<script setup>
import CodeToggle from './CodeToggle.vue'

// 定义 props
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.demo-section {
  margin-bottom: 40px;
}

h2 {
  color: var(--text-primary);
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--border-primary);
}

/* 演示卡片样式 */
.demo-card {
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  overflow: hidden;
  background: var(--el-bg-color);
  box-shadow: var(--el-box-shadow-light);
}

.demo-preview {
  padding: 20px;
  background: var(--el-bg-color);
}

.demo-preview .el-alert {
  margin-bottom: 10px;
}
</style>
