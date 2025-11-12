<demo>
## 字数限制
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-input
        v-model="value"
        placeholder="最多输入10个字符"
        :maxlength="10"
        :show-word-limit="true"
      ></m-input>
      <span>显示字数限制</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
</script>
<!-- #endregion snippet -->

