<template>
  <el-table-column v-bind="$attrs" class="m-table-column">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-table-column>
</template>

<script setup>
defineOptions({
  name: "MTableColumn",
});
</script>

<style lang="scss">
// TableColumn 组件样式
.m-table-column.el-table-column {
  // 继承父级 Table 组件的样式
}
</style>
