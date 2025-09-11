<template>
  <div class="form-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Form :model="form" label-width="120px">
            <FormItem label="活动名称">
              <Input v-model="form.name" placeholder="请输入活动名称" />
            </FormItem>
            <FormItem label="活动区域">
              <Select v-model="form.region" placeholder="请选择活动区域">
                <SelectOption label="区域一" value="shanghai" />
                <SelectOption label="区域二" value="beijing" />
              </Select>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="onSubmit">立即创建</Button>
              <Button @click="onReset">重置</Button>
            </FormItem>
          </Form>
        </div>
        <CodeToggle>
          {{ `<Form :model="form" label-width="120px">
  <FormItem label="活动名称">
    <Input v-model="form.name" placeholder="请输入活动名称" />
  </FormItem>
  <FormItem label="活动区域">
    <Select v-model="form.region" placeholder="请选择活动区域">
      <SelectOption label="区域一" value="shanghai" />
      <SelectOption label="区域二" value="beijing" />
    </Select>
  </FormItem>
  <FormItem>
    <Button type="primary" @click="onSubmit">立即创建</Button>
    <Button @click="onReset">重置</Button>
  </FormItem>
</Form>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 行内表单 -->
    <section class="demo-section">
      <h2>行内表单</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Form :model="form2" inline>
            <FormItem label="审批人">
              <Input v-model="form2.user" placeholder="审批人" />
            </FormItem>
            <FormItem label="活动区域">
              <Select v-model="form2.region" placeholder="活动区域">
                <SelectOption label="区域一" value="shanghai" />
                <SelectOption label="区域二" value="beijing" />
              </Select>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="onSubmit2">查询</Button>
            </FormItem>
          </Form>
        </div>
        <CodeToggle>
          {{ `<Form :model="form2" inline>
  <FormItem label="审批人">
    <Input v-model="form2.user" placeholder="审批人" />
  </FormItem>
  <FormItem label="活动区域">
    <Select v-model="form2.region" placeholder="活动区域">
      <SelectOption label="区域一" value="shanghai" />
      <SelectOption label="区域二" value="beijing" />
    </Select>
  </FormItem>
  <FormItem>
    <Button type="primary" @click="onSubmit2">查询</Button>
  </FormItem>
</Form>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 对齐方式 -->
    <section class="demo-section">
      <h2>对齐方式</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Form :model="form3" label-width="120px" label-position="right">
            <FormItem label="活动名称">
              <Input v-model="form3.name" placeholder="请输入活动名称" />
            </FormItem>
            <FormItem label="活动区域">
              <Select v-model="form3.region" placeholder="请选择活动区域">
                <SelectOption label="区域一" value="shanghai" />
                <SelectOption label="区域二" value="beijing" />
              </Select>
            </FormItem>
          </Form>
        </div>
        <CodeToggle>
          {{ `<Form :model="form3" label-width="120px" label-position="right">
  <FormItem label="活动名称">
    <Input v-model="form3.name" placeholder="请输入活动名称" />
  </FormItem>
  <FormItem label="活动区域">
    <Select v-model="form3.region" placeholder="请选择活动区域">
      <SelectOption label="区域一" value="shanghai" />
      <SelectOption label="区域二" value="beijing" />
    </Select>
  </FormItem>
</Form>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 表单验证 -->
    <section class="demo-section">
      <h2>表单验证</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Form :model="form4" :rules="rules" ref="formRef" label-width="120px">
            <FormItem label="活动名称" prop="name">
              <Input v-model="form4.name" placeholder="请输入活动名称" />
            </FormItem>
            <FormItem label="活动区域" prop="region">
              <Select v-model="form4.region" placeholder="请选择活动区域">
                <SelectOption label="区域一" value="shanghai" />
                <SelectOption label="区域二" value="beijing" />
              </Select>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="onSubmit3">立即创建</Button>
              <Button @click="onReset2">重置</Button>
            </FormItem>
          </Form>
        </div>
        <CodeToggle>
          {{ `<Form :model="form4" :rules="rules" ref="formRef" label-width="120px">
  <FormItem label="活动名称" prop="name">
    <Input v-model="form4.name" placeholder="请输入活动名称" />
  </FormItem>
  <FormItem label="活动区域" prop="region">
    <Select v-model="form4.region" placeholder="请选择活动区域">
      <SelectOption label="区域一" value="shanghai" />
      <SelectOption label="区域二" value="beijing" />
    </Select>
  </FormItem>
  <FormItem>
    <Button type="primary" @click="onSubmit3">立即创建</Button>
    <Button @click="onReset2">重置</Button>
  </FormItem>
</Form>` }}
        </CodeToggle>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Form, FormItem, Input, Select, SelectOption, Button } from '@mc-markets/ui'
import CodeToggle from './CodeToggle.vue'
import { ref, reactive } from 'vue'

// 响应式数据
const form = reactive({
  name: '',
  region: ''
})

const form2 = reactive({
  user: '',
  region: ''
})

const form3 = reactive({
  name: '',
  region: ''
})

const form4 = reactive({
  name: '',
  region: ''
})

const formRef = ref()

const rules = {
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请选择活动区域', trigger: 'change' }
  ]
}

// 方法
const onSubmit = () => {
  console.log('submit!', form)
}

const onReset = () => {
  Object.assign(form, {
    name: '',
    region: ''
  })
}

const onSubmit2 = () => {
  console.log('submit!', form2)
}

const onSubmit3 = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      console.log('submit!', form4)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const onReset2 = () => {
  formRef.value.resetFields()
}
</script>

<style scoped>
.form-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #555;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

.demo-section {
  margin-bottom: 40px;
}

/* 演示卡片样式 */
.demo-card {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.demo-preview {
  padding: 20px;
  background: #fafafa;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .form-demo {
    padding: 15px;
  }
}
</style>
