<template>
  <el-card v-bind="$attrs" class="m-card">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-card>
</template>

<script setup>
defineOptions({
  name: 'MCard'
})
</script>

<style lang="scss">
// Card 组件样式 - 使用 m-card 类名隔离样式
.m-card {
  // 自定义样式可以在这里添加
}
</style>