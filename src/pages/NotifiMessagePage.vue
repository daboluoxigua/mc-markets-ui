<template>
  <div class="notifi-message-page">
    <!-- 自定义通知消息 -->
    <DemoSection 
      title="自定义通知消息"
      code="<m-button plain @click='showWarning'>显示自定义通知</m-button>"
    >
      <div class="example-notification-block">
        <div class="example-demonstration">NotifiMessage 是一个完全自定义的通知组件，不依赖 Element Plus，支持自定义样式、图标和操作按钮。通过插槽机制，外部可以完全控制底部操作内容。</div>
        <div class="notification-demo-container">
          <m-button plain @click="showWarning">
            显示自定义通知
          </m-button>
        </div>
      </div>
    </DemoSection>

    <!-- 使用示例 -->
    <DemoSection 
      title="使用示例"
      code="NotifiMessage.show({ title: '操作成功', message: '您的操作已成功完成！' }); NotifiMessage.success({ title: '操作成功', message: '数据保存成功！' });"
    >
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
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="NotifiMessage API"
      :props="notifiMessageApiProps"
      props-title="NotifiMessage 属性"
      :methods="notifiMessageApiMethods"
      methods-title="NotifiMessage 方法"
    />

    <!-- NotifiMessage 组件实例 -->
    <m-notifi-message />
  </div>
</template>

<script setup>
import { h } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MButton, MIcon, MNotifiMessage, NotifiMessage } from "@mc-markets/ui";

// 自定义通知消息
const showWarning = () => {
  NotifiMessage.show({
    title: '额度提醒',
    message: '为保障账号安全，建议您尽快完成身份认证，畅享更多平台功能！',
    duration: 0, // 不自动关闭
    slotContent: () => h('div', { 
      class: 'custom-action-link',
      onClick: () => {
        console.log('用户点击了自定义操作');
        alert('执行自定义操作');
      }
    }, [
      h('span', '立即操作'),
      h(MIcon, { name: 'chevron-right', size: '14px', class: 'arrow' })
    ])
  });
};

// API 文档数据
const notifiMessageApiProps = [
  {
    name: "title",
    type: "string",
    default: "''",
    description: "通知标题"
  },
  {
    name: "message",
    type: "string",
    default: "''",
    description: "通知内容"
  },
  {
    name: "duration",
    type: "number",
    default: "4500",
    description: "显示时间，单位毫秒。设为 0 则不会自动关闭"
  },
  {
    name: "position",
    type: "enum",
    default: "top-right",
    description: "自定义弹出位置",
    values: ["top-right", "top-left", "bottom-right", "bottom-left"]
  },
  {
    name: "showClose",
    type: "boolean",
    default: "true",
    description: "是否显示关闭按钮"
  },
  {
    name: "offset",
    type: "number",
    default: "20",
    description: "偏移的距离，单位像素"
  },
  {
    name: "slotContent",
    type: "VNode / Function",
    default: "—",
    description: "自定义底部插槽内容，支持 VNode 或返回 VNode 的函数。用于添加自定义操作按钮等"
  }
];

const notifiMessageApiMethods = [
  {
    name: "show(options)",
    description: "显示自定义通知",
    params: "options: { title?, message?, duration?, position?, showClose?, offset?, slotContent? }"
  },
  {
    name: "close(id)",
    description: "关闭指定 ID 的通知",
    params: "id: number - 通知的唯一标识符"
  },
  {
    name: "closeAll()",
    description: "关闭所有通知",
    params: "无参数"
  }
];
</script>

<style scoped lang="scss">
.notifi-message-page {
  .example-notification-block + .example-notification-block {
    margin-top: 10px;
  }
  
  .example-notification-block .example-demonstration {
    margin-bottom: 16px;

    h4 {
      margin: 0 0 12px 0;
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
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 13px;
        line-height: 1.6;
        color: #d4d4d4;
        
        // 语法高亮
        .comment { color: #6a9955; }
        .string { color: #ce9178; }
        .keyword { color: #569cd6; }
        .function { color: #dcdcaa; }
      }
    }
  }

  .notification-demo-container {
    .el-button + .el-button {
      margin-left: 10px;
    }
  }
}

/* 暗黑模式适配 */
html.dark {
  .notifi-message-page {
    .example-demonstration {
      pre {
        background: #0d1117;
        border: 1px solid #30363d;
        
        code {
          color: #e6edf3;
        }
      }
    }
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .notifi-message-page {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .notifi-message-page {
    padding: 12px;
  }
}
</style>
