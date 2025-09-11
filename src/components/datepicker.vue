<template>
  <div class="datepicker-demo">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <template #preview>
        <div class="demo-row">
          <DatePicker v-model="dateValue1" placeholder="选择日期" />
        </div>
        <div class="demo-row">
          <DatePicker v-model="dateRangeValue1" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </div>
      </template>
      <template #code>
        <pre><code>&lt;DatePicker v-model="dateValue" placeholder="选择日期" /&gt;
&lt;DatePicker v-model="dateRangeValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" /&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 其他日期单位 -->
    <DemoSection title="其他日期单位">
      <template #preview>
        <div class="demo-row">
          <DatePicker v-model="monthValue" type="month" placeholder="选择月" />
        </div>
        <div class="demo-row">
          <DatePicker v-model="yearValue" type="year" placeholder="选择年" />
        </div>
        <div class="demo-row">
          <DatePicker v-model="weekValue" type="week" placeholder="选择周" />
        </div>
      </template>
      <template #code>
        <pre><code>&lt;DatePicker v-model="monthValue" type="month" placeholder="选择月" /&gt;
&lt;DatePicker v-model="yearValue" type="year" placeholder="选择年" /&gt;
&lt;DatePicker v-model="weekValue" type="week" placeholder="选择周" /&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 日期范围选择 -->
    <DemoSection title="日期范围选择">
      <template #preview>
        <div class="demo-row">
          <DatePicker v-model="dateRangeValue2" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
        </div>
        <div class="demo-row">
          <DatePicker v-model="monthRangeValue" type="monthrange" range-separator="至" start-placeholder="开始月份" end-placeholder="结束月份" />
        </div>
      </template>
      <template #code>
        <pre><code>&lt;DatePicker v-model="dateRangeValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" /&gt;
&lt;DatePicker v-model="monthRangeValue" type="monthrange" range-separator="至" start-placeholder="开始月份" end-placeholder="结束月份" /&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 带快捷选项 -->
    <DemoSection title="带快捷选项">
      <template #preview>
        <div class="demo-row">
          <DatePicker v-model="dateValue3" type="date" placeholder="选择日期" :shortcuts="shortcuts" />
        </div>
        <div class="demo-row">
          <DatePicker v-model="dateRangeValue3" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="rangeShortcuts" />
        </div>
      </template>
      <template #code>
        <pre><code>&lt;DatePicker v-model="dateValue" type="date" placeholder="选择日期" :shortcuts="shortcuts" /&gt;
&lt;DatePicker v-model="dateRangeValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :shortcuts="rangeShortcuts" /&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 禁用状态 -->
    <DemoSection title="禁用状态">
      <template #preview>
        <div class="demo-row">
          <DatePicker v-model="dateValue4" placeholder="选择日期" disabled />
        </div>
        <div class="demo-row">
          <DatePicker v-model="dateRangeValue4" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" disabled />
        </div>
      </template>
      <template #code>
        <pre><code>&lt;DatePicker v-model="dateValue" placeholder="选择日期" disabled /&gt;
&lt;DatePicker v-model="dateRangeValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" disabled /&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 只读状态 -->
    <DemoSection title="只读状态">
      <template #preview>
        <div class="demo-row">
          <DatePicker v-model="dateValue5" placeholder="选择日期" readonly />
        </div>
        <div class="demo-row">
          <DatePicker v-model="dateRangeValue5" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" readonly />
        </div>
      </template>
      <template #code>
        <pre><code>&lt;DatePicker v-model="dateValue" placeholder="选择日期" readonly /&gt;
&lt;DatePicker v-model="dateRangeValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" readonly /&gt;</code></pre>
      </template>
    </DemoSection>

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
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>model-value / v-model</code></td>
                <td>绑定值</td>
                <td>Date / string / number / Array</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td>显示类型</td>
                <td>string</td>
                <td>year / month / date / dates / week / datetime / datetimerange / daterange / monthrange</td>
                <td>date</td>
              </tr>
              <tr>
                <td><code>placeholder</code></td>
                <td>输入框占位文本</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><code>start-placeholder</code></td>
                <td>范围选择时开始日期的占位内容</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><code>end-placeholder</code></td>
                <td>范围选择时结束日期的占位内容</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><code>range-separator</code></td>
                <td>选择范围时的分隔符</td>
                <td>string</td>
                <td>—</td>
                <td>' - '</td>
              </tr>
              <tr>
                <td><code>format</code></td>
                <td>显示在输入框中的格式</td>
                <td>string</td>
                <td>—</td>
                <td>YYYY-MM-DD</td>
              </tr>
              <tr>
                <td><code>value-format</code></td>
                <td>可选，绑定值的格式。不指定则绑定值为 Date 对象</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>是否禁用</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><code>readonly</code></td>
                <td>完全只读</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><code>shortcuts</code></td>
                <td>设置快捷选项</td>
                <td>Array</td>
                <td>—</td>
                <td>—</td>
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
                <th>说明</th>
                <th>参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>change</code></td>
                <td>用户确认选定的值时触发</td>
                <td>(val: Date / string / Array)</td>
              </tr>
              <tr>
                <td><code>blur</code></td>
                <td>当 input 失去焦点时触发</td>
                <td>(event: Event)</td>
              </tr>
              <tr>
                <td><code>focus</code></td>
                <td>当 input 获得焦点时触发</td>
                <td>(event: Event)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker } from '@mc-markets/ui'
import DemoSection from './DemoSection.vue'

// 响应式数据
const dateValue1 = ref('')
const dateRangeValue1 = ref('')
const monthValue = ref('')
const yearValue = ref('')
const weekValue = ref('')
const dateRangeValue2 = ref('')
const monthRangeValue = ref('')
const dateValue3 = ref('')
const dateRangeValue3 = ref('')
const dateValue4 = ref('')
const dateRangeValue4 = ref('')
const dateValue5 = ref('')
const dateRangeValue5 = ref('')

// 快捷选项
const shortcuts = [
  {
    text: '今天',
    value: new Date()
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    }
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    }
  }
]

const rangeShortcuts = [
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