<demo>
## 行内表单
</demo>
<!-- #region snippet -->
<template>
  <m-form :inline="true" :model="formInline" class="demo-form-inline">
    <m-form-item label="审批人">
      <m-input v-model="formInline.user" placeholder="审批人" />
    </m-form-item>
    <m-form-item label="活动区域">
      <m-select v-model="formInline.region" placeholder="活动区域">
        <m-option label="区域一" value="shanghai" />
        <m-option label="区域二" value="beijing" />
      </m-select>
    </m-form-item>
    <m-form-item>
      <m-button type="primary" @click="onSubmit">查询</m-button>
    </m-form-item>
  </m-form>
</template>

<script setup>
import { reactive } from "vue";

const formInline = reactive({
  user: "",
  region: "",
});

const onSubmit = () => {
  console.log("submit!", formInline);
};
</script>

<style scoped lang="scss">
.demo-form-inline {
  .m-form-item {
    margin-right: 20px;
  }

  :deep(.el-select) {
    --el-select-width: 220px;
  }
}
</style>
<!-- #endregion snippet -->

