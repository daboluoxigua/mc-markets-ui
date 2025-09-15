<template>
  <el-checkbox-button 
    v-bind="$attrs" 
    class="m-checkbox-button"
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]>
      <slot :name="name" />
    </template>
  </el-checkbox-button>
</template>

<script setup>
defineOptions({
  name: 'MCheckboxButton',
  inheritAttrs: false
})

defineProps({
  modelValue: {
    type: [Boolean, String, Number, Array],
    default: false
  }
})

defineEmits(['update:model-value'])
</script>
