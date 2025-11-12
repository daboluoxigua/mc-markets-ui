<demo>
## 基础用法
</demo>
<!-- #region snippet -->
<template>
  <div class="example-radio-block">
    <div class="example-demonstration">
      单选框不应该有太多的可选项，如果你有很多的可选项你应该使用选择框而不是单选框。
    </div>
    <div class="mb-2 ml-4">
      <m-radio-group v-model="radioLarge">
        <m-radio value="1" size="large">Option 1</m-radio>
        <m-radio value="2" size="large">Option 2</m-radio>
      </m-radio-group>
    </div>
    <div class="my-2 ml-4">
      <m-radio-group v-model="radioDefault">
        <m-radio value="1">Option 1</m-radio>
        <m-radio value="2">Option 2</m-radio>
      </m-radio-group>
    </div>
    <div class="my-4 ml-4">
      <m-radio-group v-model="radioSmall">
        <m-radio value="1" size="small">Option 1</m-radio>
        <m-radio value="2" size="small">Option 2</m-radio>
      </m-radio-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const radioLarge = ref("1");
const radioDefault = ref("1");
const radioSmall = ref("1");
</script>

<style scoped lang="scss">
.example-radio-block {
  .example-demonstration {
    margin-bottom: 16px;
  }
}

.mb-2 {
  margin-bottom: 8px;
}

.my-2 {
  margin: 8px 0;
}

.my-4 {
  margin: 16px 0;
}

.ml-4 {
  margin-left: 16px;
}
</style>
<!-- #endregion snippet -->

