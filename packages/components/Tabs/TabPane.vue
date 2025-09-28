<template>
  <div
    v-show="isActive"
    class="m-tab-pane"
    :class="{ 'is-active': isActive }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { inject, computed, onMounted, onUnmounted } from 'vue'

export default {
  name: 'MTabPane',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const tabsContext = inject('tabsContext')
    
    // 计算tab名称，如果没有提供name则使用label
    const tabName = computed(() => {
      return props.name || props.label
    })

    // 计算是否激活
    const isActive = computed(() => {
      return tabsContext.activeTab.value === tabName.value
    })

    // 组件挂载时注册tab
    onMounted(() => {
      const tabInfo = {
        label: props.label,
        name: tabName.value,
        disabled: props.disabled,
        closable: props.closable
      }
      tabsContext.registerTab(tabInfo)
    })

    // 组件卸载时注销tab
    onUnmounted(() => {
      tabsContext.unregisterTab(tabName.value)
    })

    return {
      isActive,
      tabName
    }
  }
}
</script>

<style lang="scss" scoped>
.m-tab-pane {
  display: none;

  &.is-active {
    display: block;
  }
}
</style>
