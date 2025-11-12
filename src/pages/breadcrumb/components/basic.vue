<demo>
## 基础用法
</demo>
<!-- #region snippet -->
<template>
  <div class="demo-container">
    <m-breadcrumb :items="items" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { label: "总览", to: { path: "/" } },
  { label: "资金记录" },
]);
</script>
<!-- #endregion snippet -->

