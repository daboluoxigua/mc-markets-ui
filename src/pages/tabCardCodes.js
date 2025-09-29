// TabCard 组件代码示例

export const basicUsageCode = `<template>
  <m-tab-card 
    v-model="activeTab1" 
    :options="tabOptions1"
    @change="handleTabChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const activeTab1 = ref('transaction')
const tabOptions1 = ref([
  { label: '交易流水', name: 'transaction' },
  { label: '资金记录', name: 'fund' }
])

const handleTabChange = (newValue, oldValue) => {
  console.log('标签切换:', { newValue, oldValue })
}
</script>`

export const subComponentCode = `<template>
  <m-tab-card v-model="activeTab2">
    <m-tab-card-item 
      v-for="option in tabOptions2" 
      :key="option.name"
      :name="option.name"
      :label="option.label"
      :disabled="option.disabled"
    />
  </m-tab-card>
</template>

<script setup>
import { ref } from 'vue'

const activeTab2 = ref('option1')
const tabOptions2 = ref([
  { label: '选项一', name: 'option1' },
  { label: '选项二', name: 'option2' },
  { label: '选项三', name: 'option3', disabled: true }
])
</script>`

export const disabledCode = `<template>
  <m-tab-card 
    v-model="activeTab3" 
    :options="tabOptions3"
    :disabled="isDisabled"
  />
  <m-button @click="toggleDisabled">
    {{ isDisabled ? '启用' : '禁用' }} 整体组件
  </m-button>
</template>

<script setup>
import { ref } from 'vue'

const activeTab3 = ref('active')
const isDisabled = ref(false)
const tabOptions3 = ref([
  { label: '活跃', name: 'active' },
  { label: '禁用', name: 'disabled', disabled: true },
  { label: '正常', name: 'normal' }
])

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value
}
</script>`

export const themeCode = `<template>
  <div class="theme-demo light-theme">
    <h3>浅色主题</h3>
    <m-tab-card 
      v-model="activeTab4" 
      :options="tabOptions1"
    />
  </div>
  
  <div class="theme-demo dark-theme">
    <h3>深色主题</h3>
    <m-tab-card 
      v-model="activeTab5" 
      :options="tabOptions1"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab4 = ref('light1')
const activeTab5 = ref('dark1')
const tabOptions1 = ref([
  { label: '交易流水', name: 'transaction' },
  { label: '资金记录', name: 'fund' }
])
</script>

<style scoped>
.theme-demo {
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.theme-demo.light-theme {
  background: #f5f5f5;
  color: #333;
}

.theme-demo.dark-theme {
  background: #1a1a1a;
  color: #fff;
}
</style>`
