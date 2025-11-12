<demo>
## 图标库展示
</demo>
<!-- #region snippet -->
<template>
  <div>
    <div class="search-container">
      <input
        v-model="searchKeyword"
        type="text"
        placeholder="搜索图标名称..."
        class="search-input"
      />
    </div>
    <div v-if="isLoading" class="loading-container">
      <div class="loading-spinner">
        <div class="spinner"></div>
        <p>加载图标中... ({{ displayIcons.length }}/{{ iconList.length }})</p>
      </div>
    </div>
    <div v-else class="all-icons-grid">
      <div
        v-for="icon in filteredIcons"
        :key="icon.name"
        class="icon-item"
        :class="{ active: selectedIcon === icon.name }"
        @click="selectIcon(icon.name)"
      >
        <m-icon :name="icon.name" :size="24" />
        <span class="icon-class" @click.stop="copyIconClass(`icon-${icon.fontClass}`)">
          icon-{{ icon.fontClass }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from "vue";
import { iconList, searchIcons } from "@/utils/icon-types.js";
import { copyWithMessage } from "@/utils/clipboard.js";
import { Message } from "@mc-markets/ui";

const searchKeyword = ref("");
const selectedIcon = ref("home-filled");
const displayIcons = ref([]);
const isLoading = ref(true);

const filteredIcons = computed(() => {
  if (!searchKeyword.value) {
    return displayIcons.value;
  }
  return searchIcons(searchKeyword.value);
});

onMounted(() => {
  nextTick(() => {
    const batchSize = 20;
    const totalIcons = iconList.length;
    let currentIndex = 0;

    const loadBatch = () => {
      const endIndex = Math.min(currentIndex + batchSize, totalIcons);
      const batch = iconList.slice(currentIndex, endIndex);
      displayIcons.value.push(...batch);
      currentIndex = endIndex;

      if (currentIndex < totalIcons) {
        requestAnimationFrame(loadBatch);
      } else {
        isLoading.value = false;
      }
    };

    loadBatch();
  });
});

const selectIcon = (iconName) => {
  selectedIcon.value = iconName;
  Message.success("复制成功");
};

const copyIconClass = async (className) => {
  try {
    await copyWithMessage(className, {
      onMessage: (message) => {
        Message.success(message);
      },
    });
  } catch (error) {
    Message.error("复制失败，请手动复制");
  }
};
</script>
<!-- #endregion snippet -->

