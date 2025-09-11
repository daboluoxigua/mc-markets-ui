<template>
  <el-button v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCButton'
})
</script>
