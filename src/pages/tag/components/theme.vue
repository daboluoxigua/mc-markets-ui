<demo>
## 主题
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <div class="theme-container">
        <span class="theme-label">Dark</span>
        <m-tag v-for="item in themeItems" :key="`dark-${item.label}`" :type="item.type" effect="dark">
          {{ item.label }}
        </m-tag>
      </div>
      <span>Dark Theme</span>
    </div>
    <div class="doc-item">
      <div class="theme-container">
        <span class="theme-label">Light</span>
        <m-tag v-for="item in themeItems" :key="`light-${item.label}`" :type="item.type" effect="light">
          {{ item.label }}
        </m-tag>
      </div>
      <span>Light Theme</span>
    </div>
    <div class="doc-item">
      <div class="theme-container">
        <span class="theme-label">Plain</span>
        <m-tag v-for="item in themeItems" :key="`plain-${item.label}`" :type="item.type" effect="plain">
          {{ item.label }}
        </m-tag>
      </div>
      <span>Plain Theme</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const themeItems = ref([
  { type: "info", label: "Tag 1" },
  { type: "danger", label: "Tag 2" },
  { type: "primary", label: "Tag 3" },
  { type: "success", label: "Tag 4" },
]);
</script>
<!-- #endregion snippet -->
