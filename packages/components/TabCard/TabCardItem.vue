<template>
  <div
    :class="[
      'm-tab-card-item',
      { 
        'is-active': isActive,
        'is-disabled': disabled
      }
    ]"
    @click="handleClick"
  >
    <span class="m-tab-card-item__text">
      <slot>{{ label }}</slot>
    </span>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'

defineOptions({
  name: "MTabCardItem",
})

// 定义 props
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  name: {
    type: [String, Number],
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

// 定义 emits
const emit = defineEmits(['click'])

// 注入父组件上下文
const tabCardContext = inject('tabCardContext')

// 计算是否激活
const isActive = computed(() => {
  return tabCardContext.activeTab.value === props.name
})

// 处理点击
const handleClick = () => {
  if (props.disabled) {
    return
  }
  
  tabCardContext.handleTabClick(props.name, props.disabled)
  emit('click', props.name)
}
</script>

<style lang="scss" scoped>
.m-tab-card-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: var(--md);
  cursor: pointer;
  // transition: all 0.3s ease;
  user-select: none;
  background-color: transparent;
  padding: 0 36px;
  text-align: center;
  z-index: 1;

  // &:hover:not(.is-disabled):not(.is-active) {
  //   background-color: rgba(255, 255, 255, 0.05);
  // }

  &.is-active {
    background-color: var(--bg-brand, #ffd700);
    color: var(--text-quaternary);
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(.is-active) {
    color: var(--text-secondary, #ffffff);
  }

  &__text {
    font-size: 14px;
    line-height: 1.4;
    white-space: nowrap;
  }
}
</style>
