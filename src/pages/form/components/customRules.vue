<demo>
## 自定义校验规则
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
    <m-form-item label="密码" prop="pass">
      <m-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </m-form-item>
    <m-form-item label="确认密码" prop="checkPass">
      <m-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
    </m-form-item>
    <m-form-item label="年龄" prop="age">
      <m-input v-model.number="ruleForm.age" />
    </m-form-item>
    <m-form-item>
      <m-button type="primary" @click="submitForm(ruleFormRef)">提交</m-button>
      <m-button @click="resetForm(ruleFormRef)">重置</m-button>
    </m-form-item>
  </m-form>
</template>

<script setup>
import { reactive, ref } from "vue";

const ruleFormRef = ref();

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  age: "",
});

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (ruleForm.checkPass !== "") {
      if (!ruleFormRef.value) return;
      ruleFormRef.value.validateField("checkPass");
    }
    callback();
  }
};

const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次输入密码不一致!"));
  } else {
    callback();
  }
};

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  checkPass: [{ validator: validatePass2, trigger: "blur" }],
  age: [
    {
      validator: (rule, value, callback) => {
        if (!value) {
          return callback(new Error("年龄不能为空"));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error("请输入数字值"));
          } else {
            if (value < 18) {
              callback(new Error("必须年满18岁"));
            } else {
              callback();
            }
          }
        }, 1000);
      },
      trigger: "blur",
    },
  ],
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
<!-- #endregion snippet -->

