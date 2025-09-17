<template>
  <el-select
    class="m-select2"
    :class="{ solid: $attrs.styleType === 'solid' }"
    :show-arrow="false"
    v-bind="$attrs"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-select>
</template>

<script setup>
defineOptions({
  name: "MSelect",
});
</script>

<style lang="scss" scoped>

</style>
