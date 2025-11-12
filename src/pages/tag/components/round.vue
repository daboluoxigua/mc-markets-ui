<demo>
## 圆形标签
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <div class="theme-container">
        <m-tag v-for="item in themeItems" :key="`round-dark-${item.label}`" :type="item.type" effect="dark" round>
          {{ item.label }}
        </m-tag>
      </div>
      <span>Round Dark</span>
    </div>
    <div class="doc-item">
      <div class="theme-container">
        <m-tag v-for="item in themeItems" :key="`round-light-${item.label}`" :type="item.type" effect="light" round>
          {{ item.label }}
        </m-tag>
      </div>
      <span>Round Light</span>
    </div>
    <div class="doc-item">
      <div class="theme-container">
        <m-tag v-for="item in themeItems" :key="`round-plain-${item.label}`" :type="item.type" effect="plain" round>
          {{ item.label }}
        </m-tag>
      </div>
      <span>Round Plain</span>
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
