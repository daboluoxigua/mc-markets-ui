<template>
  <el-pagination v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-pagination>
</template>
