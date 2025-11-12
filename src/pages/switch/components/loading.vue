<demo>
## 加载状态
</demo>
<!-- #region snippet -->
<template>
  <div class="example-switch-block">
    <div class="example-demonstration">设置 loading 属性，设为 true 即加载中状态。</div>
    <m-switch v-model="loadingSwitch1" loading />
    <m-switch v-model="loadingSwitch2" loading class="ml-2" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const loadingSwitch1 = ref(true);
const loadingSwitch2 = ref(false);
</script>

<style scoped lang="scss">
.ml-2 {
  margin-left: 8px;
}
</style>
<!-- #endregion snippet -->

