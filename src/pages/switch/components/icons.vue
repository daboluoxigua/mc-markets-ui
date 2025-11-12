<demo>
## 显示自定义图标
</demo>
<!-- #region snippet -->
<template>
  <div class="example-switch-block">
    <div class="example-demonstration">
      使用 inactive-icon 和 active-icon 属性来添加图标。 inline-prompt 控制图标显示在点内。
    </div>
    <m-switch v-model="normalIcon" :active-icon="Check" :inactive-icon="Close" />
    <br />
    <m-switch
      v-model="inlineIcon"
      class="mt-2"
      style="margin-left: 24px"
      inline-prompt
      :active-icon="Check"
      :inactive-icon="Close"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Check, Close } from "@element-plus/icons-vue";

const normalIcon = ref(true);
const inlineIcon = ref(true);
</script>

<style scoped lang="scss">
.mt-2 {
  margin-top: 8px;
}
</style>
<!-- #endregion snippet -->

