<template>
  <el-tooltip ref="tooltipRef" v-bind="mergedAttrs" :popper-class="popperClass">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-tooltip>
</template>

<script setup>
import { useClassName } from "@packages/hooks/useClassName.js"
import { useExposeRef } from '@packages/hooks/useExposeRef.js'

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

// 使用类名 Hook
const { mergedAttrs, className: popperClass } = useClassName('mc-tooltip-popper')

const { innerRef: tooltipRef, exposedProxy } = useExposeRef('tooltipRef')

defineExpose(exposedProxy)
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
