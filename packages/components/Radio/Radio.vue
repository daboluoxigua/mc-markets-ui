<template>
  <el-radio v-bind="mergedAttrs" class="m-radio">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-radio>
</template>

<script setup>
import { useClassName } from "@packages/hooks/useClassName.js"

defineOptions({
  name: 'MRadio'
})

// 定义props
const props = defineProps({
  popperClass: {
    type: String,
    default: ''
  }
})

// 使用类名 Hook
const { mergedAttrs, className: popperClass } = useClassName('mc-radio-popper')
</script>

<style lang="scss">
// Radio popper-class 样式
// .mc-radio-popper {
//   自定义单选框样式可以在这里添加
// }

// 自定义主题示例
.mc-radio-custom {
  .el-radio__input {
    .el-radio__inner {
      background: linear-gradient(45deg, #667eea, #764ba2);
      border-color: #667eea;
      
      &:hover {
        background: linear-gradient(45deg, #5a6fd8, #6a4190);
        border-color: #5a6fd8;
      }
    }
    
    &.is-checked .el-radio__inner {
      background: linear-gradient(45deg, #4c63d2, #5d3a7e);
      border-color: #4c63d2;
    }
  }
  
  .el-radio__label {
    color: #667eea;
    font-weight: 500;
  }
}

.mc-radio-success {
  .el-radio__input {
    .el-radio__inner {
      background-color: #67c23a;
      border-color: #67c23a;
      
      &:hover {
        background-color: #5daf34;
        border-color: #5daf34;
      }
    }
    
    &.is-checked .el-radio__inner {
      background-color: #529b2e;
      border-color: #529b2e;
    }
  }
  
  .el-radio__label {
    color: #67c23a;
    font-weight: 500;
  }
}

.mc-radio-warning {
  .el-radio__input {
    .el-radio__inner {
      background-color: #e6a23c;
      border-color: #e6a23c;
      
      &:hover {
        background-color: #d4922b;
        border-color: #d4922b;
      }
    }
    
    &.is-checked .el-radio__inner {
      background-color: #c8951f;
      border-color: #c8951f;
    }
  }
  
  .el-radio__label {
    color: #e6a23c;
    font-weight: 500;
  }
}

.mc-radio-danger {
  .el-radio__input {
    .el-radio__inner {
      background-color: #f56c6c;
      border-color: #f56c6c;
      
      &:hover {
        background-color: #f45454;
        border-color: #f45454;
      }
    }
    
    &.is-checked .el-radio__inner {
      background-color: #f24545;
      border-color: #f24545;
    }
  }
  
  .el-radio__label {
    color: #f56c6c;
    font-weight: 500;
  }
}
</style>
