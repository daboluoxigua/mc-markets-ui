<template>
  <el-tooltip v-bind="$attrs">
    <template #content v-if="$slots.content">
      <slot name="content" />
    </template>
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-tooltip>
</template>
