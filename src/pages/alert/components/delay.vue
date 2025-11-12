<demo>
## 延迟属性 2.10.0
</demo>
<!-- #region snippet -->
<template>
  <div class="example-alert-block">
    <div class="example-demonstration">在最后, 这是一个延迟属性的例子。</div>
    <div class="alert-demo-container">
      <m-alert
        title="Success alert that appearance after 5000 milliseconds"
        type="success"
        :show-after="5000"
        @open="handleOpen"
      />
      <m-alert
        title="Warning alert that disappear after 5000 milliseconds"
        type="warning"
        :hide-after="5000"
      />
      <m-alert
        title="Error alert that in 5000 milliseconds to be hidden"
        type="error"
        :closable="false"
        :auto-close="5000"
      />
    </div>
  </div>
</template>

<script setup>
const handleOpen = () => {
  console.log("open");
};
</script>
<!-- #endregion snippet -->

