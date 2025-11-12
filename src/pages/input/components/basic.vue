<demo>
## 基础输入框
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-input v-model="value" placeholder="请输入内容"></m-input>
      <span>基础输入框</span>
    </div>
    <div class="doc-item">
      <m-input v-model="value" placeholder="禁用状态" disabled></m-input>
      <span>禁用状态</span>
    </div>
    <div class="doc-item">
      <m-input v-model="value" placeholder="只读状态" readonly></m-input>
      <span>只读状态</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
</script>
<!-- #endregion snippet -->

