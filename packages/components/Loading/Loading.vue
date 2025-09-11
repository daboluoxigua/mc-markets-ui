<template>
  <el-loading v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-loading>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCLoading'
})
</script>
