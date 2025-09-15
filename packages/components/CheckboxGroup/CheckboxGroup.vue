<template>
  <el-checkbox-group 
    v-bind="$attrs" 
    class="m-checkbox-group"
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-checkbox-group>
</template>

<script setup>
defineOptions({
  name: 'MCheckboxGroup',
  inheritAttrs: false
})

defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
})

defineEmits(['update:model-value'])
</script>
