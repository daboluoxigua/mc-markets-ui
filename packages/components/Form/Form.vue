<template>
  <el-form ref="formRef" v-bind="$attrs" class="m-form">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-form>
</template>

<script setup>
import { ref, useAttrs, defineExpose } from 'vue'

defineOptions({
  name: 'MForm'
})

const formRef = ref()
const attrs = useAttrs()

// 暴露表单方法
defineExpose({
  validate: (callback) => formRef.value?.validate(callback),
  validateField: (props, callback) => formRef.value?.validateField(props, callback),
  resetFields: () => formRef.value?.resetFields(),
  scrollToField: (prop) => formRef.value?.scrollToField(prop),
  clearValidate: (props) => formRef.value?.clearValidate(props)
})
</script>

<style lang="scss">

</style>