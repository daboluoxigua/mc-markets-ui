<template>
  <div>
    <el-dialog
      ref="dialogRef"
      v-model="dialogVisible"
      :width="width"
      :title="title"
      :draggable="draggable"
      :close-on-click-modal="closeOnClickModal"
      :center="center"
      v-bind="$attrs"
      class="m-dialog"
      header-class="m-header"
    >
      <template v-if="$slots.header" #header="{ close, titleId, titleClass }">
        <slot name="header" v-bind="{ close, titleId, titleClass }"></slot>
      </template>
      <slot name="default"></slot>
      <template v-if="$slots.footer" #footer class="m-footer">
        <slot name="footer"></slot>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { useExposeRef } from '@packages/hooks/useExposeRef.js'

defineOptions({
  name: 'MDialog'
})
const props = defineProps({
  width: {
    type: String,
    default: '440px'
  },
  center: {
    type: Boolean,
    default: true
  },
  draggable: {
    type: Boolean,
    default: true
  },
  closeOnClickModal: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['close'])
const dialogVisible = defineModel('modelValue', {
  type: Boolean,
  default: false
})

const { innerRef: dialogRef, exposedProxy } = useExposeRef('dialogRef')

defineExpose(exposedProxy)
</script>

<style scoped lang="scss">

</style>
