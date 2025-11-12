<demo>
## 高级扩展
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-tooltip
        :disabled="disabled"
        content="click to close tooltip function"
        placement="bottom"
        effect="light"
      >
        <m-button @click="disabled = !disabled">
          click to {{ disabled ? "active" : "close" }} tooltip function
        </m-button>
      </m-tooltip>
      <span>Click to Toggle</span>
    </div>
    <div class="doc-item">
      <m-tooltip
        content="This is a tooltip with custom transition"
        placement="top"
        transition="el-fade-in-linear"
      >
        <m-button>Custom Transition</m-button>
      </m-tooltip>
      <span>Custom Transition</span>
    </div>
    <div class="doc-item">
      <m-tooltip
        content="This tooltip will show after 1 second"
        placement="top"
        :show-after="1000"
      >
        <m-button>Delayed Show</m-button>
      </m-tooltip>
      <span>Delayed Show</span>
    </div>
    <div class="doc-item">
      <m-tooltip content="This tooltip will hide after 2 seconds" placement="top" :hide-after="2000">
        <m-button>Auto Hide</m-button>
      </m-tooltip>
      <span>Auto Hide</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const disabled = ref(false);
</script>
<!-- #endregion snippet -->

