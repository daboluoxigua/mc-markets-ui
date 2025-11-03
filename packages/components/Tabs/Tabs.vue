<template>
  <div class="m-tabs" :class="{ 'style-solid': styleType === 'solid' }">
    <div class="m-tabs__header-wrapper">

      <i
        v-if="showLeftArrow"
        class="m-tabs__arrow m-tabs__arrow--left iconfont icon-chevron-left"
        @click="handleScrollLeft"
      />
      <div class="m-tabs__header" ref="headerRef" @scroll="handleScroll">
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
      <i
        v-if="showRightArrow"
        class="m-tabs__arrow m-tabs__arrow--right iconfont icon-chevron-right"
        @click="handleScrollRight"
      />
    </div>
    <div class="m-tabs__content" ref="contentRef" :key="internalKey">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted, onUnmounted, nextTick, provide, watch } from 'vue'
import { isH5 } from '../../utils/styleUtils.js'

// 常量定义
const CONSTANTS = {
  // 滚动相关
  SCROLL_RATIO: 0.8, // 滚动比例
  SCROLL_MARGIN: 20, // 滚动边距
  EDGE_THRESHOLD_RATIO: 0.3, // 边缘阈值比例
  SCROLL_MIN_DIFF: 10, // 最小滚动差值（避免抖动）
  SCROLL_PRECISION: 0.5, // 滚动精度阈值
  
  // 定时器延迟
  SORT_DELAY: 10, // 排序延迟
  RESET_DELAY: 100, // 重置延迟
  SCROLL_DEBOUNCE: 150, // 滚动防抖时间
  SCROLL_ANIMATION: 400, // 滚动动画时间
  INIT_DELAY: 50, // 初始化延迟
  
  // ActiveBar 相关
  ACTIVE_BAR_WIDTH: 16, // 活动条宽度
  ACTIVE_BAR_OFFSET: 8, // 活动条偏移量
  H5_POSITION_TOLERANCE: 1 // H5 位置容差
}

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
  setup(props, { emit, slots }) {
    const navRef = ref(null)
    const headerRef = ref(null)
    const contentRef = ref(null)
    const tabs = ref([])
    const activeTab = ref(props.modelValue)
    const internalKey = ref(0) // 内部key，用于强制重新渲染slot内容
    const previousTabsCount = ref(0) // 上一次tabs的数量
    const previousTabsNames = ref([]) // 上一次tabs的name列表
    
    // 箭头显示控制
    const showLeftArrow = ref(false)
    const showRightArrow = ref(false)

    // 活动条样式
    const activeBarStyle = ref({ width: '0px', left: '0px' })
    
    // 定时器和状态管理
    let sortTimer = null
    let rafId = null
    let scrollTimeout = null
    let isManualScroll = false
    let isResetting = false
    let resizeObserver = null

    // 重置活动条样式
    const resetActiveBarStyle = () => {
      activeBarStyle.value = { width: '0px', left: '0px' }
    }

    // 获取活动项的精确位置
    const getActiveItemPosition = (activeItem) => {
      let itemLeft = activeItem.offsetLeft
      
      // 在 H5 环境下，使用更精确的位置计算
      if (isH5()) {
        const navStyle = window.getComputedStyle(navRef.value)
        const actualNavPaddingLeft = parseFloat(navStyle.paddingLeft) || 0
        
        // 如果位置差异超过容差，使用 getBoundingClientRect 重新计算
        if (Math.abs(itemLeft - actualNavPaddingLeft) > CONSTANTS.H5_POSITION_TOLERANCE) {
          const navRect = navRef.value.getBoundingClientRect()
          const itemRect = activeItem.getBoundingClientRect()
          itemLeft = itemRect.left - navRect.left
        }
      }
      
      return itemLeft
    }

    // 更新活动条位置
    const updateActiveBarPosition = (shouldScroll = true) => {
      nextTick(() => {
        // 提前退出条件检查
        if (!navRef.value || tabs.value.length === 0 || !activeTab.value) {
          resetActiveBarStyle()
          return
        }

        const activeIndex = tabs.value.findIndex(tab => tab.name === activeTab.value)
        if (activeIndex === -1) {
          resetActiveBarStyle()
          return
        }

        const navItems = navRef.value.querySelectorAll('.m-tabs__item')
        const activeItem = navItems[activeIndex]
        
        if (!activeItem) {
          resetActiveBarStyle()
          return
        }

        // 计算活动条位置
        const itemLeft = getActiveItemPosition(activeItem)
        const centerLeft = itemLeft + (activeItem.offsetWidth / 2) - CONSTANTS.ACTIVE_BAR_OFFSET

        activeBarStyle.value = {
          width: `${CONSTANTS.ACTIVE_BAR_WIDTH}px`,
          left: `${centerLeft}px`
        }

        // 滚动到活动tab可见区域（只在应该滚动时执行）
        if (shouldScroll) {
          scrollToActiveTab(activeItem)
        }
      })
    }

    // 滚动到活动tab
    const scrollToActiveTab = (activeItem) => {
      if (!headerRef.value || !activeItem) return

      const header = headerRef.value
      const headerWidth = header.clientWidth
      const headerScrollLeft = header.scrollLeft
      
      const itemLeft = activeItem.offsetLeft
      const itemWidth = activeItem.offsetWidth
      const itemRight = itemLeft + itemWidth

      if (isH5()) {
        // H5 环境：让标签中心对齐到可视区域中心
        const itemCenter = itemLeft + itemWidth / 2
        const navWidth = navRef.value.scrollWidth
        const maxScrollLeft = Math.max(0, navWidth - headerWidth)
        
        let targetScrollLeft = itemCenter - headerWidth / 2
        targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft))
        
        // 检查是否需要滚动
        const itemVisibleLeft = itemLeft - headerScrollLeft
        const itemVisibleRight = itemRight - headerScrollLeft
        const isItemInView = itemVisibleLeft >= 0 && itemVisibleRight <= headerWidth
        
        const edgeThreshold = headerWidth * CONSTANTS.EDGE_THRESHOLD_RATIO
        const isInLeftEdge = itemVisibleLeft >= 0 && itemVisibleLeft < edgeThreshold
        const isInRightEdge = itemVisibleRight > headerWidth - edgeThreshold && itemVisibleRight <= headerWidth
        
        const shouldScroll = !isItemInView || isInLeftEdge || isInRightEdge
        const scrollDiff = Math.abs(headerScrollLeft - targetScrollLeft)
        
        if (shouldScroll && scrollDiff > CONSTANTS.SCROLL_MIN_DIFF) {
          header.scrollTo({ left: targetScrollLeft, behavior: 'smooth' })
        }
      } else {
        // 非H5环境：保持原有逻辑
        if (itemLeft < headerScrollLeft) {
          header.scrollTo({
            left: itemLeft - CONSTANTS.SCROLL_MARGIN,
            behavior: 'smooth'
          })
        } else if (itemRight > headerScrollLeft + headerWidth) {
          header.scrollTo({
            left: itemRight - headerWidth + CONSTANTS.SCROLL_MARGIN,
            behavior: 'smooth'
          })
        }
      }
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

    // 更新UI状态
    const updateUIState = () => {
      if (tabs.value.length > 0) {
        if (activeTab.value) {
          updateActiveBarPosition()
        }
        updateArrowVisibility()
      }
    }

    // 注册tab
    const registerTab = (tab) => {
      const index = tabs.value.findIndex(t => t.name === tab.name)
      
      if (index === -1) {
        tabs.value.push(tab)
      } else {
        tabs.value[index] = tab
      }
      
      // 延迟排序，等待DOM更新完成
      if (sortTimer) {
        clearTimeout(sortTimer)
      }
      
      sortTimer = setTimeout(() => {
        nextTick(() => {
          sortTabsByDOMOrder()
          updateUIState()
        })
      }, CONSTANTS.SORT_DELAY)
    }
    
    // 按照DOM顺序排序tabs
    const sortTabsByDOMOrder = () => {
      if (!contentRef.value || tabs.value.length === 0) return
      
      const paneElements = contentRef.value.querySelectorAll('.m-tab-pane')
      if (paneElements.length === 0 || paneElements.length !== tabs.value.length) return
      
      // 从DOM元素中读取data-name属性，获取DOM中的顺序
      const domOrder = []
      paneElements.forEach((el) => {
        const name = el.getAttribute('data-tab-name')
        if (name) {
          domOrder.push(name)
        }
      })
      
      if (domOrder.length === 0 || domOrder.length !== tabs.value.length) return
      
      // 检查当前顺序是否与DOM顺序一致
      const currentOrder = tabs.value.map(t => String(t.name))
      const isOrderSame = currentOrder.length === domOrder.length && 
        currentOrder.every((name, index) => name === String(domOrder[index]))
      
      if (!isOrderSame) {
        // DOM顺序与tabs顺序不一致，按照DOM顺序重新排序
        const tabMap = new Map(tabs.value.map(t => [String(t.name), t]))
        const sortedTabs = []
        
        domOrder.forEach(name => {
          const tab = tabMap.get(String(name))
          if (tab) {
            sortedTabs.push(tab)
          }
        })
        
        // 确保所有tabs都被包含（处理新增的情况）
        tabs.value.forEach(tab => {
          if (!sortedTabs.find(t => t.name === tab.name)) {
            sortedTabs.push(tab)
          }
        })
        
        // 只有当数量一致时才更新
        if (sortedTabs.length === tabs.value.length) {
          tabs.value.splice(0, tabs.value.length, ...sortedTabs)
          updateActiveBarPosition()
        }
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

    // 检测tabs列表是否发生变化
    const detectTabsChange = (newTabs) => {
      if (previousTabsCount.value === 0) return false
      
      const newCount = newTabs.length
      const newNames = newTabs.map(t => String(t.name))
      
      const isCountChanged = newCount !== previousTabsCount.value
      const isOrderChanged = newCount === previousTabsCount.value && 
        newNames.some((name, index) => 
          index >= previousTabsNames.value.length || name !== previousTabsNames.value[index])
      
      return isCountChanged || isOrderChanged
    }

    // 处理tabs列表切换
    const handleTabsListChange = () => {
      internalKey.value++
      isResetting = true
      
      nextTick(() => {
        setTimeout(() => {
          sortTabsByDOMOrder()
          
          if (tabs.value.length > 0) {
            previousTabsCount.value = tabs.value.length
            previousTabsNames.value = tabs.value.map(t => String(t.name))
            updateUIState()
          }
          
          isResetting = false
        }, CONSTANTS.RESET_DELAY)
      })
    }

    // 监听tabs变化（用于更新UI和检测列表切换）
    watch(tabs, (newTabs) => {
      if (isResetting || newTabs.length === 0) return
      
      // 检测到列表切换时，强制重新渲染
      if (detectTabsChange(newTabs)) {
        handleTabsListChange()
        return
      }
      
      // 更新记录和UI
      previousTabsCount.value = newTabs.length
      previousTabsNames.value = newTabs.map(t => String(t.name))
      updateUIState()
    }, { deep: true })

    // 更新箭头可见性
    const updateArrowVisibility = () => {
      if (!headerRef.value || !navRef.value) return
      
      const header = headerRef.value
      const nav = navRef.value
      const currentScrollLeft = header.scrollLeft
      const scrollWidth = nav.scrollWidth
      const clientWidth = header.clientWidth
      
      // 检查是否需要显示箭头（内容宽度大于容器宽度）
      const needsScroll = scrollWidth > clientWidth
      
      if (!needsScroll) {
        showLeftArrow.value = false
        showRightArrow.value = false
        return
      }
      
      // 计算最大滚动距离和箭头可见性
      const maxScrollLeft = Math.max(0, scrollWidth - clientWidth)
      
      // 使用精度阈值处理浮点数精度问题
      showLeftArrow.value = currentScrollLeft > CONSTANTS.SCROLL_PRECISION
      showRightArrow.value = currentScrollLeft < maxScrollLeft - CONSTANTS.SCROLL_PRECISION
    }

    // 清理滚动相关的定时器
    const clearScrollTimers = () => {
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
        scrollTimeout = null
      }
    }

    // 滚动事件处理（防抖优化）
    const handleScroll = () => {
      updateArrowVisibility()
      
      // 非手动滚动时更新 activeBar 位置（但不自动滚动）
      if (!isManualScroll) {
        updateActiveBarPosition(false)
      }
      
      // 使用 requestAnimationFrame 优化更新
      clearScrollTimers()
      
      rafId = requestAnimationFrame(() => {
        updateArrowVisibility()
        rafId = null
      })
      
      // 滚动停止后再次检查
      scrollTimeout = setTimeout(() => {
        updateArrowVisibility()
        if (isManualScroll) {
          isManualScroll = false
        }
        scrollTimeout = null
      }, CONSTANTS.SCROLL_DEBOUNCE)
    }

    // 执行滚动动画
    const performScroll = (direction) => {
      if (!headerRef.value) return
      
      isManualScroll = true
      const scrollAmount = headerRef.value.clientWidth * CONSTANTS.SCROLL_RATIO
      headerRef.value.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      
      // 滚动完成后更新状态
      setTimeout(() => {
        updateArrowVisibility()
        isManualScroll = false
      }, CONSTANTS.SCROLL_ANIMATION)
    }

    // 向左滚动
    const handleScrollLeft = () => {
      performScroll('left')
    }

    // 向右滚动
    const handleScrollRight = () => {
      performScroll('right')
    }

    // 初始化默认active tab
    const initDefaultActiveTab = () => {
      if (!activeTab.value && tabs.value.length > 0) {
        const firstTab = tabs.value[0]
        activeTab.value = firstTab.name
        emit('update:modelValue', activeTab.value)
      }
    }

    // 初始化时设置默认active tab
    onMounted(() => {
      // 初始化记录
      previousTabsCount.value = tabs.value.length
      previousTabsNames.value = tabs.value.map(t => String(t.name))
      
      initDefaultActiveTab()
      updateActiveBarPosition()
      
      // 延迟更新，确保样式完全应用（特别是 H5 样式）
      setTimeout(() => {
        updateActiveBarPosition()
      }, CONSTANTS.INIT_DELAY)
      
      // 使用 requestAnimationFrame 确保在样式渲染后更新
      requestAnimationFrame(() => {
        setTimeout(() => {
          updateActiveBarPosition()
        }, CONSTANTS.INIT_DELAY)
      })
      
      // 初始化箭头可见性
      nextTick(() => {
        updateArrowVisibility()
      })
      
      // 监听窗口大小变化和tabs变化
      if (headerRef.value && navRef.value) {
        resizeObserver = new ResizeObserver(() => {
          updateArrowVisibility()
          updateActiveBarPosition(false)
        })
        resizeObserver.observe(headerRef.value)
        resizeObserver.observe(navRef.value)
      }
    })

    // 清理所有定时器和观察器
    onUnmounted(() => {
      if (sortTimer) {
        clearTimeout(sortTimer)
        sortTimer = null
      }
      
      clearScrollTimers()
      
      if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
      }
    })

    return {
      navRef,
      headerRef,
      contentRef,
      tabs,
      activeTab,
      activeBarStyle,
      showLeftArrow,
      showRightArrow,
      internalKey,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      registerTab,
      unregisterTab,
      updateActiveBarPosition,
      updateArrowVisibility,
      handleScroll,
      handleScrollLeft,
      handleScrollRight
    }
  }
}
</script>

<style lang="scss" scoped>
.m-tabs {
  &__header-wrapper {
    position: relative;
    display: flex;
    align-items: stretch;
    border-bottom: 1px solid var(--border-primary);
  }

  &__header {
    flex: 1;
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    
    // 完全隐藏滚动条（但保持滚动功能）
    scrollbar-width: none; // Firefox
    -ms-overflow-style: none; // IE 和 Edge
    
    &::-webkit-scrollbar {
      display: none; // Chrome, Safari, Opera
    }

    // 使用 CSS transition 实现平滑滚动
    scroll-behavior: smooth;
  }

  &__nav {
    position: relative;
    display: inline-flex;
    white-space: nowrap;
    padding: 0 16px;
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

  &__arrow {
    flex-shrink: 0;
    width: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    color: var(--text-primary);
    font-size: 24px;
    transition: opacity 0.3s, background-color 0.3s;
    user-select: none;
    z-index: 1;

    &:hover {
      opacity: 0.8;
      background-color: var(--bg-secondary);
    }

    &:active {
      opacity: 0.6;
    }
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

.mc-h5{
  .m-tabs{
    .m-tabs__item {
      font-size: var(--font-size-text-sm);
      margin-right: 16px;
      
      // 移动端禁用 hover 效果
      &:hover {
        color: var(--text-tertiary);
      }
      
      &.is-active:hover {
        color: var(--text-brand);
      }
    }
    .m-tabs__nav {
      padding:0 10px;
    }
    // 移动端隐藏箭头按钮
    .m-tabs__arrow {
      display: none;
    }
  }
}
</style>
