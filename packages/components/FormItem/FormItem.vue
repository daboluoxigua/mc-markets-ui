<template>
  <el-form-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'MCFormItem'
})
</script>
