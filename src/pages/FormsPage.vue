<template>
  <div class="forms-page">
    <h2>表单组件</h2>
    <el-form
      :model="formData"
      :rules="rules"
      ref="formRef"
      label-width="100px"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="用户名" prop="username">
            <el-input
              v-model="formData.username"
              placeholder="请输入用户名"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="formData.email" placeholder="请输入邮箱" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="性别" prop="gender">
            <el-select v-model="formData.gender" placeholder="请选择性别">
              <el-option label="男" value="male" />
              <el-option label="女" value="female" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="生日" prop="birthday">
            <el-date-picker
              v-model="formData.birthday"
              type="date"
              placeholder="选择日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="爱好" prop="hobbies">
        <el-checkbox-group v-model="formData.hobbies">
          <el-checkbox label="reading">阅读</el-checkbox>
          <el-checkbox label="music">音乐</el-checkbox>
          <el-checkbox label="sports">运动</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="描述" prop="description">
        <el-input
          v-model="formData.description"
          type="textarea"
          :rows="3"
          placeholder="请输入描述"
        />
      </el-form-item>

      <el-form-item>
        <Button type="primary" @click="submitForm">提交</Button>
        <Button @click="resetForm">重置</Button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Button } from '@mc-markets/ui'

// 表单数据
const formData = reactive({
  username: "",
  email: "",
  gender: "",
  birthday: "",
  hobbies: [],
  description: "",
})

const formRef = ref()

// 表单验证规则
const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  email: [
    { required: true, message: "请输入邮箱", trigger: "blur" },
    { type: "email", message: "请输入正确的邮箱格式", trigger: "blur" },
  ],
  gender: [{ required: true, message: "请选择性别", trigger: "change" }],
}

const submitForm = async () => {
  try {
    await formRef.value.validate()
    ElMessage.success("表单提交成功！")
    console.log("表单数据:", formData)
  } catch (error) {
    ElMessage.error("表单验证失败！")
  }
}

const resetForm = () => {
  formRef.value.resetFields()
  ElMessage.info("表单已重置")
}
</script>

<style scoped>
.forms-page {
  padding: 20px;
}
</style>
