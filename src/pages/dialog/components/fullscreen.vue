<demo>
## 全屏
</demo>
<!-- #region snippet -->
<template>
  <div class="example-dialog-block">
    <div class="example-demonstration">
      通过设置 fullscreen 属性可以让 Dialog 变为全屏的。
    </div>
    <div class="dialog-demo-container">
      <m-button plain @click="visible = true">open the Dialog</m-button>

      <m-dialog v-model="visible" title="Notice" fullscreen>
        <span>Notice: fullscreen dialog</span>
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

