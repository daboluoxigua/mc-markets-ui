<template>
  <div class="form-page">
    <!-- 典型表单 -->
    <DemoSection 
      title="典型表单 表单size='large' "
      code="<template>
  <m-form :model='form' label-width='auto' size='large' style='max-width: 600px'>
    <m-form-item label='活动名称'>
      <m-input v-model='form.name' />
    </m-form-item>
    <m-form-item label='活动区域'>
      <m-select v-model='form.region' placeholder='请选择活动区域'>
        <m-option label='区域一' value='shanghai' />
        <m-option label='区域二' value='beijing' />
      </m-select>
    </m-form-item>
    <m-form-item>
      <m-button type='primary' @click='onSubmit'>提交</m-button>
      <m-button @click='onReset'>重置</m-button>
    </m-form-item>
  </m-form>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  region: '',
});

const onSubmit = () => {
  console.log('提交表单:', form);
};

const onReset = () => {
  form.name = '';
  form.region = '';
};
</script>"
    >
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
            <el-checkbox value="Online activities" name="type">
              线上活动
            </el-checkbox>
            <el-checkbox value="Promotion activities" name="type">
              推广活动
            </el-checkbox>
            <el-checkbox value="Offline activities" name="type">
              线下活动
            </el-checkbox>
            <el-checkbox value="Simple brand exposure" name="type">
              单纯品牌曝光
            </el-checkbox>
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
    </DemoSection>

    <!-- 行内表单 -->
    <DemoSection 
      title="行内表单"
      code="<m-form :model='formInline' class='demo-form-inline'>
  <m-form-item label='姓名'>
    <m-input v-model='formInline.user' placeholder='姓名' />
  </m-form-item>
  <m-form-item label='活动区域'>
    <m-select v-model='formInline.region' placeholder='活动区域'>
      <m-option label='区域一' value='shanghai' />
      <m-option label='区域二' value='beijing' />
    </m-select>
  </m-form-item>
  <m-form-item>
    <m-button type='primary' @click='onSubmit'>查询</m-button>
  </m-form-item>
</m-form>"
    >
      <m-form :inline="true" :model="inlineForm" class="demo-form-inline">
        <m-form-item label="审批人">
          <m-input v-model="inlineForm.user" placeholder="审批人" />
        </m-form-item>
        <m-form-item label="活动区域">
          <m-select v-model="inlineForm.region" placeholder="活动区域">
            <m-option label="区域一" value="shanghai" />
            <m-option label="区域二" value="beijing" />
          </m-select>
        </m-form-item>
        <m-form-item>
          <m-button type="primary" @click="onSubmit">查询</m-button>
        </m-form-item>
      </m-form>
    </DemoSection>

    <!-- 对齐方式 -->
    <DemoSection 
      title="对齐方式"
      code="<m-form :model='form' label-width='80px' label-position='right'><m-form-item label='姓名'><m-input v-model='form.name' /></m-form-item><m-form-item label='活动区域'><m-input v-model='form.region' /></m-form-item></m-form>"
    >
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
    </DemoSection>

    <!-- 表单校验 -->
    <DemoSection 
      title="表单校验"
      code="<m-form :model='ruleForm' :rules='rules' label-width='120px'><m-form-item label='活动名称' prop='name'><m-input v-model='ruleForm.name' /></m-form-item></m-form>"
    >
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
            <el-checkbox value="Online activities" name="type">
              线上活动
            </el-checkbox>
            <el-checkbox value="Promotion activities" name="type">
              推广活动
            </el-checkbox>
            <el-checkbox value="Offline activities" name="type">
              线下活动
            </el-checkbox>
            <el-checkbox value="Simple brand exposure" name="type">
              单纯品牌曝光
            </el-checkbox>
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
    </DemoSection>

    <!-- 自定义校验规则 -->
    <DemoSection 
      title="自定义校验规则"
      code="<m-form :model='ruleForm2' :rules='rules2'><m-form-item label='密码' prop='pass'><m-input v-model='ruleForm2.pass' type='password' /></m-form-item></m-form>"
    >
      <m-form
        ref="ruleFormRef2"
        :model="ruleForm2"
        :rules="rules2"
        label-width="120px"
        class="demo-ruleForm"
        status-icon
      >
        <m-form-item label="密码" prop="pass">
          <m-input v-model="ruleForm2.pass" type="password" autocomplete="off" />
        </m-form-item>
        <m-form-item label="确认密码" prop="checkPass">
          <m-input v-model="ruleForm2.checkPass" type="password" autocomplete="off" />
        </m-form-item>
        <m-form-item label="年龄" prop="age">
          <m-input v-model.number="ruleForm2.age" />
        </m-form-item>
        <m-form-item>
          <m-button type="primary" @click="submitForm2(ruleFormRef2)">提交</m-button>
          <m-button @click="resetForm2(ruleFormRef2)">重置</m-button>
        </m-form-item>
      </m-form>
    </DemoSection>

    <!-- 尺寸控制 -->
    <DemoSection 
      title="尺寸控制"
      code="<m-form :model='sizeForm' size='large'><m-form-item label='活动名称'><m-input v-model='sizeForm.name' /></m-form-item></m-form>"
    >
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
    </DemoSection>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import DemoSection from '@/components/DemoSection.vue'

// 典型表单数据
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

// 行内表单数据
const inlineForm = reactive({
  user: '',
  region: ''
})

// 对齐方式表单数据
const alignmentForm = reactive({
  name: '',
  region: ''
})

// 表单校验数据
const ruleForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

// 自定义校验表单数据
const ruleForm2 = reactive({
  pass: '',
  checkPass: '',
  age: ''
})

// 尺寸控制表单数据
const sizeForm = reactive({
  name: '',
  region: ''
})

// 表单引用
const ruleFormRef = ref()
const ruleFormRef2 = ref()

// 校验规则
const rules = reactive({
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请选择活动区域', trigger: 'change' }
  ],
  date1: [
    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
  ],
  date2: [
    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
  ],
  type: [
    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
  ],
  resource: [
    { required: true, message: '请选择活动资源', trigger: 'change' }
  ],
  desc: [
    { required: true, message: '请填写活动形式', trigger: 'blur' }
  ]
})

// 自定义校验规则
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (ruleForm2.checkPass !== '') {
      if (!ruleFormRef2.value) return
      ruleFormRef2.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== ruleForm2.pass) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

const rules2 = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [
    { validator: (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }, trigger: 'blur' }
  ]
})

// 方法
const onSubmit = () => {
  console.log('submit!', form)
}

const onReset = () => {
  Object.keys(form).forEach(key => {
    form[key] = Array.isArray(form[key]) ? [] : ''
  })
}

const submitForm = async (formEl) => {
  console.log('formEl', formEl)
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', ruleForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const submitForm2 = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', ruleForm2)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm2 = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.form-page {
  padding: 20px;
}

.demo-form-inline {
  .m-form-item {
    margin-right: 20px;
  }
  :deep(.el-select) {
    --m-input-width: 220px;
  }
}

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

.text-center {
  text-align: center;
}

.text-gray-500 {
  color: #6b7280;
}
</style>
