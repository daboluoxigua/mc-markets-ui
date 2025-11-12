<demo>
## 图标和按钮
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-input v-model="value" placeholder="请输入内容">
        <template #prefix>
          <m-icon name="search" size="24" />
        </template>
        <template #suffix>
          <m-button text>获取验证码</m-button>
        </template>
      </m-input>
      <span>前缀与后缀</span>
    </div>
    <div class="doc-item">
      <m-input v-model="value" placeholder="请输入内容">
        <template #append>
          <m-icon name="search" size="24" />
        </template>
        <template #suffix>
          <m-button text>获取验证码</m-button>
        </template>
      </m-input>
      <span>追加与后缀</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
</script>
<!-- #endregion snippet -->

