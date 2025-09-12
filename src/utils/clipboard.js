/**
 * 剪贴板工具函数
 */

/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @param {Object} options - 选项
 * @param {Function} options.onSuccess - 成功回调
 * @param {Function} options.onError - 错误回调
 * @returns {Promise<boolean>} 是否复制成功
 */
export async function copyToClipboard(text, options = {}) {
  const { onSuccess, onError } = options;
  
  try {
    // 优先使用现代 Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      onSuccess?.(text);
      return true;
    } else {
      // 降级方案：使用传统方法
      return fallbackCopyTextToClipboard(text, onSuccess, onError);
    }
  } catch (err) {
    // 如果现代 API 失败，使用降级方案
    return fallbackCopyTextToClipboard(text, onSuccess, onError);
  }
}

/**
 * 降级复制方案
 * @param {string} text - 要复制的文本
 * @param {Function} onSuccess - 成功回调
 * @param {Function} onError - 错误回调
 * @returns {boolean} 是否复制成功
 */
function fallbackCopyTextToClipboard(text, onSuccess, onError) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // 避免滚动到底部
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    if (successful) {
      onSuccess?.(text);
      return true;
    } else {
      onError?.(new Error('复制失败'));
      return false;
    }
  } catch (err) {
    onError?.(err);
    return false;
  }
}

/**
 * 复制文本并显示提示消息
 * @param {string} text - 要复制的文本
 * @param {Object} options - 选项
 * @param {string} options.successMessage - 成功消息模板，默认 "已复制: {text}"
 * @param {number} options.duration - 提示显示时长（毫秒），默认 2000
 * @param {Function} options.onMessage - 消息回调函数
 * @returns {Promise<boolean>} 是否复制成功
 */
export async function copyWithMessage(text, options = {}) {
  const { 
    successMessage = `已复制: ${text}`, 
    duration = 2000, 
    onMessage 
  } = options;
  
  const success = await copyToClipboard(text, {
    onSuccess: () => {
      onMessage?.(successMessage);
      if (duration > 0) {
        setTimeout(() => {
          onMessage?.('');
        }, duration);
      }
    },
    onError: (err) => {
      console.error('复制失败:', err);
      onMessage?.(`复制失败: ${err.message}`);
      if (duration > 0) {
        setTimeout(() => {
          onMessage?.('');
        }, duration);
      }
    }
  });
  
  return success;
}
