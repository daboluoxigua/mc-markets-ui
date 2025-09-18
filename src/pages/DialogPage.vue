<template>
  <div class="dialog-page">
    <!-- 基础用法 -->
    <DemoSection title="基础用法">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          Dialog 弹出一个对话框，适合需要定制性更大的场景。需要设置 model-value
          / v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog
          分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 title
          属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了
          before-close 的用法。
        </div>
        <div class="dialog-demo-container">
          <m-button plain @click="dialogVisible = true">
            Click to open the Dialog
          </m-button>

          <m-dialog
            v-model="dialogVisible"
            title="Tips"
            :before-close="handleClose"
          >
            <span>This is a message</span>
            <template #footer>
              <m-button @click="dialogVisible = false">Cancel</m-button>
              <m-button type="primary" @click="dialogVisible = false">
                Confirm
              </m-button>
            </template>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义内容 -->
    <DemoSection title="自定义内容">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          对话框的内容可以是任何东西，甚至是一个表格或表单。 此示例显示如何在
          Dialog 中使用 Element Plus 的表格和表单。
        </div>
        <div class="dialog-demo-container">
          <div class="flex flex-wrap gap-1">
            <m-button class="ml-0" plain @click="dialogTableVisible = true">
              Open a Table nested Dialog
            </m-button>

            <m-button class="ml-0" plain @click="dialogFormVisible = true">
              Open a Form nested Dialog
            </m-button>
          </div>

          <m-dialog
            v-model="dialogTableVisible"
            title="Shipping address"
            width="800"
          >
            <m-table :data="gridData">
              <m-table-column property="date" label="Date" width="150" />
              <m-table-column property="name" label="Name" width="200" />
              <m-table-column property="address" label="Address" />
            </m-table>
          </m-dialog>

          <m-dialog
            v-model="dialogFormVisible"
            title="Shipping address"
            width="500"
          >
            <m-form :model="form">
              <m-form-item label="Promotion name" :label-width="formLabelWidth">
                <m-input v-model="form.name" autocomplete="off" />
              </m-form-item>
              <m-form-item label="Zones" :label-width="formLabelWidth">
                <m-select
                  v-model="form.region"
                  placeholder="Please select a zone"
                >
                  <m-option label="Zone No.1" value="shanghai" />
                  <m-option label="Zone No.2" value="beijing" />
                </m-select>
              </m-form-item>
            </m-form>
            <template #footer>
              <div class="dialog-footer">
                <m-button @click="dialogFormVisible = false">Cancel</m-button>
                <m-button type="primary" @click="dialogFormVisible = false">
                  Confirm
                </m-button>
              </div>
            </template>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义头部 -->
    <DemoSection title="自定义头部">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          header 可用于自定义显示标题的区域。
          为了保持可用性，除了使用此插槽外，使用 title 属性，或使用 titleId
          插槽属性来指定哪些元素应该读取为对话框标题。
        </div>
        <div class="dialog-demo-container">
          <m-button plain @click="customHeaderVisible = true">
            Open Dialog with customized header
          </m-button>

          <m-dialog
            v-model="customHeaderVisible"
            :show-close="false"
            width="500"
          >
            <template #header="{ close, titleId, titleClass }">
              <div class="my-header">
                <h4 :id="titleId" :class="titleClass">
                  This is a custom header!
                </h4>
                <m-button type="danger" @click="close">
                  <m-icon class="el-icon--left"><CircleCloseFilled /></m-icon>
                  close
                </m-button>
              </div>
            </template>
            <span>This is a message</span>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- 嵌套的对话框 -->
    <DemoSection title="嵌套的对话框">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body
          属性。
        </div>
        <div class="dialog-demo-container">
          <m-button plain @click="outerVisible = true">
            open the outer Dialog
          </m-button>

          <m-dialog v-model="outerVisible" title="Outer Dialog" width="500">
            <m-dialog
              v-model="innerVisible"
              width="30%"
              title="Inner Dialog"
              append-to-body
            />
            <template #footer>
              <div class="dialog-footer">
                <m-button @click="outerVisible = false">Cancel</m-button>
                <m-button type="primary" @click="innerVisible = true">
                  open the inner Dialog
                </m-button>
              </div>
            </template>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- 内容居中 -->
    <DemoSection title="内容居中">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          通过设置 center 属性可以让 Dialog 的 header 和 footer 部分居中排列。
        </div>
        <div class="dialog-demo-container">
          <m-button plain @click="centerDialogVisible = true">
            open the Dialog
          </m-button>

          <m-dialog
            v-model="centerDialogVisible"
            title="Warning"
            width="500"
            center
          >
            <span
              >It should be noted that the content will not be aligned to center
              by default</span
            >
            <template #footer>
              <div class="dialog-footer">
                <m-button @click="centerDialogVisible = false">Cancel</m-button>
                <m-button type="primary" @click="centerDialogVisible = false">
                  Confirm
                </m-button>
              </div>
            </template>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- 居中对话框 -->
    <DemoSection title="居中对话框">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          通过设置 align-center 属性可以让 Dialog 水平垂直对齐对话框。
        </div>
        <div class="dialog-demo-container">
          <m-button plain @click="alignCenterDialogVisible = true">
            open the Dialog
          </m-button>

          <m-dialog
            v-model="alignCenterDialogVisible"
            title="Warning"
            width="500"
            align-center
          >
            <span
              >It should be noted that the content will not be aligned to center
              by default</span
            >
            <template #footer>
              <div class="dialog-footer">
                <m-button @click="alignCenterDialogVisible = false"
                  >Cancel</m-button
                >
                <m-button
                  type="primary"
                  @click="alignCenterDialogVisible = false"
                >
                  Confirm
                </m-button>
              </div>
            </template>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- 关闭时销毁 -->
    <DemoSection title="关闭时销毁">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          当需要重新渲染 Dialog 内容时，可以设置 destroy-on-close 属性。
        </div>
        <div class="dialog-demo-container">
          <m-button plain @click="destroyOnCloseVisible = true">
            open the Dialog
          </m-button>

          <m-dialog
            v-model="destroyOnCloseVisible"
            title="Notice"
            width="500"
            destroy-on-close
          >
            <span>Notice: before destroy</span>
            <template #footer>
              <div class="dialog-footer">
                <m-button @click="destroyOnCloseVisible = false"
                  >Cancel</m-button
                >
                <m-button type="primary" @click="destroyOnCloseVisible = false">
                  Confirm
                </m-button>
              </div>
            </template>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- 可拖拽对话框 -->
    <DemoSection title="可拖拽对话框">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          通过设置 draggable 属性可以让 Dialog 变为可拖拽的。
        </div>
        <div class="dialog-demo-container">
          <m-button plain @click="draggableVisible = true">
            open the Dialog
          </m-button>

          <m-dialog
            v-model="draggableVisible"
            title="Notice"
            width="500"
            draggable
          >
            <span>Notice: draggable dialog</span>
            <template #footer>
              <div class="dialog-footer">
                <m-button @click="draggableVisible = false">Cancel</m-button>
                <m-button type="primary" @click="draggableVisible = false">
                  Confirm
                </m-button>
              </div>
            </template>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- 全屏 -->
    <DemoSection title="全屏">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          通过设置 fullscreen 属性可以让 Dialog 变为全屏的。
        </div>
        <div class="dialog-demo-container">
          <m-button plain @click="fullscreenVisible = true">
            open the Dialog
          </m-button>

          <m-dialog v-model="fullscreenVisible" title="Notice" fullscreen>
            <span>Notice: fullscreen dialog</span>
            <template #footer>
              <div class="dialog-footer">
                <m-button @click="fullscreenVisible = false">Cancel</m-button>
                <m-button type="primary" @click="fullscreenVisible = false">
                  Confirm
                </m-button>
              </div>
            </template>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- 模态框 -->
    <DemoSection title="模态框">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          通过设置 modal 属性可以控制是否需要遮罩层。
        </div>
        <div class="dialog-demo-container">
          <m-button plain @click="modalVisible = true">
            open the Dialog
          </m-button>

          <m-dialog
            v-model="modalVisible"
            title="Notice"
            width="500"
            :modal="false"
          >
            <span>Notice: no modal</span>
            <template #footer>
              <div class="dialog-footer">
                <m-button @click="modalVisible = false">Cancel</m-button>
                <m-button type="primary" @click="modalVisible = false">
                  Confirm
                </m-button>
              </div>
            </template>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- 自定义动画 2.10.5 -->
    <DemoSection title="自定义动画 2.10.5">
      <div class="example-dialog-block">
        <div class="example-demonstration">
          通过设置 transition 属性可以自定义对话框的动画效果。
        </div>
        <div class="dialog-demo-container">
          <m-button plain @click="customTransitionVisible = true">
            open the Dialog
          </m-button>

          <m-dialog
            v-model="customTransitionVisible"
            title="Notice"
            width="500"
            transition="dialog-fade"
          >
            <span>Notice: custom transition</span>
            <template #footer>
              <div class="dialog-footer">
                <m-button @click="customTransitionVisible = false"
                  >Cancel</m-button
                >
                <m-button
                  type="primary"
                  @click="customTransitionVisible = false"
                >
                  Confirm
                </m-button>
              </div>
            </template>
          </m-dialog>
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="Dialog API"
      :props="dialogApiProps"
      props-title="Dialog 属性"
      :events="dialogApiEvents"
      events-title="Dialog 事件"
      :slots="dialogApiSlots"
      slots-title="Dialog 插槽"
      :exposes="dialogApiExposes"
      exposes-title="Dialog 暴露的方法"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import {
  MButton,
  MDialog,
  MTable,
  MTableColumn,
  MForm,
  MFormItem,
  MInput,
  MSelect,
  MIcon,
} from "@mc-markets/ui";
import { CircleCloseFilled } from "@element-plus/icons-vue";
import { ElMessageBox } from "element-plus";

// 响应式数据
const dialogVisible = ref(false);
const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const customHeaderVisible = ref(false);
const outerVisible = ref(false);
const innerVisible = ref(false);
const centerDialogVisible = ref(false);
const alignCenterDialogVisible = ref(false);
const destroyOnCloseVisible = ref(false);
const draggableVisible = ref(false);
const fullscreenVisible = ref(false);
const modalVisible = ref(false);
const customTransitionVisible = ref(false);

const formLabelWidth = "140px";

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const gridData = [
  {
    date: "2016-05-02",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-04",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-01",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-03",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
];

// 事件处理
const handleClose = (done) => {
  ElMessageBox.confirm("Are you sure to close this dialog?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};

// Dialog API 文档数据 - 严格按照 Element Plus 2.11.2 规范
const dialogApiProps = [
  {
    name: "model-value / v-model",
    type: "boolean",
    default: "—",
    description: "是否显示 Dialog",
  },
  {
    name: "title",
    type: "string",
    default: "''",
    description:
      "Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入",
  },
  {
    name: "width",
    type: "string / number",
    default: "''",
    description: "对话框的宽度，默认值为 50%",
  },
  {
    name: "fullscreen",
    type: "boolean",
    default: "false",
    description: "是否为全屏 Dialog",
  },
  {
    name: "top",
    type: "string",
    default: "''",
    description: "dialog CSS 中的 margin-top 值，默认为 15vh",
  },
  {
    name: "modal",
    type: "boolean",
    default: "true",
    description: "是否需要遮罩层",
  },
  {
    name: "modal-penetrable",
    type: "boolean",
    default: "false",
    description: "是否允许穿透遮罩层。 modal 属性必须为 false。",
    version: "2.10.5",
  },
  {
    name: "modal-class",
    type: "string",
    default: "—",
    description: "遮罩的自定义类名",
  },
  {
    name: "header-class",
    type: "string",
    default: "—",
    description: "header 部分的自定义 class 名",
    version: "2.9.3",
  },
  {
    name: "body-class",
    type: "string",
    default: "—",
    description: "body 部分的自定义 class 名",
    version: "2.9.3",
  },
  {
    name: "footer-class",
    type: "string",
    default: "—",
    description: "footer 部分的自定义 class 名",
    version: "2.9.3",
  },
  {
    name: "append-to-body",
    type: "boolean",
    default: "false",
    description:
      "Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true",
  },
  {
    name: "append-to",
    type: "CSSSelector / HTMLElement",
    default: "body",
    description: "Dialog 挂载到哪个 DOM 元素 将覆盖 append-to-body",
    version: "2.4.3",
  },
  {
    name: "lock-scroll",
    type: "boolean",
    default: "true",
    description: "是否在 Dialog 出现时将 body 滚动锁定",
  },
  {
    name: "open-delay",
    type: "number",
    default: "0",
    description: "dialog 打开的延时时间，单位毫秒",
  },
  {
    name: "close-delay",
    type: "number",
    default: "0",
    description: "dialog 关闭的延时时间，单位毫秒",
  },
  {
    name: "close-on-click-modal",
    type: "boolean",
    default: "true",
    description: "是否可以通过点击 modal 关闭 Dialog",
  },
  {
    name: "close-on-press-escape",
    type: "boolean",
    default: "true",
    description: "是否可以通过按下 ESC 关闭 Dialog",
  },
  {
    name: "show-close",
    type: "boolean",
    default: "true",
    description: "是否显示关闭按钮",
  },
  {
    name: "before-close",
    type: "Function",
    default: "—",
    description:
      "关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.",
  },
  {
    name: "draggable",
    type: "boolean",
    default: "false",
    description: "为 Dialog 启用可拖拽功能",
  },
  {
    name: "overflow",
    type: "boolean",
    default: "false",
    description: "拖动范围可以超出可视区",
    version: "2.5.4",
  },
  {
    name: "center",
    type: "boolean",
    default: "false",
    description: "是否让 Dialog 的 header 和 footer 部分居中排列",
  },
  {
    name: "align-center",
    type: "boolean",
    default: "false",
    description: "是否水平垂直对齐对话框",
    version: "2.2.16",
  },
  {
    name: "destroy-on-close",
    type: "boolean",
    default: "false",
    description: "当关闭 Dialog 时，销毁其中的元素",
  },
  {
    name: "close-icon",
    type: "string / Component",
    default: "—",
    description: "自定义关闭图标，默认 Close",
  },
  {
    name: "z-index",
    type: "number",
    default: "—",
    description: "和原生的 CSS 的 z-index 相同，改变 z 轴的顺序",
  },
  {
    name: "header-aria-level",
    type: "string",
    default: "2",
    description: "header 的 aria-level 属性",
    version: "a11y",
  },
  {
    name: "transition",
    type: "string / object",
    default: "dialog-fade",
    description:
      "对话框动画的自定义过渡配置。 可以是一个字符串（过渡名称），也可以是一个包含 Vue 过渡属性的对象。",
    version: "2.10.5",
  },
  {
    name: "custom-class",
    type: "string",
    default: "''",
    description: "Dialog 的自定义类名",
    deprecated: true,
  },
];

const dialogApiEvents = [
  {
    name: "open",
    description: "Dialog 打开的回调",
    params: "Function",
  },
  {
    name: "opened",
    description: "Dialog 打开动画结束时的回调",
    params: "Function",
  },
  {
    name: "close",
    description: "Dialog 关闭的回调",
    params: "Function",
  },
  {
    name: "closed",
    description: "Dialog 关闭动画结束时的回调",
    params: "Function",
  },
  {
    name: "open-auto-focus",
    description: "输入焦点聚焦在 Dialog 内容时的回调",
    params: "Function",
  },
  {
    name: "close-auto-focus",
    description: "输入焦点从 Dialog 内容失焦时的回调",
    params: "Function",
  },
];

const dialogApiSlots = [
  {
    name: "default",
    description: "对话框的默认内容",
  },
  {
    name: "header",
    description: "对话框标题的内容；会替换标题部分，但不会移除关闭按钮。",
  },
  {
    name: "footer",
    description: "Dialog 按钮操作区的内容",
  },
  {
    name: "title",
    description: "与 header 作用相同 请使用 header",
    deprecated: true,
  },
];

const dialogApiExposes = [
  {
    name: "resetPosition",
    description: "重置位置",
    type: "Function",
    version: "2.8.1",
  },
  {
    name: "handleClose",
    description: "关闭对话框",
    type: "Function",
    version: "2.9.8",
  },
];
</script>

<style scoped lang="scss">
.dialog-page {
  .example-dialog-block + .example-dialog-block {
    margin-top: 10px;
  }

  .example-dialog-block .example-demonstration {
    margin-bottom: 16px;
  }

  .dialog-demo-container {
    .dialog-footer {
      text-align: right;
    }

    .my-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .flex {
      display: flex;
    }

    .flex-wrap {
      flex-wrap: wrap;
    }

    .gap-1 {
      gap: 0.25rem;
    }

    .ml-0 {
      margin-left: 0 !important;
    }
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .dialog-page {
      padding: 16px;
    }
  }

  @media (max-width: 480px) {
    .dialog-page {
      padding: 12px;
    }
  }
}
</style>
