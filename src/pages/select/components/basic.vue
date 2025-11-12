<demo>
## 基础选择器
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-select v-model="value" placeholder="请选择">
        <m-option label="选项一" value="option1" />
        <m-option label="选项二" value="option2" />
        <m-option label="选项三" value="option3" />
      </m-select>
      <span>基础选择器</span>
    </div>
    <div class="doc-item">
      <m-select v-model="value" placeholder="禁用状态" disabled>
        <m-option label="选项一" value="option1" />
        <m-option label="选项二" value="option2" />
        <m-option label="选项三" value="option3" />
      </m-select>
      <span>禁用状态</span>
    </div>
    <div class="doc-item">
      <m-select v-model="value" placeholder="可清空" clearable>
        <m-option label="选项一" value="option1" />
        <m-option label="选项二" value="option2" />
        <m-option label="选项三" value="option3" />
      </m-select>
      <span>可清空</span>
    </div>
    <div class="doc-item">
      <m-select
        v-model="value"
        placeholder="可搜索"
        clearable
        filterable
        @change="handleSelectChange"
      >
        <template #header>
          <m-input styleType="solid" v-model="searchValue" placeholder="请输入搜索内容">
            <template #prefix>
              <m-icon name="search" size="24" />
            </template>
          </m-input>
        </template>
        <m-option
          v-for="option in filteredOptions"
          :key="option.value"
          :label="option.label"
          :value="option.value"
        />
      </m-select>
      <span>可搜索</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const value = ref("");
const searchValue = ref("");

const allOptions = [
  { label: "选项一", value: "option1" },
  { label: "选项二", value: "option2" },
  { label: "选项三", value: "option3" },
  { label: "选项四", value: "option4" },
  { label: "选项五", value: "option5" },
  { label: "选项六", value: "option6" },
  { label: "选项七", value: "option7" },
  { label: "选项八", value: "option8" },
];

const filteredOptions = computed(() => {
  if (!searchValue.value) {
    return allOptions;
  }
  const keyword = searchValue.value.toLowerCase();
  return allOptions.filter((option) => option.label.toLowerCase().includes(keyword));
});

const handleSelectChange = (selectedValue) => {
  if (selectedValue) {
    searchValue.value = "";
  }
};
</script>
<!-- #endregion snippet -->

