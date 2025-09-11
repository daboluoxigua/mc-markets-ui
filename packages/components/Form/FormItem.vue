<template>
  <el-form-item v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
    <template #label v-if="$slots.label">
      <slot name="label" />
    </template>
    <template #error v-if="$slots.error">
      <slot name="error" />
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCFormItem'
})
</script>
