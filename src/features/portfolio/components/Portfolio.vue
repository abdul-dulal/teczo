<script setup>
import { portfolioData } from "@/demoData";
import shape from "@/assets/img/portfolio/shape.png";
import { ArrowUpRight } from "lucide-vue-next";
defineProps({
  showgap: { type: Boolean, default: true },
  sliceNumber: { type: Number, default: 3 },
});
</script>
<template>
  <section :class="showgap ? 'section-base' : ''">
    <div class="container">
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px]">
        <div
          v-for="(item, index) in portfolioData.slice(0, sliceNumber)"
          :key="index"
          class="relative h-full w-full overflow-hidden"
        >
          <div
            class="group relative overflow-hidden after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-0 after:z-1 after:opacity-0 after:invisible after:transition-all after:ease-in-out after:duration-300 after:rounded-[20px] after:bg-[linear-gradient(180deg,rgba(108,51,217,0)_0%,#6C33D9_100%)] hover:after:h-full hover:after:opacity-[1] hover:after:visible"
          >
            <img
              :src="item.img"
              :alt="item.title"
              class="w-full rounded-[20px]"
            />
            <div
              :style="{ width: 'calc(100% - 30px)' }"
              class="absolute left-[15px] bottom-0 z-2 bg-white rounded-[5px] pl-5 invisible opacity-0 h-[90px] transition-all duration-300 ease-in-out group-hover:visible group-hover:bottom-4 group-hover:opacity-[1] group-hover:delay-[0.4s]"
            >
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-base text-text font-medium">
                    {{ item.tech }}
                  </p>
                  <h5 class="text-[22px] mb-0 text-primary font-bold">
                    {{ item.title }}
                  </h5>
                </div>
                <div class="relative">
                  <img :src="shape" alt="shape" class="ml-1" />
                  <button
                    class="size-10 absolute top-5 right-5 flex items-center justify-center rounded-full bg-purple"
                  >
                    <ArrowUpRight color="white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
