<template>
  <el-tab-pane v-bind="$attrs" class="m-tab-pane">
    <!-- 其他插槽 -->
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-tab-pane>
</template>

<script>
export default {
  name: "MTabPane",
};
</script>

<style lang="scss">
// TabPane 基础样式
// 如需自定义样式，可以在这里添加
</style>