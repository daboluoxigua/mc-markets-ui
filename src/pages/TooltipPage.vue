<template>
  <div class="tooltip-page">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <div class="tooltip-base-box">
        <div class="row center">
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Top Left prompts info"
            placement="top-start"
          >
            <m-button>top-start</m-button>
          </m-tooltip>
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Top Center prompts info"
            placement="top"
          >
            <m-button>top</m-button>
          </m-tooltip>
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Top Right prompts info"
            placement="top-end"
          >
            <m-button>top-end</m-button>
          </m-tooltip>
        </div>
        <div class="row">
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Left Top prompts info"
            placement="left-start"
          >
            <m-button>left-start</m-button>
          </m-tooltip>
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Right Top prompts info"
            placement="right-start"
          >
            <m-button>right-start</m-button>
          </m-tooltip>
        </div>
        <div class="row">
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Left Center prompts info"
            placement="left"
          >
            <m-button class="mt-3 mb-3">left</m-button>
          </m-tooltip>
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Right Center prompts info"
            placement="right"
          >
            <m-button>right</m-button>
          </m-tooltip>
        </div>
        <div class="row">
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Left Bottom prompts info"
            placement="left-end"
          >
            <m-button>left-end</m-button>
          </m-tooltip>
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Right Bottom prompts info"
            placement="right-end"
          >
            <m-button>right-end</m-button>
          </m-tooltip>
        </div>
        <div class="row center">
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Bottom Left prompts info"
            placement="bottom-start"
          >
            <m-button>bottom-start</m-button>
          </m-tooltip>
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Bottom Center prompts info"
            placement="bottom"
          >
            <m-button>bottom</m-button>
          </m-tooltip>
          <m-tooltip
            class="box-item"
            effect="dark"
            content="Bottom Right prompts info"
            placement="bottom-end"
          >
            <m-button>bottom-end</m-button>
          </m-tooltip>
        </div>
      </div>
    </DemoSection>

    <!-- 主题 -->
    <DemoSection title="主题">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tooltip content="Top center" placement="top">
            <m-button>Dark</m-button>
          </m-tooltip>
          <span>Dark</span>
        </div>
        <div class="doc-item">
          <m-tooltip content="Bottom center" placement="bottom" effect="light">
            <m-button>Light</m-button>
          </m-tooltip>
          <span>Light</span>
        </div>
      </div>
    </DemoSection>


    <!-- 更多内容的文字提示 -->
    <DemoSection title="多内容的文字提示">
      <div class="doc-item">
        <m-tooltip placement="top">
          <template #content> <span style="color: #fff; font-size: 14px;">Title</span><br />Description. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do </template>
          <m-button>Top center</m-button>
        </m-tooltip>
        <span>Multiple Lines</span>
      </div>
    </DemoSection>

    <!-- 高级扩展 -->
    <DemoSection title="高级扩展">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tooltip
            :disabled="disabled"
            content="click to close tooltip function"
            placement="bottom"
            effect="light"
          >
            <m-button @click="disabled = !disabled">
              click to {{ disabled ? 'active' : 'close' }} tooltip function
            </m-button>
          </m-tooltip>
          <span>Click to Toggle</span>
        </div>
        <div class="doc-item">
          <m-tooltip
            content="This is a tooltip with custom transition"
            placement="top"
            transition="el-fade-in-linear"
          >
            <m-button>Custom Transition</m-button>
          </m-tooltip>
          <span>Custom Transition</span>
        </div>
        <div class="doc-item">
          <m-tooltip
            content="This tooltip will show after 1 second"
            placement="top"
            :show-after="1000"
          >
            <m-button>Delayed Show</m-button>
          </m-tooltip>
          <span>Delayed Show</span>
        </div>
        <div class="doc-item">
          <m-tooltip
            content="This tooltip will hide after 2 seconds"
            placement="top"
            :hide-after="2000"
          >
            <m-button>Auto Hide</m-button>
          </m-tooltip>
          <span>Auto Hide</span>
        </div>
      </div>
    </DemoSection>

    <!-- 显示 HTML 内容 -->
    <DemoSection title="显示 HTML 内容">
      <div class="doc-item">
        <m-tooltip
          content="<strong>This is <em>HTML</em> content</strong>"
          raw-content
          placement="top"
        >
          <m-button>HTML Content</m-button>
        </m-tooltip>
        <span>HTML Content</span>
      </div>
    </DemoSection>

    <!-- 单例模式 -->
    <DemoSection title="单例模式">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tooltip content="First tooltip" placement="top">
            <m-button>First</m-button>
          </m-tooltip>
          <span>First</span>
        </div>
        <div class="doc-item">
          <m-tooltip content="Second tooltip" placement="top">
            <m-button>Second</m-button>
          </m-tooltip>
          <span>Second</span>
        </div>
        <div class="doc-item">
          <m-tooltip content="Third tooltip" placement="top">
            <m-button>Third</m-button>
          </m-tooltip>
          <span>Third</span>
        </div>
      </div>
    </DemoSection>

    <!-- 受控模式 -->
    <DemoSection title="受控模式">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tooltip
            v-model:visible="controlledVisible"
            content="This is a controlled tooltip"
            placement="top"
          >
            <m-button>Controlled Tooltip</m-button>
          </m-tooltip>
          <span>Controlled</span>
        </div>
        <div class="doc-item">
          <m-button @click="controlledVisible = !controlledVisible">
            Toggle Tooltip
          </m-button>
          <span>Toggle Button</span>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义动画 -->
    <DemoSection title="自定义动画">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tooltip
            content="Fade animation"
            placement="top"
            transition="el-fade-in"
          >
            <m-button>Fade</m-button>
          </m-tooltip>
          <span>Fade</span>
        </div>
        <div class="doc-item">
          <m-tooltip
            content="Zoom animation"
            placement="top"
            transition="el-zoom-in-top"
          >
            <m-button>Zoom</m-button>
          </m-tooltip>
          <span>Zoom</span>
        </div>
        <div class="doc-item">
          <m-tooltip
            content="Slide animation"
            placement="top"
            transition="el-slide-fade"
          >
            <m-button>Slide</m-button>
          </m-tooltip>
          <span>Slide</span>
        </div>
      </div>
    </DemoSection>

    <!-- 使用 append-to -->
    <DemoSection title="使用 append-to">
      <div class="doc-item">
        <m-tooltip
          content="This tooltip is appended to body"
          placement="top"
          :teleported="true"
        >
          <m-button>Append to Body</m-button>
        </m-tooltip>
        <span>Append to Body</span>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Tooltip API"
      :props="tooltipApiProps"
      props-title="Tooltip Attributes"
      :events="tooltipApiEvents"
      events-title="Tooltip Events"
      :slots="tooltipApiSlots"
      slots-title="Tooltip Slots"
      :exposes="tooltipApiExposes"
      exposes-title="Tooltip Exposes"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MTooltip, MButton } from "@mc-markets/ui";

// 响应式数据
const disabled = ref(false);
const showVirtual = ref(false);
const controlledVisible = ref(false);
const virtualRef = ref(null);

// API 文档数据 - 严格按照 Element Plus 2.11.2 规范
const tooltipApiProps = [
  {
    name: "append-to",
    type: "string / HTMLElement",
    default: "document.body",
    description: "指示 Tooltip 的内容将附加到哪个元素。",
  },
  {
    name: "effect",
    type: "enum",
    default: "dark",
    description: "默认提供的主题，可选值：dark / light",
  },
  {
    name: "content",
    type: "string",
    default: "''",
    description: "显示的内容，也可被 slot#content 覆盖",
  },
  {
    name: "raw-content",
    type: "boolean",
    default: "false",
    description: "content 中的内容是否作为 HTML 字符串处理",
  },
  {
    name: "placement",
    type: "enum",
    default: "bottom",
    description: "Tooltip 组件出现的位置",
  },
  {
    name: "fallback-placements",
    type: "array",
    default: "-",
    description: "Tooltip 可用的 positions 请查看popper.js 文档",
  },
  {
    name: "visible / v-model:visible",
    type: "boolean",
    default: "-",
    description: "Tooltip 组件可见性",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Tooltip 组件是否禁用",
  },
  {
    name: "offset",
    type: "number",
    default: "12",
    description: "出现位置的偏移量",
  },
  {
    name: "transition",
    type: "string",
    default: "-",
    description: "动画名称",
  },
  {
    name: "popper-options",
    type: "object",
    default: "{}",
    description: "popper.js 参数",
  },
  {
    name: "arrow-offset",
    type: "number",
    default: "5",
    description: "控制Tooltip的箭头相对于弹出窗口的偏移(添加)。",
  },
  {
    name: "show-after",
    type: "number",
    default: "0",
    description: "在触发后多久显示内容，单位毫秒",
  },
  {
    name: "show-arrow",
    type: "boolean",
    default: "true",
    description: "tooltip 的内容是否有箭头",
  },
  {
    name: "hide-after",
    type: "number",
    default: "200",
    description: "延迟关闭，单位毫秒",
  },
  {
    name: "auto-close",
    type: "number",
    default: "0",
    description: "tooltip 出现后自动隐藏延时，单位毫秒",
  },
  {
    name: "popper-class",
    type: "string",
    default: "-",
    description: "为 Tooltip 的 popper 添加类名",
  },
  {
    name: "enterable",
    type: "boolean",
    default: "true",
    description: "鼠标是否可进入到 tooltip 中",
  },
  {
    name: "teleported",
    type: "boolean",
    default: "true",
    description: "是否使用 teleport。设置成 true则会被追加到 append-to 的位置",
  },
  {
    name: "trigger",
    type: "enum",
    default: "hover",
    description: "如何触发 Tooltip",
  },
  {
    name: "virtual-triggering",
    type: "boolean",
    default: "-",
    description: "用来标识虚拟触发是否被启用",
  },
  {
    name: "virtual-ref",
    type: "HTMLElement",
    default: "-",
    description: "标识虚拟触发时的触发元素",
  },
  {
    name: "trigger-keys",
    type: "Array",
    default: "['Enter','Space']",
    description: "当鼠标点击或者聚焦在触发元素上时， 可以定义一组键盘按键并且通过它们来控制 Tooltip 的显示",
  },
  {
    name: "persistent",
    type: "boolean",
    default: "-",
    description: "当 tooltip 组件长时间不触发且 persistent 属性设置为 false 时, popconfirm 将会被删除",
  },
  {
    name: "aria-label",
    type: "string",
    default: "-",
    description: "和 aria-label 属性保持一致",
  },
  {
    name: "focus-on-target",
    type: "boolean",
    default: "false",
    description: "when triggering tooltips through hover, whether to focus the trigger element, which improves accessibility",
  },
];

const tooltipApiEvents = [
  {
    name: "show",
    description: "显示时触发",
    params: "()",
  },
  {
    name: "hide",
    description: "隐藏时触发",
    params: "()",
  },
  {
    name: "before-show",
    description: "显示前触发",
    params: "()",
  },
  {
    name: "before-hide",
    description: "隐藏前触发",
    params: "()",
  },
];

const tooltipApiSlots = [
  {
    name: "default",
    description: "Tooltip 触发 & 引用的元素",
  },
  {
    name: "content",
    description: "自定义内容",
  },
];

const tooltipApiExposes = [
  {
    name: "popperRef",
    description: "el-popper 组件实例",
    type: "object",
  },
  {
    name: "contentRef",
    description: "el-tooltip-content 组件实例",
    type: "object",
  },
  {
    name: "isFocusInsideContent",
    description: "验证当前焦点事件是否在 el-tooltip-content 中触发",
    type: "Function",
  },
  {
    name: "updatePopper",
    description: "更新 el-popper组件实例",
    type: "Function",
  },
  {
    name: "onOpen",
    description: "onOpen 方法控制 el-tooltip 显示状态",
    type: "Function",
  },
  {
    name: "onClose",
    description: "onClose 方法控制 el-tooltip 显示状态",
    type: "Function",
  },
  {
    name: "hide",
    description: "提供 hide 方法",
    type: "Function",
  },
];
</script>

<style scoped lang="scss">
.tooltip-page {
  overflow: hidden; // 移除滚动条
  
  .tooltip-base-box {
    width: 600px;
    margin: 0 auto;
  }

  .tooltip-base-box .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tooltip-base-box .center {
    justify-content: center;
  }

  .tooltip-base-box .box-item {
    width: 110px;
    margin-top: 10px;
  }

  .doc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
    overflow: hidden; // 防止网格内容溢出
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

  /* 自定义主题样式 */
  :deep(.el-popper.is-customized) {
    padding: 6px 12px;
    background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
  }

  :deep(.el-popper.is-customized .el-popper__arrow::before) {
    background: linear-gradient(45deg, #b2e68d, #bce689);
    right: 0;
  }

  /* 演示合并popper-class的样式 */
  :deep(.my-custom-class) {
    font-weight: bold;
    font-size: 14px;
  }

  :deep(.my-border) {
    border: 2px dashed #409eff !important;
  }

  :deep(.my-shadow) {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
  }

  /* 响应式设计 */
  @media (max-width: 1200px) {
    .doc-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .tooltip-page {
      padding: 16px;
    }

    .tooltip-base-box {
      width: 100%;
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
    .tooltip-page {
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
