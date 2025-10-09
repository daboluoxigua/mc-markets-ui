<template>
  <nav class="m-breadcrumb" aria-label="Breadcrumb">
    <template v-for="(item, index) in items" :key="index">
      <span
        :class="['m-breadcrumb__item', { 'is-link': item.to }]"
        @click="handleItemClick(item)"
      >
        {{ item.label }}
      </span>
      <BreadcrumbSeparator 
        v-if="index < items.length - 1"
        class="m-breadcrumb__separator"
      />
    </template>
  </nav>
</template>

<script setup>
import BreadcrumbSeparator from './BreadcrumbSeparator.vue'

defineOptions({
  name: "MBreadcrumb",
})

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
    validator: (items) => {
      return items.every(item => 
        typeof item === 'object' && 
        item.label !== undefined
      )
    }
  }
})

const emit = defineEmits(['click'])

const handleItemClick = (item) => {
  if (!item.to) return
  
  emit('click', item)
  
  // 处理路由跳转
  if (typeof item.to === 'string') {
    if (item.to.startsWith('http://') || item.to.startsWith('https://')) {
      window.location.href = item.to
    } else {
      if (item.replace) {
        window.history.replaceState({}, '', item.to)
      } else {
        window.history.pushState({}, '', item.to)
      }
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
  } else if (typeof item.to === 'object' && item.to.path) {
    const path = item.to.path
    if (item.replace) {
      window.history.replaceState({}, '', path)
    } else {
      window.history.pushState({}, '', path)
    }
    window.dispatchEvent(new PopStateEvent('popstate'))
  }
}
</script>

<style lang="scss" scoped>
.m-breadcrumb {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  
  &__item {
    color: var(--text-secondary, #909399);
    transition: color 0.2s;
    white-space: nowrap;
    line-height: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    
    &.is-link {
      color: var(--text-primary, #303133);
      cursor: pointer;
      font-weight: 500;
      
      &:hover {
        color: var(--bg-brand, #ffd700);
      }
    }
    
    &:last-child {
      color: var(--text-tertiary, #c0c4cc);
      cursor: default;
      font-weight: normal;
    }
  }
  
  &__separator {
    margin: 0 8px;
    color: var(--text-tertiary, #c0c4cc);
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    height: 20px;
  }
}
</style>

