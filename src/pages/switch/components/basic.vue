<demo>
## 基础用法
</demo>
<!-- #region snippet -->
<template>
  <div class="example-switch-block">
    <div class="example-demonstration">
      绑定 v-model 到一个 Boolean 类型的变量。
      可以使用 --el-switch-on-color 和 --el-switch-off-color 来设置开关的背景色。
    </div>
    <m-switch v-model="model" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const model = ref(true);
</script>
<!-- #endregion snippet -->

