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

    <!-- 自定义图片 -->
    <DemoSection title="自定义图片">
      <div class="example-empty-block">
        <div class="example-demonstration">通过 image 属性传入图片 URL。</div>
        <div class="empty-demo-container">
          <m-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
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
            <el-button type="primary">按钮</el-button>
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

    <!-- 无描述 -->
    <DemoSection title="无描述">
      <div class="example-empty-block">
        <div class="example-demonstration">通过 description 属性设置为空字符串来隐藏描述。</div>
        <div class="empty-demo-container">
          <m-empty description="" />
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

// Empty API 文档数据 - 严格按照 Element Plus 2.11.2 规范
const emptyApiProps = [
  {
    name: "image",
    type: "string",
    default: "''",
    description: "图片地址"
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
}
</style>
