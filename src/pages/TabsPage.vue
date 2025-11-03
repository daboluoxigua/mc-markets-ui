<template>
  <div class="tabs-page">
    <!-- 基础使用 -->
    <DemoSection 
      title="基础使用"
      :code="basicUsageCode"
    >
      <div class="demo-container">
        <m-button @click="tabsSwitch">切换tabs</m-button>
        <m-button @click="activeName='b'">切换到b</m-button>
        <m-tabs v-model="activeName" @tab-click="handleTabClick" @tab-change="handleTabChange">
          <m-tab-pane 
            v-for="tab in tabs" 
            :key="tab.name"
            :label="tab.label" 
            :name="tab.name"
          >
            {{ tab.content }}
          </m-tab-pane>
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
import { Message } from '@mc-markets/ui'
import { basicUsageCode } from './tabsCodes.js'

// 响应式数据
const activeName = ref('a')

// Tab 数据
const tabs1 = ref([
  { label: '1', name: 'a', content: 'a' },
  { label: '2', name: 'b', content: 'b' },
  { label: '3', name: 'c', content: 'c' },
  { label: '4', name: 'd', content: 'd' },
  { label: '5', name: 'e', content: 'e' },
  { label: '6', name: 'f', content: 'f' },
  { label: '7', name: 'g', content: 'g' },
  { label: '8', name: 'h', content: 'h' },
  { label: '9', name: 'i', content: 'i' },
  { label: '10', name: 'j', content: 'j' },
  { label: '11', name: 'k', content: 'k' },
  { label: '12', name: 'l', content: 'l' },
  { label: '13', name: 'm', content: 'm' },
  { label: '14', name: 'n', content: 'n' },
  { label: '15', name: 'o', content: 'o' },
  { label: '16', name: 'p', content: 'p' },
  { label: '17', name: 'q', content: 'q' },
  { label: '18', name: 'r', content: 'r' },
  { label: '19', name: 's', content: 's' },
  { label: '20', name: 't', content: 't' },
  { label: '21', name: 'u', content: 'u' },
])
const tabs2 = ref([
  { label: '4', name: 'd', content: 'd' },
  { label: '3', name: 'c', content: 'c' },
  { label: '2', name: 'b', content: 'b' },
])

// 当前显示的 tabs 列表
const tabs = ref(tabs1.value)

const tabsSwitch = () => {
  // 切换 tabs1 和 tabs2
  tabs.value = tabs.value === tabs1.value ? tabs2.value : tabs1.value
  // 切换到新列表的第一个标签
  activeName.value = tabs.value[0].name
}
// Tabs API 文档数据
const tabsApiProps = [
  {
    name: 'model-value / v-model',
    type: 'string / number',
    default: '—',
    description: '绑定值，选中选项卡的 name，默认值是第一个 tab 的 name'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: '标签是否可关闭'
  }
]

const tabsApiEvents = [
  {
    name: 'tab-click',
    description: 'tab 被选中时触发',
    params: 'tabName: string | number'
  },
  {
    name: 'tab-change',
    description: 'activeName 改变时触发',
    params: 'newValue: string | number, oldValue: string | number'
  },
  {
    name: 'tab-remove',
    description: '点击 tab 移除按钮时触发',
    params: 'tabName: string | number'
  },
  {
    name: 'tab-add',
    description: '点击 tab 新增按钮时触发',
    params: '—'
  },
  {
    name: 'edit',
    description: '点击 tab 的新增或移除按钮后触发',
    params: 'tabName: string | number | null, action: "add" | "remove"'
  }
]

const tabsApiSlots = [
  {
    name: 'default',
    description: '默认插槽',
    subTags: 'Tab-pane'
  }
]

const tabsApiExposes = [
  {
    name: 'activeTab',
    description: '当前活动的面板名称',
    type: 'Ref<string | number>'
  },
  {
    name: 'tabs',
    description: '所有注册的tab信息',
    type: 'Ref<Array>'
  },
  {
    name: 'handleTabClick',
    description: '处理tab点击的方法',
    type: 'Function'
  },
  {
    name: 'handleTabRemove',
    description: '处理tab移除的方法',
    type: 'Function'
  },
  {
    name: 'handleTabAdd',
    description: '处理tab添加的方法',
    type: 'Function'
  },
  {
    name: 'updateActiveBarPosition',
    description: '更新活动条位置的方法',
    type: 'Function'
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
    name: 'name',
    type: 'string / number',
    default: '—',
    description: '与选项卡绑定值 value 对应的标识符，表示选项卡别名。默认值是tab面板的序列号，如第一个 tab 是 0'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    description: '是否禁用'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'false',
    description: '标签是否可关闭'
  }
]

const tabPaneApiEvents = []

const tabPaneApiSlots = [
  {
    name: 'default',
    description: 'Tab-pane 的内容'
  }
]

// 方法
const handleTabClick = (tabName) => {
  Message.success(`切换到标签: ${tabName}`)
}

const handleTabChange = (newValue, oldValue) => {
  Message.success(`标签从 ${oldValue} 切换到 ${newValue}`)
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
