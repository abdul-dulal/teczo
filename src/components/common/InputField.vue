<script setup>
import cn from "@/utils/cn";

defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  class: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    :type="type"
    :placeholder="placeholder"
    :class="
      cn(
        'w-full rounded-[10px] border border-primary bg-transparent px-[30px] py-6 outline-none placeholder:text-primary',
      )
    "
  />
</template>
