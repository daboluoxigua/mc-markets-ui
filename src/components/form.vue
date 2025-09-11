<template>
  <div class="form-demo">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <template #preview>
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
      </template>
      <template #code>
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
      </template>
    </DemoSection>

    <!-- 行内表单 -->
    <DemoSection title="行内表单">
      <template #preview>
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
      </template>
      <template #code>
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
      </template>
    </DemoSection>

    <!-- 对齐方式 -->
    <DemoSection title="对齐方式">
      <template #preview>
        <Form :model="form3" label-width="120px" label-position="top">
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
      </template>
      <template #code>
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
      </template>
    </DemoSection>

    <!-- 表单验证 -->
    <DemoSection title="表单验证">
      <template #preview>
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
      </template>
      <template #code>
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
      </template>
    </DemoSection>
  </div>
</template>

<script setup>
import { Form, FormItem, Input, Select, SelectOption, Button } from '@mc-markets/ui'
import DemoSection from './DemoSection.vue'
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


/* 响应式设计 */
@media (max-width: 768px) {
  .form-demo {
    padding: 15px;
  }
}
</style>
