<demo>
## 禁用跳转
</demo>
<!-- #region snippet -->
<template>
  <div class="demo-container">
    <m-breadcrumb :items="items" />

    <div class="demo-content">
      <p>没有设置 to 属性的面包屑项不会有点击效果</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { label: "首页" },
  { label: "产品管理" },
  { label: "产品列表" },
  { label: "产品详情" },
]);
</script>
<!-- #endregion snippet -->

