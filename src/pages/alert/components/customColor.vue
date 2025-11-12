<demo>
## 自定义颜色
</demo>
<!-- #region snippet -->
<template>
  <div class="example-alert-block">
    <div class="example-demonstration">
      不同类型的 Alert 使用不同的背景色和文字颜色，提供更好的视觉区分。
    </div>
    <div class="alert-demo-container">
      <div class="color-demo-grid">
        <div class="color-demo-item">
          <m-alert
            title="Success Alert"
            type="success"
            description="背景色: all-green-10, 文字色: all-green-4"
          />
          <div class="color-info">
            <span class="color-label">Success</span>
            <div class="color-details">
              <div class="color-bg" style="background-color: var(--all-green-10)"></div>
              <div class="color-text" style="color: var(--all-green-4)">all-green-4</div>
            </div>
          </div>
        </div>
        <div class="color-demo-item">
          <m-alert
            title="Warning Alert"
            type="warning"
            description="背景色: all-orange-10, 文字色: text-warning-primary"
          />
          <div class="color-info">
            <span class="color-label">Warning</span>
            <div class="color-details">
              <div class="color-bg" style="background-color: var(--all-orange-10)"></div>
              <div class="color-text" style="color: var(--text-warning-primary)">
                text-warning-primary
              </div>
            </div>
          </div>
        </div>
        <div class="color-demo-item">
          <m-alert
            title="Error Alert"
            type="error"
            description="背景色: all-red-10, 文字色: text-error-primary"
          />
          <div class="color-info">
            <span class="color-label">Error</span>
            <div class="color-details">
              <div class="color-bg" style="background-color: var(--all-red-10)"></div>
              <div class="color-text" style="color: var(--text-error-primary)">
                text-error-primary
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- #endregion snippet -->

