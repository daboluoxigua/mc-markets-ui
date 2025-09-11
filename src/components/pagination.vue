<template>
  <div class="pagination-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Pagination :total="50" />
          </div>
        </div>
        <CodeToggle>
          {{ `<Pagination :total="50" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 设置最大页码按钮数 -->
    <section class="demo-section">
      <h2>设置最大页码按钮数</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Pagination :total="100" :pager-count="11" />
          </div>
          <div class="demo-row">
            <Pagination :total="100" :pager-count="5" />
          </div>
        </div>
        <CodeToggle>
          {{ `<Pagination :total="100" :pager-count="11" />
<Pagination :total="100" :pager-count="5" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 带有背景色的分页 -->
    <section class="demo-section">
      <h2>带有背景色的分页</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Pagination :total="100" background />
          </div>
        </div>
        <CodeToggle>
          {{ `<Pagination :total="100" background />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 小型分页器 -->
    <section class="demo-section">
      <h2>小型分页器</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Pagination :total="50" small />
          </div>
        </div>
        <CodeToggle>
          {{ `<Pagination :total="50" small />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 只有一页时隐藏 -->
    <section class="demo-section">
      <h2>只有一页时隐藏</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Pagination :total="5" :hide-on-single-page="true" />
          </div>
        </div>
        <CodeToggle>
          {{ `<Pagination :total="5" :hide-on-single-page="true" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 完整功能 -->
    <section class="demo-section">
      <h2>完整功能</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <Pagination
              v-model:current-page="currentPage"
              v-model:page-size="pageSize"
              :page-sizes="[10, 20, 50, 100]"
              :total="400"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
          <div class="demo-info">
            <p>当前页: {{ currentPage }}</p>
            <p>每页条数: {{ pageSize }}</p>
          </div>
        </div>
        <CodeToggle>
          {{ `<Pagination
  v-model:current-page="currentPage"
  v-model:page-size="pageSize"
  :page-sizes="[10, 20, 50, 100]"
  :total="400"
  layout="total, sizes, prev, pager, next, jumper"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
/>

// 方法
const handleSizeChange = (val) => {
  console.log('每页条数改变:', val)
}

const handleCurrentChange = (val) => {
  console.log('当前页改变:', val)
}` }}
        </CodeToggle>
      </div>
    </section>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Pagination 组件属性</h3>
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
                <td><code>current-page</code></td>
                <td><code>number</code></td>
                <td><code>1</code></td>
                <td>当前页数，支持 .sync 修饰符</td>
              </tr>
              <tr>
                <td><code>page-size</code></td>
                <td><code>number</code></td>
                <td><code>10</code></td>
                <td>每页显示条目个数，支持 .sync 修饰符</td>
              </tr>
              <tr>
                <td><code>total</code></td>
                <td><code>number</code></td>
                <td><code>0</code></td>
                <td>总条目数</td>
              </tr>
              <tr>
                <td><code>page-count</code></td>
                <td><code>number</code></td>
                <td><code>-</code></td>
                <td>总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-size 的修改，则需要使用 total 属性</td>
              </tr>
              <tr>
                <td><code>pager-count</code></td>
                <td><code>number</code></td>
                <td><code>7</code></td>
                <td>设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠</td>
              </tr>
              <tr>
                <td><code>page-sizes</code></td>
                <td><code>number[]</code></td>
                <td><code>[10, 20, 50, 100]</code></td>
                <td>每页显示个数选择器的选项设置</td>
              </tr>
              <tr>
                <td><code>layout</code></td>
                <td><code>string</code></td>
                <td><code>'prev, pager, next'</code></td>
                <td>组件布局，子组件名用逗号分隔</td>
              </tr>
              <tr>
                <td><code>background</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否为分页按钮添加背景色</td>
              </tr>
              <tr>
                <td><code>small</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否使用小型分页样式</td>
              </tr>
              <tr>
                <td><code>hide-on-single-page</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>只有一页时是否隐藏</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否禁用</td>
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
                <td><code>size-change</code></td>
                <td><code>val: number</code></td>
                <td>pageSize 改变时触发</td>
              </tr>
              <tr>
                <td><code>current-change</code></td>
                <td><code>val: number</code></td>
                <td>currentPage 改变时触发</td>
              </tr>
              <tr>
                <td><code>prev-click</code></td>
                <td><code>val: number</code></td>
                <td>用户点击上一页按钮改变当前页后触发</td>
              </tr>
              <tr>
                <td><code>next-click</code></td>
                <td><code>val: number</code></td>
                <td>用户点击下一页按钮改变当前页后触发</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>插槽</h3>
        <div class="css-info">
          <ul>
            <li><code>default</code> - 自定义内容</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Pagination } from '@mc-markets/ui'
import DemoSection from './DemoSection.vue'

// 响应式数据
const currentPage = ref(1)
const pageSize = ref(10)

// 方法
const handleSizeChange = (val) => {
  console.log('每页条数改变:', val)
}

const handleCurrentChange = (val) => {
  console.log('当前页改变:', val)
}
</script>

<style scoped>
.pagination-demo {
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

.demo-info {
  margin-top: 15px;
  padding: 10px;
  background: #f0f9ff;
  border-radius: 4px;
  border-left: 4px solid #3b82f6;
}

.demo-info p {
  margin: 5px 0;
  color: #1e40af;
  font-size: 14px;
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
