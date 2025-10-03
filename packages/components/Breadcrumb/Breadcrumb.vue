<template>
  <nav class="m-breadcrumb" aria-label="Breadcrumb">
    <slot></slot>
  </nav>
</template>

<script setup>
import { provide, ref, computed } from 'vue'

defineOptions({
  name: "MBreadcrumb",
})

// 定义 props
const props = defineProps({
  separator: {
    type: String,
    default: '/'
  },
  separatorIcon: {
    type: [String, Object],
    default: undefined
  }
})

// 子组件管理
const items = ref([])

// 注册子组件
const registerItem = () => {
  const id = Date.now() + Math.random()
  items.value.push(id)
  return id
}

// 注销子组件
const unregisterItem = (id) => {
  const index = items.value.indexOf(id)
  if (index > -1) {
    items.value.splice(index, 1)
  }
}

// 判断是否为最后一项
const isLastItem = (currentId) => {
  const currentIndex = items.value.indexOf(currentId)
  return currentIndex === items.value.length - 1
}

// 提供给子组件的配置
provide('breadcrumbContext', {
  separator: props.separator,
  separatorIcon: props.separatorIcon,
  registerItem,
  unregisterItem,
  isLastItem
})
</script>

<style lang="scss" scoped>
.m-breadcrumb {
  font-size: 14px;
  line-height: 1;
  color: var(--text-secondary, #606266);
  
  &::before {
    display: table;
    content: "";
  }
  
  &::after {
    display: table;
    clear: both;
    content: "";
  }
}
</style>
