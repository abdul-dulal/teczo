<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import banner from "@/assets/img/homeThree/banner.png";

import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-vue-next";
import { projectSlides } from "@/demoData";
import VideoModal from "@/features/home/components/VideoModal.vue";

let showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <section class="relative bg-bg text-white py-16 overflow-hidden">
    <div class="container">
      <div>
        <h6 class="heading-six text-secondary mb-5">Our Latest Projects</h6>
        <h2 class="heading-one text-white max-w-[490px] mb-10">
          Improve and Enhance the Tech Projects
        </h2>

        <div class="relative max-w-[870px]">
          <Swiper
            :modules="[Navigation]"
            :slides-per-view="2"
            :space-between="10"
            :loop="true"
            :navigation="{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }"
            class=""
          >
            <SwiperSlide v-for="(item, i) in projectSlides" :key="i">
              <div class="rounded-[20px]">
                <img :src="item.image" class="" />

                <div class="flex justify-center">
                  <div
                    class="p-4 w-[85%] relative -top-28 bg-white rounded-[10px] text-black flex justify-between items-center"
                  >
                    <div>
                      <p class="text-xs text-gray-400">{{ item.design }}</p>
                      <h5 class="heading-five text-primary">
                        {{ item.title }}
                      </h5>
                    </div>
                    <button
                      class="size-10 bg-purple rounded-full flex items-center justify-center"
                    >
                      <ArrowUpRight color="white" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="absolute top-0 right-0">
        <img
          :src="banner"
          alt="Banner"
          class="block w-full h-full object-cover"
        />

        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <!-- Circle -->
          <div
            class="relative w-[200px] h-[200px] rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center"
          >
            <!-- Rotating Text -->
            <div
              class="absolute w-full h-full p-2 animate-spin-slow pointer-events-none"
            >
              <svg viewBox="0 0 200 200" class="w-full h-full">
                <path
                  id="circlePath"
                  d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                  fill="none"
                />
                <text fill="white" font-size="18" letter-spacing="3">
                  <textPath href="#circlePath">
                    INTRO - PLAY - VIDEO - INTRO - PLAY - VIDEO
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <!-- BUTTON (outside blur container) -->
          <button
            class="absolute w-[60px] h-[60px] bg-white text-black cursor-pointer z-9999 pointer-events-auto rounded-full flex items-center justify-center shadow-lg"
            @click="openModal"
          >
            ▶
          </button>
        </div>

        <div
          class="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,31,46,0)_0%,#1B1F2E_100%)]"
        ></div>
      </div>
      <VideoModal :showModal="showModal" @closeModal="closeModal" />
      <div class="flex absolute right-0 bottom-0">
        <div class="flex gap-2.5 z-10 bg-secondary p-10">
          <button
            class="prev-btn size-[60px] border border-primary rounded-full flex items-center justify-center cursor-pointer"
          >
            <ArrowLeft color="black" />
          </button>
          <button
            class="next-btn size-[60px] bg-black rounded-full flex items-center justify-center cursor-pointer"
          >
            <ArrowRight />
          </button>
        </div>
        <button
          class="bg-purple w-[407px] h-[140px] paragraph font-medium text-white cursor-pointer"
        >
          View all Projects
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spinSlow 12s linear infinite;
}
</style>
