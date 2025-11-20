<demo>
## 基础
</demo>
<!-- #region snippet -->
<template>
  <m-input v-model="value" placeholder="请选择城市" @click="show = true" readonly>
    <template #suffix>
        <m-icon name="chevron-down" />
    </template>
  </m-input>
  <m-picker
    title="请选择城市"
    v-model="value"
    v-model:show="show"
    :columns="columns"
    :columns-field-names="{ label: 'text', value: 'value' }"
    @confirm="handleConfirm"
  >
    <template #label="{ item }">
      <img :src="item.icon" style="width: 20px; height: 20px; border-radius: 50%;" />
      <span>{{ item.text }}</span>
    </template>
    <template #default>
      xxxxxxxx
    </template>
  </m-picker>
</template>
<script setup>
import { MPicker, MIcon } from "@mc-markets/ui";

const show = ref(false);
const value = ref('Hangzhou');
const selected = ref(null);
const columns = [
  { text: "杭州", value: "Hangzhou", icon: "https://img.yzcdn.cn/vant/apple-1.jpg" },
  { text: "宁波", value: "Ningbo", icon: "https://img.yzcdn.cn/vant/apple-2.jpg" },
  { text: "温州", value: "Wenzhou", icon: "https://img.yzcdn.cn/vant/apple-3.jpg" },
  { text: "绍兴", value: "Shaoxing", icon: "https://img.yzcdn.cn/vant/apple-4.jpg" },
  { text: "湖州", value: "Huzhou", icon: "https://img.yzcdn.cn/vant/apple-5.jpg" },
];
const handleConfirm = (item) => {
  selected.value = item.text;
  console.log(item);
};
</script>
<style scoped></style>
<!-- #endregion snippet -->
