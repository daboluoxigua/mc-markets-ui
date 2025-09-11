<template>
  <div class="code-toggle">
    <div class="demo-actions">
      <button class="demo-toggle-btn" @click="toggle">
        {{ isVisible ? '隐藏代码' : '显示代码' }}
      </button>
    </div>
    <div v-if="isVisible" class="demo-code">
      <button ref="copyBtnRef" class="demo-copy-btn" @click="copyCode" title="复制代码">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>
      </button>
      <pre><code v-html="formattedCode"></code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 定义 props
const props = defineProps({
  defaultVisible: {
    type: Boolean,
    default: false
  }
})

// 定义 slots
const slots = defineSlots()
const copyBtnRef = ref(null)

// 响应式数据
const isVisible = ref(props.defaultVisible)

// 格式化代码 - 将 VNode 转换为源代码
const formattedCode = computed(() => {
  const slotContent = slots.default?.()
  
  if (!slotContent || slotContent.length === 0) {
    return ''
  }
  
  // 先转换为无缩进的原始代码
  let code = ''
  for (const vnode of slotContent) {
    code += vnodeToSourceRaw(vnode)
  }
  
  // 然后应用美化（包括缩进）
  code = beautifyCode(code)
  
  // 转义 HTML 特殊字符
  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
})

// 美化代码格式 - 简化版本
function beautifyCode(code) {
  const lines = code.split('\n').filter(line => line.trim() !== '')
  const result = []
  let indent = 0
  
  for (const line of lines) {
    const trimmed = line.trim()
    
    // 结束标签：先减少缩进
    if (trimmed.startsWith('</')) {
      indent = Math.max(0, indent - 1)
    }
    
    // 添加缩进
    result.push('  '.repeat(indent) + trimmed)
    
    // 开始标签：增加缩进（自闭合标签除外）
    if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.endsWith('/>')) {
      indent++
    }
  }
  
  return result.join('\n')
}

// 将 VNode 转换为源代码（无缩进版本）
function vnodeToSourceRaw(vnode) {
  if (!vnode) return ''

  let result = ''

  // 处理 Fragment (template 标签)
  if (vnode.type === Symbol.for('v-fgt') || vnode.type === 'template') {
    if (vnode.children && Array.isArray(vnode.children)) {
      for (const child of vnode.children) {
        result += vnodeToSourceRaw(child)
      }
    }
    return result
  }

  // 处理文本节点
  if (vnode.type === Symbol.for('v-txt') || typeof vnode.type === 'symbol') {
    const text = vnode.children || ''
    return text
  }

  // 处理元素节点
  if (typeof vnode.type === 'string') {
    result += `<${vnode.type}`
    
    // 添加属性
    if (vnode.props) {
      for (const [key, value] of Object.entries(vnode.props)) {
        if (key.startsWith('on')) continue // 跳过事件处理器
        
        // 处理 Vue 指令
        if (key.startsWith('v-') || key.startsWith(':')) {
          if (typeof value === 'string') {
            result += ` ${key}="${value}"`
          } else if (typeof value === 'function') {
            result += ` ${key}="function"`
          } else {
            result += ` ${key}="${JSON.stringify(value)}"`
          }
        } else if (key === 'key') {
          result += ` :key="${value}"`
        } else if (key === 'class' && typeof value === 'object') {
          // 处理动态 class
          const classStr = Object.entries(value)
            .filter(([_, condition]) => condition)
            .map(([className, _]) => className)
            .join(' ')
          if (classStr) {
            result += ` class="${classStr}"`
          }
        } else if (value === true) {
          result += ` ${key}`
        } else if (value !== false && value !== null && value !== undefined) {
          result += ` ${key}="${value}"`
        }
      }
    }
    
    // 处理子节点
    if (vnode.children && vnode.children.length > 0) {
      const hasTextOnly = vnode.children.length === 1 && 
        (vnode.children[0].type === Symbol.for('v-txt') || typeof vnode.children[0].type === 'symbol')
      
      if (hasTextOnly) {
        const text = vnode.children[0].children || ''
        // 如果文本很短且不包含换行，放在同一行
        if (text.length < 50 && !text.includes('\n')) {
          result += `>${text}</${vnode.type}>`
        } else {
          result += '>\n' + text + '\n</' + vnode.type + '>'
        }
      } else {
        result += '>\n'
        for (const child of vnode.children) {
          result += vnodeToSourceRaw(child)
        }
        result += `</${vnode.type}>`
      }
    } else {
      result += ' />'
    }
    
    // 添加换行
    result += '\n'
  }

  return result
}

// 方法
const toggle = () => {
  isVisible.value = !isVisible.value
}

// 复制代码
const copyCode = async () => {
  try {
    // 获取原始代码（不包含HTML转义）
    const slotContent = slots.default?.()
    if (!slotContent || slotContent.length === 0) {
      return
    }
    
    let code = ''
    for (const vnode of slotContent) {
      code += vnodeToSourceRaw(vnode)
    }
    
    // 应用美化
    code = beautifyCode(code)
    
    // 复制到剪贴板
    await navigator.clipboard.writeText(code)
    
    // 显示成功提示 - 使用当前组件的 ref
    if (copyBtnRef.value) {
      const originalText = copyBtnRef.value.innerHTML
      copyBtnRef.value.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'
      copyBtnRef.value.style.background = '#67c23a'
      
      setTimeout(() => {
        copyBtnRef.value.innerHTML = originalText
        copyBtnRef.value.style.background = ''
      }, 2000)
    }
  } catch (err) {
    console.error('复制失败:', err)
    // 降级方案：使用旧版API
    const textArea = document.createElement('textarea')
    textArea.value = code
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
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
  position: relative;
}

.demo-copy-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: #ecf0f1;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 6px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  z-index: 10;
}

.demo-copy-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
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