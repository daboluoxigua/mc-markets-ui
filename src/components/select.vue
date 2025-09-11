<template>
  <div class="select-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Select v-model="value" placeholder="请选择">
            <SelectOption label="选项1" value="选项1" />
            <SelectOption label="选项2" value="选项2" />
            <SelectOption label="选项3" value="选项3" />
            <SelectOption label="选项4" value="选项4" />
            <SelectOption label="选项5" value="选项5" />
          </Select>
        </div>
        <CodeToggle>
          {{ `<Select v-model="value" placeholder="请选择">
  <SelectOption label="选项1" value="选项1" />
  <SelectOption label="选项2" value="选项2" />
  <SelectOption label="选项3" value="选项3" />
  <SelectOption label="选项4" value="选项4" />
  <SelectOption label="选项5" value="选项5" />
</Select>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 有禁用选项 -->
    <section class="demo-section">
      <h2>有禁用选项</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Select v-model="value1" placeholder="请选择">
            <SelectOption label="选项1" value="选项1" />
            <SelectOption label="选项2" value="选项2" disabled />
            <SelectOption label="选项3" value="选项3" />
            <SelectOption label="选项4" value="选项4" disabled />
            <SelectOption label="选项5" value="选项5" />
          </Select>
        </div>
        <CodeToggle>
          {{ `<Select v-model="value1" placeholder="请选择">
  <SelectOption label="选项1" value="选项1" />
  <SelectOption label="选项2" value="选项2" disabled />
  <SelectOption label="选项3" value="选项3" />
  <SelectOption label="选项4" value="选项4" disabled />
  <SelectOption label="选项5" value="选项5" />
</Select>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Select v-model="value2" disabled placeholder="请选择">
            <SelectOption label="选项1" value="选项1" />
            <SelectOption label="选项2" value="选项2" />
            <SelectOption label="选项3" value="选项3" />
          </Select>
        </div>
        <CodeToggle>
          {{ `<Select v-model="value2" disabled placeholder="请选择">
  <SelectOption label="选项1" value="选项1" />
  <SelectOption label="选项2" value="选项2" />
  <SelectOption label="选项3" value="选项3" />
</Select>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 可清空单选 -->
    <section class="demo-section">
      <h2>可清空单选</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Select v-model="value3" clearable placeholder="请选择">
            <SelectOption label="选项1" value="选项1" />
            <SelectOption label="选项2" value="选项2" />
            <SelectOption label="选项3" value="选项3" />
            <SelectOption label="选项4" value="选项4" />
            <SelectOption label="选项5" value="选项5" />
          </Select>
        </div>
        <CodeToggle>
          {{ `<Select v-model="value3" clearable placeholder="请选择">
  <SelectOption label="选项1" value="选项1" />
  <SelectOption label="选项2" value="选项2" />
  <SelectOption label="选项3" value="选项3" />
  <SelectOption label="选项4" value="选项4" />
  <SelectOption label="选项5" value="选项5" />
</Select>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 基础多选 -->
    <section class="demo-section">
      <h2>基础多选</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Select v-model="value4" multiple placeholder="请选择">
            <SelectOption label="选项1" value="选项1" />
            <SelectOption label="选项2" value="选项2" />
            <SelectOption label="选项3" value="选项3" />
            <SelectOption label="选项4" value="选项4" />
            <SelectOption label="选项5" value="选项5" />
          </Select>
        </div>
        <CodeToggle>
          {{ `<Select v-model="value4" multiple placeholder="请选择">
  <SelectOption label="选项1" value="选项1" />
  <SelectOption label="选项2" value="选项2" />
  <SelectOption label="选项3" value="选项3" />
  <SelectOption label="选项4" value="选项4" />
  <SelectOption label="选项5" value="选项5" />
</Select>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义模板 -->
    <section class="demo-section">
      <h2>自定义模板</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Select v-model="value5" placeholder="请选择">
            <SelectOption label="选项1" value="选项1">
              <span style="float: left">选项1</span>
              <span style="float: right; color: #8492a6; font-size: 13px">选项1</span>
            </SelectOption>
            <SelectOption label="选项2" value="选项2">
              <span style="float: left">选项2</span>
              <span style="float: right; color: #8492a6; font-size: 13px">选项2</span>
            </SelectOption>
            <SelectOption label="选项3" value="选项3">
              <span style="float: left">选项3</span>
              <span style="float: right; color: #8492a6; font-size: 13px">选项3</span>
            </SelectOption>
          </Select>
        </div>
        <CodeToggle>
          {{ `<Select v-model="value5" placeholder="请选择">
  <SelectOption label="选项1" value="选项1">
    <span style="float: left">选项1</span>
    <span style="float: right; color: #8492a6; font-size: 13px">选项1</span>
  </SelectOption>
  <SelectOption label="选项2" value="选项2">
    <span style="float: left">选项2</span>
    <span style="float: right; color: #8492a6; font-size: 13px">选项2</span>
  </SelectOption>
  <SelectOption label="选项3" value="选项3">
    <span style="float: left">选项3</span>
    <span style="float: right; color: #8492a6; font-size: 13px">选项3</span>
  </SelectOption>
</Select>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 分组 -->
    <section class="demo-section">
      <h2>分组</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Select v-model="value6" placeholder="请选择">
            <el-option-group label="热门城市">
              <SelectOption label="上海" value="上海" />
              <SelectOption label="北京" value="北京" />
              <SelectOption label="广州" value="广州" />
              <SelectOption label="深圳" value="深圳" />
            </el-option-group>
            <el-option-group label="城市">
              <SelectOption label="成都" value="成都" />
              <SelectOption label="杭州" value="杭州" />
              <SelectOption label="南京" value="南京" />
              <SelectOption label="武汉" value="武汉" />
            </el-option-group>
          </Select>
        </div>
        <CodeToggle>
          {{ `<Select v-model="value6" placeholder="请选择">
  <el-option-group label="热门城市">
    <SelectOption label="上海" value="上海" />
    <SelectOption label="北京" value="北京" />
    <SelectOption label="广州" value="广州" />
    <SelectOption label="深圳" value="深圳" />
  </el-option-group>
  <el-option-group label="城市">
    <SelectOption label="成都" value="成都" />
    <SelectOption label="杭州" value="杭州" />
    <SelectOption label="南京" value="南京" />
    <SelectOption label="武汉" value="武汉" />
  </el-option-group>
</Select>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 可搜索 -->
    <section class="demo-section">
      <h2>可搜索</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Select v-model="value7" filterable placeholder="请选择">
            <SelectOption label="选项1" value="选项1" />
            <SelectOption label="选项2" value="选项2" />
            <SelectOption label="选项3" value="选项3" />
            <SelectOption label="选项4" value="选项4" />
            <SelectOption label="选项5" value="选项5" />
          </Select>
        </div>
        <CodeToggle>
          {{ `<Select v-model="value7" filterable placeholder="请选择">
  <SelectOption label="选项1" value="选项1" />
  <SelectOption label="选项2" value="选项2" />
  <SelectOption label="选项3" value="选项3" />
  <SelectOption label="选项4" value="选项4" />
  <SelectOption label="选项5" value="选项5" />
</Select>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 不同尺寸 -->
    <section class="demo-section">
      <h2>不同尺寸</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Select v-model="value8" size="large" placeholder="Large">
            <SelectOption label="选项1" value="选项1" />
            <SelectOption label="选项2" value="选项2" />
          </Select>
          <Select v-model="value9" placeholder="Default">
            <SelectOption label="选项1" value="选项1" />
            <SelectOption label="选项2" value="选项2" />
          </Select>
          <Select v-model="value10" size="small" placeholder="Small">
            <SelectOption label="选项1" value="选项1" />
            <SelectOption label="选项2" value="选项2" />
          </Select>
        </div>
        <CodeToggle>
          {{ `<Select v-model="value8" size="large" placeholder="Large">
  <SelectOption label="选项1" value="选项1" />
  <SelectOption label="选项2" value="选项2" />
</Select>
<Select v-model="value9" placeholder="Default">
  <SelectOption label="选项1" value="选项1" />
  <SelectOption label="选项2" value="选项2" />
</Select>
<Select v-model="value10" size="small" placeholder="Small">
  <SelectOption label="选项1" value="选项1" />
  <SelectOption label="选项2" value="选项2" />
</Select>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Select 组件属性</h3>
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
                <td><code>v-model / modelValue</code></td>
                <td><code>boolean / string / number</code></td>
                <td><code>-</code></td>
                <td>绑定值</td>
              </tr>
              <tr>
                <td><code>multiple</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否多选</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否禁用</td>
              </tr>
              <tr>
                <td><code>value-key</code></td>
                <td><code>string</code></td>
                <td><code>'value'</code></td>
                <td>作为 value 唯一标识的键名，绑定值为对象类型时必填</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'large' | 'default' | 'small'</code></td>
                <td><code>'default'</code></td>
                <td>输入框尺寸</td>
              </tr>
              <tr>
                <td><code>clearable</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否可以清空选项</td>
              </tr>
              <tr>
                <td><code>collapse-tags</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>多选时是否将选中值按文字的形式展示</td>
              </tr>
              <tr>
                <td><code>multiple-limit</code></td>
                <td><code>number</code></td>
                <td><code>0</code></td>
                <td>多选时用户最多可以选择的项目数，为 0 则不限制</td>
              </tr>
              <tr>
                <td><code>name</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>select input 的 name 属性</td>
              </tr>
              <tr>
                <td><code>autocomplete</code></td>
                <td><code>string</code></td>
                <td><code>'off'</code></td>
                <td>select input 的 autocomplete 属性</td>
              </tr>
              <tr>
                <td><code>placeholder</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>占位符</td>
              </tr>
              <tr>
                <td><code>filterable</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否可搜索</td>
              </tr>
              <tr>
                <td><code>allow-create</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否允许用户创建新条目，需配合 filterable 使用</td>
              </tr>
              <tr>
                <td><code>filter-method</code></td>
                <td><code>function</code></td>
                <td><code>-</code></td>
                <td>自定义搜索方法</td>
              </tr>
              <tr>
                <td><code>remote</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否为远程搜索</td>
              </tr>
              <tr>
                <td><code>remote-method</code></td>
                <td><code>function</code></td>
                <td><code>-</code></td>
                <td>远程搜索方法</td>
              </tr>
              <tr>
                <td><code>loading</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否正在从远程获取数据</td>
              </tr>
              <tr>
                <td><code>no-match-text</code></td>
                <td><code>string</code></td>
                <td><code>'无匹配数据'</code></td>
                <td>搜索条件无匹配时显示的文字，也可以使用 empty 插槽设置</td>
              </tr>
              <tr>
                <td><code>no-data-text</code></td>
                <td><code>string</code></td>
                <td><code>'无数据'</code></td>
                <td>选项为空时显示的文字，也可以使用 empty 插槽设置</td>
              </tr>
              <tr>
                <td><code>popper-class</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>Select 下拉框的类名</td>
              </tr>
              <tr>
                <td><code>reserve-keyword</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词</td>
              </tr>
              <tr>
                <td><code>default-first-option</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用</td>
              </tr>
              <tr>
                <td><code>popper-append-to-body</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false</td>
              </tr>
              <tr>
                <td><code>automatic-dropdown</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单</td>
              </tr>
              <tr>
                <td><code>clear-icon</code></td>
                <td><code>string</code></td>
                <td><code>'CircleClose'</code></td>
                <td>自定义清空图标的类名</td>
              </tr>
              <tr>
                <td><code>fit-input-width</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>下拉框的宽度是否与输入框相同</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Select 事件</h3>
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
                <td><code>val: string | number | boolean | object | array</code></td>
                <td>选中值发生变化时触发</td>
              </tr>
              <tr>
                <td><code>visible-change</code></td>
                <td><code>visible: boolean</code></td>
                <td>下拉框出现/隐藏时触发</td>
              </tr>
              <tr>
                <td><code>remove-tag</code></td>
                <td><code>val: string | number | boolean | object</code></td>
                <td>多选模式下移除tag时触发</td>
              </tr>
              <tr>
                <td><code>clear</code></td>
                <td><code>-</code></td>
                <td>可清空的单选模式下用户点击清空按钮时触发</td>
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
            </tbody>
          </table>
        </div>

        <h3>Select 插槽</h3>
        <div class="css-info">
          <ul>
            <li><code>default</code> - Option 组件列表</li>
            <li><code>prefix</code> - Select 组件头部内容</li>
            <li><code>empty</code> - 无选项时的列表</li>
            <li><code>tag</code> - 多选时已选选项的标签</li>
          </ul>
        </div>

        <h3>Option 组件属性</h3>
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
                <td><code>value</code></td>
                <td><code>string | number | boolean | object</code></td>
                <td><code>-</code></td>
                <td>选项的值</td>
              </tr>
              <tr>
                <td><code>label</code></td>
                <td><code>string | number</code></td>
                <td><code>-</code></td>
                <td>选项的标签，若不设置则默认与 value 相同</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否禁用该选项</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Select, SelectOption } from '@mc-markets/ui'
import CodeToggle from './CodeToggle.vue'
import { ref } from 'vue'

// 响应式数据
const value = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref([])
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')
</script>

<style scoped>
.select-demo {
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

.demo-preview .el-select {
  margin-right: 10px;
  margin-bottom: 10px;
  width: 300px;
}

.demo-preview .el-select:last-child {
  margin-right: 0;
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
  
  .demo-preview .el-select {
    width: 100%;
    margin-right: 0;
  }
}
</style>
