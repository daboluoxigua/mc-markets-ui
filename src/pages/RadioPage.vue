<template>
  <div class="radio-page">
    <!-- 基础用法 -->
    <DemoSection 
      title="基础用法"
      code="<template>
  <m-radio-group v-model='radio1'>
    <m-radio value='1' size='large'>Option 1</m-radio>
    <m-radio value='2' size='large'>Option 2</m-radio>
  </m-radio-group>
  
  <m-radio-group v-model='radio2'>
    <m-radio value='1'>Option 1</m-radio>
    <m-radio value='2'>Option 2</m-radio>
  </m-radio-group>
  
  <m-radio-group v-model='radio3'>
    <m-radio value='1' size='small'>Option 1</m-radio>
    <m-radio value='2' size='small'>Option 2</m-radio>
  </m-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
</script>"
    >
      <div class="example-radio-block">
        <div class="example-demonstration">单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。</div>
        <div class="mb-2 ml-4">
          <m-radio-group v-model="radio1">
            <m-radio value="1" size="large">Option 1</m-radio>
            <m-radio value="2" size="large">Option 2</m-radio>
          </m-radio-group>
        </div>
        <div class="my-2 ml-4">
          <m-radio-group v-model="radio2">
            <m-radio value="1">Option 1</m-radio>
            <m-radio value="2">Option 2</m-radio>
          </m-radio-group>
        </div>
        <div class="my-4 ml-4">
          <m-radio-group v-model="radio3">
            <m-radio value="1" size="small">Option 1</m-radio>
            <m-radio value="2" size="small">Option 2</m-radio>
          </m-radio-group>
        </div>
      </div>
    </DemoSection>

    <!-- 禁用状态 -->
    <DemoSection 
      title="禁用状态"
      code="<m-radio v-model='radio4' disabled value='disabled'>Option A</m-radio><m-radio v-model='radio4' disabled value='selected and disabled'>Option B</m-radio>"
    >
      <div class="example-radio-block">
        <div class="example-demonstration">disabled 属性可以用来控制单选框的禁用状态。</div>
        <m-radio v-model="radio4" disabled value="disabled">Option A</m-radio>
        <m-radio v-model="radio4" disabled value="selected and disabled">Option B</m-radio>
      </div>
    </DemoSection>

    <!-- 单选框组 -->
    <DemoSection 
      title="单选框组"
      code="<m-radio-group v-model='radio5'><m-radio :value='3'>Option A</m-radio><m-radio :value='6'>Option B</m-radio></m-radio-group>"
    >
      <div class="example-radio-block">
        <div class="example-demonstration">适用于在多个互斥的选项中选择的场景</div>
        <m-radio-group v-model="radio5">
          <m-radio :value="3">Option A</m-radio>
          <m-radio :value="6">Option B</m-radio>
          <m-radio :value="9">Option C</m-radio>
        </m-radio-group>
      </div>
    </DemoSection>

    <!-- Options attribute 2.11.2 -->
    <DemoSection 
      title="Options attribute 2.11.2"
      code="<m-radio-group v-model='radio6' :options='options' />"
    >
      <div class="example-radio-block">
        <div class="example-demonstration">Shortcut from basic el-radio-group usage. 您可以通过 props 属性自定义 options 的别名。</div>
        <m-radio-group v-model="radio6" :options="options" />
      </div>
    </DemoSection>
    <!-- API 文档 -->
    <ApiDocs
      title="Radio API"
      :props="radioApiProps"
      props-title="Radio Attributes"
      :events="radioApiEvents"
      events-title="Radio Events"
      :slots="radioApiSlots"
      slots-title="Radio Slots"
    />

    <ApiDocs
      title="RadioGroup API"
      :props="radioGroupApiProps"
      props-title="RadioGroup Attributes"
      :events="radioGroupApiEvents"
      events-title="RadioGroup Events"
      :slots="radioGroupApiSlots"
      slots-title="RadioGroup Slots"
    />

    <ApiDocs
      title="RadioButton API"
      :props="radioButtonApiProps"
      props-title="RadioButton Attributes"
      :slots="radioButtonApiSlots"
      slots-title="RadioButton Slots"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MRadio, MRadioGroup, MRadioButton } from "@mc-markets/ui";

// 响应式数据
const radio1 = ref('1');
const radio2 = ref('1');
const radio3 = ref('1');
const radio4 = ref('selected and disabled');
const radio5 = ref(3);
const radio6 = ref(3);
const radio7 = ref('New York');
const radio8 = ref('New York');
const radio9 = ref('New York');
const radio10 = ref('1');
const radio11 = ref('1');
const radio12 = ref('1');
const radio13 = ref('1');
const radio14 = ref('1');
const radio15 = ref('1');
const radio16 = ref('1');
const radio17 = ref('1');
const radio18 = ref('1');
const radio19 = ref('1');

// Options 数据
const options = [
  {
    value: 3,
    label: 'Option A',
  },
  {
    value: 6,
    label: 'Option B',
  },
  {
    value: 9,
    label: 'Option C',
  },
];

// Radio API 文档数据 - 严格按照 Element Plus 2.11.2 规范
const radioApiProps = [
  {
    name: "model-value / v-model",
    type: "string / number / boolean",
    default: "—",
    description: "选中项绑定值"
  },
  {
    name: "value",
    type: "string / number / boolean",
    default: "—",
    description: "单选框的值",
    version: "2.6.0"
  },
  {
    name: "label",
    type: "string / number / boolean",
    default: "—",
    description: "单选框的 label 如果value没有值， label则作为value使用"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用单选框"
  },
  {
    name: "border",
    type: "boolean",
    default: "false",
    description: "是否显示边框"
  },
  {
    name: "size",
    type: "enum",
    default: "—",
    description: "单选框的尺寸",
    values: ["large", "default", "small"]
  },
  {
    name: "name",
    type: "string",
    default: "—",
    description: "原始 name 属性"
  }
];

const radioApiEvents = [
  {
    name: "change",
    description: "绑定值变化时触发的事件",
    params: "Function"
  }
];

const radioApiSlots = [
  {
    name: "default",
    description: "自定义默认内容"
  }
];

// RadioGroup API 文档数据
const radioGroupApiProps = [
  {
    name: "model-value / v-model",
    type: "string / number / boolean",
    default: "—",
    description: "绑定值"
  },
  {
    name: "size",
    type: "string",
    default: "default",
    description: "单选框按钮或边框按钮的大小"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用"
  },
  {
    name: "validate-event",
    type: "boolean",
    default: "true",
    description: "输入时是否触发表单的校验"
  },
  {
    name: "text-color",
    type: "string",
    default: "#ffffff",
    description: "按钮形式的 Radio 激活时的文本颜色"
  },
  {
    name: "fill",
    type: "string",
    default: "#409eff",
    description: "按钮形式的 Radio 激活时的填充色和边框色"
  },
  {
    name: "aria-label",
    type: "string",
    default: "—",
    description: "与 RadioGroup 中的 aria-label 属性相同",
    version: "2.7.2"
  },
  {
    name: "name",
    type: "string",
    default: "—",
    description: "原生 name 属性"
  },
  {
    name: "id",
    type: "string",
    default: "—",
    description: "原生 id 属性"
  },
  {
    name: "label",
    type: "string",
    default: "—",
    description: "与 RadioGroup 中的 aria-label 属性相同",
    deprecated: true
  },
  {
    name: "options",
    type: "array",
    default: "—",
    description: "选项的数据源， value 的 key 和 label 和  disabled可以通过 props自定义.",
    version: "2.11.2"
  },
  {
    name: "props",
    type: "object",
    default: "{value: 'value', label: 'label', disabled: 'disabled'}",
    description: "options 的配置",
    version: "2.11.2"
  }
];

const radioGroupApiEvents = [
  {
    name: "change",
    description: "绑定值变化时触发的事件",
    params: "Function"
  }
];

const radioGroupApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
    subTags: "Radio / RadioButton"
  }
];

// RadioButton API 文档数据
const radioButtonApiProps = [
  {
    name: "value",
    type: "string / number / boolean",
    default: "—",
    description: "单选框的值",
    version: "2.6.0"
  },
  {
    name: "label",
    type: "string / number / boolean",
    default: "—",
    description: "单选框的 label 如果没有 value， label则作为value使用"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用单选框"
  },
  {
    name: "name",
    type: "string",
    default: "—",
    description: "原生 name 属性"
  }
];

// RadioButton 没有 Events，官网文档中没有列出

const radioButtonApiSlots = [
  {
    name: "default",
    description: "默认插槽内容"
  }
];
</script>

<style scoped lang="scss">
.radio-page {
  .example-radio-block + .example-radio-block {
    margin-top: 10px;
  }
  
  .example-radio-block .example-demonstration {
    margin-bottom: 16px;
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .radio-page {
      padding: 16px;
    }
  }

  @media (max-width: 480px) {
    .radio-page {
      padding: 12px;
    }
  }
}
</style>
