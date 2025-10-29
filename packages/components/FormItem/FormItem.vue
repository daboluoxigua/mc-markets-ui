<template>
  <el-form-item v-bind="$attrs" class="m-form-item" ref="formItemRef">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'MFormItem'
})

import { useExposeRef } from '@packages/hooks/useExposeRef.js'

const { innerRef: formItemRef, exposedProxy } = useExposeRef('formItemRef')

defineExpose(exposedProxy)
</script>

<style lang="scss">
</style>