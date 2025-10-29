<template>
  <el-empty ref="emptyRef" v-bind="mergedAttrs" :image="imageUrl">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-empty>
</template>

<script>
// 定义可选的图片文件名（在模块作用域中）
const availableImages = [
  '404',
  'billing', 
  'cart',
  'comments',
  'dashboard',
  'files',
  'inbox',
  'location',
  'network',
  'notifications',
  'orders',
  'records',
  'session',
  'subscription',
  'todo',
  'wishlist'
]

export default {
  name: 'MEmpty'
}
</script>

<script setup>
import { computed, useAttrs } from 'vue'
import { useExposeRef } from '@packages/hooks/useExposeRef.js'

const props = defineProps({
  image: {
    type: String,
    default: 'orders',
    validator: (value) => {
      // 如果是完整的URL或路径，直接通过验证
      if (value.includes('/') || value.includes('http')) {
        return true
      }
      // 否则检查是否在可选列表中
      return availableImages.includes(value)
    }
  }
})

const attrs = useAttrs()

// 排除 image 属性，避免重复绑定
const mergedAttrs = computed(() => {
  const { image, ...rest } = attrs
  return rest
})

// 计算图片URL
const imageUrl = computed(() => {
  const { image } = props
  
  // 如果是完整的URL或路径，直接返回
  if (image.includes('/') || image.includes('http')) {
    return image
  }
  
  // 使用 public 目录中的图片
  // Vite 会自动处理 public 目录中的静态资源
  return `https://cfdsaas-pre.oss-cn-hongkong.aliyuncs.com/mc-assets/mc-ui/empty/${image}.png`
})

const { innerRef: emptyRef, exposedProxy } = useExposeRef('emptyRef')

defineExpose(exposedProxy)
</script>