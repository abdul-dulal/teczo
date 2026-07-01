<script setup>
import { customerService } from "@/demoData";
import { ArrowRight } from "lucide-vue-next";
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

      <div
        class="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-[30px] lg:gap-y-0 gap-x-6 sm:gap-y-24 gap-y-28 pt-16"
      >
        <div
          v-for="(item, index) in customerService"
          :key="index"
          class="relative group"
        >
          <div
            class="size-[130px] rounded-full bg-transparent transition-all ease-in-out duration-500 absolute -top-16 left-10 border-10 border-white/10 group-hover:border-purple"
          >
            <div
              class="size-[110px] rounded-full bg-[#1B1F2E] group-hover:bg-white transition-all ease-in-out duration-500 absolute top-0 left-px flex items-center justify-center z-999"
            >
              <component
                :is="item.icon"
                class="text-secondary group-hover:text-black [&_*]:fill-current [&_*]:!fill-current transition duration-300 z-999"
              />
            </div>
          </div>

          <div class="relative rounded-[20px] overflow-hidden">
            <img :src="item.image" class="w-full h-full object-cover" alt="" />

            <!-- Gradient Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-b from-[#4BF0C5]/0 to-[#4BF0C5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            <!-- Title -->
            <div
              class="absolute bottom-[34px] left-[35px] right-[35px] flex items-center justify-between"
            >
              <h4
                class="heading-four text-white group-hover:text-black max-w-[139px] leading-[26px] transition-all duration-200"
              >
                {{ item.title }}
              </h4>

              <a
                href="/services"
                class="size-11 bg-bg rounded-full flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <arrow-right color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
