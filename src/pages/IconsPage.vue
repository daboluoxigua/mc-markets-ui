<template>
  <div class="icons-page">
    <!-- 基础使用 -->
    <DemoSection title="基础使用">
      <div class="doc-grid">
        <div class="doc-item">
          <Icon name="home-filled" />
          <span>home-filled</span>
        </div>
        <div class="doc-item">
          <Icon name="user-round" />
          <span>user-round</span>
        </div>
        <div class="doc-item">
          <Icon name="search" />
          <span>search</span>
        </div>
        <div class="doc-item">
          <Icon name="star-filled" />
          <span>star-filled</span>
        </div>
      </div>
    </DemoSection>

    <!-- 不同大小 -->
    <DemoSection title="不同大小">
      <div class="doc-grid">
        <div class="doc-item">
          <Icon name="home-filled" :size="16" />
          <span>16px</span>
        </div>
        <div class="doc-item">
          <Icon name="home-filled" :size="24" />
          <span>24px</span>
        </div>
        <div class="doc-item">
          <Icon name="home-filled" :size="32" />
          <span>32px</span>
        </div>
        <div class="doc-item">
          <Icon name="home-filled" size="2rem" />
          <span>2rem</span>
        </div>
      </div>
    </DemoSection>

    <!-- 不同颜色 -->
    <DemoSection title="不同颜色">
      <div class="doc-grid">
        <div class="doc-item">
          <Icon name="star-filled" color="#ff6b6b" />
          <span>红色</span>
        </div>
        <div class="doc-item">
          <Icon name="star-filled" color="#45b7d1" />
          <span>蓝色</span>
        </div>
        <div class="doc-item">
          <Icon name="star-filled" color="#96ceb4" />
          <span>绿色</span>
        </div>
        <div class="doc-item">
          <Icon name="star-filled" color="#feca57" />
          <span>黄色</span>
        </div>
      </div>
    </DemoSection>

    <!-- 动画效果 -->
    <DemoSection title="动画效果">
      <div class="doc-grid">
        <div class="doc-item">
          <Icon name="refresh-cw" :spin="true" />
          <span>旋转</span>
        </div>
        <div class="doc-item">
          <Icon name="heart-handshake" :pulse="true" />
          <span>脉冲</span>
        </div>
        <div class="doc-item">
          <Icon name="arrow-right-left" :rotate="45" />
          <span>旋转45度</span>
        </div>
        <div class="doc-item">
          <Icon name="arrow-right-left" :rotate="90" />
          <span>旋转90度</span>
        </div>
      </div>
    </DemoSection>

    <!-- 翻转效果 -->
    <DemoSection title="翻转效果">
      <div class="doc-grid">
        <div class="doc-item">
          <Icon name="arrow-right-left" />
          <span>原始</span>
        </div>
        <div class="doc-item">
          <Icon name="arrow-right-left" flip="horizontal" />
          <span>水平翻转</span>
        </div>
        <div class="doc-item">
          <Icon name="arrow-right-left" flip="vertical" />
          <span>垂直翻转</span>
        </div>
        <div class="doc-item">
          <Icon name="arrow-right-left" flip="both" />
          <span>双向翻转</span>
        </div>
      </div>
    </DemoSection>

    <!-- 组合效果 -->
    <DemoSection title="组合效果">
      <div class="doc-grid">
        <div class="doc-item">
          <Icon name="refresh-cw" :spin="true" color="#ff6b6b" :size="24" />
          <span>旋转+颜色+大小</span>
        </div>
        <div class="doc-item">
          <Icon
            name="heart-handshake"
            :pulse="true"
            color="#4ecdc4"
            :size="24"
          />
          <span>脉冲+颜色+大小</span>
        </div>
        <div class="doc-item">
          <Icon
            name="arrow-right-left"
            :rotate="45"
            flip="horizontal"
            color="#45b7d1"
            :size="24"
          />
          <span>旋转+翻转+颜色+大小</span>
        </div>
      </div>
    </DemoSection>

    <!-- 点击事件 -->
    <DemoSection title="点击事件">
      <div class="doc-grid">
        <div class="doc-item clickable" @click="handleIconClick('home-filled')">
          <Icon name="home-filled" :size="24" />
          <span>点击我</span>
        </div>
      </div>
      <p v-if="clickedIcon" class="click-result">
        你点击了图标: {{ clickedIcon }}
      </p>
    </DemoSection>

    <!-- 图标搜索和展示 -->
    <DemoSection title="图标库展示">
      <div class="search-container">
        <input
          v-model="searchKeyword"
          type="text"
          placeholder="搜索图标名称..."
          class="search-input"
        />
      </div>
      <div class="all-icons-grid">
        <div
          v-for="icon in filteredIcons"
          :key="icon.name"
          class="icon-item"
          :class="{ active: selectedIcon === icon.name }"
          @click="selectIcon(icon.name)"
        >
          <Icon :name="icon.name" :size="24" />
          <span
            class="icon-class"
            @click.stop="copyIconClass(`icon-${icon.fontClass}`)"
          >
            icon-{{ icon.fontClass }}
          </span>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Icon 组件 API 文档"
      :props="iconApiProps"
      props-title="Icon 组件属性"
      :events="iconApiEvents"
      :css-classes="iconApiCssClasses"
    />

    <!-- 复制成功提示 -->
    <div v-if="copyMessage" class="copy-message">
      {{ copyMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@mc-markets/ui";
import { iconList, searchIcons } from "@mc-markets/ui";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { copyWithMessage } from "@/utils/clipboard.js";

// 响应式数据
const clickedIcon = ref("");
const searchKeyword = ref("");
const selectedIcon = ref("home-filled");
const copyMessage = ref("");

// API 文档数据
const iconApiProps = [
  {
    name: "name",
    type: "string",
    default: "-",
    description: "图标名称，必填",
  },
  {
    name: "size",
    type: "string | number",
    default: "'16px'",
    description: "图标大小，支持数字(px)或字符串(如'2rem')",
  },
  {
    name: "color",
    type: "string",
    default: "'inherit'",
    description: "图标颜色，支持CSS颜色值",
  },
  {
    name: "spin",
    type: "boolean",
    default: "false",
    description: "是否旋转动画",
  },
  {
    name: "pulse",
    type: "boolean",
    default: "false",
    description: "是否脉冲动画",
  },
  {
    name: "rotate",
    type: "number",
    default: "0",
    description: "旋转角度(度)",
  },
  {
    name: "flip",
    type: "'horizontal' | 'vertical' | 'both'",
    default: "undefined",
    description: "翻转方向",
  },
  {
    name: "prefix",
    type: "string",
    default: "'icon'",
    description: "CSS类名前缀",
  },
];

const iconApiEvents = [
  {
    name: "click",
    params: "event: Event",
    description: "点击图标时触发",
  },
];

const iconApiCssClasses = [
  {
    name: "icon-spin",
    description: '旋转动画类（当 spin="true" 时）',
  },
  {
    name: "icon-pulse",
    description: '脉冲动画类（当 pulse="true" 时）',
  },
];

// 计算属性
const filteredIcons = computed(() => {
  if (!searchKeyword.value) {
    return iconList;
  }
  return searchIcons(searchKeyword.value);
});

// 方法
const handleIconClick = (iconName) => {
  clickedIcon.value = iconName;
  setTimeout(() => {
    clickedIcon.value = "";
  }, 2000);
};

const selectIcon = (iconName) => {
  selectedIcon.value = iconName;
};

const copyIconClass = async (className) => {
  await copyWithMessage(className, {
    onMessage: (message) => {
      copyMessage.value = message;
    },
  });
};
</script>

<style scoped lang="scss">
.icons-page {
  .doc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
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

  .doc-item:hover {
    border-color: var(--el-color-primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .doc-item span {
    margin-top: 8px;
    font-size: 12px;
    color: var(--el-text-color-regular);
    text-align: center;
  }

  .clickable {
    cursor: pointer;
    background: var(--el-color-primary-light-9) !important;
  }

  .clickable:hover {
    background: var(--el-color-primary-light-8) !important;
  }

  .click-result {
    text-align: center;
    color: var(--el-color-success);
    font-weight: bold;
    margin-top: 10px;
  }

  .search-container {
    margin-bottom: 20px;
  }

  .search-input {
    width: 100%;
    max-width: 400px;
    padding: 10px 15px;
    border: 1px solid var(--el-border-color);
    border-radius: 6px;
    font-size: 14px;
    background: var(--el-bg-color);
    color: var(--el-text-color-primary);
    outline: none;
    transition: border-color 0.3s ease;
  }

  .search-input:focus {
    border-color: var(--el-color-primary);
  }

  .search-input::placeholder {
    color: var(--el-text-color-placeholder);
  }

  .all-icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    border: 1px solid var(--el-border-color-lighter);
    border-radius: 8px;
    padding: 20px;
    background: var(--el-bg-color);
  }

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: 1px solid var(--el-border-color-lighter);
    border-radius: 6px;
    background: var(--el-bg-color);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .icon-item:hover {
    border-color: var(--el-color-primary);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .icon-item.active {
    border-color: var(--el-color-primary);
    background: var(--el-color-primary-light-9);
  }

  .icon-class {
    margin-top: 8px;
    font-size: 11px;
    color: var(--el-text-color-regular);
    text-align: center;
    word-break: break-all;
    font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
    padding: 2px 4px;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .icon-class:hover {
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
  }

  .copy-message {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--el-color-success);
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 14px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .doc-grid {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 15px;
    }

    .all-icons-grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 10px;
    }

    .doc-item {
      padding: 10px;
    }

    .icon-item {
      padding: 10px;
    }

    .api-docs {
      padding: 15px;
    }

    .api-table th,
    .api-table td {
      padding: 8px 10px;
      font-size: 12px;
    }
  }
}
</style>
