<template>
  <el-input v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-input>
</template>

<script setup>
defineOptions({
  name: 'MInput'
})
</script>
