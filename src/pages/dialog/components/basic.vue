<demo>
## 基础用法
</demo>
<!-- #region snippet -->
<template>
  <div class="example-dialog-block">
    <div class="example-demonstration">
      Dialog 弹出一个对话框，适合需要定制性更大的场景。需要设置 v-model
      属性，它接收 Boolean，当为 true 时显示 Dialog。
    </div>
    <div class="dialog-demo-container">
      <m-button plain @click="dialogVisible = true">Click to open the Dialog</m-button>

      <m-dialog v-model="dialogVisible" title="Tips" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
          <div class="dialog-footer">
            <m-button @click="dialogVisible = false">Cancel</m-button>
            <m-button type="primary" @click="dialogVisible = false">Confirm</m-button>
          </div>
        </template>
      </m-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";

const dialogVisible = ref(false);

const handleClose = (done) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done();
    })
    .catch(() => {});
};
</script>
<!-- #endregion snippet -->

