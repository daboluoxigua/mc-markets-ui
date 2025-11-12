<demo>
## 文字描述
</demo>
<!-- #region snippet -->
<template>
  <div class="example-switch-block">
    <m-switch
      v-model="monthly"
      class="mb-2"
      active-text="Pay by month"
      inactive-text="Pay by year"
    />
    <br />
    <m-switch v-model="yesOrNo" inline-prompt active-text="是" inactive-text="否" />
    <div class="example-demonstration">
      使用 active-text 和 inactive-text 属性设置开关文字描述。inline-prompt 控制文本是否显示在点内。
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const monthly = ref(false);
const yesOrNo = ref(true);
</script>

<style scoped lang="scss">
.mb-2 {
  margin-bottom: 8px;
}
</style>
<!-- #endregion snippet -->

