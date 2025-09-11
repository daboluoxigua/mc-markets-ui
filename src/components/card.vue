<template>
  <div class="card-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
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
        </div>
        <CodeToggle>
          <!-- <Card class="box-card">
            <template #header>
              <div class="card-header">
                <span>卡片名称</span>
                <Button class="button" text>操作按钮</Button>
              </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </Card> -->
        </CodeToggle>
      </div>
    </section>

    <!-- 简单卡片 -->
    <section class="demo-section">
      <h2>简单卡片</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </Card>
        </div>
        <CodeToggle>
          <!-- <Card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </Card> -->
        </CodeToggle>
      </div>
    </section>

    <!-- 带图片 -->
    <section class="demo-section">
      <h2>带图片</h2>
      <div class="demo-card">
        <div class="demo-preview">
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
        </div>
        <CodeToggle>
          <!-- <Card class="box-card">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              style="width: 100%" />
            <div style="padding: 14px">
              <span>好吃的汉堡</span>
              <div class="bottom">
                <time class="time">2021-04-01 20:00:00</time>
                <Button class="button" text>操作按钮</Button>
              </div>
            </div>
          </Card>-->
        </CodeToggle>
      </div>
    </section>

    <!-- 阴影效果 -->
    <section class="demo-section">
      <h2>阴影效果</h2>
      <div class="demo-card">
        <div class="demo-preview">
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
        </div>
        <CodeToggle>
          <!--
            <Card class="box-card" shadow="always">
              <div v-for="o in 4" :key="o" class="text item">
                {{ "总是显示 " + o }}
              </div>
            </Card>
            <Card class="box-card" shadow="hover">
              <div v-for="o in 4" :key="o" class="text item">
                {{ "悬停显示 " + o }}
              </div>
            </Card>
            <Card class="box-card" shadow="never">
              <div v-for="o in 4" :key="o" class="text item">
                {{ "从不显示 " + o }}
              </div>
            </Card>-->
        </CodeToggle>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Card, Button } from "@mc-markets/ui";
import CodeToggle from "./CodeToggle.vue";
</script>

<style scoped>
.card-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #555;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}

.demo-section {
  margin-bottom: 40px;
}

/* 演示卡片样式 */
.demo-card {
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  overflow: hidden;
  background: var(--el-bg-color);
  box-shadow: var(--el-box-shadow-light);
}

.demo-preview {
  padding: 20px;
  background: var(--el-bg-color);
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
