<template>
  <el-form v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-form>
</template>

<script setup>
defineOptions({
  name: 'MForm'
})
</script>
