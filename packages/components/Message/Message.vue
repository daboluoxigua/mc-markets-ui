<template>
  <teleport to="body">
    <transition-group name="message" tag="div" class="message-container">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="[
          'custom-message',
          `message-${message.type}`,
          `message-${message.placement}`,
          { 'message-plain': message.plain }
        ]"
      >
        <!-- 图标 -->
        <div v-if="message.showIcon" class="message-icon">
          <img 
            v-if="message.customIcon"
            :src="message.customIcon"
            alt="custom icon"
            class="message-icon-img"
          />
          <img 
            v-else-if="message.type === 'success'"
            src="https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-success.png"
            alt="success icon"
            class="message-icon-img"
          />
          <img 
            v-else-if="message.type === 'warning'"
            src="https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-warning.png"
            alt="warning icon"
            class="message-icon-img"
          />
          <img 
            v-else-if="message.type === 'error'"
            src="https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-error.png"
            alt="error icon"
            class="message-icon-img"
          />
        </div>

        <!-- 消息内容 -->
        <div class="message-content">
          <component 
            v-if="typeof message.message === 'function'"
            :is="message.message"
          />
          <div 
            v-else-if="message.dangerouslyUseHTMLString"
            v-html="message.message"
          />
          <span v-else>{{ message.message }}</span>
          
          <!-- 重复数量 -->
          <span v-if="message.repeatNum > 1" class="message-repeat">
            {{ message.repeatNum }}
          </span>
        </div>

        <!-- 关闭按钮 -->
        <button 
          v-if="message.showClose"
          class="message-close"
          @click="closeMessage(message.id)"
        >
          ×
        </button>
      </div>
    </transition-group>
  </teleport>
</template>

<script>
import { ref } from 'vue'

// 全局消息列表
const messages = ref([])
let messageId = 0

// 创建 Message 静态方法对象
const Message = {
  // 默认配置
  defaultOptions: {
    message: '',
    type: 'success',
    plain: false,
    customIcon: '',
    dangerouslyUseHTMLString: false,
    customClass: '',
    duration: 3000,
    showClose: false,
    showIcon: true,
    onClose: null,
    offset: 16,
    placement: 'top',
    appendTo: 'body',
    grouping: false,
    repeatNum: 1
  },

  // 显示消息
  show(options = {}) {
    // 如果是字符串，转换为配置对象
    if (typeof options === 'string') {
      options = { message: options }
    }

    const config = {
      ...this.defaultOptions,
      ...options,
      id: ++messageId
    }

    // 分组处理
    if (config.grouping) {
      const existingIndex = messages.value.findIndex(
        m => m.message === config.message && m.type === config.type && m.grouping
      )
      
      if (existingIndex > -1) {
        messages.value[existingIndex].repeatNum++
        return { close: () => this.close(messages.value[existingIndex].id) }
      }
    }

    // 添加到消息列表
    messages.value.push(config)

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

  // 关闭指定消息
  close(id) {
    const index = messages.value.findIndex(m => m.id === id)
    if (index > -1) {
      const message = messages.value[index]
      if (message.onClose) {
        message.onClose(message)
      }
      messages.value.splice(index, 1)
    }
  },

  // 关闭所有消息
  closeAll() {
    messages.value = []
  },

  // 便捷方法
  success(options = {}) {
    if (typeof options === 'string') {
      options = { message: options }
    }
    return this.show({ ...options, type: 'success' })
  },

  warning(options = {}) {
    if (typeof options === 'string') {
      options = { message: options }
    }
    return this.show({ ...options, type: 'warning' })
  },

  error(options = {}) {
    if (typeof options === 'string') {
      options = { message: options }
    }
    return this.show({ ...options, type: 'error' })
  }
}

// 关闭消息的方法
const closeMessage = (id) => {
  Message.close(id)
}

// Vue 组件定义
export default {
  name: 'MMessage',
  setup() {
    return {
      messages,
      closeMessage
    }
  }
}

// 导出类供直接使用
export { Message }
</script>

<style lang="scss">
.message-container {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
}

.custom-message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  max-width: 320px;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  z-index: 9999;
  font-size: 14px;
  
  // 位置控制
  &.message-top {
    top: 20px;
    
    &:nth-child(2) { top: 70px; }
    &:nth-child(3) { top: 120px; }
    &:nth-child(4) { top: 170px; }
    &:nth-child(5) { top: 220px; }
  }
  
  &.message-top-left {
    top: 20px;
    left: 20px;
    transform: none;
    
    &:nth-child(2) { top: 70px; }
    &:nth-child(3) { top: 120px; }
    &:nth-child(4) { top: 170px; }
    &:nth-child(5) { top: 220px; }
  }
  
  &.message-top-right {
    top: 20px;
    right: 20px;
    left: auto;
    transform: none;
    
    &:nth-child(2) { top: 70px; }
    &:nth-child(3) { top: 120px; }
    &:nth-child(4) { top: 170px; }
    &:nth-child(5) { top: 220px; }
  }
  
  &.message-bottom {
    bottom: 20px;
    top: auto;
    
    &:nth-child(2) { bottom: 70px; }
    &:nth-child(3) { bottom: 120px; }
    &:nth-child(4) { bottom: 170px; }
    &:nth-child(5) { bottom: 220px; }
  }
  
  &.message-bottom-left {
    bottom: 20px;
    left: 20px;
    top: auto;
    transform: none;
    
    &:nth-child(2) { bottom: 70px; }
    &:nth-child(3) { bottom: 120px; }
    &:nth-child(4) { bottom: 170px; }
    &:nth-child(5) { bottom: 220px; }
  }
  
  &.message-bottom-right {
    bottom: 20px;
    right: 20px;
    left: auto;
    top: auto;
    transform: none;
    
    &:nth-child(2) { bottom: 70px; }
    &:nth-child(3) { bottom: 120px; }
    &:nth-child(4) { bottom: 170px; }
    &:nth-child(5) { bottom: 220px; }
  }
  
  .message-icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    
    .message-icon-img {
      width: 16px;
      height: 16px;
      object-fit: contain;
    }
  }
  
  .message-content {
    flex: 1;
    line-height: 1.4;
    position: relative;
    
    .message-repeat {
      position: absolute;
      top: -8px;
      right: -8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #666;
      color: white;
      font-size: 10px;
      font-weight: bold;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      border-radius: 8px;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  .message-close {
    flex-shrink: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    margin-left: 8px;
    opacity: 0.6;
    transition: opacity 0.2s ease;
    font-size: 24px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    color: var(--icon-tertiary, #999);
    
    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  
  // 不同类型的样式 - 统一使用 bg-tertiary-hover 背景
  &.message-success {
    background-color: var(--bg-tertiary-hover, #f5f5f5);
    color: var(--all-green-4, #67c23a);
    border: 1px solid var(--bg-tertiary-hover, #f5f5f5);
    
    .message-icon {
      color: var(--all-green-4, #67c23a);
    }
    
    .message-repeat {
      background: var(--all-green-4, #67c23a);
      border-color: var(--all-green-4, #67c23a);
    }
    
    &.message-plain {
      background: var(--all-green-4, #67c23a);
      border: 1px solid var(--all-green-4, #67c23a);
      color: #fff;
      
      .message-icon {
        color: #fff;
      }
    }
  }
  
  &.message-warning {
    background-color: var(--bg-tertiary-hover, #f5f5f5);
    color: var(--text-warning-primary, #e6a23c);
    border: 1px solid var(--bg-tertiary-hover, #f5f5f5);
    
    .message-icon {
      color: var(--text-warning-primary, #e6a23c);
    }
    
    .message-repeat {
      background: var(--text-warning-primary, #e6a23c);
      border-color: var(--text-warning-primary, #e6a23c);
    }
    
    &.message-plain {
      background: var(--text-warning-primary, #e6a23c);
      border: 1px solid var(--text-warning-primary, #e6a23c);
      color: #fff;
      
      .message-icon {
        color: #fff;
      }
    }
  }
  
  &.message-error {
    background-color: var(--bg-tertiary-hover, #f5f5f5);
    color: var(--text-error-primary, #f56c6c);
    border: 1px solid var(--bg-tertiary-hover, #f5f5f5);
    
    .message-icon {
      color: var(--text-error-primary, #f56c6c);
    }
    
    .message-repeat {
      background: var(--text-error-primary, #f56c6c);
      border-color: var(--text-error-primary, #f56c6c);
    }
    
    &.message-plain {
      background: var(--text-error-primary, #f56c6c);
      border: 1px solid var(--text-error-primary, #f56c6c);
      color: #fff;
      
      .message-icon {
        color: #fff;
      }
    }
  }
}

// 动画效果
.message-enter-active {
  transition: all 0.3s ease;
}

.message-leave-active {
  transition: all 0.3s ease;
}

.message-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.message-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.message-move {
  transition: transform 0.3s ease;
}

// 不同位置的动画
.message-top-left {
  &.message-enter-from,
  &.message-leave-to {
    transform: translateX(-20px);
  }
}

.message-top-right {
  &.message-enter-from,
  &.message-leave-to {
    transform: translateX(20px);
  }
}

.message-bottom {
  &.message-enter-from,
  &.message-leave-to {
    transform: translateX(-50%) translateY(20px);
  }
}

.message-bottom-left {
  &.message-enter-from,
  &.message-leave-to {
    transform: translateX(-20px);
  }
}

.message-bottom-right {
  &.message-enter-from,
  &.message-leave-to {
    transform: translateX(20px);
  }
}

// 响应式设计
@media (max-width: 480px) {
  .custom-message {
    min-width: calc(100vw - 40px);
    max-width: calc(100vw - 40px);
    left: 20px !important;
    right: 20px !important;
    transform: none !important;
    
    &.message-enter-from,
    &.message-leave-to {
      transform: translateY(-20px) !important;
    }
  }
}
</style>