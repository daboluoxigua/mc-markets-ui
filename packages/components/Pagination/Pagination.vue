
<template>
  <el-pagination v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-pagination>
</template>

<script setup>
defineOptions({
  name: 'MPagination'
})
</script>

