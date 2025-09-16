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
// Button 组件样式 - 使用高优先级选择器确保不被全局样式覆盖
.m-button.el-button {
  --el-button-font-weight: 600 !important;
  --el-button-border-color: var(--bg-tertiary-hover) !important;
  --el-button-bg-color: var(--bg-tertiary-hover) !important;
  --el-button-text-color: var(--text-primary) !important;
  --el-button-disabled-text-color: var(--text-quaternary) !important;
  --el-button-disabled-bg-color: color-mix(
    in srgb,
    var(--bg-tertiary-hover) 50%,
    transparent
  ) !important;
  --el-button-disabled-border-color: var(--el-button-disabled-bg-color) !important;
  --el-button-divide-border-color: rgba(255, 255, 255, 0.5) !important;
  --el-button-hover-text-color: var(--text-primary) !important;
  --el-button-hover-bg-color: var(--bg-tertiary) !important;
  --el-button-hover-border-color: var(--bg-tertiary) !important;
  --el-button-active-text-color: var(--text-primary) !important;
  --el-button-active-border-color: var(--bg-tertiary) !important;
  --el-button-active-bg-color: var(--bg-tertiary) !important;
  --el-button-outline-color: var(--bg-tertiary) !important;
  --el-button-hover-link-text-color: var(--text-brand) !important;
  --el-button-active-color: var(--text-primary) !important;
  height: 40px !important;
  padding: 8px 16px !important;

  &.is-plain {
    --el-button-hover-text-color: var(--text-primary) !important;
    --el-button-hover-bg-color: var(--bg-brand-secondary) !important;
    --el-button-hover-border-color: var(--border-brand-hover) !important;

    border-color: var(--border-brand) !important;
    background-color: transparent !important;

    &.is-disabled {
      background-color: transparent !important;
      border-color: color-mix(in srgb, var(--bg-brand) 50%, transparent) !important;
    }
  }

  &.el-button--large {
    height: 48px !important;
    padding: 12px 20px !important;
  }
  &.el-button--small {
    height: 32px !important;
    padding: 5px 12px !important;
  }

  &.el-button--text {
    height: 20px !important;
    padding: 0 !important;
    line-height: 20px !important;
  }

  &.el-button--primary {
    --el-button-text-color: var(--text-quaternary) !important;
    --el-button-outline-color: var(--text-quaternary) !important;
    --el-button-active-color: var(--bg-brand-hover) !important;
    --el-button-hover-text-color: var(--text-quaternary) !important;
    --el-button-hover-link-text-color: var(--text-quaternary) !important;
    --el-button-hover-bg-color: var(--bg-brand-hover) !important;
    --el-button-hover-border-color: var(--bg-brand-hover) !important;
    --el-button-active-text-color: var(--text-quaternary) !important;
    --el-button-active-bg-color: var(--bg-brand-hover) !important;
    --el-button-active-border-color: var(--bg-brand-hover) !important;
    --el-button-disabled-text-color: var(--text-quaternary) !important;
    --el-button-disabled-bg-color: color-mix(
      in srgb,
      var(--bg-brand) 50%,
      transparent
    ) !important;
    --el-button-disabled-border-color: color-mix(
      in srgb,
      var(--bg-brand) 50%,
      transparent
    ) !important;

    background-color: var(--bg-brand) !important;
    border-color: var(--bg-brand) !important;

    &.is-disabled {
      --el-button-disabled-text-color: var(--text-quaternary) !important;
      background-color: color-mix(in srgb, var(--bg-brand) 50%, transparent) !important;
      border-color: transparent !important;
    }
  }

  &.is-circle {
    width: 40px !important;
  }

  &:hover {
    color: var(--el-button-hover-text-color) !important;
    border-color: var(--el-button-hover-border-color) !important;
    background-color: var(--el-button-hover-bg-color) !important;
  }

  [class*="el-icon"] + span {
    margin-left: 5px !important;
  }
}
</style>