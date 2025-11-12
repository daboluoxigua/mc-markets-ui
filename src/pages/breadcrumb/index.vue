<template>
  <div class="breadcrumb-page">
    <div class="page-header">
      <h1>Breadcrumb 面包屑</h1>
      <p>显示当前页面的路径，快速返回之前的任意页面</p>
    </div>

    <DemoSection :component="sections" />

    <div class="demo-section">
      <h2>API 文档</h2>

      <h3>Breadcrumb Attributes</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>属性名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>items</td>
            <td>面包屑数据数组</td>
            <td>Array</td>
            <td>[]</td>
          </tr>
        </tbody>
      </table>

      <h3>Breadcrumb Events</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>click</td>
            <td>点击面包屑项时触发</td>
            <td>被点击的面包屑项</td>
          </tr>
        </tbody>
      </table>

      <h3>Item 数据结构</h3>
      <table class="api-table">
        <thead>
          <tr>
            <th>属性名</th>
            <th>说明</th>
            <th>类型</th>
            <th>必填</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>显示文本</td>
            <td>String</td>
            <td>是</td>
          </tr>
          <tr>
            <td>to</td>
            <td>跳转路径，不设置则不可点击</td>
            <td>String / Object</td>
            <td>否</td>
          </tr>
          <tr>
            <td>replace</td>
            <td>是否替换历史记录</td>
            <td>Boolean</td>
            <td>否</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";

import Basic from "./components/basic.vue";
import Router from "./components/router.vue";
import Disabled from "./components/disabled.vue";

const sections = [Basic, Router, Disabled];
</script>

<style lang="scss" scoped>
.breadcrumb-page {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 32px;

  h1 {
    font-size: 28px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 8px 0;
  }

  p {
    font-size: 16px;
    color: var(--text-secondary);
    margin: 0;
  }
}

.demo-section {
  margin-top: 40px;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 18px;
    margin: 24px 0 12px;
  }

  .api-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;

    th,
    td {
      padding: 12px 16px;
      border: 1px solid var(--border-primary);
      text-align: left;
    }
  }
}
</style>

