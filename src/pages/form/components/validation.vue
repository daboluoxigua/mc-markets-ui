<demo>
## 表单校验
</demo>
<!-- #region snippet -->
<template>
  <m-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    status-icon
  >
    <m-form-item label="活动名称" prop="name">
      <m-input v-model="ruleForm.name" />
    </m-form-item>
    <m-form-item label="活动区域" prop="region">
      <m-select v-model="ruleForm.region" placeholder="请选择活动区域">
        <m-option label="区域一" value="shanghai" />
        <m-option label="区域二" value="beijing" />
      </m-select>
    </m-form-item>
    <m-form-item label="活动时间" required>
      <el-col :span="11">
        <m-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="date"
            label="日期"
            placeholder="选择日期"
            style="width: 100%"
          />
        </m-form-item>
      </el-col>
      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <m-form-item prop="date2">
          <el-time-picker
            v-model="ruleForm.date2"
            label="时间"
            placeholder="选择时间"
            style="width: 100%"
          />
        </m-form-item>
      </el-col>
    </m-form-item>
    <m-form-item label="即时配送" prop="delivery">
      <m-switch v-model="ruleForm.delivery" />
    </m-form-item>
    <m-form-item label="活动性质" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox value="Online activities" name="type">线上活动</el-checkbox>
        <el-checkbox value="Promotion activities" name="type">推广活动</el-checkbox>
        <el-checkbox value="Offline activities" name="type">线下活动</el-checkbox>
        <el-checkbox value="Simple brand exposure" name="type">单纯品牌曝光</el-checkbox>
      </el-checkbox-group>
    </m-form-item>
    <m-form-item label="特殊资源" prop="resource">
      <m-radio-group v-model="ruleForm.resource">
        <m-radio value="Sponsor">赞助商</m-radio>
        <m-radio value="Venue">场地</m-radio>
      </m-radio-group>
    </m-form-item>
    <m-form-item label="活动形式" prop="desc">
      <m-input v-model="ruleForm.desc" type="textarea" />
    </m-form-item>
    <m-form-item>
      <m-button type="primary" @click="submitForm(ruleFormRef)">创建</m-button>
      <m-button @click="resetForm(ruleFormRef)">重置</m-button>
    </m-form-item>
  </m-form>
</template>

<script setup>
import { reactive, ref } from "vue";

const ruleFormRef = ref();

const ruleForm = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const rules = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
  date1: [{ type: "date", required: true, message: "请选择日期", trigger: "change" }],
  date2: [{ type: "date", required: true, message: "请选择时间", trigger: "change" }],
  type: [{ type: "array", required: true, message: "请至少选择一个活动性质", trigger: "change" }],
  resource: [{ required: true, message: "请选择活动资源", trigger: "change" }],
  desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!", ruleForm);
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
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

