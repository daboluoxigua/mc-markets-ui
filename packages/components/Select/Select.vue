<template>
  <el-select
    ref="selectRef"
    class="m-select"
    :show-arrow="false"
    v-bind="$attrs"
    :class="{ solid: styleType === 'solid' }"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-select>
</template>

<script setup>
import { useExposeRef } from '@packages/hooks/useExposeRef.js'
const props = defineProps({
  styleType: {
    type: String,
  },
});
defineOptions({
  name: "MSelect",
});

const { innerRef: selectRef, exposedProxy } = useExposeRef('selectRef')

defineExpose(exposedProxy)
</script>

<style lang="scss" scoped>

</style>
