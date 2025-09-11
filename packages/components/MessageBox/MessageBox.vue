<template>
  <el-message-box v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-message-box>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCMessageBox'
})
</script>
