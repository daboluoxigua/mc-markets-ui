<template>
  <div class="theme-page">
    <h2>主题配置</h2>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="demo-card">
          <template #header>
            <div class="card-header">
              <span>颜色配置</span>
            </div>
          </template>
          <div class="color-config">
            <el-form-item label="主色调">
              <el-color-picker
                v-model="themeConfig.primaryColor"
                @change="updatePrimaryColor"
              />
            </el-form-item>
            <el-form-item label="成功色">
              <el-color-picker
                v-model="themeConfig.successColor"
                @change="updateSuccessColor"
              />
            </el-form-item>
            <el-form-item label="警告色">
              <el-color-picker
                v-model="themeConfig.warningColor"
                @change="updateWarningColor"
              />
            </el-form-item>
            <el-form-item label="危险色">
              <el-color-picker
                v-model="themeConfig.dangerColor"
                @change="updateDangerColor"
              />
            </el-form-item>
          </div>
        </el-card>
      </el-col>

      <el-col :span="12">
        <el-card class="demo-card">
          <template #header>
            <div class="card-header">
              <span>样式配置</span>
            </div>
          </template>
          <div class="style-config">
            <el-form-item label="圆角大小">
              <el-slider
                v-model="borderRadius"
                @change="updateBorderRadius"
                :min="0"
                :max="20"
              />
            </el-form-item>
            <el-form-item label="字体大小">
              <el-slider
                v-model="fontSize"
                @change="updateFontSize"
                :min="12"
                :max="20"
              />
            </el-form-item>
            <el-form-item label="间距大小">
              <el-slider
                v-model="spacing"
                @change="updateSpacing"
                :min="8"
                :max="32"
              />
            </el-form-item>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-card class="demo-card" style="margin-top: 20px">
      <template #header>
        <div class="card-header">
          <span>主题预览</span>
        </div>
      </template>
      <div class="theme-preview">
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button type="info">信息按钮</Button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Button } from '@mc-markets/ui'
import {
  setPrimaryColor,
  setSuccessColor,
  setWarningColor,
  setDangerColor,
  setCssVar,
} from '@/utils/theme'

// 主题配置
const themeConfig = reactive({
  primaryColor: "#409eff",
  successColor: "#67c23a",
  warningColor: "#e6a23c",
  dangerColor: "#f56c6c",
  infoColor: "#909399",
})

const borderRadius = ref(4)
const fontSize = ref(14)
const spacing = ref(20)

const updatePrimaryColor = (color) => {
  setPrimaryColor(color)
  ElMessage.success("主色调已更新")
}

const updateSuccessColor = (color) => {
  setSuccessColor(color)
  ElMessage.success("成功色已更新")
}

const updateWarningColor = (color) => {
  setWarningColor(color)
  ElMessage.success("警告色已更新")
}

const updateDangerColor = (color) => {
  setDangerColor(color)
  ElMessage.success("危险色已更新")
}

const updateBorderRadius = (value) => {
  setCssVar("--el-border-radius-base", `${value}px`)
}

const updateFontSize = (value) => {
  setCssVar("--el-font-size-base", `${value}px`)
}

const updateSpacing = (value) => {
  setCssVar("--el-spacing-base", `${value}px`)
}
</script>

<style scoped>
.theme-page {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.color-config,
.style-config {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.theme-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
