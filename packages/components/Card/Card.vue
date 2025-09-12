<template>
  <el-card v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-card>
</template>

<script setup>
defineOptions({
  name: 'MCCard'
})
</script>
