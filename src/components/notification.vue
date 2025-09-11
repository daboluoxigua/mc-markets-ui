<template>
  <div class="notification-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-buttons">
            <Button @click="showNotification('success')">成功</Button>
            <Button @click="showNotification('warning')">警告</Button>
            <Button @click="showNotification('info')">消息</Button>
            <Button @click="showNotification('error')">错误</Button>
          </div>
        </div>
        <CodeToggle>
          {{ `// 在组件中使用
import { ElNotification } from 'element-plus'

const showNotification = (type) => {
  ElNotification({
    title: '标题',
    message: '这是一条消息提示',
    type: type
  })
}

// 或者使用我们的组件
<Notification title="标题" message="这是一条消息提示" type="success" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 不同类型的通知 -->
    <section class="demo-section">
      <h2>不同类型的通知</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-buttons">
            <Button @click="showSuccessNotification">成功通知</Button>
            <Button @click="showWarningNotification">警告通知</Button>
            <Button @click="showInfoNotification">信息通知</Button>
            <Button @click="showErrorNotification">错误通知</Button>
          </div>
        </div>
        <CodeToggle>
          {{ `// 成功通知
ElNotification({
  title: '成功',
  message: '这是一条成功的提示消息',
  type: 'success'
})

// 警告通知
ElNotification({
  title: '警告',
  message: '这是一条警告的提示消息',
  type: 'warning'
})

// 信息通知
ElNotification({
  title: '消息',
  message: '这是一条消息的提示消息',
  type: 'info'
})

// 错误通知
ElNotification({
  title: '错误',
  message: '这是一条错误的提示消息',
  type: 'error'
})` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义位置 -->
    <section class="demo-section">
      <h2>自定义位置</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-buttons">
            <Button @click="showTopLeft">左上角</Button>
            <Button @click="showTopRight">右上角</Button>
            <Button @click="showBottomLeft">左下角</Button>
            <Button @click="showBottomRight">右下角</Button>
          </div>
        </div>
        <CodeToggle>
          {{ `// 左上角
ElNotification({
  title: '自定义位置',
  message: '通知会在左上角弹出',
  position: 'top-left'
})

// 右上角
ElNotification({
  title: '自定义位置',
  message: '通知会在右上角弹出',
  position: 'top-right'
})

// 左下角
ElNotification({
  title: '自定义位置',
  message: '通知会在左下角弹出',
  position: 'bottom-left'
})

// 右下角
ElNotification({
  title: '自定义位置',
  message: '通知会在右下角弹出',
  position: 'bottom-right'
})` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义时长 -->
    <section class="demo-section">
      <h2>自定义时长</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-buttons">
            <Button @click="showShortNotification">短时间显示</Button>
            <Button @click="showLongNotification">长时间显示</Button>
            <Button @click="showPermanentNotification">永久显示</Button>
          </div>
        </div>
        <CodeToggle>
          {{ `// 短时间显示 (2秒)
ElNotification({
  title: '短时间显示',
  message: '这条通知会在2秒后消失',
  duration: 2000
})

// 长时间显示 (10秒)
ElNotification({
  title: '长时间显示',
  message: '这条通知会在10秒后消失',
  duration: 10000
})

// 永久显示
ElNotification({
  title: '永久显示',
  message: '这条通知不会自动消失',
  duration: 0
})` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 带图标 -->
    <section class="demo-section">
      <h2>带图标</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-buttons">
            <Button @click="showIconNotification">带图标通知</Button>
            <Button @click="showCustomIconNotification">自定义图标</Button>
          </div>
        </div>
        <CodeToggle>
          {{ `// 带图标通知
ElNotification({
  title: '带图标通知',
  message: '这条通知带有图标',
  type: 'success',
  showClose: true
})

// 自定义图标
ElNotification({
  title: '自定义图标',
  message: '这条通知使用了自定义图标',
  icon: 'el-icon-star-on'
})` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义内容 -->
    <section class="demo-section">
      <h2>自定义内容</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-buttons">
            <Button @click="showCustomContentNotification">自定义内容</Button>
            <Button @click="showHTMLNotification">HTML内容</Button>
          </div>
        </div>
        <CodeToggle>
          {{ `// 自定义内容
ElNotification({
  title: '自定义内容',
  dangerouslyUseHTMLString: true,
  message: '<strong>这是加粗的文本</strong><br/>这是第二行文本'
})

// 使用组件
<Notification title="自定义内容">
  <template #default>
    <p><strong>这是加粗的文本</strong></p>
    <p>这是第二行文本</p>
  </template>
</Notification>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Notification 组件属性</h3>
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
                <td><code>message</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>说明文字</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td><code>'success' | 'warning' | 'info' | 'error'</code></td>
                <td><code>-</code></td>
                <td>主题样式，如果不在可选值内将被忽略</td>
              </tr>
              <tr>
                <td><code>position</code></td>
                <td><code>'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'</code></td>
                <td><code>'top-right'</code></td>
                <td>自定义弹出位置</td>
              </tr>
              <tr>
                <td><code>duration</code></td>
                <td><code>number</code></td>
                <td><code>4500</code></td>
                <td>显示时间，毫秒。设为 0 则不会自动关闭</td>
              </tr>
              <tr>
                <td><code>showClose</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>是否显示关闭按钮</td>
              </tr>
              <tr>
                <td><code>dangerouslyUseHTMLString</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否将 message 属性作为 HTML 片段处理</td>
              </tr>
              <tr>
                <td><code>icon</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>自定义图标的类名</td>
              </tr>
              <tr>
                <td><code>onClose</code></td>
                <td><code>function</code></td>
                <td><code>-</code></td>
                <td>关闭时的回调函数</td>
              </tr>
              <tr>
                <td><code>onClick</code></td>
                <td><code>function</code></td>
                <td><code>-</code></td>
                <td>点击 Notification 时的回调函数</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>方法</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>方法名</th>
                <th>参数</th>
                <th>返回值</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>close</code></td>
                <td><code>-</code></td>
                <td><code>void</code></td>
                <td>关闭当前的 Notification</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>插槽</h3>
        <div class="css-info">
          <ul>
            <li><code>default</code> - 自定义内容</li>
            <li><code>title</code> - 自定义标题</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ElNotification } from 'element-plus'
import { Button } from '@mc-markets/ui'
import DemoSection from './DemoSection.vue'

// 方法
const showNotification = (type) => {
  ElNotification({
    title: '标题',
    message: '这是一条消息提示',
    type: type
  })
}

const showSuccessNotification = () => {
  ElNotification({
    title: '成功',
    message: '这是一条成功的提示消息',
    type: 'success'
  })
}

const showWarningNotification = () => {
  ElNotification({
    title: '警告',
    message: '这是一条警告的提示消息',
    type: 'warning'
  })
}

const showInfoNotification = () => {
  ElNotification({
    title: '消息',
    message: '这是一条消息的提示消息',
    type: 'info'
  })
}

const showErrorNotification = () => {
  ElNotification({
    title: '错误',
    message: '这是一条错误的提示消息',
    type: 'error'
  })
}

const showTopLeft = () => {
  ElNotification({
    title: '自定义位置',
    message: '通知会在左上角弹出',
    position: 'top-left'
  })
}

const showTopRight = () => {
  ElNotification({
    title: '自定义位置',
    message: '通知会在右上角弹出',
    position: 'top-right'
  })
}

const showBottomLeft = () => {
  ElNotification({
    title: '自定义位置',
    message: '通知会在左下角弹出',
    position: 'bottom-left'
  })
}

const showBottomRight = () => {
  ElNotification({
    title: '自定义位置',
    message: '通知会在右下角弹出',
    position: 'bottom-right'
  })
}

const showShortNotification = () => {
  ElNotification({
    title: '短时间显示',
    message: '这条通知会在2秒后消失',
    duration: 2000
  })
}

const showLongNotification = () => {
  ElNotification({
    title: '长时间显示',
    message: '这条通知会在10秒后消失',
    duration: 10000
  })
}

const showPermanentNotification = () => {
  ElNotification({
    title: '永久显示',
    message: '这条通知不会自动消失',
    duration: 0
  })
}

const showIconNotification = () => {
  ElNotification({
    title: '带图标通知',
    message: '这条通知带有图标',
    type: 'success',
    showClose: true
  })
}

const showCustomIconNotification = () => {
  ElNotification({
    title: '自定义图标',
    message: '这条通知使用了自定义图标',
    icon: 'el-icon-star-on'
  })
}

const showCustomContentNotification = () => {
  ElNotification({
    title: '自定义内容',
    dangerouslyUseHTMLString: true,
    message: '<strong>这是加粗的文本</strong><br/>这是第二行文本'
  })
}

const showHTMLNotification = () => {
  ElNotification({
    title: 'HTML内容',
    dangerouslyUseHTMLString: true,
    message: '<p><strong>这是加粗的文本</strong></p><p>这是第二行文本</p>'
  })
}
</script>

<style scoped>
.notification-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}


.demo-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
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
  .demo-buttons {
    flex-direction: column;
  }
  
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
