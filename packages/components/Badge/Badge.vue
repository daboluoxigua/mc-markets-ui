<template>
  <el-badge v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-badge>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCBadge'
})
</script>
