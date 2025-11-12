<demo>
## 禁用状态
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-checkbox v-model="disabledUnchecked" disabled>Disabled</m-checkbox>
      <span>禁用未选中</span>
    </div>
    <div class="doc-item">
      <m-checkbox v-model="disabledChecked" disabled>Disabled</m-checkbox>
      <span>禁用已选中</span>
    </div>
    <div class="doc-item">
      <m-checkbox v-model="normalChecked">Not disabled</m-checkbox>
      <span>正常状态</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const disabledUnchecked = ref(false);
const disabledChecked = ref(true);
const normalChecked = ref(true);
</script>
<!-- #endregion snippet -->

