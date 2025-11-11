<template>
  <div class="button-page">
    <!-- 基础按钮类型 -->
    <DemoSection 
      title="基础按钮类型"
      :component="[Test]"
      code="<m-button>默认按钮</m-button>
<m-button type='primary'>主要按钮</m-button>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button>默认按钮</m-button>
          <span>Default</span>
        </div>
        <div class="doc-item">
          <m-button type="primary">主要按钮</m-button>
          <span>Primary</span>
        </div>
      </div>
    </DemoSection>
    <!-- Plain 按钮 -->
    <DemoSection 
      title="Plain 按钮"
      code="<m-button plain>Plain</m-button>
<m-button plain disabled>禁用状态</m-button>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button plain>Plain</m-button>
          <span>Plain</span>
        </div>
        <div class="doc-item">
          <m-button plain disabled>禁用状态</m-button>
          <span>Disabled</span>
        </div>
      </div>
    </DemoSection>
    <!-- 按钮尺寸 -->
    <DemoSection 
      title="按钮尺寸"
      code="<m-button size='large' type='primary'>大按钮</m-button>
<m-button type='primary'>默认按钮</m-button>
<m-button size='small' type='primary'>小按钮</m-button>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button size="large" type="primary">大按钮</m-button>
          <span>Large</span>
        </div>
        <div class="doc-item">
          <m-button type="primary">默认按钮</m-button>
          <span>Default</span>
        </div>
        <div class="doc-item">
          <m-button size="small" type="primary">小按钮</m-button>
          <span>Small</span>
        </div>
      </div>
    </DemoSection>

    <!-- 按钮状态 -->
    <DemoSection 
      title="按钮状态"
      code='<div class="doc-grid">
        <div class="doc-item">
          <m-button type="primary" disabled>禁用状态</m-button>
          <span>Disabled</span>
        </div>
        <div class="doc-item">
          <m-button type="primary" :loading="loading" @click="handleLoading">
            {{ loading ? "加载中..." : "点击加载" }}
          </m-button>
          <span>Loading</span>
        </div>
        <div class="doc-item">
          <m-button :disabled="disabled" @click="handleDisabled">
            {{ disabled ? "已禁用" : "可点击" }}
          </m-button>
          <span>Toggle</span>
        </div>
        <div class="doc-item">
          <m-button plain>朴素按钮</m-button>
          <span>Plain</span>
        </div>
        <div class="doc-item">
          <m-button round>圆角按钮</m-button>
          <span>Round</span>
        </div>
        <div class="doc-item">
          <m-button circle>
            <m-icon name="search" />
          </m-button>
          <span>Circle</span>
        </div>
      </div>'
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button type="primary" disabled>禁用状态</m-button>
          <span>Disabled</span>
        </div>
        <div class="doc-item">
          <m-button type="primary" :loading="loading" @click="handleLoading">
            {{ loading ? "加载中..." : "点击加载" }}
          </m-button>
          <span>Loading</span>
        </div>
        <div class="doc-item">
          <m-button :disabled="disabled" @click="handleDisabled">
            {{ disabled ? "已禁用" : "可点击" }}
          </m-button>
          <span>Toggle</span>
        </div>
        <div class="doc-item">
          <m-button plain>朴素按钮</m-button>
          <span>Plain</span>
        </div>
        <div class="doc-item">
          <m-button round>圆角按钮</m-button>
          <span>Round</span>
        </div>
        <div class="doc-item">
          <m-button circle>
            <m-icon name="search" />
          </m-button>
          <span>Circle</span>
        </div>
      </div>
    </DemoSection>

    <!-- 按钮形状 -->
    <DemoSection 
      title="按钮形状"
      code="<m-button type='primary'>默认形状</m-button>
<m-button type='primary' round>圆角按钮</m-button>
<m-button type='primary' circle>
  <m-icon name='square-pen' />
</m-button>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button type="primary">默认形状</m-button>
          <span>Default</span>
        </div>
        <div class="doc-item">
          <m-button type="primary" round>圆角按钮</m-button>
          <span>Round</span>
        </div>
        <div class="doc-item">
          <m-button type="primary" circle>
            <m-icon name="square-pen" />
          </m-button>
          <span>Circle</span>
        </div>
      </div>
    </DemoSection>

    <!-- 文字按钮 -->
    <DemoSection 
      title="文字按钮"
      code="<m-button text>默认文字按钮</m-button> <m-button text disabled>禁用文字按钮</m-button>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button text>默认文字按钮</m-button>
          <span>Default Text</span>
        </div>
        <div class="doc-item">
          <m-button text disabled>禁用文字按钮</m-button>
          <span>Disabled Text</span>
        </div>
      </div>
    </DemoSection>

    <!-- 链接按钮 -->
    <DemoSection 
      title="链接按钮"
      code="<m-button link>默认链接按钮</m-button>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button link>默认链接按钮</m-button>
          <span>Default Link</span>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义颜色按钮 -->
    <DemoSection 
      title="自定义颜色按钮"
      code="<m-button color='#626aef'>自定义颜色</m-button>
<m-button color='#626aef' plain>自定义颜色 Plain</m-button>
<m-button color='#f56c6c'>红色按钮</m-button>
<m-button color='#67c23a'>绿色按钮</m-button>
<m-button color='#e6a23c'>橙色按钮</m-button>
<m-button color='#909399'>灰色按钮</m-button>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button color="#626aef">自定义颜色</m-button>
          <span>Custom Color</span>
        </div>
        <div class="doc-item">
          <m-button color="#626aef" plain>自定义颜色 Plain</m-button>
          <span>Custom Plain</span>
        </div>
        <div class="doc-item">
          <m-button color="#f56c6c">红色按钮</m-button>
          <span>Red Button</span>
        </div>
        <div class="doc-item">
          <m-button color="#67c23a">绿色按钮</m-button>
          <span>Green Button</span>
        </div>
        <div class="doc-item">
          <m-button color="#e6a23c">橙色按钮</m-button>
          <span>Orange Button</span>
        </div>
        <div class="doc-item">
          <m-button color="#909399">灰色按钮</m-button>
          <span>Gray Button</span>
        </div>
      </div>
    </DemoSection>

    <!-- 图标按钮 -->
    <DemoSection 
      title="图标按钮"
      code="<m-button type='primary'>
  <m-icon name='search' style='margin-right: 4px;'/>
  搜索
</m-button>
<m-button>
  <m-icon name='square-pen' style='margin-right: 4px;'/>
  编辑
</m-button>
<m-button>
  <m-icon name='linear-trash' style='margin-right: 4px;'/>
  删除
</m-button>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button type="primary">
            <m-icon name="search" style="margin-right: 4px" />
            搜索
          </m-button>
          <span>Search</span>
        </div>
        <div class="doc-item">
          <m-button>
            <m-icon name="square-pen" style="margin-right: 4px" />
            编辑
          </m-button>
          <span>Edit</span>
        </div>
        <div class="doc-item">
          <m-button>
            <m-icon name="linear-trash" style="margin-right: 4px" />
            删除
          </m-button>
          <span>Delete</span>
        </div>
        <div class="doc-item">
          <m-button>
            <m-icon name="copy" style="margin-right: 4px" />
            复制
          </m-button>
          <span>Copy</span>
        </div>
        <div class="doc-item">
          <m-button>
            <m-icon name="plus" style="margin-right: 4px" />
            添加
          </m-button>
          <span>Add</span>
        </div>
      </div>
    </DemoSection>

    <!-- 按钮组 -->
    <DemoSection 
      title="按钮组"
      code="<m-button-group>
  <m-button type='primary'>
    <m-icon name='square-pen' style='margin-right: 4px;'/>
    编辑
  </m-button>
  <m-button type='success'>
    <m-icon name='check' style='margin-right: 4px;'/>
    保存
  </m-button>
  <m-button type='danger'>
    <m-icon name='lucide-x' style='margin-right: 4px;'/>
    取消
  </m-button>
</m-button-group>"
    >
      <div class="doc-item">
        <m-button-group>
          <m-button type="primary">
            <m-icon name="square-pen" style="margin-right: 4px" />
            编辑
          </m-button>
          <m-button type="success">
            <m-icon name="check" style="margin-right: 4px" />
            保存
          </m-button>
          <m-button type="danger">
            <m-icon name="lucide-x" style="margin-right: 4px" />
            取消
          </m-button>
        </m-button-group>
        <span>Actions</span>
      </div>
    </DemoSection>

    <!-- 交互演示 -->
    <DemoSection 
      title="交互演示"
      code="<m-button type='primary' @click='handleClick'>点击事件</m-button><m-button type='success' @click='handleConfirm'>确认对话框</m-button><m-button type='warning' @click='handleAlert'>警告提示</m-button>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button type="primary" @click="handleClick">点击事件</m-button>
          <span>Click</span>
        </div>
        <div class="doc-item">
          <m-button type="success" @click="handleConfirm">确认对话框</m-button>
          <span>Confirm</span>
        </div>
        <div class="doc-item">
          <m-button type="warning" @click="handleAlert">警告提示</m-button>
          <span>Alert</span>
        </div>
        <div class="doc-item">
          <m-button type="danger" @click="handleMessage">消息提示</m-button>
          <span>Message</span>
        </div>
        <div class="doc-item">
          <m-button type="info" @click="handleNotification">通知消息</m-button>
          <span>Notification</span>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义样式按钮 -->
    <DemoSection 
      title="自定义样式按钮"
      code="<m-button class='custom-button gradient-button'>渐变按钮</m-button><m-button class='custom-button shadow-button'>阴影按钮</m-button><m-button class='custom-button neon-button'>霓虹按钮</m-button>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-button class="custom-button gradient-button">渐变按钮</m-button>
          <span>Gradient</span>
        </div>
        <div class="doc-item">
          <m-button class="custom-button shadow-button">阴影按钮</m-button>
          <span>Shadow</span>
        </div>
        <div class="doc-item">
          <m-button class="custom-button neon-button">霓虹按钮</m-button>
          <span>Neon</span>
        </div>
        <div class="doc-item">
          <m-button class="custom-button glass-button">玻璃按钮</m-button>
          <span>Glass</span>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Button API"
      :props="buttonApiProps"
      props-title="Button Attributes"
      :events="buttonApiEvents"
      :slots="buttonApiSlots"
      slots-title="Button Slots"
      :exposes="buttonApiExposes"
      exposes-title="Button Exposes"
    />

    <!-- ButtonGroup API 文档 -->
    <ApiDocs
      title="ButtonGroup API"
      :props="buttonGroupApiProps"
      props-title="ButtonGroup Attributes"
      :slots="buttonGroupApiSlots"
      slots-title="ButtonGroup Slots"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MButton, MIcon } from "@mc-markets/ui";
import Test from "@/components/test.vue";


// 响应式数据
const loading = ref(true);
const disabled = ref(false);

// API 文档数据
const buttonApiProps = [
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "尺寸，可选值：large / default / small",
  },
  {
    name: "type",
    type: "enum",
    default: "-",
    description:
      "按钮类型，在设置color时，后者优先。可选值：primary / success / warning / danger / info / text",
  },
  {
    name: "plain",
    type: "boolean",
    default: "false",
    description: "是否为朴素按钮",
  },
  {
    name: "text",
    type: "boolean",
    default: "false",
    description: "是否为文字按钮（2.2.0+）",
  },
  {
    name: "bg",
    type: "boolean",
    default: "false",
    description: "是否显示文字按钮背景颜色（2.2.0+）",
  },
  {
    name: "link",
    type: "boolean",
    default: "false",
    description: "是否为链接按钮（2.2.1+）",
  },
  {
    name: "round",
    type: "boolean",
    default: "false",
    description: "是否为圆角按钮",
  },
  {
    name: "circle",
    type: "boolean",
    default: "false",
    description: "是否为圆形按钮",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "是否为加载中状态",
  },
  {
    name: "loading-icon",
    type: "string / Component",
    default: "Loading",
    description: "自定义加载中状态图标组件",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "按钮是否为禁用状态",
  },
  {
    name: "icon",
    type: "string / Component",
    default: "-",
    description: "图标组件",
  },
  {
    name: "autofocus",
    type: "boolean",
    default: "false",
    description: "原生 autofocus 属性",
  },
  {
    name: "native-type",
    type: "enum",
    default: "button",
    description: "原生 type 属性，可选值：button / submit / reset",
  },
  {
    name: "auto-insert-space",
    type: "boolean",
    default: "false",
    description:
      "两个中文字符之间自动插入空格(仅当文本长度为 2 且所有字符均为中文时才生效)",
  },
  {
    name: "color",
    type: "string",
    default: "-",
    description:
      "自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色（beta）",
  },
  {
    name: "dark",
    type: "boolean",
    default: "false",
    description: "dark 模式, 意味着自动设置 color 为 dark 模式的颜色（beta）",
  },
  {
    name: "tag",
    type: "string / Component",
    default: "button",
    description: "自定义元素标签（2.3.4+）",
  },
];

const buttonApiEvents = [
  {
    name: "click",
    description: "点击按钮时触发",
    params: "(event: MouseEvent)",
  },
  {
    name: "focus",
    description: "按钮获得焦点时触发",
    params: "(event: FocusEvent)",
  },
  {
    name: "blur",
    description: "按钮失去焦点时触发",
    params: "(event: FocusEvent)",
  },
];

const buttonApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
  {
    name: "loading",
    description: "自定义加载中组件",
  },
  {
    name: "icon",
    description: "自定义图标组件",
  },
];

const buttonApiExposes = [
  {
    name: "ref",
    description: "按钮 html 元素",
    type: "object",
  },
  {
    name: "size",
    description: "按钮尺寸",
    type: "object",
  },
  {
    name: "type",
    description: "按钮类型",
    type: "object",
  },
  {
    name: "disabled",
    description: "按钮已禁用",
    type: "object",
  },
  {
    name: "shouldAddSpace",
    description: "是否在两个字符之间插入空格",
    type: "object",
  },
];

const buttonGroupApiProps = [
  {
    name: "size",
    type: "enum",
    default: "-",
    description:
      "用于控制该按钮组内按钮的大小，可选值：large / default / small",
  },
  {
    name: "type",
    type: "enum",
    default: "-",
    description:
      "用于控制该按钮组内按钮的类型，可选值：primary / success / warning / danger / info / text",
  },
];

const buttonGroupApiSlots = [
  {
    name: "default",
    description: "自定义按钮组内容",
    subTags: "Button",
  },
];

// 方法
const handleLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    ElMessage.success("加载完成！");
  }, 2000);
};

const handleDisabled = () => {
  disabled.value = !disabled.value;
  ElMessage.info(disabled.value ? "按钮已禁用" : "按钮已启用");
};

const handleClick = () => {
  ElMessage.success("按钮被点击了！");
};

const handleConfirm = async () => {
  try {
    await ElMessageBox.confirm(
      "这是一个确认对话框，您确定要继续吗？",
      "确认操作",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }
    );
    ElMessage.success("您点击了确定！");
  } catch {
    ElMessage.info("您点击了取消");
  }
};

const handleAlert = () => {
  ElMessageBox.alert("这是一个警告提示！", "警告", {
    confirmButtonText: "知道了",
    type: "warning",
  });
};

const handleMessage = () => {
  ElMessage({
    message: "这是一条消息提示！",
    type: "info",
    duration: 3000,
  });
};

const handleNotification = () => {
  ElNotification({
    title: "通知标题",
    message: "这是一条通知消息！",
    type: "success",
    duration: 3000,
  });
};
</script>

<style scoped lang="scss">
.button-page {
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

  /* .doc-item:hover {
  border-color: var(--el-color-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
} */

  .doc-item span {
    margin-top: 8px;
    font-size: 12px;
    color: var(--el-text-color-regular);
    text-align: center;
  }

  /* 自定义样式按钮 */
  .custom-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    border: none;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .gradient-button {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
    background-size: 300% 300%;
    animation: gradientShift 3s ease infinite;

    &:hover {
      box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    }
  }

  .shadow-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

    &:hover {
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
    }
  }

  .neon-button {
    background: transparent;
    color: #00ffff;
    border: 2px solid #00ffff;
    box-shadow: 0 0 5px #00ffff, inset 0 0 5px #00ffff;

    &:hover {
      background: #00ffff;
      color: #000;
      box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff;
    }
  }

  .glass-button {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #ddd;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* 响应式设计 */
  @media (max-width: 1200px) {
    .doc-grid {
      grid-template-columns: repeat(auto-fit, minmax(180px, auto));
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .button-page {
      padding: 16px;
    }

    .doc-grid {
      grid-template-columns: repeat(auto-fit, minmax(150px, auto));
      gap: 12px;
    }

    .doc-item {
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    .button-page {
      padding: 12px;
    }

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
