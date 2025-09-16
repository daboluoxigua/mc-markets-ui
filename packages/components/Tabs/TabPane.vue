<template>
  <div
    v-show="active"
    class="m-tab-pane"
    :class="{
      'm-tab-pane--active': active,
      'm-tab-pane--disabled': disabled
    }"
  >
    <slot />
  </div>
</template>

<script setup>
import { inject, computed, onMounted, onUnmounted, useSlots } from 'vue'

// 定义 props
const props = defineProps({
  // 选项卡标题
  label: {
    type: String,
    default: ''
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 选项卡名称，用于标识
  name: {
    type: [String, Number],
    default: ''
  },
  // 是否可关闭
  closable: {
    type: Boolean,
    default: false
  },
  // 是否延迟渲染
  lazy: {
    type: Boolean,
    default: false
  }
})

// 获取插槽
const slots = useSlots()

// 注入父组件上下文
const tabsContext = inject('tabsContext')

// 计算是否激活
const active = computed(() => {
  if (!tabsContext) return false
  return tabsContext.activeName === (props.name || tabsContext.tabIndex)
})

// 组件挂载时注册到父组件
onMounted(() => {
  if (tabsContext) {
    const tabData = {
      name: props.name,
      label: props.label,
      disabled: props.disabled,
      closable: props.closable,
      $slots: slots
    }
    tabsContext.registerTab(tabData)
  }
})

// 组件卸载时从父组件中移除
onUnmounted(() => {
  if (tabsContext) {
    tabsContext.unregisterTab(props.name)
  }
})

// 定义组件名称
defineOptions({
  name: 'MTabPane'
})
</script>

<style scoped lang="scss">
.m-tab-pane {
  display: none;
  
  &--active {
    display: block;
  }
  
  &--disabled {
    opacity: 0.6;
    pointer-events: none;
  }
}
</style>
