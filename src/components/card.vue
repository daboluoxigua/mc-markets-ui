<template>
  <div class="card-demo">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <template #preview>
        <Card class="box-card">
          <template #header>
            <div class="card-header">
              <span>卡片名称</span>
              <Button class="button" text>操作按钮</Button>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </Card>
      </template>
      <template #code>
        <pre><code>&lt;Card class="box-card"&gt;
  &lt;template #header&gt;
    &lt;div class="card-header"&gt;
      &lt;span&gt;卡片名称&lt;/span&gt;
      &lt;Button class="button" text&gt;操作按钮&lt;/Button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;div v-for="o in 4" :key="o" class="text item"&gt;
    {{ "列表内容 " + o }}
  &lt;/div&gt;
&lt;/Card&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 简单卡片 -->
    <DemoSection title="简单卡片">
      <template #preview>
        <Card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </Card>
      </template>
      <template #code>
        <pre><code>&lt;Card class="box-card"&gt;
  &lt;div v-for="o in 4" :key="o" class="text item"&gt;
    {{ "列表内容 " + o }}
  &lt;/div&gt;
&lt;/Card&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 带图片 -->
    <DemoSection title="带图片">
      <template #preview>
        <Card class="box-card">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            style="width: 100%" />
          <div style="padding: 14px">
            <span>好吃的汉堡</span>
            <div class="bottom">
              <time class="time">2021-04-01 20:00:00</time>
              <Button class="button" text>操作按钮</Button>
            </div>
          </div>
        </Card>
      </template>
      <template #code>
        <pre><code>&lt;Card class="box-card"&gt;
  &lt;img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    style="width: 100%" /&gt;
  &lt;div style="padding: 14px"&gt;
    &lt;span&gt;好吃的汉堡&lt;/span&gt;
    &lt;div class="bottom"&gt;
      &lt;time class="time"&gt;2021-04-01 20:00:00&lt;/time&gt;
      &lt;Button class="button" text&gt;操作按钮&lt;/Button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/Card&gt;</code></pre>
      </template>
    </DemoSection>

    <!-- 阴影效果 -->
    <DemoSection title="阴影效果">
      <template #preview>
        <div class="demo-shadow">
          <Card class="box-card" shadow="always">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "总是显示 " + o }}
            </div>
          </Card>
        </div>
        <div class="demo-shadow">
          <Card class="box-card" shadow="hover">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "悬停显示 " + o }}
            </div>
          </Card>
        </div>
        <div class="demo-shadow">
          <Card class="box-card" shadow="never">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "从不显示 " + o }}
            </div>
          </Card>
        </div>
      </template>
      <template #code>
        <pre><code>&lt;Card class="box-card" shadow="always"&gt;
  &lt;div v-for="o in 4" :key="o" class="text item"&gt;
    {{ "总是显示 " + o }}
  &lt;/div&gt;
&lt;/Card&gt;
&lt;Card class="box-card" shadow="hover"&gt;
  &lt;div v-for="o in 4" :key="o" class="text item"&gt;
    {{ "悬停显示 " + o }}
  &lt;/div&gt;
&lt;/Card&gt;
&lt;Card class="box-card" shadow="never"&gt;
  &lt;div v-for="o in 4" :key="o" class="text item"&gt;
    {{ "从不显示 " + o }}
  &lt;/div&gt;
&lt;/Card&gt;</code></pre>
      </template>
    </DemoSection>
  </div>
</template>

<script setup>
import { Card, Button } from "@mc-markets/ui";
import DemoSection from "./DemoSection.vue";
</script>

<style scoped>
.card-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}


.box-card {
  width: 300px;
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.time {
  font-size: 13px;
  color: #999;
}

.demo-shadow {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .card-demo {
    padding: 15px;
  }

  .box-card {
    width: 100%;
  }

  .demo-shadow {
    display: block;
    margin-right: 0;
  }
}
</style>
