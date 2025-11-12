<demo>
## 基础使用
</demo>
<!-- #region snippet -->
<template>
  <div class="demo-container">
    <div class="button-group">
      <m-button @click="tabsSwitch">切换 tabs</m-button>
      <m-button @click="activeName = 'b'">切换到 b</m-button>
    </div>
    <m-tabs v-model="activeName" @tab-click="handleTabClick" @tab-change="handleTabChange">
      <m-tab-pane
        v-for="tab in tabs"
        :key="tab.name"
        :label="tab.label"
        :name="tab.name"
      >
        {{ tab.content }}
      </m-tab-pane>
    </m-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Message } from "@mc-markets/ui";

const activeName = ref("a");

const tabsData1 = [
  { label: "1", name: "a", content: "a" },
  { label: "2", name: "b", content: "b" },
  { label: "3", name: "c", content: "c" },
  { label: "43444", name: "d", content: "d" },
  { label: "5", name: "e", content: "e" },
  { label: "6", name: "f", content: "f" },
  { label: "7", name: "g", content: "g" },
  { label: "8", name: "h", content: "h" },
  { label: "9", name: "i", content: "i" },
  { label: "10", name: "j", content: "j" },
  { label: "11", name: "k", content: "k" },
  { label: "12", name: "l", content: "l" },
  { label: "13", name: "m", content: "m" },
  { label: "14", name: "n", content: "n" },
  { label: "15", name: "o", content: "o" },
  { label: "16", name: "p", content: "p" },
  { label: "17", name: "q", content: "q" },
  { label: "18", name: "r", content: "r" },
  { label: "19", name: "s", content: "s" },
  { label: "20", name: "t", content: "t" },
  { label: "21", name: "u", content: "u" },
];

const tabsData2 = [
  { label: "4", name: "d", content: "d" },
  { label: "3", name: "c", content: "c" },
  { label: "2", name: "b", content: "b" },
];

const tabs = ref(tabsData1);

const tabsSwitch = () => {
  tabs.value = tabs.value === tabsData1 ? tabsData2 : tabsData1;
  activeName.value = tabs.value[0]?.name ?? "";
};

const handleTabClick = (tabName) => {
  Message.success(`切换到标签: ${tabName}`);
};

const handleTabChange = (newValue, oldValue) => {
  Message.success(`标签从 ${oldValue} 切换到 ${newValue}`);
};
</script>

<style scoped lang="scss">
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
<!-- #endregion snippet -->
