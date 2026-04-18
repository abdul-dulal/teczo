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

import shape01 from "@/assets/img/homeTwo/right-shape.png";
import shape02 from "@/assets/img/homeTwo/wave-shape.png";
import shape03 from "@/assets/img/homeTwo/color-shape.png";
import logo from "@/assets/img/logo/primary-logo.png";

import fb from "@/assets/img/homeTwo/fb.svg";
import linkedin from "@/assets/img/homeTwo/linkedin.svg";
import twitter from "@/assets/img/homeTwo/twitter.svg";
import Drawer from "@/components/common/header/Drawer.vue";
import { useRoute } from "vue-router";
import SearchPopup from "@/components/common/header/SearchPopup.vue";
import { ref } from "vue";
import { Search } from "lucide-vue-next";
import { menu } from "@/demoData";

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
const isSearchOpen = ref(false);
const route = useRoute();
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- :autoplay="{ delay: 4000 }" -->

    <Swiper
      :modules="[Autoplay, Pagination, EffectFade]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :pagination="{ clickable: true }"
      class="h-[900px]"
    >
      <SwiperSlide v-for="(slide, i) in slides" :key="i">
        <div
          class="relative h-[940px] bg-cover bg-center flex items-center"
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
    <div class="container absolute top-0 left-1/2 -translate-x-1/2 z-999">
      <div class="">
        <div class="flex">
          <div class="w-[220px] h-[130px] bg-white rounded-bl-[20px]">
            <div class="flex h-full items-center justify-center">
              <router-link to="/">
                <img :src="logo" alt="Logo" />
              </router-link>
            </div>
          </div>
          <div class="w-full">
            <div class="flex-1">
              <div class="relative h-10 w-[70%] bg-purple rounded-tr-[20px]">
                <div
                  class="absolute -left-5 top-0 h-10 w-10 bg-white skew-50 rotate-40"
                ></div>
                <div
                  class="h-full flex justify-between items-center pl-12 pr-[30px]"
                >
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
            <div
              class="flex items-center justify-between h-[90px] w-full bg-white pl-12 pr-[30px] rounded-r-full -ml-1"
            >
              <!-- MOBILE DRAWER -->
              <Drawer iconColor="black" />

              <!-- NAV -->
              <nav
                class="hidden lg:flex items-center gap-8 text-sm font-medium"
              >
                <div
                  v-for="item in menu"
                  :key="item.name"
                  class="relative group"
                >
                  <!-- MAIN MENU -->
                  <router-link
                    :to="item.path"
                    :class="[
                      route.path === item.path
                        ? 'text-purple-700'
                        : 'text-black',
                      'hover:text-purple-700 transition-colors text-lg font-medium leading-7',
                    ]"
                  >
                    {{ item.name }}
                  </router-link>

                  <!-- DROPDOWN -->
                  <div
                    v-if="item.children"
                    class="absolute left-0 top-full mt-3 w-52 bg-white shadow-lg rounded-lg opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-9999"
                  >
                    <router-link
                      v-for="child in item.children"
                      :key="child.name"
                      :to="child.path"
                      class="block px-4 py-2 text-lg font-medium text-black hover:bg-purple-100 hover:text-purple-700"
                    >
                      {{ child.name }}
                    </router-link>
                  </div>
                </div>
              </nav>
              <div class="flex gap-[30px]">
                <!-- SEARCH -->
                <button class="cursor-pointer" @click="isSearchOpen = true">
                  <Search />
                </button>
                <Button btnTitle="Contact Us" />
              </div>
            </div>
            <!-- SEARCH POPUP -->
          </div>
        </div>
      </div>
    </div>
    <SearchPopup v-model:searchPopup="isSearchOpen" />
    <div>
      <img
        :src="shape01"
        alt="Shape"
        class="absolute right-0 top-0 z-99 mix-blend-difference"
      />
    </div>
    <div class="absolute -right-2 top-[20%] z-99">
      <img :src="shape02" alt="Shape" />
    </div>
    <div class="absolute -right-3 top-[27%] z-99">
      <img :src="shape03" alt="Shape" />
    </div>
  </section>
</template>
