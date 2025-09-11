<template>
  <div class="banner-demo">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <template #preview>
        <div class="demo-row">
          <Banner title="成功提示的文案" type="success" />
        </div>
        <div class="demo-row">
          <Banner title="消息提示的文案" type="info" />
        </div>
        <div class="demo-row">
          <Banner title="警告提示的文案" type="warning" />
        </div>
        <div class="demo-row">
          <Banner title="错误提示的文案" type="error" />
        </div>
      </template>
      <template #code>
        <pre><code>&lt;Banner title="成功提示的文案" type="success" /&gt;
&lt;Banner title="消息提示的文案" type="info" /&gt;
&lt;Banner title="警告提示的文案" type="warning" /&gt;
&lt;Banner title="错误提示的文案" type="error" /&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 自定义关闭按钮 -->
    <DemoSection title="自定义关闭按钮">
      <template #preview>
        <div class="demo-row">
          <Banner title="不可关闭的 banner" type="success" :closable="false" />
        </div>
        <div class="demo-row">
          <Banner title="自定义 close-text" type="info" close-text="知道了" />
        </div>
        <div class="demo-row">
          <Banner title="设置了回调的 banner" type="warning" @close="handleClose" />
        </div>
      </template>
      <template #code>
        <pre><code>&lt;Banner title="不可关闭的 banner" type="success" :closable="false" /&gt;
&lt;Banner title="自定义 close-text" type="info" close-text="知道了" /&gt;
&lt;Banner title="设置了回调的 banner" type="warning" @close="handleClose" /&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 带有 icon -->
    <DemoSection title="带有 icon">
      <template #preview>
        <div class="demo-row">
          <Banner title="成功提示的文案" type="success" show-icon />
        </div>
        <div class="demo-row">
          <Banner title="消息提示的文案" type="info" show-icon />
        </div>
        <div class="demo-row">
          <Banner title="警告提示的文案" type="warning" show-icon />
        </div>
        <div class="demo-row">
          <Banner title="错误提示的文案" type="error" show-icon />
        </div>
      </template>
      <template #code>
        <pre><code>&lt;Banner title="成功提示的文案" type="success" show-icon /&gt;
&lt;Banner title="消息提示的文案" type="info" show-icon /&gt;
&lt;Banner title="警告提示的文案" type="warning" show-icon /&gt;
&lt;Banner title="错误提示的文案" type="error" show-icon /&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 文字居中 -->
    <DemoSection title="文字居中">
      <template #preview>
        <div class="demo-row">
          <Banner title="成功提示的文案" type="success" center show-icon />
        </div>
        <div class="demo-row">
          <Banner title="消息提示的文案" type="info" center show-icon />
        </div>
        <div class="demo-row">
          <Banner title="警告提示的文案" type="warning" center show-icon />
        </div>
        <div class="demo-row">
          <Banner title="错误提示的文案" type="error" center show-icon />
        </div>
      </template>
      <template #code>
        <pre><code>&lt;Banner title="成功提示的文案" type="success" center show-icon /&gt;
&lt;Banner title="消息提示的文案" type="info" center show-icon /&gt;
&lt;Banner title="警告提示的文案" type="warning" center show-icon /&gt;
&lt;Banner title="错误提示的文案" type="error" center show-icon /&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 自定义内容 -->
    <DemoSection title="自定义内容">
      <template #preview>
        <div class="demo-row">
          <Banner type="success">
            <template #title>
              <span>带标题的提示</span>
            </template>
            <template #default>
              <p>这是一段描述性文字</p>
            </template>
          </Banner>
        </div>
        <div class="demo-row">
          <Banner type="info">
            <template #title>
              <span>带标题的提示</span>
            </template>
            <template #default>
              <p>这是一段描述性文字</p>
            </template>
          </Banner>
        </div>
      </template>
      <template #code>
        <pre><code>&lt;Banner type="success"&gt;
  &lt;template #title&gt;
    &lt;span&gt;带标题的提示&lt;/span&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;p&gt;这是一段描述性文字&lt;/p&gt;
  &lt;/template&gt;
&lt;/Banner&gt;

&lt;Banner type="info"&gt;
  &lt;template #title&gt;
    &lt;span&gt;带标题的提示&lt;/span&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;p&gt;这是一段描述性文字&lt;/p&gt;
  &lt;/template&gt;
&lt;/Banner&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Banner 组件属性</h3>
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
                <td>关闭 banner 时触发</td>
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
import { Banner } from '@mc-markets/ui'
import DemoSection from './DemoSection.vue'

// 方法
const handleClose = () => {
  console.log('Banner 被关闭了')
}
</script>

<style scoped>
.banner-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-row {
  margin-bottom: 15px;
}

.demo-row:last-child {
  margin-bottom: 0;
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