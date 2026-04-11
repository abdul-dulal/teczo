<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { testimonials } from "@/demoData";
import shape from "@/assets/img/home/slider-shape.png";
import { ArrowLeft, ArrowRight } from "@lucide/vue";

const swiperRef = ref(null);
const activeIndex = ref(0);
const lastAction = ref("next");

// Start from middle
const middleIndex = Math.floor(testimonials.length / 2);
activeIndex.value = middleIndex;

const nextSlide = () => {
  if (activeIndex.value < testimonials.length - 1) {
    activeIndex.value++;
    lastAction.value = "next";
    swiperRef.value?.slideTo(activeIndex.value);
  }
};

const prevSlide = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
    lastAction.value = "prev";
    swiperRef.value?.slideTo(activeIndex.value);
  }
};

const goToSlide = (index) => {
  if (index !== activeIndex.value) {
    activeIndex.value = index;
    lastAction.value = null;
    swiperRef.value?.slideTo(index);
  }
};
</script>

<template>
  <div class="py-[140px] text-center relative overflow-hidden">
    <div class="flex justify-center items-center gap-3 mb-12">
      <img
        v-for="(item, index) in testimonials"
        :key="index"
        :src="item.img"
        @click="goToSlide(index)"
        class="rounded-full object-cover transition-all duration-300 cursor-pointer border-2 border-white"
        :class="
          index === activeIndex
            ? 'w-[180px] h-[180px] scale-110 z-10'
            : 'w-[150px] h-[150px] opacity-50'
        "
      />
    </div>

    <div class="relative max-w-[1100px] mx-auto px-12">
      <Swiper
        @swiper="(swiper) => (swiperRef = swiper)"
        :initial-slide="activeIndex"
        :allow-touch-move="false"
      >
        <SwiperSlide v-for="(item, index) in testimonials" :key="index">
          <h3 class="heading-three capitalize">
            {{ item.text }}
          </h3>

          <div class="mt-6">
            <p class="text-purple paragraph">{{ item.role }}</p>
            <h4 class="heading-four">
              {{ item.name }}
            </h4>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- PREV BUTTON (centered left) -->
      <button
        @click="prevSlide"
        :disabled="activeIndex === 0"
        class="absolute -left-20 -top-16 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-200 text-2xl font-bold z-10 cursor-pointer"
        :class="{
          'text-purple': !(activeIndex === 0) && lastAction === 'prev',
          'text-gray-400': activeIndex === 0,
          'text-gray-600': !(activeIndex === 0) && lastAction !== 'prev',
        }"
      >
        <ArrowLeft />
      </button>

      <button
        @click="nextSlide"
        :disabled="activeIndex === testimonials.length - 1"
        class="absolute -right-10 -top-16 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-200 font-bold z-10 cursor-pointer"
        :class="{
          'bg-purple text-white':
            !(activeIndex === testimonials.length - 1) && lastAction === 'next',

          'text-purple':
            !(activeIndex === testimonials.length - 1) && lastAction !== 'next',
        }"
      >
        <ArrowRight />
      </button>
    </div>

    <div class="absolute bottom-0 right-0">
      <img :src="shape" alt="Shape" />
    </div>
  </div>
</template>

<style scoped>
button:active {
  transform: scale(0.9);
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}
</style>
