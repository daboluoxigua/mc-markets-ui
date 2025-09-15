<template>
  <el-button v-bind="$attrs" class="m-button">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-button>
</template>

<script setup>
defineOptions({
  name: 'MButton'
})
</script>

<style lang="scss">
// Button 组件样式 - 使用更具体的选择器确保样式优先级
.m-button.el-button {
  --el-button-font-weight: 600;
  --el-button-border-color: var(--bg-tertiary-hover);
  --el-button-bg-color: var(--bg-tertiary-hover);
  --el-button-text-color: var(--text-primary);
  --el-button-disabled-text-color: var(--text-quaternary);
  --el-button-disabled-bg-color: color-mix(
    in srgb,
    var(--bg-tertiary-hover) 50%,
    transparent
  );
  --el-button-disabled-border-color: var(--el-button-disabled-bg-color);
  --el-button-divide-border-color: rgba(255, 255, 255, 0.5);
  --el-button-hover-text-color: var(--text-primary);
  --el-button-hover-bg-color: var(--bg-tertiary);
  --el-button-hover-border-color: var(--bg-tertiary);
  --el-button-active-text-color: var(--text-primary);
  --el-button-active-border-color: var(--bg-tertiary);
  --el-button-active-bg-color: var(--bg-tertiary);
  --el-button-outline-color: var(--bg-tertiary);
  --el-button-hover-link-text-color: var(--text-brand);
  --el-button-active-color: var(--text-primary);
  height: 40px;
  padding: 8px 16px;

  &.is-plain {
    --el-button-hover-text-color: var(--text-primary);
    --el-button-hover-bg-color: var(--bg-brand-secondary);
    --el-button-hover-border-color: var(--border-brand-hover);

    border-color: var(--border-brand);
    background-color: transparent;

    &.is-disabled {
      background-color: transparent;
      border-color: color-mix(in srgb, var(--bg-brand) 50%, transparent);
    }
  }

  &.el-button--large {
    height: 48px;
    padding: 12px 20px;
  }
  &.el-button--small {
    height: 32px;
    padding: 5px 12px;
  }

  &.el-button--text {
    height: 20px;
    padding: 0;
    line-height: 20px;
  }

  &.el-button--primary {
    --el-button-text-color: var(--text-quaternary);
    --el-button-outline-color: var(--text-quaternary);
    --el-button-active-color: var(--bg-brand-hover);
    --el-button-hover-text-color: var(--text-quaternary);
    --el-button-hover-link-text-color: var(--text-quaternary);
    --el-button-hover-bg-color: var(--bg-brand-hover);
    --el-button-hover-border-color: var(--bg-brand-hover);
    --el-button-active-text-color: var(--text-quaternary);
    --el-button-active-bg-color: var(--bg-brand-hover);
    --el-button-active-border-color: var(--bg-brand-hover);
    --el-button-disabled-text-color: var(--text-quaternary);
    --el-button-disabled-bg-color: color-mix(
      in srgb,
      var(--bg-brand) 50%,
      transparent
    );
    --el-button-disabled-border-color: color-mix(
      in srgb,
      var(--bg-brand) 50%,
      transparent
    );

    background-color: var(--bg-brand);
    border-color: var(--bg-brand);

    &.is-disabled {
      --el-button-disabled-text-color: var(--text-quaternary) !important;
      background-color: color-mix(in srgb, var(--bg-brand) 50%, transparent);
      border-color: color-mix(in srgb, var(--bg-brand) 50%, transparent);
    }
  }

  &.is-circle {
    width: 40px;
  }

  &:hover {
    color: var(--el-button-hover-text-color);
    border-color: var(--el-button-hover-border-color);
    background-color: var(--el-button-hover-bg-color);
  }
}

.m-button.el-button [class*="el-icon"] + span {
  margin-left: 5px;
}
</style>