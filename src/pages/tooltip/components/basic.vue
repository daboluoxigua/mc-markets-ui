<demo>
## 基础用法
</demo>
<!-- #region snippet -->
<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <m-button>top-start</m-button>
      </m-tooltip>
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <m-button>top</m-button>
      </m-tooltip>
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <m-button>top-end</m-button>
      </m-tooltip>
    </div>
    <div class="row">
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <m-button>left-start</m-button>
      </m-tooltip>
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <m-button>right-start</m-button>
      </m-tooltip>
    </div>
    <div class="row">
      <m-tooltip class="box-item" effect="dark" content="Left Center prompts info" placement="left">
        <m-button class="mt-3 mb-3">left</m-button>
      </m-tooltip>
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <m-button>right</m-button>
      </m-tooltip>
    </div>
    <div class="row">
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <m-button>left-end</m-button>
      </m-tooltip>
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <m-button>right-end</m-button>
      </m-tooltip>
    </div>
    <div class="row center">
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <m-button>bottom-start</m-button>
      </m-tooltip>
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <m-button>bottom</m-button>
      </m-tooltip>
      <m-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <m-button>bottom-end</m-button>
      </m-tooltip>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tooltip-base-box {
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;

  &.center {
    justify-content: center;
  }
}

.box-item {
  flex: 1;
  text-align: center;
}

.mt-3 {
  margin-top: 12px;
}

.mb-3 {
  margin-bottom: 12px;
}
</style>
<!-- #endregion snippet -->

