<template>
  <div class="form-page">
    <DemoSection :component="sections" />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";

import BasicForm from "./components/basic.vue";
import InlineForm from "./components/inline.vue";
import AlignmentForm from "./components/alignment.vue";
import ValidationForm from "./components/validation.vue";
import CustomRulesForm from "./components/customRules.vue";
import SizeForm from "./components/size.vue";

const sections = [
  BasicForm,
  InlineForm,
  AlignmentForm,
  ValidationForm,
  CustomRulesForm,
  SizeForm,
];
</script>

<style scoped lang="scss">
.form-page {
  padding: 20px;
}
</style>

