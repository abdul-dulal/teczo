<script setup>
import { ourClients } from "@/demoData";
import { ArrowRight } from "@lucide/vue";
</script>

<template>
  <section class="section-base">
    <div class="container">
      <div class="max-w-[523px] mx-auto text-center">
        <h6 class="heading-six mb-5">Best technology agency</h6>
        <h2 class="heading-one mb-10">
          We provide our clients best IT services
        </h2>
      </div>

      <div class="px-7 grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        <div
          v-for="(service, index) in ourClients"
          :key="index"
          class="group bg-white rounded-[20px] border border-gray-200 px-6 pb-6 pt-10 transition-all duration-500 ease-in-out relative"
        >
          <p
            class="text-sm text-gray-400 font-medium absolute -top-3 left-10 px-2 bg-white z-99"
          >
            Service {{ service.id }}
          </p>

          <div class="flex flex-col items-center text-center space-y-6">
            <div
              class="size-[100px] flex items-center justify-center rounded-[10px] group-hover:bg-purple bg-secondary"
            >
              <component
                :is="service.icon"
                class="text-primary group-hover:text-secondary [&_*]:fill-current [&_*]:!fill-current transition duration-300"
              />
            </div>

            <h4 class="heading-four font-bold text-primary">
              {{ service.title }}
            </h4>

            <p class="heading-six font-normal text-text">
              Growth marketing is a marketing strategy that uses data and
              experimentation to help a business grow by acquiring
            </p>
          </div>

          <button
            class="flex justify-between items-center px-[25px] mt-10 h-[52px] rounded-[10px] border border-primary/10 w-full group-hover:bg-purple group-hover:text-white text-base font-medium transition-all duration-500 ease-in-out"
          >
            Read More
            <span> <arrow-right /></span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
