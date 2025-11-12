<demo>
## 自定义动作图标 2.3.9
</demo>
<!-- #region snippet -->
<template>
  <div class="example-switch-block">
    <div class="example-demonstration">使用 inactive-action-icon 和 active-action-icon 属性来添加图标。</div>
    <m-switch v-model="model" :active-action-icon="View" :inactive-action-icon="Hide" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { View, Hide } from "@element-plus/icons-vue";

const model = ref(true);
</script>
<!-- #endregion snippet -->

