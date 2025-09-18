<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      :width="width"
      :title="title"
      :draggable="draggable"
      :close-on-click-modal="closeOnClickModal"
      :center="center"
      v-bind="$attrs"
      class="m-dialog"
      header-class="m-header"
    >测试组
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

</script>

<style scoped lang="scss">
:deep(.m-dialog) {
  --el-dialog-padding-primary:24px;
  --el-dialog-title-font-size:24px;
  --el-dialog-border-radius:16px;
  --el-dialog-bg-color:var(--bg-tertiary);
}

:deep(.m-header) {
  padding-bottom: 24px;
  padding-right: 0;

  .el-dialog__title {
    line-height: 32px;
    font-weight: 600;
    color: var(--text-primary);
  }

  .el-dialog__headerbtn {
    width: 24px;
    height: 24px;
    right: 22px;
    top: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-dialog__close {
      font-size: 20px;
      color: var(--icon-tertiary);
    }

    &:hover{
      .el-dialog__close{
        color: var(--bg-brand-hover);
      }
    }
  }
}

:deep(.el-dialog__footer) {
  display: flex;
  >.el-button{
    flex: 1;
  }
}
</style>
