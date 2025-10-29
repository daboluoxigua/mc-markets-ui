<template>
  <el-input ref="inputRef" v-bind="$attrs" class="m-input" :class="{ solid: $attrs.styleType === 'solid' }">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-input>
</template>

<script setup>
import { useExposeRef } from '@packages/hooks/useExposeRef.js'

defineOptions({
  name: 'MInput'
})

const { innerRef: inputRef, exposedProxy } = useExposeRef('inputRef')

defineExpose(exposedProxy)
</script>
<style lang="scss">

</style>