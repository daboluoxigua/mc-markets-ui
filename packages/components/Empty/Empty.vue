<template>
  <el-empty v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-empty>
</template>

<script setup>
defineOptions({
  name: 'MEmpty'
})
</script>
