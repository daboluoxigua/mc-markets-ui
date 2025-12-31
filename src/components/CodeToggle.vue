<template>
  <div class="code-toggle">
    <!-- 组件预览区域 -->
    <div class="demo-preview">
      <component :is="component"></component>
    </div>
    
    <!-- 代码展示控制区域 -->
    <div class="demo-actions">
      <m-button type="primary" class="demo-toggle-btn" @click="toggle">
        {{ isVisible ? "隐藏代码" : "显示代码" }}
      </m-button>
    </div>
    
    <!-- 代码展示区域 -->
    <div v-if="isVisible" class="demo-code">
      <button
        ref="copyBtnRef"
        class="demo-copy-btn"
        @click="copyCode"
        title="复制代码"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
          />
        </svg>
      </button>
      <pre><code v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // 导入Atom One Dark主题样式

// 定义 props
const props = defineProps({
  component: {
    type: Object,
    default: () => {}, // 直接传入代码字符串
  },
});
const code = computed(() => {
  return props.component?.code;
});
const highlightedCode = ref("");
const copyBtnRef = ref(null);

// 响应式数据
const isVisible = ref(false);


// 高亮代码
highlightedCode.value = hljs.highlight(code.value, { language: 'html' }).value


// 方法
const toggle = () => {
  isVisible.value = !isVisible.value;
};

// 复制代码
const copyCode = async () => {
  try {
    const code = props.code;
    
    if (!code) {
      return;
    }

    // 复制到剪贴板
    await navigator.clipboard.writeText(code);

    // 显示成功提示
    if (copyBtnRef.value) {
      const originalText = copyBtnRef.value.innerHTML;
      copyBtnRef.value.innerHTML =
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
      copyBtnRef.value.style.background = "#67c23a";

      setTimeout(() => {
        copyBtnRef.value.innerHTML = originalText;
        copyBtnRef.value.style.background = "";
      }, 2000);
    }
  } catch (err) {
    console.error("复制失败:", err);
    // 降级方案
    const code = getSlotTextContent();
    const textArea = document.createElement("textarea");
    textArea.value = code || "";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
};
</script>

<style scoped lang="scss">
.code-toggle {
  width: 100%;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  overflow: hidden;
  background: var(--el-bg-color);
  box-shadow: var(--el-box-shadow-light);
}

.demo-preview {
  padding: 20px;
  background: var(--el-bg-color);
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.demo-actions {
  padding: 12px 20px;
  background: var(--el-fill-color-lighter);
  display: flex;
  justify-content: flex-end;
  // border-top: 1px solid var(--el-border-color-lighter);
}

.demo-toggle-btn {
  font-size: 12px !important;
  padding: 6px 12px !important;
  height: auto !important;
  min-height: 28px !important;
  border-radius: 4px !important;
}

.demo-code {
  color: #abb2bf;
  position: relative;
  background: #282c34;
  border-top: 1px solid var(--el-border-color-lighter);
}

.demo-copy-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: #abb2bf;
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
  color: #ffffff;
}

.demo-code pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 13px;
  line-height: 1.6;
  white-space: pre-wrap; /* 允许换行但保持格式化 */
  word-wrap: break-word; /* 长单词自动换行 */
  word-break: break-all; /* 强制换行，防止溢出 */
}

.demo-code code {
  color: #ecf0f1;
  background: none;
  padding: 0;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 13px;
  line-height: 1.5;
}

/* 确保highlight.js的样式正确应用 */
.demo-code code.hljs {
  background: #282c34 !important;
  color: #abb2bf !important;
  padding: 0 !important;
}

/* 优化Atom One Dark主题的显示效果 */
.demo-code code .hljs-tag,
.demo-code code .hljs-name {
  color: #e06c75;
}

.demo-code code .hljs-attr {
  color: #d19a66;
}

.demo-code code .hljs-string {
  color: #98c379;
}

.demo-code code .hljs-comment {
  color: #5c6370;
  font-style: italic;
}

.demo-code code .hljs-keyword {
  color: #c678dd;
}

.demo-code code .hljs-number {
  color: #d19a66;
}

.demo-code code .hljs-title {
  color: #61afef;
}

.demo-code code .hljs-attribute {
  color: #d19a66;
}

.demo-code code .hljs-value {
  color: #98c379;
}

/* 优化标签换行显示 */
.demo-code code .hljs-tag {
  display: inline-block;
  margin-right: 2px;
}

/* 属性换行优化 */
.demo-code code .hljs-attr {
  margin-right: 4px;
}

/* 字符串值换行优化 */
.demo-code code .hljs-string {
  white-space: nowrap;
  display: inline-block;
}

/* 响应式代码显示 */
@media (max-width: 768px) {
  .demo-code pre {
    padding: 15px;
    font-size: 12px;
    line-height: 1.5;
  }
  
  .demo-code code {
    font-size: 12px;
  }
}
</style>
