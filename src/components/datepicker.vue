<template>
  <div class="datepicker-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <DatePicker v-model="dateValue1" placeholder="选择日期" />
          </div>
          <div class="demo-row">
            <DatePicker v-model="dateRangeValue1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
          </div>
        </div>
        <CodeToggle>
          {{ `<DatePicker v-model="dateValue" placeholder="选择日期" />
<DatePicker v-model="dateRangeValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 其他日期单位 -->
    <section class="demo-section">
      <h2>其他日期单位</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <DatePicker v-model="monthValue" type="month" placeholder="选择月" />
          </div>
          <div class="demo-row">
            <DatePicker v-model="yearValue" type="year" placeholder="选择年" />
          </div>
          <div class="demo-row">
            <DatePicker v-model="weekValue" type="week" placeholder="选择周" />
          </div>
          <div class="demo-row">
            <DatePicker v-model="datetimeValue" type="datetime" placeholder="选择日期时间" />
          </div>
        </div>
        <CodeToggle>
          {{ `<DatePicker v-model="monthValue" type="month" placeholder="选择月" />
<DatePicker v-model="yearValue" type="year" placeholder="选择年" />
<DatePicker v-model="weekValue" type="week" placeholder="选择周" />
<DatePicker v-model="datetimeValue" type="datetime" placeholder="选择日期时间" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 带快捷选项 -->
    <section class="demo-section">
      <h2>带快捷选项</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <DatePicker v-model="shortcutValue" type="daterange" :shortcuts="shortcuts" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
          </div>
        </div>
        <CodeToggle>
          {{ `<DatePicker v-model="shortcutValue" type="daterange" :shortcuts="shortcuts" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />

// 快捷选项配置
const shortcuts = [
  {
    text: '最近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '最近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 带输入框 -->
    <section class="demo-section">
      <h2>带输入框</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <DatePicker v-model="inputValue" type="date" placeholder="选择日期" :clearable="false" />
          </div>
          <div class="demo-row">
            <DatePicker v-model="inputValue2" type="date" placeholder="选择日期" :clearable="true" />
          </div>
        </div>
        <CodeToggle>
          {{ `<DatePicker v-model="inputValue" type="date" placeholder="选择日期" :clearable="false" />
<DatePicker v-model="inputValue2" type="date" placeholder="选择日期" :clearable="true" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 尺寸 -->
    <section class="demo-section">
      <h2>尺寸</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <div class="demo-row">
            <DatePicker v-model="sizeValue1" size="large" placeholder="Large" />
          </div>
          <div class="demo-row">
            <DatePicker v-model="sizeValue2" size="default" placeholder="Default" />
          </div>
          <div class="demo-row">
            <DatePicker v-model="sizeValue3" size="small" placeholder="Small" />
          </div>
        </div>
        <CodeToggle>
          {{ `<DatePicker v-model="sizeValue1" size="large" placeholder="Large" />
<DatePicker v-model="sizeValue2" size="default" placeholder="Default" />
<DatePicker v-model="sizeValue3" size="small" placeholder="Small" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>DatePicker 组件属性</h3>
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
                <td><code>modelValue / v-model</code></td>
                <td><code>Date | string | number | Array</code></td>
                <td><code>-</code></td>
                <td>绑定值</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td><code>string</code></td>
                <td><code>'date'</code></td>
                <td>显示类型，可选值：date/dates/datetime/week/month/year/daterange/monthrange/datetimerange</td>
              </tr>
              <tr>
                <td><code>placeholder</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>输入框占位文本</td>
              </tr>
              <tr>
                <td><code>start-placeholder</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>范围选择时开始日期的占位内容</td>
              </tr>
              <tr>
                <td><code>end-placeholder</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>范围选择时结束日期的占位内容</td>
              </tr>
              <tr>
                <td><code>range-separator</code></td>
                <td><code>string</code></td>
                <td><code>'-'</code></td>
                <td>选择范围时的分隔符</td>
              </tr>
              <tr>
                <td><code>format</code></td>
                <td><code>string</code></td>
                <td><code>YYYY-MM-DD</code></td>
                <td>显示在输入框中的格式</td>
              </tr>
              <tr>
                <td><code>value-format</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>可选，绑定值的格式。不指定则绑定值为 Date 对象</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>string</code></td>
                <td><code>default</code></td>
                <td>输入框尺寸，可选值：large/default/small</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否禁用</td>
              </tr>
              <tr>
                <td><code>clearable</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>是否显示清除按钮</td>
              </tr>
              <tr>
                <td><code>shortcuts</code></td>
                <td><code>Array</code></td>
                <td><code>-</code></td>
                <td>设置快捷选项，需要传入数组对象</td>
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
                <td><code>change</code></td>
                <td><code>value: Date | string | number | Array</code></td>
                <td>用户确认选定的值时触发</td>
              </tr>
              <tr>
                <td><code>blur</code></td>
                <td><code>event: FocusEvent</code></td>
                <td>当 input 失去焦点时触发</td>
              </tr>
              <tr>
                <td><code>focus</code></td>
                <td><code>event: FocusEvent</code></td>
                <td>当 input 获得焦点时触发</td>
              </tr>
              <tr>
                <td><code>calendar-change</code></td>
                <td><code>value: [Date, Date]</code></td>
                <td>日历显示状态改变时触发</td>
              </tr>
              <tr>
                <td><code>panel-change</code></td>
                <td><code>value, mode, view</code></td>
                <td>日期面板改变时触发</td>
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
import { DatePicker } from '@mc-markets/ui'
import CodeToggle from './CodeToggle.vue'

// 响应式数据
const dateValue1 = ref('')
const dateRangeValue1 = ref('')
const monthValue = ref('')
const yearValue = ref('')
const weekValue = ref('')
const datetimeValue = ref('')
const shortcutValue = ref('')
const inputValue = ref('')
const inputValue2 = ref('')
const sizeValue1 = ref('')
const sizeValue2 = ref('')
const sizeValue3 = ref('')

// 快捷选项配置
const shortcuts = [
  {
    text: '最近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    }
  },
  {
    text: '最近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    }
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    }
  }
]
</script>

<style scoped>
.datepicker-demo {
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
