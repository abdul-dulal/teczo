<script setup>
import { counterData } from "@/demoData";
</script>

<template>
  <div class="bg-purple py-[110px]">
    <div class="container">
      <div class="grid grid-cols-4 gap-[101px]">
        <div v-for="(counter, index) in counterData" :key="index">
          <div class="flex gap-[30px]">
            <div class="mt-5">
              <img :src="counter.img" :alt="counter.title" />
            </div>
            <div>
              <h2 class="text-[60px] font-bold text-white">
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
