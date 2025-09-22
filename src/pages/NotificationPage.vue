<template>
  <div class="notification-page">
    <!-- 基础用法 -->
    <DemoSection 
      title="基础用法"
      code="<template>
  <m-button plain @click='open1'>Closes automatically</m-button>
  <m-button plain @click='open2'>Won't close automatically</m-button>
</template>

<script setup>
import { ElNotification } from 'element-plus';

const open1 = () => {
  ElNotification({
    title: 'Title',
    message: 'This is a notification message'
  });
};

const open2 = () => {
  ElNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0
  });
};
</script>"
    >
      <div class="example-notification-block">
        <div class="example-demonstration">Element Plus 注册了 $notify 方法并且它接受一个 Object 作为其参数。 在最简单的情况下，你可以通过设置 title 和 message 属性来设置通知的标题和正文内容。 默认情况下，通知在4500毫秒后自动关闭，但你可以通过设置 duration 属性来自定义通知的展示时间。 如果你将它设置为 0，那么通知将不会自动关闭。 需要注意的是 duration 接收一个 Number，单位为毫秒。</div>
        <div class="notification-demo-container">
          <m-button plain @click="open1">
            Closes automatically
          </m-button>
          <m-button plain @click="open2">
            Won't close automatically
          </m-button>
        </div>
      </div>
    </DemoSection>

    <!-- 不同类型的通知 -->
    <DemoSection 
      title="不同类型的通知"
      code="<m-button plain @click='openSuccess'>Success</m-button><m-button plain @click='openWarning'>Warning</m-button><m-button plain @click='openInfo'>Info</m-button><m-button plain @click='openError'>Error</m-button>"
    >
      <div class="example-notification-block">
        <div class="example-demonstration">我们提供了四种不同类型的通知：success、warning、info 和 error。</div>
        <div class="notification-demo-container">
          <m-button plain @click="open3">
            Success
          </m-button>
          <m-button plain @click="open4">
            Warning
          </m-button>
          <m-button plain @click="open5">
            Info
          </m-button>
          <m-button plain @click="open6">
            Error
          </m-button>
        </div>
      </div>
    </DemoSection>


    <!-- 自定义消息弹出的位置 -->
    <DemoSection 
      title="自定义消息弹出的位置"
      code="<m-button plain @click='open7'>Top Right</m-button><m-button plain @click='open8'>Bottom Right</m-button>"
    >
      <div class="example-notification-block">
        <div class="example-demonstration">可以让 Notification 从屏幕四角中的任意一角弹出。使用 position 属性设置 Notification 的弹出位置， 支持四个选项：top-right、top-left、bottom-right 和 bottom-left， 默认为 top-right。</div>
        <div class="notification-demo-container">
          <m-button plain @click="open7">
            Top Right
          </m-button>
          <m-button plain @click="open8">
            Bottom Right
          </m-button>
          <m-button plain @click="open9">
            Bottom Left
          </m-button>
          <m-button plain @click="open10">
            Top Left
          </m-button>
        </div>
      </div>
    </DemoSection>

    <!-- 有位置偏移的通知栏 -->
    <DemoSection 
      title="有位置偏移的通知栏"
      code="<m-button plain @click='open11'>Notification with offset</m-button>"
    >
      <div class="example-notification-block">
        <div class="example-demonstration">能够设置偏移量来使 Notification 偏移默认位置。Notification 提供设置偏移量的功能，通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。 注意在同一时刻，每一个的 Notification 实例应当具有一个相同的偏移量。</div>
        <div class="notification-demo-container">
          <m-button plain @click="open11">
            Notification with offset
          </m-button>
        </div>
      </div>
    </DemoSection>

    <!-- 使用 HTML 片段作为正文内容 -->
    <DemoSection 
      title="使用 HTML 片段作为正文内容"
      code="<m-button plain @click='open12'>Use HTML String</m-button>"
    >
      <div class="example-notification-block">
        <div class="example-demonstration">message 属性支持传入 HTML 片段。将 dangerouslyUseHTMLString 设置为 true，message 就会被当作 HTML 片段处理。虽然 message 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。 因此在 dangerouslyUseHTMLString 打开的情况下，请确保 message 的内容是可信的，永远不要将用户提交的内容赋值给 message 属性。</div>
        <div class="notification-demo-container">
          <m-button plain @click="open12">
            Use HTML String
          </m-button>
        </div>
      </div>
    </DemoSection>

    <!-- 函数形式的 message 2.9.0 -->
    <DemoSection 
      title="函数形式的 message 2.9.0"
      code="<m-button plain @click='openVNode'>Common VNode</m-button><m-button plain @click='openVNodeDynamic'>Dynamic props</m-button>"
    >
      <div class="example-notification-block">
        <div class="example-demonstration">message 可以是 VNode。在2.9.0之后， message 支持返回值为 VNode的函数。</div>
        <div class="notification-demo-container">
          <m-button plain @click="openVNode">
            Common VNode
          </m-button>
          <m-button plain @click="openVNodeDynamic">
            Dynamic props
          </m-button>
        </div>
      </div>
    </DemoSection>

    <!-- 隐藏关闭按钮 -->
    <DemoSection 
      title="隐藏关闭按钮"
      code="<m-button plain @click='open13'>Hide close button</m-button>"
    >
      <div class="example-notification-block">
        <div class="example-demonstration">将 showClose 设置为 false 即可隐藏关闭按钮。</div>
        <div class="notification-demo-container">
          <m-button plain @click="open13">
            Hide close button
          </m-button>
        </div>
      </div>
    </DemoSection>

    <!-- 全局方法 -->
    <DemoSection 
      title="全局方法"
      code="<m-button plain @click='open14'>Global method</m-button>"
    >
      <div class="example-notification-block">
        <div class="example-demonstration">Element Plus 为 app.config.globalProperties 添加了全局方法 $notify。 因此在 Vue instance 中可以采用本页面中的方式调用 Notification。</div>
        <div class="notification-demo-container">
          <m-button plain @click="open14">
            Global method
          </m-button>
        </div>
      </div>
    </DemoSection>

    <!-- 单独引用 -->
    <DemoSection 
      title="单独引用"
      code="<m-button plain @click='open15'>Import Notification</m-button>"
    >
      <div class="example-notification-block">
        <div class="example-demonstration">你可以在对应的处理函数内调用 ElNotification(options) 来呼出通知栏。 我们也提前定义了多个 type 的单独调用方法，如 ElNotification.success(options)。 当你需要关闭页面上所有的通知栏的时候，可以调用 ElNotification.closeAll() 来关闭所有的实例。 在 2.10.5 版本中，你可以通过调用 ElNotification.updateOffsets(position) 手动更新所有通知实例在特定方向上的偏移量。</div>
        <div class="notification-demo-container">
          <m-button plain @click="open15">
            Import Notification
          </m-button>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Notification API"
      :props="notificationApiProps"
      props-title="Notification 属性"
      :events="notificationApiEvents"
      events-title="Notification 事件"
      :methods="notificationApiMethods"
      methods-title="Notification 方法"
    />
  </div>
</template>

<script setup>
import { ref, h } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MButton } from "@mc-markets/ui";
import { ElNotification } from 'element-plus';

// 响应式数据
const visible = ref(false);

// 事件处理函数
const open1 = () => {
  ElNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  });
};

const open2 = () => {
  ElNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  });
};

const openPrimary = () => {
  ElNotification({
    title: 'Primary',
    message: 'This is a primary message',
    type: 'primary',
  });
};

const open3 = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  });
};

const open4 = () => {
  ElNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  });
};

const open5 = () => {
  ElNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  });
};

const open6 = () => {
  ElNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  });
};


const open7 = () => {
  ElNotification({
    title: 'Custom Position',
    message: 'I am at the top right corner',
  });
};

const open8 = () => {
  ElNotification({
    title: 'Custom Position',
    message: 'I am at the bottom right corner',
    position: 'bottom-right',
  });
};

const open9 = () => {
  ElNotification({
    title: 'Custom Position',
    message: 'I am at the bottom left corner',
    position: 'bottom-left',
  });
};

const open10 = () => {
  ElNotification({
    title: 'Custom Position',
    message: 'I am at the top left corner',
    position: 'top-left',
  });
};

const open11 = () => {
  ElNotification({
    title: 'Offset',
    message: 'This is a notification with offset',
    offset: 100,
  });
};

const open12 = () => {
  ElNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  });
};

const open13 = () => {
  ElNotification({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  });
};

const open14 = () => {
  ElNotification({
    title: 'Global Method',
    message: 'This is a global method call',
  });
};

const open15 = () => {
  ElNotification({
    title: 'Import Notification',
    message: 'This is a notification imported separately',
  });
};

const openVNode = () => {
  ElNotification({
    title: 'Use Vnode',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  });
};

const openVNodeDynamic = () => {
  const checked = ref(false);
  ElNotification({
    title: 'Use Vnode',
    // Should pass a function if VNode contains dynamic props
    message: () =>
      h('div', null, [
        h('span', null, 'Dynamic content: '),
        h('strong', null, checked.value ? 'Checked' : 'Unchecked'),
      ]),
  });
};

// Notification API 文档数据 - 严格按照 Element Plus 2.11.2 规范
const notificationApiProps = [
  {
    name: "title",
    type: "string",
    default: "''",
    description: "title"
  },
  {
    name: "message",
    type: "string / VNode / Function",
    default: "''",
    description: "通知栏正文内容"
  },
  {
    name: "dangerouslyUseHTMLString",
    type: "boolean",
    default: "false",
    description: "是否将 message 属性作为 HTML 片段处理"
  },
  {
    name: "type",
    type: "enum",
    default: "''",
    description: "通知的类型",
    values: ["primary", "success", "warning", "info", "error"]
  },
  {
    name: "icon",
    type: "string / Component",
    default: "—",
    description: "自定义图标。 若设置了 type，则 icon 会被覆盖"
  },
  {
    name: "customClass",
    type: "string",
    default: "''",
    description: "自定义类名"
  },
  {
    name: "duration",
    type: "number",
    default: "4500",
    description: "显示时间, 单位为毫秒。 值为 0 则不会自动关闭"
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
    name: "onClose",
    type: "Function",
    default: "—",
    description: "关闭时的回调函数"
  },
  {
    name: "onClick",
    type: "Function",
    default: "—",
    description: "点击 Notification 时的回调函数"
  },
  {
    name: "offset",
    type: "number",
    default: "0",
    description: "相对屏幕顶部的偏移量 偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量"
  },
  {
    name: "appendTo",
    type: "CSSSelector / HTMLElement",
    default: "—",
    description: "设置 notification 的根元素，默认为 document.body"
  },
  {
    name: "zIndex",
    type: "number",
    default: "0",
    description: "初始 zIndex"
  },
  {
    name: "closeIcon",
    type: "string / Component",
    default: "Close",
    description: "自定义关闭图标",
    version: "2.9.8"
  }
];

const notificationApiEvents = [
  {
    name: "close",
    description: "关闭通知时触发",
    params: "() => void"
  },
  {
    name: "click",
    description: "点击通知时触发",
    params: "() => void"
  }
];

const notificationApiMethods = [
  {
    name: "close",
    description: "关闭当前的 Notification",
    params: "() => void"
  }
];
</script>

<style scoped lang="scss">
.notification-page {
  .example-notification-block + .example-notification-block {
    margin-top: 10px;
  }
  
  .example-notification-block .example-demonstration {
    margin-bottom: 16px;
  }

  .notification-demo-container {
    .el-button + .el-button {
      margin-left: 10px;
    }
  }
}


  /* 响应式设计 */
  @media (max-width: 768px) {
    .notification-page {
      padding: 16px;
    }

  }

  @media (max-width: 480px) {
    .notification-page {
      padding: 12px;
    }
  }
</style>
