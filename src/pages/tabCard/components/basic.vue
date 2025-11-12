<demo>
## 基础用法
</demo>
<!-- #region snippet -->
<template>
  <div class="demo-container">
    <m-tab-card v-model="activeTab" :options="tabOptions" @change="handleTabChange" />

    <div class="demo-content">
      <p>
        当前选中的标签:
        <strong>{{ activeTab }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("transaction");
const tabOptions = [
  { label: "交易流水", name: "transaction" },
  { label: "资金记录", name: "fund" },
];

const handleTabChange = (newValue, oldValue) => {
  console.log("标签切换:", { newValue, oldValue });
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
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--border-primary);

  p {
    margin: 0;
  }
}
</style>
<!-- #endregion snippet -->
