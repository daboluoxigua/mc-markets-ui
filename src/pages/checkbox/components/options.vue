<demo>
## Options 属性
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-checkbox-group v-model="checkList" :options="options" />
      <span>使用 options 属性</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const options = [
  { label: "Option A", value: "Value A" },
  { label: "Option B", value: "Value B" },
  { label: "Option C", value: "Value C" },
  { label: "disabled", value: "Value disabled", disabled: true },
  {
    label: "selected and disabled",
    value: "Value selected and disabled",
    disabled: true,
  },
];

const checkList = ref(["Value selected and disabled", "Value A"]);
</script>
<!-- #endregion snippet -->

