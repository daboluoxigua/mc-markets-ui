<template>
  <div class="tooltips-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Tooltips content="Top Left 提示文字" placement="top-start">
              <Button>上左</Button>
            </Tooltips>
            <Tooltips content="Top Center 提示文字" placement="top">
              <Button>上边</Button>
            </Tooltips>
            <Tooltips content="Top Right 提示文字" placement="top-end">
              <Button>上右</Button>
            </Tooltips>
          </div>
          <div class="demo-row">
            <Tooltips content="Left 提示文字" placement="left">
              <Button>左边</Button>
            </Tooltips>
            <Tooltips content="Right 提示文字" placement="right">
              <Button>右边</Button>
            </Tooltips>
          </div>
          <div class="demo-row">
            <Tooltips content="Bottom Left 提示文字" placement="bottom-start">
              <Button>下左</Button>
            </Tooltips>
            <Tooltips content="Bottom Center 提示文字" placement="bottom">
              <Button>下边</Button>
            </Tooltips>
            <Tooltips content="Bottom Right 提示文字" placement="bottom-end">
              <Button>下右</Button>
            </Tooltips>
          </div>
        </div>
        <CodeToggle>
          {{ `<Tooltips content="Top Left 提示文字" placement="top-start">
  <Button>上左</Button>
</Tooltips>
<Tooltips content="Top Center 提示文字" placement="top">
  <Button>上边</Button>
</Tooltips>
<Tooltips content="Top Right 提示文字" placement="top-end">
  <Button>上右</Button>
</Tooltips>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 主题 -->
    <section class="demo-section">
      <h2>主题</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Tooltips content="Dark theme" effect="dark">
              <Button>Dark</Button>
            </Tooltips>
            <Tooltips content="Light theme" effect="light">
              <Button>Light</Button>
            </Tooltips>
          </div>
        </div>
        <CodeToggle>
          {{ `<Tooltips content="Dark theme" effect="dark">
  <Button>Dark</Button>
</Tooltips>
<Tooltips content="Light theme" effect="light">
  <Button>Light</Button>
</Tooltips>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 更多 Content 的内容 -->
    <section class="demo-section">
      <h2>更多 Content 的内容</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Tooltips placement="top">
              <template #content>
                <div>多行信息</div>
                <div>第二行信息</div>
              </template>
              <Button>多行</Button>
            </Tooltips>
          </div>
        </div>
        <CodeToggle>
          {{ `<Tooltips placement="top">
  &lt;template #content&gt;
    &lt;div&gt;多行信息&lt;/div&gt;
    &lt;div&gt;第二行信息&lt;/div&gt;
  &lt;/template&gt;
  &lt;el-button&gt;多行&lt;/el-button&gt;
&lt;/Tooltips&gt;` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 显示箭头 -->
    <section class="demo-section">
      <h2>显示箭头</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Tooltips content="Tooltip with arrow" :show-arrow="true">
              <Button>显示箭头</Button>
            </Tooltips>
            <Tooltips content="Tooltip without arrow" :show-arrow="false">
              <Button>隐藏箭头</Button>
            </Tooltips>
          </div>
        </div>
        <CodeToggle>
          {{ `<Tooltips content="Tooltip with arrow" :show-arrow="true">
  <Button>显示箭头</Button>
</Tooltips>
<Tooltips content="Tooltip without arrow" :show-arrow="false">
  <Button>隐藏箭头</Button>
</Tooltips>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 延迟显示 -->
    <section class="demo-section">
      <h2>延迟显示</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Tooltips content="Tooltip with delay" :show-after="1000">
              <Button>延迟显示</Button>
            </Tooltips>
            <Tooltips content="Tooltip with hide delay" :hide-after="1000">
              <Button>延迟隐藏</Button>
            </Tooltips>
          </div>
        </div>
        <CodeToggle>
          {{ `<Tooltips content="Tooltip with delay" :show-after="1000">
  <Button>延迟显示</Button>
</Tooltips>
<Tooltips content="Tooltip with hide delay" :hide-after="1000">
  <Button>延迟隐藏</Button>
</Tooltips>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 手动控制 -->
    <section class="demo-section">
      <h2>手动控制</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Tooltips ref="tooltipRef" content="Tooltip content" :visible="visible" @before-show="handleBeforeShow" @before-hide="handleBeforeHide">
              <Button @click="visible = !visible">
                {{ visible ? '隐藏' : '显示' }} Tooltip
              </Button>
            </Tooltips>
          </div>
        </div>
        <CodeToggle>
          {{ `<Tooltips ref="tooltipRef" content="Tooltip content" :visible="visible" @before-show="handleBeforeShow" @before-hide="handleBeforeHide">
  &lt;el-button @click="visible = !visible"&gt;
    \{\{ visible ? '隐藏' : '显示' \}\} Tooltip
  &lt;/el-button&gt;
&lt;/Tooltips&gt;

// 响应式数据
const visible = ref(false)

// 方法
const handleBeforeShow = () => {
  console.log('Tooltip 即将显示')
}

const handleBeforeHide = () => {
  console.log('Tooltip 即将隐藏')
}` }}
        </CodeToggle>
      </div>
    </section>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Tooltips 组件属性</h3>
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
                <td><code>content</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>显示的内容，也可以通过 <code>#content</code> 传入 DOM</td>
              </tr>
              <tr>
                <td><code>placement</code></td>
                <td><code>string</code></td>
                <td><code>'bottom'</code></td>
                <td>Tooltip 组件出现的位置，可选值：top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Tooltip 是否可用</td>
              </tr>
              <tr>
                <td><code>effect</code></td>
                <td><code>string</code></td>
                <td><code>'dark'</code></td>
                <td>默认提供的主题，可选值：dark/light</td>
              </tr>
              <tr>
                <td><code>enterable</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>鼠标是否可进入到 tooltip 中</td>
              </tr>
              <tr>
                <td><code>hide-after</code></td>
                <td><code>number</code></td>
                <td><code>0</code></td>
                <td>Tooltip 出现后的延迟隐藏时间，单位：毫秒</td>
              </tr>
              <tr>
                <td><code>offset</code></td>
                <td><code>number</code></td>
                <td><code>12</code></td>
                <td>Tooltip 出现位置的偏移量</td>
              </tr>
              <tr>
                <td><code>popper-class</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>为 Tooltip 的 popper 添加类名</td>
              </tr>
              <tr>
                <td><code>popper-options</code></td>
                <td><code>object</code></td>
                <td><code>{}</code></td>
                <td>popper.js 的参数</td>
              </tr>
              <tr>
                <td><code>show-after</code></td>
                <td><code>number</code></td>
                <td><code>0</code></td>
                <td>在触发后多久显示，单位：毫秒</td>
              </tr>
              <tr>
                <td><code>show-arrow</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>是否显示 Tooltip 箭头</td>
              </tr>
              <tr>
                <td><code>trigger</code></td>
                <td><code>string</code></td>
                <td><code>'hover'</code></td>
                <td>如何触发 Tooltip，可选值：hover/click/focus/manual</td>
              </tr>
              <tr>
                <td><code>visible</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Tooltip 是否可见，支持 .sync 修饰符</td>
              </tr>
              <tr>
                <td><code>raw-content</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否将 content 作为 HTML 字符串处理</td>
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
                <td><code>before-show</code></td>
                <td><code>-</code></td>
                <td>显示前触发</td>
              </tr>
              <tr>
                <td><code>before-hide</code></td>
                <td><code>-</code></td>
                <td>隐藏前触发</td>
              </tr>
              <tr>
                <td><code>show</code></td>
                <td><code>-</code></td>
                <td>显示时触发</td>
              </tr>
              <tr>
                <td><code>hide</code></td>
                <td><code>-</code></td>
                <td>隐藏时触发</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>插槽</h3>
        <div class="css-info">
          <ul>
            <li><code>default</code> - Tooltip 触发的内容</li>
            <li><code>content</code> - 自定义 Tooltip 的内容</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tooltips, Button } from '@mc-markets/ui'
import DemoSection from './DemoSection.vue'

// 响应式数据
const visible = ref(false)
const tooltipRef = ref()

// 方法
const handleBeforeShow = () => {
  console.log('Tooltip 即将显示')
}

const handleBeforeHide = () => {
  console.log('Tooltip 即将隐藏')
}
</script>

<style scoped>
.tooltips-demo {
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
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  overflow: hidden;
  background: var(--el-bg-color);
  box-shadow: var(--el-box-shadow-light);
}

.demo-preview {
  padding: 20px;
  background: var(--el-bg-color);
}

.demo-row {
  margin-bottom: 15px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
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
  .demo-row {
    flex-direction: column;
    align-items: flex-start;
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
