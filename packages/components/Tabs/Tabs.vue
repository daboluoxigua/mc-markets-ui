<template>
  <div class="m-tabs" :class="{ 'style-solid': styleType === 'solid' }">
    <div class="m-tabs__header">
      <div class="m-tabs__nav" ref="navRef">
        <div
          v-for="(tab, index) in tabs"
          :key="tab.name"
          :class="[
            'm-tabs__item',
            { 'is-active': activeTab === tab.name }
          ]"
          @click="handleTabClick(tab.name)"
        >
          {{ tab.label }}
        </div>
        <div
          v-if="styleType !== 'solid'"
          class="m-tabs__active-bar"
          :style="activeBarStyle"
        ></div>
      </div>
    </div>
    <div class="m-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, nextTick, provide, watch } from 'vue'

export default {
  name: 'MTabs',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    styleType: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'solid'].includes(value)
    }
  },
  emits: ['update:modelValue', 'tab-click', 'tab-remove', 'tab-change', 'tab-add', 'edit'],
  setup(props, { emit }) {
    const navRef = ref(null)
    const tabs = ref([])
    const activeTab = ref(props.modelValue)

    // 活动条样式
    const activeBarStyle = ref({ width: '0px', left: '0px' })

    // 更新活动条位置
    const updateActiveBarPosition = () => {
      nextTick(() => {
        if (!navRef.value || tabs.value.length === 0) {
          activeBarStyle.value = { width: '0px', left: '0px' }
          return
        }

        const activeTabName = activeTab.value
        if (!activeTabName) {
          activeBarStyle.value = { width: '0px', left: '0px' }
          return
        }

        const activeIndex = tabs.value.findIndex(tab => tab.name === activeTabName)
        if (activeIndex === -1) {
          activeBarStyle.value = { width: '0px', left: '0px' }
          return
        }

        const navItems = navRef.value.querySelectorAll('.m-tabs__item')
        const activeItem = navItems[activeIndex]
        
        if (!activeItem) {
          activeBarStyle.value = { width: '0px', left: '0px' }
          return
        }

        // 计算居中位置：tab中心位置 - 8px（16px宽度的一半）
        const centerLeft = activeItem.offsetLeft + (activeItem.offsetWidth / 2) - 8

        activeBarStyle.value = {
          width: '16px',
          left: `${centerLeft}px`
        }
      })
    }

    // 处理tab点击
    const handleTabClick = (tabName) => {
      if (tabName === activeTab.value) return
      
      const oldValue = activeTab.value
      activeTab.value = tabName
      emit('update:modelValue', tabName)
      emit('tab-click', tabName)
      emit('tab-change', tabName, oldValue)
      updateActiveBarPosition()
    }

    // 处理tab关闭
    const handleTabRemove = (tabName) => {
      emit('tab-remove', tabName)
      emit('edit', tabName, 'remove')
    }

    // 处理tab添加
    const handleTabAdd = () => {
      emit('tab-add')
      emit('edit', null, 'add')
    }

    // 注册tab
    const registerTab = (tab) => {
      const index = tabs.value.findIndex(t => t.name === tab.name)
      if (index === -1) {
        tabs.value.push(tab)
      } else {
        tabs.value[index] = tab
      }
    }

    // 注销tab
    const unregisterTab = (tabName) => {
      const index = tabs.value.findIndex(t => t.name === tabName)
      if (index > -1) {
        tabs.value.splice(index, 1)
      }
    }

    // 提供给子组件的方法
    provide('tabsContext', {
      activeTab,
      registerTab,
      unregisterTab,
      handleTabRemove,
      handleTabAdd
    })

    // 监听modelValue变化
    watch(() => props.modelValue, (newValue, oldValue) => {
      if (newValue !== activeTab.value) {
        activeTab.value = newValue
        emit('tab-change', newValue, oldValue)
        updateActiveBarPosition()
      }
    })

    // 监听tabs变化
    watch(tabs, () => {
      updateActiveBarPosition()
    }, { deep: true })

    // 初始化时设置默认active tab
    onMounted(() => {
      if (!activeTab.value && tabs.value.length > 0) {
        const firstTab = tabs.value[0]
        activeTab.value = firstTab.name
        emit('update:modelValue', activeTab.value)
      }
      updateActiveBarPosition()
    })

    return {
      navRef,
      tabs,
      activeTab,
      activeBarStyle,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      registerTab,
      unregisterTab,
      updateActiveBarPosition
    }
  }
}
</script>

<style lang="scss" scoped>
.m-tabs {
  &__header {
    position: relative;
  }

  &__nav {
    position: relative;
    display: flex;
    border-bottom: 1px solid var(--border-primary);
  }

  &__item {
    position: relative;
    height: 24px;
    margin-right: 20px;
    margin-bottom: 6px;
    cursor: pointer;
    color: var(--text-tertiary);
    font-size: var(--font-size-text-base);
    transition: color 0.3s;
    user-select: none;
    font-weight: 600;

    &:hover {
      color: var(--text-brand);
    }

    &.is-active {
      color: var(--text-brand);
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__active-bar {
    position: absolute;
    bottom: 0;
    height: 3px;
    background-color: var(--text-brand);
    transition: all 0.3s;
    z-index: 1;
  }

  // solid 样式
  &.style-solid {
    .m-tabs__nav {
      border-bottom: none;
      background-color: var(--bg-tertiary-hover);
      border-radius: 8px;
      padding: 4px;
    }

    .m-tabs__item {
      height: 32px;
      margin-right: 0;
      margin-bottom: 0;
      padding: 0 16px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      transition: all 0.3s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      &.is-active {
        background-color: var(--bg-primary);
        color: var(--text-primary);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

</style>
