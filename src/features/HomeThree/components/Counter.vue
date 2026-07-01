<script setup>
import { counterData } from "@/demoData";
</script>

<template>
  <div class="bg-purple py-[110px]">
    <div class="container">
      <div
        class="flex flex-wrap lg:gap-20 gap-6 sm:justify-between justify-center"
      >
        <div v-for="(counter, index) in counterData" :key="index">
          <div class="flex gap-[30px]">
            <div class="mt-5">
              <img :src="counter.img" :alt="counter.title" />
            </div>
            <div>
              <h2
                class="lg:text-[60px] md:text-[50px] sm:text-[40px] text-4xl font-bold text-white"
              >
                {{ counter.count }}
              </h2>
              <p class="heading-six text-white">{{ counter.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
