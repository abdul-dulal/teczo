<script setup>
import { customerService } from "@/demoData";
</script>

<template>
  <div class="section-base bg-bg">
    <div class="container">
      <h6 class="heading-six mb-5 text-secondary text-center">Our service</h6>
      <h2
        class="heading-one max-w-[651px] mx-auto text-center text-white mb-10"
      >
        Service we are always try to provide our customers
      </h2>

      <div class="grid grid-cols-3 gap-[30px]">
        <div
          v-for="(item, index) in customerService"
          :key="index"
          class="relative"
        >
          <div
            class="size-[120px] rounded-full bg-[#1B1F2E] absolute -top-16 left-10 flex items-center justify-center border-10 border-white/10 z-10"
          >
            <component
              :is="item.icon"
              class="text-secondary group-hover:text-secondary [&_*]:fill-current [&_*]:!fill-current transition duration-300"
            />
          </div>
          <div class="bg-gradient-to-b from-[#4BF0C5]/0 to-[#4BF0C5] z-9999">
            <img
              :src="item.image"
              class="w-full h-full object-cover rounded-[20px]"
            />
            <h4
              class="heading-four text-white max-w-[139px] absolute bottom-[34px] left-[35px]"
            >
              {{ item.title }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
