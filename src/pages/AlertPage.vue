<template>
  <div class="alert-page">
    <!-- 基础用法 -->
    <DemoSection 
      title="基础用法"
      code="<m-alert title='Success alert' type='success' />
<m-alert title='Warning alert' type='warning' />
<m-alert title='Error alert' type='error' />"
    >
      <template #default>
        <div class="example-alert-block">
          <div class="example-demonstration">Alert 组件不属于浮层元素，不会自动消失或关闭。</div>
          <div class="alert-demo-container">
            <m-alert title="Success alert" type="success" />
            <m-alert title="Warning alert" type="warning" />
            <m-alert title="Error alert" type="error" />
          </div>
        </div>
      </template>
      
    </DemoSection>

    <!-- 主题 -->
    <DemoSection 
      title="主题"
      code="<m-alert title='Success alert' type='success' effect='dark' />
<m-alert title='Warning alert' type='warning' effect='dark' />
<m-alert title='Error alert' type='error' effect='dark' />"
    >
      <div class="example-alert-block">
        <div class="example-demonstration">Alert 组件提供了两个不同的主题：light 和 dark。通过设置 effect 属性来改变主题，默认为 light。</div>
        <div class="alert-demo-container">
          <m-alert title="Success alert" type="success" effect="dark" />
          <m-alert title="Warning alert" type="warning" effect="dark" />
          <m-alert title="Error alert" type="error" effect="dark" />
        </div>
      </div>
    </DemoSection>

    <!-- 自定义关闭按钮 -->
    <DemoSection 
      title="自定义关闭按钮"
      code="<template>
  <m-alert title='Unclosable alert' type='success' :closable='false' />
  <m-alert title='Customized close text' type='success' close-text='Gotcha' />
  <m-alert title='Alert with callback' type='warning' @close='handleClose' />
</template>

<script setup>
const handleClose = () => {
  console.log('Alert 已关闭');
};
</script>"
    >
      <div class="example-alert-block">
        <div class="example-demonstration">你可以自定义关闭按钮为文字或其他符号。你可以设置 Alert 组件是否为可关闭状态， 关闭按钮的内容以及关闭时的回调函数同样可以定制。</div>
        <div class="alert-demo-container">
          <m-alert title="Unclosable alert" type="success" :closable="false" />
          <m-alert title="Customized close text" type="success" close-text="Gotcha" />
          <m-alert title="Alert with callback" type="warning" @close="handleClose" />
        </div>
      </div>
    </DemoSection>

    <!-- 使用图标 -->
    <DemoSection 
      title="使用图标"
      code="<m-alert title='Success alert' type='success' show-icon />
<m-alert title='Warning alert' type='warning' show-icon />
<m-alert title='Error alert' type='error' show-icon />"
    >
      <div class="example-alert-block">
        <div class="example-demonstration">你可以通过为 Alert 组件添加图标来提高可读性。通过设置 show-icon 属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。 或者你可以使用 icon slot 自定义 icon 内容。</div>
        <div class="alert-demo-container">
          <m-alert title="Success alert" type="success" show-icon />
          <m-alert title="Warning alert" type="warning" show-icon />
          <m-alert title="Error alert" type="error" show-icon />
          <m-alert title="Error alert with custom icon" type="error" show-icon>
            <template #icon>
              <Bell />
            </template>
          </m-alert>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义颜色 -->
    <DemoSection 
      title="自定义颜色"
      code="<m-alert title='Success Alert' type='success' description='背景色: all-green-10, 文字色: all-green-4' />
<m-alert title='Warning Alert' type='warning' description='背景色: all-orange-10, 文字色: text-warning-primary' />"
    >
      <div class="example-alert-block">
        <div class="example-demonstration">不同类型的 Alert 使用不同的背景色和文字颜色，提供更好的视觉区分。</div>
        <div class="alert-demo-container">
          <div class="color-demo-grid">
            <div class="color-demo-item">
              <m-alert title="Success Alert" type="success" description="背景色: all-green-10, 文字色: all-green-4" />
              <div class="color-info">
                <span class="color-label">Success</span>
                <div class="color-details">
                  <div class="color-bg" style="background-color: var(--all-green-10)"></div>
                  <div class="color-text" style="color: var(--all-green-4)">all-green-4</div>
                </div>
              </div>
            </div>
            <div class="color-demo-item">
              <m-alert title="Warning Alert" type="warning" description="背景色: all-orange-10, 文字色: text-warning-primary" />
              <div class="color-info">
                <span class="color-label">Warning</span>
                <div class="color-details">
                  <div class="color-bg" style="background-color: var(--all-orange-10)"></div>
                  <div class="color-text" style="color: var(--text-warning-primary)">text-warning-primary</div>
                </div>
              </div>
            </div>
            <div class="color-demo-item">
              <m-alert title="Error Alert" type="error" description="背景色: all-red-10, 文字色: text-error-primary" />
              <div class="color-info">
                <span class="color-label">Error</span>
                <div class="color-details">
                  <div class="color-bg" style="background-color: var(--all-red-10)"></div>
                  <div class="color-text" style="color: var(--text-error-primary)">text-error-primary</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义图标 -->
    <DemoSection 
      title="自定义图标"
      code="<m-alert title='Success alert' type='success' show-icon />
<m-alert title='Success alert' type='success' show-icon :use-custom-icon='false' />"
    >
      <div class="example-alert-block">
        <div class="example-demonstration">默认情况下，Alert 组件使用自定义图标替代 Element Plus 默认图标。你可以通过 use-custom-icon 属性控制是否使用自定义图标。</div>
        <div class="alert-demo-container">
          <div class="alert-demo-row">
            <div class="alert-demo-column">
              <h4>自定义图标 (默认)</h4>
              <m-alert title="Success alert" type="success" show-icon />
              <m-alert title="Warning alert" type="warning" show-icon />
              <m-alert title="Error alert" type="error" show-icon />
            </div>
            <div class="alert-demo-column">
              <h4>Element Plus 默认图标</h4>
              <m-alert title="Success alert" type="success" show-icon :use-custom-icon="false" />
              <m-alert title="Warning alert" type="warning" show-icon :use-custom-icon="false" />
              <m-alert title="Error alert" type="error" show-icon :use-custom-icon="false" />
            </div>
          </div>
        </div>
      </div>
    </DemoSection>

    <!-- 文字居中 -->
    <DemoSection 
      title="文字居中"
      code="<m-alert title='Success alert' type='success' center show-icon />
<m-alert title='Warning alert' type='warning' center show-icon />"
    >
      <div class="example-alert-block">
        <div class="example-demonstration">使用 center 属性来让文字水平居中。</div>
        <div class="alert-demo-container">
          <m-alert title="Success alert" type="success" center show-icon />
          <m-alert title="Warning alert" type="warning" center show-icon />
          <m-alert title="Error alert" type="error" center show-icon />
        </div>
      </div>
    </DemoSection>

    <!-- 文字描述 -->
    <DemoSection 
      title="文字描述"
      code="<m-alert title='With description' type='success' description='This is a description.' />"
    >
      <div class="example-alert-block">
        <div class="example-demonstration">为 Alert 组件添加一个更加详细的描述来使用户了解更多信息。除了必填的 title 属性外，你可以设置 description 属性来帮助你更好地介绍，我们称之为辅助性文字。 辅助性文字只能存放文本内容，当内容超出长度限制时会自动换行显示。</div>
        <div class="alert-demo-container">
          <m-alert
            title="With description"
            type="success"
            description="This is a description."
          />
        </div>
      </div>
    </DemoSection>

    <!-- 带图标和描述 -->
    <DemoSection 
      title="带图标和描述"
      code="<m-alert title='Success alert' type='success' description='More text description' show-icon />
<m-alert title='Warning alert' type='warning' description='More text description' show-icon />"
    >
      <div class="example-alert-block">
        <div class="example-demonstration">在最后, 这是一个带有图标和描述的例子。</div>
        <div class="alert-demo-container">
          <m-alert
            title="Success alert"
            type="success"
            description="More text description"
            show-icon
          />
          <m-alert
            title="Warning alert"
            type="warning"
            description="More text description"
            show-icon
          />
          <m-alert
            title="Error alert"
            type="error"
            description="More text description"
            show-icon
          />
        </div>
      </div>
    </DemoSection>

    <!-- 延迟属性 2.10.0 -->
    <DemoSection 
      title="延迟属性 2.10.0"
      code="<m-alert title='Success alert that appearance after 5000 milliseconds' type='success' :show-after='5000' />
<m-alert title='Warning alert that disappear after 5000 milliseconds' type='warning' :hide-after='5000' />"
    >
      <div class="example-alert-block">
        <div class="example-demonstration">在最后, 这是一个延迟属性的例子。</div>
        <div class="alert-demo-container">
          <m-alert
            title="Success alert that appearance after 5000 milliseconds"
            type="success"
            :show-after="5000"
            @open="handleOpen"
          />
          <m-alert
            title="Warning alert that disappear after 5000 milliseconds"
            type="warning"
            :hide-after="5000"
          />
          <m-alert
            title="Error alert that in 5000 milliseconds to be hidden"
            type="error"
            :closable="false"
            :auto-close="5000"
          />
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Alert API"
      :props="alertApiProps"
      props-title="Alert 属性"
      :events="alertApiEvents"
      events-title="Alert 事件"
      :slots="alertApiSlots"
      slots-title="Alert 插槽"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MAlert } from "@mc-markets/ui";
import { Bell } from '@element-plus/icons-vue';

// 事件处理
const handleClose = () => {
  alert('Hello World!');
};

const handleOpen = () => {
  console.log('open');
};

// Alert API 文档数据 - 严格按照 Element Plus 2.11.2 规范
const alertApiProps = [
  {
    name: "title",
    type: "string",
    default: "—",
    description: "Alert 标题。"
  },
  {
    name: "type",
    type: "enum",
    default: "success",
    description: "Alert 类型。",
    values: ["success", "warning", "error"]
  },
  {
    name: "description",
    type: "string",
    default: "—",
    description: "描述性文本"
  },
  {
    name: "closable",
    type: "boolean",
    default: "true",
    description: "是否可以关闭"
  },
  {
    name: "center",
    type: "boolean",
    default: "false",
    description: "文字是否居中"
  },
  {
    name: "close-text",
    type: "string",
    default: "—",
    description: "自定义关闭按钮文本"
  },
  {
    name: "show-icon",
    type: "boolean",
    default: "false",
    description: "是否显示类型图标"
  },
  {
    name: "use-custom-icon",
    type: "boolean",
    default: "true",
    description: "是否使用自定义图标"
  },
  {
    name: "effect",
    type: "enum",
    default: "light",
    description: "主题样式",
    values: ["light", "dark"]
  },
  {
    name: "show-after",
    type: "number",
    default: "0",
    description: "在触发后多久显示内容，单位毫秒",
    version: "2.10.0"
  },
  {
    name: "hide-after",
    type: "number",
    default: "200",
    description: "延迟关闭，单位毫秒",
    version: "2.10.0"
  },
  {
    name: "auto-close",
    type: "number",
    default: "0",
    description: "alert 出现后自动隐藏延时，单位毫秒",
    version: "2.10.0"
  }
];

const alertApiEvents = [
  {
    name: "open",
    description: "开启 Alert 时触发的事件",
    params: "Function",
    version: "2.10.0"
  },
  {
    name: "close",
    description: "关闭 Alert 时触发的事件",
    params: "Function"
  }
];

const alertApiSlots = [
  {
    name: "default",
    description: "Alert 内容描述"
  },
  {
    name: "title",
    description: "标题的内容"
  },
  {
    name: "icon",
    description: "icon 的内容",
    version: "2.9.7"
  }
];
</script>

<style scoped lang="scss">
.alert-page {
  .example-alert-block + .example-alert-block {
    margin-top: 10px;
  }
  
  .example-alert-block .example-demonstration {
    margin-bottom: 16px;
  }

  .alert-demo-container {
    max-width: 600px;
    
    .el-alert {
      margin: 20px 0 0;
      
      &:first-child {
        margin: 0;
      }
    }

    .alert-demo-row {
      display: flex;
      gap: 40px;
      margin-top: 20px;

      .alert-demo-column {
        flex: 1;
        
        h4 {
          margin: 0 0 16px 0;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
        }
      }
    }

    .color-demo-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 24px;
      margin-top: 20px;
    }

    .color-demo-item {
      .color-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
        padding: 8px 12px;
        background: var(--bg-secondary);
        border-radius: 4px;
        font-size: 12px;

        .color-label {
          font-weight: 600;
          color: var(--text-primary);
        }

        .color-details {
          display: flex;
          align-items: center;
          gap: 8px;

          .color-bg {
            width: 16px;
            height: 16px;
            border-radius: 2px;
            border: 1px solid var(--border-primary);
          }

          .color-text {
            font-family: monospace;
            font-size: 11px;
          }
        }
      }
    }
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .alert-page {
      padding: 16px;
    }

    .alert-demo-row {
      flex-direction: column;
      gap: 20px;
    }
  }

  @media (max-width: 480px) {
    .alert-page {
      padding: 12px;
    }
  }
}
</style>
