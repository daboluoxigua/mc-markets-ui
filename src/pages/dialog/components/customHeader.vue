<demo>
## 自定义头部
</demo>
<!-- #region snippet -->
<template>
  <div class="example-dialog-block">
    <div class="example-demonstration">
      header 插槽可用于自定义标题区域。使用 title 属性或 titleId 插槽属性，有助于保持可访问性。
    </div>
    <div class="dialog-demo-container">
      <m-button plain @click="visible = true">Open Dialog with customized header</m-button>

      <m-dialog v-model="visible" :show-close="false" width="500">
        <template #header="{ close, titleId, titleClass }">
          <div class="my-header">
            <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
            <m-button type="danger" @click="close">
              <m-icon class="el-icon--left">
                <CircleCloseFilled />
              </m-icon>
              close
            </m-button>
          </div>
        </template>
        <span>This is a message</span>
      </m-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { CircleCloseFilled } from "@element-plus/icons-vue";

const visible = ref(false);
</script>
<!-- #endregion snippet -->

