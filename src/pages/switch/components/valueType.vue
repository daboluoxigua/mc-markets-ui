<demo>
## 扩展的 value 类型
</demo>
<!-- #region snippet -->
<template>
  <div class="example-switch-block">
    <div class="example-demonstration">
      你可以设置 active-value 和 inactive-value，接受 Boolean、String 或 Number 类型的值。
    </div>
    <m-tooltip :content="'Switch value: ' + value" placement="top">
      <m-switch
        v-model="value"
        style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
        active-value="100"
        inactive-value="0"
      />
    </m-tooltip>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("100");
</script>
<!-- #endregion snippet -->

