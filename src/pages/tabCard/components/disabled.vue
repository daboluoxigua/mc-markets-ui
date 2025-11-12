<demo>
## 禁用状态
</demo>
<!-- #region snippet -->
<template>
  <div class="demo-container">
    <m-tab-card
      v-model="activeTab"
      :options="tabOptions"
      :disabled="isDisabled"
    />

    <div class="demo-content">
      <m-button @click="toggleDisabled">
        {{ isDisabled ? "启用" : "禁用" }} 整体组件
      </m-button>
      <p>
        当前选中的标签:
        <strong>{{ activeTab }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("active");
const isDisabled = ref(false);
const tabOptions = [
  { label: "活跃", name: "active" },
  { label: "禁用", name: "disabled", disabled: true },
  { label: "正常", name: "normal" },
];

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value;
};
</script>

<style scoped lang="scss">
.demo-container {
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: 24px;
  gap: 16px;
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--border-primary);

  p {
    margin: 0;
  }
}
</style>
<!-- #endregion snippet -->
