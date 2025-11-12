<demo>
## 日期范围
</demo>
<!-- #region snippet -->
<template>
  <div class="example-datepicker-block">
    <div class="example-demonstration">
      在选择日期范围时，默认情况下左右面板会联动。 如果希望两个面板各自独立切换当前月份，可以使用
      unlink-panels 属性。
    </div>
    <div class="datepicker-demo-container">
      <m-date-picker
        v-model="value"
        type="daterange"
        style-type="solid"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :prefix-icon="customPrefix"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, h } from "vue";
import { MIcon } from "@mc-markets/ui";

const value = ref([]);

const customPrefix = shallowRef({
  render() {
    return h(MIcon, { name: "calendar-clock", size: "20" });
  },
});
</script>
<!-- #endregion snippet -->

