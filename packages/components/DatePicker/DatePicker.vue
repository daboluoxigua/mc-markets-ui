<template>
  <el-date-picker v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-date-picker>
</template>

<script setup>
defineOptions({
  name: 'MDatePicker'
})
</script>
