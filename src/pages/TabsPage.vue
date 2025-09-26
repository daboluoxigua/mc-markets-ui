<template>
  <div class="tabs-page">
    <!-- 基础使用 -->
    <DemoSection 
      title="基础使用"
      code="<template>
  <m-tabs v-model='activeName' @tab-click='handleTabClick'>
    <m-tab-pane label='User' name='first'>User 内容</m-tab-pane>
    <m-tab-pane label='Config' name='second'>Config 内容</m-tab-pane>
    <m-tab-pane label='Role' name='third'>Role 内容</m-tab-pane>
    <m-tab-pane label='Task' name='fourth'>Task 内容</m-tab-pane>
  </m-tabs>
</template>

<script setup>
import { ref } from 'vue';

const activeName = ref('first');

const handleTabClick = (tab, event) => {
  console.log(tab, event);
};
</script>"
    >
      <div class="demo-container">
        <m-tabs v-model="activeName" @tab-click="handleTabClick">
          <m-tab-pane label="User" name="first">User 内容</m-tab-pane>
          <m-tab-pane label="Config" name="second">Config 内容</m-tab-pane>
          <m-tab-pane label="Role" name="third">Role 内容</m-tab-pane>
          <m-tab-pane label="Task" name="fourth">Task 内容</m-tab-pane>
        </m-tabs>
      </div>
    </DemoSection>

    <!-- 卡片风格 -->
    <DemoSection 
      title="卡片风格的标签"
      code="<m-tabs v-model='activeName2' type='card' @tab-click='handleTabClick'><m-tab-pane label='User' name='first'>User</m-tab-pane><m-tab-pane label='Config' name='second'>Config</m-tab-pane><m-tab-pane label='Role' name='third'>Role</m-tab-pane></m-tabs>"
    >
      <div class="demo-container">
        <m-tabs v-model="activeName2" type="card" @tab-click="handleTabClick">
          <m-tab-pane label="User" name="first">User 内容</m-tab-pane>
          <m-tab-pane label="Config" name="second">Config 内容</m-tab-pane>
          <m-tab-pane label="Role" name="third">Role 内容</m-tab-pane>
          <m-tab-pane label="Task" name="fourth">Task 内容</m-tab-pane>
        </m-tabs>
      </div>
    </DemoSection>

    <!-- 带边框的卡片风格 -->
    <DemoSection 
      title="带边框的卡片风格"
      code="<m-tabs v-model='activeName3' type='border-card'><m-tab-pane label='User' name='first'>User 内容</m-tab-pane></m-tabs>"
    >
      <div class="demo-container">
        <m-tabs v-model="activeName3" type="border-card">
          <m-tab-pane label="User" name="first">User 内容</m-tab-pane>
          <m-tab-pane label="Config" name="second">Config 内容</m-tab-pane>
          <m-tab-pane label="Role" name="third">Role 内容</m-tab-pane>
          <m-tab-pane label="Task" name="fourth">Task 内容</m-tab-pane>
        </m-tabs>
      </div>
    </DemoSection>

    <!-- 标签位置 -->
    <DemoSection 
      title="标签位置"
      code="<m-tabs v-model='activeName4' :tab-position='tabPosition'><m-tab-pane label='User' name='first'>User 内容</m-tab-pane></m-tabs>"
    >
      <div class="demo-container">
        <div class="position-controls">
          <m-radio-group v-model="tabPosition" @change="handlePositionChange">
            <m-radio-button value="top">top</m-radio-button>
            <m-radio-button value="right">right</m-radio-button>
            <m-radio-button value="bottom">bottom</m-radio-button>
            <m-radio-button value="left">left</m-radio-button>
          </m-radio-group>
        </div>
        <m-tabs v-model="activeName4" :tab-position="tabPosition" class="position-tabs">
          <m-tab-pane label="User" name="first">User 内容</m-tab-pane>
          <m-tab-pane label="Config" name="second">Config 内容</m-tab-pane>
          <m-tab-pane label="Role" name="third">Role 内容</m-tab-pane>
          <m-tab-pane label="Task" name="fourth">Task 内容</m-tab-pane>
        </m-tabs>
      </div>
    </DemoSection>

    <!-- 自定义标签内容 -->
    <DemoSection 
      title="自定义标签内容"
      code="<m-tabs v-model='activeName5' type='border-card'><m-tab-pane name='route'><template #label><span><m-icon name='map-pin' />Route</span></template></m-tab-pane></m-tabs>"
    >
      <div class="demo-container">
        <m-tabs v-model="activeName5" type="border-card">
          <m-tab-pane name="route">
            <template #label>
              <span class="custom-tabs-label">
                <m-icon name="map-pin" />
                <span>Route</span>
              </span>
            </template>
            Route 内容
          </m-tab-pane>
          <m-tab-pane label="Config" name="second">Config 内容</m-tab-pane>
          <m-tab-pane label="Role" name="third">Role 内容</m-tab-pane>
          <m-tab-pane label="Task" name="fourth">Task 内容</m-tab-pane>
        </m-tabs>
      </div>
    </DemoSection>

    <!-- 可关闭的标签 -->
    <DemoSection 
      title="可关闭的标签"
      code="<m-tabs v-model='editableTabsValue' type='card' closable @tab-remove='removeTab'><m-tab-pane label='Tab 1' name='1' closable>Tab 1 内容</m-tab-pane></m-tabs>"
    >
      <div class="demo-container">
        <m-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
          <m-tab-pane
            v-for="item in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            :closable="item.closable"
          >
            {{ item.content }}
          </m-tab-pane>
        </m-tabs>
      </div>
    </DemoSection>

    <!-- 动态增减标签 -->
    <DemoSection 
      title="动态增减标签"
      code="<m-button @click='addTab'>添加标签</m-button><m-tabs v-model='editableTabsValue2' type='card' closable @tab-remove='removeTab2'><m-tab-pane label='Tab 1' name='1'>Tab 1 内容</m-tab-pane></m-tabs>"
    >
      <div class="demo-container">
        <div class="button-group">
          <m-button size="small" @click="addTab(editableTabsValue2)">添加标签</m-button>
        </div>
        <m-tabs
          v-model="editableTabsValue2"
          type="card"
          closable
          @tab-remove="removeTab2"
        >
          <m-tab-pane
            v-for="item in editableTabs2"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            :closable="item.closable"
          >
            {{ item.content }}
          </m-tab-pane>
        </m-tabs>
      </div>
    </DemoSection>

    <!-- 禁用标签 -->
    <DemoSection 
      title="禁用标签"
      code="<m-tabs v-model='activeName6'><m-tab-pane label='User' name='first'>User 内容</m-tab-pane><m-tab-pane label='Config' name='second' disabled>Config 内容（禁用）</m-tab-pane></m-tabs>"
    >
      <div class="demo-container">
        <m-tabs v-model="activeName6">
          <m-tab-pane label="User" name="first">User 内容</m-tab-pane>
          <m-tab-pane label="Config" name="second" disabled>Config 内容（禁用）</m-tab-pane>
          <m-tab-pane label="Role" name="third">Role 内容</m-tab-pane>
          <m-tab-pane label="Task" name="fourth">Task 内容</m-tab-pane>
        </m-tabs>
      </div>
    </DemoSection>

    <!-- Tabs API 文档 -->
    <ApiDocs
      title="Tabs API"
      :props="tabsApiProps"
      props-title="Tabs Attributes"
      :events="tabsApiEvents"
      :slots="tabsApiSlots"
      slots-title="Tabs Slots"
      :exposes="tabsApiExposes"
      exposes-title="Tabs Exposes"
    />

    <!-- Tab-nav API 文档 -->
    <ApiDocs
      title="Tab-nav API"
      :exposes="tabNavApiExposes"
      exposes-title="Tab-nav Exposes"
    />

    <!-- Tab-pane API 文档 -->
    <ApiDocs
      title="Tab-pane API"
      :props="tabPaneApiProps"
      props-title="Tab-pane Attributes"
      :events="tabPaneApiEvents"
      :slots="tabPaneApiSlots"
      slots-title="Tab-pane Slots"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DemoSection from '@/components/DemoSection.vue'
import ApiDocs from '@/components/ApiDocs.vue'
import { Message, MTabs, MTabPane } from '@mc-markets/ui'

// 响应式数据
const activeName = ref('first')
const activeName2 = ref('first')
const activeName3 = ref('first')
const activeName4 = ref('first')
const activeName5 = ref('route')
const activeName6 = ref('first')
const tabPosition = ref('top')

// 可编辑标签数据
const editableTabsValue = ref('2')
const editableTabs = ref([
  { title: 'Tab 1', name: '1', content: 'Tab 1 内容', closable: true },
  { title: 'Tab 2', name: '2', content: 'Tab 2 内容', closable: true },
  { title: 'Tab 3', name: '3', content: 'Tab 3 内容', closable: false }
])

const editableTabsValue2 = ref('2')
const editableTabs2 = ref([
  { title: 'Tab 1', name: '1', content: 'Tab 1 内容', closable: true },
  { title: 'Tab 2', name: '2', content: 'Tab 2 内容', closable: true }
])

let tabIndex = 2

// Tabs API 文档数据
const tabsApiProps = [
  {
    name: 'model-value / v-model',
    type: 'string / number',
    default: '—',
    description: '绑定值，选中选项卡的 name，默认值是第一个 tab 的 name'
  },
  {
    name: 'type',
    type: 'enum',
    default: "''",
    description: '风格类型'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: '标签是否可关闭'
  },
  {
    name: 'addable',
    type: 'boolean',
    default: 'false',
    description: '标签是否可增加'
  },
  {
    name: 'editable',
    type: 'boolean',
    default: 'false',
    description: '标签是否同时可增加和关闭'
  },
  {
    name: 'tab-position',
    type: 'enum',
    default: 'top',
    description: '选项卡所在位置'
  },
  {
    name: 'stretch',
    type: 'boolean',
    default: 'false',
    description: '标签的宽度是否自撑开'
  },
  {
    name: 'before-leave',
    type: 'Function',
    default: '() => true',
    description: '切换标签之前的钩子函数， 若返回 false 或者返回被 reject 的 Promise，则阻止切换。'
  }
]

const tabsApiEvents = [
  {
    name: 'tab-click',
    description: 'tab 被选中时触发',
    params: 'Function'
  },
  {
    name: 'tab-change',
    description: 'activeName 改变时触发',
    params: 'Function'
  },
  {
    name: 'tab-remove',
    description: '点击 tab 移除按钮时触发',
    params: 'Function'
  },
  {
    name: 'tab-add',
    description: '点击 tab 新增按钮时触发',
    params: 'Function'
  },
  {
    name: 'edit',
    description: '点击 tab 的新增或移除按钮后触发',
    params: 'Function'
  }
]

const tabsApiSlots = [
  {
    name: 'default',
    description: '默认插槽',
    subTags: 'Tab-pane'
  },
  {
    name: 'add-icon',
    description: '自定义添加按钮图标',
    version: '2.5.4'
  },
  {
    name: 'addIcon',
    description: '自定义添加按钮图标',
    version: '2.4.0',
    deprecated: true
  }
]

const tabsApiExposes = [
  {
    name: 'currentName',
    description: '当前活动的面板名称',
    type: 'object'
  },
  {
    name: 'tabNavRef',
    description: 'tab-nav 组件实例',
    type: 'object',
    version: '2.9.10'
  }
]

// TabPane API 文档数据
const tabPaneApiProps = [
  {
    name: 'label',
    type: 'string',
    default: "''",
    description: '选项卡标题'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用'
  },
  {
    name: 'name',
    type: 'string / number',
    default: '—',
    description: '与选项卡绑定值 value 对应的标识符，表示选项卡别名。默认值是tab面板的序列号，如第一个 tab 是 0'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: '标签是否可关闭'
  },
  {
    name: 'lazy',
    type: 'boolean',
    default: 'false',
    description: '标签是否延迟渲染'
  }
]

const tabPaneApiEvents = []

const tabPaneApiSlots = [
  {
    name: 'default',
    description: 'Tab-pane 的内容'
  },
  {
    name: 'label',
    description: 'Tab-pane 的标题内容'
  }
]

const tabNavApiExposes = [
  {
    name: 'scrollToActiveTab',
    description: '滚动到活动标签',
    type: 'Function'
  },
  {
    name: 'removeFocus',
    description: '移除聚焦状态',
    type: 'Function'
  },
  {
    name: 'tabListRef',
    description: 'el_tabs__nav html 元素',
    type: 'object',
    version: '2.9.10'
  },
  {
    name: 'tabBarRef',
    description: 'el_tabs__nav bar 实例',
    type: 'object',
    version: '2.9.10'
  }
]

// 方法
const handleTabClick = (tab) => {
  Message.success(`切换到标签: ${tab.name}`)
}

const handlePositionChange = () => {
  // 位置改变时的处理
}

const removeTab = (targetName) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }
  
  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}

const removeTab2 = (targetName) => {
  const tabs = editableTabs2.value
  let activeName = editableTabsValue2.value
  
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }
  
  editableTabsValue2.value = activeName
  editableTabs2.value = tabs.filter((tab) => tab.name !== targetName)
}

const addTab = (targetName) => {
  const newTabName = `${++tabIndex}`
  editableTabs2.value.push({
    title: `New Tab ${tabIndex}`,
    name: newTabName,
    content: `New Tab ${tabIndex} content`,
    closable: true
  })
  editableTabsValue2.value = newTabName
}
</script>

<style scoped lang="scss">
.tabs-page {
  .demo-container {
    margin-bottom: 20px;
  }

  .position-controls {
    margin-bottom: 20px;
  }

  .position-tabs {
    height: 200px;
  }

  .custom-tabs-label {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .button-group {
    margin-bottom: 16px;
  }

  // 响应式设计
  @media (max-width: 768px) {
    .position-tabs {
      height: 150px;
    }
  }
}
</style>
