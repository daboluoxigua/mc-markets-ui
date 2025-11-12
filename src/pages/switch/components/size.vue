<demo>
## 尺寸
</demo>
<!-- #region snippet -->
<template>
  <div class="example-switch-block">
    <div class="example-demonstration">设置 size 属性，接受 large 或 small</div>
    <m-switch v-model="large" size="large" active-text="Open" inactive-text="Close" />
    <br />
    <m-switch v-model="defaultValue" active-text="Open" inactive-text="Close" />
    <br />
    <m-switch v-model="small" size="small" active-text="Open" inactive-text="Close" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const large = ref(true);
const defaultValue = ref(true);
const small = ref(true);
</script>
<!-- #endregion snippet -->

