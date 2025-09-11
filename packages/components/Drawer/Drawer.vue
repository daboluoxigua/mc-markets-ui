<template>
  <el-drawer v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
    <template #header v-if="$slots.header">
      <slot name="header" />
    </template>
    <template #footer v-if="$slots.footer">
      <slot name="footer" />
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCDrawer'
})
</script>
