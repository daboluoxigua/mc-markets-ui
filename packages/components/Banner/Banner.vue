<template>
  <div 
    v-if="visible" 
    class="m-banner"
    :class="[
      `m-banner--${type}`,
      {
        'm-banner--closable': closable,
        'm-banner--with-icon': icon || $slots.icon
      }
    ]"
    :style="bannerStyle"
  >
    <div class="m-banner__content">
      <!-- 图标插槽 -->
      <div v-if="icon || $slots.icon" class="m-banner__icon">
        <slot name="icon">
          <m-icon :name="icon" :size="iconSize" />
        </slot>
      </div>
      
      <!-- 主要内容 -->
      <div class="m-banner__text">
        <slot>{{ content }}</slot>
      </div>
      
      <!-- 关闭按钮 -->
      <div v-if="closable" class="m-banner__close" @click="handleClose">
        <m-icon name="close" :size="closeIconSize" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import MIcon from '../Icon/Icon.vue'

// 定义 props
const props = defineProps({
  // 横幅内容
  content: {
    type: String,
    default: ''
  },
  // 横幅类型
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'success', 'warning', 'error'].includes(value)
  },
  // 是否可关闭
  closable: {
    type: Boolean,
    default: true
  },
  // 是否显示
  visible: {
    type: Boolean,
    default: true
  },
  // 图标名称
  icon: {
    type: String,
    default: ''
  },
  // 图标大小
  iconSize: {
    type: [String, Number],
    default: '16px'
  },
  // 关闭图标大小
  closeIconSize: {
    type: [String, Number],
    default: '14px'
  },
  // 自定义背景色
  backgroundColor: {
    type: String,
    default: ''
  },
  // 自定义文字颜色
  textColor: {
    type: String,
    default: ''
  },
  // 自定义边框颜色
  borderColor: {
    type: String,
    default: ''
  },
  // 圆角大小
  borderRadius: {
    type: [String, Number],
    default: '4px'
  },
  // 内边距
  padding: {
    type: [String, Number],
    default: '12px 16px'
  },
  // 持续时间（毫秒），0 表示不自动关闭
  duration: {
    type: Number,
    default: 0
  }
})

// 定义 emits
const emit = defineEmits(['close', 'update:visible'])

// 响应式数据
const internalVisible = ref(props.visible)

// 监听 visible prop 变化
watch(() => props.visible, (newVal) => {
  internalVisible.value = newVal
})

// 计算样式
const bannerStyle = computed(() => {
  const style = {}
  
  if (props.backgroundColor) {
    style.backgroundColor = props.backgroundColor
  }
  if (props.textColor) {
    style.color = props.textColor
  }
  if (props.borderColor) {
    style.borderColor = props.borderColor
  }
  if (props.borderRadius) {
    style.borderRadius = typeof props.borderRadius === 'number' 
      ? `${props.borderRadius}px` 
      : props.borderRadius
  }
  if (props.padding) {
    style.padding = typeof props.padding === 'number' 
      ? `${props.padding}px` 
      : props.padding
  }
  
  return style
})

// 默认图标映射
const defaultIcons = {
  info: 'info',
  success: 'check-circle',
  warning: 'warning',
  error: 'close-circle'
}

// 计算实际使用的图标
const actualIcon = computed(() => {
  return props.icon || defaultIcons[props.type]
})

// 处理关闭
const handleClose = () => {
  internalVisible.value = false
  emit('update:visible', false)
  emit('close')
}

// 自动关闭逻辑
watch(internalVisible, (newVal) => {
  if (newVal && props.duration > 0) {
    setTimeout(() => {
      handleClose()
    }, props.duration)
  }
})

// 暴露方法给父组件
defineExpose({
  close: handleClose
})
</script>

<style scoped lang="scss">
.m-banner {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 40px;
  border-radius: 4px;
  border: 1px solid;
  font-size: 14px;
  line-height: 1.5;
  transition: all 0.3s ease;

  &__content {
    display: flex;
    align-items: center;
    width: 100%;
    flex: 1;
  }

  &__icon {
    display: flex;
    align-items: center;
    margin-right: 8px;
    flex-shrink: 0;
  }

  &__text {
    flex: 1;
    word-break: break-word;
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    cursor: pointer;
    padding: 2px;
    border-radius: 2px;
    transition: background-color 0.2s ease;
    flex-shrink: 0;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  // 类型样式
  &--info {
    background-color: #e1f3ff;
    border-color: #b3d8ff;
    color: #0066cc;

    .m-banner__close:hover {
      background-color: rgba(0, 102, 204, 0.1);
    }
  }

  &--success {
    background-color: #f0f9ff;
    border-color: #b3e5b3;
    color: #00a854;

    .m-banner__close:hover {
      background-color: rgba(0, 168, 84, 0.1);
    }
  }

  &--warning {
    background-color: #fff7e6;
    border-color: #ffd591;
    color: #fa8c16;

    .m-banner__close:hover {
      background-color: rgba(250, 140, 22, 0.1);
    }
  }

  &--error {
    background-color: #fff2f0;
    border-color: #ffccc7;
    color: #ff4d4f;

    .m-banner__close:hover {
      background-color: rgba(255, 77, 79, 0.1);
    }
  }

  // 可关闭样式
  &--closable {
    .m-banner__content {
      padding-right: 32px;
    }
  }

  // 带动画的关闭
  &.m-banner-leave-active {
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
}

// 深色主题适配
@media (prefers-color-scheme: dark) {
  .m-banner {
    &--info {
      background-color: rgba(24, 144, 255, 0.1);
      border-color: rgba(24, 144, 255, 0.3);
      color: #69c0ff;
    }

    &--success {
      background-color: rgba(82, 196, 26, 0.1);
      border-color: rgba(82, 196, 26, 0.3);
      color: #95de64;
    }

    &--warning {
      background-color: rgba(250, 173, 20, 0.1);
      border-color: rgba(250, 173, 20, 0.3);
      color: #ffd666;
    }

    &--error {
      background-color: rgba(255, 77, 79, 0.1);
      border-color: rgba(255, 77, 79, 0.3);
      color: #ff7875;
    }
  }
}
</style>
