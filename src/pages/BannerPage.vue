<template>
  <div class="banner-page">
    <!-- 基础使用 -->
    <DemoSection title="基础使用">
      <div class="demo-container">
        <m-banner content="这是一个基础的 Banner 组件" />
      </div>
    </DemoSection>

    <!-- 不同类型 -->
    <DemoSection title="不同类型">
      <div class="demo-container">
        <div class="demo-item">
          <h4>信息类型</h4>
          <m-banner type="info" content="这是一条信息提示" />
        </div>
        <div class="demo-item">
          <h4>成功类型</h4>
          <m-banner type="success" content="操作成功完成" />
        </div>
        <div class="demo-item">
          <h4>警告类型</h4>
          <m-banner type="warning" content="请注意相关事项" />
        </div>
        <div class="demo-item">
          <h4>错误类型</h4>
          <m-banner type="error" content="操作失败，请重试" />
        </div>
      </div>
    </DemoSection>

    <!-- 可关闭 -->
    <DemoSection title="可关闭">
      <div class="demo-container">
        <div class="demo-item">
          <h4>可关闭</h4>
          <m-banner 
            type="info" 
            content="点击右侧的 X 可以关闭这个 Banner" 
            :closable="true" 
            @close="handleClose('可关闭 Banner')"
          />
        </div>
        <div class="demo-item">
          <h4>不可关闭</h4>
          <m-banner 
            type="warning" 
            content="这个 Banner 无法关闭" 
            :closable="false" 
          />
        </div>
      </div>
    </DemoSection>

    <!-- 自定义图标 -->
    <DemoSection title="自定义图标">
      <div class="demo-container">
        <div class="demo-item">
          <h4>自定义图标</h4>
          <m-banner 
            type="info" 
            icon="star-filled" 
            content="使用自定义图标" 
          />
        </div>
        <div class="demo-item">
          <h4>图标插槽</h4>
          <m-banner type="success" content="使用插槽自定义图标">
            <template #icon>
              <m-icon name="heart" color="#ff6b6b" />
            </template>
          </m-banner>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义样式 -->
    <DemoSection title="自定义样式">
      <div class="demo-container">
        <div class="demo-item">
          <h4>自定义背景色</h4>
          <m-banner 
            content="自定义背景色的 Banner" 
            background-color="#f0f9ff"
            border-color="#3b82f6"
            text-color="#1e40af"
          />
        </div>
        <div class="demo-item">
          <h4>自定义圆角</h4>
          <m-banner 
            type="warning" 
            content="自定义圆角的 Banner" 
            border-radius="20px"
          />
        </div>
        <div class="demo-item">
          <h4>自定义内边距</h4>
          <m-banner 
            type="error" 
            content="自定义内边距的 Banner" 
            padding="20px"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 自动关闭 -->
    <DemoSection title="自动关闭">
      <div class="demo-container">
        <div class="demo-item">
          <h4>3秒后自动关闭</h4>
          <m-banner 
            type="success" 
            content="这个 Banner 会在 3 秒后自动关闭" 
            :duration="3000"
            @close="handleClose('自动关闭 Banner')"
          />
        </div>
        <div class="demo-item">
          <h4>手动控制显示</h4>
          <m-banner 
            v-model:visible="showBanner"
            type="info" 
            content="可以通过 v-model:visible 控制显示隐藏" 
          />
          <div class="button-group">
            <m-button @click="showBanner = true">显示 Banner</m-button>
            <m-button @click="showBanner = false">隐藏 Banner</m-button>
          </div>
        </div>
      </div>
    </DemoSection>

    <!-- 复杂内容 -->
    <DemoSection title="复杂内容">
      <div class="demo-container">
        <div class="demo-item">
          <h4>HTML 内容</h4>
          <m-banner type="warning">
            <strong>重要提示：</strong>系统将在 <em>30 分钟</em> 后进行维护，请及时保存您的工作。
            <br>
            <small>维护时间：2024-01-01 02:00 - 04:00</small>
          </m-banner>
        </div>
        <div class="demo-item">
          <h4>带操作按钮</h4>
          <m-banner type="info">
            <div class="banner-with-actions">
              <span>发现新版本 v2.0.0，是否立即更新？</span>
              <div class="actions">
                <m-button size="small" type="primary">立即更新</m-button>
                <m-button size="small">稍后提醒</m-button>
              </div>
            </div>
          </m-banner>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Banner 组件 API 文档"
      :props="bannerApiProps"
      props-title="Banner 组件属性"
      :events="bannerApiEvents"
      :css-classes="bannerApiCssClasses"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DemoSection from '@/components/DemoSection.vue'
import ApiDocs from '@/components/ApiDocs.vue'
import { MMessage } from '@mc-markets/ui'

// 响应式数据
const showBanner = ref(true)

// API 文档数据
const bannerApiProps = [
  {
    name: 'content',
    type: 'string',
    default: "''",
    description: '横幅内容文本'
  },
  {
    name: 'type',
    type: 'string',
    default: "'info'",
    description: '横幅类型：info(信息) / success(成功) / warning(警告) / error(错误)'
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'true',
    description: '是否显示关闭按钮'
  },
  {
    name: 'visible',
    type: 'boolean',
    default: 'true',
    description: '是否显示横幅，支持 v-model:visible'
  },
  {
    name: 'icon',
    type: 'string',
    default: "''",
    description: '自定义图标名称，不设置时使用默认图标'
  },
  {
    name: 'iconSize',
    type: 'string | number',
    default: "'16px'",
    description: '图标大小'
  },
  {
    name: 'closeIconSize',
    type: 'string | number',
    default: "'14px'",
    description: '关闭图标大小'
  },
  {
    name: 'backgroundColor',
    type: 'string',
    default: "''",
    description: '自定义背景色，会覆盖默认的类型样式'
  },
  {
    name: 'textColor',
    type: 'string',
    default: "''",
    description: '自定义文字颜色，会覆盖默认的类型样式'
  },
  {
    name: 'borderColor',
    type: 'string',
    default: "''",
    description: '自定义边框颜色，会覆盖默认的类型样式'
  },
  {
    name: 'borderRadius',
    type: 'string | number',
    default: "'4px'",
    description: '圆角大小'
  },
  {
    name: 'padding',
    type: 'string | number',
    default: "'12px 16px'",
    description: '内边距'
  },
  {
    name: 'duration',
    type: 'number',
    default: '0',
    description: '自动关闭时间（毫秒），0 表示不自动关闭'
  }
]

const bannerApiEvents = [
  {
    name: 'close',
    description: '关闭横幅时触发',
    params: '()'
  },
  {
    name: 'update:visible',
    description: 'visible 值改变时触发',
    params: '(visible: boolean)'
  }
]

const bannerApiCssClasses = [
  {
    name: '.m-banner',
    description: '横幅根元素样式类'
  },
  {
    name: '.m-banner--info',
    description: '信息类型横幅样式类'
  },
  {
    name: '.m-banner--success',
    description: '成功类型横幅样式类'
  },
  {
    name: '.m-banner--warning',
    description: '警告类型横幅样式类'
  },
  {
    name: '.m-banner--error',
    description: '错误类型横幅样式类'
  },
  {
    name: '.m-banner--closable',
    description: '可关闭横幅样式类'
  },
  {
    name: '.m-banner--with-icon',
    description: '带图标横幅样式类'
  },
  {
    name: '.m-banner__content',
    description: '横幅内容容器样式类'
  },
  {
    name: '.m-banner__icon',
    description: '横幅图标样式类'
  },
  {
    name: '.m-banner__text',
    description: '横幅文本样式类'
  },
  {
    name: '.m-banner__close',
    description: '横幅关闭按钮样式类'
  }
]

// 方法
const handleClose = (message) => {
  MMessage.success(`${message} 已关闭`)
}
</script>

<style scoped lang="scss">
.banner-page {
  .demo-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .demo-item {
    h4 {
      margin: 0 0 12px 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--el-text-color-primary);
    }

    .button-group {
      display: flex;
      gap: 12px;
      margin-top: 12px;
    }
  }

  .banner-with-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .actions {
      display: flex;
      gap: 8px;
      margin-left: 16px;
    }
  }

  // 响应式设计
  @media (max-width: 768px) {
    .banner-with-actions {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;

      .actions {
        margin-left: 0;
      }
    }

    .button-group {
      flex-direction: column;
    }
  }
}
</style>
