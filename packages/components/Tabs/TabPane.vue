<template>
  <div
    v-show="isActive"
    class="m-tab-pane"
    :class="{ 'is-active': isActive }"
    :data-tab-name="tabName"
  >
    <slot></slot>
  </div>
</template>

<script>
import { inject, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'

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

    // 注册tab的函数
    const doRegisterTab = () => {
      const tabInfo = {
        label: props.label,
        name: tabName.value,
        disabled: props.disabled,
        closable: props.closable
      }
      tabsContext.registerTab(tabInfo)
    }
    
    // 组件挂载时注册tab
    onMounted(() => {
      doRegisterTab()
    })

    // 监听props变化，立即更新tab信息并重新排序（不使用防抖，确保立即响应）
    watch(() => [props.label, props.name, props.disabled, props.closable], (newVal, oldVal) => {
      // 只在首次渲染后或值真正改变时触发
      if (!oldVal || newVal[0] !== oldVal[0] || newVal[1] !== oldVal[1] || 
          newVal[2] !== oldVal[2] || newVal[3] !== oldVal[3]) {
        // 立即注册，不使用防抖，确保顺序正确
        doRegisterTab()
      }
    }, { immediate: false })

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
