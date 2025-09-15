<template>
  <el-tooltip v-bind="mergedAttrs" :popper-class="computedPopperClass" class="m-tooltip">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-tooltip>
</template>

<script setup>
import { computed, useAttrs } from 'vue'

defineOptions({
  name: 'MTooltip'
})

// 定义props
const props = defineProps({
  popperClass: {
    type: String,
    default: ''
  }
})

// 获取attrs
const attrs = useAttrs()

// 计算popper-class，合并默认类名和外部传入的类名
const computedPopperClass = computed(() => {
  const defaultPopperClass = 'mc-tooltip-popper'
  
  if (attrs.popperClass) {
    return `${defaultPopperClass} ${attrs.popperClass}`.trim()
  }
  
  return defaultPopperClass
})

// 合并其他属性（排除popperClass）
const mergedAttrs = computed(() => {
  const { popperClass, ...otherAttrs } = attrs
  return otherAttrs
})
</script>

<style lang="scss">
.mc-tooltip-popper {
  &.is-dark {
    color: #fff !important;
    background-color: var(--all-gray-6) !important;
    border-color: var(--all-gray-6) !important;
    .el-popper__arrow::before{
        background-color: var(--all-gray-6) !important;
        border-color: var(--all-gray-6) !important;
    }
  }
  
  &.is-light {
    color: #606266 !important;
    background-color: #fff !important;
    border: 1px solid #e4e7ed !important;
    
    .el-popper__arrow::before {
      background-color: #fff !important;
      border-color: #fff !important;
    }
  }
}

:deep(.el-popper) {
  &.is-light {
    background: var(--bg-tertiary-hover);
    border-color: var(--border-primary);
  }
}
</style>
