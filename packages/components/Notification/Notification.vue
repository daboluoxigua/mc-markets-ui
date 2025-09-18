<template>
  <el-notification v-bind="$attrs" class="mc-notification">
    <!-- 其他插槽 -->
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-notification>
</template>

<script>
export default {
  name: "MNotification",
};
</script>

<style lang="scss">
// Notification 基础样式
// 如需自定义样式，可以在这里添加
</style>
