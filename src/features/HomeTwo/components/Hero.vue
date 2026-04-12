<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import slider01 from "@/assets/img/homeTwo/heroslider.png";
import slider02 from "@/assets/img/homeTwo/heroslider02.png";
import slider03 from "@/assets/img/homeTwo/heroslider03.png";
import Button from "@/components/base/Button.vue";

const slides = [
  {
    title: "Grow Your Business Organic & IT Solution Technology",
    subtitle: "Best Technology Agency",
    desc: "In today’s competitive business, the demand for efficient and cost-effective IT solutions has never been more critical.",
    image: slider01,
  },
  {
    title: "We Provide Smart IT Solutions",
    subtitle: "Digital Agency",
    desc: "Transform your business with modern and scalable digital services.",
    image: slider02,
  },
  {
    title: "We Provide Smart IT Solutions",
    subtitle: "Digital Agency",
    desc: "Transform your business with modern and scalable digital services.",
    image: slider03,
  },
];
</script>

<template>
  <section class="relative">
    <!-- :autoplay="{ delay: 4000 }" -->
    <Swiper
      :modules="[Autoplay, Pagination, EffectFade]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :pagination="{ clickable: true }"
      class="h-[600px]"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="i">
        <div
          class="relative h-[600px] bg-cover bg-center flex items-center"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <!-- Dark Overlay -->
          <div
            class="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,31,46,0.95)_25%,rgba(27,31,46,0.3325)_100%)]"
          ></div>

          <!-- Content -->
          <div class="container relative z-10 text-white">
            <p class="text-secondary heading-six font-bold mb-7">
              {{ slide.subtitle }}
            </p>

            <h1 class="text-[70px] leading-[74px] font-bold max-w-[700px]">
              {{ slide.title }}
            </h1>

            <p class="heading-six font-normal max-w-[670px] mt-8">
              {{ slide.desc }}
            </p>

            <div class="flex items-center gap-4 mt-6">
              <Button btnTitle="Read More" class="bg-secondary text-primary" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
