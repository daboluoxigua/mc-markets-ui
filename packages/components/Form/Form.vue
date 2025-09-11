<template>
  <el-form v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-form>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCForm'
})
</script>
