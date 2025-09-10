<template>
  <div class="code-toggle-example">
    <h2>CodeToggle 组件使用示例</h2>
    
    <div class="demo-card">
      <div class="demo-preview">
        <p>这是一个简单的示例，展示如何使用 CodeToggle 组件。</p>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
      </div>
      
      <!-- 使用 CodeToggle 组件 -->
      <CodeToggle>
        &lt;el-button type="primary"&gt;主要按钮&lt;/el-button&gt;
&lt;el-button type="success"&gt;成功按钮&lt;/el-button&gt;
      </CodeToggle>
    </div>
    
    <div class="demo-card">
      <div class="demo-preview">
        <p>默认隐藏代码的示例：</p>
        <el-input placeholder="请输入内容" />
      </div>
      
      <!-- 默认隐藏代码 -->
      <CodeToggle :default-visible="false">
        &lt;el-input placeholder="请输入内容" /&gt;
      </CodeToggle>
    </div>
  </div>
</template>

<script setup>
import CodeToggle from './CodeToggle.vue'
</script>

<style scoped>
.code-toggle-example {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-card {
  border: 1px solid #e1e8ed;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.demo-preview {
  padding: 20px;
  background: #fafafa;
}
</style>
