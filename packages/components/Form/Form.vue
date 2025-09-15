<template>
  <el-form v-bind="$attrs" class="m-form">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-form>
</template>

<script setup>
defineOptions({
  name: 'MForm'
})
</script>

<style lang="scss">
// Form 组件样式 - 使用更具体的选择器确保样式优先级
.m-form.el-form {
  .el-form-item__label {
    height: var(--el-component-size);
    line-height: var(--el-component-size);
    color: var(--text-primary);
  }

  .el-form-item--label-top .el-form-item__label {
    line-height: 20px;
    height: 20px;
  }

  .el-input__wrapper {
    padding: 1px 16px;
  }

  .el-form-item {
    margin-bottom: 20px;
  }
}
</style>