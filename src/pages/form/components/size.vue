<demo>
## 尺寸控制
</demo>
<!-- #region snippet -->
<template>
  <div class="demo-form-size">
    <div class="size-demo">
      <h4>Large</h4>
      <m-form :model="sizeForm" label-width="100px" size="large">
        <m-form-item label="活动名称">
          <m-input v-model="sizeForm.name" />
        </m-form-item>
        <m-form-item label="活动区域">
          <m-select v-model="sizeForm.region" placeholder="请选择活动区域">
            <m-option label="区域一" value="shanghai" />
            <m-option label="区域二" value="beijing" />
          </m-select>
        </m-form-item>
      </m-form>
    </div>

    <div class="size-demo">
      <h4>Default</h4>
      <m-form :model="sizeForm" label-width="100px">
        <m-form-item label="活动名称">
          <m-input v-model="sizeForm.name" />
        </m-form-item>
        <m-form-item label="活动区域">
          <m-select v-model="sizeForm.region" placeholder="请选择活动区域">
            <m-option label="区域一" value="shanghai" />
            <m-option label="区域二" value="beijing" />
          </m-select>
        </m-form-item>
      </m-form>
    </div>

    <div class="size-demo">
      <h4>Small</h4>
      <m-form :model="sizeForm" label-width="100px" size="small">
        <m-form-item label="活动名称">
          <m-input v-model="sizeForm.name" />
        </m-form-item>
        <m-form-item label="活动区域">
          <m-select v-model="sizeForm.region" placeholder="请选择活动区域">
            <m-option label="区域一" value="shanghai" />
            <m-option label="区域二" value="beijing" />
          </m-select>
        </m-form-item>
      </m-form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const sizeForm = reactive({
  name: "",
  region: "",
});
</script>

<style scoped lang="scss">
.demo-form-size {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  .size-demo {
    flex: 1;
    min-width: 300px;

    h4 {
      margin-bottom: 10px;
      color: var(--text-primary);
    }
  }
}
</style>
<!-- #endregion snippet -->

