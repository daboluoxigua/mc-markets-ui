<template>
  <section class="demo-section"  v-for="item in props.component" :key="item.name">
    <h2>{{ item.title }}</h2>
    <CodeToggle :component="item"></CodeToggle>
  </section>
</template>

<script setup>
import CodeToggle from './CodeToggle.vue'

// 定义 props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  columns: {
    type: Number,
    default: 4
  },
  code: {
    type: String,
    default: ""
  },  
  component: {
    type: Object,
    default: () => []
  }
})
</script>

<style scoped lang="scss">
.demo-section {
  margin-bottom: 40px;
}

h2 {
  color: var(--text-primary);
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--border-primary);
  font-size: 18px;
}
</style>

<style lang="scss">
/* 全局样式，用于动态渲染的内容 */
.demo-section .code-toggle .demo-preview {
  .doc-grid {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns, 4), 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }

  .doc-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: 1px solid var(--el-border-color-lighter);
    border-radius: 8px;
    background: var(--el-bg-color);
    transition: all 0.3s ease;
  }



  /* 响应式设计 */
  @media (max-width: 1200px) {
    .doc-grid {
      grid-template-columns: repeat(auto-fit, minmax(180px, auto));
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .doc-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, auto));
      gap: 12px;
    }

    .doc-item {
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    .doc-grid {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .doc-item {
      padding: 10px;
    }
  }
}
</style>
