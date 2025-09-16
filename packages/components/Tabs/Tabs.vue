<template>
  <div class="m-tabs" :class="[`m-tabs--${type}`, `m-tabs--${tabPosition}`]">
    <div class="m-tabs__header">
      <div class="m-tabs__nav">
        <div
          v-for="(tab, index) in tabs"
          :key="tab.name || index"
          :class="[
            'm-tabs__item',
            {
              'm-tabs__item--active': activeName === (tab.name || index),
              'm-tabs__item--disabled': tab.disabled,
              'm-tabs__item--closable': tab.closable
            }
          ]"
          @click="handleTabClick(tab, index)"
        >
          <span class="m-tabs__item-text">
            <slot v-if="tab.$slots?.label" :name="`tab-${tab.name || index}`" />
            <span v-else>{{ tab.label }}</span>
          </span>
          <span
            v-if="tab.closable"
            class="m-tabs__item-close"
            @click.stop="handleTabClose(tab, index)"
          >
            <m-icon name="lucide-x" :size="12" />
          </span>
        </div>
        
        <!-- 添加按钮 -->
        <div
          v-if="addable || editable"
          class="m-tabs__item m-tabs__item--add"
          @click="handleTabAdd"
        >
          <m-icon name="plus" :size="12" />
        </div>
      </div>
    </div>
    
    <div class="m-tabs__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, provide, computed, useSlots, watch, nextTick } from 'vue'
import MIcon from '../Icon/Icon.vue'

// 定义 props
const props = defineProps({
  // 当前激活的标签页
  modelValue: {
    type: [String, Number],
    default: ''
  },
  // 标签页类型
  type: {
    type: String,
    default: '',
    validator: (value) => ['', 'card', 'border-card'].includes(value)
  },
  // 标签位置
  tabPosition: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'right', 'bottom', 'left'].includes(value)
  },
  // 是否可关闭
  closable: {
    type: Boolean,
    default: false
  },
  // 是否可添加
  addable: {
    type: Boolean,
    default: false
  },
  // 是否可编辑（同时可添加和关闭）
  editable: {
    type: Boolean,
    default: false
  },
  // 标签宽度是否自撑开
  stretch: {
    type: Boolean,
    default: false
  },
  // 切换前的钩子函数
  beforeLeave: {
    type: Function,
    default: null
  }
})

// 定义 emits
const emit = defineEmits(['update:modelValue', 'tab-click', 'tab-change', 'tab-remove', 'tab-add', 'edit'])

// 获取插槽
const slots = useSlots()

// 响应式数据
const tabs = ref([])
const activeName = ref(props.modelValue)

// 监听 modelValue 变化
watch(() => props.modelValue, (newVal) => {
  activeName.value = newVal
})

// 监听 activeName 变化
watch(activeName, (newVal) => {
  emit('update:modelValue', newVal)
  emit('tab-change', newVal)
})

// 提供上下文给子组件
provide('tabsContext', {
  registerTab: (tab) => {
    const index = tabs.value.findIndex(t => t.name === tab.name)
    if (index >= 0) {
      tabs.value[index] = tab
    } else {
      tabs.value.push(tab)
    }
    
    // 如果没有指定 activeName，默认选中第一个
    if (!activeName.value && tabs.value.length > 0) {
      activeName.value = tabs.value[0].name || 0
    }
  },
  unregisterTab: (name) => {
    const index = tabs.value.findIndex(tab => tab.name === name)
    if (index >= 0) {
      tabs.value.splice(index, 1)
    }
  }
})

// 处理标签点击
const handleTabClick = async (tab, index) => {
  if (tab.disabled) return
  
  const tabName = tab.name || index
  
  // 如果点击的是当前激活的标签，直接返回
  if (activeName.value === tabName) return
  
  // 执行 beforeLeave 钩子
  if (props.beforeLeave) {
    try {
      const result = await props.beforeLeave(activeName.value, tabName)
      if (result === false) return
    } catch (error) {
      return
    }
  }
  
  activeName.value = tabName
  emit('tab-click', { name: tabName, index, disabled: tab.disabled })
}

// 处理标签关闭
const handleTabClose = (tab, index) => {
  const tabName = tab.name || index
  emit('tab-remove', tabName)
  emit('edit', tabName, 'remove')
}

// 处理添加标签
const handleTabAdd = () => {
  emit('tab-add')
  emit('edit', '', 'add')
}

// 暴露方法给父组件
defineExpose({
  activeName: computed(() => activeName.value)
})
</script>

<style scoped lang="scss">
.m-tabs {
  display: flex;
  flex-direction: column;
  
  &--left {
    flex-direction: row;
  }
  
  &--right {
    flex-direction: row-reverse;
  }
  
  &--bottom {
    flex-direction: column-reverse;
  }

  &__header {
    flex-shrink: 0;
  }

  &__nav {
    display: flex;
    border-bottom: 1px solid var(--el-border-color);
    position: relative;
    
    .m-tabs--card &,
    .m-tabs--border-card & {
      border-bottom: none;
    }
    
    .m-tabs--left &,
    .m-tabs--right & {
      flex-direction: column;
      border-bottom: none;
      border-right: 1px solid var(--el-border-color);
      width: 120px;
    }
    
    .m-tabs--right & {
      border-right: none;
      border-left: 1px solid var(--el-border-color);
    }
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;
    border: 1px solid transparent;
    border-bottom: none;
    background: transparent;
    color: var(--el-text-color-regular);
    font-size: 14px;
    transition: all 0.3s ease;
    position: relative;
    flex-shrink: 0;
    
    &:hover {
      color: var(--el-color-primary);
    }
    
    &--active {
      color: var(--el-color-primary);
      border-color: var(--el-border-color);
      border-bottom-color: var(--el-bg-color);
      background: var(--el-bg-color);
      
      &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--el-color-primary);
      }
    }
    
    &--disabled {
      color: var(--el-text-color-disabled);
      cursor: not-allowed;
      
      &:hover {
        color: var(--el-text-color-disabled);
      }
    }
    
    &--closable {
      padding-right: 24px;
    }
    
    &--add {
      padding: 8px 12px;
      border: 1px dashed var(--el-border-color);
      color: var(--el-text-color-regular);
      
      &:hover {
        color: var(--el-color-primary);
        border-color: var(--el-color-primary);
      }
    }
    
    // 卡片风格
    .m-tabs--card & {
      border: 1px solid var(--el-border-color);
      border-bottom: none;
      margin-right: 2px;
      
      &--active {
        border-bottom-color: var(--el-bg-color);
        background: var(--el-bg-color);
        
        &::after {
          display: none;
        }
      }
    }
    
    // 边框卡片风格
    .m-tabs--border-card & {
      border: 1px solid var(--el-border-color);
      border-bottom: none;
      margin-right: -1px;
      background: var(--el-fill-color-light);
      
      &--active {
        background: var(--el-bg-color);
        border-bottom-color: var(--el-bg-color);
        
        &::after {
          display: none;
        }
      }
    }
    
    // 左侧和右侧位置
    .m-tabs--left &,
    .m-tabs--right & {
      border-bottom: 1px solid var(--el-border-color);
      border-right: none;
      
      &--active {
        border-bottom-color: var(--el-border-color);
        border-right-color: var(--el-bg-color);
        
        &::after {
          display: none;
        }
      }
    }
    
    .m-tabs--right & {
      border-bottom: 1px solid var(--el-border-color);
      border-left: none;
      
      &--active {
        border-bottom-color: var(--el-border-color);
        border-left-color: var(--el-bg-color);
      }
    }
  }

  &__item-text {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__item-close {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: var(--el-fill-color);
    }
  }

  &__content {
    flex: 1;
    padding: 16px 0;
    
    .m-tabs--card &,
    .m-tabs--border-card & {
      padding: 16px;
      border: 1px solid var(--el-border-color);
      border-top: none;
    }
    
    .m-tabs--border-card & {
      background: var(--el-bg-color);
    }
    
    .m-tabs--left &,
    .m-tabs--right & {
      flex: 1;
      padding: 0 0 0 16px;
    }
    
    .m-tabs--right & {
      padding: 0 16px 0 0;
    }
  }
}

// 响应式设计
@media (max-width: 768px) {
  .m-tabs {
    &__item {
      padding: 6px 12px;
      font-size: 13px;
    }
    
    &--left &__nav,
    &--right &__nav {
      width: 100px;
    }
  }
}
</style>
