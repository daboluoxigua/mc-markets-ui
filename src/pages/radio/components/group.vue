<demo>
## 单选框组
</demo>
<!-- #region snippet -->
<template>
  <div class="example-radio-block">
    <div class="example-demonstration">适用于在多个互斥的选项中选择的场景</div>
    <m-radio-group v-model="radio">
      <m-radio :value="3">Option A</m-radio>
      <m-radio :value="6">Option B</m-radio>
      <m-radio :value="9">Option C</m-radio>
    </m-radio-group>
  </div>
</template>

<script setup>
import { ref } from "vue";

const radio = ref(3);
</script>

<style scoped lang="scss">
.example-radio-block {
  .example-demonstration {
    margin-bottom: 16px;
  }
}
</style>
<!-- #endregion snippet -->

