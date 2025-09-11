<template>
  <el-table-column v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
    <template #header v-if="$slots.header">
      <slot name="header" />
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCTableColumn'
})
</script>
