<template>
  <el-tag v-bind="$attrs" class="m-tag" :class="{ 'is-loading': loading }">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <i 
        class="prefixIcon" 
        :class="['iconfont', computedPrefixIcon]" 
        v-if="computedPrefixIcon"
      ></i>
      <slot :name="name" />
      <i 
        class="suffixIcon" 
        :class="['iconfont', suffixIcon]" 
        v-if="suffixIcon"
      ></i>
    </template>
  </el-tag>
</template>colorfont

<script setup>
import { computed } from 'vue'

defineOptions({
  name: 'MTag'
})

const props = defineProps({
  prefixIcon: {
    type: String,
    default: ''
  },
  suffixIcon: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  iconType: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'color'].includes(value)
  }
})

// 计算属性：当loading为true且没有传入prefixIcon时，使用默认的加载图标
const computedPrefixIcon = computed(() => {
  if (props.loading && !props.prefixIcon) {
    return 'colorfont icon-a-lucide_loader1'
  }
  return props.prefixIcon
})
</script>

<style lang="scss">
.m-tag {
  .prefixIcon,
  .suffixIcon {
    font-size: 16px;
    display: inline-block;
    line-height: 1;
    
    &.iconfont {
      font-family: "iconfont" !important;
    }
    
    &.colorfont {
      font-family: "colorfont" !important;
    }
  }
  
  .prefixIcon {
    margin-right: 4px;
  }
  
  .suffixIcon {
    margin-left: 4px;
  }
  
  &.is-loading {
    .prefixIcon,
    .suffixIcon {
      animation: rotate 3s linear infinite;
      transform-origin: center center;
    }
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>