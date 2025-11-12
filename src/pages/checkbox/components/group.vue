<demo>
## 多选框组
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-checkbox-group v-model="checkList">
        <m-checkbox label="Option A" value="Value A" />
        <m-checkbox label="Option B" value="Value B" />
        <m-checkbox label="Option C" value="Value C" />
        <m-checkbox label="disabled" value="Value disabled" disabled />
        <m-checkbox
          label="selected and disabled"
          value="Value selected and disabled"
          disabled
        />
      </m-checkbox-group>
      <span>多选框组</span>
      <p>当前值: {{ checkList }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const checkList = ref(["Value selected and disabled", "Value A"]);
</script>
<!-- #endregion snippet -->

