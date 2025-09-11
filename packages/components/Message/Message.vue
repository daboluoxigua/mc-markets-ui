<template>
  <el-message v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-message>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCMessage'
})
</script>
