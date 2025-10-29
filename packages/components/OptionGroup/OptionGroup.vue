<template>
  <el-option-group ref="optionGroupRef" v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-option-group>
</template>

<script setup>
import { useExposeRef } from '@packages/hooks/useExposeRef.js'

defineOptions({
  name: 'MOptionGroup'
})

const { innerRef: optionGroupRef, exposedProxy } = useExposeRef('optionGroupRef')

defineExpose(exposedProxy)
</script>
