<template>
  <el-table v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-table>
</template>

<script setup>
defineOptions({
  name: "MTable",
});
</script>
<style lang="scss">
// Table 组件样式 - 无边框设计

</style>
