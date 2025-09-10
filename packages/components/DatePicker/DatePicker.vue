<template>
  <el-date-picker v-bind="$attrs">
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-date-picker>
</template>
