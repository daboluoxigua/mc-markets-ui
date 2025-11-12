<demo>
## 自定义输入框
</demo>
<!-- #region snippet -->
<template>
  <div class="example-datepicker-block">
    <div class="example-demonstration">通过 slot 可以自定义输入框的内容。</div>
    <div class="datepicker-demo-container">
      <m-date-picker v-model="value" type="date" placeholder="Pick a day">
        <template #default="{ cellValue, cell }">
          <div class="cell" :class="{ current: cell && cell.type === 'current' }">
            <span class="text">{{ cell ? cell.text : cellValue }}</span>
            <span v-if="cell && cell.type === 'current'" class="holiday" />
          </div>
        </template>
      </m-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
</script>

<style scoped lang="scss">
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;
  position: relative;

  .text {
    width: 24px;
    height: 24px;
    display: block;
    margin: 0 auto;
    line-height: 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }

  &.current {
    .text {
      background: #409eff;
      color: #fff;
    }
  }

  .holiday {
    position: absolute;
    right: 5px;
    top: 0;
    width: 0;
    height: 0;
    border-top: 6px solid #f56c6c;
    border-right: 6px solid transparent;
  }
}
</style>
<!-- #endregion snippet -->

