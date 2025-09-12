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
