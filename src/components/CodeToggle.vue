<template>
  <div class="code-toggle">
    <div class="demo-actions">
      <m-button type="primary" class="demo-toggle-btn" @click="toggle">
        {{ isVisible ? "隐藏代码" : "显示代码" }}
      </m-button>
    </div>
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
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import "highlight.js/styles/atom-one-dark.css"; // 导入Atom One Dark主题样式

// 定义 props
const props = defineProps({
  defaultVisible: {
    type: Boolean,
    default: false,
  },
  language: {
    type: String,
    default: "html", // 默认语言为HTML
  },
});

// 定义 slots
const slots = defineSlots();
const copyBtnRef = ref(null);
const codeRef = ref(null);

// 响应式数据
const isVisible = ref(props.defaultVisible);

// 格式化代码 - 将 VNode 转换为源代码
const formattedCode = computed(() => {
  const slotContent = slots.default?.();

  if (!slotContent || slotContent.length === 0) {
    return "";
  }

  // 转换为原始代码
  let code = "";
  for (const vnode of slotContent) {
    code += vnodeToSourceRaw(vnode);
  }

  // 使用prettier格式化代码
  try {
    const result = prettier.format(code, {
      parser: "html",
      plugins: [parserHtml],
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      singleQuote: true,
      trailingComma: "none",
      bracketSpacing: true,
      arrowParens: "avoid",
    });
    
    // 确保返回的是字符串
    return typeof result === 'string' ? result : code;
  } catch (error) {
    console.warn("代码格式化失败，使用原始代码:", error);
    return code;
  }
});

// 高亮代码
const highlightedCode = computed(() => {
  if (!formattedCode.value) return "";

  // 确保 formattedCode.value 是字符串
  const codeString = typeof formattedCode.value === 'string' ? formattedCode.value : String(formattedCode.value);

  try {
    // 使用highlight.js进行代码高亮和格式化
    const result = hljs.highlight(codeString, {
      language: props.language,
      ignoreIllegals: true,
    });
    return result.value;
  } catch (error) {
    console.warn("代码高亮失败，使用原始代码:", error);
    // 如果高亮失败，返回转义后的原始代码
    return codeString
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
});

// 组件名称映射表 - 将内部组件名映射回用户使用的标签名
const componentNameMapping = {
  'MCButton': 'm-button',
  'MCCard': 'm-card',
  'MCInput': 'm-input',
  'MCForm': 'm-form',
  'MCFormItem': 'm-form-item',
  'MCSelect': 'm-select',
  'MCOption': 'm-option',
  'MCDatePicker': 'm-date-picker',
  'MCTimePicker': 'm-time-picker',
  'MCTable': 'm-table',
  'MCTableColumn': 'm-table-column',
  'MCPagination': 'm-pagination',
  'MCDialog': 'm-dialog',
  'MCDrawer': 'm-drawer',
  'MCPopover': 'm-popover',
  'MCTooltip': 'm-tooltip',
  'MCDropdown': 'm-dropdown',
  'MCDropdownMenu': 'm-dropdown-menu',
  'MCDropdownItem': 'm-dropdown-item',
  'MCMenu': 'm-menu',
  'MCMenuItem': 'm-menu-item',
  'MCSubMenu': 'm-submenu',
  'MCTabs': 'm-tabs',
  'MCTabPane': 'm-tab-pane',
  'MCSteps': 'm-steps',
  'MCStep': 'm-step',
  'MCBreadcrumb': 'm-breadcrumb',
  'MCBreadcrumbItem': 'm-breadcrumb-item',
  'MCAlert': 'm-alert',
  'MCNotification': 'm-notification',
  'MCMessage': 'm-message',
  'MCMessageBox': 'm-message-box',
  'MCLoading': 'm-loading',
  'MCInfiniteScroll': 'm-infinite-scroll',
  'MCImage': 'm-image',
  'MCAvatar': 'm-avatar',
  'MCBadge': 'm-badge',
  'MCTag': 'm-tag',
  'MCProgress': 'm-progress',
  'MCSkeleton': 'm-skeleton',
  'MCEmpty': 'm-empty',
  'MCDescriptions': 'm-descriptions',
  'MCDescriptionsItem': 'm-descriptions-item',
  'MCResult': 'm-result',
  'MCStatistic': 'm-statistic',
  'MCTimeline': 'm-timeline',
  'MCTimelineItem': 'm-timeline-item',
  'MCCarousel': 'm-carousel',
  'MCCarouselItem': 'm-carousel-item',
  'MCCollapse': 'm-collapse',
  'MCCollapseItem': 'm-collapse-item',
  'MCDivider': 'm-divider',
  'MCLink': 'm-link',
  'MCText': 'm-text',
  'MCSpace': 'm-space',
  'MCAffix': 'm-affix',
  'MCBacktop': 'm-backtop',
  'MCPageHeader': 'm-page-header',
  'MCRadio': 'm-radio',
  'MCRadioGroup': 'm-radio-group',
  'MCRadioButton': 'm-radio-button',
  'MCCheckbox': 'm-checkbox',
  'MCCheckboxGroup': 'm-checkbox-group',
  'MCCheckboxButton': 'm-checkbox-button',
  'MCSwitch': 'm-switch',
  'MCSlider': 'm-slider',
  'MCRate': 'm-rate',
  'MCColorPicker': 'm-color-picker',
  'MCTransfer': 'm-transfer',
  'MCTree': 'm-tree',
  'MCTreeSelect': 'm-tree-select',
  'MCCascader': 'm-cascader',
  'MCUpload': 'm-upload',
  'MCUploadDragger': 'm-upload-dragger',
  'MCUploadList': 'm-upload-list'
};

// 将 VNode 转换为源代码（无缩进版本）
function vnodeToSourceRaw(vnode) {
  if (!vnode) return "";

  let result = "";

  // 处理 Fragment (template 标签)
  if (vnode.type === Symbol.for("v-fgt") || vnode.type === "template") {
    if (vnode.children && Array.isArray(vnode.children)) {
      for (const child of vnode.children) {
        result += vnodeToSourceRaw(child);
      }
    }
    return result;
  }

  // 处理文本节点
  if (vnode.type === Symbol.for("v-txt") || typeof vnode.type === "symbol") {
    const text = vnode.children || "";
    return text;
  }

  // 处理文本内容（当children是字符串时）
  if (typeof vnode === "string") {
    return vnode;
  }

  // 处理Vue组件 - 显示为组件标签而不是HTML标签
  if (typeof vnode.type === "object" && vnode.type.__name) {
    // 这是一个Vue组件，显示为组件标签
    // 使用映射表将内部组件名映射回用户使用的标签名
    const displayName = componentNameMapping[vnode.type.__name] || vnode.type.__name;
    result += `<${displayName}`;

    // 添加属性
    if (vnode.props) {
      for (const [key, value] of Object.entries(vnode.props)) {
        if (key.startsWith("on")) continue; // 跳过事件处理器

        // 处理 Vue 指令和属性
        if (key.startsWith("v-") || key.startsWith(":")) {
          if (typeof value === "string") {
            result += ` ${key}="${value}"`;
          } else if (typeof value === "function") {
            result += ` ${key}="function"`;
          } else {
            result += ` ${key}="${JSON.stringify(value)}"`;
          }
        } else if (key === "key") {
          result += ` :key="${value}"`;
        } else if (key === "class" && typeof value === "object") {
          // 处理动态 class
          const classStr = Object.entries(value)
            .filter(([_, condition]) => condition)
            .map(([className, _]) => className)
            .join(" ");
          if (classStr) {
            result += ` class="${classStr}"`;
          }
        } else if (value === true) {
          result += ` ${key}`;
        } else if (value !== false && value !== null && value !== undefined) {
          result += ` ${key}="${value}"`;
        }
      }
    }

    // 处理子节点
    if (vnode.children && vnode.children.length > 0) {
      const hasTextOnly =
        vnode.children.length === 1 &&
        (vnode.children[0].type === Symbol.for("v-txt") ||
          typeof vnode.children[0].type === "symbol" ||
          typeof vnode.children[0] === "string");

      if (hasTextOnly) {
        const text =
          typeof vnode.children[0] === "string"
            ? vnode.children[0]
            : vnode.children[0].children || "";
        // 文本内容总是放在同一行
        result += `>${text}</${displayName}>`;
      } else {
        result += ">\n";
        for (const child of vnode.children) {
          const childCode = vnodeToSourceRaw(child);
          if (childCode.trim()) {
            result += childCode;
          }
        }
        result += `</${displayName}>`;
      }
    } else {
      result += " />";
    }

    // 添加换行
    result += "\n";
  }
  // 处理元素节点
  else if (typeof vnode.type === "string") {
    result += `<${vnode.type}`;

    // 添加属性
    if (vnode.props) {
      for (const [key, value] of Object.entries(vnode.props)) {
        if (key.startsWith("on")) continue; // 跳过事件处理器

        // 处理 Vue 指令
        if (key.startsWith("v-") || key.startsWith(":")) {
          if (typeof value === "string") {
            result += ` ${key}="${value}"`;
          } else if (typeof value === "function") {
            result += ` ${key}="function"`;
          } else {
            result += ` ${key}="${JSON.stringify(value)}"`;
          }
        } else if (key === "key") {
          result += ` :key="${value}"`;
        } else if (key === "class" && typeof value === "object") {
          // 处理动态 class
          const classStr = Object.entries(value)
            .filter(([_, condition]) => condition)
            .map(([className, _]) => className)
            .join(" ");
          if (classStr) {
            result += ` class="${classStr}"`;
          }
        } else if (value === true) {
          result += ` ${key}`;
        } else if (value !== false && value !== null && value !== undefined) {
          result += ` ${key}="${value}"`;
        }
      }
    }

    // 处理子节点
    if (vnode.children && vnode.children.length > 0) {
      const hasTextOnly =
        vnode.children.length === 1 &&
        (vnode.children[0].type === Symbol.for("v-txt") ||
          typeof vnode.children[0].type === "symbol" ||
          typeof vnode.children[0] === "string");

      if (hasTextOnly) {
        const text =
          typeof vnode.children[0] === "string"
            ? vnode.children[0]
            : vnode.children[0].children || "";
        // 文本内容总是放在同一行
        result += `>${text}</${vnode.type}>`;
      } else {
        result += ">\n";
        for (const child of vnode.children) {
          const childCode = vnodeToSourceRaw(child);
          if (childCode.trim()) {
            result += childCode;
          }
        }
        result += `</${vnode.type}>`;
      }
    } else {
      result += " />";
    }

    // 添加换行
    result += "\n";
  }

  return result;
}

// 方法
const toggle = () => {
  isVisible.value = !isVisible.value;
};

// 复制代码
const copyCode = async () => {
  try {
    // 使用原始代码（不包含高亮HTML）
    const code = formattedCode.value;

    if (!code) {
      return;
    }

    // 复制到剪贴板
    await navigator.clipboard.writeText(code);

    // 显示成功提示 - 使用当前组件的 ref
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
    // 降级方案：使用旧版API
    const textArea = document.createElement("textarea");
    textArea.value = formattedCode.value;
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
  border-top: 1px solid var(--el-border-color-lighter);
}

.demo-actions {
  padding: 12px 20px;
  background: var(--el-fill-color-lighter);
  display: flex;
  justify-content: flex-end;
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
  line-height: 1.5;
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
</style>
