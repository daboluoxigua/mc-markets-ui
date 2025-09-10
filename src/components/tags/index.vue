<template>
  <div class="button-demo">
    <!-- 基础按钮类型 -->
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>Dark</span>
        </div>
      </template>
      <div class="button-group">
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          effect="dark"
        >
          {{ item.label }}
        </el-tag>
      </div>
    </el-card>

    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>Light</span>
        </div>
      </template>
      <div class="button-group">
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          effect="light"
        >
          {{ item.label }}
        </el-tag>
      </div>
    </el-card>

    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>Plain</span>
        </div>
      </template>
      <div class="button-group">
        <el-tag
          v-for="item in items"
          :key="item.label"
          :type="item.type"
          effect="plain"
        >
          {{ item.label }}
        </el-tag>
      </div>
    </el-card>
  </div>
</template>

<script setup>
const items = ref([
  { type: "primary", label: "Tag 1" },
  { type: "success", label: "Tag 2" },
  { type: "info", label: "Tag 3" },
  { type: "warning", label: "Tag 4" },
  { type: "danger", label: "Tag 5" },
]);
</script>

<style scoped lang="scss">
.button-demo {
  .demo-card {
    margin-bottom: 20px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  .button-group {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  // 自定义样式按钮
  .custom-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border: none;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .gradient-button {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
    background-size: 300% 300%;
    animation: gradientShift 3s ease infinite;

    &:hover {
      box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    }
  }

  .shadow-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

    &:hover {
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
    }
  }

  .neon-button {
    background: transparent;
    color: #00ffff;
    border: 2px solid #00ffff;
    box-shadow: 0 0 5px #00ffff, inset 0 0 5px #00ffff;

    &:hover {
      background: #00ffff;
      color: #000;
      box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff;
    }
  }

  .glass-button {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #333;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  // 响应式设计
  @media (max-width: 768px) {
    .button-group {
      flex-direction: column;
      align-items: stretch;

      .el-button {
        width: 100%;
        margin-bottom: 8px;
      }
    }
  }
}
</style>
