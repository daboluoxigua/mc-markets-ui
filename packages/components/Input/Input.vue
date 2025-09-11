<template>
  <el-input v-bind="$attrs">
    <template #prefix v-if="$slots.prefix">
      <slot name="prefix" />
    </template>
    <template #suffix v-if="$slots.suffix">
      <slot name="suffix" />
    </template>
    <template #prepend v-if="$slots.prepend">
      <slot name="prepend" />
    </template>
    <template #append v-if="$slots.append">
      <slot name="append" />
    </template>
  </el-input>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MCInput'
})
</script>
<style scoped lang="scss">
.solid{
  --el-input-bg-color:var(--border-primary);
  --el-input-border-color:var(--border-primary);
}
</style>