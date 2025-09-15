<template>
  <el-input v-bind="$attrs" class="m-input" :class="{ solid: $attrs.styleType === 'solid' }">
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
<style lang="scss">
// Input 组件样式 - 使用更具体的选择器确保样式优先级
.m-input.el-input {
  &.solid {
    --el-border-color: var(--bg-tertiary-hover);
    
    .el-input__wrapper {
      background: var(--all-alphe-white-6);
    }
  }
}
</style>