<template>
  <el-select :show-arrow="false" v-bind="$attrs">
    <!-- 自动渲染所有插槽 -->
    <template v-for="(_, name) in slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-select>
</template>

<script setup lang="ts">
const slots = useSlots()
defineOptions({
  name: 'MCSelect'
})
</script>

<style scoped lang="scss">
.solid{
  --el-border-color:var(--bg-tertiary-hover);
  :deep(.el-select__wrapper){
    background: var(--bg-tertiary-hover);
  }
  :deep(.el-select__caret){
    color: var(--all-base-white);
  }
}


</style>