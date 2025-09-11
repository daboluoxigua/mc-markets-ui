<template>
  <div class="badge-demo">
    <!-- 基础用法 -->
    <section class="demo-section">
      <h2>基础用法</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Badge :value="12" class="item">
            <Button size="small">评论</Button>
          </Badge>
          <Badge :value="3" class="item">
            <Button size="small">回复</Button>
          </Badge>
          <Badge :value="1" class="item" type="primary">
            <Button size="small">评论</Button>
          </Badge>
          <Badge :value="2" class="item" type="warning">
            <Button size="small">回复</Button>
          </Badge>
        </div>
        <CodeToggle>
          {{ `<Badge :value="12" class="item">
  <Button size="small">评论</Button>
</Badge>
<Badge :value="3" class="item">
  <Button size="small">回复</Button>
</Badge>
<Badge :value="1" class="item" type="primary">
  <Button size="small">评论</Button>
</Badge>
<Badge :value="2" class="item" type="warning">
  <Button size="small">回复</Button>
</Badge>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 最大值 -->
    <section class="demo-section">
      <h2>最大值</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Badge :value="200" :max="99" class="item">
            <Button size="small">评论</Button>
          </Badge>
          <Badge :value="100" :max="10" class="item">
            <Button size="small">回复</Button>
          </Badge>
        </div>
        <CodeToggle>
          {{ `<Badge :value="200" :max="99" class="item">
  <Button size="small">评论</Button>
</Badge>
<Badge :value="100" :max="10" class="item">
  <Button size="small">回复</Button>
</Badge>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 自定义内容 -->
    <section class="demo-section">
      <h2>自定义内容</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Badge value="new" class="item">
            <Button size="small">评论</Button>
          </Badge>
          <Badge value="hot" class="item">
            <Button size="small">回复</Button>
          </Badge>
        </div>
        <CodeToggle>
          {{ `<Badge value="new" class="item">
  <Button size="small">评论</Button>
</Badge>
<Badge value="hot" class="item">
  <Button size="small">回复</Button>
</Badge>` }}
        </CodeToggle>
      </div>
    </section>

    <!-- 小红点 -->
    <section class="demo-section">
      <h2>小红点</h2>
      <div class="demo-card">
        <div class="demo-preview">
          <Badge is-dot class="item">数据查询</Badge>
          <Badge is-dot class="item">
            <Button class="share-button" icon="share" type="primary">分享</Button>
          </Badge>
        </div>
        <CodeToggle>
          {{ `<Badge is-dot class="item">数据查询</Badge>
<Badge is-dot class="item">
  <Button class="share-button" icon="share" type="primary">分享</Button>
</Badge>` }}
        </CodeToggle>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Badge, Button } from '@mc-markets/ui'
import CodeToggle from './CodeToggle.vue'
</script>

<style scoped>
.badge-demo {
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

.item {
  margin-right: 20px;
  margin-bottom: 20px;
}

.share-button {
  background: #409EFF;
  border: none;
  color: white;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .badge-demo {
    padding: 15px;
  }
  
  .item {
    margin-right: 10px;
  }
}
</style>
