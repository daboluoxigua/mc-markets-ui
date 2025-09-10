<template>
  <el-tab-pane
    v-bind="$attrs"
    :label="label"
    :name="name"
    :disabled="disabled"
    :closable="closable"
    :lazy="lazy"
  >
    <template #label v-if="$slots.label">
      <slot name="label" />
    </template>
    <slot />
  </el-tab-pane>
</template>

<script setup lang="ts">
import { ElTabPane } from 'element-plus'
import type { TabPaneProps as ElTabPaneProps } from 'element-plus'

// 定义组件属性，继承 Element Plus TabPane 的所有属性
export interface TabPaneProps extends Omit<ElTabPaneProps, 'label' | 'name'> {
  label?: string
  name?: string
  disabled?: boolean
  closable?: boolean
  lazy?: boolean
}

// 定义 props
const props = withDefaults(defineProps<TabPaneProps>(), {
  disabled: false,
  closable: false,
  lazy: false
})
</script>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>
