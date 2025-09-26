<template>
  <el-switch v-bind="mergedAttrs" :popper-class="popperClass" class="m-switch">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-switch>
</template>

<script setup>
import { useClassName } from "@packages/hooks/useClassName.js"

defineOptions({
  name: 'MSwitch'
})

// 定义props
const props = defineProps({
  popperClass: {
    type: String,
    default: ''
  }
})

// 使用类名 Hook
const { mergedAttrs, className: popperClass } = useClassName('mc-switch-popper')
</script>

<style lang="scss">
.m-switch{
  &.is-checked{
    .el-switch__action{
      background-color: var(--all-gray-10);
    }
  }
}
</style>
