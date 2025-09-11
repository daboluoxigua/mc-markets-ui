<template>
  <div class="empty-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Empty />
          </div>
        </div>
        <CodeToggle>
          {{ `<Empty />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义图片 -->
    <section class="demo-section">
      <h2>自定义图片</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
          </div>
        </div>
        <CodeToggle>
          {{ `<Empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 图片尺寸 -->
    <section class="demo-section">
      <h2>图片尺寸</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Empty :image-size="100" />
          </div>
          <div class="demo-row">
            <Empty :image-size="200" />
          </div>
        </div>
        <CodeToggle>
          {{ `<Empty :image-size="100" />
<Empty :image-size="200" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义描述 -->
    <section class="demo-section">
      <h2>自定义描述</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Empty description="自定义描述" />
          </div>
        </div>
        <CodeToggle>
          {{ `<Empty description="自定义描述" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 底部内容 -->
    <section class="demo-section">
      <h2>底部内容</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Empty>
              <Button type="primary">按钮</Button>
            </Empty>
          </div>
        </div>
        <CodeToggle>
          {{ `<Empty>
  <Button type="primary">按钮</Button>
</Empty>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义图片和描述 -->
    <section class="demo-section">
      <h2>自定义图片和描述</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Empty>
              <template #image>
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="width: 100px; height: 100px;" />
              </template>
              <template #description>
                <p>自定义描述内容</p>
              </template>
              <Button type="primary">按钮</Button>
            </Empty>
          </div>
        </div>
        <CodeToggle>
          {{ `<Empty>
  <template #image>
    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" style="width: 100px; height: 100px;" />
  </template>
  <template #description>
    <p>自定义描述内容</p>
  </template>
  <Button type="primary">按钮</Button>
</Empty>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Empty 组件属性</h3>
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
                <td><code>image</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>图片地址</td>
              </tr>
              <tr>
                <td><code>image-size</code></td>
                <td><code>number</code></td>
                <td><code>-</code></td>
                <td>图片大小（宽度）</td>
              </tr>
              <tr>
                <td><code>description</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>文本描述</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>插槽</h3>
        <div class="css-info">
          <ul>
            <li><code>default</code> - 自定义底部内容</li>
            <li><code>image</code> - 自定义图片</li>
            <li><code>description</code> - 自定义描述</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Empty, Button } from '@mc-markets/ui'
import DemoSection from './DemoSection.vue'
</script>

<style scoped>
.empty-demo {
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
