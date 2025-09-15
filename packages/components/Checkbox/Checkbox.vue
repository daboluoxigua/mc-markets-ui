<template>
  <el-checkbox 
    v-bind="$attrs" 
    class="m-checkbox"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-checkbox>
</template>

<script setup>
defineOptions({
  name: 'MCheckbox'
})
</script>

<style lang="scss">
// Checkbox 组件样式 - 使用更具体的选择器确保样式优先级
.m-checkbox.el-checkbox {
  --el-checkbox-checked-icon-color: #000;
  --el-checkbox-input-height: 20px;
  --el-checkbox-input-width: 20px;
  --el-checkbox-input-border: 2px solid var(--icon-tertiary);
}

.m-checkbox.el-checkbox .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
  top: 7px;
}
</style>