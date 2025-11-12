<demo>
## 自定义图标
</demo>
<!-- #region snippet -->
<template>
  <div class="example-alert-block">
    <div class="example-demonstration">
      默认情况下，Alert 组件使用自定义图标替代 Element Plus 默认图标。你可以通过 use-custom-icon 属性控制是否使用自定义图标。
    </div>
    <div class="alert-demo-container">
      <div class="alert-demo-row">
        <div class="alert-demo-column">
          <h4>自定义图标 (默认)</h4>
          <m-alert title="Success alert" type="success" show-icon />
          <m-alert title="Warning alert" type="warning" show-icon />
          <m-alert title="Error alert" type="error" show-icon />
        </div>
        <div class="alert-demo-column">
          <h4>Element Plus 默认图标</h4>
          <m-alert title="Success alert" type="success" show-icon :use-custom-icon="false" />
          <m-alert title="Warning alert" type="warning" show-icon :use-custom-icon="false" />
          <m-alert title="Error alert" type="error" show-icon :use-custom-icon="false" />
        </div>
      </div>
    </div>
  </div>
</template>
<!-- #endregion snippet -->

