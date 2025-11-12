<demo>
## 多选和分组
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-select v-model="multipleValue" placeholder="请选择多个选项" multiple>
        <m-option label="选项一" value="option1" />
        <m-option label="选项二" value="option2" />
        <m-option label="选项三" value="option3" />
        <m-option label="选项四" value="option4" />
      </m-select>
      <span>多选</span>
    </div>
    <div class="doc-item">
      <m-select v-model="groupValue" placeholder="分组选择">
        <m-option-group label="分组一">
          <m-option label="选项一" value="option1" />
          <m-option label="选项二" value="option2" />
        </m-option-group>
        <m-option-group label="分组三">
          <m-option label="选项三" value="option3" />
          <m-option label="选项四" value="option4" />
        </m-option-group>
      </m-select>
      <span>分组选择</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const multipleValue = ref([]);
const groupValue = ref("");
</script>
<!-- #endregion snippet -->

