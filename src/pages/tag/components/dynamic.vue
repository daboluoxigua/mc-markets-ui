<demo>
## 动态编辑标签
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <div class="tag-container">
        <m-tag
          v-for="tag in dynamicTags"
          :key="tag"
          closable
          type="primary"
          :disable-transitions="false"
          @close="handleDynamicClose(tag)"
        >
          {{ tag }}
        </m-tag>
        <m-input
          v-if="inputVisible"
          ref="inputRef"
          v-model="inputValue"
          class="tag-input"
          size="small"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <m-button v-else class="button-new-tag" size="small" @click="showInput">
          + New Tag
        </m-button>
      </div>
      <span>Dynamic Tags</span>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";

const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);
const inputVisible = ref(false);
const inputValue = ref("");
const inputRef = ref();

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

const handleDynamicClose = (tag) => {
  const index = dynamicTags.value.indexOf(tag);
  if (index > -1) {
    dynamicTags.value.splice(index, 1);
  }
};

const handleInputConfirm = () => {
  const value = inputValue.value.trim();
  if (value && !dynamicTags.value.includes(value)) {
    dynamicTags.value.push(value);
  }
  inputVisible.value = false;
  inputValue.value = "";
};
</script>
<!-- #endregion snippet -->
