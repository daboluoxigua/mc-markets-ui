<template>
  <div class="message-page">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="openMessage">显示消息</m-button>
          <span>Basic Message</span>
        </div>
        <div class="doc-item">
          <m-button @click="openVNodeMessage">VNode 消息</m-button>
          <span>VNode Message</span>
        </div>
      </div>
    </DemoSection>

    <!-- 不同状态 -->
    <DemoSection title="不同状态">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="openPrimary">Primary</m-button>
          <span>Primary</span>
        </div>
        <div class="doc-item">
          <m-button @click="openSuccess">Success</m-button>
          <span>Success</span>
        </div>
        <div class="doc-item">
          <m-button @click="openWarning">Warning</m-button>
          <span>Warning</span>
        </div>
        <div class="doc-item">
          <m-button @click="openInfo">Info</m-button>
          <span>Info</span>
        </div>
        <div class="doc-item">
          <m-button @click="openError">Error</m-button>
          <span>Error</span>
        </div>
      </div>
    </DemoSection>

    <!-- Plain 样式 -->
    <DemoSection title="Plain 样式">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="openPrimaryPlain">Primary Plain</m-button>
          <span>Primary Plain</span>
        </div>
        <div class="doc-item">
          <m-button @click="openSuccessPlain">Success Plain</m-button>
          <span>Success Plain</span>
        </div>
        <div class="doc-item">
          <m-button @click="openWarningPlain">Warning Plain</m-button>
          <span>Warning Plain</span>
        </div>
        <div class="doc-item">
          <m-button @click="openInfoPlain">Info Plain</m-button>
          <span>Info Plain</span>
        </div>
        <div class="doc-item">
          <m-button @click="openErrorPlain">Error Plain</m-button>
          <span>Error Plain</span>
        </div>
      </div>
    </DemoSection>

    <!-- 可关闭的消息提示 -->
    <DemoSection title="可关闭的消息提示">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="openCloseable">可关闭消息</m-button>
          <span>Closeable</span>
        </div>
        <div class="doc-item">
          <m-button @click="openPersistent">不自动关闭</m-button>
          <span>Persistent</span>
        </div>
        <div class="doc-item">
          <m-button @click="openWithCallback">带回调函数</m-button>
          <span>With Callback</span>
        </div>
      </div>
    </DemoSection>

    <!-- 使用 HTML 片段作为正文内容 -->
    <DemoSection title="HTML 片段消息">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="openHtmlMessage">HTML 消息</m-button>
          <span>HTML Message</span>
        </div>
        <div class="doc-item">
          <m-button @click="openRichMessage">富文本消息</m-button>
          <span>Rich Message</span>
        </div>
      </div>
    </DemoSection>

    <!-- 分组消息合并 -->
    <DemoSection title="分组消息合并">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="openGroupingMessage">分组消息</m-button>
          <span>Grouping</span>
        </div>
        <div class="doc-item">
          <m-button @click="openMultipleMessages">多条消息</m-button>
          <span>Multiple</span>
        </div>
      </div>
    </DemoSection>

    <!-- 位置控制 -->
    <DemoSection title="位置控制">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="() => openPositionMessage('top')">顶部</m-button>
          <span>Top</span>
        </div>
        <div class="doc-item">
          <m-button @click="() => openPositionMessage('top-left')">左上</m-button>
          <span>Top Left</span>
        </div>
        <div class="doc-item">
          <m-button @click="() => openPositionMessage('top-right')">右上</m-button>
          <span>Top Right</span>
        </div>
        <div class="doc-item">
          <m-button @click="() => openPositionMessage('bottom')">底部</m-button>
          <span>Bottom</span>
        </div>
        <div class="doc-item">
          <m-button @click="() => openPositionMessage('bottom-left')">左下</m-button>
          <span>Bottom Left</span>
        </div>
        <div class="doc-item">
          <m-button @click="() => openPositionMessage('bottom-right')">右下</m-button>
          <span>Bottom Right</span>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义图标 -->
    <DemoSection title="自定义图标">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="openCustomIcon">自定义图标</m-button>
          <span>Custom Icon</span>
        </div>
        <div class="doc-item">
          <m-button @click="openNoIcon">无图标</m-button>
          <span>No Icon</span>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义样式 -->
    <DemoSection title="自定义样式">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="openCustomClass">自定义类名</m-button>
          <span>Custom Class</span>
        </div>
        <div class="doc-item">
          <m-button @click="openCustomDuration">自定义时长</m-button>
          <span>Custom Duration</span>
        </div>
      </div>
    </DemoSection>

    <!-- 全局方法演示 -->
    <DemoSection title="全局方法演示">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="openGlobalMessage">全局消息</m-button>
          <span>Global Message</span>
        </div>
        <div class="doc-item">
          <m-button @click="closeAllMessages">关闭所有消息</m-button>
          <span>Close All</span>
        </div>
      </div>
    </DemoSection>

    <!-- 交互演示 -->
    <DemoSection title="交互演示">
      <div class="doc-grid">
        <div class="doc-item">
          <m-button @click="openLoadingMessage">加载消息</m-button>
          <span>Loading</span>
        </div>
        <div class="doc-item">
          <m-button @click="openAsyncMessage">异步消息</m-button>
          <span>Async</span>
        </div>
        <div class="doc-item">
          <m-button @click="openProgressMessage">进度消息</m-button>
          <span>Progress</span>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Message API"
      :props="messageApiProps"
      props-title="Message 配置项"
      :events="messageApiEvents"
      events-title="Message 事件"
      :methods="messageApiMethods"
      methods-title="Message 方法"
    />
  </div>
</template>

<script setup>
import { h, ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MButton, MMessage } from "@mc-markets/ui";


// 计数器
const topCount = ref(0);
const bottomCount = ref(0);
const topLeftCount = ref(0);
const topRightCount = ref(0);
const bottomLeftCount = ref(0);
const bottomRightCount = ref(0);

// 基础用法
const openMessage = () => {
  MMessage('这是一条消息提示');
};

const openVNodeMessage = () => {
  MMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, '消息可以是 '),
      h('i', { style: 'color: #409eff' }, 'VNode'),
    ]),
  });
};

// 不同状态
const openPrimary = () => {
  MMessage.primary('这是一条主要消息');
};

const openSuccess = () => {
  MMessage.success('恭喜，这是一条成功消息');
};

const openWarning = () => {
  MMessage.warning('警告，这是一条警告消息');
};

const openInfo = () => {
  MMessage.info('这是一条信息消息');
};

const openError = () => {
  MMessage.error('糟糕，这是一条错误消息');
};

// Plain 样式
const openPrimaryPlain = () => {
  MMessage({
    message: '这是一条主要消息',
    type: 'primary',
    plain: true,
  });
};

const openSuccessPlain = () => {
  MMessage({
    message: '恭喜，这是一条成功消息',
    type: 'success',
    plain: true,
  });
};

const openWarningPlain = () => {
  MMessage({
    message: '警告，这是一条警告消息',
    type: 'warning',
    plain: true,
  });
};

const openInfoPlain = () => {
  MMessage({
    message: '这是一条信息消息',
    type: 'info',
    plain: true,
  });
};

const openErrorPlain = () => {
  MMessage({
    message: '糟糕，这是一条错误消息',
    type: 'error',
    plain: true,
  });
};

// 可关闭的消息提示
const openCloseable = () => {
  MMessage({
    message: '这是一条可关闭的消息',
    type: 'success',
    showClose: true,
  });
};

const openPersistent = () => {
  MMessage({
    message: '这条消息不会自动关闭',
    type: 'warning',
    duration: 0,
    showClose: true,
  });
};

const openWithCallback = () => {
  MMessage({
    message: '这条消息关闭时会触发回调',
    type: 'info',
    showClose: true,
    onClose: (instance) => {
      console.log('消息已关闭:', instance);
      MMessage.success('消息关闭回调已触发');
    },
  });
};

// HTML 片段消息
const openHtmlMessage = () => {
  MMessage({
    message: '<strong>这是</strong> <em>HTML</em> 消息',
    dangerouslyUseHTMLString: true,
    type: 'success',
  });
};

const openRichMessage = () => {
  MMessage({
    message: `
      <div style="line-height: 1.6;">
        <h4 style="margin: 0 0 8px 0; color: #409eff;">富文本消息</h4>
        <p style="margin: 0; color: #606266;">这是一条包含 <span style="color: #f56c6c; font-weight: bold;">多种样式</span> 的消息</p>
        <ul style="margin: 8px 0 0 0; padding-left: 20px;">
          <li>支持 HTML 标签</li>
          <li>支持内联样式</li>
          <li>支持复杂布局</li>
        </ul>
      </div>
    `,
    dangerouslyUseHTMLString: true,
    type: 'info',
    duration: 5000,
  });
};

// 分组消息合并
const openGroupingMessage = () => {
  MMessage({
    message: '这是一条分组消息',
    type: 'success',
    grouping: true,
  });
};

const openMultipleMessages = () => {
  // 连续发送多条相同消息，会合并显示
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      MMessage({
        message: '这是一条重复消息',
        type: 'info',
        grouping: true,
      });
    }, i * 500);
  }
};

// 位置控制
const openPositionMessage = (placement) => {
  let count = 0;
  let type = 'success';

  switch (placement) {
    case 'top':
      count = ++topCount.value;
      type = 'success';
      break;
    case 'bottom':
      count = ++bottomCount.value;
      type = 'warning';
      break;
    case 'top-left':
      count = ++topLeftCount.value;
      type = 'info';
      break;
    case 'top-right':
      count = ++topRightCount.value;
      type = 'primary';
      break;
    case 'bottom-left':
      count = ++bottomLeftCount.value;
      type = 'warning';
      break;
    case 'bottom-right':
      count = ++bottomRightCount.value;
      type = 'error';
      break;
  }

  MMessage({
    message: `这是来自 ${placement} 位置的第 ${count} 条消息`,
    type,
    placement,
  });
};

// 自定义图标
const openCustomIcon = () => {
  MMessage({
    message: '这是一条带自定义图标的消息',
    icon: 'Star',
    type: 'success',
  });
};

const openNoIcon = () => {
  MMessage({
    message: '这是一条没有图标的消息',
    icon: '',
    type: 'info',
  });
};

// 自定义样式
const openCustomClass = () => {
  MMessage({
    message: '这是一条带自定义样式的消息',
    type: 'success',
    customClass: 'custom-message-class',
  });
};

const openCustomDuration = () => {
  MMessage({
    message: '这条消息会在 5 秒后自动关闭',
    type: 'info',
    duration: 5000,
  });
};

// 全局方法演示
const openGlobalMessage = () => {
  MMessage({
    message: '这是通过全局方法显示的消息',
    type: 'primary',
  });
};

const closeAllMessages = () => {
  MMessage.closeAll();
  MMessage.info('所有消息已关闭');
};

// 交互演示
const openLoadingMessage = () => {
  const message = MMessage({
    message: '正在加载中...',
    type: 'info',
    duration: 0,
    showClose: true,
  });

  // 模拟加载完成
  setTimeout(() => {
    message.close();
    MMessage.success('加载完成！');
  }, 2000);
};

const openAsyncMessage = () => {
  MMessage.info('开始异步操作...');
  
  // 模拟异步操作
  setTimeout(() => {
    MMessage.success('异步操作完成！');
  }, 1500);
};

const openProgressMessage = () => {
  let progress = 0;
  const message = MMessage({
    message: `上传进度: ${progress}%`,
    type: 'info',
    duration: 0,
    showClose: true,
  });

  const interval = setInterval(() => {
    progress += 10;
    message.message = `上传进度: ${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        message.close();
        MMessage.success('上传完成！');
      }, 500);
    }
  }, 300);
};

// API 文档数据
const messageApiProps = [
  {
    name: "message",
    type: "string / VNode / Function",
    default: "''",
    description: "消息文字",
  },
  {
    name: "type",
    type: "enum",
    default: "info",
    description: "消息类型，可选值：success / warning / info / error / primary",
  },
  {
    name: "plain",
    type: "boolean",
    default: "false",
    description: "是否纯色",
  },
  {
    name: "icon",
    type: "string / Component",
    default: "-",
    description: "自定义图标，该属性会覆盖 type 的图标",
  },
  {
    name: "dangerouslyUseHTMLString",
    type: "boolean",
    default: "false",
    description: "是否将 message 属性作为 HTML 片段处理",
  },
  {
    name: "customClass",
    type: "string",
    default: "''",
    description: "自定义类名",
  },
  {
    name: "duration",
    type: "number",
    default: "3000",
    description: "显示时间，单位为毫秒。设为 0 则不会自动关闭",
  },
  {
    name: "showClose",
    type: "boolean",
    default: "false",
    description: "是否显示关闭按钮",
  },
  {
    name: "onClose",
    type: "Function",
    default: "-",
    description: "关闭时的回调函数, 参数为被关闭的 message 实例",
  },
  {
    name: "offset",
    type: "number",
    default: "16",
    description: "设置到视口边缘的距离",
  },
  {
    name: "placement",
    type: "enum",
    default: "top",
    description: "消息放置位置，可选值：top / top-left / top-right / bottom / bottom-left / bottom-right",
  },
  {
    name: "appendTo",
    type: "CSSSelector / HTMLElement",
    default: "-",
    description: "设置 message 的根元素，默认为 document.body",
  },
  {
    name: "grouping",
    type: "boolean",
    default: "false",
    description: "合并内容相同的消息，不支持 VNode 类型的消息",
  },
  {
    name: "repeatNum",
    type: "number",
    default: "1",
    description: "重复次数，类似于 Badge。当和 grouping 属性一起使用时作为初始数量使用",
  },
];

const messageApiEvents = [
  {
    name: "close",
    description: "关闭时的回调函数",
    params: "(instance: MessageInstance)",
  },
];

const messageApiMethods = [
  {
    name: "close",
    description: "关闭当前的 Message",
    params: "()",
  },
  {
    name: "closeAll",
    description: "关闭所有 Message 实例",
    params: "()",
  },
];
</script>

<style scoped lang="scss">
.message-page {
  .doc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    gap: 20px;
    margin-bottom: 20px;
  }

  .doc-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: 1px solid var(--el-border-color-lighter);
    border-radius: 8px;
    background: var(--el-bg-color);
    transition: all 0.3s ease;
  }

  .doc-item span {
    margin-top: 8px;
    font-size: 12px;
    color: var(--el-text-color-regular);
    text-align: center;
  }

  /* 自定义消息样式 */
  :deep(.custom-message-class) {
    background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  /* 响应式设计 */
  @media (max-width: 1200px) {
    .doc-grid {
      grid-template-columns: repeat(auto-fit, minmax(180px, auto));
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .doc-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, auto));
      gap: 12px;
    }

    .doc-item {
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    .doc-grid {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .doc-item {
      padding: 10px;
    }
  }
}
</style>
