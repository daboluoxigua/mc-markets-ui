<demo>
## 带输入限制
</demo>
<!-- #region snippet -->
<template>
  <div class="example-datepicker-block">
    <div class="example-demonstration">
      通过 disabled-date 设置禁用状态，参数为当前日期，要求返回 Boolean。
    </div>
    <div class="datepicker-demo-container">
      <m-date-picker
        v-model="value"
        type="date"
        placeholder="Pick a day"
        :disabled-date="disabledDate"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");

const disabledDate = (time) => {
  return time.getTime() > Date.now();
};
</script>
<!-- #endregion snippet -->

