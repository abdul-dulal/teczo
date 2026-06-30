<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import team01 from "@/assets/img/homeTwo/tm-01.png";
import team02 from "@/assets/img/homeTwo/tm-02.png";
import team03 from "@/assets/img/homeTwo/tm-03.png";
import Button from "@/components/base/Button.vue";

const slides = [
  {
    title: "Tech Solution",
    subtitle: "Design / Idea",
    image: team01,
  },
  {
    title: "Software Development",
    subtitle: "Development",
    image: team02,
  },
  {
    title: "AI Solution",
    subtitle: "Testing / Launch",
    image: team03,
  },
  {
    title: "AI Automation",
    subtitle: "Maintenance",
    image: team02,
  },
  {
    title: "Tech Solution",
    subtitle: "Design / Idea",
    image: team01,
  },
  {
    title: "Software Development",
    subtitle: "Development",
    image: team02,
  },
  {
    title: "AI Solution",
    subtitle: "Testing / Launch",
    image: team03,
  },
  {
    title: "AI Automation",
    subtitle: "Maintenance",
    image: team02,
  },
];
</script>

<template>
  <div class="pt-[120px] bg-bg overflow-hidden">
    <div class="container">
      <div class="flex flex-wrap items-center justify-between">
        <div>
          <h6 class="heading-six text-secondary md:mb-[25px] mb-4">
            Our latest projects
          </h6>
          <h2 class="heading-one text-white max-w-[492px] md:mb-10 mb-5">
            Improve and enhance the tech projects
          </h2>
        </div>
        <Button
          btnTitle="View All Project"
          class="bg-transparent text-white border border-white/15 md:mb-0 mb-5"
        />
      </div>
      <div class="relative ml-0 w-[calc(100vw-10px)] mr-10 overflow-visible">
        <Swiper
          :modules="[Autoplay]"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 4000 }"
          :breakpoints="{
            // 640: { slidesPerView: 1 },
            440: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }"
          class="w-full"
        >
          <SwiperSlide v-for="(item, i) in slides" :key="i">
            <div
              class="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <!-- Background Image -->
              <img :src="item.image" class="w-full h-full object-cover" />

              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"
              ></div>

              <!-- Hover Overlay (Green like middle card) -->
              <div
                class="absolute inset-0 bg-teal-400/80 opacity-0 group-hover:opacity-100 duration-500 transition-all ease-in-out"
              ></div>

              <!-- Content -->
              <div
                class="absolute bottom-5 left-10 text-white z-10 transition-all duration-500 ease-in-out"
              >
                <p class="paragraph text-white group-hover:text-primary">
                  {{ item.subtitle }}
                </p>
                <h4 class="heading-four text-white group-hover:text-primary">
                  {{ item.title }}
                </h4>
              </div>

              <!-- Arrow Button -->
              <button
                class="absolute top-4 right-4 size-[60px] flex items-center justify-center rounded-full bg-purple-600 text-white opacity-0 group-hover:opacity-100 transition"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 17L17 1"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H17V17"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>
