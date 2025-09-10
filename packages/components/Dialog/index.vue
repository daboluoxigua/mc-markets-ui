<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="title"
    :width="width"
    :draggable="draggable"
    :before-close="handleClose"
    v-bind="attrs"
  >
    <template #header="{ close, titleId, titleClass }">
      <slot name="header" :close="close" :titleId="titleId" :titleClass="titleClass"></slot>
    </template>
    <slot></slot>
    <template #footer>
      <slot v-if="$slots.footer" name="footer"></slot>
      <span v-else class="dialog-footer">
        <el-button v-show="cancelButtonText" @click="handleCancel">{{ cancelButtonText }}</el-button>
        <el-button v-show="showConfirmButton" type="primary" @click="handleConfirm">{{ confirmButtonText }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { computed } from 'vue'

// 接受父组件参数
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true
  },
  attrs: {
    type: Object,
    default: () => ({})
  },
  title: {
    type: String,
    default: ""
  },
  width: {
    type: [Number, String],
    default: "520px"
  },
  draggable: {
    type: Boolean,
    default: true
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  showCancelButton: {
    type: Boolean,
    default: true
  },
  confirmButtonText: {
    type: String,
    default: "确认"
  },
  cancelButtonText: {
    type: String,
    default: "取消"
  }
});

const emit = defineEmits(["update:modelValue", "close", "confirm"]);

const handleClose = (done) => {
  emit("update:modelValue", false);
  emit("close");
  done();
};
const handleCancel = () => {
  emit("update:modelValue", false);
  emit("close");
};
const handleConfirm = () => {
  emit("confirm");
};

const dialogVisible = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>
<style scoped></style>
