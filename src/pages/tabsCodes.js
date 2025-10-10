// Tabs 组件代码示例

export const basicUsageCode = `<template>
  <m-tabs v-model="activeName" @tab-click="handleTabClick" @tab-change="handleTabChange">
    <m-tab-pane label="User" name="first">User 内容</m-tab-pane>
    <m-tab-pane label="Config" name="second">Config 内容</m-tab-pane>
    <m-tab-pane label="Role" name="third">Role 内容</m-tab-pane>
    <m-tab-pane label="Task" name="fourth">Task 内容</m-tab-pane>
  </m-tabs>
</template>

<script setup>
import { ref } from 'vue'
import { Message } from '@mc-markets/ui'

const activeName = ref('first')

const handleTabClick = (tabName) => {
  Message.success(\`切换到标签: \${tabName}\`)
}

const handleTabChange = (newValue, oldValue) => {
  Message.success(\`标签从 \${oldValue} 切换到 \${newValue}\`)
}
</script>`

