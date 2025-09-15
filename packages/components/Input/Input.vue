<template>
  <el-input v-bind="$attrs" :class="{ solid: $attrs.type === 'solid' }">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-input>
</template>

<script setup>
defineOptions({
  name: 'MInput'
})
</script>
<style scoped lang="scss">
.solid{
  --el-border-color:var(--bg-tertiary-hover);
  :deep(.el-input__wrapper){
    background: var(--all-alphe-white-6);
  }
}
</style>