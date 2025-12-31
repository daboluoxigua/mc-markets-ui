import { ref, onUnmounted, nextTick } from "vue";

/**
 * 表格列宽度计算 Hook
 * 使用虚拟DOM模拟不换行状态，计算表格每列的最大宽度
 * 
 * @param {Object} options - 配置选项
 * @param {number} options.cellPadding - 单元格左右间距，默认16px（左右各8px）
 * @param {number} options.minWidth - 列最小宽度，默认80px
 * @param {number} options.delay - 延迟时间（ms），确保表格完全渲染，默认200ms
 * @returns {Object} 返回列宽度相关的响应式数据和方法
 */
export function useTableColumnWidth(options = {}) {
  const { cellPadding = 16, minWidth = 80, delay = 200 } = options;

  // 存储每列的最小宽度（从虚拟DOM测量得到）
  const columnMinWidths = ref([]);

  // 虚拟DOM容器
  let virtualContainer = null;

  // 初始化虚拟DOM容器
  const initVirtualContainer = () => {
    if (virtualContainer) {
      return virtualContainer;
    }

    virtualContainer = document.createElement("div");
    virtualContainer.style.position = "absolute";
    virtualContainer.style.visibility = "hidden";
    virtualContainer.style.top = "-9999px";
    virtualContainer.style.left = "-9999px";
    virtualContainer.style.width = "auto";
    virtualContainer.style.height = "auto";
    virtualContainer.style.overflow = "visible";
    virtualContainer.style.whiteSpace = "nowrap";
    document.body.appendChild(virtualContainer);

    return virtualContainer;
  };

  // 清理虚拟DOM容器
  const cleanupVirtualContainer = () => {
    if (virtualContainer && virtualContainer.parentNode) {
      virtualContainer.parentNode.removeChild(virtualContainer);
      virtualContainer = null;
    }
  };

  // 复制元素及其样式到虚拟DOM
  const cloneElementWithStyles = (element, options = {}) => {
    if (!element) return null;

    const clone = element.cloneNode(true);
    const computedStyle = window.getComputedStyle(element);

    // 复制所有计算样式
    const styleProps = [
      "fontFamily",
      "fontSize",
      "fontWeight",
      "fontStyle",
      "letterSpacing",
      "textTransform",
      "lineHeight",
      "padding",
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "margin",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "border",
      "borderLeft",
      "borderRight",
      "borderTop",
      "borderBottom",
      "borderWidth",
      "borderLeftWidth",
      "borderRightWidth",
      "borderTopWidth",
      "borderBottomWidth",
      "boxSizing",
      "display",
      "whiteSpace",
    ];

    styleProps.forEach((prop) => {
      try {
        // 使用getPropertyValue获取CSS属性值
        let value = computedStyle.getPropertyValue(prop);
        // 如果getPropertyValue返回空，尝试使用驼峰命名
        if (!value) {
          const camelProp = prop.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          value = computedStyle[camelProp] || computedStyle[prop];
        }
        if (value && value !== "none" && value !== "normal") {
          clone.style[prop] = value;
        }
      } catch (e) {
        // 忽略无法设置的样式
      }
    });

    // 如果指定了不换行，强制设置
    if (options.noWrap) {
      clone.style.whiteSpace = "nowrap";
      clone.style.overflow = "visible";
      clone.style.width = "auto";
      clone.style.maxWidth = "none";
    }

    // 复制类名
    clone.className = element.className;

    return clone;
  };

  // 使用虚拟DOM测量元素在不换行状态下的宽度
  const measureNoWrapWidth = (element) => {
    if (!element) return { width: 0, height: 0 };

    const container = initVirtualContainer();

    // 克隆元素并设置不换行
    const clone = cloneElementWithStyles(element, { noWrap: true });

    // 添加到虚拟容器
    container.appendChild(clone);

    // 测量宽度
    const rect = clone.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // 清理
    container.removeChild(clone);

    return { width, height };
  };

  // 获取单元格内容（包括标签和按钮）在不换行状态下的宽度
  const getCellNoWrapWidth = (cellElement) => {
    if (!cellElement) return 0;

    const container = initVirtualContainer();

    // 克隆整个单元格
    const cellClone = cloneElementWithStyles(cellElement, { noWrap: true });

    // 处理单元格内的所有子元素，确保它们也不换行
    const tagElements = cellClone.querySelectorAll(".m-tag, .el-tag");
    const buttonElements = cellClone.querySelectorAll(".m-button, .el-button");

    // 设置标签和按钮不换行
    tagElements.forEach((tag) => {
      tag.style.whiteSpace = "nowrap";
      tag.style.overflow = "visible";
      tag.style.width = "auto";
      tag.style.maxWidth = "none";
    });

    buttonElements.forEach((btn) => {
      btn.style.whiteSpace = "nowrap";
      btn.style.overflow = "visible";
      btn.style.width = "auto";
      btn.style.maxWidth = "none";
      // 确保按钮的display属性保持为inline-block或inline，以便正确测量
      const computedDisplay = window.getComputedStyle(btn).display;
      if (computedDisplay === "block") {
        btn.style.display = "inline-block";
      }
    });

    // 确保单元格本身也不换行，并且是inline-block以便正确测量
    cellClone.style.display = "inline-block";
    cellClone.style.whiteSpace = "nowrap";
    cellClone.style.overflow = "visible";
    cellClone.style.width = "auto";
    cellClone.style.maxWidth = "none";

    // 添加到虚拟容器
    container.appendChild(cellClone);

    // 测量宽度
    const rect = cellClone.getBoundingClientRect();
    const width = rect.width;

    // 清理
    container.removeChild(cellClone);

    return width;
  };

  // 获取表格所有单元格的渲染元数据（使用虚拟DOM模拟不换行状态）
  const getTableRenderMetadata = (tableRef) => {
    if (!tableRef || !tableRef.value) {
      console.warn("表格引用不存在");
      return null;
    }

    // 获取el-table的DOM元素
    const tableEl = tableRef.value.$el || tableRef.value;
    if (!tableEl) {
      console.warn("无法获取表格DOM元素");
      return null;
    }

    // 查找所有表格单元格（包括固定列）
    const bodyCells = tableEl.querySelectorAll(
      ".el-table__body-wrapper .el-table__body tbody tr td, " +
        ".el-table__fixed-right .el-table__fixed-body-wrapper tbody tr td, " +
        ".el-table__fixed-left .el-table__fixed-body-wrapper tbody tr td"
    );
    const headerCells = tableEl.querySelectorAll(
      ".el-table__header-wrapper thead tr th, " +
        ".el-table__fixed-right .el-table__fixed-header-wrapper thead tr th, " +
        ".el-table__fixed-left .el-table__fixed-header-wrapper thead tr th"
    );

    const metadata = {
      table: {
        element: tableEl,
        position: tableEl.getBoundingClientRect(),
      },
      headers: [],
      body: [],
      columnMaxWidths: [], // 每列的最大宽度（不换行状态）
    };

    // 初始化列宽数组
    const maxColumnWidths = [];
    const maxHeaderWidths = [];

    // 处理表头
    headerCells.forEach((cell, index) => {
      const actualWidth = cell.getBoundingClientRect().width;
      const noWrapWidth = getCellNoWrapWidth(cell);

      maxHeaderWidths[index] = Math.max(maxHeaderWidths[index] || 0, noWrapWidth);

      metadata.headers.push({
        columnIndex: index,
        actualWidth,
        noWrapWidth,
        text: cell.innerText || cell.textContent || "",
      });
    });

    // 处理表格体
    let rowIndex = 0;
    let currentRow = null;
    const cellMetadataMap = {};

    bodyCells.forEach((cell, index) => {
      const row = cell.closest("tr");
      if (row !== currentRow) {
        currentRow = row;
        rowIndex = Array.from(row.parentElement.children).indexOf(row);
      }

      // 获取列索引，需要考虑固定列的情况
      let columnIndex = Array.from(row.children).indexOf(cell);

      // 如果是固定列，需要从主表格获取正确的列索引
      const isFixedColumn =
        cell.closest(".el-table__fixed-right") ||
        cell.closest(".el-table__fixed-left");
      if (isFixedColumn) {
        // 查找主表格中对应的行和列
        const mainTableBody = tableEl.querySelector(
          ".el-table__body-wrapper .el-table__body tbody"
        );
        if (mainTableBody && mainTableBody.children[rowIndex]) {
          const mainRow = mainTableBody.children[rowIndex];
          const cellContent = (cell.textContent || cell.innerText || "").trim();
          const mainRowCells = Array.from(mainRow.children);

          // 如果是操作列（最后一列），直接使用最后一列的索引
          if (
            cellContent.includes("查看") ||
            cellContent.includes("编辑") ||
            cellContent.includes("删除")
          ) {
            columnIndex = mainRowCells.length - 1;
          } else {
            // 尝试通过内容匹配
            const matchingIndex = mainRowCells.findIndex((mainCell) => {
              return (
                (mainCell.textContent || mainCell.innerText || "").trim() ===
                cellContent
              );
            });
            if (matchingIndex !== -1) {
              columnIndex = matchingIndex;
            } else {
              // 如果找不到匹配，使用固定列在固定区域中的位置
              columnIndex = mainRowCells.length - 1;
            }
          }
        }
      }

      // 获取实际宽度和不换行宽度
      const actualWidth = cell.getBoundingClientRect().width;
      const noWrapWidth = getCellNoWrapWidth(cell);

      // 更新列最大宽度
      maxColumnWidths[columnIndex] = Math.max(
        maxColumnWidths[columnIndex] || 0,
        noWrapWidth
      );

      // 获取单元格内的标签和按钮信息
      const tagElements = cell.querySelectorAll(".m-tag, .el-tag");
      const buttonElements = cell.querySelectorAll(".m-button, .el-button");

      const tags = [];
      tagElements.forEach((tagEl, tagIdx) => {
        const actualTagWidth = tagEl.getBoundingClientRect().width;
        const noWrapTagWidth = measureNoWrapWidth(tagEl).width;

        tags.push({
          index: tagIdx,
          text: tagEl.innerText || tagEl.textContent || "",
          actualWidth: actualTagWidth,
          noWrapWidth: noWrapTagWidth,
          isWrapped: actualTagWidth < noWrapTagWidth * 0.95, // 允许5%误差
        });
      });

      const buttons = [];
      buttonElements.forEach((btnEl, btnIdx) => {
        const actualBtnWidth = btnEl.getBoundingClientRect().width;
        const noWrapBtnWidth = measureNoWrapWidth(btnEl).width;

        buttons.push({
          index: btnIdx,
          text: btnEl.innerText || btnEl.textContent || "",
          actualWidth: actualBtnWidth,
          noWrapWidth: noWrapBtnWidth,
        });
      });

      if (!cellMetadataMap[rowIndex]) {
        cellMetadataMap[rowIndex] = [];
      }

      cellMetadataMap[rowIndex][columnIndex] = {
        rowIndex,
        columnIndex,
        actualWidth,
        noWrapWidth,
        text: cell.innerText || cell.textContent || "",
        tags,
        buttons,
      };
    });

    // 计算每列的最大宽度（表头和数据行的最大值）
    maxColumnWidths.forEach((width, index) => {
      const headerWidth = maxHeaderWidths[index] || 0;
      metadata.columnMaxWidths[index] = Math.max(width, headerWidth);
    });

    // 填充表头宽度（如果某些列没有数据）
    maxHeaderWidths.forEach((width, index) => {
      if (!metadata.columnMaxWidths[index]) {
        metadata.columnMaxWidths[index] = width;
      }
    });

    // 转换cellMetadataMap为数组格式
    Object.keys(cellMetadataMap).forEach((rowIdx) => {
      metadata.body[parseInt(rowIdx)] = cellMetadataMap[rowIdx];
    });

    return metadata;
  };

  // 计算并应用列宽度
  const calculateColumnWidths = (tableRef, callback) => {
    nextTick(() => {
      initVirtualContainer();
      // 延迟一下确保表格完全渲染
      setTimeout(() => {
        const metadata = getTableRenderMetadata(tableRef);
        if (metadata) {
          console.log("表格渲染元数据（虚拟DOM模拟不换行）:", metadata);
          console.log("每列最大宽度（不换行状态）:", metadata.columnMaxWidths);

          // 设置列最小宽度，确保每列最小宽度为指定值
          // 单元格左右间距需要集成到宽度计算中
          columnMinWidths.value = metadata.columnMaxWidths.map((width) =>
            Math.max(Math.ceil((width || 0) + cellPadding), minWidth)
          );

          // 执行回调函数
          if (callback && typeof callback === "function") {
            callback(metadata);
          }
        }
      }, delay);
    });
  };

  // 组件卸载时清理虚拟DOM
  onUnmounted(() => {
    cleanupVirtualContainer();
  });

  return {
    columnMinWidths,
    getTableRenderMetadata,
    getCellNoWrapWidth,
    measureNoWrapWidth,
    calculateColumnWidths,
  };
}

