<template>
  <up-popup :round="10" :show="show" @close="bindClosePopup">
    <div class="picker-view-header">
      <view class="picker-view-header-cancel" @click="bindClosePopup">{{
        t("cancel")
      }}</view>
      <view class="picker-view-header-confirm" @click="pickerConfirm">{{
        t("confirm")
      }}</view>
    </div>
    <div class="search" v-if="search">
      <i class="iconfont icon-sousuo"></i>
      <input class="in" v-model="searchKey" @input="bindSearchChange" />
    </div>
    <div class="loading" v-if="loading">
      <up-loading-icon></up-loading-icon>
    </div>
    <van-picker
      :model-value="pickerDefault"
      :columns="columns"
      @cancel="bindClosePopup"
      @confirm="pickerConfirm"
    />
  </up-popup>
</template>
<script setup>
const { t } = useI18n();
const emit = defineEmits(["confirm"]);
const props = defineProps({
  search: {
    type: Boolean,
    default: false,
  },
  columns: {
    type: Array,
    default: [],
  },
  columnsFieldNames: {
    type: Object,
    default: () => {
      return { text: "text", value: "value", children: "children" };
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  // pickerDefault: {
  // 	type: Array,
  // 	default: () => [0]
  // }
});
const model = defineModel();
const show = defineModel("show");
const searchKey = ref("");

const showColumn = ref(props.columns);
watch(
  () => props.columns,
  () => {
    showColumn.value = props.columns;
  }
);
const pickerDefault = computed(() => {
  // 如果有搜索条件，默认选择第一个选项
  if (searchKey.value) {
    return [0];
  }
  const index = props.columns.findIndex(
    (item) => item[props.columnsFieldNames.value] === model.value
  );
  return [index > -1 ? index : 0];
});
const pickerIndex = ref(pickerDefault.value);
const pickerConfirm = () => {
  if (showColumn.value[pickerIndex.value[0]]) {
    model.value =
      showColumn.value[pickerIndex.value[0]][props.columnsFieldNames.value];
    emit("confirm", showColumn.value[pickerIndex.value[0]]);
    bindClosePopup();
  }
};
const pickerChange = (e) => {
  pickerIndex.value = e.detail.value;
};

const bindSearchChange = (e) => {
  slicePhonePrefixList(e.detail.value);
};
const slicePhonePrefixList = (val) => {
  const searchValue = String(val)?.toUpperCase();
  showColumn.value = props.columns.filter((item) => {
    return (
      item[props.columnsFieldNames.text]?.toUpperCase().indexOf(searchValue) >
        -1 ||
      item[props.columnsFieldNames.value]?.toUpperCase().indexOf(searchValue) >
        -1
    );
  });
};
const bindClosePopup = () => {
  searchKey.value = "";
  slicePhonePrefixList("");
  show.value = false;
};
</script>
<style scoped lang="scss">
.picker-view {
  width: 100%;
  height: 400rpx;
}
// .loading {
// 	width: 100%;
// 	height: 400rpx;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// }
.picker-view-header {
  display: flex;
  justify-content: space-between;
  height: 80rpx;
  padding: 0 25rpx;
  font-size: 28rpx;
  line-height: 80rpx;
}

.item {
  height: 40px;
  font-size: 28rpx;
  line-height: 40px;
  text-align: center;
}

:deep(.uni-picker-view-indicator) {
  height: 40px !important;
}

.search {
  height: 80rpx;
  margin: 10rpx 20rpx;
  background-color: #f5f7fa;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
  .icon-sousuo {
    font-size: 34rpx;
    color: #999;
  }
  .in {
    flex: 1;
    width: 0;
    height: 100%;
    margin-left: 20rpx;
  }
}
</style>
