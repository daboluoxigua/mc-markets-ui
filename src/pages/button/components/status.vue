<demo>
## 按钮状态
</demo>
<!-- #region snippet -->
<template>
    <m-button type="primary" disabled>禁用状态</m-button>
    <m-button type="primary" :loading="loading" @click="handleLoading">
      {{ loading ? "加载中..." : "点击加载" }}
    </m-button>
    <m-button :disabled="disabled" @click="handleDisabled">
      {{ disabled ? "已禁用" : "可点击" }}
    </m-button>
    <m-button plain>朴素按钮</m-button>
    <m-button round>圆角按钮</m-button>
    <m-button circle>
      <m-icon name="search" />
    </m-button>
</template>
<script setup>
import { MButton } from '@mc-markets/ui'
import { ref } from 'vue'
const loading = ref(false)
const disabled = ref(false)
const handleLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
const handleDisabled = () => {
  disabled.value = !disabled.value
}
</script>
<style scoped>

</style>
<!-- #endregion snippet -->