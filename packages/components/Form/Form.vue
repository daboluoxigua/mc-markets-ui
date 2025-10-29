<template>
  <el-form ref="formRef" v-bind="$attrs" class="m-form">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-form>
</template>

<script setup>
import { useExposeRef } from '@packages/hooks/useExposeRef.js'

defineOptions({
  name: 'MForm'
})

const { innerRef: formRef, exposedProxy } = useExposeRef('formRef')

defineExpose(exposedProxy)
</script>

<style lang="scss">

</style>