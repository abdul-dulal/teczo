<script setup>
import { webServices } from "@/demoData";
</script>
<template>
  <section class="section-base bg-bg">
    <div class="container">
      <div class="max-w-[549px] block mx-auto">
        <h6 class="heading-six text-secondary mb-5 text-center">
          What We Solved For You
        </h6>
        <h2 class="heading-one text-white text-center mb-11">
          Help you overcome your technology challenge
        </h2>
      </div>
      <div class="grid grid-cols-6 gap-[30px]">
        <div
          v-for="(item, index) in webServices"
          :key="index"
          class="w-full h-[260px] border hover:bg-secondary transition-all ease-in-out duration-500 border-white/15 rounded-[20px] py-10 flex flex-col items-center justify-between group"
        >
          <component
            :is="item.icon"
            class="text-secondary group-hover:text-primary [&_*]:fill-current [&_*]:!fill-current transition-all ease-in-out duration-500"
          />
          <h6
            class="heading-six font-bold text-white group-hover:text-primary transition-all ease-in-out duration-500"
          >
            {{ item.name }}
          </h6>
        </div>
      </div>
    </div>
  </section>
</template>
