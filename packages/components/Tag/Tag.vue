<template>
  <el-tag v-bind="$attrs" class="m-tag">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-tag>
</template>

<script setup>
defineOptions({
  name: 'MTag'
})
</script>

<style lang="scss">

</style>