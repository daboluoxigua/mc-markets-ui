<demo>
## 内容居中
</demo>
<!-- #region snippet -->
<template>
  <div class="example-dialog-block">
    <div class="example-demonstration">
      通过设置 center 属性可以让 Dialog 的 header 和 footer 部分居中排列。
    </div>
    <div class="dialog-demo-container">
      <m-button plain @click="visible = true">open the Dialog</m-button>

      <m-dialog v-model="visible" title="Warning" width="500" center>
        <span>
          It should be noted that the content will not be aligned to center by default
        </span>
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

