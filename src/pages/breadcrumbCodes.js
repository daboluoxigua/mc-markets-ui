export const basicUsageCode = `<template>
  <m-breadcrumb :items="basicItems" />
</template>

<script setup>
import { ref } from 'vue'

const basicItems = ref([
  { label: '总览', to: { path: '/' } },
  { label: '资金记录' }
])
</` + `script>`

export const routerCode = `<template>
  <m-breadcrumb :items="routerItems" />
</template>

<script setup>
import { ref } from 'vue'

const routerItems = ref([
  { label: '首页', to: { path: '/' } },
  { label: '按钮组件', to: { path: '/button' } },
  { label: '输入框组件', to: { path: '/input' } },
  { label: '当前页面' }
])
</` + `script>`

export const disabledCode = `<template>
  <m-breadcrumb :items="disabledItems" />
</template>

<script setup>
import { ref } from 'vue'

const disabledItems = ref([
  { label: '首页' },
  { label: '产品管理' },
  { label: '产品列表' },
  { label: '产品详情' }
])
</` + `script>`
