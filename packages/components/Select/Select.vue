<template>
  <el-select
    ref="selectRef"
    class="m-select"
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
import { useExposeRef } from '@packages/hooks/useExposeRef.js'

defineOptions({
  name: "MSelect",
});

const { innerRef: selectRef, exposedProxy } = useExposeRef('selectRef')

defineExpose(exposedProxy)
</script>

<style lang="scss" scoped>

</style>
