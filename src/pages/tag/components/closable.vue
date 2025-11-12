<demo>
## 可移除标签
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <div class="tag-container">
        <m-tag
          v-for="tag in tags"
          :key="tag.name"
          closable
          :type="tag.type"
          @close="handleClose(tag)"
        >
          {{ tag.label }}
        </m-tag>
      </div>
      <span>Closable Tags</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tags = ref([
  { name: "tag-1", type: "info", label: "Tag 1" },
  { name: "tag-2", type: "danger", label: "Tag 2" },
  { name: "tag-3", type: "primary", label: "Tag 3" },
  { name: "tag-4", type: "success", label: "Tag 4" },
]);

const handleClose = (tag) => {
  const index = tags.value.findIndex((item) => item.name === tag.name);
  if (index > -1) {
    tags.value.splice(index, 1);
  }
};
</script>
<!-- #endregion snippet -->
