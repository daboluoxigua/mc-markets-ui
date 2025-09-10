<template>
  <el-tabs
    v-bind="$attrs"
    :model-value="modelValue"
    @update:model-value="handleUpdate"
    @tab-click="handleTabClick"
    @tab-change="handleTabChange"
    @tab-remove="handleTabRemove"
    @tab-add="handleTabAdd"
  >
    <slot />
  </el-tabs>
</template>

<script setup>
// 定义 props
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: undefined
  },
  type: {
    type: String,
    default: 'card'
  },
  closable: {
    type: Boolean,
    default: false
  },
  addable: {
    type: Boolean,
    default: false
  },
  editable: {
    type: Boolean,
    default: false
  },
  tabPosition: {
    type: String,
    default: 'top'
  },
  stretch: {
    type: Boolean,
    default: false
  },
  beforeLeave: {
    type: Function,
    default: undefined
  }
})

// 定义 emits
const emit = defineEmits(['update:modelValue', 'tab-click', 'tab-change', 'tab-remove', 'tab-add'])

// 处理 modelValue 更新
const handleUpdate = (value) => {
  emit('update:modelValue', value)
}

// 处理 tab 点击事件
const handleTabClick = (tab) => {
  emit('tab-click', tab)
}

// 处理 tab 切换事件
const handleTabChange = (name) => {
  emit('tab-change', name)
}

// 处理 tab 移除事件
const handleTabRemove = (name) => {
  emit('tab-remove', name)
}

// 处理 tab 添加事件
const handleTabAdd = (event) => {
  emit('tab-add', event)
}
</script>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>
