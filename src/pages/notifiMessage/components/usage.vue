<demo>
## 使用示例
</demo>
<!-- #region snippet -->
<template>
  <div class="example-notification-block">
    <div class="example-demonstration">
      <h4>基本用法</h4>
      <pre><code>// 直接调用静态方法（类似 Element Plus 的 ElMessage）
import { NotifiMessage } from "@mc-markets/ui";

// 基础通知
NotifiMessage.show({
  title: '操作成功',
  message: '您的操作已成功完成！'
});

// 便捷方法
NotifiMessage.success({
  title: '操作成功',
  message: '数据保存成功！'
});

// 自定义底部操作按钮
NotifiMessage.show({
  title: '额度提醒',
  message: '为保障账号安全，建议您尽快完成身份认证，畅享更多平台功能！',
  duration: 0, // 不自动关闭
  slotContent: () => h('div', {
    class: 'custom-action-link',
    onClick: () => {
      // 自定义点击处理逻辑（由外部定义）
      console.log('执行自定义操作');
    }
  }, [
    h('span', '立即操作'),
    h(MIcon, { name: 'chevron-right', size: '14px', class: 'arrow' })
  ])
});</code></pre>
    </div>
  </div>
</template>

<style scoped lang="scss">
.example-demonstration {
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
  }

  pre {
    background: #1e1e1e;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 20px;
    margin: 0;
    overflow-x: auto;

    code {
      font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
      font-size: 13px;
      line-height: 1.6;
      color: #d4d4d4;
    }
  }
}

:deep(.custom-action-link) {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--el-color-primary);
}
</style>
<!-- #endregion snippet -->
