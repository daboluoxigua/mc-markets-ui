/**
 * 样式工具函数
 * 用于确保组件样式完全覆盖 Element Plus
 */

/**
 * 为元素添加高优先级样式类
 * @param {HTMLElement} element - 目标元素
 */
export function addOverrideClass(element) {
  if (element && element.classList) {
    element.classList.add('mc-ui-override');
  }
}

/**
 * 为 Vue 组件实例添加覆盖样式
 * @param {Object} componentInstance - Vue 组件实例
 */
export function addComponentOverride(componentInstance) {
  if (componentInstance && componentInstance.$el) {
    addOverrideClass(componentInstance.$el);
  }
}

/**
 * 全局应用样式覆盖
 * 在应用启动时调用，确保所有 Element Plus 组件都被覆盖
 */
export function applyGlobalOverride() {
  // 为 body 添加覆盖类
  if (typeof document !== 'undefined') {
    document.body.classList.add('mc-ui-override');
    
    // 监听动态添加的 Element Plus 组件
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && node.classList) {
            // 为新添加的 Element Plus 组件添加覆盖类
            if (node.className && typeof node.className === 'string' && node.className.includes('el-')) {
              const parent = node.closest('.mc-ui-override') || node.parentElement;
              if (parent && !parent.classList.contains('mc-ui-override')) {
                parent.classList.add('mc-ui-override');
              }
            }
            
            // 检查子元素
            const elComponents = node.querySelectorAll('[class*="el-"]');
            elComponents.forEach(el => {
              const parent = el.closest('.mc-ui-override') || el.parentElement;
              if (parent && !parent.classList.contains('mc-ui-override')) {
                parent.classList.add('mc-ui-override');
              }
            });
          }
        });
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

/**
 * 启用或自动切换 H5 适配（为 html 添加 mc-h5 类）
 * @param {Object} options
 * @param {'auto'|'on'|'off'} [options.mode='auto'] - 自动/强开/关闭
 * @param {number} [options.breakpoint=768] - 视口断点（px）
 * @returns {() => void} 调用以移除监听并清理状态
 */
export function enableH5Override(options = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return () => {};

  const {
    mode = 'auto',
    breakpoint = 768,
  } = options;

  const root = document.documentElement;

  const isMobileUA = () => /Mobi|Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const isNarrow = () => window.innerWidth <= breakpoint;

  const apply = (enable) => {
    if (enable) {
      root.classList.add('mc-h5');
    } else {
      root.classList.remove('mc-h5');
    }
  };

  if (mode === 'on') {
    apply(true);
    return () => { root.classList.remove('mc-h5'); };
  }

  if (mode === 'off') {
    apply(false);
    return () => {};
  }

  // auto 模式：依据 UA 或断点
  const compute = () => apply(isMobileUA() || isNarrow());
  compute();

  const onResize = () => compute();
  window.addEventListener('resize', onResize, { passive: true });

  return () => {
    window.removeEventListener('resize', onResize);
  };
}

/**
 * 强制刷新组件样式
 * @param {string} selector - CSS 选择器
 */
export function forceRefreshStyles(selector = '[class*="el-"]') {
  if (typeof document !== 'undefined') {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const parent = el.closest('.mc-ui-override') || el.parentElement;
      if (parent && !parent.classList.contains('mc-ui-override')) {
        parent.classList.add('mc-ui-override');
      }
    });
  }
}

/**
 * 创建带有样式覆盖的 Element Plus 组件配置
 * @param {Object} componentConfig - 组件配置
 * @returns {Object} 增强后的组件配置
 */
export function createOverrideComponent(componentConfig) {
  return {
    ...componentConfig,
    mounted() {
      addOverrideClass(this.$el);
      if (componentConfig.mounted) {
        componentConfig.mounted.call(this);
      }
    },
    updated() {
      addOverrideClass(this.$el);
      if (componentConfig.updated) {
        componentConfig.updated.call(this);
      }
    }
  };
}
