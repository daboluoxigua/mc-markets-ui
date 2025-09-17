<template>
  <el-date-picker v-bind="mergedAttrs" :popper-class="popperClass">
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-date-picker>
</template>

<script setup>
import { useClassName } from "@packages/hooks/useClassName.js";

defineOptions({
  name: "MDatePicker",
});

// 定义 props，提供默认的 type 值
const props = defineProps({
  popperClass: {
    type: String,
    default: "",
  },
});

// 使用类名 Hook，排除 type 和 popperClass 属性
const { mergedAttrs, className: popperClass } = useClassName(
  "mc-datepicker-popper",
  "popperClass"
);
</script>
<style lang="scss">
.mc-datepicker-popper {
  .el-picker-panel {
    border: 1px solid var(--border-primary);
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    .current,
    .today:not(.in-range),
    .start-date,
    .end-date {
      .el-date-table-cell {
        .el-date-table-cell__text {
          color: var(--text-quaternary);
          border-radius: 3px;
        }
      }
    }

    .start-date {
      .el-date-table-cell {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
    }

    .end-date {
      .el-date-table-cell {
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
      }
    }

    .el-button.is-text {
      color: var(--text-brand);
    }
    .el-button.is-plain {
      background: var(--bg-brand);
      color: var(--text-quaternary);
    }
  }
}
</style>
