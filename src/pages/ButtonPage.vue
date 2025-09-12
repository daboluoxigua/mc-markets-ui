<template>
  <div class="button-page">
    <!-- 基础按钮类型 -->
    <DemoSection title="基础按钮类型">
      <div class="doc-grid">
        <div class="doc-item">
          <Button>默认按钮</Button>
          <span>Default</span>
        </div>
        <div class="doc-item">
          <Button type="primary">主要按钮</Button>
          <span>Primary</span>
        </div>
        <div class="doc-item">
          <Button type="success">成功按钮</Button>
          <span>Success</span>
        </div>
        <div class="doc-item">
          <Button type="warning">警告按钮</Button>
          <span>Warning</span>
        </div>
        <div class="doc-item">
          <Button type="danger">危险按钮</Button>
          <span>Danger</span>
        </div>
        <div class="doc-item">
          <Button type="info">信息按钮</Button>
          <span>Info</span>
        </div>
      </div>
    </DemoSection>
    <!-- Plain 按钮 -->
    <DemoSection title="Plain 按钮">
      <div class="doc-grid">
        <div class="doc-item">
          <Button plain>Plain</Button>
          <span>Plain</span>
        </div>
        <div class="doc-item">
          <Button plain disabled>禁用状态</Button>
          <span>Disabled</span>
        </div>
        <div class="doc-item">
          <Button type="primary" plain>Primary</Button>
          <span>Primary</span>
        </div>
        <div class="doc-item">
          <Button type="success" plain>Success</Button>
          <span>Success</span>
        </div>
        <div class="doc-item">
          <Button type="info" plain>Info</Button>
          <span>Info</span>
        </div>
        <div class="doc-item">
          <Button type="warning" plain>Warning</Button>
          <span>Warning</span>
        </div>
        <div class="doc-item">
          <Button type="danger" plain>Danger</Button>
          <span>Danger</span>
        </div>
      </div>
    </DemoSection>
    <!-- 按钮尺寸 -->
    <DemoSection title="按钮尺寸">
      <div class="doc-grid">
        <div class="doc-item">
          <Button size="large" type="primary">大按钮</Button>
          <span>Large</span>
        </div>
        <div class="doc-item">
          <Button type="primary">默认按钮</Button>
          <span>Default</span>
        </div>
        <div class="doc-item">
          <Button size="small" type="primary">小按钮</Button>
          <span>Small</span>
        </div>
      </div>
    </DemoSection>

    <!-- 按钮状态 -->
    <DemoSection title="按钮状态">
      <div class="doc-grid">
        <div class="doc-item">
          <Button type="primary" disabled>禁用状态</Button>
          <span>Disabled</span>
        </div>
        <div class="doc-item">
          <Button type="primary" :loading="loading" @click="handleLoading">
            {{ loading ? "加载中..." : "点击加载" }}
          </Button>
          <span>Loading</span>
        </div>
        <div class="doc-item">
          <Button :disabled="disabled" @click="handleDisabled">
            {{ disabled ? "已禁用" : "可点击" }}
          </Button>
          <span>Toggle</span>
        </div>
        <div class="doc-item">
          <Button plain>朴素按钮</Button>
          <span>Plain</span>
        </div>
        <div class="doc-item">
          <Button round>圆角按钮</Button>
          <span>Round</span>
        </div>
        <div class="doc-item">
          <Button circle>
            <el-icon><Search /></el-icon>
          </Button>
          <span>Circle</span>
        </div>
      </div>
    </DemoSection>

    <!-- 按钮形状 -->
    <DemoSection title="按钮形状">
      <div class="doc-grid">
        <div class="doc-item">
          <Button type="primary">默认形状</Button>
          <span>Default</span>
        </div>
        <div class="doc-item">
          <Button type="primary" round>圆角按钮</Button>
          <span>Round</span>
        </div>
        <div class="doc-item">
          <Button type="primary" circle>
            <el-icon><Edit /></el-icon>
          </Button>
          <span>Circle</span>
        </div>
      </div>
    </DemoSection>

    <!-- 图标按钮 -->
    <DemoSection title="图标按钮">
      <div class="doc-grid">
        <div class="doc-item">
          <Button type="primary" :icon="Search"> 搜索 </Button>
          <span>Search</span>
        </div>
        <div class="doc-item">
          <Button :icon="Edit"> 编辑 </Button>
          <span>Edit</span>
        </div>
        <div class="doc-item">
          <Button :icon="Delete"> 删除 </Button>
          <span>Delete</span>
        </div>
        <div class="doc-item">
          <Button :icon="Download"> 下载 </Button>
          <span>Download</span>
        </div>
        <div class="doc-item">
          <Button :icon="Upload"> 上传 </Button>
          <span>Upload</span>
        </div>
      </div>
    </DemoSection>

    <!-- 按钮组 -->
    <DemoSection title="按钮组">
      <div class="doc-item">
        <el-button-group>
          <Button type="primary" :icon="Edit">编辑</Button>
          <Button type="success" :icon="Check">保存</Button>
          <Button type="danger" :icon="Close">取消</Button>
        </el-button-group>
        <span>Actions</span>
      </div>
    </DemoSection>

    <!-- 交互演示 -->
    <DemoSection title="交互演示">
      <div class="doc-grid">
        <div class="doc-item">
          <Button type="primary" @click="handleClick">点击事件</Button>
          <span>Click</span>
        </div>
        <div class="doc-item">
          <Button type="success" @click="handleConfirm">确认对话框</Button>
          <span>Confirm</span>
        </div>
        <div class="doc-item">
          <Button type="warning" @click="handleAlert">警告提示</Button>
          <span>Alert</span>
        </div>
        <div class="doc-item">
          <Button type="danger" @click="handleMessage">消息提示</Button>
          <span>Message</span>
        </div>
        <div class="doc-item">
          <Button type="info" @click="handleNotification">通知消息</Button>
          <span>Notification</span>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义样式按钮 -->
    <DemoSection title="自定义样式按钮">
      <div class="doc-grid">
        <div class="doc-item">
          <Button class="custom-button gradient-button">渐变按钮</Button>
          <span>Gradient</span>
        </div>
        <div class="doc-item">
          <Button class="custom-button shadow-button">阴影按钮</Button>
          <span>Shadow</span>
        </div>
        <div class="doc-item">
          <Button class="custom-button neon-button">霓虹按钮</Button>
          <span>Neon</span>
        </div>
        <div class="doc-item">
          <Button class="custom-button glass-button">玻璃按钮</Button>
          <span>Glass</span>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Button 组件 API 文档"
      :props="buttonApiProps"
      props-title="Button 组件属性"
      :events="buttonApiEvents"
      :css-classes="buttonApiCssClasses"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { Button, searchIcons } from "@mc-markets/ui";
import {
  Search,
  Edit,
  Delete,
  Download,
  Upload,
  ArrowLeft,
  ArrowRight,
  Check,
  Close,
} from "@element-plus/icons-vue";

// 响应式数据
const loading = ref(true);
const disabled = ref(false);

// API 文档数据
const buttonApiProps = [
  {
    name: "type",
    type: "string",
    default: "-",
    description: "按钮类型，可选值：primary / success / warning / danger / info / text",
  },
  {
    name: "size",
    type: "string",
    default: "-",
    description: "按钮尺寸，可选值：large / default / small",
  },
  {
    name: "plain",
    type: "boolean",
    default: "false",
    description: "是否为朴素按钮",
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
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用状态",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "是否加载中状态",
  },
  {
    name: "icon",
    type: "string | Component",
    default: "-",
    description: "图标组件",
  },
  {
    name: "icon-position",
    type: "string",
    default: "left",
    description: "图标位置，可选值：left / right",
  },
  {
    name: "native-type",
    type: "string",
    default: "button",
    description: "原生 type 属性，可选值：button / submit / reset",
  },
  {
    name: "autofocus",
    type: "boolean",
    default: "false",
    description: "是否默认聚焦",
  },
  {
    name: "tag",
    type: "string | Component",
    default: "button",
    description: "自定义元素标签",
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

const buttonApiCssClasses = [
  {
    name: ".el-button",
    description: "按钮根元素",
  },
  {
    name: ".el-button--primary",
    description: "主要按钮样式",
  },
  {
    name: ".el-button--success",
    description: "成功按钮样式",
  },
  {
    name: ".el-button--warning",
    description: "警告按钮样式",
  },
  {
    name: ".el-button--danger",
    description: "危险按钮样式",
  },
  {
    name: ".el-button--info",
    description: "信息按钮样式",
  },
  {
    name: ".el-button--text",
    description: "文本按钮样式",
  },
  {
    name: ".el-button--large",
    description: "大尺寸按钮样式",
  },
  {
    name: ".el-button--small",
    description: "小尺寸按钮样式",
  },
  {
    name: ".is-plain",
    description: "朴素按钮样式",
  },
  {
    name: ".is-round",
    description: "圆角按钮样式",
  },
  {
    name: ".is-circle",
    description: "圆形按钮样式",
  },
  {
    name: ".is-disabled",
    description: "禁用状态样式",
  },
  {
    name: ".is-loading",
    description: "加载中状态样式",
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
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .button-page {
      padding: 16px;
    }

    .doc-grid {
      grid-template-columns: repeat(2, 1fr);
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
