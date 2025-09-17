<template>
  <el-switch v-bind="mergedAttrs" :popper-class="popperClass" class="m-switch">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-switch>
</template>

<script setup>
import { useClassName } from "@packages/hooks/useClassName.js"

defineOptions({
  name: 'MSwitch'
})

// 定义props
const props = defineProps({
  popperClass: {
    type: String,
    default: ''
  }
})

// 使用类名 Hook
const { mergedAttrs, className: popperClass } = useClassName('mc-switch-popper')
</script>

<style lang="scss">
// Switch popper-class 样式
// .mc-switch-popper {
//   自定义开关样式可以在这里添加
// }

// 自定义主题示例
.mc-switch-custom {
  .el-switch__core {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-color: #667eea;
    
    &:after {
      background: white;
    }
  }
  
  &.is-checked .el-switch__core {
    background: linear-gradient(45deg, #4c63d2, #5d3a7e);
    border-color: #4c63d2;
  }
}

.mc-switch-success {
  .el-switch__core {
    background-color: #67c23a;
    border-color: #67c23a;
    
    &:after {
      background: white;
    }
  }
  
  &.is-checked .el-switch__core {
    background-color: #529b2e;
    border-color: #529b2e;
  }
}

.mc-switch-warning {
  .el-switch__core {
    background-color: #e6a23c;
    border-color: #e6a23c;
    
    &:after {
      background: white;
    }
  }
  
  &.is-checked .el-switch__core {
    background-color: #c8951f;
    border-color: #c8951f;
  }
}

.mc-switch-danger {
  .el-switch__core {
    background-color: #f56c6c;
    border-color: #f56c6c;
    
    &:after {
      background: white;
    }
  }
  
  &.is-checked .el-switch__core {
    background-color: #f24545;
    border-color: #f24545;
  }
}

// 特殊样式变体
.mc-switch-gradient {
  .el-switch__core {
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
    border: none;
    
    &:after {
      background: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
  
  &.is-checked .el-switch__core {
    background: linear-gradient(90deg, #4ecdc4, #45b7d1);
  }
}

.mc-switch-neon {
  .el-switch__core {
    background-color: #1a1a1a;
    border: 2px solid #00ffff;
    box-shadow: 0 0 10px #00ffff;
    
    &:after {
      background: #00ffff;
      box-shadow: 0 0 5px #00ffff;
    }
  }
  
  &.is-checked .el-switch__core {
    background-color: #00ffff;
    border-color: #00ffff;
    box-shadow: 0 0 15px #00ffff;
  }
}
</style>
