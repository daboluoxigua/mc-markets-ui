<template>
  <el-checkbox-button 
    v-bind="$attrs" 
    class="m-checkbox-button"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-checkbox-button>
</template>

<script setup>
defineOptions({
  name: 'MCheckboxButton',
  inheritAttrs: false
})
</script>

<style lang="scss">
// CheckboxButton 组件样式 - 使用更具体的选择器确保样式优先级
.m-checkbox-button.el-checkbox-button {
  --el-checkbox-button-checked-text-color: var(--bg-tertiary-hover);
}
</style>