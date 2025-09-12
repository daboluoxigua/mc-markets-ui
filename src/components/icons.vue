<template>
  <div class="icon-demo">
    <!-- 基础使用 -->
    <DemoSection title="基础使用">
      <template #preview>
        <div class="demo-grid">
          <div class="demo-item">
            <Icon name="home-filled" />
            <span>home-filled</span>
          </div>
          <div class="demo-item">
            <Icon name="user-round" />
            <span>user-round</span>
          </div>
          <div class="demo-item">
            <Icon name="search" />
            <span>search</span>
          </div>
          <div class="demo-item">
            <Icon name="star-filled" />
            <span>star-filled</span>
          </div>
        </div>
      </template>
      <template #code>
        {{ `
        <div class="demo-grid">
          <div class="demo-item">
            <Icon name="home-filled" />
            <span>home-filled</span>
          </div>
          <div class="demo-item">
            <Icon name="user-round" />
            <span>user-round</span>
          </div>
          <div class="demo-item">
            <Icon name="search" />
            <span>search</span>
          </div>
          <div class="demo-item">
            <Icon name="star-filled" />
            <span>star-filled</span>
          </div>
        </div>
        ` }}
      </template>
    </DemoSection>

    <!-- 不同大小 -->
    <DemoSection title="不同大小">
      <template #preview>
        <div class="demo-grid">
          <div class="demo-item">
            <Icon name="home-filled" :size="16" />
            <span>16px</span>
          </div>
          <div class="demo-item">
            <Icon name="home-filled" :size="24" />
            <span>24px</span>
          </div>
          <div class="demo-item">
            <Icon name="home-filled" :size="32" />
            <span>32px</span>
          </div>
          <div class="demo-item">
            <Icon name="home-filled" size="2rem" />
            <span>2rem</span>
          </div>
        </div>
      </template>
      <template #code>
        {{ `
        <div class="demo-grid">
          <div class="demo-item">
            <Icon name="home-filled" :size="16" />
            <span>16px</span>
          </div>
          <div class="demo-item">
            <Icon name="home-filled" :size="24" />
            <span>24px</span>
          </div>
          <div class="demo-item">
            <Icon name="home-filled" :size="32" />
            <span>32px</span>
          </div>
          <div class="demo-item">
            <Icon name="home-filled" size="2rem" />
            <span>2rem</span>
          </div>
        </div>
        ` }}
      </template>
    </DemoSection>

    <!-- 不同颜色 -->
    <DemoSection title="不同颜色">
      <template #preview>
        <div class="demo-grid">
          <div class="demo-item">
            <Icon name="star-filled" color="#ff6b6b" />
            <span>红色</span>
          </div>
          <div class="demo-item">
            <Icon name="star-filled" color="#45b7d1" />
            <span>蓝色</span>
          </div>
          <div class="demo-item">
            <Icon name="star-filled" color="#96ceb4" />
            <span>绿色</span>
          </div>
          <div class="demo-item">
            <Icon name="star-filled" color="#feca57" />
            <span>黄色</span>
          </div>
        </div>
      </template>
      <template #code>
        {{ `<div class="demo-grid">
          <div class="demo-item">
            <Icon name="star-filled" color="#ff6b6b" />
            <span>红色</span>
          </div>
          <div class="demo-item">
            <Icon name="star-filled" color="#45b7d1" />
            <span>蓝色</span>
          </div>
          <div class="demo-item">
            <Icon name="star-filled" color="#96ceb4" />
            <span>绿色</span>
          </div>
          <div class="demo-item">
            <Icon name="star-filled" color="#feca57" />
            <span>黄色</span>
          </div>
        </div>` }}
      </template>
    </DemoSection>

    <!-- 动画效果 -->
    <DemoSection title="动画效果">
      <template #preview>
        <div class="demo-grid">
          <div class="demo-item">
            <Icon name="refresh-cw" :spin="true" />
            <span>旋转</span>
          </div>
          <div class="demo-item">
            <Icon name="heart-handshake" :pulse="true" />
            <span>脉冲</span>
          </div>
          <div class="demo-item">
            <Icon name="arrow-right-left" :rotate="45" />
            <span>旋转45度</span>
          </div>
          <div class="demo-item">
            <Icon name="arrow-right-left" :rotate="90" />
            <span>旋转90度</span>
          </div>
        </div>
      </template>
      <template #code>
        {{ `<div class="demo-grid">
          <div class="demo-item">
            <Icon name="refresh-cw" :spin="true" />
            <span>旋转</span>
          </div>
          <div class="demo-item">
            <Icon name="heart-handshake" :pulse="true" />
            <span>脉冲</span>
          </div>
          <div class="demo-item">
            <Icon name="arrow-right-left" :rotate="45" />
            <span>旋转45度</span>
          </div>
          <div class="demo-item">
            <Icon name="arrow-right-left" :rotate="90" />
            <span>旋转90度</span>
          </div>
        </div>` }}
      </template>
    </DemoSection>

    <!-- 翻转效果 -->
    <DemoSection title="翻转效果">
      <template #preview>
        <div class="demo-grid">
          <div class="demo-item">
            <Icon name="arrow-right-left" />
            <span>原始</span>
          </div>
          <div class="demo-item">
            <Icon name="arrow-right-left" flip="horizontal" />
            <span>水平翻转</span>
          </div>
          <div class="demo-item">
            <Icon name="arrow-right-left" flip="vertical" />
            <span>垂直翻转</span>
          </div>
          <div class="demo-item">
            <Icon name="arrow-right-left" flip="both" />
            <span>双向翻转</span>
          </div>
        </div>
      </template>
      <template #code>
        {{ `<div class="demo-grid">
          <div class="demo-item">
            <Icon name="arrow-right-left" />
            <span>原始</span>
          </div>
          <div class="demo-item">
            <Icon name="arrow-right-left" flip="horizontal" />
            <span>水平翻转</span>
          </div>
          <div class="demo-item">
            <Icon name="arrow-right-left" flip="vertical" />
            <span>垂直翻转</span>
          </div>
          <div class="demo-item">
            <Icon name="arrow-right-left" flip="both" />
            <span>双向翻转</span>
          </div>
        </div>` }}
      </template>
    </DemoSection>

    <!-- 组合效果 -->
    <DemoSection title="组合效果">
      <template #preview>
        <div class="demo-grid">
          <div class="demo-item">
            <Icon name="refresh-cw" :spin="true" color="#ff6b6b" :size="24" />
            <span>旋转+颜色+大小</span>
          </div>
          <div class="demo-item">
            <Icon
              name="heart-handshake"
              :pulse="true"
              color="#4ecdc4"
              :size="24"
            />
            <span>脉冲+颜色+大小</span>
          </div>
          <div class="demo-item">
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
      </template>
      <template #code>
        {{ `<div class="demo-grid">
          <div class="demo-item">
            <Icon name="refresh-cw" :spin="true" color="#ff6b6b" :size="24" />
            <span>旋转+颜色+大小</span>
          </div>
          <div class="demo-item">
            <Icon
              name="heart-handshake"
              :pulse="true"
              color="#4ecdc4"
              :size="24"
            />
            <span>脉冲+颜色+大小</span>
          </div>
          <div class="demo-item">
            <Icon
              name="arrow-right-left"
              :rotate="45"
              flip="horizontal"
              color="#45b7d1"
              :size="24"
            />
            <span>旋转+翻转+颜色+大小</span>
          </div>
        </div>` }}
      </template>
    </DemoSection>

    <!-- 点击事件 -->
    <DemoSection title="点击事件">
      <template #preview>
        <div class="demo-grid">
          <div
            class="demo-item clickable"
            @click="handleIconClick('home-filled')"
          >
            <Icon name="home-filled" :size="24" />
            <span>点击我</span>
          </div>
        </div>
        <p v-if="clickedIcon" class="click-result">
          你点击了图标: {{ clickedIcon }}
        </p>
      </template>
      <template #code>
        {{`<div class="demo-grid">
          <div
            class="demo-item clickable"
            @click="handleIconClick('home-filled')"
          >
            <Icon name="home-filled" :size="24" />
            <span>点击我</span>
          </div>
        </div>
        <p v-if="clickedIcon" class="click-result">
          你点击了图标: \{\{ clickedIcon \}\}
        </p>`}}
      </template>
    </DemoSection>

    <!-- 图标搜索和展示 -->
    <DemoSection title="图标库展示">
      <template #preview>
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
      </template>
      <template #code>
        {{ `<div class="search-container">
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
              @click.stop="copyIconClass(\`icon-\$\{icon.fontClass\}\`)"
            >
              icon-\{\{ icon.fontClass \}\}
            </span>
          </div>
        </div>` }}
      </template>
    </DemoSection>

    <!-- API 文档 -->
    <section class="demo-section">
      <h2>API 文档</h2>
      <div class="api-docs">
        <h3>Icon 组件属性</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>属性名</th>
                <th>类型</th>
                <th>默认值</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>name</code></td>
                <td><code>string</code></td>
                <td><code>-</code></td>
                <td>图标名称，必填</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>string | number</code></td>
                <td><code>'16px'</code></td>
                <td>图标大小，支持数字(px)或字符串(如'2rem')</td>
              </tr>
              <tr>
                <td><code>color</code></td>
                <td><code>string</code></td>
                <td><code>'inherit'</code></td>
                <td>图标颜色，支持CSS颜色值</td>
              </tr>
              <tr>
                <td><code>spin</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否旋转动画</td>
              </tr>
              <tr>
                <td><code>pulse</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>是否脉冲动画</td>
              </tr>
              <tr>
                <td><code>rotate</code></td>
                <td><code>number</code></td>
                <td><code>0</code></td>
                <td>旋转角度(度)</td>
              </tr>
              <tr>
                <td><code>flip</code></td>
                <td><code>'horizontal' | 'vertical' | 'both'</code></td>
                <td><code>undefined</code></td>
                <td>翻转方向</td>
              </tr>
              <tr>
                <td><code>prefix</code></td>
                <td><code>string</code></td>
                <td><code>'icon'</code></td>
                <td>CSS类名前缀</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>事件</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>事件名</th>
                <th>参数</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>click</code></td>
                <td><code>event: Event</code></td>
                <td>点击图标时触发</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>CSS 类名</h3>
        <div class="css-info">
          <ul>
            <li>
              <code>icon-spin</code> - 旋转动画类（当
              <code>spin="true"</code> 时）
            </li>
            <li>
              <code>icon-pulse</code> - 脉冲动画类（当
              <code>pulse="true"</code> 时）
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 复制成功提示 -->
    <div v-if="copyMessage" class="copy-message">
      {{ copyMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@mc-markets/ui";
import { iconList, searchIcons } from "../../packages/components/Icon/types";
import DemoSection from "./DemoSection.vue";

// 响应式数据
const clickedIcon = ref("");
const searchKeyword = ref("");
const selectedIcon = ref("home-filled");
const copyMessage = ref("");

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
  try {
    await navigator.clipboard.writeText(className);
    copyMessage.value = `已复制: ${className}`;
    setTimeout(() => {
      copyMessage.value = "";
    }, 2000);
  } catch (err) {
    // 降级方案
    const textArea = document.createElement("textarea");
    textArea.value = className;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    copyMessage.value = `已复制: ${className}`;
    setTimeout(() => {
      copyMessage.value = "";
    }, 2000);
  }
};
</script>

<style scoped>
.icon-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.demo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  background: var(--el-bg-color);
  transition: all 0.3s ease;
}

.demo-item:hover {
  border-color: var(--el-color-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.demo-item span {
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

/* API 文档样式 */
.api-docs {
  background: var(--el-bg-color-page);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid var(--el-border-color-lighter);
}

.api-docs h3 {
  color: var(--el-text-color-primary);
  margin: 20px 0 15px 0;
  font-size: 18px;
  border-left: 4px solid var(--el-color-primary);
  padding-left: 10px;
}

.api-table {
  margin-bottom: 20px;
  overflow-x: auto;
}

.api-table table {
  width: 100%;
  border-collapse: collapse;
  background: var(--el-bg-color);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.api-table th {
  background: var(--el-color-primary);
  color: white;
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
}

.api-table td {
  padding: 12px 15px;
  border-bottom: 1px solid var(--el-border-color-lighter);
  font-size: 13px;
  vertical-align: top;
  color: var(--el-text-color-primary);
}

.api-table tr:hover {
  background: var(--el-bg-color-page);
}

.api-table code {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 12px;
}

.css-info {
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 6px;
  padding: 15px;
}

.css-info ul {
  margin: 0;
  padding-left: 20px;
}

.css-info li {
  margin-bottom: 5px;
  color: var(--el-text-color-primary);
  font-size: 13px;
}

.css-info li code {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
  font-size: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 15px;
  }

  .all-icons-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }

  .demo-item {
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
</style>
