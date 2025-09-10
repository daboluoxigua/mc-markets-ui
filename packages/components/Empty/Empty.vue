<template>
  <el-empty v-bind="$attrs">
    <template #image v-if="$slots.image">
      <slot name="image" />
    </template>
    <template #description v-if="$slots.description">
      <slot name="description" />
    </template>
    <template #default v-if="$slots.default">
      <slot />
    </template>
  </el-empty>
</template>
