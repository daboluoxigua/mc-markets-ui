<template>
  <el-option-group v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-option-group>
</template>

<script setup>
defineOptions({
  name: 'MOptionGroup'
})
</script>
