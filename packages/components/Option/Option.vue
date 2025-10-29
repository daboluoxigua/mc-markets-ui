<template>
  <el-option ref="optionRef" v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-option>
</template>

<script setup>
import { useExposeRef } from '@packages/hooks/useExposeRef.js'

defineOptions({
  name: 'MOption'
})

const { innerRef: optionRef, exposedProxy } = useExposeRef('optionRef')

defineExpose(exposedProxy)
</script>
