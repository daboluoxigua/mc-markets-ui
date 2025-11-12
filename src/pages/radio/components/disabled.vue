<demo>
## 禁用状态
</demo>
<!-- #region snippet -->
<template>
  <div class="example-radio-block">
    <div class="example-demonstration">disabled 属性可以用来控制单选框的禁用状态。</div>
    <m-radio v-model="radio" disabled value="disabled">Option A</m-radio>
    <m-radio v-model="radio" disabled value="selected and disabled">Option B</m-radio>
  </div>
</template>

<script setup>
import { ref } from "vue";

const radio = ref("selected and disabled");
</script>

<style scoped lang="scss">
.example-radio-block {
  display: flex;
  flex-direction: column;
  gap: 8px;

  .example-demonstration {
    margin-bottom: 8px;
  }
}
</style>
<!-- #endregion snippet -->

