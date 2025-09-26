<template>
  <el-tabs v-bind="$attrs" class="m-tabs">
    <!-- 其他插槽 -->
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-tabs>
</template>

<script>
export default {
  name: "MTabs",
};
</script>

<style lang="scss">
// Tabs 基础样式
// 如需自定义样式，可以在这里添加
</style>