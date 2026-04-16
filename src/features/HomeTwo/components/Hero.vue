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

import logo from "@/assets/img/logo/primary-logo.png";

import fb from "@/assets/img/homeTwo/fb.svg";
import linkedin from "@/assets/img/homeTwo/linkedin.svg";
import twitter from "@/assets/img/homeTwo/twitter.svg";

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
    <div class="container">
      <div class="bg-white">
        <div class="flex">
          <div class="w-[220px] h-[150px]">
            <div class="flex h-full items-center justify-center">
              <router-link to="/">
                <img :src="logo" alt="Logo" />
              </router-link>
            </div>
          </div>
          <div>
            <div class="flex-1 overflow-hidden">
              <div class="relative h-10 w-full bg-purple rounded-tr-[20px]">
                <div
                  class="absolute -left-5 top-0 h-10 w-10 bg-white skew-50 rotate-40"
                ></div>
                <div class="h-full flex items-center px-4">
                  <p class="text-sm font-medium text-white/60">
                    <span class="text-white">Address:</span> Broklen StreT, USA
                  </p>
                  <p class="text-sm font-medium text-white/60">
                    <span class="text-white">Phone:</span> +999 2456 4895
                  </p>
                  <div class="flex items-center gap-4">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      class="group text-white"
                    >
                      <component
                        :is="fb"
                        class="text-white [&_*]:fill-current group-hover:text-secondary transition duration-300"
                      />
                    </a>

                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      class="group text-white"
                    >
                      <component
                        :is="twitter"
                        class="text-white [&_*]:fill-current group-hover:text-secondary transition duration-300"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      class="group text-white"
                    >
                      <component
                        :is="linkedin"
                        class="text-white group-hover:text-secondary [&_*]:fill-current transition duration-300"
                      />
                    </a>

                    <a
                      href="https://x.com/"
                      target="_blank"
                      class="group text-white"
                    >
                      <component
                        :is="twitter"
                        class="text-white [&_*]:fill-current group-hover:text-secondary transition duration-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div><h1>hello</h1></div>
          </div>
        </div>
      </div>
    </div>
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
