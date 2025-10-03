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
        <m-breadcrumb separator=">">
          <m-breadcrumb-item :to="{ path: '/' }">总览</m-breadcrumb-item>
          <m-breadcrumb-item>资金记录</m-breadcrumb-item>
        </m-breadcrumb>
      </div>
    </DemoSection>

    <!-- 图标分隔符 -->
    <DemoSection 
      title="图标分隔符"
      :code="iconSeparatorCode"
    >
      <div class="demo-container">
        <m-breadcrumb :separator-icon="ArrowRight">
          <m-breadcrumb-item :to="{ path: '/' }">homepage</m-breadcrumb-item>
          <m-breadcrumb-item>promotion management</m-breadcrumb-item>
          <m-breadcrumb-item>promotion list</m-breadcrumb-item>
          <m-breadcrumb-item>promotion detail</m-breadcrumb-item>
        </m-breadcrumb>
      </div>
    </DemoSection>

    <!-- 自定义分隔符 -->
    <DemoSection 
      title="自定义分隔符"
      :code="customSeparatorCode"
    >
      <div class="demo-container">
        <m-breadcrumb separator=">">
          <m-breadcrumb-item :to="{ path: '/' }">首页</m-breadcrumb-item>
          <m-breadcrumb-item>产品管理</m-breadcrumb-item>
          <m-breadcrumb-item>产品列表</m-breadcrumb-item>
          <m-breadcrumb-item>产品详情</m-breadcrumb-item>
        </m-breadcrumb>
        
        <m-breadcrumb separator="|" style="margin-top: 16px;">
          <m-breadcrumb-item :to="{ path: '/' }">首页</m-breadcrumb-item>
          <m-breadcrumb-item>用户管理</m-breadcrumb-item>
          <m-breadcrumb-item>用户列表</m-breadcrumb-item>
          <m-breadcrumb-item>用户详情</m-breadcrumb-item>
        </m-breadcrumb>
      </div>
    </DemoSection>

    <!-- 路由跳转 -->
    <DemoSection 
      title="路由跳转"
      :code="routerCode"
    >
      <div class="demo-container">
        <m-breadcrumb separator="/">
          <m-breadcrumb-item :to="{ path: '/' }">首页</m-breadcrumb-item>
          <m-breadcrumb-item :to="{ path: '/button' }">按钮组件</m-breadcrumb-item>
          <m-breadcrumb-item :to="{ path: '/input' }">输入框组件</m-breadcrumb-item>
          <m-breadcrumb-item>当前页面</m-breadcrumb-item>
        </m-breadcrumb>
        
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
        <m-breadcrumb separator="/">
          <m-breadcrumb-item>首页</m-breadcrumb-item>
          <m-breadcrumb-item>产品管理</m-breadcrumb-item>
          <m-breadcrumb-item>产品列表</m-breadcrumb-item>
          <m-breadcrumb-item>产品详情</m-breadcrumb-item>
        </m-breadcrumb>
        
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
            <td>separator</td>
            <td>分隔符</td>
            <td>string</td>
            <td>/</td>
          </tr>
          <tr>
            <td>separatorIcon</td>
            <td>图标分隔符的组件或组件名</td>
            <td>string / Component</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>

      <h3>Breadcrumb Slots</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>插槽名</th>
            <th>说明</th>
            <th>子标签</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>自定义默认内容</td>
            <td>Breadcrumb Item</td>
          </tr>
        </tbody>
      </table>

      <h3>BreadcrumbItem Attributes</h3>
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
            <td>to</td>
            <td>路由跳转目标，同 vue-router 的 to 属性</td>
            <td>string / object</td>
            <td>''</td>
          </tr>
          <tr>
            <td>replace</td>
            <td>如果设置该属性为 true, 导航将不会留下历史记录</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>

      <h3>BreadcrumbItem Slots</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>插槽名</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>自定义默认内容</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DemoSection from '@/components/DemoSection.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { basicUsageCode, iconSeparatorCode, customSeparatorCode, routerCode, disabledCode } from './breadcrumbCodes.js'
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
