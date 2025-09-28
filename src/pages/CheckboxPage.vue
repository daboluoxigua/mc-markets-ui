<template>
  <div class="checkbox-page">
    <!-- 基础用法 -->
    <DemoSection 
      title="基础用法"
      code="<template>
  <m-checkbox v-model='checked2' label='Option 2' />
  <m-checkbox v-model='checked2' size='large' label='Option 2' />
</template>

<script setup>
import { ref } from 'vue';

const checked2 = ref(false);
</script>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-checkbox v-model="checked2" label="Option 2" />
          <span>默认尺寸</span>
        </div>
        <div class="doc-item">
          <m-checkbox v-model="checked2" size="large" label="Option 2" />
          <span>大尺寸</span>
        </div>
      </div>
    </DemoSection>

    <!-- 禁用状态 -->
    <DemoSection 
      title="禁用状态"
      code="<m-checkbox v-model='disabledChecked1' disabled>Disabled</m-checkbox>
<m-checkbox v-model='disabledChecked2' disabled>Disabled</m-checkbox>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-checkbox v-model="disabledChecked1" disabled>Disabled</m-checkbox>
          <span>禁用未选中</span>
        </div>
        <div class="doc-item">
          <m-checkbox v-model="disabledChecked2" disabled>Disabled</m-checkbox>
          <span>禁用已选中</span>
        </div>
        <div class="doc-item">
          <m-checkbox v-model="normalChecked">Not disabled</m-checkbox>
          <span>正常状态</span>
        </div>
      </div>
    </DemoSection>

    <!-- 多选框组 -->
    <DemoSection 
      title="多选框组" 
      :columns="1"
      code="<m-checkbox-group v-model='checkList'><m-checkbox label='Option A' value='Value A' /><m-checkbox label='Option B' value='Value B' /></m-checkbox-group>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-checkbox-group v-model="checkList">
            <m-checkbox label="Option A" value="Value A" />
            <m-checkbox label="Option B" value="Value B" />
            <m-checkbox label="Option C" value="Value C" />
            <m-checkbox label="disabled" value="Value disabled" disabled />
            <m-checkbox label="selected and disabled" value="Value selected and disabled" disabled />
          </m-checkbox-group>
          <span>多选框组</span>
          <p>当前值: {{ checkList }}</p>
        </div>
      </div>
    </DemoSection>

    <!-- Options 属性 -->
    <DemoSection 
      title="Options 属性" 
      :columns="1"
      code="<m-checkbox-group v-model='checkListOptions' :options='options' />"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-checkbox-group v-model="checkListOptions" :options="options" />
          <span>使用 options 属性</span>
        </div>
      </div>
    </DemoSection>

    <!-- 中间状态 -->
    <DemoSection 
      title="中间状态" 
      :columns="1"
      code="<m-checkbox v-model='checkAll' :indeterminate='isIndeterminate' @change='handleCheckAllChange'>Check all</m-checkbox>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
          >
            Check all
          </m-checkbox>
          <m-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
          >
            <m-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
              {{ city }}
            </m-checkbox>
          </m-checkbox-group>
          <span>全选功能</span>
        </div>
      </div>
    </DemoSection>

    <!-- 可选项目数量的限制 -->
    <DemoSection 
      title="可选项目数量的限制" 
      :columns="1"
      code="<m-checkbox-group v-model='checkedCitiesLimit' :min='1' :max='2'><m-checkbox label='选项' value='选项' /></m-checkbox-group>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-checkbox-group v-model="checkedCitiesLimit" :min="1" :max="2">
            <m-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
              {{ city }}
            </m-checkbox>
          </m-checkbox-group>
          <span>限制选择数量 (1-2个)</span>
        </div>
      </div>
    </DemoSection>

    <!-- 带有边框 -->
    <DemoSection 
      title="带有边框" 
      :columns="1"
      code="<m-checkbox-group v-model='borderCheckList'><m-checkbox label='Option A' value='Value A' border /><m-checkbox label='Option B' value='Value B' border /></m-checkbox-group>"
    >
      <div class="doc-grid">
        <div class="doc-item">
          <m-checkbox-group v-model="borderCheckList">
            <m-checkbox label="Option A" value="Value A" border />
            <m-checkbox label="Option B" value="Value B" border />
            <m-checkbox label="Option C" value="Value C" border />
            <m-checkbox label="disabled" value="Value disabled" border disabled />
            <m-checkbox label="selected and disabled" value="Value selected and disabled" border disabled />
          </m-checkbox-group>
          <span>带边框样式</span>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Checkbox API"
      :props="checkboxApiProps"
      props-title="Checkbox Attributes"
      :events="checkboxApiEvents"
      events-title="Checkbox Events"
      :slots="checkboxApiSlots"
      slots-title="Checkbox Slots"
    />

    <ApiDocs
      title="CheckboxGroup API"
      :props="checkboxGroupApiProps"
      props-title="CheckboxGroup Attributes"
      :events="checkboxGroupApiEvents"
      events-title="CheckboxGroup Events"
      :slots="checkboxGroupApiSlots"
      slots-title="CheckboxGroup Slots"
    />

    <ApiDocs
      title="CheckboxButton API"
      :props="checkboxButtonApiProps"
      props-title="CheckboxButton Attributes"
      :slots="checkboxButtonApiSlots"
      slots-title="CheckboxButton Slots"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

// 响应式数据
const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);

const disabledChecked1 = ref(false);
const disabledChecked2 = ref(true);
const normalChecked = ref(true);

const checkList = ref(['Value selected and disabled', 'Value A']);

const options = [
  { label: 'Option A', value: 'Value A' },
  { label: 'Option B', value: 'Value B' },
  { label: 'Option C', value: 'Value C' },
  { label: 'disabled', value: 'Value disabled', disabled: true },
  {
    label: 'selected and disabled',
    value: 'Value selected and disabled',
    disabled: true,
  },
];

const checkListOptions = ref(['Value selected and disabled', 'Value A']);

const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

const checkedCitiesLimit = ref(['Shanghai', 'Beijing']);

const buttonCheckList = ref(['Value A']);

const borderCheckList = ref(['Value A']);

// 全选功能处理
const handleCheckAllChange = (val) => {
  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};

const handleCheckedCitiesChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};

// Checkbox API 文档数据
const checkboxApiProps = [
  {
    name: "model-value / v-model",
    type: "string / number / boolean",
    default: "-",
    description: "绑定值",
  },
  {
    name: "value",
    type: "string / number / boolean / object",
    default: "-",
    description: "选中状态的值，只有在绑定对象类型为 array 时有效",
  },
  {
    name: "label",
    type: "string / number / boolean / object",
    default: "-",
    description: "选中状态的值，只有在绑定对象类型为 array 时有效。如果没有 value，label 则作为 value 使用",
  },
  {
    name: "true-value",
    type: "string / number",
    default: "-",
    description: "选中时的值",
  },
  {
    name: "false-value",
    type: "string / number",
    default: "-",
    description: "没有选中时的值",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "border",
    type: "boolean",
    default: "false",
    description: "是否显示边框",
  },
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "Checkbox 的尺寸，仅在 border 为真时有效",
  },
  {
    name: "name",
    type: "string",
    default: "-",
    description: "原生 name 属性",
  },
  {
    name: "checked",
    type: "boolean",
    default: "false",
    description: "当前是否勾选",
  },
  {
    name: "indeterminate",
    type: "boolean",
    default: "false",
    description: "设置不确定状态，仅负责样式控制",
  },
  {
    name: "validate-event",
    type: "boolean",
    default: "true",
    description: "输入时是否触发表单的校验",
  },
  {
    name: "tabindex",
    type: "string / number",
    default: "-",
    description: "输入框的 tabindex",
  },
  {
    name: "id",
    type: "string",
    default: "-",
    description: "input id",
  },
];

const checkboxApiEvents = [
  {
    name: "change",
    description: "当绑定值变化时触发的事件",
    params: "(value: string | number | boolean)",
  },
];

const checkboxApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
];

// CheckboxGroup API 文档数据
const checkboxGroupApiProps = [
  {
    name: "model-value / v-model",
    type: "object",
    default: "[]",
    description: "绑定值",
  },
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "多选框组尺寸",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "min",
    type: "number",
    default: "-",
    description: "可被勾选的 checkbox 的最小数量",
  },
  {
    name: "max",
    type: "number",
    default: "-",
    description: "可被勾选的 checkbox 的最大数量",
  },
  {
    name: "text-color",
    type: "string",
    default: "#ffffff",
    description: "当按钮为活跃状态时的字体颜色",
  },
  {
    name: "fill",
    type: "string",
    default: "#409eff",
    description: "当按钮为活跃状态时的边框和背景颜色",
  },
  {
    name: "tag",
    type: "string",
    default: "div",
    description: "复选框组元素标签",
  },
  {
    name: "validate-event",
    type: "boolean",
    default: "true",
    description: "是否触发表单验证",
  },
  {
    name: "options",
    type: "array",
    default: "-",
    description: "选项的数据源，value 的 key 和 label 和 disabled 可以通过 props 自定义",
  },
  {
    name: "props",
    type: "object",
    default: "{value: 'value', label: 'label', disabled: 'disabled'}",
    description: "options 的配置",
  },
];

const checkboxGroupApiEvents = [
  {
    name: "change",
    description: "当绑定值变化时触发的事件",
    params: "(value: string | number | boolean[])",
  },
];

const checkboxGroupApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
    subTags: "Checkbox / Checkbox-button",
  },
];

// CheckboxButton API 文档数据
const checkboxButtonApiProps = [
  {
    name: "value",
    type: "string / number / boolean / object",
    default: "-",
    description: "选中状态的值，只有在绑定对象类型为 array 时有效",
  },
  {
    name: "label",
    type: "string / number / boolean / object",
    default: "-",
    description: "选中状态的值，只有在绑定对象类型为 array 时有效。如果没有 value，label 则作为 value 使用",
  },
  {
    name: "true-value",
    type: "string / number",
    default: "-",
    description: "选中时的值",
  },
  {
    name: "false-value",
    type: "string / number",
    default: "-",
    description: "没有选中时的值",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "name",
    type: "string",
    default: "-",
    description: "原生 name 属性",
  },
  {
    name: "checked",
    type: "boolean",
    default: "false",
    description: "当前是否勾选",
  },
];

const checkboxButtonApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
];
</script>

<style scoped lang="scss">
.checkbox-page {
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

  /* 响应式设计 */
  @media (max-width: 768px) {
    .checkbox-page {
      padding: 16px;
    }

    .doc-item {
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    .checkbox-page {
      padding: 12px;
    }

    .doc-item {
      padding: 10px;
    }
  }
}
</style>
