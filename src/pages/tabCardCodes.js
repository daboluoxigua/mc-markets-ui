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

