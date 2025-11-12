<demo>
## 自定义操作图标 2.4.4
</demo>
<!-- #region snippet -->
<template>
  <div class="example-switch-block">
    <div class="example-demonstration">使用 active-action 和 inactive-action 插槽自定义内容。</div>
    <m-switch v-model="model">
      <template #active-action>
        <span class="custom-active-action">T</span>
      </template>
      <template #inactive-action>
        <span class="custom-inactive-action">F</span>
      </template>
    </m-switch>
  </div>
</template>

<script setup>
import { ref } from "vue";

const model = ref(true);
</script>

<style scoped lang="scss">
.custom-active-action,
.custom-inactive-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  font-size: 12px;
  font-weight: 600;
}
</style>
<!-- #endregion snippet -->

