<demo>
## 路由跳转
</demo>
<!-- #region snippet -->
<template>
  <div class="demo-container">
    <m-breadcrumb :items="items" />

    <div class="demo-content">
      <p>点击上面的面包屑项可以跳转到对应页面</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { label: "首页", to: { path: "/" } },
  { label: "按钮组件", to: { path: "/button" } },
  { label: "输入框组件", to: { path: "/input" } },
  { label: "当前页面" },
]);
</script>
<!-- #endregion snippet -->

