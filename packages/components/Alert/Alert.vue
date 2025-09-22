<template>
  <el-alert v-bind="mergedAttrs" class="mc-alert">
    <!-- 自定义图标插槽 -->
    <template v-if="iconUrl" #icon>
      <img :src="iconUrl" :alt="`${type} icon`" class="mc-alert-icon" />
    </template>
    
    <!-- 其他插槽 -->
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-alert>
</template>

<script>
// 定义可选的Alert类型
const availableTypes = ['success', 'warning', 'error']

export default {
  name: 'MAlert'
}
</script>

<script setup>
import { computed, useAttrs } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'success',
    validator: (value) => availableTypes.includes(value)
  },
  useCustomIcon: {
    type: Boolean,
    default: true
  }
})

const attrs = useAttrs()

// 排除已处理的属性，确保 type 属性正确传递
const mergedAttrs = computed(() => {
  const { useCustomIcon, ...rest } = attrs
  return {
    ...rest,
    type: props.type  // 确保 type 属性正确传递给 el-alert
  }
})

// 计算图标URL
const iconUrl = computed(() => {
  if (!props.useCustomIcon) {
    return null
  }
  
  return `https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/alert/alert-${props.type}.png`
})
</script>

<style lang="scss">
.mc-alert.el-alert {
  --el-alert-padding: 14px 16px;
  .mc-alert-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
  .el-alert__close-btn{
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.6;
    transition: opacity 0.2s ease;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.1);
    }
  }
  // Error 类型样式
  &.el-alert--error.is-light {
    background-color: var(--all-red-10);
    color: var(--text-error-primary);
    border-color: var(--all-red-10);
    
    .el-alert__title,
    .el-alert__description,
    .el-alert__close-btn {
      color: var(--text-error-primary);
    }
  
    .el-alert__icon {
      display: flex;
      align-items: center;
    }
  }
  
  // Warning 类型样式
  &.el-alert--warning.is-light {
    background-color: var(--all-orange-10);
    color: var(--text-warning-primary);
    border-color: var(--all-orange-10);
    
    .el-alert__title,
    .el-alert__description,
    .el-alert__close-btn {
      color: var(--text-warning-primary);
    }
  
    .el-alert__icon {
      display: flex;
      align-items: center;
    }
  }
  
  // Success 类型样式
  &.el-alert--success.is-light {
    background-color: var(--all-green-10);
    color: var(--all-green-4);
    border-color: var(--all-green-10);
    
    .el-alert__title,
    .el-alert__description,
    .el-alert__close-btn {
      color: var(--all-green-4);
    }
  
    .el-alert__icon {
      display: flex;
      align-items: center;
    }
  }
}

</style>