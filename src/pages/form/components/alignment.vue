<demo>
## 对齐方式
</demo>
<!-- #region snippet -->
<template>
  <div class="demo-form-alignment">
    <div class="alignment-demo">
      <h4>左对齐</h4>
      <m-form :model="alignmentForm" label-width="100px" label-position="left">
        <m-form-item label="活动名称">
          <m-input v-model="alignmentForm.name" />
        </m-form-item>
        <m-form-item label="活动区域">
          <m-select v-model="alignmentForm.region" placeholder="请选择活动区域">
            <m-option label="区域一" value="shanghai" />
            <m-option label="区域二" value="beijing" />
          </m-select>
        </m-form-item>
      </m-form>
    </div>

    <div class="alignment-demo">
      <h4>右对齐</h4>
      <m-form :model="alignmentForm" label-width="100px" label-position="right">
        <m-form-item label="活动名称">
          <m-input v-model="alignmentForm.name" />
        </m-form-item>
        <m-form-item label="活动区域">
          <m-select v-model="alignmentForm.region" placeholder="请选择活动区域">
            <m-option label="区域一" value="shanghai" />
            <m-option label="区域二" value="beijing" />
          </m-select>
        </m-form-item>
      </m-form>
    </div>

    <div class="alignment-demo">
      <h4>顶部对齐</h4>
      <m-form :model="alignmentForm" label-width="100px" label-position="top">
        <m-form-item label="活动名称">
          <m-input v-model="alignmentForm.name" />
        </m-form-item>
        <m-form-item label="活动区域">
          <m-select v-model="alignmentForm.region" placeholder="请选择活动区域">
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

const alignmentForm = reactive({
  name: "",
  region: "",
});
</script>

<style scoped lang="scss">
.demo-form-alignment {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: column;

  .alignment-demo {
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

