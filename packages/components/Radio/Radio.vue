<template>
  <el-radio v-bind="mergedAttrs" class="m-radio">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-radio>
</template>

<script setup>
import { useClassName } from "@packages/hooks/useClassName.js"

defineOptions({
  name: 'MRadio'
})

// 定义props
const props = defineProps({
  popperClass: {
    type: String,
    default: ''
  }
})

// 使用类名 Hook
const { mergedAttrs, className: popperClass } = useClassName('mc-radio-popper')
</script>

<style lang="scss">
// Radio popper-class 样式
// .mc-radio-popper {
//   自定义单选框样式可以在这里添加
// }
.m-radio{
  &.el-radio{
    --el-radio-input-height: 16px;
    --el-radio-input-width: 16px;
    --el-radio-input-border: 2px solid var(--icon-tertiary);
    &.el-radio--large{
      --el-radio-input-height: 20px;
      --el-radio-input-width: 20px;
      .el-radio__inner{
        height: var(--el-radio-input-height);
        width: var(--el-radio-input-width);
      }
    }

    .el-radio__input {
      &.is-checked .el-radio__inner::after {
        height: 6px;
        width: 6px;
        background-color: var(--bg-primary);
      }
      
      &.is-disabled {
        .el-radio__inner {
          background-color: var(--all-alphe-white-20);
          border-color: var(--icon-tertiary);
        }
        
        &.is-checked .el-radio__inner::after {
          background-color: var(--all-alphe-white-20);
        }
      }
    }
  }
}
</style>
