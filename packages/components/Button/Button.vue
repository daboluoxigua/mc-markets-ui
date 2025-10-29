<template>
  <el-button ref="buttonRef" v-bind="$attrs" class="m-button">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-button>
</template>

<script setup>
import { useExposeRef } from '@packages/hooks/useExposeRef.js'

defineOptions({
  name: 'MButton'
})

const { innerRef: buttonRef, exposedProxy } = useExposeRef('buttonRef')

defineExpose(exposedProxy)
</script>

<style lang="scss" scoped>
// Button 组件样式 - 使用高优先级选择器确保不被全局样式覆盖

</style>