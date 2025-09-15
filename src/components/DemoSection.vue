<template>
  <section class="demo-section">
    <h2>{{ title }}</h2>
    <div class="demo-card">
      <div class="demo-preview">
        <component v-if="renderedTemplate" :is="renderedTemplate"/>
        <slot v-else/>
      </div>
      <CodeToggle>
        <slot/>
      </CodeToggle>
    </div>
  </section>
</template>

<script setup>
import { computed, h, resolveComponent, getCurrentInstance } from 'vue'
import CodeToggle from './CodeToggle.vue'

// 定义 props
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

// 定义 slots
const slots = defineSlots()

// 获取当前实例以访问全局组件
const instance = getCurrentInstance()

// Element Plus 组件映射表
const elementPlusMapping = {
  'm-input': 'ElInput',
  'm-button': 'ElButton',
  'm-card': 'ElCard',
  'm-form': 'ElForm',
  'm-form-item': 'ElFormItem',
  'm-select': 'ElSelect',
  'm-option': 'ElOption',
  'm-date-picker': 'ElDatePicker',
  'm-time-picker': 'ElTimePicker',
  'm-table': 'ElTable',
  'm-table-column': 'ElTableColumn',
  'm-pagination': 'ElPagination',
  'm-dialog': 'ElDialog',
  'm-drawer': 'ElDrawer',
  'm-popover': 'ElPopover',
  'm-tooltip': 'ElTooltip',
  'm-dropdown': 'ElDropdown',
  'm-dropdown-menu': 'ElDropdownMenu',
  'm-dropdown-item': 'ElDropdownItem',
  'm-menu': 'ElMenu',
  'm-menu-item': 'ElMenuItem',
  'm-submenu': 'ElSubMenu',
  'm-tabs': 'ElTabs',
  'm-tab-pane': 'ElTabPane',
  'm-steps': 'ElSteps',
  'm-step': 'ElStep',
  'm-breadcrumb': 'ElBreadcrumb',
  'm-breadcrumb-item': 'ElBreadcrumbItem',
  'm-alert': 'ElAlert',
  'm-notification': 'ElNotification',
  'm-message': 'ElMessage',
  'm-message-box': 'ElMessageBox',
  'm-loading': 'ElLoading',
  'm-infinite-scroll': 'ElInfiniteScroll',
  'm-image': 'ElImage',
  'm-avatar': 'ElAvatar',
  'm-badge': 'ElBadge',
  'm-tag': 'ElTag',
  'm-progress': 'ElProgress',
  'm-skeleton': 'ElSkeleton',
  'm-empty': 'ElEmpty',
  'm-descriptions': 'ElDescriptions',
  'm-descriptions-item': 'ElDescriptionsItem',
  'm-result': 'ElResult',
  'm-statistic': 'ElStatistic',
  'm-timeline': 'ElTimeline',
  'm-timeline-item': 'ElTimelineItem',
  'm-carousel': 'ElCarousel',
  'm-carousel-item': 'ElCarouselItem',
  'm-collapse': 'ElCollapse',
  'm-collapse-item': 'ElCollapseItem',
  'm-divider': 'ElDivider',
  'm-link': 'ElLink',
  'm-text': 'ElText',
  'm-space': 'ElSpace',
  'm-affix': 'ElAffix',
  'm-backtop': 'ElBacktop',
  'm-page-header': 'ElPageHeader',
  'm-radio': 'ElRadio',
  'm-radio-group': 'ElRadioGroup',
  'm-radio-button': 'ElRadioButton',
  'm-checkbox': 'ElCheckbox',
  'm-checkbox-group': 'ElCheckboxGroup',
  'm-checkbox-button': 'ElCheckboxButton',
  'm-switch': 'ElSwitch',
  'm-slider': 'ElSlider',
  'm-rate': 'ElRate',
  'm-color-picker': 'ElColorPicker',
  'm-transfer': 'ElTransfer',
  'm-tree': 'ElTree',
  'm-tree-select': 'ElTreeSelect',
  'm-cascader': 'ElCascader',
  'm-upload': 'ElUpload',
  'm-upload-dragger': 'ElUploadDragger',
  'm-upload-list': 'ElUploadList'
}

// 解析模板字符串并创建 VNode
const parseTemplate = (template) => {
  if (!template) return null
  
  // 创建一个临时的 div 来解析 HTML
  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = template
  
  // 递归解析 DOM 节点
  const parseNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent
    }
    
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase()
      const props = {}
      const children = []
      
      // 处理属性
      for (const attr of node.attributes) {
        const name = attr.name
        const value = attr.value
        
        if (name.startsWith(':')) {
          // 动态属性
          props[name] = value
        } else if (name === 'class') {
          props.class = value
        } else if (name === 'style') {
          props.style = value
        } else if (value === '') {
          // 布尔属性
          props[name] = true
        } else {
          props[name] = value
        }
      }
      
      // 处理子节点
      for (const child of node.childNodes) {
        const childVNode = parseNode(child)
        if (childVNode !== null) {
          children.push(childVNode)
        }
      }
      
      // 尝试解析为 Vue 组件
      try {
        // 首先检查是否是 m- 前缀的组件
        const componentName = elementPlusMapping[tagName] || tagName
        let component = null
        
        // 尝试从全局组件中解析
        if (instance && instance.appContext.components[componentName]) {
          component = instance.appContext.components[componentName]
        } else {
          // 尝试使用 resolveComponent
          component = resolveComponent(componentName)
        }
        
        // 检查组件是否有效
        if (!component) {
          console.warn(`[DemoSection] 组件 ${componentName} 未找到，使用普通元素 ${tagName}`)
          return h(tagName, props, children)
        }
        
        return h(component, props, children)
      } catch (e) {
        console.warn(`[DemoSection] 解析组件 ${tagName} 失败:`, e)
        // 如果不是组件，创建普通元素
        return h(tagName, props, children)
      }
    }
    
    return null
  }
  
  return parseNode(tempDiv.firstChild)
}

// 计算渲染的模板
const renderedTemplate = computed(() => {
  if (!slots.default) {
    return null
  }
  
  const slotContent = slots.default()
  
  if (!slotContent || slotContent.length === 0) {
    return null
  }
  
  // 获取第一个子节点的内容
  const firstChild = slotContent[0]
  
  // 如果是文本节点，解析模板字符串
  if (typeof firstChild === 'string') {
    return parseTemplate(firstChild)
  }
  
  // 如果是 VNode，检查是否是文本内容
  if (firstChild && typeof firstChild === 'object') {
    // 检查是否是文本节点
    if (firstChild.type === Symbol.for('v-txt') || typeof firstChild.type === 'symbol') {
      return parseTemplate(firstChild.children || '')
    }
    
    // 检查是否有文本子节点
    if (firstChild.children && typeof firstChild.children === 'string') {
      return parseTemplate(firstChild.children)
    }
  }
  
  return null
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

<style lang="scss">
/* 全局样式，用于动态渲染的内容 */
.demo-section .demo-preview {
  .doc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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

  .doc-item > span {
    margin-top: 8px;
    font-size: 12px;
    color: var(--el-text-color-regular);
    text-align: center;
  }

  /* 响应式设计 */
  @media (max-width: 1200px) {
    .doc-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .doc-grid {
      grid-template-columns: repeat(2, 1fr);
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
