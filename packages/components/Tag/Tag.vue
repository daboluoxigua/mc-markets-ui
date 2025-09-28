<template>
  <el-tag v-bind="$attrs" class="m-tag" :class="{ 'is-loading': loading }">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <i 
        class="prefixIcon" 
        :class="['iconfont', prefixIcon]" 
        v-if="prefixIcon"
      ></i>
      <slot :name="name" />
      <i 
        class="suffixIcon" 
        :class="['iconfont', suffixIcon]" 
        v-if="suffixIcon"
      ></i>
    </template>
  </el-tag>
</template>

<script setup>
defineOptions({
  name: 'MTag'
})
defineProps({
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