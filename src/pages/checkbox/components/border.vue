<demo>
## 带有边框
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-checkbox-group v-model="checkList">
        <m-checkbox label="Option A" value="Value A" border />
        <m-checkbox label="Option B" value="Value B" border />
        <m-checkbox label="Option C" value="Value C" border />
        <m-checkbox label="disabled" value="Value disabled" border disabled />
        <m-checkbox
          label="selected and disabled"
          value="Value selected and disabled"
          border
          disabled
        />
      </m-checkbox-group>
      <span>带边框样式</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checkList = ref(["Value A"]);
</script>
<!-- #endregion snippet -->

