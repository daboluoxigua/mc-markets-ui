<template>
  <el-option v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-option>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCSelectOption'
})
</script>
