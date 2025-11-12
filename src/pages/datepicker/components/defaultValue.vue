<demo>
## 默认显示日期
</demo>
<!-- #region snippet -->
<template>
  <div class="example-datepicker-block">
    <div class="example-demonstration">
      通过 default-value 设置默认的日期。default-value 的值需要根据 type 类型传入对应格式的值。
    </div>
    <div class="datepicker-demo-container">
      <m-date-picker
        v-model="value"
        type="daterange"
        start-placeholder="Start Date"
        end-placeholder="End Date"
        :default-value="defaultValue"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref([]);
const defaultValue = ref([new Date(2024, 9, 1), new Date(2024, 9, 7)]);
</script>
<!-- #endregion snippet -->

