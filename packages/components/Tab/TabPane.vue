<template>
  <el-tab-pane v-bind="$attrs">
    <template #label v-if="$slots.label">
      <slot name="label" />
    </template>
    <slot />
  </el-tab-pane>
</template>
