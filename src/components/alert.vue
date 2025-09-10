<template>
  <div class="alert-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Alert title="成功提示的文案" type="success" />
          <Alert title="消息提示的文案" type="info" />
          <Alert title="警告提示的文案" type="warning" />
          <Alert title="错误提示的文案" type="error" />
        </div>
        <CodeToggle>
          {{ `<Alert title="成功提示的文案" type="success" />
<Alert title="消息提示的文案" type="info" />
<Alert title="警告提示的文案" type="warning" />
<Alert title="错误提示的文案" type="error" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义关闭按钮 -->
    <section class="demo-section">
      <h2>自定义关闭按钮</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Alert title="不可关闭的 alert" type="success" :closable="false" />
          <Alert title="自定义 close-text" type="info" close-text="知道了" />
          <Alert title="设置了回调的 alert" type="warning" @close="handleClose" />
        </div>
        <CodeToggle>
          {{ `<Alert title="不可关闭的 alert" type="success" :closable="false" />
<Alert title="自定义 close-text" type="info" close-text="知道了" />
<Alert title="设置了回调的 alert" type="warning" @close="handleClose" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 带有 icon -->
    <section class="demo-section">
      <h2>带有 icon</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Alert title="成功提示的文案" type="success" show-icon />
          <Alert title="消息提示的文案" type="info" show-icon />
          <Alert title="警告提示的文案" type="warning" show-icon />
          <Alert title="错误提示的文案" type="error" show-icon />
        </div>
        <CodeToggle>
          {{ `<Alert title="成功提示的文案" type="success" show-icon />
<Alert title="消息提示的文案" type="info" show-icon />
<Alert title="警告提示的文案" type="warning" show-icon />
<Alert title="错误提示的文案" type="error" show-icon />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 文字居中 -->
    <section class="demo-section">
      <h2>文字居中</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Alert title="成功提示的文案" type="success" center show-icon />
          <Alert title="消息提示的文案" type="info" center show-icon />
          <Alert title="警告提示的文案" type="warning" center show-icon />
          <Alert title="错误提示的文案" type="error" center show-icon />
        </div>
        <CodeToggle>
          {{ `<Alert title="成功提示的文案" type="success" center show-icon />
<Alert title="消息提示的文案" type="info" center show-icon />
<Alert title="警告提示的文案" type="warning" center show-icon />
<Alert title="错误提示的文案" type="error" center show-icon />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义内容 -->
    <section class="demo-section">
      <h2>自定义内容</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Alert type="success">
            <template #title>
              <span>带标题的提示</span>
            </template>
            <template #default>
              <p>这是一段描述性文字</p>
            </template>
          </Alert>
          <Alert type="info">
            <template #title>
              <span>带标题的提示</span>
            </template>
            <template #default>
              <p>这是一段描述性文字</p>
            </template>
          </Alert>
        </div>
        <CodeToggle>
          {{ `<Alert type="success">
  <template #title>
    <span>带标题的提示</span>
  </template>
  <template #default>
    <p>这是一段描述性文字</p>
  </template>
</Alert>

<Alert type="info">
  <template #title>
    <span>带标题的提示</span>
  </template>
  <template #default>
    <p>这是一段描述性文字</p>
  </template>
</Alert>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Alert 组件属性</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>属性名</th>
                <th>类型</th>
                <th>默认值</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>title</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>标题</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td><code>'success' | 'warning' | 'info' | 'error'</code></td>
                <td><code>'info'</code></td>
                <td>主题</td>
              </tr>
              <tr>
                <td><code>description</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>描述性文本</td>
              </tr>
              <tr>
                <td><code>closable</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>是否可关闭</td>
              </tr>
              <tr>
                <td><code>center</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>文字是否居中</td>
              </tr>
              <tr>
                <td><code>close-text</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>关闭按钮自定义文本</td>
              </tr>
              <tr>
                <td><code>show-icon</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否显示图标</td>
              </tr>
              <tr>
                <td><code>effect</code></td>
                <td><code>'light' | 'dark'</code></td>
                <td><code>'light'</code></td>
                <td>选择提供的主题</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>事件</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>事件名</th>
                <th>参数</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>close</code></td>
                <td><code>event: Event</code></td>
                <td>关闭 alert 时触发</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>插槽</h3>
        <div class="css-info">
          <ul>
            <li><code>default</code> - 描述的内容</li>
            <li><code>title</code> - 标题的内容</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Alert } from '@mc-markets/ui'
import CodeToggle from './CodeToggle.vue'

// 方法
const handleClose = () => {
  console.log('Alert 被关闭了')
}
</script>

<style scoped>
.alert-demo {
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

.demo-preview .el-alert {
  margin-bottom: 10px;
}

/* API 文档样式 */
.api-docs {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.api-docs h3 {
  color: #2c3e50;
  margin: 20px 0 15px 0;
  font-size: 18px;
  border-left: 4px solid var(--el-color-primary);
  padding-left: 10px;
}

.api-table {
  margin-bottom: 20px;
  overflow-x: auto;
}

.api-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.api-table th {
  background: var(--el-color-primary);
  color: white;
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
}

.api-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ecf0f1;
  font-size: 13px;
  vertical-align: top;
}

.api-table tr:hover {
  background: #f8f9fa;
}

.api-table code {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
}

.css-info {
  background: white;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  padding: 15px;
}

.css-info ul {
  margin: 0;
  padding-left: 20px;
}

.css-info li {
  margin-bottom: 5px;
  color: #2c3e50;
  font-size: 13px;
}

.css-info li code {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .api-docs {
    padding: 15px;
  }
  
  .api-table th,
  .api-table td {
    padding: 8px 10px;
    font-size: 12px;
  }
}
</style>
