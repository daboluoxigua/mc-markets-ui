<template>
  <div class="tag-page">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tag type="success">Tag 2</m-tag>
          <span>Success</span>
        </div>
        <div class="doc-item">
          <m-tag type="info">Tag 3</m-tag>
          <span>Info</span>
        </div>
        <div class="doc-item">
          <m-tag type="primary">Tag 4</m-tag>
          <span>primary</span>
        </div>
        <div class="doc-item">
          <m-tag type="danger">Tag 5</m-tag>
          <span>Danger</span>
        </div>
      </div>
    </DemoSection>

    <!-- 可移除标签 -->
    <DemoSection title="可移除标签" :columns="1">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type" @close="handleClose(tag)">
            {{ tag.label }}
          </m-tag>
          <span>Closable Tags</span>
        </div>
      </div>
    </DemoSection>

    <!-- 动态编辑标签 -->
    <DemoSection title="动态编辑标签">
      <div class="doc-grid">
        <div class="doc-item">
          <div class="tag-container">
            <m-tag
              v-for="tag in dynamicTags"
              :key="tag"
              closable
              type="primary"
              :disable-transitions="false"
              @close="handleDynamicClose(tag)"
            >
              {{ tag }}
            </m-tag>
            <m-input
              v-if="inputVisible"
              ref="inputRef"
              v-model="inputValue"
              class="tag-input"
              size="small"
              @keyup.enter="handleInputConfirm"
              @blur="handleInputConfirm"
            />
            <m-button v-else class="button-new-tag" size="small" @click="showInput">
              + New Tag
            </m-button>
          </div>
          <span>Dynamic Tags</span>
        </div>
      </div>
    </DemoSection>

    <!-- 不同尺寸 -->
    <DemoSection title="不同尺寸">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tag size="large" type="primary">Large</m-tag>
          <span>Large</span>
        </div>
        <div class="doc-item">
          <m-tag type="primary">Default</m-tag>
          <span>Default</span>
        </div>
        <div class="doc-item">
          <m-tag size="small" type="primary">Small</m-tag>
          <span>Small</span>
        </div>
      </div>
    </DemoSection>

    <!-- 主题 -->
    <DemoSection title="主题">
      <div class="doc-grid">
        <div class="doc-item">
          <div class="theme-container">
            <span class="theme-label">Dark</span>
            <m-tag
              v-for="item in themeItems"
              :key="item.label"
              :type="item.type"
              effect="dark"
            >
              {{ item.label }}
            </m-tag>
          </div>
          <span>Dark Theme</span>
        </div>
        <div class="doc-item">
          <div class="theme-container">
            <span class="theme-label">Light</span>
            <m-tag
              v-for="item in themeItems"
              :key="item.label"
              :type="item.type"
              effect="light"
            >
              {{ item.label }}
            </m-tag>
          </div>
          <span>Light Theme</span>
        </div>
        <div class="doc-item">
          <div class="theme-container">
            <span class="theme-label">Plain</span>
            <m-tag
              v-for="item in themeItems"
              :key="item.label"
              :type="item.type"
              effect="plain"
            >
              {{ item.label }}
            </m-tag>
          </div>
          <span>Plain Theme</span>
        </div>
      </div>
    </DemoSection>

    <!-- 圆形标签 -->
    <DemoSection title="圆形标签">
      <div class="doc-grid">
        <div class="doc-item">
          <div class="theme-container">
            <m-tag
              v-for="item in themeItems"
              :key="item.label"
              :type="item.type"
              effect="dark"
              round
            >
              {{ item.label }}
            </m-tag>
          </div>
          <span>Round Dark</span>
        </div>
        <div class="doc-item">
          <div class="theme-container">
            <m-tag
              v-for="item in themeItems"
              :key="item.label"
              :type="item.type"
              effect="light"
              round
            >
              {{ item.label }}
            </m-tag>
          </div>
          <span>Round Light</span>
        </div>
        <div class="doc-item">
          <div class="theme-container">
            <m-tag
              v-for="item in themeItems"
              :key="item.label"
              :type="item.type"
              effect="plain"
              round
            >
              {{ item.label }}
            </m-tag>
          </div>
          <span>Round Plain</span>
        </div>
      </div>
    </DemoSection>


    <!-- 自定义颜色 -->
    <DemoSection title="自定义颜色">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tag color="#626aef">自定义颜色</m-tag>
          <span>Custom Color</span>
        </div>
        <div class="doc-item">
          <m-tag color="#f56c6c">红色标签</m-tag>
          <span>Red Tag</span>
        </div>
        <div class="doc-item">
          <m-tag color="#67c23a">绿色标签</m-tag>
          <span>Green Tag</span>
        </div>
        <div class="doc-item">
          <m-tag color="#e6a23c">橙色标签</m-tag>
          <span>Orange Tag</span>
        </div>
        <div class="doc-item">
          <m-tag color="#909399">灰色标签</m-tag>
          <span>Gray Tag</span>
        </div>
      </div>
    </DemoSection>

    <!-- 禁用渐变动画 -->
    <DemoSection title="禁用渐变动画">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tag closable type="primary">默认动画</m-tag>
          <span>Default Animation</span>
        </div>
        <div class="doc-item">
          <m-tag closable :disable-transitions="true" type="success">禁用动画</m-tag>
          <span>Disabled Animation</span>
        </div>
      </div>
    </DemoSection>

    <!-- 交互演示 -->
    <DemoSection title="交互演示">
      <div class="doc-grid">
        <div class="doc-item">
          <m-tag type="primary" @click="handleClick">点击事件</m-tag>
          <span>Click Event</span>
        </div>
        <div class="doc-item">
          <m-tag closable type="success" @close="handleCloseEvent">关闭事件</m-tag>
          <span>Close Event</span>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Tag API"
      :props="tagApiProps"
      props-title="Tag Attributes"
      :events="tagApiEvents"
      :slots="tagApiSlots"
      slots-title="Tag Slots"
    />

    <!-- CheckTag API 文档 -->
    <ApiDocs
      title="CheckTag API"
      :props="checkTagApiProps"
      props-title="CheckTag Attributes"
      :events="checkTagApiEvents"
      :slots="checkTagApiSlots"
      slots-title="CheckTag Slots"
    />
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MTag, MInput, MButton, MMessage } from "@mc-markets/ui";


// 响应式数据
const tags = ref([
  { type: 'info', label: 'Tag 1' },
  { type: 'danger', label: 'Tag 2' },
  { type: 'primary', label: 'Tag 3' },
  { type: 'success', label: 'Tag 4' },
]);

const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3']);
const inputVisible = ref(false);
const inputValue = ref('');
const inputRef = ref();

const themeItems = ref([
  { type: 'info', label: 'Tag 1' },
  { type: 'danger', label: 'Tag 2' },
  { type: 'primary', label: 'Tag 3' },
  { type: 'success', label: 'Tag 4' },
]);

// CheckTag 状态
const checked = ref(false);
const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
const checked4 = ref(true);
const checked5 = ref(true);
const checked6 = ref(true);

// API 文档数据
const tagApiProps = [
  {
    name: "type",
    type: "enum",
    default: "primary",
    description: "Tag 的类型，可选值：success / info / primary / danger",
  },
  {
    name: "closable",
    type: "boolean",
    default: "false",
    description: "是否可关闭",
  },
  {
    name: "disable-transitions",
    type: "boolean",
    default: "false",
    description: "是否禁用渐变动画",
  },
  {
    name: "hit",
    type: "boolean",
    default: "false",
    description: "是否有边框描边",
  },
  {
    name: "color",
    type: "string",
    default: "-",
    description: "背景色",
  },
  {
    name: "size",
    type: "enum",
    default: "-",
    description: "Tag 的尺寸，可选值：large / default / small",
  },
  {
    name: "effect",
    type: "enum",
    default: "light",
    description: "Tag 的主题，可选值：dark / light / plain",
  },
  {
    name: "round",
    type: "boolean",
    default: "false",
    description: "Tag 是否为圆形",
  },
];

const tagApiEvents = [
  {
    name: "click",
    description: "点击 Tag 时触发的事件",
    params: "(event: MouseEvent)",
  },
  {
    name: "close",
    description: "关闭 Tag 时触发的事件",
    params: "(event: MouseEvent)",
  },
];

const tagApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
];

const checkTagApiProps = [
  {
    name: "checked / v-model:checked",
    type: "boolean",
    default: "false",
    description: "是否选中",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "type",
    type: "enum",
    default: "primary",
    description: "CheckTag 类型，可选值：primary / success / info / primary / danger",
  },
];

const checkTagApiEvents = [
  {
    name: "change",
    description: "点击 Check Tag 时触发的事件",
    params: "(status: boolean)",
  },
];

const checkTagApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
];

// 方法
const handleClose = (tag) => {
  const index = tags.value.findIndex(t => t.name === tag.name);
  if (index > -1) {
    tags.value.splice(index, 1);
  }
};

const handleDynamicClose = (tag) => {
  const index = dynamicTags.value.indexOf(tag);
  if (index > -1) {
    dynamicTags.value.splice(index, 1);
  }
};

const showInput = () => {
  inputVisible.value = true;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value);
  }
  inputVisible.value = false;
  inputValue.value = '';
};

const handleClick = () => {
  ElMessage.success("Tag 被点击了！");
};

const handleCloseEvent = () => {
  ElMessage.info("Tag 关闭事件触发！");
};

// CheckTag 事件处理
const onChange = (status) => {
  checked.value = status;
};

const onChange1 = (status) => {
  checked1.value = status;
};

const onChange2 = (status) => {
  checked2.value = status;
};

const onChange3 = (status) => {
  checked3.value = status;
};

const onChange4 = (status) => {
  checked4.value = status;
};

const onChange5 = (status) => {
  checked5.value = status;
};

const onChange6 = (status) => {
  checked6.value = status;
};
</script>

<style scoped lang="scss">
.tag-page {
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


  .tag-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;
  }

  .tag-input {
    width: 80px;
  }

  .button-new-tag {
    margin-left: 8px;
  }

  .theme-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;
  }

  .theme-label {
    font-size: 12px;
    color: var(--el-text-color-regular);
    margin-right: 8px;
    min-width: 40px;
  }

  /* 响应式设计 */
  @media (max-width: 1200px) {
    .doc-grid {
      grid-template-columns: repeat(auto-fit, minmax(180px, auto));
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .tag-page {
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
    .tag-page {
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
