<template>
  <el-tag v-bind="$attrs" class="m-tag" :class="{ 'is-loading': loading }">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <!-- 自定义spinner loading效果 -->
      <div v-if="loading && !prefixIcon" class="custom-spinner">
        <div class="ldio-spinner">
          <div v-for="i in 8" :key="i"></div>
        </div>
      </div>
      <!-- 原有的prefixIcon -->
      <i 
        class="prefixIcon" 
        :class="['iconfont', computedPrefixIcon]" 
        v-else-if="computedPrefixIcon"
      ></i>
      <div>
        <slot :name="name" />
      </div>
      <i 
        class="suffixIcon" 
        :class="['iconfont', suffixIcon]" 
        v-if="suffixIcon"
      ></i>
    </template>
  </el-tag>
</template>

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
  }
})

// 计算属性：处理prefixIcon
const computedPrefixIcon = computed(() => {
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
  .el-tag__content{
    display: flex;
    align-items: center;
  }
  
  .prefixIcon {
    margin-right: 4px;
  }
  
  .suffixIcon {
    margin-left: 4px;
  }
  
  // 自定义spinner样式
  .custom-spinner {
    display: inline-block;
    margin-right: 4px;
    width: 16px;
    height: 16px;
    overflow: hidden;
    
    .ldio-spinner {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(0.16);
      backface-visibility: hidden;
      transform-origin: 0 0;
      
      div {
        left: 46px;
        top: 7.5px;
        position: absolute;
        animation: ldio-spinner-fade linear 1s infinite;
        background: currentColor;
        width: 8px;
        height: 21px;
        border-radius: 3.15px / 3.15px;
        transform-origin: 4px 42.5px;
        box-sizing: content-box;
      }
      
      div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -0.875s;
      }
      
      div:nth-child(2) {
        transform: rotate(45deg);
        animation-delay: -0.75s;
      }
      
      div:nth-child(3) {
        transform: rotate(90deg);
        animation-delay: -0.625s;
      }
      
      div:nth-child(4) {
        transform: rotate(135deg);
        animation-delay: -0.5s;
      }
      
      div:nth-child(5) {
        transform: rotate(180deg);
        animation-delay: -0.375s;
      }
      
      div:nth-child(6) {
        transform: rotate(225deg);
        animation-delay: -0.25s;
      }
      
      div:nth-child(7) {
        transform: rotate(270deg);
        animation-delay: -0.125s;
      }
      
      div:nth-child(8) {
        transform: rotate(315deg);
        animation-delay: 0s;
      }
    }
  }
}

@keyframes ldio-spinner-fade {
  0% { 
    opacity: 1; 
  }
  100% { 
    opacity: 0; 
  }
}
</style>