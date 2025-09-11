<template>
  <el-card v-bind="$attrs">
    <template #header v-if="$slots.header">
      <slot name="header" />
    </template>
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-card>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCCard'
})
</script>
