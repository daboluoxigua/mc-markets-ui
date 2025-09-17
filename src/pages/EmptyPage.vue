<template>
  <div class="empty-page">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <div class="example-empty-block">
        <div class="example-demonstration">空状态时的展示占位图。</div>
        <div class="empty-demo-container">
          <m-empty />
        </div>
      </div>
    </DemoSection>

    <!-- 所有预设图片 -->
    <DemoSection title="所有预设图片">
      <div class="example-empty-block">
        <div class="example-demonstration">共16种预设图片类型，通过 image 属性使用。默认为 orders。</div>
        <div class="empty-demo-container">
          <div class="empty-grid">
            <div class="empty-item">
              <m-empty image="404" description="页面未找到" />
              <div class="empty-label">404</div>
            </div>
            <div class="empty-item">
              <m-empty image="billing" description="暂无账单" />
              <div class="empty-label">billing</div>
            </div>
            <div class="empty-item">
              <m-empty image="cart" description="购物车为空" />
              <div class="empty-label">cart</div>
            </div>
            <div class="empty-item">
              <m-empty image="comments" description="暂无评论" />
              <div class="empty-label">comments</div>
            </div>
            <div class="empty-item">
              <m-empty image="dashboard" description="仪表盘为空" />
              <div class="empty-label">dashboard</div>
            </div>
            <div class="empty-item">
              <m-empty image="files" description="暂无文件" />
              <div class="empty-label">files</div>
            </div>
            <div class="empty-item">
              <m-empty image="inbox" description="收件箱为空" />
              <div class="empty-label">inbox</div>
            </div>
            <div class="empty-item">
              <m-empty image="location" description="未找到位置" />
              <div class="empty-label">location</div>
            </div>
            <div class="empty-item">
              <m-empty image="network" description="网络错误" />
              <div class="empty-label">network</div>
            </div>
            <div class="empty-item">
              <m-empty image="notifications" description="暂无通知" />
              <div class="empty-label">notifications</div>
            </div>
            <div class="empty-item">
              <m-empty image="orders" description="暂无订单" />
              <div class="empty-label">orders (默认)</div>
            </div>
            <div class="empty-item">
              <m-empty image="records" description="暂无记录" />
              <div class="empty-label">records</div>
            </div>
            <div class="empty-item">
              <m-empty image="session" description="会话已过期" />
              <div class="empty-label">session</div>
            </div>
            <div class="empty-item">
              <m-empty image="subscription" description="暂无订阅" />
              <div class="empty-label">subscription</div>
            </div>
            <div class="empty-item">
              <m-empty image="todo" description="暂无待办事项" />
              <div class="empty-label">todo</div>
            </div>
            <div class="empty-item">
              <m-empty image="wishlist" description="愿望清单为空" />
              <div class="empty-label">wishlist</div>
            </div>
          </div>
        </div>
      </div>
    </DemoSection>

    <!-- 图片尺寸 -->
    <DemoSection title="图片尺寸">
      <div class="example-empty-block">
        <div class="example-demonstration">通过 image-size 属性控制图片大小。</div>
        <div class="empty-demo-container">
          <m-empty :image-size="200" />
        </div>
      </div>
    </DemoSection>

    <!-- 底部内容 -->
    <DemoSection title="底部内容">
      <div class="example-empty-block">
        <div class="example-demonstration">使用默认插槽来自定义底部内容。</div>
        <div class="empty-demo-container">
          <m-empty>
            <m-button type="primary">按钮</m-button>
          </m-empty>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义描述 -->
    <DemoSection title="自定义描述">
      <div class="example-empty-block">
        <div class="example-demonstration">通过 description 属性来自定义描述内容。</div>
        <div class="empty-demo-container">
          <m-empty description="描述文字" />
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Empty API"
      :props="emptyApiProps"
      props-title="Empty 属性"
      :slots="emptyApiSlots"
      slots-title="Empty 插槽"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MEmpty } from "@mc-markets/ui";

// Empty API 文档数据 - 扩展版本
const emptyApiProps = [
  {
    name: "image",
    type: "string",
    default: "'orders'",
    description: "图片地址或预设图片名称",
    values: ["404", "billing", "cart", "comments", "dashboard", "files", "inbox", "location", "network", "notifications", "orders", "records", "session", "subscription", "todo", "wishlist"]
  },
  {
    name: "image-size",
    type: "number",
    default: "—",
    description: "图片大小（宽度）"
  },
  {
    name: "description",
    type: "string",
    default: "''",
    description: "文字描述"
  }
];

const emptyApiSlots = [
  {
    name: "default",
    description: "自定义底部内容"
  },
  {
    name: "image",
    description: "自定义图片"
  },
  {
    name: "description",
    description: "自定义描述文字"
  }
];
</script>

<style scoped lang="scss">
.empty-page {
  .example-empty-block + .example-empty-block {
    margin-top: 10px;
  }
  
  .example-empty-block .example-demonstration {
    margin-bottom: 16px;
  }

  .empty-demo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    border-radius: 4px;
  }

  .empty-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;
    max-width: 1200px;
  }

  .empty-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .empty-label {
    margin-top: 10px;
    font-size: 12px;
    color: var(--text-secondary);
    background: var(--bg-secondary);
    padding: 4px 8px;
    border-radius: 4px;
    font-family: monospace;
  }

  /* 响应式设计 */
  @media (max-width: 1024px) {
    .empty-grid {
      grid-template-columns: repeat(3, 1fr);
      max-width: 900px;
    }
  }

  @media (max-width: 768px) {
    .empty-grid {
      grid-template-columns: repeat(2, 1fr);
      max-width: 600px;
      gap: 15px;
    }
    
    .empty-page {
      padding: 16px;
    }
  }

  @media (max-width: 480px) {
    .empty-grid {
      grid-template-columns: 1fr;
      max-width: 300px;
      gap: 10px;
    }
    
    .empty-page {
      padding: 12px;
    }
  }
}
</style>
