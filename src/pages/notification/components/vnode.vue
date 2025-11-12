<demo>
## 函数形式的 message 2.9.0
</demo>
<!-- #region snippet -->
<template>
  <div class="doc-grid">
    <div class="doc-item">
      <m-button plain @click="openVNode">Common VNode</m-button>
      <span>Common VNode</span>
    </div>
    <div class="doc-item">
      <m-button plain @click="openVNodeDynamic">Dynamic props</m-button>
      <span>Dynamic Props</span>
    </div>
  </div>
</template>

<script setup>
import { ref, h } from "vue";
import { ElNotification } from "element-plus";

const openVNode = () => {
  ElNotification({
    title: "Use Vnode",
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};

const openVNodeDynamic = () => {
  const checked = ref(false);
  ElNotification({
    title: "Use Vnode",
    message: () =>
      h("div", null, [
        h("span", null, "Dynamic content: "),
        h("strong", null, checked.value ? "Checked" : "Unchecked"),
      ]),
  });
};
</script>
<!-- #endregion snippet -->

