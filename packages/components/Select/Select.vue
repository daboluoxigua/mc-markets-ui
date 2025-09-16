<template>
  <el-select 
    class="m-select" 
    :class="{ solid: $attrs.styleType === 'solid' }"
    :show-arrow="false" 
    v-bind="$attrs"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-select>
</template>

<script setup>
defineOptions({
  name: 'MSelect'
})
</script>

<style lang="scss">
// Select 组件样式 - 使用更具体的选择器确保样式优先级
.m-select.el-select {
  &.solid {
    --el-border-color: var(--bg-tertiary-hover);
    
    .el-select__wrapper {
      background: var(--bg-tertiary-hover);
    }
    .el-select__caret{
      color: var(--all-base-white);
    }
  }
  
  .el-select__wrapper {
    padding: 4px 16px;
    
    &.is-disabled {
      background: var(--bg-tertiary-hover);
    }
  }
  
  &.el-select--small .el-select__wrapper {
    padding: 4px 16px;
    font-size: var(--font-size-text-sm);
  }

}
</style>