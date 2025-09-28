<template>
  <el-tag v-bind="$attrs" class="m-tag" :class="{ 'is-loading': loading }">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <i class="prefixIcon iconfont" v-if="prefixIcon" :class="prefixIcon"></i>
      <slot :name="name" />
      <i class="suffixIcon iconfont" v-if="suffixIcon" :class="suffixIcon"></i>
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
  }
})
</script>

<style lang="scss">

</style>