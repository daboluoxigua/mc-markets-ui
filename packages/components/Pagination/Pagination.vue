
<template>
  <el-pagination v-bind="$attrs" class="m-pagination">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-pagination>
</template>

<script setup>
defineOptions({
  name: 'MPagination'
})
</script>

<style lang="scss">
.m-pagination {
  &.is-background .el-pager li.is-active{
    color: var(--text-quaternary) !important;
  }
}
</style>

