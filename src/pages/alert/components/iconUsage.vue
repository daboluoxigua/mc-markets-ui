<demo>
## 使用图标
</demo>
<!-- #region snippet -->
<template>
  <div class="example-alert-block">
    <div class="example-demonstration">
      你可以通过为 Alert 组件添加图标来提高可读性。通过设置 show-icon 属性来显示 Alert 的 icon，
      这能更有效地向用户展示你的显示意图。或者你可以使用 icon slot 自定义 icon 内容。
    </div>
    <div class="alert-demo-container">
      <m-alert title="Success alert" type="success" show-icon />
      <m-alert title="Warning alert" type="warning" show-icon />
      <m-alert title="Error alert" type="error" show-icon />
      <m-alert title="Error alert with custom icon" type="error" show-icon>
        <template #icon>
          <Bell />
        </template>
      </m-alert>
    </div>
  </div>
</template>

<script setup>
import { Bell } from "@element-plus/icons-vue";
</script>
<!-- #endregion snippet -->

