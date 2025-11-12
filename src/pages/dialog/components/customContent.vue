<demo>
## 自定义内容
</demo>
<!-- #region snippet -->
<template>
  <div class="example-dialog-block">
    <div class="example-demonstration">
      对话框的内容可以是任何东西，甚至是一个表格或表单。此示例展示如何在 Dialog
      中使用表格和表单。
    </div>
    <div class="dialog-demo-container">
      <div class="flex flex-wrap gap-1">
        <m-button class="ml-0" plain @click="dialogTableVisible = true">
          Open a Table nested Dialog
        </m-button>
        <m-button class="ml-0" plain @click="dialogFormVisible = true">
          Open a Form nested Dialog
        </m-button>
      </div>

      <m-dialog v-model="dialogTableVisible" title="Shipping address" width="800">
        <m-table :data="gridData">
          <m-table-column property="date" label="Date" width="150" />
          <m-table-column property="name" label="Name" width="200" />
          <m-table-column property="address" label="Address" />
        </m-table>
      </m-dialog>

      <m-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
        <m-form :model="form">
          <m-form-item label="Promotion name" :label-width="formLabelWidth">
            <m-input v-model="form.name" autocomplete="off" />
          </m-form-item>
          <m-form-item label="Zones" :label-width="formLabelWidth">
            <m-select v-model="form.region" placeholder="Please select a zone">
              <m-option label="Zone No.1" value="shanghai" />
              <m-option label="Zone No.2" value="beijing" />
            </m-select>
          </m-form-item>
        </m-form>
        <template #footer>
          <div class="dialog-footer">
            <m-button @click="dialogFormVisible = false">Cancel</m-button>
            <m-button type="primary" @click="dialogFormVisible = false">Confirm</m-button>
          </div>
        </template>
      </m-dialog>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";

const form = reactive({
  name: "",
  region: "",
});

const gridData = [
  {
    date: "2016-05-02",
    name: "John Smith",
    address: "No.1518, Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-04",
    name: "John Smith",
    address: "No.1518, Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-01",
    name: "John Smith",
    address: "No.1518, Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-03",
    name: "John Smith",
    address: "No.1518, Jinshajiang Road, Putuo District",
  },
];
</script>
<!-- #endregion snippet -->

