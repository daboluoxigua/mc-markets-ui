<template>
  <el-dialog v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-dialog>
</template>

<script setup>
defineOptions({
  name: 'MDialog'
})
</script>
