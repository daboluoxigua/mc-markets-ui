<template>
  <div class="button-demo">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <template #preview>
        <Button>默认按钮</Button>
        <Button type="primary">主要按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="danger">危险按钮</Button>
      </template>
      <template #code>
        {{ `<Button>默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="info">信息按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>` }}
      </template>
    </DemoSection>

    <!-- 朴素按钮 -->
    <DemoSection title="朴素按钮">
      <template #preview>
        <Button plain>朴素按钮</Button>
        <Button type="primary" plain>主要按钮</Button>
        <Button type="success" plain>成功按钮</Button>
        <Button type="info" plain>信息按钮</Button>
        <Button type="warning" plain>警告按钮</Button>
        <Button type="danger" plain>危险按钮</Button>
      </template>
      <template #code>
        {{ `<Button plain>朴素按钮</Button>
<Button type="primary" plain>主要按钮</Button>
<Button type="success" plain>成功按钮</Button>
<Button type="info" plain>信息按钮</Button>
<Button type="warning" plain>警告按钮</Button>
<Button type="danger" plain>危险按钮</Button>` }}
      </template>
    </DemoSection>

    <!-- 圆角按钮 -->
    <DemoSection title="圆角按钮">
      <template #preview>
        <Button round>圆角按钮</Button>
        <Button type="primary" round>主要按钮</Button>
        <Button type="success" round>成功按钮</Button>
        <Button type="info" round>信息按钮</Button>
        <Button type="warning" round>警告按钮</Button>
        <Button type="danger" round>危险按钮</Button>
      </template>
      <template #code>
        {{ `<Button round>圆角按钮</Button>
<Button type="primary" round>主要按钮</Button>
<Button type="success" round>成功按钮</Button>
<Button type="info" round>信息按钮</Button>
<Button type="warning" round>警告按钮</Button>
<Button type="danger" round>危险按钮</Button>` }}
      </template>
    </DemoSection>

    <!-- 圆形按钮 -->
    <DemoSection title="圆形按钮">
      <template #preview>
        <Button circle icon="search" />
        <Button type="primary" circle icon="edit" />
        <Button type="success" circle icon="check" />
        <Button type="info" circle icon="message" />
        <Button type="warning" circle icon="star" />
        <Button type="danger" circle icon="delete" />
      </template>
      <template #code>
        {{ `<Button circle icon="search" />
<Button type="primary" circle icon="edit" />
<Button type="success" circle icon="check" />
<Button type="info" circle icon="message" />
<Button type="warning" circle icon="star" />
<Button type="danger" circle icon="delete" />` }}
      </template>
    </DemoSection>

    <!-- 禁用状态 -->
    <DemoSection title="禁用状态">
      <template #preview>
        <Button disabled>默认按钮</Button>
        <Button type="primary" disabled>主要按钮</Button>
        <Button type="success" disabled>成功按钮</Button>
        <Button type="info" disabled>信息按钮</Button>
        <Button type="warning" disabled>警告按钮</Button>
        <Button type="danger" disabled>危险按钮</Button>
      </template>
      <template #code>
        {{ `<Button disabled>默认按钮</Button>
<Button type="primary" disabled>主要按钮</Button>
<Button type="success" disabled>成功按钮</Button>
<Button type="info" disabled>信息按钮</Button>
<Button type="warning" disabled>警告按钮</Button>
<Button type="danger" disabled>危险按钮</Button>` }}
      </template>
    </DemoSection>

    <!-- 文字按钮 -->
    <DemoSection title="文字按钮">
      <template #preview>
        <Button text>文字按钮</Button>
        <Button type="primary" text>主要按钮</Button>
        <Button type="success" text>成功按钮</Button>
        <Button type="info" text>信息按钮</Button>
        <Button type="warning" text>警告按钮</Button>
        <Button type="danger" text>危险按钮</Button>
      </template>
      <template #code>
        {{ `<Button text>文字按钮</Button>
<Button type="primary" text>主要按钮</Button>
<Button type="success" text>成功按钮</Button>
<Button type="info" text>信息按钮</Button>
<Button type="warning" text>警告按钮</Button>
<Button type="danger" text>危险按钮</Button>` }}
      </template>
    </DemoSection>

    <!-- 图标按钮 -->
    <DemoSection title="图标按钮">
      <template #preview>
        <Button type="primary" icon="edit" />
        <Button type="primary" icon="delete" />
        <Button type="primary" icon="share" />
        <Button type="primary" icon="search">搜索</Button>
        <Button type="primary">
          上传
          <Icon name="upload" />
        </Button>
      </template>
      <template #code>
        {{ `<Button type="primary" icon="edit" />
<Button type="primary" icon="delete" />
<Button type="primary" icon="share" />
<Button type="primary" icon="search">搜索</Button>
<Button type="primary">
  上传
  <Icon name="upload" />
</Button>` }}
      </template>
    </DemoSection>

    <!-- 按钮组 -->
    <DemoSection title="按钮组">
      <template #preview>
        <el-button-group>
          <Button icon="arrow-left">上一页</Button>
          <Button icon="arrow-right">下一页</Button>
        </el-button-group>
        <el-button-group>
          <Button icon="edit" />
          <Button icon="copy" />
          <Button icon="delete" />
        </el-button-group>
      </template>
      <template #code>
        {{ `<el-button-group>
  <Button icon="arrow-left">上一页</Button>
  <Button icon="arrow-right">下一页</Button>
</el-button-group>
<el-button-group>
  <Button icon="edit" />
  <Button icon="copy" />
  <Button icon="delete" />
</el-button-group>` }}
      </template>
    </DemoSection>

    <!-- 加载中 -->
    <DemoSection title="加载中">
      <template #preview>
        <Button type="primary" :loading="loading" @click="handleClick">
          {{ loading ? '加载中' : '点击加载' }}
        </Button>
      </template>
      <template #code>
        <pre><code>&lt;Button type="primary" :loading="loading" @click="handleClick"&gt;
  {{ loading ? '加载中' : '点击加载' }}
&lt;/Button&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 不同尺寸 -->
    <DemoSection title="不同尺寸">
      <template #preview>
        <Button size="large">大型按钮</Button>
        <Button>默认按钮</Button>
        <Button size="small">小型按钮</Button>
      </template>
      <template #code>
        <pre><code>&lt;Button size="large"&gt;大型按钮&lt;/Button&gt;
&lt;Button&gt;默认按钮&lt;/Button&gt;
&lt;Button size="small"&gt;小型按钮&lt;/Button&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Button 组件属性</h3>
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
                <td><code>size</code></td>
                <td><code>'large' | 'default' | 'small'</code></td>
                <td><code>'default'</code></td>
                <td>尺寸</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td><code>'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'</code></td>
                <td><code>-</code></td>
                <td>类型</td>
              </tr>
              <tr>
                <td><code>plain</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否朴素按钮</td>
              </tr>
              <tr>
                <td><code>round</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否圆角按钮</td>
              </tr>
              <tr>
                <td><code>circle</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否圆形按钮</td>
              </tr>
              <tr>
                <td><code>loading</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否加载中状态</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否禁用状态</td>
              </tr>
              <tr>
                <td><code>icon</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>图标类名</td>
              </tr>
              <tr>
                <td><code>autofocus</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否默认聚焦</td>
              </tr>
              <tr>
                <td><code>native-type</code></td>
                <td><code>'button' | 'submit' | 'reset'</code></td>
                <td><code>'button'</code></td>
                <td>原生 type 属性</td>
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
                <td><code>click</code></td>
                <td><code>event: Event</code></td>
                <td>点击按钮时触发</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>插槽</h3>
        <div class="css-info">
          <ul>
            <li><code>default</code> - 按钮内容</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Button, Icon } from '@mc-markets/ui'
import DemoSection from './DemoSection.vue'
import { ref } from 'vue'

// 响应式数据
const loading = ref(false)

// 方法
const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<style scoped>
.button-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-preview .el-button {
  margin-right: 10px;
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