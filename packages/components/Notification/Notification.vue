<template>
  <el-notification v-bind="$attrs">
    <template #title v-if="$slots.title">
      <slot name="title" />
    </template>
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-notification>
</template>
