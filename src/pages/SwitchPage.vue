<template>
  <div class="switch-page">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <div class="example-switch-block">
        <div class="example-demonstration">绑定 v-model 到一个 Boolean 类型的变量。 可以使用 --el-switch-on-color 属性与 --el-switch-off-color 属性来设置开关的背景色。</div>
        <m-switch v-model="switch1" />
        <m-switch 
          v-model="switch2" 
          class="ml-2" 
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" 
        />
      </div>
    </DemoSection>

    <!-- 尺寸 -->
    <DemoSection title="尺寸">
      <div class="example-switch-block">
        <div class="example-demonstration">设置 size 属性，接受 large 或 small</div>
        <m-switch v-model="switch3" size="large" active-text="Open" inactive-text="Close" />
        <br />
        <m-switch v-model="switch4" active-text="Open" inactive-text="Close" />
        <br />
        <m-switch v-model="switch5" size="small" active-text="Open" inactive-text="Close" />
      </div>
    </DemoSection>

    <!-- 文字描述 -->
    <DemoSection title="文字描述">
      <div class="example-switch-block">
        <div class="example-demonstration">使用 active-text 属性与 inactive-text 属性来设置开关的文字描述。 使用 inline-prompt 属性来控制文本是否显示在点内。</div>
        <m-switch v-model="switch6" class="mb-2" active-text="Pay by month" inactive-text="Pay by year" />
        <br />
        <m-switch v-model="switch7" class="mb-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-text="Pay by month" inactive-text="Pay by year" />
        <br />
        <m-switch v-model="switch8" inline-prompt active-text="是" inactive-text="否" />
        <m-switch v-model="switch9" class="ml-2" inline-prompt style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-text="Y" inactive-text="N" />
        <m-switch v-model="switch10" class="ml-2" width="60" inline-prompt active-text="超出省略" inactive-text="超出省略" />
        <m-switch v-model="switch11" class="ml-2" inline-prompt style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-text="完整展示多个内容" inactive-text="多个内容" />
      </div>
    </DemoSection>

    <!-- 显示自定义图标 -->
    <DemoSection title="显示自定义图标">
      <div class="example-switch-block">
        <div class="example-demonstration">使用 inactive-icon 和 active-icon 属性来添加图标。 使用 inline-prompt 属性来控制图标显示在点内。</div>
        <m-switch v-model="switch12" :active-icon="Check" :inactive-icon="Close" />
        <br />
        <m-switch v-model="switch13" class="mt-2" style="margin-left: 24px" inline-prompt :active-icon="Check" :inactive-icon="Close" />
      </div>
    </DemoSection>

    <!-- 扩展的 value 类型 -->
    <DemoSection title="扩展的 value 类型">
      <div class="example-switch-block">
        <div class="example-demonstration">你可以设置 active-value 和 inactive-value 属性， 它们接受 Boolean、String 或 Number 类型的值。</div>
        <m-tooltip :content="'Switch value: ' + switch14" placement="top">
          <m-switch v-model="switch14" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" active-value="100" inactive-value="0" />
        </m-tooltip>
      </div>
    </DemoSection>

    <!-- 禁用状态 -->
    <DemoSection title="禁用状态">
      <div class="example-switch-block">
        <div class="example-demonstration">设置 disabled 属性，接受一个 Boolean，设置 true 即可禁用。</div>
        <m-switch v-model="switch15" disabled />
        <m-switch v-model="switch16" class="ml-2" />
      </div>
    </DemoSection>

    <!-- 加载状态 -->
    <DemoSection title="加载状态">
      <div class="example-switch-block">
        <div class="example-demonstration">设置 loading 属性，接受一个 Boolean，设置 true 即加载中状态。</div>
        <m-switch v-model="switch17" loading />
        <m-switch v-model="switch18" loading class="ml-2" />
      </div>
    </DemoSection>

    <!-- 阻止切换 -->
    <DemoSection title="阻止切换">
      <div class="example-switch-block">
        <div class="example-demonstration">设置 before-change 属性，若返回 false 或者返回 Promise 且被 reject，则停止切换。</div>
        <m-switch v-model="switch19" :loading="loading1" :before-change="beforeChange1" />
        <m-switch v-model="switch20" class="ml-2" :loading="loading2" :before-change="beforeChange2" />
      </div>
    </DemoSection>

    <!-- 自定义动作图标 2.3.9 -->
    <DemoSection title="自定义动作图标 2.3.9">
      <div class="example-switch-block">
        <div class="example-demonstration">使用 inactive-action-icon 和 active-action-icon 属性来添加图标。</div>
        <m-switch v-model="switch21" :active-action-icon="View" :inactive-action-icon="Hide" />
      </div>
    </DemoSection>

    <!-- 自定义操作图标 2.4.4 -->
    <DemoSection title="自定义操作图标 2.4.4">
      <div class="example-switch-block">
        <div class="example-demonstration">使用 active-action 和 inactive-action 属性来添加图标。</div>
        <m-switch v-model="switch22">
          <template #active-action>
            <span class="custom-active-action">T</span>
          </template>
          <template #inactive-action>
            <span class="custom-inactive-action">F</span>
          </template>
        </m-switch>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Switch API"
      :props="switchApiProps"
      props-title="Switch Attributes"
      :events="switchApiEvents"
      events-title="Switch Events"
      :slots="switchApiSlots"
      slots-title="Switch Slots"
      :exposes="switchApiExposes"
      exposes-title="Switch Exposes"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MSwitch, MTooltip } from "@mc-markets/ui";
import { Check, Close, View, Hide } from '@element-plus/icons-vue';

// 响应式数据
const switch1 = ref(true);
const switch2 = ref(true);
const switch3 = ref(true);
const switch4 = ref('100');
const switch5 = ref(true);
const switch6 = ref(false);
const switch7 = ref(true);
const switch8 = ref(true);
const switch9 = ref('100');
const switch10 = ref(true);
const switch11 = ref(true);
const switch12 = ref(true);
const switch13 = ref(true);
const switch14 = ref(false);
const switch15 = ref(true);
const switch16 = ref(true);
const switch17 = ref(true);
const switch18 = ref(false);
const switch19 = ref(false);
const switch20 = ref(false);
const switch21 = ref(true);
const switch22 = ref(true);

// 加载状态
const loading1 = ref(false);
const loading2 = ref(false);

// 阻止切换函数
const beforeChange1 = () => {
  loading1.value = true;
  return new Promise((resolve) => {
    setTimeout(() => {
      loading1.value = false;
      console.log('Switch success');
      return resolve(true);
    }, 1000);
  });
};

const beforeChange2 = () => {
  loading2.value = true;
  return new Promise((_, reject) => {
    setTimeout(() => {
      loading2.value = false;
      console.log('Switch failed');
      return reject(new Error('Error'));
    }, 1000);
  });
};

// Switch API 文档数据 - 严格按照 Element Plus 2.11.2 规范
const switchApiProps = [
  {
    name: "model-value / v-model",
    type: "boolean / string / number",
    default: "false",
    description: "绑定值，必须等于 active-value 或 inactive-value，默认为 Boolean 类型"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用"
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "是否显示加载中"
  },
  {
    name: "size",
    type: "enum",
    default: "''",
    description: "switch 的大小"
  },
  {
    name: "width",
    type: "number / string",
    default: "''",
    description: "switch 的宽度"
  },
  {
    name: "inline-prompt",
    type: "boolean",
    default: "false",
    description: "无论图标或文本是否显示在点内，只会呈现文本的第一个字符"
  },
  {
    name: "active-icon",
    type: "string / Component",
    default: "—",
    description: "switch 状态为 on 时所显示图标，设置此项会忽略 active-text"
  },
  {
    name: "inactive-icon",
    type: "string / Component",
    default: "—",
    description: "switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text"
  },
  {
    name: "active-action-icon",
    type: "string / Component",
    default: "—",
    description: "on状态下显示的图标组件",
    version: "2.3.9"
  },
  {
    name: "inactive-action-icon",
    type: "string / Component",
    default: "—",
    description: "off状态下显示的图标组件",
    version: "2.3.9"
  },
  {
    name: "active-text",
    type: "string",
    default: "''",
    description: "switch 打开时的文字描述"
  },
  {
    name: "inactive-text",
    type: "string",
    default: "''",
    description: "switch 的状态为 off 时的文字描述"
  },
  {
    name: "active-value",
    type: "boolean / string / number",
    default: "true",
    description: "switch 状态为 on 时的值"
  },
  {
    name: "inactive-value",
    type: "boolean / string / number",
    default: "false",
    description: "switch的状态为 off 时的值"
  },
  {
    name: "name",
    type: "string",
    default: "''",
    description: "switch 对应的 name 属性"
  },
  {
    name: "validate-event",
    type: "boolean",
    default: "true",
    description: "是否触发表单验证"
  },
  {
    name: "before-change",
    type: "Function",
    default: "—",
    description: "switch 状态改变前的钩子， 返回 false 或者返回 Promise 且被 reject 则停止切换"
  },
  {
    name: "id",
    type: "string",
    default: "—",
    description: "input 的 id"
  },
  {
    name: "tabindex",
    type: "string / number",
    default: "—",
    description: "input 的 tabindex"
  },
  {
    name: "aria-label",
    type: "string",
    default: "—",
    description: "等价于原生 input aria-label 属性",
    version: "2.7.2"
  },
  {
    name: "active-color",
    type: "string",
    default: "''",
    description: "当在 on 状态时的背景颜色(推荐使用 CSS var --el-switch-on-color )",
    deprecated: true
  },
  {
    name: "inactive-color",
    type: "string",
    default: "''",
    description: "off 状态时的背景颜色(推荐使用 CSS var --el-switch-off-color )",
    deprecated: true
  },
  {
    name: "border-color",
    type: "string",
    default: "''",
    description: "开关的边框颜色 ( 推荐使用 CSS var --el-switch-border-color )",
    deprecated: true
  },
  {
    name: "label",
    type: "string",
    default: "—",
    description: "等价于原生 input aria-label 属性",
    deprecated: true
  }
];

const switchApiEvents = [
  {
    name: "change",
    description: "switch 状态发生变化时的回调函数",
    params: "Function"
  }
];

const switchApiSlots = [
  {
    name: "active-action",
    description: "自定义 active 行为",
    version: "2.4.4"
  },
  {
    name: "inactive-action",
    description: "自定义 inactive 行为",
    version: "2.4.4"
  }
];

const switchApiExposes = [
  {
    name: "focus",
    description: "手动 focus 到 switch 组件",
    type: "Function"
  }
];
</script>

<style scoped lang="scss">
.switch-page {
  .example-switch-block + .example-switch-block {
    margin-top: 10px;
  }
  
  .example-switch-block .example-demonstration {
    margin-bottom: 16px;
  }

  .example-switch-block {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .custom-active-action {
    color: #409eff;
    font-weight: bold;
  }

  .custom-inactive-action {
    color: #909399;
    font-weight: bold;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .switch-page {
      padding: 16px;
    }
  }

  @media (max-width: 480px) {
    .switch-page {
      padding: 12px;
    }
  }
}
</style>
