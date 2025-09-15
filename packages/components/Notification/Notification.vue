<template>
  <el-notification v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-notification>
</template>

<script setup>
defineOptions({
  name: 'MNotification'
})
</script>
