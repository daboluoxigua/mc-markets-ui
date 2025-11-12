<demo>
## Options attribute 2.11.2
</demo>
<!-- #region snippet -->
<template>
  <div class="example-radio-block">
    <div class="example-demonstration">
      Shortcut from basic el-radio-group usage. 您可以通过 props 属性自定义 options 的别名。
    </div>
    <m-radio-group v-model="value" :options="options" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(3);

const options = [
  {
    value: 3,
    label: "Option A",
  },
  {
    value: 6,
    label: "Option B",
  },
  {
    value: 9,
    label: "Option C",
  },
];
</script>

<style scoped lang="scss">
.example-radio-block {
  .example-demonstration {
    margin-bottom: 16px;
  }
}
</style>
<!-- #endregion snippet -->

