<script setup>
import { techService } from "@/demoData";
</script>

<template>
  <div class="section-base">
    <div class="container">
      <div class="grid grid-cols-3 gap-[30px]">
        <div
          v-for="(item, index) in techService"
          :key="index"
          class="relative group"
        >
          <div
            class="size-[140px] flex items-center justify-center rounded-full bg-white absolute -bottom-[70px] left-1/2 -translate-x-1/2 z-999"
          >
            <div
              class="size-[100px] rounded-full bg-secondary transition-all ease-in-out duration-500 group-hover:bg-purple group-hover:text-secondary flex items-center justify-center z-10 heading-three font-inter font-semibold"
            >
              0{{ item.id }}
            </div>
          </div>
          <div
            class="relative rounded-[20px] w-full h-[400px] flex items-center justify-center overflow-hidden group"
            :style="{ backgroundImage: `url(${item.image})` }"
          >
            <!-- overlay -->
            <div
              class="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out"
            ></div>

            <!-- content -->
            <div class="relative z-10">
              <h4
                class="text-[30px] leading-[30px] font-bold text-white max-w-[139px] block m-auto text-center mb-6 group-hover:text-primary transition-all ease-in-out duration-500"
              >
                {{ item.title }}
              </h4>
              <p
                class="max-w-[304px] paragraph text-text text-center transition-all ease-in-out duration-500 group-hover:text-primary"
              >
                Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
                suscipit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
