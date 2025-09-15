<template>
  <div class="pagination-page">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <div class="example-pagination-block">
        <div class="example-demonstration">When you have few pages</div>
        <m-pagination layout="prev, pager, next" :total="50" />
      </div>
      <div class="example-pagination-block">
        <div class="example-demonstration">When you have more than 7 pages</div>
        <m-pagination layout="prev, pager, next" :total="1000" />
      </div>
    </DemoSection>

    <!-- 设置最大页码按钮数 -->
    <DemoSection title="设置最大页码按钮数">
      <div class="example-pagination-block">
        <m-pagination
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
        />
      </div>
    </DemoSection>

    <!-- 带有背景色的分页 -->
    <DemoSection title="带有背景色的分页">
      <div class="example-pagination-block">
        <m-pagination background layout="prev, pager, next" :total="1000" />
      </div>
    </DemoSection>

    <!-- 小型分页 -->
    <DemoSection title="小型分页">
      <div class="example-pagination-block">
        <div class="example-demonstration">通过size更改大小 这是个 small的例子</div>
        <m-pagination size="small" layout="prev, pager, next" :total="50" />
        <m-pagination
          size="small"
          background
          layout="prev, pager, next"
          :total="50"
          class="mt-4"
        />
      </div>
    </DemoSection>

    <!-- 当只有一页时隐藏分页 -->
    <DemoSection title="当只有一页时隐藏分页">
      <div class="example-pagination-block">
        <div class="example-demonstration">
          <m-switch v-model="hideSinglePage" />
          <hr class="my-4" />
          <m-pagination
            :hide-on-single-page="hideSinglePage"
            :total="5"
            layout="prev, pager, next"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 附加功能 -->
    <DemoSection title="附加功能">
      <div class="flex items-center mb-4">
        <m-radio-group v-model="size" class="mr-4">
          <m-radio-button value="default">default</m-radio-button>
          <m-radio-button value="large">large</m-radio-button>
          <m-radio-button value="small">small</m-radio-button>
        </m-radio-group>
        <div>
          background:
          <m-switch v-model="background" class="ml-2" />
        </div>
        <div class="ml-4">
          disabled: <m-switch v-model="disabled" class="ml-2" />
        </div>
      </div>

      <hr class="my-4" />

      <div class="demo-pagination-block">
        <div class="demonstration">Total item count</div>
        <m-pagination
          v-model:current-page="currentPage1"
          :page-size="100"
          :size="size"
          :disabled="disabled"
          :background="background"
          layout="total, prev, pager, next"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <div class="demo-pagination-block">
        <div class="demonstration">Change page size</div>
        <m-pagination
          v-model:current-page="currentPage2"
          v-model:page-size="pageSize2"
          :page-sizes="[100, 200, 300, 400]"
          :size="size"
          :disabled="disabled"
          :background="background"
          layout="sizes, prev, pager, next"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <div class="demo-pagination-block">
        <div class="demonstration">Jump to</div>
        <m-pagination
          v-model:current-page="currentPage3"
          v-model:page-size="pageSize3"
          :size="size"
          :disabled="disabled"
          :background="background"
          layout="prev, pager, next, jumper"
          :total="1000"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <div class="demo-pagination-block">
        <div class="demonstration">All combined</div>
        <m-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :size="size"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </DemoSection>


    <!-- API 文档 -->
    <ApiDocs
      title="Pagination API"
      :props="paginationApiProps"
      props-title="Pagination Attributes"
      :events="paginationApiEvents"
      events-title="Pagination Events"
      :slots="paginationApiSlots"
      slots-title="Pagination Slots"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MPagination, MSwitch, MRadioGroup, MRadioButton } from "@mc-markets/ui";

// 响应式数据
const hideSinglePage = ref(false);
const size = ref('default');
const background = ref(false);
const disabled = ref(false);
const currentPage1 = ref(1);
const currentPage2 = ref(1);
const currentPage3 = ref(1);
const currentPage4 = ref(1);
const pageSize2 = ref(100);
const pageSize3 = ref(100);
const pageSize4 = ref(100);

// 事件处理
const handleSizeChange = (val) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`);
};

// API 文档数据 - 严格按照 Element Plus 2.11.2 规范
const paginationApiProps = [
  {
    name: "size",
    type: "enum",
    default: "'default'",
    description: "分页大小",
    version: "2.7.6"
  },
  {
    name: "background",
    type: "boolean",
    default: "false",
    description: "是否为分页按钮添加背景色"
  },
  {
    name: "page-size / v-model:page-size",
    type: "number",
    default: "—",
    description: "每页显示条目个数"
  },
  {
    name: "default-page-size",
    type: "number",
    default: "—",
    description: "每页默认的条目个数，不设置时默认为10"
  },
  {
    name: "total",
    type: "number",
    default: "—",
    description: "总条目数"
  },
  {
    name: "page-count",
    type: "number",
    default: "—",
    description: "总页数， total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性"
  },
  {
    name: "pager-count",
    type: "number",
    default: "7",
    description: "设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠"
  },
  {
    name: "current-page / v-model:current-page",
    type: "number",
    default: "—",
    description: "当前页数"
  },
  {
    name: "default-current-page",
    type: "number",
    default: "—",
    description: "当前页数的默认初始值，不设置时默认为 1"
  },
  {
    name: "layout",
    type: "string",
    default: "prev, pager, next, jumper, ->, total",
    description: "组件布局，子组件名用逗号分隔"
  },
  {
    name: "page-sizes",
    type: "object",
    default: "[10, 20, 30, 40, 50, 100]",
    description: "每页显示个数选择器的选项设置"
  },
  {
    name: "append-size-to",
    type: "string",
    default: "—",
    description: "下拉框挂载到哪个 DOM 元素",
    version: "2.8.4"
  },
  {
    name: "popper-class",
    type: "string",
    default: "''",
    description: "每页显示个数选择器的下拉框类名"
  },
  {
    name: "prev-text",
    type: "string",
    default: "''",
    description: "替代图标显示的上一页文字"
  },
  {
    name: "prev-icon",
    type: "string / Component",
    default: "ArrowLeft",
    description: "上一页的图标， 比 prev-text 优先级更高"
  },
  {
    name: "next-text",
    type: "string",
    default: "''",
    description: "替代图标显示的下一页文字"
  },
  {
    name: "next-icon",
    type: "string / Component",
    default: "ArrowRight",
    description: "下一页的图标， 比 next-text 优先级更低"
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用分页"
  },
  {
    name: "teleported",
    type: "boolean",
    default: "true",
    description: "是否将下拉菜单teleport至 body",
    version: "2.3.13"
  },
  {
    name: "hide-on-single-page",
    type: "boolean",
    default: "false",
    description: "只有一页时是否隐藏"
  },
  {
    name: "small",
    type: "boolean",
    default: "false",
    description: "是否使用小型分页样式",
    deprecated: true
  }
];

const paginationApiEvents = [
  {
    name: "size-change",
    description: "page-size 改变时触发",
    params: "Function"
  },
  {
    name: "current-change",
    description: "current-page 改变时触发",
    params: "Function"
  },
  {
    name: "change",
    description: "current-page 或 page-size 更改时触发",
    params: "Function",
    version: "2.4.4"
  },
  {
    name: "prev-click",
    description: "用户点击上一页按钮改变当前页时触发",
    params: "Function"
  },
  {
    name: "next-click",
    description: "用户点击下一页按钮改变当前页时触发",
    params: "Function"
  }
];

const paginationApiSlots = [
  {
    name: "default",
    description: "自定义内容 设置文案，需要在 layout 中列出 slot"
  }
];
</script>

<style scoped lang="scss">
.pagination-page {
  .example-pagination-block + .example-pagination-block {
    margin-top: 10px;
  }
  
  .example-pagination-block .example-demonstration {
    margin-bottom: 16px;
  }
  
  .demo-pagination-block + .demo-pagination-block {
    margin-top: 10px;
  }
  
  .demo-pagination-block .demonstration {
    margin-bottom: 16px;
  }



  /* 响应式设计 */
  @media (max-width: 768px) {
    .pagination-page {
      padding: 16px;
    }
  }

  @media (max-width: 480px) {
    .pagination-page {
      padding: 12px;
    }
  }
}
</style>
