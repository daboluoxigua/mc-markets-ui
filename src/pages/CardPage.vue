<template>
  <div class="card-page">
    <!-- 基础卡片 -->
    <DemoSection title="基础卡片">
      <div class="doc-grid">
        <div class="doc-item">
          <m-card>
            <p>这是一个基础卡片，包含标题和内容。</p>
          </m-card>
          <span>Basic Card</span>
        </div>
        <div class="doc-item">
          <m-card header="卡片标题">
            <p>这是一个带标题的卡片。</p>
          </m-card>
          <span>With Header</span>
        </div>
        <div class="doc-item">
          <m-card shadow="always">
            <p>这是一个总是显示阴影的卡片。</p>
          </m-card>
          <span>Always Shadow</span>
        </div>
      </div>
    </DemoSection>

    <!-- 卡片阴影 -->
    <DemoSection title="卡片阴影">
      <div class="doc-grid">
        <div class="doc-item">
          <m-card shadow="always">
            <p>总是显示阴影</p>
          </m-card>
          <span>Always</span>
        </div>
        <div class="doc-item">
          <m-card shadow="hover">
            <p>鼠标悬停时显示阴影</p>
          </m-card>
          <span>Hover</span>
        </div>
        <div class="doc-item">
          <m-card shadow="never">
            <p>从不显示阴影</p>
          </m-card>
          <span>Never</span>
        </div>
      </div>
    </DemoSection>

    <!-- 卡片尺寸 -->
    <DemoSection title="卡片尺寸">
      <div class="doc-grid">
        <div class="doc-item">
          <m-card header="小卡片" size="small">
            <p>这是一个小尺寸的卡片。</p>
          </m-card>
          <span>Small</span>
        </div>
        <div class="doc-item">
          <m-card header="默认卡片">
            <p>这是一个默认尺寸的卡片。</p>
          </m-card>
          <span>Default</span>
        </div>
        <div class="doc-item">
          <m-card header="大卡片" size="large">
            <p>这是一个大尺寸的卡片。</p>
          </m-card>
          <span>Large</span>
        </div>
      </div>
    </DemoSection>

    <!-- 卡片内容 -->
    <DemoSection title="卡片内容">
      <div class="doc-grid">
        <div class="doc-item">
          <m-card header="图片卡片">
            <img src="https://via.placeholder.com/300x200/409EFF/ffffff?text=Card+Image" alt="卡片图片" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;">
            <p style="margin-top: 10px;">这是一个包含图片的卡片。</p>
          </m-card>
          <span>With Image</span>
        </div>
        <div class="doc-item">
          <m-card header="列表卡片">
            <ul style="margin: 0; padding-left: 20px;">
              <li>列表项 1</li>
              <li>列表项 2</li>
              <li>列表项 3</li>
            </ul>
          </m-card>
          <span>With List</span>
        </div>
        <div class="doc-item">
          <m-card header="按钮卡片">
            <p>这是一个包含按钮的卡片。</p>
            <div style="margin-top: 15px;">
              <m-button type="primary" size="small">主要按钮</m-button>
              <m-button size="small" style="margin-left: 8px;">默认按钮</m-button>
            </div>
          </m-card>
          <span>With Buttons</span>
        </div>
        <div class="doc-item">
          <m-card header="带页脚" footer="页脚内容">
            <p>这是一个带有页脚的卡片。</p>
          </m-card>
          <span>With Footer</span>
        </div>
      </div>
    </DemoSection>

    <!-- 卡片操作 -->
    <DemoSection title="卡片操作">
      <div class="doc-grid">
        <div class="doc-item">
          <m-card header="可折叠卡片">
            <template #header>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span>可折叠卡片</span>
                <m-icon 
                  :name="collapsed ? 'chevron-up' : 'chevron-down'" 
                  @click="toggleCollapse" 
                  style="cursor: pointer;"
                />
              </div>
            </template>
            <div v-show="!collapsed">
              <p>这是卡片的内容，可以折叠和展开。</p>
            </div>
          </m-card>
          <span>Collapsible</span>
        </div>
        <div class="doc-item">
          <m-card header="带关闭按钮">
            <template #header>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span>带关闭按钮</span>
                <m-icon 
                  name="lucide-x" 
                  @click="handleClose" 
                  style="cursor: pointer; color: #f56c6c;"
                />
              </div>
            </template>
            <p>这是一个可以关闭的卡片。</p>
          </m-card>
          <span>Closable</span>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义样式卡片 -->
    <DemoSection title="自定义样式卡片">
      <div class="doc-grid">
        <div class="doc-item">
          <m-card class="gradient-card" header="渐变卡片">
            <p>这是一个带有渐变背景的卡片。</p>
          </m-card>
          <span>Gradient</span>
        </div>
        <div class="doc-item">
          <m-card class="neon-card" header="霓虹卡片">
            <p>这是一个霓虹效果的卡片。</p>
          </m-card>
          <span>Neon</span>
        </div>
        <div class="doc-item">
          <m-card class="shadow-card" header="阴影卡片">
            <p>这是一个自定义阴影的卡片。</p>
          </m-card>
          <span>Custom Shadow</span>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Card API"
      :props="cardApiProps"
      props-title="Card Attributes"
      :slots="cardApiSlots"
      slots-title="Card Slots"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MCard, MIcon } from "@mc-markets/ui";

// 响应式数据
const collapsed = ref(false);

// API 文档数据
const cardApiProps = [
  {
    name: "header",
    type: "string",
    default: "-",
    description: "卡片的标题。可以通过设置该属性或使用 slot#header 传入 DOM 节点。",
  },
  {
    name: "footer",
    type: "string",
    default: "-",
    description: "卡片的页脚。可以通过设置该属性或使用 slot#footer 传入 DOM 节点。",
  },
  {
    name: "body-style",
    type: "object",
    default: "-",
    description: "body 的 CSS 样式。",
  },
  {
    name: "header-class",
    type: "string",
    default: "-",
    description: "card header 的自定义类名。",
  },
  {
    name: "body-class",
    type: "string",
    default: "-",
    description: "body 的自定义类名。",
  },
  {
    name: "footer-class",
    type: "string",
    default: "-",
    description: "footer 的自定义类名。",
  },
  {
    name: "shadow",
    type: "string",
    default: "always",
    description: "卡片阴影显示时机。可选值：always / hover / never。",
  },
];

const cardApiEvents = [];

const cardApiSlots = [
  {
    name: "default",
    description: "自定义默认内容",
  },
  {
    name: "header",
    description: "卡片标题内容",
  },
  {
    name: "footer",
    description: "卡片页脚内容",
  },
];

const cardApiExposes = [];

// 方法
const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
};

const handleClose = () => {
  ElMessage.success("卡片已关闭！");
};
</script>

<style scoped lang="scss">
.card-page {
  .doc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
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

  /* 自定义样式卡片 */
  .gradient-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;

    :deep(.el-card__header) {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    :deep(.el-card__body) {
      color: white;
    }
  }

  .neon-card {
    background: transparent;
    border: 2px solid #00ffff;
    box-shadow: 0 0 10px #00ffff, inset 0 0 10px #00ffff;
    color: #00ffff;

    :deep(.el-card__header) {
      background: transparent;
      color: #00ffff;
      border-bottom: 1px solid #00ffff;
    }

    :deep(.el-card__body) {
      color: #00ffff;
    }
  }

  .shadow-card {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border: none;

    &:hover {
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.18);
      transform: translateY(-4px);
    }
  }

  /* 响应式设计 */
  @media (max-width: 1200px) {
    .doc-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, auto));
      gap: 16px;
    }
  }

  @media (max-width: 768px) {
    .card-page {
      padding: 16px;
    }

    .doc-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .doc-item {
      padding: 12px;
    }
  }

  @media (max-width: 480px) {
    .card-page {
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
