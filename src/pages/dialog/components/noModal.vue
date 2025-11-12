<demo>
## 模态框
</demo>
<!-- #region snippet -->
<template>
  <div class="example-dialog-block">
    <div class="example-demonstration">
      通过设置 modal 属性可以控制是否需要遮罩层。
    </div>
    <div class="dialog-demo-container">
      <m-button plain @click="visible = true">open the Dialog</m-button>

      <m-dialog v-model="visible" title="Notice" width="500" :modal="false">
        <span>Notice: no modal</span>
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

