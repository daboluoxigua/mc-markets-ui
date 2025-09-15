<template>
  <el-alert v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-alert>
</template>

<script setup>
defineOptions({
  name: 'MAlert'
})
</script>
