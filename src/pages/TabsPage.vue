<template>
  <div class="tabs-page">
    <h2>Tabs</h2>
    <div class="tabs-demo">
      <Tab v-model="activeTab">
        <TabPane label="用户管理" name="user">
          <div class="tab-content">
            <h3>用户管理</h3>
            <p>这里是用户管理的内容</p>
          </div>
        </TabPane>
        <TabPane label="配置管理" name="config">
          <div class="tab-content">
            <h3>配置管理</h3>
            <p>这里是配置管理的内容</p>
          </div>
        </TabPane>
        <TabPane label="角色管理" name="role">
          <div class="tab-content">
            <h3>角色管理</h3>
            <p>这里是角色管理的内容</p>
          </div>
        </TabPane>
        <TabPane label="定时任务补偿" name="task">
          <div class="tab-content">
            <h3>定时任务补偿</h3>
            <p>这里是定时任务补偿的内容</p>
          </div>
        </TabPane>
      </Tab>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Tab, TabPane } from '@mc-markets/ui'

const activeTab = ref('user')
</script>

<style scoped>
.tabs-page {
  padding: 20px;
}

.tabs-demo {
  margin-top: 20px;
}

.tab-content {
  padding: 20px;
  background: var(--el-bg-color);
  border-radius: 8px;
  margin-top: 10px;
}

.tab-content h3 {
  margin-bottom: 10px;
  color: var(--el-text-color-primary);
}

.tab-content p {
  color: var(--el-text-color-regular);
  line-height: 1.6;
}
</style>
