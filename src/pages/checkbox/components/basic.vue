<demo>
## 基础用法
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-checkbox v-model="checked" label="Option 2" />
      <span>默认尺寸</span>
    </div>
    <div class="doc-item">
      <m-checkbox v-model="checked" size="large" label="Option 2" />
      <span>大尺寸</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checked = ref(false);
</script>
<!-- #endregion snippet -->

