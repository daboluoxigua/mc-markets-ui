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

<script setup>
// 定义 props
const props = defineProps({
  label: {
    type: String,
    default: undefined
  },
  name: {
    type: [String, Number],
    default: undefined
  },
  disabled: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  },
  lazy: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
/* 可以在这里添加自定义样式 */
</style>
