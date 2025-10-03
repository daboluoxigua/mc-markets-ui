<template>
  <div class="m-tab-card" :class="{ 'is-disabled': disabled }">
    <div class="m-tab-card__container">
      <m-tab-card-item
        v-for="(tab, index) in tabs"
        :key="tab.name"
        :name="tab.name"
        :label="tab.label"
        :disabled="tab.disabled"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, provide } from 'vue'
import { useClassName } from "@packages/hooks/useClassName.js"
import MTabCardItem from './TabCardItem.vue'

defineOptions({
  name: "MTabCard",
})

// 定义 props
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    default: () => []
  }
})

// 定义 emits
const emit = defineEmits(['update:modelValue', 'change', 'tab-click'])

// 使用类名 Hook
const { mergedAttrs } = useClassName()

// 内部状态
const activeTab = ref(props.modelValue)

// 计算 tabs 数据
const tabs = computed(() => {
  return props.options.map(option => {
    if (typeof option === 'string') {
      return { label: option, name: option, disabled: false }
    }
    return {
      label: option.label || option.name || '',
      name: option.name || option.label || '',
      disabled: option.disabled || false
    }
  })
})

// 处理 tab 点击
const handleTabClick = (tabName, isDisabled) => {
  if (isDisabled || props.disabled || tabName === activeTab.value) {
    return
  }
  
  const oldValue = activeTab.value
  activeTab.value = tabName
  emit('update:modelValue', tabName)
  emit('change', tabName, oldValue)
  emit('tab-click', tabName)
}

// 监听 modelValue 变化
watch(() => props.modelValue, (newValue) => {
  if (newValue !== activeTab.value) {
    activeTab.value = newValue
  }
})

// 提供给子组件的方法
provide('tabCardContext', {
  activeTab,
  handleTabClick
})
</script>

<style lang="scss" scoped>
.m-tab-card {
  display: inline-block;
  
  &.is-disabled {
    pointer-events: none;
    opacity: 0.6;
  }

  &__container {
    display: flex;
    background-color: var(--bg-tertiary-hover, #2a2a2a);
    border-radius: var(--md);
    padding: 4px;
    gap: 0;
  }
}


// 深色主题适配
@media (prefers-color-scheme: dark) {
  .m-tab-card {
    &__container {
      background-color: var(--bg-tertiary-hover, #2a2a2a);
    }
  }
}
</style>
