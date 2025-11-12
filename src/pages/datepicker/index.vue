<template>
  <div class="datepicker-page">
    <DemoSection :component="sections" />

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
import DemoSection from "@/components/DemoSection.vue";
import ApiDocs from "@/components/ApiDocs.vue";

import Basic from "./components/basic.vue";
import OtherUnits from "./components/otherUnits.vue";
import RangePicker from "./components/range.vue";
import DefaultValue from "./components/defaultValue.vue";
import Shortcuts from "./components/shortcuts.vue";
import DisabledDate from "./components/disabledDate.vue";
import CustomCell from "./components/customCell.vue";
import MultiDates from "./components/multiDates.vue";
import WeekPicker from "./components/weekPicker.vue";
import MonthPicker from "./components/monthPicker.vue";
import YearPicker from "./components/yearPicker.vue";
import QuarterPicker from "./components/quarterPicker.vue";
import TimePicker from "./components/timePicker.vue";

const sections = [
  Basic,
  OtherUnits,
  RangePicker,
  DefaultValue,
  Shortcuts,
  DisabledDate,
  CustomCell,
  MultiDates,
  WeekPicker,
  MonthPicker,
  YearPicker,
  QuarterPicker,
  TimePicker,
];

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
    description: "可选，绑定值的格式，不指定则绑定值为 Date 对象",
  },
  {
    name: "teleported",
    type: "boolean",
    default: "true",
    description: "是否将 date-picker 的下拉列表插入至 body 元素",
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
    name: "empty-values",
    type: "array",
    default: "—",
    description:
      "组件的空值配置 [参考config-provider](/en-US/component/config-provider.html#empty-values-configurations)",
    version: "2.7.0",
  },
  {
    name: "default-time",
    type: "Date[]",
    default: "—",
    description: "范围选择时选中日期所使用的当日内具体时刻",
  },
];

const datePickerApiEvents = [
  {
    name: "change",
    description: "用户确认选定的值时触发",
    params: "(value: string | number | Date | (string | number | Date)[])",
  },
  {
    name: "blur",
    description: "当 input 失去焦点时触发",
    params: "(event: FocusEvent)",
  },
  {
    name: "focus",
    description: "当 input 获得焦点时触发",
    params: "(event: FocusEvent)",
  },
  {
    name: "calendar-change",
    description: "当日历日期改变时触发",
    params: "(value: Date[])",
  },
  {
    name: "panel-change",
    description: "当日历面板改变时触发",
    params: "(value: Date | Date[], mode: 'year' | 'month' | 'date')",
  },
  {
    name: "visible-change",
    description: "当 DatePicker 的下拉框出现/消失时触发",
    params: "(value: boolean)",
  },
];

const datePickerApiSlots = [
  {
    name: "default",
    description: "自定义输入框内容",
  },
  {
    name: "range-separator",
    description: "自定义分隔符",
  },
  {
    name: "footer",
    description: "在面板底部增加自定义内容",
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
  display: flex;
  flex-direction: column;
  gap: 32px;

  :deep(.example-datepicker-block + .example-datepicker-block) {
    margin-top: 10px;
  }

  :deep(.example-datepicker-block .example-demonstration) {
    margin-bottom: 16px;
  }

  :deep(.datepicker-demo-container) {
    .el-date-editor + .el-date-editor {
      margin-left: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
}
</style>

