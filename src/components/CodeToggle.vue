<template>
  <div class="code-toggle">
    <div class="demo-actions">
      <button class="demo-toggle-btn" @click="toggle">
        {{ isVisible ? '隐藏代码' : '显示代码' }}
      </button>
    </div>
    <div v-show="isVisible" class="demo-code">
      <pre><code><slot /></code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定义 props
const props = defineProps({
  defaultVisible: {
    type: Boolean,
    default: false
  }
})

// 响应式数据
const isVisible = ref(props.defaultVisible)

// 方法
const toggle = () => {
  isVisible.value = !isVisible.value
}
</script>

<style scoped>
.code-toggle {
  width: 100%;
}

.demo-actions {
  padding: 12px 20px;
  background: #f8f9fa;
  border-top: 1px solid #e1e8ed;
  display: flex;
  justify-content: flex-end;
}

.demo-toggle-btn {
  background: var(--el-color-primary);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.demo-toggle-btn:hover {
  background: var(--el-color-primary-light-3);
  transform: translateY(-1px);
}

.demo-code {
  background: #2c3e50;
  color: #ecf0f1;
  border-top: 1px solid #34495e;
}

.demo-code pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
}

.demo-code code {
  color: #ecf0f1;
  background: none;
  padding: 0;
}
</style>
