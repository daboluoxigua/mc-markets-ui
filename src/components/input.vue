<template>
  <div class="input-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Input v-model="input" placeholder="请输入内容" />
        </div>
        <CodeToggle>
          {{ `<Input v-model="input" placeholder="请输入内容" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 禁用状态 -->
    <section class="demo-section">
      <h2>禁用状态</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Input v-model="input1" disabled placeholder="请输入内容" />
        </div>
        <CodeToggle>
          {{ `<Input v-model="input1" disabled placeholder="请输入内容" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 可清空 -->
    <section class="demo-section">
      <h2>可清空</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Input v-model="input2" placeholder="请输入内容" clearable />
        </div>
        <CodeToggle>
          {{ `<Input v-model="input2" placeholder="请输入内容" clearable />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 密码框 -->
    <section class="demo-section">
      <h2>密码框</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Input v-model="input3" type="password" placeholder="请输入密码" show-password />
        </div>
        <CodeToggle>
          {{ `<Input v-model="input3" type="password" placeholder="请输入密码" show-password />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 带图标的输入框 -->
    <section class="demo-section">
      <h2>带图标的输入框</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Input v-model="input4" placeholder="请输入内容" clearable>
            <template #prefix>
              <Icon name="search" />
            </template>
          </Input>
          <Input v-model="input5" placeholder="请输入内容">
            <template #suffix>
              <Icon name="calendar" />
            </template>
          </Input>
        </div>
        <CodeToggle>
          {{ `<Input v-model="input4" placeholder="请输入内容" clearable>
  <template #prefix>
    <Icon name="search" />
  </template>
</Input>
<Input v-model="input5" placeholder="请输入内容">
  <template #suffix>
    <Icon name="calendar" />
  </template>
</Input>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 文本域 -->
    <section class="demo-section">
      <h2>文本域</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Input v-model="textarea" type="textarea" placeholder="请输入内容" />
        </div>
        <CodeToggle>
          {{ `<Input v-model="textarea" type="textarea" placeholder="请输入内容" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 可自适应文本高度的文本域 -->
    <section class="demo-section">
      <h2>可自适应文本高度的文本域</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Input v-model="textarea2" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入内容" />
        </div>
        <CodeToggle>
          {{ `<Input v-model="textarea2" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入内容" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 复合型输入框 -->
    <section class="demo-section">
      <h2>复合型输入框</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Input v-model="input6" placeholder="请输入内容">
            <template #prepend>Http://</template>
          </Input>
          <Input v-model="input7" placeholder="请输入内容">
            <template #append>.com</template>
          </Input>
        </div>
        <CodeToggle>
          {{ `<Input v-model="input6" placeholder="请输入内容">
  <template #prepend>Http://</template>
</Input>
<Input v-model="input7" placeholder="请输入内容">
  <template #append>.com</template>
</Input>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 尺寸 -->
    <section class="demo-section">
      <h2>尺寸</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Input v-model="input8" size="large" placeholder="Large size" />
          <Input v-model="input9" placeholder="Default size" />
          <Input v-model="input10" size="small" placeholder="Small size" />
        </div>
        <CodeToggle>
          {{ `<Input v-model="input8" size="large" placeholder="Large size" />
<Input v-model="input9" placeholder="Default size" />
<Input v-model="input10" size="small" placeholder="Small size" />` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 带输入建议 -->
    <section class="demo-section">
      <h2>带输入建议</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
          />
        </div>
        <CodeToggle>
          {{ `<el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @select="handleSelect"
/>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Input 组件属性</h3>
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
                <td><code>type</code></td>
                <td><code>'text' | 'textarea' | 'password' | 'url' | 'email' | 'date' | 'number' | 'tel'</code></td>
                <td><code>'text'</code></td>
                <td>类型</td>
              </tr>
              <tr>
                <td><code>v-model / modelValue</code></td>
                <td><code>string / number</code></td>
                <td><code>-</code></td>
                <td>绑定值</td>
              </tr>
              <tr>
                <td><code>maxlength</code></td>
                <td><code>number</code></td>
                <td><code>-</code></td>
                <td>最大输入长度</td>
              </tr>
              <tr>
                <td><code>minlength</code></td>
                <td><code>number</code></td>
                <td><code>-</code></td>
                <td>最小输入长度</td>
              </tr>
              <tr>
                <td><code>show-word-limit</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否显示输入字数统计</td>
              </tr>
              <tr>
                <td><code>placeholder</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>输入框占位文本</td>
              </tr>
              <tr>
                <td><code>clearable</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否可清空</td>
              </tr>
              <tr>
                <td><code>show-password</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否显示切换密码图标</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否禁用</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'large' | 'default' | 'small'</code></td>
                <td><code>'default'</code></td>
                <td>尺寸</td>
              </tr>
              <tr>
                <td><code>prefix-icon</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>自定义前缀图标</td>
              </tr>
              <tr>
                <td><code>suffix-icon</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>自定义后缀图标</td>
              </tr>
              <tr>
                <td><code>rows</code></td>
                <td><code>number</code></td>
                <td><code>2</code></td>
                <td>输入框行数，仅 type 为 'textarea' 时有效</td>
              </tr>
              <tr>
                <td><code>autosize</code></td>
                <td><code>boolean | object</code></td>
                <td><code>false</code></td>
                <td>textarea 高度是否自适应，仅 type 为 'textarea' 时有效</td>
              </tr>
              <tr>
                <td><code>autocomplete</code></td>
                <td><code>string</code></td>
                <td><code>'off'</code></td>
                <td>原生 autocomplete 属性</td>
              </tr>
              <tr>
                <td><code>readonly</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>原生 readonly 属性，是否只读</td>
              </tr>
              <tr>
                <td><code>max</code></td>
                <td><code>-</code></td>
                <td><code>-</code></td>
                <td>原生 max 属性，设置最大值</td>
              </tr>
              <tr>
                <td><code>min</code></td>
                <td><code>-</code></td>
                <td><code>-</code></td>
                <td>原生 min 属性，设置最小值</td>
              </tr>
              <tr>
                <td><code>step</code></td>
                <td><code>-</code></td>
                <td><code>-</code></td>
                <td>原生 step 属性，设置输入字段的合法数字间隔</td>
              </tr>
              <tr>
                <td><code>resize</code></td>
                <td><code>'none' | 'both' | 'horizontal' | 'vertical'</code></td>
                <td><code>-</code></td>
                <td>控制是否能被用户缩放</td>
              </tr>
              <tr>
                <td><code>autofocus</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>原生 autofocus 属性，是否自动聚焦</td>
              </tr>
              <tr>
                <td><code>form</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>原生 form 属性，指定表单</td>
              </tr>
              <tr>
                <td><code>label</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>等价于原生 input aria-label 属性</td>
              </tr>
              <tr>
                <td><code>tabindex</code></td>
                <td><code>string | number</code></td>
                <td><code>-</code></td>
                <td>输入框的 tabindex</td>
              </tr>
              <tr>
                <td><code>validate-event</code></td>
                <td><code>boolean</code></td>
                <td><code>true</code></td>
                <td>输入时是否触发表单的校验</td>
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
                <td><code>blur</code></td>
                <td><code>event: FocusEvent</code></td>
                <td>在 Input 失去焦点时触发</td>
              </tr>
              <tr>
                <td><code>focus</code></td>
                <td><code>event: FocusEvent</code></td>
                <td>在 Input 获得焦点时触发</td>
              </tr>
              <tr>
                <td><code>change</code></td>
                <td><code>value: string | number</code></td>
                <td>仅在输入框失去焦点或用户按下回车时触发</td>
              </tr>
              <tr>
                <td><code>input</code></td>
                <td><code>value: string | number</code></td>
                <td>在 Input 值改变时触发</td>
              </tr>
              <tr>
                <td><code>clear</code></td>
                <td><code>-</code></td>
                <td>在点击由 clearable 属性生成的清空按钮时触发</td>
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
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>focus</code></td>
                <td><code>-</code></td>
                <td>使 input 获取焦点</td>
              </tr>
              <tr>
                <td><code>blur</code></td>
                <td><code>-</code></td>
                <td>使 input 失去焦点</td>
              </tr>
              <tr>
                <td><code>select</code></td>
                <td><code>-</code></td>
                <td>选中 input 中的文字</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>插槽</h3>
        <div class="css-info">
          <ul>
            <li><code>prefix</code> - 输入框头部内容</li>
            <li><code>suffix</code> - 输入框尾部内容</li>
            <li><code>prepend</code> - 输入框前置内容，只对 type="text" 有效</li>
            <li><code>append</code> - 输入框后置内容，只对 type="text" 有效</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Input, Icon } from '@mc-markets/ui'
import CodeToggle from './CodeToggle.vue'
import { ref } from 'vue'

// 响应式数据
const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const input4 = ref('')
const input5 = ref('')
const input6 = ref('')
const input7 = ref('')
const input8 = ref('')
const input9 = ref('')
const input10 = ref('')
const textarea = ref('')
const textarea2 = ref('')
const state = ref('')

// 方法
const querySearchAsync = (queryString, callback) => {
  const restaurants = [
    { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
    { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区仙霞路' },
    { value: '新旺角茶餐厅', address: '上海市普陀区真北路988号创邑金沙谷6号楼113' },
    { value: '泷千家(天山西路店)', address: '天山西路438号' },
    { value: '胖仙女纸杯蛋糕（上海凌空店）', address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
    { value: '贡茶', address: '上海市长宁区金钟路633号' },
    { value: '豪大大香鸡排超级奶爸', address: '上海市嘉定区曹安公路曹安路' },
    { value: '茶芝兰（奶茶，手抓饼）', address: '上海市普陀区同普路1435号' },
    { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
    { value: '星移浓缩咖啡', address: '上海市嘉定区新郁路800号' },
    { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
    { value: '新麦甜四季', address: '上海市嘉定区曹安公路2383弄55号' },
    { value: 'Monica摩托主题咖啡店', address: '嘉定区江桥镇曹安公路2409号1F' },
    { value: '浮生若茶（凌空soho店）', address: '上海长宁区金钟路968号9号楼地下一层' },
    { value: 'NONO JUICE 鲜榨果汁', address: '上海市长宁区天山西路119号' },
    { value: 'CoCo都可(北新泾店）', address: '上海市长宁区仙霞西路' },
    { value: '快乐柠檬（上海城店）', address: '上海市长宁区金钟路633号' },
    { value: 'Merci Paul cafe', address: '上海市普陀区光复西路丹巴路28弄6号楼101' },
    { value: '猫山王（西城店）', address: '上海市普陀区真北路818号近铁城市广场' },
    { value: '枪会山', address: '上海市普陀区真北路818号近铁城市广场北区1楼' }
  ]
  const results = queryString ? restaurants.filter(item => item.value.toLowerCase().includes(queryString.toLowerCase())) : restaurants
  setTimeout(() => {
    callback(results)
  }, 200)
}

const handleSelect = (item) => {
  console.log(item)
}
</script>

<style scoped>
.input-demo {
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

.demo-preview .el-input {
  margin-bottom: 10px;
  width: 300px;
}

.demo-preview .el-input:last-child {
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
  
  .demo-preview .el-input {
    width: 100%;
  }
}
</style>
