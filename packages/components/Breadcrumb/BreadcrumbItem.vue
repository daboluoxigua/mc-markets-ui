<template>
  <span class="m-breadcrumb__item">
    <span
      v-if="to"
      class="m-breadcrumb__inner"
      :class="{ 'is-link': to }"
      @click="handleClick"
    >
      <slot></slot>
    </span>
    <span v-else class="m-breadcrumb__inner">
      <slot></slot>
    </span>
    <i
      v-if="separatorIcon && !isLast"
      class="m-breadcrumb__separator"
    >
      <component :is="separatorIcon" />
    </i>
    <span
      v-else-if="!isLast"
      class="m-breadcrumb__separator"
    >
      {{ separator }}
    </span>
  </span>
</template>

<script setup>
import { inject, computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: "MBreadcrumbItem",
})

// 定义 props
const props = defineProps({
  to: {
    type: [String, Object],
    default: ''
  },
  replace: {
    type: Boolean,
    default: false
  }
})

// 注入父组件上下文
const breadcrumbContext = inject('breadcrumbContext', {
  separator: '/',
  separatorIcon: undefined,
  registerItem: () => null,
  unregisterItem: () => {},
  isLastItem: () => false
})

// 获取分隔符配置
const separator = computed(() => breadcrumbContext.separator)
const separatorIcon = computed(() => breadcrumbContext.separatorIcon)

// 组件 ID
const itemId = ref(null)

// 判断是否为最后一项
const isLast = computed(() => {
  return itemId.value ? breadcrumbContext.isLastItem(itemId.value) : false
})

// 路由跳转
const router = useRouter()

const handleClick = () => {
  if (!props.to) return
  
  if (props.replace) {
    router.replace(props.to)
  } else {
    router.push(props.to)
  }
}

// 注册和注销组件
onMounted(() => {
  if (breadcrumbContext.registerItem) {
    itemId.value = breadcrumbContext.registerItem()
  }
})

onUnmounted(() => {
  if (breadcrumbContext.unregisterItem && itemId.value) {
    breadcrumbContext.unregisterItem(itemId.value)
  }
})
</script>

<style lang="scss" scoped>
.m-breadcrumb__item {
  float: left;
  
  .m-breadcrumb__inner {
    color: var(--text-secondary, #606266);
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    
    &:hover,
    &.is-link {
      color: var(--text-primary);
      // color: var(--bg-brand, #409eff);
      cursor: pointer;
    }
  }
  
  .m-breadcrumb__separator {
    margin: 0 9px;
    font-weight: 500;
    color: var(--text-tertiary, #c0c4cc);
    display: inline-flex;
    align-items: center;
    transform: translateY(10%);
    :deep(svg) {
      width: 14px;
      height: 14px;
    }
    
    [class*="icon"] {
      margin-right: 6px;
    }
  }
  
  &:last-child {
    .m-breadcrumb__inner {
      color: var(--text-tertiary, #909399);
      cursor: text;
    }
    
    .m-breadcrumb__separator {
      display: none;
    }
  }
}
</style>
