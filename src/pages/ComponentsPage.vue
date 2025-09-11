<template>
  <div class="components-page">
    <h2>组件展示</h2>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="demo-card">
          <template #header>
            <div class="card-header">
              <span>按钮组件</span>
            </div>
          </template>
          <div class="button-group">
            <Button type="primary">
              <Icon name="plus" :size="16" style="margin-right: 4px" />
              主要按钮
            </Button>
            <Button type="success">
              <Icon
                name="circle-check"
                :size="16"
                style="margin-right: 4px"
              />
              成功按钮
            </Button>
            <Button type="warning">
              <Icon
                name="alert-circle"
                :size="16"
                style="margin-right: 4px"
              />
              警告按钮
            </Button>
            <Button type="danger">
              <Icon
                name="circle-x"
                :size="16"
                style="margin-right: 4px"
              />
              危险按钮
            </Button>
            <Button type="info">
              <Icon
                name="circle-help"
                :size="16"
                style="margin-right: 4px"
              />
              信息按钮
            </Button>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="demo-card">
          <template #header>
            <div class="card-header">
              <span>输入组件</span>
            </div>
          </template>
          <div class="input-group">
            <el-input v-model="inputValue" placeholder="请输入内容" />
            <el-input
              v-model="inputValue"
              placeholder="带字体图标"
              style="margin-top: 10px"
            >
              <template #prefix>
                <Icon name="search" :size="16" />
              </template>
            </el-input>
            <el-input
              v-model="inputValue"
              placeholder="带后缀图标"
              style="margin-top: 10px"
            >
              <template #suffix>
                <Icon name="eye" :size="16" />
              </template>
            </el-input>
          </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card class="demo-card">
          <template #header>
            <div class="card-header">
              <span>字体图标</span>
            </div>
          </template>
          <div class="icon-group">
            <div class="icon-row">
              <Icon name="home-filled" :size="20" />
              <Icon name="user-round" :size="20" />
              <Icon name="search" :size="20" />
              <Icon name="star-filled" :size="20" />
            </div>
            <div class="icon-row">
              <Icon name="refresh-cw" :size="20" :spin="true" />
              <Icon name="heart-handshake" :size="20" :pulse="true" />
              <Icon name="arrow-right-left" :size="20" :rotate="45" />
              <Icon name="circle-check" :size="20" color="#67c23a" />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon, Button } from '@mc-markets/ui'

const inputValue = ref('')
</script>

<style scoped>
.components-page {
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.icon-row {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}
</style>
