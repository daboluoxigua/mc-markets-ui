<template>
  <div class="table-page">
    <DemoSection :component="sections" />
  </div>
</template>

<script setup>
import DemoSection from "@/components/DemoSection.vue";

import TagButtonTable from "./components/tagButton.vue";
import StatusTable from "./components/status.vue";
import FixedHeaderTable from "./components/fixedHeader.vue";
import MultipleTable from "./components/multiple.vue";
import SortableTable from "./components/sortable.vue";
import FilterTable from "./components/filter.vue";
import CustomColumnTable from "./components/customColumn.vue";
import ExpandTable from "./components/expand.vue";

const sections = [
  TagButtonTable,
  StatusTable,
  FixedHeaderTable,
  MultipleTable,
  SortableTable,
  FilterTable,
  CustomColumnTable,
  ExpandTable,
];
</script>

<style scoped lang="scss">
.table-page {
  padding: 20px;
}
</style>

