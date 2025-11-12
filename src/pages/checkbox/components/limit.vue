<demo>
## 可选项目数量的限制
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-checkbox-group v-model="checkedCities" :min="1" :max="2">
        <m-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
          {{ city }}
        </m-checkbox>
      </m-checkbox-group>
      <span>限制选择数量 (1-2个)</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const cities = ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"];
const checkedCities = ref(["Shanghai", "Beijing"]);
</script>
<!-- #endregion snippet -->

