<demo>
## 当只有一页时隐藏分页
</demo>
<!-- #region snippet -->
<template>
  <div class="example-pagination-block">
    <div class="example-demonstration">
      <m-switch v-model="hideSinglePage" />
      <hr class="my-4" />
      <m-pagination
        :hide-on-single-page="hideSinglePage"
        :total="5"
        layout="prev, pager, next"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hideSinglePage = ref(false);
</script>

<style scoped lang="scss">
.example-demonstration {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.my-4 {
  margin: 16px 0;
}
</style>
<!-- #endregion snippet -->

