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

<script setup lang="ts">
import { ElTabs } from 'element-plus'
import type { TabsProps, TabPaneName, TabClickEvent, TabChangeEvent, TabRemoveEvent, TabAddEvent } from 'element-plus'

// 定义组件属性，继承 Element Plus Tabs 的所有属性
export interface TabProps extends Omit<TabsProps, 'modelValue'> {
  modelValue?: TabPaneName
}

// 定义事件
export interface TabEvents {
  'update:modelValue': [value: TabPaneName]
  'tab-click': [tab: TabClickEvent]
  'tab-change': [name: TabChangeEvent]
  'tab-remove': [name: TabRemoveEvent]
  'tab-add': [event: TabAddEvent]
}

// 定义 props
const props = withDefaults(defineProps<TabProps>(), {
  type: 'card',
  closable: false,
  addable: false,
  editable: false,
  tabPosition: 'top',
  stretch: false,
  beforeLeave: undefined
})

// 定义 emits
const emit = defineEmits<TabEvents>()

// 处理 modelValue 更新
const handleUpdate = (value: TabPaneName) => {
  emit('update:modelValue', value)
}

// 处理 tab 点击事件
const handleTabClick = (tab: TabClickEvent) => {
  emit('tab-click', tab)
}

// 处理 tab 切换事件
const handleTabChange = (name: TabChangeEvent) => {
  emit('tab-change', name)
}

// 处理 tab 移除事件
const handleTabRemove = (name: TabRemoveEvent) => {
  emit('tab-remove', name)
}

// 处理 tab 添加事件
const handleTabAdd = (event: TabAddEvent) => {
  emit('tab-add', event)
}
</script>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>
