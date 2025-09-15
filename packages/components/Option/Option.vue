<template>
  <el-option v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-option>
</template>

<script setup>
defineOptions({
  name: 'MOption'
})
</script>
