<template>
  <div class="input-page">
    <!-- 基础输入框 -->
    <DemoSection title="基础输入框">
      <div class="doc-grid">
        <div class="doc-item">
          <m-input v-model="value" placeholder="请输入内容"></m-input>
          <span>基础输入框</span>
        </div>
        <div class="doc-item">
          <m-input v-model="value" placeholder="禁用状态" disabled></m-input>
          <span>禁用状态</span>
        </div>
        <div class="doc-item">
          <m-input v-model="value" placeholder="只读状态" readonly></m-input>
          <span>只读状态</span>
        </div>
      </div>
    </DemoSection>

    <!-- 不同尺寸 -->
    <DemoSection title="不同尺寸">
      <div class="doc-grid">
        <div class="doc-item">
          <m-input v-model="value" placeholder="大尺寸" size="large"></m-input>
          <span>大尺寸</span>
        </div>
        <div class="doc-item">
          <m-input v-model="value" placeholder="默认尺寸"></m-input>
          <span>默认尺寸</span>
        </div>
        <div class="doc-item">
          <m-input v-model="value" placeholder="小尺寸" size="small"></m-input>
          <span>小尺寸</span>
        </div>
      </div>
    </DemoSection>

    <!-- 带字数限制 -->
    <DemoSection title="字数限制">
      <div class="doc-grid">
        <div class="doc-item">
          <m-input 
            v-model="value" 
            placeholder="最多输入10个字符" 
            :maxlength="10"
            :show-word-limit="true"
          ></m-input>
          <span>显示字数限制</span>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Input API"
      :props="inputApiProps"
      props-title="Input Attributes"
      :events="inputApiEvents"
      :exposes="inputApiExposes"
      exposes-title="Input Exposes"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

// 响应式数据
const value = ref("");

// API 文档数据
const inputApiProps = [
  {
    name: "modelValue / v-model",
    type: "string / number",
    default: "-",
    description: "绑定值",
  },
  {
    name: "type",
    type: "string",
    default: "text",
    description: "类型",
  },
  {
    name: "placeholder",
    type: "string",
    default: "-",
    description: "输入框占位文本",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "readonly",
    type: "boolean",
    default: "false",
    description: "是否只读",
  },
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "尺寸，可选值：large / default / small",
  },
  {
    name: "maxlength",
    type: "number",
    default: "-",
    description: "最大输入长度",
  },
  {
    name: "minlength",
    type: "number",
    default: "-",
    description: "最小输入长度",
  },
  {
    name: "showWordLimit",
    type: "boolean",
    default: "false",
    description: "是否显示输入字数统计，只在 type 为 'text' 或 'textarea' 的时候有效",
  },
  {
    name: "clearable",
    type: "boolean",
    default: "false",
    description: "是否可清空",
  },
  {
    name: "showPassword",
    type: "boolean",
    default: "false",
    description: "是否显示切换密码图标",
  },
  {
    name: "autocomplete",
    type: "string",
    default: "off",
    description: "原生 autocomplete 属性",
  },
  {
    name: "autofocus",
    type: "boolean",
    default: "false",
    description: "原生 autofocus 属性",
  },
  {
    name: "form",
    type: "string",
    default: "-",
    description: "原生 form 属性",
  },
  {
    name: "name",
    type: "string",
    default: "-",
    description: "原生 name 属性",
  },
  {
    name: "id",
    type: "string",
    default: "-",
    description: "原生 id 属性",
  },
  {
    name: "tabindex",
    type: "string / number",
    default: "-",
    description: "原生 tabindex 属性",
  },
  {
    name: "validateEvent",
    type: "boolean",
    default: "true",
    description: "输入时是否触发表单的校验",
  },
];

const inputApiEvents = [
  {
    name: "input",
    description: "在 Input 值改变时触发",
    params: "(value: string | number)",
  },
  {
    name: "change",
    description: "仅在输入框失去焦点或用户按下回车时触发",
    params: "(value: string | number)",
  },
  {
    name: "focus",
    description: "在 Input 获得焦点时触发",
    params: "(event: FocusEvent)",
  },
  {
    name: "blur",
    description: "在 Input 失去焦点时触发",
    params: "(event: FocusEvent)",
  },
  {
    name: "clear",
    description: "在点击由 clearable 属性生成的清空按钮时触发",
    params: "()",
  },
  {
    name: "keydown",
    description: "在 Input 按下键盘时触发",
    params: "(event: KeyboardEvent)",
  },
  {
    name: "keyup",
    description: "在 Input 释放键盘时触发",
    params: "(event: KeyboardEvent)",
  },
  {
    name: "keypress",
    description: "在 Input 按下键盘时触发",
    params: "(event: KeyboardEvent)",
  },
];

const inputApiExposes = [
  {
    name: "focus",
    description: "使 input 获取焦点",
    type: "() => void",
  },
  {
    name: "blur",
    description: "使 input 失去焦点",
    type: "() => void",
  },
  {
    name: "select",
    description: "选中 input 中的文字",
    type: "() => void",
  },
  {
    name: "inputRef",
    description: "input 元素",
    type: "HTMLInputElement",
  },
];
</script>

<style scoped lang="scss">
.input-page {
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

  .doc-item span {
    margin-top: 8px;
    font-size: 12px;
    color: var(--el-text-color-regular);
    text-align: center;
  }

  /* 响应式设计 */
  @media (max-width: 1200px) {
    .doc-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .input-page {
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
    .input-page {
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