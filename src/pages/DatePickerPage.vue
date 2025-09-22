<template>
  <div class="datepicker-page">
    <!-- 基础用法 -->
    <DemoSection
      title="基础用法"
      code="
      <template>
        <m-date-picker v-model='value1' type='date' placeholder='Pick a day' :prefix-icon='customPrefix' />
      </template>

      <script setup>
          import { shallowRef, h } from 'vue'
          import { MIcon } from '@mc-markets/ui'
          const customPrefix = shallowRef({
            render() {
              return h(MIcon, { name: 'calendar-clock', size: '20' })
            },
          })
      </script>
      "
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">选择日期的基本用法。 前缀图标有修改</div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a day"
            :prefix-icon="customPrefix"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 其他日期单位 -->
    <DemoSection
      title="其他日期单位"
      code="<m-date-picker v-model='value2' type='datetime' placeholder='Select date and time' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          通过 type 属性可以指定 date 和 datetime 类型，并且通过 format
          属性来指定输入框的格式。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value2"
            type="datetime"
            placeholder="Select date and time"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 日期范围 -->
    <DemoSection
      title="日期范围"
      code="<m-date-picker v-model='value3' type='daterange' range-separator='To' start-placeholder='Start date' end-placeholder='End date' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          在选择日期范围时，默认情况下左右面板会联动。
          如果希望两个面板各自独立切换当前月份，可以使用 unlink-panels 属性。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value3"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 默认显示日期 -->
    <DemoSection
      title="默认显示日期"
      code="<m-date-picker v-model='value4' type='daterange' start-placeholder='Start Date' end-placeholder='End Date' :default-value='defaultValue' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          在选择日期范围时，进行选择后，如果进行重置操作会将日期选择器恢复到选择前的状态，此时不会触发
          change 事件。 可以通过 default-value 设置默认的日期。 需要注意的是
          default-value 的值需要根据 type 类型传入对应格式的值。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value4"
            type="daterange"
            start-placeholder="Start Date"
            end-placeholder="End Date"
            :default-value="defaultValue"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 带快捷选项 -->
    <DemoSection
      title="带快捷选项"
      code="<m-date-picker v-model='value5' type='daterange' unlink-panels range-separator='To' :shortcuts='shortcuts' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          配置 shortcuts
          属性可以设置快捷选项，该配置接收一个对象数组，每个对象配置如下：{
          text: string, value: function }。 其中 value
          必须是一个函数，返回一个日期对象。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value5"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            :shortcuts="shortcuts"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 带输入限制 -->
    <DemoSection
      title="带输入限制"
      code="<m-date-picker v-model='value6' type='date' placeholder='Pick a day' :disabled-date='disabledDate' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          通过 disabled-date 设置禁用状态，参数为当前日期，要求返回 Boolean。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value6"
            type="date"
            placeholder="Pick a day"
            :disabled-date="disabledDate"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 自定义输入框 -->
    <DemoSection
      title="自定义输入框"
      code="<m-date-picker v-model='value7' type='date' placeholder='Pick a day'><template #default='{ cellValue, cell }'><div class='cell'><span class='text'>{{ cell ? cell.text : cellValue }}</span></div></template></m-date-picker>"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          通过 slot 可以自定义输入框的内容。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker v-model="value7" type="date" placeholder="Pick a day">
            <template #default="{ cellValue, cell }">
              <div
                class="cell"
                :class="{ current: cell && cell.type === 'current' }"
              >
                <span class="text">{{ cell ? cell.text : cellValue }}</span>
                <span
                  v-if="cell && cell.type === 'current'"
                  class="holiday"
                ></span>
              </div>
            </template>
          </m-date-picker>
        </div>
      </div>
    </DemoSection>

    <!-- 多选日期 -->
    <DemoSection
      title="多选日期"
      code="<m-date-picker v-model='value8' type='dates' placeholder='Pick one or more dates' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          通过 multiple 属性可以开启多选日期模式。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value8"
            type="dates"
            placeholder="Pick one or more dates"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 周选择器 -->
    <DemoSection
      title="周选择器"
      code="<m-date-picker v-model='value9' type='week' format='YYYY [W]ww' placeholder='Pick a week' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          通过 type 属性可以指定 week 类型，并且通过 format
          属性来指定输入框的格式。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value9"
            type="week"
            format="YYYY [W]ww"
            placeholder="Pick a week"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 月份选择器 -->
    <DemoSection
      title="月份选择器"
      code="<m-date-picker v-model='value10' type='month' placeholder='Pick a month' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          通过 type 属性可以指定 month 类型，并且通过 format
          属性来指定输入框的格式。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value10"
            type="month"
            placeholder="Pick a month"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 年份选择器 -->
    <DemoSection
      title="年份选择器"
      code="<m-date-picker v-model='value11' type='year' placeholder='Pick a year' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          通过 type 属性可以指定 year 类型，并且通过 format
          属性来指定输入框的格式。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value11"
            type="year"
            placeholder="Pick a year"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 季度选择器 -->
    <DemoSection
      title="季度选择器"
      code="<m-date-picker v-model='value12' type='month' placeholder='Pick a quarter' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          通过 type 属性可以指定 quarter 类型，并且通过 format
          属性来指定输入框的格式。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value12"
            type="month"
            placeholder="Pick a quarter"
          />
        </div>
      </div>
    </DemoSection>

    <!-- 时间选择器 -->
    <DemoSection
      title="时间选择器"
      code="<m-date-picker v-model='value13' type='datetime' placeholder='Pick a time' />"
    >
      <div class="example-datepicker-block">
        <div class="example-demonstration">
          通过 type 属性可以指定 time 类型，并且通过 format
          属性来指定输入框的格式。
        </div>
        <div class="datepicker-demo-container">
          <m-date-picker
            v-model="value13"
            type="datetime"
            placeholder="Pick a time"
          />
        </div>
      </div>
    </DemoSection>

    <!-- API 文档 -->
    <ApiDocs
      title="DatePicker API"
      :props="datePickerApiProps"
      props-title="DatePicker 属性"
      :events="datePickerApiEvents"
      events-title="DatePicker 事件"
      :slots="datePickerApiSlots"
      slots-title="DatePicker 插槽"
      :exposes="datePickerApiExposes"
      exposes-title="DatePicker 暴露的方法"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";
import { MDatePicker, MIcon } from "@mc-markets/ui";

// 响应式数据
const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
const value5 = ref("");
const value6 = ref("");
const value7 = ref("");
const value8 = ref([]);
const value9 = ref("");
const value10 = ref("");
const value11 = ref("");
const value12 = ref("");
const value13 = ref("");

const defaultValue = ref([new Date(2000, 9, 10), new Date(2000, 10, 10)]);

const shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];

const customPrefix = shallowRef({
  render() {
    return h(MIcon, { name: "calendar-clock", size: "20" });
  },
});

const disabledDate = (time) => {
  return time.getTime() > Date.now();
};

// DatePicker API 文档数据 - 严格按照 Element Plus 官方文档
const datePickerApiProps = [
  {
    name: "model-value / v-model",
    type: "number / string / object",
    default: "—",
    description: "绑定值，如果是数组，长度应为 2",
  },
  {
    name: "readonly",
    type: "boolean",
    default: "false",
    description: "是否只读",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "是否禁用",
  },
  {
    name: "size",
    type: "enum",
    default: "—",
    description: "输入框尺寸",
    values: ["large", "default", "small"],
  },
  {
    name: "editable",
    type: "boolean",
    default: "true",
    description: "文本框是否可输入",
  },
  {
    name: "clearable",
    type: "boolean",
    default: "true",
    description: "是否显示清除按钮",
  },
  {
    name: "placeholder",
    type: "string",
    default: "—",
    description: "非范围选择时的占位内容",
  },
  {
    name: "start-placeholder",
    type: "string",
    default: "—",
    description: "范围选择时开始日期的占位内容",
  },
  {
    name: "end-placeholder",
    type: "string",
    default: "—",
    description: "范围选择时结束日期的占位内容",
  },
  {
    name: "type",
    type: "enum",
    default: "date",
    description: "显示类型",
    values: [
      "year",
      "years",
      "month",
      "months",
      "date",
      "dates",
      "week",
      "datetime",
      "datetimerange",
      "daterange",
      "monthrange",
      "yearrange",
    ],
  },
  {
    name: "format",
    type: "string",
    default: "YYYY-MM-DD",
    description: "显示在输入框中的格式",
  },
  {
    name: "popper-class",
    type: "string",
    default: "—",
    description: "DatePicker 下拉框的类名",
  },
  {
    name: "popper-options",
    type: "object",
    default: "{}",
    description: "自定义 popper 选项，更多请参考 popper.js",
  },
  {
    name: "range-separator",
    type: "string",
    default: "'-'",
    description: "选择范围时的分隔符",
  },
  {
    name: "default-value",
    type: "Date / string / number",
    default: "—",
    description: "可选，选择器打开时默认显示的时间",
  },
  {
    name: "default-time",
    type: "Date / string / number / Array",
    default: "—",
    description: "范围选择时选中日期所使用的当日内具体时刻",
  },
  {
    name: "value-format",
    type: "string",
    default: "—",
    description: "可选，绑定值的格式。不指定则绑定值为 Date 对象",
  },
  {
    name: "id",
    type: "string / object",
    default: "—",
    description: "等价于原生 input id 属性",
  },
  {
    name: "name",
    type: "string / object",
    default: "''",
    description: "等价于原生 input name 属性",
  },
  {
    name: "unlink-panels",
    type: "boolean",
    default: "false",
    description: "在范围选择器里取消两个日期面板之间的联动",
  },
  {
    name: "prefix-icon",
    type: "string / object",
    default: "''",
    description:
      "自定义前缀图标 如果 type的值是TimeLikeType，那么就是 Clock，不然就是 Calendar",
  },
  {
    name: "clear-icon",
    type: "string / object",
    default: "CircleClose",
    description: "自定义清除图标",
  },
  {
    name: "validate-event",
    type: "boolean",
    default: "true",
    description: "是否触发表单验证",
  },
  {
    name: "disabled-date",
    type: "Function",
    default: "—",
    description:
      "一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值。",
  },
  {
    name: "shortcuts",
    type: "object",
    default: "[]",
    description: "设置快捷选项，需要传入数组对象",
  },
  {
    name: "cell-class-name",
    type: "Function",
    default: "—",
    description: "设置自定义类名",
  },
  {
    name: "teleported",
    type: "boolean",
    default: "true",
    description: "是否将 date-picker 的下拉列表插入至 body 元素",
  },
  {
    name: "empty-values",
    type: "array",
    default: "—",
    description:
      "组件的空值配置 [参考config-provider](/en-US/component/config-provider.html#empty-values-configurations)",
    version: "2.7.0",
  },
  {
    name: "value-on-clear",
    type: "string / number / boolean / Function",
    default: "—",
    description:
      "清空选项的值 [参考 config-provider](/en-US/component/config-provider.html#empty-values-configurations)",
    version: "2.7.0",
  },
  {
    name: "fallback-placements",
    type: "array",
    default: ":::",
    description:
      "Tooltip 可用的 positions 请查看[popper.js 文档](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements)",
    version: "2.8.4",
  },
  {
    name: "placement",
    type: "Placement",
    default: "bottom",
    description: "下拉框出现的位置",
    version: "2.8.4",
  },
  {
    name: "show-footer",
    type: "boolean",
    default: "true",
    description: "whether to show footer where the date picker is one enum",
    version: "2.10.5",
  },
  {
    name: "show-confirm",
    type: "boolean",
    default: "true",
    description: "是否显示确定按钮",
    version: "2.11.0",
  },
  {
    name: "show-week-number",
    type: "boolean",
    default: "false",
    description: "显示周数(除周外)",
    version: "2.10.3",
  },
];

const datePickerApiEvents = [
  {
    name: "change",
    description: "当用户确认值或点击外部时触发",
    params: "Function",
  },
  {
    name: "blur",
    description: "在组件 Input 失去焦点时触发",
    params: "Function",
  },
  {
    name: "focus",
    description: "在组件 Input 获得焦点时触发",
    params: "Function",
  },
  {
    name: "clear",
    description: "可清空的模式下用户点击清空按钮时触发",
    params: "Function",
    version: "2.7.7",
  },
  {
    name: "calendar-change",
    description: "在日历所选日期更改时触发 仅用于 range",
    params: "Function",
  },
  {
    name: "panel-change",
    description: "当日期面板改变时触发。",
    params: "Function",
  },
  {
    name: "visible-change",
    description: "当 DatePicker 的下拉列表出现/消失时触发",
    params: "Function",
  },
];

const datePickerApiSlots = [
  {
    name: "default",
    description: "自定义单元格内容",
  },
  {
    name: "range-separator",
    description: "自定义范围分割符内容",
  },
  {
    name: "prev-month",
    description: "上个月的图标",
    version: "2.8.0",
  },
  {
    name: "next-month",
    description: "下个月的图标",
    version: "2.8.0",
  },
  {
    name: "prev-year",
    description: "上一年图标",
    version: "2.8.0",
  },
  {
    name: "next-year",
    description: "下一年图标",
    version: "2.8.0",
  },
];

const datePickerApiExposes = [
  {
    name: "focus",
    description: "使组件获取焦点",
    type: "Function",
  },
  {
    name: "blur",
    description: "使组件失去焦点",
    type: "Function",
    version: "2.8.7",
  },
  {
    name: "handleOpen",
    description: "打开日期选择器弹窗",
    type: "Function",
    version: "2.2.16",
  },
  {
    name: "handleClose",
    description: "关闭日期选择器弹窗",
    type: "Function",
    version: "2.2.16",
  },
];
</script>

<style scoped lang="scss">
.datepicker-page {
  .example-datepicker-block + .example-datepicker-block {
    margin-top: 10px;
  }

  .example-datepicker-block .example-demonstration {
    margin-bottom: 16px;
  }

  .datepicker-demo-container {
    .el-date-editor + .el-date-editor {
      margin-left: 10px;
    }

    .cell {
      height: 30px;
      padding: 3px 0;
      box-sizing: border-box;
      position: relative;

      .text {
        width: 24px;
        height: 24px;
        display: block;
        margin: 0 auto;
        line-height: 24px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
      }

      &.current {
        .text {
          background: #409eff;
          color: #fff;
        }
      }

      .holiday {
        position: absolute;
        right: 5px;
        top: 0;
        width: 0;
        height: 0;
        border-top: 6px solid #f56c6c;
        border-right: 6px solid transparent;
      }
    }
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .datepicker-page {
      padding: 16px;
    }
  }

  @media (max-width: 480px) {
    .datepicker-page {
      padding: 12px;
    }
  }
}
</style>
