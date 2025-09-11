<template>
  <el-table v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-table>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCTable'
})
</script>
