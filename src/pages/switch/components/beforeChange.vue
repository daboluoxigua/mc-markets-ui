<demo>
## 阻止切换
</demo>
<!-- #region snippet -->
<template>
  <div class="example-switch-block">
    <div class="example-demonstration">
      设置 before-change 属性，若返回 false 或 Promise 被 reject，则停止切换。
    </div>
    <m-switch v-model="switchA" :loading="loadingA" :before-change="beforeChangeA" />
    <m-switch v-model="switchB" class="ml-2" :loading="loadingB" :before-change="beforeChangeB" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const switchA = ref(false);
const switchB = ref(false);
const loadingA = ref(false);
const loadingB = ref(false);

const beforeChangeA = () => {
  loadingA.value = true;
  return new Promise((resolve) => {
    setTimeout(() => {
      loadingA.value = false;
      resolve(true);
    }, 1000);
  });
};

const beforeChangeB = () => {
  loadingB.value = true;
  return new Promise((_, reject) => {
    setTimeout(() => {
      loadingB.value = false;
      reject(new Error("Error"));
    }, 1000);
  });
};
</script>

<style scoped lang="scss">
.ml-2 {
  margin-left: 8px;
}
</style>
<!-- #endregion snippet -->

