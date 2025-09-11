<template>
  <div class="tab-demo">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <template #preview>
        <Tab v-model="activeName" @tab-click="handleTabClick" type="card">
          <TabPane label="用户管理" name="user">
            <div class="tab-content">
              <h4>用户管理</h4>
              <p>这里是用户管理的内容</p>
            </div>
          </TabPane>
          <TabPane label="配置管理" name="config">
            <div class="tab-content">
              <h4>配置管理</h4>
              <p>这里是配置管理的内容</p>
            </div>
          </TabPane>
          <TabPane label="角色管理" name="role">
            <div class="tab-content">
              <h4>角色管理</h4>
              <p>这里是角色管理的内容</p>
            </div>
          </TabPane>
        </Tab>
      </template>
      <template #code>
        <pre><code>&lt;Tab v-model="activeName" @tab-click="handleTabClick" type="card"&gt;
  &lt;TabPane label="用户管理" name="user"&gt;
    &lt;div class="tab-content"&gt;
      &lt;h4&gt;用户管理&lt;/h4&gt;
      &lt;p&gt;这里是用户管理的内容&lt;/p&gt;
    &lt;/div&gt;
  &lt;/TabPane&gt;
  &lt;TabPane label="配置管理" name="config"&gt;
    &lt;div class="tab-content"&gt;
      &lt;h4&gt;配置管理&lt;/h4&gt;
      &lt;p&gt;这里是配置管理的内容&lt;/p&gt;
    &lt;/div&gt;
  &lt;/TabPane&gt;
  &lt;TabPane label="角色管理" name="role"&gt;
    &lt;div class="tab-content"&gt;
      &lt;h4&gt;角色管理&lt;/h4&gt;
      &lt;p&gt;这里是角色管理的内容&lt;/p&gt;
    &lt;/div&gt;
  &lt;/TabPane&gt;
&lt;/Tab&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 可关闭标签 -->
    <DemoSection title="可关闭标签">
      <template #preview>
        <Tab v-model="activeName3" type="card" :closable="true" @tab-remove="handleTabRemove">
          <TabPane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name" :closable="tab.closable"
            :disabled="false" :lazy="false">
            <div class="tab-content">
              <h4>{{ tab.label }}</h4>
              <p>{{ tab.content }}</p>
            </div>
          </TabPane>
        </Tab>
      </template>
      <template #code>
        <pre><code>&lt;Tab v-model="activeName3" type="card" :closable="true" @tab-remove="handleTabRemove"&gt;
  &lt;TabPane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name" :closable="tab.closable"
    :disabled="false" :lazy="false"&gt;
    &lt;div class="tab-content"&gt;
      &lt;h4&gt;{{ tab.label }}&lt;/h4&gt;
      &lt;p&gt;{{ tab.content }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/TabPane&gt;
&lt;/Tab&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 带图标的标签 -->
    <DemoSection title="带图标的标签">
      <template #preview>
        <Tab v-model="activeName4" type="card">
          <TabPane name="user" label="用户管理">
            <template #label>
              <span class="tab-label">
                <Icon name="circle-user" :size="16" />
                <span>用户管理</span>
              </span>
            </template>
            <div class="tab-content">
              <h4>用户管理</h4>
              <p>这里是用户管理的内容</p>
            </div>
          </TabPane>
          <TabPane name="config" label="配置管理">
            <template #label>
              <span class="tab-label">
                <Icon name="adjustments-horizontal" :size="16" />
                <span>配置管理</span>
              </span>
            </template>
            <div class="tab-content">
              <h4>配置管理</h4>
              <p>这里是配置管理的内容</p>
            </div>
          </TabPane>
          <TabPane name="role" label="角色管理">
            <template #label>
              <span class="tab-label">
                <Icon name="shield-check" :size="16" />
                <span>角色管理</span>
              </span>
            </template>
            <div class="tab-content">
              <h4>角色管理</h4>
              <p>这里是角色管理的内容</p>
            </div>
          </TabPane>
        </Tab>
      </template>
      <template #code>
        <pre><code>&lt;Tab v-model="activeName4" type="card"&gt;
  &lt;TabPane name="user" label="用户管理"&gt;
    &lt;template #label&gt;
      &lt;span class="tab-label"&gt;
        &lt;Icon name="circle-user" :size="16" /&gt;
        &lt;span&gt;用户管理&lt;/span&gt;
      &lt;/span&gt;
    &lt;/template&gt;
    &lt;div class="tab-content"&gt;
      &lt;h4&gt;用户管理&lt;/h4&gt;
      &lt;p&gt;这里是用户管理的内容&lt;/p&gt;
    &lt;/div&gt;
  &lt;/TabPane&gt;
  &lt;TabPane name="config" label="配置管理"&gt;
    &lt;template #label&gt;
      &lt;span class="tab-label"&gt;
        &lt;Icon name="adjustments-horizontal" :size="16" /&gt;
        &lt;span&gt;配置管理&lt;/span&gt;
      &lt;/span&gt;
    &lt;/template&gt;
    &lt;div class="tab-content"&gt;
      &lt;h4&gt;配置管理&lt;/h4&gt;
      &lt;p&gt;这里是配置管理的内容&lt;/p&gt;
    &lt;/div&gt;
  &lt;/TabPane&gt;
  &lt;TabPane name="role" label="角色管理"&gt;
    &lt;template #label&gt;
      &lt;span class="tab-label"&gt;
        &lt;Icon name="shield-check" :size="16" /&gt;
        &lt;span&gt;角色管理&lt;/span&gt;
      &lt;/span&gt;
    &lt;/template&gt;
    &lt;div class="tab-content"&gt;
      &lt;h4&gt;角色管理&lt;/h4&gt;
      &lt;p&gt;这里是角色管理的内容&lt;/p&gt;
    &lt;/div&gt;
  &lt;/TabPane&gt;
&lt;/Tab&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 不同样式 -->
    <DemoSection title="不同样式">
      <template #preview>
        <div class="demo-tabs">
          <div class="demo-tab-item">
            <h4>默认样式</h4>
            <Tab v-model="activeName" type="card">
              <TabPane label="标签一" name="first">标签一的内容</TabPane>
              <TabPane label="标签二" name="second">标签二的内容</TabPane>
              <TabPane label="标签三" name="third">标签三的内容</TabPane>
            </Tab>
          </div>
          <div class="demo-tab-item">
            <h4>边框样式</h4>
            <Tab v-model="activeName" type="border-card">
              <TabPane label="标签一" name="first">标签一的内容</TabPane>
              <TabPane label="标签二" name="second">标签二的内容</TabPane>
              <TabPane label="标签三" name="third">标签三的内容</TabPane>
            </Tab>
          </div>
        </div>
      </template>
      <template #code>
        <pre><code>&lt;!-- 默认样式 --&gt;
&lt;Tab v-model="activeName" type="card"&gt;
  &lt;TabPane label="标签一" name="first"&gt;标签一的内容&lt;/TabPane&gt;
  &lt;TabPane label="标签二" name="second"&gt;标签二的内容&lt;/TabPane&gt;
  &lt;TabPane label="标签三" name="third"&gt;标签三的内容&lt;/TabPane&gt;
&lt;/Tab&gt;

&lt;!-- 边框样式 --&gt;
&lt;Tab v-model="activeName" type="border-card"&gt;
  &lt;TabPane label="标签一" name="first"&gt;标签一的内容&lt;/TabPane&gt;
  &lt;TabPane label="标签二" name="second"&gt;标签二的内容&lt;/TabPane&gt;
  &lt;TabPane label="标签三" name="third"&gt;标签三的内容&lt;/TabPane&gt;
&lt;/Tab&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Tab 组件属性</h3>
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
                <td>绑定值，选中选项卡的 name</td>
                <td>string / number</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td>风格类型</td>
                <td>string</td>
                <td>card / border-card</td>
                <td>—</td>
              </tr>
              <tr>
                <td><code>closable</code></td>
                <td>标签是否可关闭</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><code>addable</code></td>
                <td>标签是否可增加</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><code>editable</code></td>
                <td>标签是否同时可增加和关闭</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><code>tab-position</code></td>
                <td>选项卡所在位置</td>
                <td>string</td>
                <td>top / right / bottom / left</td>
                <td>top</td>
              </tr>
              <tr>
                <td><code>stretch</code></td>
                <td>标签的宽度是否自撑开</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tab 事件</h3>
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
                <td><code>tab-click</code></td>
                <td>tab 被选中时触发</td>
                <td>(tab: TabsPaneContext)</td>
              </tr>
              <tr>
                <td><code>tab-remove</code></td>
                <td>点击 tab 移除按钮时触发</td>
                <td>(name: string)</td>
              </tr>
              <tr>
                <td><code>tab-add</code></td>
                <td>点击 tab 新增按钮时触发</td>
                <td>—</td>
              </tr>
              <tr>
                <td><code>edit</code></td>
                <td>点击 tab 编辑按钮时触发</td>
                <td>(targetName: string, action: 'remove' | 'add')</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>TabPane 组件属性</h3>
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
                <td><code>label</code></td>
                <td>选项卡标题</td>
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
                <td><code>name</code></td>
                <td>与选项卡绑定值 value 对应的标识符</td>
                <td>string / number</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td><code>closable</code></td>
                <td>标签是否可关闭</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td><code>lazy</code></td>
                <td>标签是否延迟渲染</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Tab, TabPane, Icon } from "@mc-markets/ui";
import DemoSection from "./DemoSection.vue";

// 响应式数据
const activeName = ref("user");
const activeName3 = ref("tab1");
const activeName4 = ref("user");

const tabs = ref([
  { name: "tab1", label: "标签一", content: "标签一内容", closable: true },
  { name: "tab2", label: "标签二", content: "标签二内容", closable: true },
  { name: "tab3", label: "标签三", content: "标签三内容", closable: false },
]);

// 方法
const handleTabClick = (tab) => {
  console.log("点击了标签:", tab.props.name);
};

const handleTabRemove = (name) => {
  console.log("移除了标签:", name);
  const index = tabs.value.findIndex((tab) => tab.name === name);
  if (index > -1) {
    tabs.value.splice(index, 1);
  }
};
</script>

<style scoped>
.tab-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.tab-content {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 4px;
  margin-top: 10px;
}

.tab-content h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.tab-content p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.tab-label {
  display: flex;
  align-items: center;
  gap: 6px;
}

.demo-tabs {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.demo-tab-item {
  flex: 1;
  min-width: 300px;
}

.demo-tab-item h4 {
  margin: 0 0 15px 0;
  color: #2c3e50;
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

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-tabs {
    flex-direction: column;
  }
  
  .demo-tab-item {
    min-width: auto;
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