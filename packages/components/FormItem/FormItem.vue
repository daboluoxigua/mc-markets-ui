<template>
  <el-form-item v-bind="$attrs" class="m-form-item">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'MFormItem'
})
</script>

<style lang="scss">
// FormItem 组件样式 - 使用 m-form-item 类名隔离样式
.m-form-item {
  // 自定义样式可以在这里添加
}
</style>