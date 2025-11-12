<demo>
## 多选日期
</demo>
<!-- #region snippet -->
<template>
  <div class="example-datepicker-block">
    <div class="example-demonstration">通过 dates 类型可以开启多选日期模式。</div>
    <div class="datepicker-demo-container">
      <m-date-picker v-model="value" type="dates" placeholder="Pick one or more dates" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([]);
</script>
<!-- #endregion snippet -->

