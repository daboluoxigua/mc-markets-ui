<template>
  <el-button v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-button>
</template>

<script setup>
defineOptions({
  name: 'MCButton'
})
</script>
