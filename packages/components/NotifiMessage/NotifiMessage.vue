<template>
  <teleport to="body">
    <transition-group name="notification" tag="div" class="notification-container">
      <div
        v-for="notification in notifications"
        :key="notification.id"
        :class="[
          'custom-notification',
          `notification-${notification.position}`
        ]"
      >
        <!-- 图标 -->
        <div class="notification-icon">
          <img 
            src="https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/MCImages/userCenter/icon-quota-tip.png" 
            alt="notification icon"
          />
        </div>

        <!-- 内容区域 -->
        <div class="notification-content">
          <!-- 标题 -->
          <div class="notification-title">{{ notification.title }}</div>
          
          <!-- 消息内容 -->
          <div class="notification-message">{{ notification.message }}</div>
          
          <!-- 自定义插槽内容 -->
          <div v-if="notification.slotContent" class="notification-action">
            <component :is="notification.slotContent" />
          </div>
        </div>

        <!-- 关闭按钮 -->
        <button 
          v-if="notification.showClose"
          class="notification-close"
          @click="closeNotification(notification.id)"
        >
          ×
        </button>
      </div>
    </transition-group>
  </teleport>
</template>

<script>
import { ref } from 'vue'

// 全局通知列表
const notifications = ref([])
let notificationId = 0

// 创建 NotifiMessage 静态方法对象
const NotifiMessage = {
  // 默认配置
  defaultOptions: {
    title: '',
    message: '',
    duration: 4500,
    position: 'top-right',
    showClose: true,
    offset: 20
  },

  // 显示通知
  show(options = {}) {
    const config = {
      ...this.defaultOptions,
      ...options,
      id: ++notificationId
    }

    // 添加到通知列表
    notifications.value.push(config)

    // 如果设置了自动关闭时间，则自动关闭
    if (config.duration > 0) {
      setTimeout(() => {
        this.close(config.id)
      }, config.duration)
    }

    return {
      close: () => this.close(config.id)
    }
  },

  // 关闭指定通知
  close(id) {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  },

  // 关闭所有通知
  closeAll() {
    notifications.value = []
  },

  // 便捷方法
  success(options = {}) {
    return this.show(options)
  },

  warning(options = {}) {
    return this.show(options)
  },

  error(options = {}) {
    return this.show(options)
  }
}

// 关闭通知的方法
const closeNotification = (id) => {
  const index = notifications.value.findIndex(n => n.id === id)
  if (index > -1) {
    notifications.value.splice(index, 1)
  }
}


// Vue 组件定义
export default {
  name: 'MNotifiMessage',
  setup() {
    return {
      notifications,
      closeNotification
    }
  }
}

// 导出类供直接使用
export { NotifiMessage }
</script>

<style lang="scss">
.notification-container {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
}

.custom-notification {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 400px;
  background: #201F24;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 4px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
  z-index: 9999;
  
  // 多个通知的堆叠效果
  &:nth-child(2) { top: 100px; }
  &:nth-child(3) { top: 180px; }
  &:nth-child(4) { top: 260px; }
  &:nth-child(5) { top: 340px; }
  
  .notification-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform: translate(-9px, -8px);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  
  .notification-content {
    flex: 1;
    
    .notification-title {
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .notification-message {
      color: rgba(255, 255, 255, 0.8);
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 16px;
    }
    
    .notification-action {
      .custom-action-link {
        color: #FFD905;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.2s ease;
        
        &:hover {
          color: #FFF;
        }
        
        span {
          line-height: 1;
        }
        
        .arrow {
          transition: transform 0.2s ease;
          display: flex;
          align-items: center;
          line-height: 1;
        }
        
        &:hover .arrow {
          transform: translateX(2px);
        }
      }
    }
  }
  
  .notification-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 20px;
    height: 20px;
    border: none;
    background: transparent;
    color: var(--icon-tertiary, #999);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    line-height: 1;
    opacity: 0.6;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.1);
    }
  }
}

// 动画效果
.notification-enter-active {
  transition: all 0.3s ease;
}

.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.notification-move {
  transition: transform 0.3s ease;
}

// 响应式设计
@media (max-width: 480px) {
  .custom-notification {
    width: calc(100vw - 40px);
    left: 20px !important;
    right: 20px !important;
  }
}
</style>
