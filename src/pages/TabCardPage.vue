<template>
  <div class="tab-card-page">
    <div class="page-header">
      <h1>TabCard 标签卡片</h1>
      <p>类似图片中显示的标签卡片组件，支持切换功能</p>
    </div>

    <!-- 基础用法 -->
    <DemoSection 
      title="基础用法"
      :code="basicUsageCode"
    >
      <div class="demo-container">
        <m-tab-card 
          v-model="activeTab1" 
          :options="tabOptions1"
          @change="handleTabChange"
        />
        
        <div class="demo-content">
          <p>当前选中的标签: <strong>{{ activeTab1 }}</strong></p>
        </div>
      </div>
    </DemoSection>

    <!-- 使用 TabCardItem 子组件 -->
    <DemoSection 
      title="使用 TabCardItem 子组件"
      :code="subComponentCode"
    >
      <div class="demo-container">
        <m-tab-card v-model="activeTab2">
          <m-tab-card-item 
            v-for="option in tabOptions2" 
            :key="option.name"
            :name="option.name"
            :label="option.label"
            :disabled="option.disabled"
          />
        </m-tab-card>
        
        <div class="demo-content">
          <p>当前选中的标签: <strong>{{ activeTab2 }}</strong></p>
        </div>
      </div>
    </DemoSection>

    <!-- 禁用状态 -->
    <DemoSection 
      title="禁用状态"
      :code="disabledCode"
    >
      <div class="demo-container">
        <m-tab-card 
          v-model="activeTab3" 
          :options="tabOptions3"
          :disabled="isDisabled"
        />
        
        <div class="demo-content">
          <m-button @click="toggleDisabled">
            {{ isDisabled ? '启用' : '禁用' }} 整体组件
          </m-button>
          <p>当前选中的标签: <strong>{{ activeTab3 }}</strong></p>
        </div>
      </div>
    </DemoSection>

    <!-- 不同主题样式 -->
    <DemoSection 
      title="不同主题样式"
      :code="themeCode"
    >
      <div class="demo-container">
        <div class="theme-demo light-theme">
          <h3>浅色主题</h3>
          <m-tab-card 
            v-model="activeTab4" 
            :options="tabOptions1"
          />
        </div>
        
        <div class="theme-demo dark-theme">
          <h3>深色主题</h3>
          <m-tab-card 
            v-model="activeTab5" 
            :options="tabOptions1"
          />
        </div>
      </div>
    </DemoSection>

    <div class="demo-section">
      <h2>API 文档</h2>
      
      <h3>TabCard Props</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>modelValue</td>
            <td>绑定值，当前激活的标签名称</td>
            <td>string | number</td>
            <td>''</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用整个组件</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>options</td>
            <td>标签选项数组</td>
            <td>Array&lt;{label: string, name: string, disabled?: boolean}&gt;</td>
            <td>[]</td>
          </tr>
        </tbody>
      </table>

      <h3>TabCard Events</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>update:modelValue</td>
            <td>绑定值变化时触发</td>
            <td>(value: string | number)</td>
          </tr>
          <tr>
            <td>change</td>
            <td>标签切换时触发</td>
            <td>(newValue: string | number, oldValue: string | number)</td>
          </tr>
          <tr>
            <td>tab-click</td>
            <td>标签被点击时触发</td>
            <td>(tabName: string | number)</td>
          </tr>
        </tbody>
      </table>

      <h3>TabCardItem Props</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>标签名称，必填</td>
            <td>string | number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>label</td>
            <td>标签显示文本</td>
            <td>string</td>
            <td>''</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用该标签</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DemoSection from '@/components/DemoSection.vue'
import { basicUsageCode, subComponentCode, disabledCode, themeCode } from './tabCardCodes.js'

// 基础用法数据
const activeTab1 = ref('transaction')
const tabOptions1 = ref([
  { label: '交易流水', name: 'transaction' },
  { label: '资金记录', name: 'fund' }
])

// 子组件用法数据
const activeTab2 = ref('option1')
const tabOptions2 = ref([
  { label: '选项一', name: 'option1' },
  { label: '选项二', name: 'option2' },
  { label: '选项三', name: 'option3', disabled: true }
])

// 禁用状态数据
const activeTab3 = ref('active')
const isDisabled = ref(false)
const tabOptions3 = ref([
  { label: '活跃', name: 'active' },
  { label: '禁用', name: 'disabled', disabled: true },
  { label: '正常', name: 'normal' }
])

// 主题演示数据
const activeTab4 = ref('light1')
const activeTab5 = ref('dark1')


// 事件处理
const handleTabChange = (newValue, oldValue) => {
  console.log('标签切换:', { newValue, oldValue })
}

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value
}
</script>

<style lang="scss" scoped>
.tab-card-page {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 32px;
  
  h1 {
    font-size: 28px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 8px 0;
  }
  
  p {
    font-size: 16px;
    color: var(--text-secondary);
    margin: 0;
  }
}

.demo-container {
  background: var(--bg-primary);
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
}

.demo-content {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-primary);
  
  p {
    margin: 8px 0;
  }
}

.theme-demo {
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 16px;
  
  h3 {
    margin: 0 0 16px 0;
    font-size: 14px;
    font-weight: 600;
  }
  
  &.light-theme {
    background: #666;
    color: #333;
  }
  
  &.dark-theme {
    background: #1a1a1a;
    color: #fff;
  }
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 24px;
  
  th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid var(--border-primary);
  }
  
  th {
    background: var(--bg-tertiary);
    font-weight: 600;
    color: var(--text-primary);
  }
  
  td {
    color: var(--text-secondary);
  }
  
  code {
    background: var(--bg-tertiary);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 12px;
  }
}
</style>