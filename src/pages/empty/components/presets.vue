<demo>
## 所有预设图片
</demo>
<!-- #region snippet -->
<template>
  <div class="example-empty-block">
    <div class="example-demonstration">共 16 种预设图片类型，通过 image 属性使用。默认为 orders。</div>
    <div class="empty-demo-container">
      <div class="empty-grid">
        <div v-for="item in presets" :key="item.image" class="empty-item">
          <m-empty :image="item.image" :description="item.description" />
          <div class="empty-label">{{ item.label }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const presets = [
  { image: "404", description: "页面未找到", label: "404" },
  { image: "billing", description: "暂无账单", label: "billing" },
  { image: "cart", description: "购物车为空", label: "cart" },
  { image: "comments", description: "暂无评论", label: "comments" },
  { image: "dashboard", description: "仪表盘为空", label: "dashboard" },
  { image: "files", description: "暂无文件", label: "files" },
  { image: "inbox", description: "收件箱为空", label: "inbox" },
  { image: "location", description: "未找到位置", label: "location" },
  { image: "network", description: "网络错误", label: "network" },
  { image: "notifications", description: "暂无通知", label: "notifications" },
  { image: "orders", description: "暂无订单", label: "orders (默认)" },
  { image: "records", description: "暂无记录", label: "records" },
  { image: "session", description: "会话已过期", label: "session" },
  { image: "subscription", description: "暂无订阅", label: "subscription" },
  { image: "todo", description: "暂无待办事项", label: "todo" },
  { image: "wishlist", description: "愿望清单为空", label: "wishlist" },
];
</script>

<style scoped lang="scss">
.empty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}

.empty-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.empty-label {
  font-size: 14px;
  color: var(--el-text-color-secondary);
}
</style>
<!-- #endregion snippet -->
