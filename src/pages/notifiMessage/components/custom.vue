<demo>
## 自定义通知消息
</demo>
<!-- #region snippet -->
<template>
  <div class="example-notification-block">
    <div class="example-demonstration">
      NotifiMessage 是一个完全自定义的通知组件，不依赖 Element Plus，支持自定义样式、图标和操作按钮。通过插槽机制，外部可以完全控制底部操作内容。
    </div>
    <div class="notification-demo-container">
      <m-button plain @click="showWarning">显示自定义通知</m-button>
    </div>
  </div>
</template>

<script setup>
import { h } from "vue";
import { MButton, MIcon, NotifiMessage } from "@mc-markets/ui";

const showWarning = () => {
  NotifiMessage.show({
    title: "额度提醒",
    message: "为保障账号安全，建议您尽快完成身份认证，畅享更多平台功能！",
    duration: 0,
    slotContent: () =>
      h(
        "div",
        {
          class: "custom-action-link",
          onClick: () => {
            console.log("用户点击了自定义操作");
            alert("执行自定义操作");
          },
        },
        [
          h("span", "立即操作"),
          h(MIcon, { name: "chevron-right", size: "14px", class: "arrow" }),
        ]
      ),
  });
};
</script>

<style scoped lang="scss">
.example-notification-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.notification-demo-container {
  display: flex;
  gap: 12px;
}

.custom-action-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--el-color-primary);
  cursor: pointer;

  .arrow {
    transition: transform 0.2s ease;
  }

  &:hover .arrow {
    transform: translateX(2px);
  }
}
</style>
<!-- #endregion snippet -->
