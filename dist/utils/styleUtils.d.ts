/**
 * 样式工具函数
 * 用于确保组件样式完全覆盖 Element Plus
 */
/**
 * 为元素添加高优先级样式类
 * @param {HTMLElement} element - 目标元素
 */
export function addOverrideClass(element: HTMLElement): void;
/**
 * 为 Vue 组件实例添加覆盖样式
 * @param {Object} componentInstance - Vue 组件实例
 */
export function addComponentOverride(componentInstance: any): void;
/**
 * 全局应用样式覆盖
 * 在应用启动时调用，确保所有 Element Plus 组件都被覆盖
 */
export function applyGlobalOverride(): void;
/**
 * 强制刷新组件样式
 * @param {string} selector - CSS 选择器
 */
export function forceRefreshStyles(selector?: string): void;
/**
 * 创建带有样式覆盖的 Element Plus 组件配置
 * @param {Object} componentConfig - 组件配置
 * @returns {Object} 增强后的组件配置
 */
export function createOverrideComponent(componentConfig: any): any;
//# sourceMappingURL=styleUtils.d.ts.map