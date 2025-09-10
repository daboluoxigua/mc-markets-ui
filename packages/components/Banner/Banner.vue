<template>
  <el-alert v-bind="$attrs">
    <template #title v-if="$slots.title">
      <slot name="title" />
    </template>
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-alert>
</template>
