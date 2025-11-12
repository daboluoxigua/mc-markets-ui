<demo>
## 自定义动画 2.10.5
</demo>
<!-- #region snippet -->
<template>
  <div class="example-dialog-block">
    <div class="example-demonstration">
      通过设置 transition 属性可以自定义对话框的动画效果。
    </div>
    <div class="dialog-demo-container">
      <m-button plain @click="visible = true">open the Dialog</m-button>

      <m-dialog v-model="visible" title="Notice" width="500" transition="dialog-fade">
        <span>Notice: custom transition</span>
        <template #footer>
          <div class="dialog-footer">
            <m-button @click="visible = false">Cancel</m-button>
            <m-button type="primary" @click="visible = false">Confirm</m-button>
          </div>
        </template>
      </m-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
</script>
<!-- #endregion snippet -->

