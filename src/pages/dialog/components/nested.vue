<demo>
## 嵌套的对话框
</demo>
<!-- #region snippet -->
<template>
  <div class="example-dialog-block">
    <div class="example-demonstration">
      如果需要在一个 Dialog 内部嵌套另一个 Dialog，必须为内层 Dialog 设置 append-to-body。
    </div>
    <div class="dialog-demo-container">
      <m-button plain @click="outerVisible = true">open the outer Dialog</m-button>

      <m-dialog v-model="outerVisible" title="Outer Dialog" width="500">
        <m-dialog
          v-model="innerVisible"
          width="30%"
          title="Inner Dialog"
          append-to-body
        />
        <template #footer>
          <div class="dialog-footer">
            <m-button @click="outerVisible = false">Cancel</m-button>
            <m-button type="primary" @click="innerVisible = true">
              open the inner Dialog
            </m-button>
          </div>
        </template>
      </m-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const outerVisible = ref(false);
const innerVisible = ref(false);
</script>
<!-- #endregion snippet -->

