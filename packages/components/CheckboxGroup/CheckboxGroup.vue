<template>
  <el-checkbox-group 
    v-bind="$attrs" 
    class="m-checkbox-group"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-checkbox-group>
</template>

<script setup>
defineOptions({
  name: 'MCheckboxGroup'
})
</script>

<style lang="scss">
// CheckboxGroup 组件样式 - 使用 m-checkbox-group 类名隔离样式
.m-checkbox-group {
  // 自定义样式可以在这里添加
}
</style>