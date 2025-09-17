<template>
  <el-radio-button v-bind="mergedAttrs" class="m-radio-button">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-radio-button>
</template>

<script setup>
import { useClassName } from "@packages/hooks/useClassName.js"

defineOptions({
  name: 'MRadioButton'
})

// 定义props
const props = defineProps({
  popperClass: {
    type: String,
    default: ''
  }
})

// 使用类名 Hook
const { mergedAttrs, className: popperClass } = useClassName('mc-radio-button-popper')
</script>

<style lang="scss">
// RadioButton popper-class 样式
// .mc-radio-button-popper {
//   自定义单选框按钮样式可以在这里添加
// }

// 自定义主题示例
.mc-radio-button-custom {
  .el-radio-button__inner {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-color: #667eea;
    color: white;
    
    &:hover {
      background: linear-gradient(45deg, #5a6fd8, #6a4190);
      border-color: #5a6fd8;
    }
  }
  
  .el-radio-button__original-radio:checked + .el-radio-button__inner {
    background: linear-gradient(45deg, #4c63d2, #5d3a7e);
    border-color: #4c63d2;
    box-shadow: -1px 0 0 0 #4c63d2;
  }
}

.mc-radio-button-success {
  .el-radio-button__inner {
    background-color: #67c23a;
    border-color: #67c23a;
    color: white;
    
    &:hover {
      background-color: #5daf34;
      border-color: #5daf34;
    }
  }
  
  .el-radio-button__original-radio:checked + .el-radio-button__inner {
    background-color: #529b2e;
    border-color: #529b2e;
    box-shadow: -1px 0 0 0 #529b2e;
  }
}

.mc-radio-button-warning {
  .el-radio-button__inner {
    background-color: #e6a23c;
    border-color: #e6a23c;
    color: white;
    
    &:hover {
      background-color: #d4922b;
      border-color: #d4922b;
    }
  }
  
  .el-radio-button__original-radio:checked + .el-radio-button__inner {
    background-color: #c8951f;
    border-color: #c8951f;
    box-shadow: -1px 0 0 0 #c8951f;
  }
}

.mc-radio-button-danger {
  .el-radio-button__inner {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: white;
    
    &:hover {
      background-color: #f45454;
      border-color: #f45454;
    }
  }
  
  .el-radio-button__original-radio:checked + .el-radio-button__inner {
    background-color: #f24545;
    border-color: #f24545;
    box-shadow: -1px 0 0 0 #f24545;
  }
}
</style>
