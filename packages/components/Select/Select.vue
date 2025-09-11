<template>
  <el-select :show-arrow="false" v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-select>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCSelect'
})
</script>
