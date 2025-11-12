<demo>
## 禁用状态
</demo>
<!-- #region snippet -->
<template>
  <div class="example-switch-block">
    <div class="example-demonstration">设置 disabled 属性，设置为 true 即可禁用。</div>
    <m-switch v-model="disabledSwitch" disabled />
    <m-switch v-model="enabledSwitch" class="ml-2" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const disabledSwitch = ref(true);
const enabledSwitch = ref(true);
</script>

<style scoped lang="scss">
.ml-2 {
  margin-left: 8px;
}
</style>
<!-- #endregion snippet -->

