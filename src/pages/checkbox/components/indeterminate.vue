<demo>
## 中间状态
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
      >
        Check all
      </m-checkbox>
      <m-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <m-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
          {{ city }}
        </m-checkbox>
      </m-checkbox-group>
      <span>全选功能</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(["Shanghai", "Beijing"]);

const handleCheckAllChange = (val) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
</script>
<!-- #endregion snippet -->

