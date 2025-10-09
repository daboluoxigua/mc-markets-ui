<template>
  <div class="breadcrumb-page">
    <div class="page-header">
      <h1>Breadcrumb 面包屑</h1>
      <p>显示当前页面的路径，快速返回之前的任意页面</p>
    </div>

    <!-- 基础用法 -->
    <DemoSection 
      title="基础用法"
      :code="basicUsageCode"
    >
      <div class="demo-container">
        <m-breadcrumb :items="basicItems" />
      </div>
    </DemoSection>

    <!-- 路由跳转 -->
    <DemoSection 
      title="路由跳转"
      :code="routerCode"
    >
      <div class="demo-container">
        <m-breadcrumb :items="routerItems" />
        
        <div class="demo-content">
          <p>点击上面的面包屑项可以跳转到对应页面</p>
        </div>
      </div>
    </DemoSection>

    <!-- 禁用跳转 -->
    <DemoSection 
      title="禁用跳转"
      :code="disabledCode"
    >
      <div class="demo-container">
        <m-breadcrumb :items="disabledItems" />
        
        <div class="demo-content">
          <p>没有设置 to 属性的面包屑项不会有点击效果</p>
        </div>
      </div>
    </DemoSection>

    <div class="demo-section">
      <h2>API 文档</h2>
      
      <h3>Breadcrumb Attributes</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>属性名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>items</td>
            <td>面包屑数据数组</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
        </tbody>
      </table>

      <h3>Breadcrumb Events</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击面包屑项时触发</td>
            <td>被点击的面包屑项</td>
          </tr>
        </tbody>
      </table>

      <h3>Item 数据结构</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>属性名</th>
            <th>说明</th>
            <th>类型</th>
            <th>必填</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>显示文本</td>
            <td>String</td>
            <td>是</td>
          </tr>
          <tr>
            <td>to</td>
            <td>跳转路径，不设置则不可点击</td>
            <td>String / Object</td>
            <td>否</td>
          </tr>
          <tr>
            <td>replace</td>
            <td>是否替换历史记录</td>
            <td>Boolean</td>
            <td>否</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DemoSection from '@/components/DemoSection.vue'
import { basicUsageCode, routerCode, disabledCode } from './breadcrumbCodes.js'

// 基础用法数据
const basicItems = ref([
  { label: '总览', to: { path: '/' } },
  { label: '资金记录' }
])

// 路由跳转数据
const routerItems = ref([
  { label: '首页', to: { path: '/' } },
  { label: '按钮组件', to: { path: '/button' } },
  { label: '输入框组件', to: { path: '/input' } },
  { label: '当前页面' }
])

// 禁用跳转数据
const disabledItems = ref([
  { label: '首页' },
  { label: '产品管理' },
  { label: '产品列表' },
  { label: '产品详情' }
])
</script>

<style lang="scss" scoped>
.breadcrumb-page {
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
    color: var(--text-secondary);
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
