<demo>
## 典型表单 size='large'
</demo>
<!-- #region snippet -->
<template>
  <m-form :model="form" label-width="auto" size="large" style="max-width: 600px">
    <m-form-item label="活动名称">
      <m-input v-model="form.name" />
    </m-form-item>
    <m-form-item label="活动区域">
      <m-select v-model="form.region" placeholder="请选择活动区域">
        <m-option label="区域一" value="shanghai" />
        <m-option label="区域二" value="beijing" />
      </m-select>
    </m-form-item>
    <m-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="选择日期"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="form.date2"
          placeholder="选择时间"
          style="width: 100%"
        />
      </el-col>
    </m-form-item>
    <m-form-item label="即时配送">
      <m-switch v-model="form.delivery" />
    </m-form-item>
    <m-form-item label="活动性质">
      <el-checkbox-group v-model="form.type">
        <el-checkbox value="Online activities" name="type">线上活动</el-checkbox>
        <el-checkbox value="Promotion activities" name="type">推广活动</el-checkbox>
        <el-checkbox value="Offline activities" name="type">线下活动</el-checkbox>
        <el-checkbox value="Simple brand exposure" name="type">单纯品牌曝光</el-checkbox>
      </el-checkbox-group>
    </m-form-item>
    <m-form-item label="特殊资源">
      <m-radio-group v-model="form.resource">
        <m-radio value="Sponsor">赞助商</m-radio>
        <m-radio value="Venue">场地</m-radio>
      </m-radio-group>
    </m-form-item>
    <m-form-item label="活动形式">
      <m-input v-model="form.desc" type="textarea" />
    </m-form-item>
    <m-form-item>
      <m-button type="primary" @click="onSubmit">创建</m-button>
      <m-button @click="onReset">重置</m-button>
    </m-form-item>
  </m-form>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!", form);
};

const onReset = () => {
  Object.keys(form).forEach((key) => {
    form[key] = Array.isArray(form[key]) ? [] : "";
  });
};
</script>

<style scoped lang="scss">
.text-center {
  text-align: center;
}

.text-gray-500 {
  color: #6b7280;
}
</style>
<!-- #endregion snippet -->

