<template>
  <el-tag v-bind="$attrs" class="m-tag">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-tag>
</template>

<script setup>
defineOptions({
  name: 'MTag'
})
</script>

<style lang="scss">
// Tag 组件样式 - 使用 m-tag 类名隔离样式
.m-tag.el-tag {
  // 自定义样式可以在这里添加
  font-size: var(--font-size-text-sm);
  --el-tag-border-radius: 8px;

  &.el-tag--primary {
        --el-tag-bg-color: color-mix(in srgb, var(--text-warning-primary) 10%, transparent);
        --el-tag-border-color: color-mix(in srgb, var(--text-warning-primary) 20%, transparent);
        --el-tag-text-color: var(--text-warning-primary);
    }
    &.el-tag--success {
        --el-tag-bg-color: color-mix(in srgb, var(--text-success-primary) 10%, transparent);
        --el-tag-border-color: color-mix(in srgb, var(--text-success-primary) 20%, transparent);
        --el-tag-text-color: var(--text-success-primary);
    }
    &.el-tag--danger {
        --el-tag-bg-color: color-mix(in srgb, var(--text-error-primary) 10%, transparent);
        --el-tag-border-color: color-mix(in srgb, var(--text-error-primary) 20%, transparent);
        --el-tag-text-color: var(--text-error-primary);
    }
    &.el-tag--info {
        --el-tag-bg-color: color-mix(in srgb, var(--text-primary) 10%, transparent);
        --el-tag-border-color: color-mix(in srgb, var(--text-primary) 20%, transparent);
        --el-tag-text-color: var(--text-primary);
    }
  &.el-tag--dark{
    &.el-tag--warning {
        --el-tag-bg-color: color-mix(in srgb, var(--text-warning-primary) 10%, transparent);
        --el-tag-border-color: transparent;
    }
    &.el-tag--success {
        --el-tag-bg-color: color-mix(in srgb, var(--text-success-primary) 10%, transparent);
        --el-tag-border-color: transparent;
    }
    &.el-tag--danger {
        --el-tag-bg-color: color-mix(in srgb, var(--text-error-primary) 10%, transparent);
        --el-tag-border-color: transparent;
    }
    &.el-tag--info {
        --el-tag-bg-color: var(--bg-tertiary-hover);
        --el-tag-border-color: transparent;
    }
  }
}
</style>