<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import slider01 from "@/assets/img/homeThree/slider-01.png";
import slider02 from "@/assets/img/homeThree/slider-02.png";
import slider03 from "@/assets/img/homeThree/slider-03.png";
import wave from "@/assets/img/homeThree/wave.png";

import Button from "@/components/base/Button.vue";

const modules = [Pagination];

const paginationRef = ref(null);
const swiperRef = ref(null);

const slides = [
  {
    title: "The best innovative technology solutions",
    desc: "We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.",
    image: slider01,
  },
  {
    title: "Grow Your Business Organic & IT Solution Technology",
    desc: "We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.",
    image: slider02,
  },
  {
    title: "We Provide Smart IT Solutions",
    desc: "We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.",
    image: slider03,
  },
];
</script>

<template>
  <div class="relative 2xl:h-[960px] md:h-[700px] h-[500px] overflow-hidden">
    <Swiper
      ref="swiperRef"
      :direction="'vertical'"
      :modules="modules"
      :pagination="{ clickable: true }"
      class="h-full hero-swiper"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="i">
        <div
          class="relative lg:h-[960px] md:h-[700px] h-[500px] bg-cover bg-center flex items-center bg-no-repeat"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="absolute inset-0 bg-primary/65"></div>

          <div
            class="container relative z-10 text-white flex items-center w-full h-full justify-center"
          >
            <div class="max-w-[792px] text-center">
              <h1
                class="lg:text-[70px] md:text-[50px] sm:text-5xl text-3xl lg:leading-[74px] md:leading-[50px] leading-10 font-bold"
              >
                {{ slide.title }}
              </h1>

              <p
                class="heading-six font-normal mt-8 max-w-[650px] mx-auto font-inter"
              >
                {{ slide.desc }}
              </p>

              <div class="flex items-center justify-center gap-4 mt-6">
                <Button
                  btnTitle="Read More"
                  class="bg-secondary text-primary"
                />
              </div>
            </div>
          </div>
          <div class="absolute -right-5 top-0 z-99 2xl:block hidden">
            <img :src="wave" alt="Wave" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div
      ref="paginationRef"
      class="custom-pagination absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10"
    ></div>
  </div>
</template>
