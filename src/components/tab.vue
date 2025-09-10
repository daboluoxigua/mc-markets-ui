<template>
  <div class="tab-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h3>基础用法</h3>
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

      <CodeToggle>
        {{`<Tab v-model="activeName" @tab-click="handleTabClick" type="card">
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
          </TabPane> </Tab
        >` }}
      </CodeToggle>
    </section>

    <!-- 可关闭标签 -->
    <section class="demo-section">
      <h3>可关闭标签</h3>
      <Tab
        v-model="activeName3"
        type="card"
        :closable="true"
        @tab-remove="handleTabRemove"
      >
        <TabPane
          v-for="tab in tabs"
          :key="tab.name"
          :label="tab.label"
          :name="tab.name"
          :closable="tab.closable"
          :disabled="false"
          :lazy="false"
        >
          <div class="tab-content">
            <h4>{{ tab.label }}</h4>
            <p>{{ tab.content }}</p>
          </div>
        </TabPane>
      </Tab>

      <CodeToggle>
        {{`<Tab
          v-model="activeName3"
          type="card"
          :closable="true"
          @tab-remove="handleTabRemove"
        >
          <TabPane
            v-for="tab in tabs"
            :key="tab.name"
            :label="tab.label"
            :name="tab.name"
            :closable="tab.closable"
            :disabled="false"
            :lazy="false"
          >
            <div class="tab-content">
              <h4>\{\{ tab.label \}\}</h4>
              <p>\{\{ tab.content \}\}</p>
            </div>
          </TabPane> </Tab
        >`}}
      </CodeToggle>
    </section>

    <!-- 带图标的标签 -->
    <section class="demo-section">
      <h3>带图标的标签</h3>
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
        <TabPane name="data" label="数据分析">
          <template #label>
            <span class="tab-label">
              <Icon name="chart-pie" :size="16" />
              <span>数据分析</span>
            </span>
          </template>
          <div class="tab-content">
            <h4>数据分析</h4>
            <p>这里是数据分析的内容</p>
          </div>
        </TabPane>
      </Tab>

      <CodeToggle>
        {{`<Tab v-model="activeName4" type="card">
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
          <TabPane name="data" label="数据分析">
            <template #label>
              <span class="tab-label">
                <Icon name="chart-pie" :size="16" />
                <span>数据分析</span>
              </span>
            </template>
            <div class="tab-content">
              <h4>数据分析</h4>
              <p>这里是数据分析的内容</p>
            </div>
          </TabPane> </Tab
        >`}}
      </CodeToggle>
    </section>

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
                <th>类型</th>
                <th>默认值</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>modelValue</code></td>
                <td><code>string | number</code></td>
                <td><code>-</code></td>
                <td>当前激活的标签页名称，支持 v-model</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td><code>'card' | 'border-card'</code></td>
                <td><code>-</code></td>
                <td>标签页类型，card为卡片式，border-card为边框卡片式</td>
              </tr>
              <tr>
                <td><code>closable</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>标签是否可关闭</td>
              </tr>
              <tr>
                <td><code>addable</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>标签是否可增加</td>
              </tr>
              <tr>
                <td><code>editable</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>标签是否同时可增加和关闭</td>
              </tr>
              <tr>
                <td><code>tabPosition</code></td>
                <td><code>'top' | 'right' | 'bottom' | 'left'</code></td>
                <td><code>'top'</code></td>
                <td>标签位置</td>
              </tr>
              <tr>
                <td><code>stretch</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>标签的宽度是否自撑开</td>
              </tr>
              <tr>
                <td><code>beforeLeave</code></td>
                <td><code>Function</code></td>
                <td><code>-</code></td>
                <td>切换标签页前的钩子函数，返回 false 可以阻止切换</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tab 组件事件</h3>
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
                <td><code>tab-click</code></td>
                <td><code>tab: any</code></td>
                <td>tab 被选中时触发</td>
              </tr>
              <tr>
                <td><code>tab-change</code></td>
                <td><code>name: string | number</code></td>
                <td>tab 切换时触发</td>
              </tr>
              <tr>
                <td><code>tab-remove</code></td>
                <td><code>name: string | number</code></td>
                <td>tab 被移除时触发</td>
              </tr>
              <tr>
                <td><code>tab-add</code></td>
                <td><code>event: any</code></td>
                <td>tab 被增加时触发</td>
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
                <th>类型</th>
                <th>默认值</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>label</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>选项卡标题</td>
              </tr>
              <tr>
                <td><code>name</code></td>
                <td><code>string | number</code></td>
                <td><code>-</code></td>
                <td>与选项卡绑定值 value 对应的标识符，表示选项卡别名</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否禁用</td>
              </tr>
              <tr>
                <td><code>closable</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>标签是否可关闭</td>
              </tr>
              <tr>
                <td><code>lazy</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>标签是否延迟渲染</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>插槽</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>插槽名</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>label</code></td>
                <td>自定义标签页标题内容</td>
              </tr>
              <tr>
                <td><code>default</code></td>
                <td>标签页内容</td>
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
import CodeToggle from "./CodeToggle.vue";

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

.demo-section {
  margin-bottom: 40px;
}

.demo-section h3 {
  color: #555;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

.tab-content {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 4px;
}

.tab-content h4 {
  margin: 0 0 10px 0;
  color: #333;
}

.tab-content p {
  margin: 0;
  color: #666;
}

.tab-label {
  display: flex;
  align-items: center;
  gap: 6px;
}

.tab-label span {
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
  font-weight: 600;
  border-bottom: 2px solid #e1e8ed;
  padding-bottom: 8px;
}

.api-docs h3:first-child {
  margin-top: 0;
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
  background: #f8f9fa;
  color: #2c3e50;
  font-weight: 600;
  padding: 12px 16px;
  text-align: left;
  border-bottom: 2px solid #e1e8ed;
  font-size: 14px;
}

.api-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  color: #2c3e50;
  font-size: 14px;
  line-height: 1.5;
}

.api-table tr:last-child td {
  border-bottom: none;
}

.api-table code {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 13px;
  font-weight: 500;
}

.code-block {
  background: #2c3e50;
  border-radius: 6px;
  overflow: hidden;
  margin: 15px 0;
}

.code-block pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 13px;
  line-height: 1.5;
  color: #ecf0f1;
}

.code-block code {
  color: #ecf0f1;
  background: none;
  padding: 0;
  font-size: 13px;
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

  .code-block pre {
    padding: 10px;
  }

  .code-block code {
    font-size: 12px;
  }
}
</style>
