<template>
  <div class="theme-demo">
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>主题配置演示</span>
          <el-button type="primary" size="small" @click="exportTheme">导出配置</el-button>
        </div>
      </template>
      
      <el-tabs v-model="activeTab" type="border-card">
        <!-- 颜色配置 -->
        <el-tab-pane label="颜色配置" name="colors">
          <el-row :gutter="20">
            <el-col :span="12">
              <h4>主色调</h4>
              <el-color-picker 
                v-model="themeConfig.primaryColor" 
                @change="updatePrimaryColor"
                show-alpha
                size="large"
              />
              <p class="color-description">当前值: {{ themeConfig.primaryColor }}</p>
            </el-col>
            <el-col :span="12">
              <h4>成功色</h4>
              <el-color-picker 
                v-model="themeConfig.successColor" 
                @change="updateSuccessColor"
                show-alpha
                size="large"
              />
              <p class="color-description">当前值: {{ themeConfig.successColor }}</p>
            </el-col>
          </el-row>
          
          <el-row :gutter="20" style="margin-top: 20px;">
            <el-col :span="12">
              <h4>警告色</h4>
              <el-color-picker 
                v-model="themeConfig.warningColor" 
                @change="updateWarningColor"
                show-alpha
                size="large"
              />
              <p class="color-description">当前值: {{ themeConfig.warningColor }}</p>
            </el-col>
            <el-col :span="12">
              <h4>危险色</h4>
              <el-color-picker 
                v-model="themeConfig.dangerColor" 
                @change="updateDangerColor"
                show-alpha
                size="large"
              />
              <p class="color-description">当前值: {{ themeConfig.dangerColor }}</p>
            </el-col>
          </el-row>
        </el-tab-pane>
        
        <!-- 样式配置 -->
        <el-tab-pane label="样式配置" name="styles">
          <el-row :gutter="20">
            <el-col :span="8">
              <h4>圆角大小</h4>
              <el-slider 
                v-model="styleConfig.borderRadius" 
                @change="updateBorderRadius"
                :min="0" 
                :max="20" 
                show-input
              />
              <p class="style-description">当前值: {{ styleConfig.borderRadius }}px</p>
            </el-col>
            <el-col :span="8">
              <h4>字体大小</h4>
              <el-slider 
                v-model="styleConfig.fontSize" 
                @change="updateFontSize"
                :min="12" 
                :max="20" 
                show-input
              />
              <p class="style-description">当前值: {{ styleConfig.fontSize }}px</p>
            </el-col>
            <el-col :span="8">
              <h4>间距大小</h4>
              <el-slider 
                v-model="styleConfig.spacing" 
                @change="updateSpacing"
                :min="8" 
                :max="32" 
                show-input
              />
              <p class="style-description">当前值: {{ styleConfig.spacing }}px</p>
            </el-col>
          </el-row>
        </el-tab-pane>
        
        <!-- 预设主题 -->
        <el-tab-pane label="预设主题" name="presets">
          <div class="preset-themes">
            <div 
              v-for="preset in presetThemes" 
              :key="preset.name"
              class="preset-item"
              :class="{ active: selectedPreset === preset.name }"
              @click="applyPreset(preset)"
            >
              <div class="preset-preview" :style="{ backgroundColor: preset.primaryColor }">
                <div class="preset-colors">
                  <div 
                    v-for="color in preset.colors" 
                    :key="color"
                    class="color-dot"
                    :style="{ backgroundColor: color }"
                  ></div>
                </div>
              </div>
              <div class="preset-info">
                <h5>{{ preset.label }}</h5>
                <p>{{ preset.description }}</p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        
        <!-- 主题预览 -->
        <el-tab-pane label="主题预览" name="preview">
          <div class="theme-preview">
            <h4>按钮预览</h4>
            <div class="preview-section">
              <el-button type="primary">主要按钮</el-button>
              <el-button type="success">成功按钮</el-button>
              <el-button type="warning">警告按钮</el-button>
              <el-button type="danger">危险按钮</el-button>
              <el-button type="info">信息按钮</el-button>
            </div>
            
            <h4>表单预览</h4>
            <div class="preview-section">
              <el-input placeholder="请输入内容" />
              <el-select placeholder="请选择" style="margin-left: 10px;">
                <el-option label="选项1" value="1" />
                <el-option label="选项2" value="2" />
              </el-select>
            </div>
            
            <h4>标签预览</h4>
            <div class="preview-section">
              <el-tag type="primary">主要标签</el-tag>
              <el-tag type="success">成功标签</el-tag>
              <el-tag type="warning">警告标签</el-tag>
              <el-tag type="danger">危险标签</el-tag>
              <el-tag type="info">信息标签</el-tag>
            </div>
            
            <h4>进度条预览</h4>
            <div class="preview-section">
              <el-progress :percentage="50" />
              <el-progress :percentage="80" type="circle" style="margin-left: 20px;" />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from '@mc-markets/ui'
import { 
  setTheme, 
  setPrimaryColor, 
  setSuccessColor, 
  setWarningColor, 
  setDangerColor,
  setInfoColor,
  setCssVar,
  exportTheme
} from '@mc-markets/ui'

const activeTab = ref('colors')
const selectedPreset = ref('blue')

// 主题配置
const themeConfig = reactive({
  primaryColor: '#409eff',
  successColor: '#67c23a',
  warningColor: '#e6a23c',
  dangerColor: '#f56c6c',
  infoColor: '#909399'
})

// 样式配置
const styleConfig = reactive({
  borderRadius: 4,
  fontSize: 14,
  spacing: 20
})

// 预设主题
const presetThemes = [
  {
    name: 'blue',
    label: '蓝色主题',
    description: '经典的蓝色主题，适合企业应用',
    primaryColor: '#1890ff',
    colors: ['#1890ff', '#52c41a', '#faad14', '#ff4d4f', '#722ed1']
  },
  {
    name: 'green',
    label: '绿色主题',
    description: '清新的绿色主题，适合环保类应用',
    primaryColor: '#52c41a',
    colors: ['#52c41a', '#73d13d', '#faad14', '#ff4d4f', '#1890ff']
  },
  {
    name: 'purple',
    label: '紫色主题',
    description: '优雅的紫色主题，适合创意类应用',
    primaryColor: '#722ed1',
    colors: ['#722ed1', '#9254de', '#faad14', '#ff4d4f', '#52c41a']
  },
  {
    name: 'orange',
    label: '橙色主题',
    description: '活力的橙色主题，适合运动类应用',
    primaryColor: '#fa8c16',
    colors: ['#fa8c16', '#ffc53d', '#52c41a', '#ff4d4f', '#1890ff']
  },
  {
    name: 'red',
    label: '红色主题',
    description: '热情的红色主题，适合娱乐类应用',
    primaryColor: '#ff4d4f',
    colors: ['#ff4d4f', '#ff7875', '#faad14', '#52c41a', '#1890ff']
  }
]

// 更新颜色
const updatePrimaryColor = (color) => {
  setPrimaryColor(color)
  ElMessage.success('主色调已更新')
}

const updateSuccessColor = (color) => {
  setSuccessColor(color)
  ElMessage.success('成功色已更新')
}

const updateWarningColor = (color) => {
  setWarningColor(color)
  ElMessage.success('警告色已更新')
}

const updateDangerColor = (color) => {
  setDangerColor(color)
  ElMessage.success('危险色已更新')
}

// 更新样式
const updateBorderRadius = (value) => {
  setCssVar('--el-border-radius-base', `${value}px`)
  ElMessage.success('圆角大小已更新')
}

const updateFontSize = (value) => {
  setCssVar('--el-font-size-base', `${value}px`)
  ElMessage.success('字体大小已更新')
}

const updateSpacing = (value) => {
  setCssVar('--el-spacing-base', `${value}px`)
  ElMessage.success('间距大小已更新')
}

// 应用预设主题
const applyPreset = (preset) => {
  selectedPreset.value = preset.name
  setTheme({
    name: preset.name,
    primaryColor: preset.primaryColor,
    successColor: preset.colors[1],
    warningColor: preset.colors[2],
    dangerColor: preset.colors[3],
    infoColor: preset.colors[4]
  })
  
  // 更新配置
  themeConfig.primaryColor = preset.primaryColor
  themeConfig.successColor = preset.colors[1]
  themeConfig.warningColor = preset.colors[2]
  themeConfig.dangerColor = preset.colors[3]
  themeConfig.infoColor = preset.colors[4]
  
  ElMessage.success(`已应用${preset.label}`)
}

// 导出主题配置
const exportTheme = () => {
  const config = exportTheme()
  console.log('当前主题配置:', config)
  ElMessage.success('主题配置已导出到控制台')
}
</script>

<style scoped>
.theme-demo {
  margin: 20px 0;
}

.demo-card {
  border-radius: var(--el-border-radius-base);
  box-shadow: var(--el-box-shadow-light);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.color-description,
.style-description {
  margin-top: 10px;
  font-size: 12px;
  color: var(--el-text-color-secondary);
}

.preset-themes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.preset-item {
  border: 2px solid var(--el-border-color);
  border-radius: var(--el-border-radius-base);
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.preset-item:hover {
  border-color: var(--el-color-primary);
  box-shadow: var(--el-box-shadow-light);
}

.preset-item.active {
  border-color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
}

.preset-preview {
  height: 60px;
  border-radius: var(--el-border-radius-base);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preset-colors {
  display: flex;
  gap: 5px;
}

.color-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.preset-info h5 {
  margin: 0 0 5px 0;
  font-size: 14px;
  color: var(--el-text-color-primary);
}

.preset-info p {
  margin: 0;
  font-size: 12px;
  color: var(--el-text-color-secondary);
}

.theme-preview {
  padding: 20px;
  background: var(--el-fill-color-lighter);
  border-radius: var(--el-border-radius-base);
}

.theme-preview h4 {
  margin: 0 0 15px 0;
  color: var(--el-text-color-primary);
}

.preview-section {
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.preview-section:last-child {
  margin-bottom: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .preset-themes {
    grid-template-columns: 1fr;
  }
  
  .preview-section {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .preview-section .el-button,
  .preview-section .el-input,
  .preview-section .el-select {
    width: 100%;
    margin: 5px 0;
  }
}
</style>
