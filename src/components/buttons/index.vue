<template>
  <div class="button-demo">
    <MCButton>默认按钮</MCButton>
    <!-- 基础按钮类型 -->
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>基础按钮类型</span>
        </div>
      </template>
      <div class="button-group">
        <MCButton>默认按钮</MCButton>
        <MCButton type="primary">主要按钮</MCButton>
        <MCButton type="success">成功按钮</MCButton>
        <MCButton type="warning">警告按钮</MCButton>
        <MCButton type="danger">危险按钮</MCButton>
        <MCButton type="info">信息按钮</MCButton>
        <MCButton type="text">文本按钮</MCButton>
      </div>
    </el-card>

    <!-- 按钮尺寸 -->
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>按钮尺寸</span>
        </div>
      </template>
      <div class="button-group">
        <MCButton size="large" type="primary">大按钮</MCButton>
        <MCButton type="primary">默认按钮</MCButton>
        <MCButton size="small" type="primary">小按钮</MCButton>
        <MCButton size="mini" type="primary">迷你按钮</MCButton>
      </div>
    </el-card>

    <!-- 按钮状态 -->
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>按钮状态</span>
        </div>
      </template>
      <div class="button-group">
        <MCButton type="primary" :loading="loading" @click="handleLoading">
          {{ loading ? '加载中...' : '点击加载' }}
        </MCButton>
        <MCButton type="success" :disabled="disabled" @click="handleDisabled">
          {{ disabled ? '已禁用' : '可点击' }}
        </MCButton>
        <MCButton type="warning" plain>朴素按钮</MCButton>
        <MCButton type="danger" round>圆角按钮</MCButton>
        <MCButton type="info" circle>
          <el-icon><Search /></el-icon>
        </MCButton>
      </div>
    </el-card>

    <!-- 按钮形状 -->
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>按钮形状</span>
        </div>
      </template>
      <div class="button-group">
        <MCButton type="primary">默认形状</MCButton>
        <MCButton type="primary" round>圆角按钮</MCButton>
        <MCButton type="primary" circle>
          <el-icon><Edit /></el-icon>
        </MCButton>
      </div>
    </el-card>

    <!-- 图标按钮 -->
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>图标按钮</span>
        </div>
      </template>
      <div class="button-group">
        <MCButton type="primary">
          <el-icon><Search /></el-icon>
          搜索
        </MCButton>
        <MCButton type="success">
          <el-icon><Edit /></el-icon>
          编辑
        </MCButton>
        <MCButton type="warning">
          <el-icon><Delete /></el-icon>
          删除
        </MCButton>
        <MCButton type="danger">
          <el-icon><Download /></el-icon>
          下载
        </MCButton>
        <MCButton type="info">
          <el-icon><Upload /></el-icon>
          上传
        </MCButton>
      </div>
    </el-card>

    <!-- 按钮组 -->
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>按钮组</span>
        </div>
      </template>
      <div class="button-group">
        <el-button-group>
          <MCButton type="primary" :icon="ArrowLeft">上一页</MCButton>
          <MCButton type="primary" :icon="ArrowRight" icon-position="right">下一页</MCButton>
        </el-button-group>
        <el-button-group>
          <MCButton type="primary" :icon="Edit">编辑</MCButton>
          <MCButton type="success" :icon="Check">保存</MCButton>
          <MCButton type="danger" :icon="Close">取消</MCButton>
        </el-button-group>
      </div>
    </el-card>

    <!-- 交互演示 -->
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>交互演示</span>
        </div>
      </template>
      <div class="button-group">
        <MCButton type="primary" @click="handleClick">点击事件</MCButton>
        <MCButton type="success" @click="handleConfirm">确认对话框</MCButton>
        <MCButton type="warning" @click="handleAlert">警告提示</MCButton>
        <MCButton type="danger" @click="handleMessage">消息提示</MCButton>
        <MCButton type="info" @click="handleNotification">通知消息</MCButton>
      </div>
    </el-card>

    <!-- 自定义样式按钮 -->
    <el-card class="demo-card">
      <template #header>
        <div class="card-header">
          <span>自定义样式按钮</span>
        </div>
      </template>
      <div class="button-group">
        <MCButton class="custom-button gradient-button">渐变按钮</MCButton>
        <MCButton class="custom-button shadow-button">阴影按钮</MCButton>
        <MCButton class="custom-button neon-button">霓虹按钮</MCButton>
        <MCButton class="custom-button glass-button">玻璃按钮</MCButton>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MCButton from '@/components/button/index.vue'
import { 
  Search, 
  Edit, 
  Delete, 
  Download, 
  Upload, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Close 
} from '@element-plus/icons-vue'

// 响应式数据
const loading = ref(false)
const disabled = ref(false)

// 方法
const handleLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    ElMessage.success('加载完成！')
  }, 2000)
}

const handleDisabled = () => {
  disabled.value = !disabled.value
  ElMessage.info(disabled.value ? '按钮已禁用' : '按钮已启用')
}

const handleClick = () => {
  ElMessage.success('按钮被点击了！')
}

const handleConfirm = async () => {
  try {
    await ElMessageBox.confirm(
      '这是一个确认对话框，您确定要继续吗？',
      '确认操作',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    ElMessage.success('您点击了确定！')
  } catch {
    ElMessage.info('您点击了取消')
  }
}

const handleAlert = () => {
  ElMessageBox.alert('这是一个警告提示！', '警告', {
    confirmButtonText: '知道了',
    type: 'warning'
  })
}

const handleMessage = () => {
  ElMessage({
    message: '这是一条消息提示！',
    type: 'info',
    duration: 3000
  })
}

const handleNotification = () => {
  ElNotification({
    title: '通知标题',
    message: '这是一条通知消息！',
    type: 'success',
    duration: 3000
  })
}
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
    box-shadow: 
      0 0 5px #00ffff,
      inset 0 0 5px #00ffff;

    &:hover {
      background: #00ffff;
      color: #000;
      box-shadow: 
        0 0 20px #00ffff,
        0 0 40px #00ffff,
        0 0 60px #00ffff;
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
