<template>
  <el-table v-bind="$attrs" ref="innerTableRef">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-table>
</template>

<script setup>
import { useExposeRef } from '@packages/hooks/useExposeRef.js'

defineOptions({
  name: "MTable",
});

const { innerRef: innerTableRef, exposedProxy } = useExposeRef('innerTableRef')

defineExpose(exposedProxy)
</script>
<style lang="scss">
// Table 组件样式 - 无边框设计

</style>
