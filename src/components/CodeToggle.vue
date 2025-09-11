<template>
  <div class="code-toggle">
    <div class="demo-actions">
      <button class="demo-toggle-btn" @click="toggle">
        {{ isVisible ? '隐藏代码' : '显示代码' }}
      </button>
    </div>
    <div v-if="isVisible" class="demo-code">
      <pre><code v-html="formattedCode"></code></pre>
    </div>
    <!-- 隐藏的渲染区域，用于获取 HTML -->
    <div ref="renderArea" style="display: none;">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

// 定义 props
const props = defineProps({
  defaultVisible: {
    type: Boolean,
    default: false
  }
})

// 响应式数据
const isVisible = ref(props.defaultVisible)
const renderArea = ref(null)
const htmlCode = ref('')

// 格式化代码 - 从渲染后的 HTML 获取源代码
const formattedCode = computed(() => {
  if (!htmlCode.value) return ''
  
  // 格式化 HTML 代码
  const formatted = formatHtml(htmlCode.value)
  
  // 转义 HTML 特殊字符
  return formatted
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
})

// 格式化 HTML 代码
function formatHtml(html) {
  let formatted = html
    .replace(/></g, '>\n<') // 在标签之间添加换行
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
  
  let indent = 0
  const result = []
  
  for (const line of formatted) {
    // 减少缩进（闭合标签）
    if (line.startsWith('</')) {
      indent = Math.max(0, indent - 1)
    }
    
    // 添加缩进
    result.push('  '.repeat(indent) + line)
    
    // 增加缩进（开始标签，但不是自闭合标签）
    if (line.startsWith('<') && !line.endsWith('/>') && !line.startsWith('</')) {
      indent++
    }
  }
  
  return result.join('\n')
}

// 获取渲染后的 HTML
const updateHtmlCode = async () => {
  await nextTick()
  if (renderArea.value) {
    htmlCode.value = renderArea.value.innerHTML
  }
}

// 方法
const toggle = () => {
  isVisible.value = !isVisible.value
  if (isVisible.value) {
    updateHtmlCode()
  }
}

// 组件挂载后更新 HTML
onMounted(() => {
  updateHtmlCode()
})
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
