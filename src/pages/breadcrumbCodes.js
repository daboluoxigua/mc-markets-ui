// Breadcrumb 组件代码示例

export const basicUsageCode = `<template>
  <m-breadcrumb separator=">">
    <m-breadcrumb-item :to="{ path: '/' }">总览</m-breadcrumb-item>
    <m-breadcrumb-item>资金记录</m-breadcrumb-item>
  </m-breadcrumb>
</template>`

export const iconSeparatorCode = `<template>
  <m-breadcrumb :separator-icon="ArrowRight">
    <m-breadcrumb-item :to="{ path: '/' }">homepage</m-breadcrumb-item>
    <m-breadcrumb-item>promotion management</m-breadcrumb-item>
    <m-breadcrumb-item>promotion list</m-breadcrumb-item>
    <m-breadcrumb-item>promotion detail</m-breadcrumb-item>
  </m-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>`

export const customSeparatorCode = `<template>
  <m-breadcrumb separator=">">
    <m-breadcrumb-item :to="{ path: '/' }">首页</m-breadcrumb-item>
    <m-breadcrumb-item>产品管理</m-breadcrumb-item>
    <m-breadcrumb-item>产品列表</m-breadcrumb-item>
    <m-breadcrumb-item>产品详情</m-breadcrumb-item>
  </m-breadcrumb>
  
  <m-breadcrumb separator="|" style="margin-top: 16px;">
    <m-breadcrumb-item :to="{ path: '/' }">首页</m-breadcrumb-item>
    <m-breadcrumb-item>用户管理</m-breadcrumb-item>
    <m-breadcrumb-item>用户列表</m-breadcrumb-item>
    <m-breadcrumb-item>用户详情</m-breadcrumb-item>
  </m-breadcrumb>
</template>`

export const routerCode = `<template>
  <m-breadcrumb separator="/">
    <m-breadcrumb-item :to="{ path: '/' }">首页</m-breadcrumb-item>
    <m-breadcrumb-item :to="{ path: '/button' }">按钮组件</m-breadcrumb-item>
    <m-breadcrumb-item :to="{ path: '/input' }">输入框组件</m-breadcrumb-item>
    <m-breadcrumb-item>当前页面</m-breadcrumb-item>
  </m-breadcrumb>
</template>`

export const disabledCode = `<template>
  <m-breadcrumb separator="/">
    <m-breadcrumb-item>首页</m-breadcrumb-item>
    <m-breadcrumb-item>产品管理</m-breadcrumb-item>
    <m-breadcrumb-item>产品列表</m-breadcrumb-item>
    <m-breadcrumb-item>产品详情</m-breadcrumb-item>
  </m-breadcrumb>
</template>`
