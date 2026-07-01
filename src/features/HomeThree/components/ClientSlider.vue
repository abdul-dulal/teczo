<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const logos = [
  "/src/assets/img/homeThree/c01.png",
  "/src/assets/img/homeThree/c02.png",
  "/src/assets/img/homeThree/c03.png",
  "/src/assets/img/homeThree/c04.png",
  "/src/assets/img/homeThree/c05.png",
  "/src/assets/img/homeThree/c01.png",
  "/src/assets/img/homeThree/c02.png",
  "/src/assets/img/homeThree/c03.png",
  "/src/assets/img/homeThree/c04.png",
  "/src/assets/img/homeThree/c05.png",
];
</script>
<template>
  <div class="pb-20">
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="5"
      :space-between="170"
      :loop="true"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }"
      :speed="3000"
      :breakpoints="{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }"
      class="container"
    >
      <SwiperSlide v-for="(logo, index) in logos" :key="index">
        <div class="">
          <img :src="logo" class="h-full object-contain" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style>
.swiper-wrapper {
  transition-timing-function: linear !important;
}
</style>
