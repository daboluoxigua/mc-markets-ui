<demo>
## 时间选择器
</demo>
<!-- #region snippet -->
<template>
  <div class="example-datepicker-block">
    <div class="example-demonstration">
      通过 type 属性可以指定 datetime 类型，并且通过 format 属性来指定输入框的格式。
    </div>
    <div class="datepicker-demo-container">
      <m-date-picker v-model="value" type="datetime" placeholder="Pick a time" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
</script>
<!-- #endregion snippet -->

