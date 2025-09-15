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
// Tag 组件样式 - 使用 m-tag 类名隔离样式
.m-tag {
  // 自定义样式可以在这里添加
}
</style>