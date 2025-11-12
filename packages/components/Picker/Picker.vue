<template>
  <popup v-model:show="show" round position="bottom" v-bind="$attrs">
    <div class="header">
      <div class="title">
        {{ title }}
      </div>
      <div class="close" @click="bindClosePopup">
        <i class="iconfont icon-lucide-x"></i>
      </div>
    </div>
    <div class="list-container">
      <div
        class="list-item"
        :class="{ active: model === item[columnsFieldNames.value] }"
        v-for="item in columns"
        :key="item[columnsFieldNames.value]"
        @click="pickerConfirm(item)"
      >
        <div class="label">
          <template v-if="$slots.label">
            <slot name="label" :item="item"></slot>
          </template>
          <template v-else>
            {{ item[columnsFieldNames.label] }}
          </template>
        </div>
        <div
          class="active-icon"
          v-show="model === item[columnsFieldNames.value]"
        >
          <i class="iconfont icon-check"></i>
        </div>
      </div>
    </div>
  </popup>
</template>
<script setup>
import { Popup, Picker } from "vant";
const emit = defineEmits(["confirm"]);
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  columns: {
    type: Array,
    default: [],
  },
  columnsFieldNames: {
    type: Object,
    default: () => {
      return { label: "label", value: "value" };
    },
  },
});
const model = defineModel();
const show = defineModel("show", {
  type: Boolean,
  default: false,
});

const pickerConfirm = (item) => {
  model.value = item[props.columnsFieldNames.value];
  emit("confirm", item);
  bindClosePopup();
};

const bindClosePopup = () => {
  show.value = false;
};
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 60px;
  .title {
    font-size: var(--font-size-text-lg);
    font-weight: 600;
    text-align: center;
    width: 100%;
    color: var(--text-primary);
  }
  .close {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    .iconfont {
      font-size: 20px;
      font-weight: normal;
      color: var(--icon-tertiary);
    }
  }
}

.list-container {
  display: flex;
  flex-direction: column;
  max-height: 300px;
  padding: 0 16px;
  overflow-y: auto;
  .list-item {
    padding: 16px 12px;
    border-radius: var(--md);
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.active {
      background: var(--bg-tertiary-hover);
    }
    .label {
      font-size: var(--font-size-text-base);
      color: var(--text-primary);
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .active-icon {
      font-size: 20px;
      color: var(--text-primary);
    }
  }
}
</style>
