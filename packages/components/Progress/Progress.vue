<template>
  <el-progress v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-progress>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCProgress'
})
</script>
