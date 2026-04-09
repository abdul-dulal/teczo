<script setup>
import cn from "@/utils/cn";
import { ArrowUpRight } from "@lucide/vue";

const props = defineProps({
  class: String,
  btnTitle: String,
});
</script>

<template>
  <div class="flex items-center gap-0">
    <button
      :class="
        cn(
          'flex items-center',
          'bg-purple text-white',
          'xl:text-base text-sm',
          'leading-7 font-medium',
          'xl:px-[30px] px-5',
          'xl:py-3 py-2.5',
          'rounded-full cursor-pointer',
          props.class,
        )
      "
    >
      {{ btnTitle }}
    </button>

    <button
      :class="
        cn(
          'size-[52px] rounded-full bg-purple sm:flex hidden items-center justify-center text-white cursor-pointer',
          props.class,
        )
      "
    >
      <ArrowUpRight />
    </button>
  </div>
</template>
