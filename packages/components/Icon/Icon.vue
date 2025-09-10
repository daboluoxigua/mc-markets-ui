<template>
  <i 
    :class="iconClass" 
    :style="iconStyle"
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot></slot>
  </i>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: '16px'
  },
  color: {
    type: String,
    default: 'inherit'
  },
  spin: {
    type: Boolean,
    default: false
  },
  pulse: {
    type: Boolean,
    default: false
  },
  rotate: {
    type: Number,
    default: 0
  },
  flip: {
    type: String,
    default: undefined
  },
  prefix: {
    type: String,
    default: 'icon'
  }
})

const emit = defineEmits(['click'])

// 计算图标类名
const iconClass = computed(() => {
  const classes = ['iconfont']
  
  // 添加图标名称类
  if (props.name) {
    classes.push(`${props.prefix}-${props.name}`)
  }
  
  // 添加动画类
  if (props.spin) {
    classes.push('icon-spin')
  }
  if (props.pulse) {
    classes.push('icon-pulse')
  }
  
  // 添加翻转类
  if (props.flip) {
    classes.push(`icon-flip-${props.flip}`)
  }
  
  return classes
})

// 计算图标样式
const iconStyle = computed(() => {
  const style = {}
  
  // 设置大小
  if (props.size) {
    if (typeof props.size === 'number') {
      style.fontSize = `${props.size}px`
    } else {
      style.fontSize = props.size
    }
  }
  
  // 设置颜色
  if (props.color) {
    style.color = props.color
  }
  
  // 设置旋转
  if (props.rotate !== 0) {
    style.transform = `rotate(${props.rotate}deg)`
  }
  
  return style
})

// 点击事件处理
const handleClick = (event) => {
  emit('click', event)
}
</script>

<style scoped>
.iconfont {
  display: inline-block;
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  line-height: 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 旋转动画 */
.icon-spin {
  animation: icon-spin 1s linear infinite;
}

@keyframes icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 脉冲动画 */
.icon-pulse {
  animation: icon-pulse 1s ease-in-out infinite;
}

@keyframes icon-pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* 翻转效果 */
.icon-flip-horizontal {
  transform: scaleX(-1);
}

.icon-flip-vertical {
  transform: scaleY(-1);
}

.icon-flip-both {
  transform: scale(-1);
}

/* 当有旋转时，需要与翻转效果结合 */
.icon-spin.icon-flip-horizontal {
  animation: icon-spin-flip-horizontal 1s linear infinite;
}

.icon-spin.icon-flip-vertical {
  animation: icon-spin-flip-vertical 1s linear infinite;
}

.icon-spin.icon-flip-both {
  animation: icon-spin-flip-both 1s linear infinite;
}

@keyframes icon-spin-flip-horizontal {
  from {
    transform: rotate(0deg) scaleX(-1);
  }
  to {
    transform: rotate(360deg) scaleX(-1);
  }
}

@keyframes icon-spin-flip-vertical {
  from {
    transform: rotate(0deg) scaleY(-1);
  }
  to {
    transform: rotate(360deg) scaleY(-1);
  }
}

@keyframes icon-spin-flip-both {
  from {
    transform: rotate(0deg) scale(-1);
  }
  to {
    transform: rotate(360deg) scale(-1);
  }
}
</style>
