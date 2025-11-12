<demo>
## 基础用法
</demo>
<!-- #region snippet -->
<template>
  <div class="example-datepicker-block">
    <div class="example-demonstration">选择日期的基本用法。 前缀图标有修改</div>
    <div class="datepicker-demo-container">
      <m-date-picker
        v-model="value"
        type="date"
        placeholder="Pick a day"
        size="small"
        style-type="solid"
        :prefix-icon="customPrefix"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, shallowRef, h } from "vue";
import { MIcon } from "@mc-markets/ui";

const value = ref("");

const customPrefix = shallowRef({
  render() {
    return h(MIcon, { name: "calendar-clock", size: "20" });
  },
});
</script>
<!-- #endregion snippet -->

