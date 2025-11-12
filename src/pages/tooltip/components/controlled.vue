<demo>
## 受控模式
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-tooltip
        v-model:visible="controlledVisible"
        content="This is a controlled tooltip"
        placement="top"
      >
        <m-button>Controlled Tooltip</m-button>
      </m-tooltip>
      <span>Controlled</span>
    </div>
    <div class="doc-item">
      <m-button @click="controlledVisible = !controlledVisible">Toggle Tooltip</m-button>
      <span>Toggle Button</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const controlledVisible = ref(false);
</script>
<!-- #endregion snippet -->

