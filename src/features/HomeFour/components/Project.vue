<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import p01 from "@/assets/img/homeFour/p01.png";
import p02 from "@/assets/img/homeFour/p02.png";
import p03 from "@/assets/img/homeFour/p03.png";
import { ArrowRight } from "lucide-vue-next";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    image: p01,
    tag: "Development",
    title: "Product Development",
    desc: "Growth marketing is a marketing strategy that uses data experimentation...",
  },
  {
    image: p02,
    tag: "Design",
    title: "UI/UX Design",
    desc: "Design systems help teams build consistent and scalable products.",
  },
  {
    image: p03,
    tag: "Technology",
    title: "AI Solutions",
    desc: "Artificial intelligence helps automate workflows and decision making.",
  },
  {
    image: p01,
    tag: "Development",
    title: "Product Development",
    desc: "Growth marketing is a marketing strategy that uses data experimentation...",
  },
  {
    image: p02,
    tag: "Design",
    title: "UI/UX Design",
    desc: "Design systems help teams build consistent and scalable products.",
  },
  {
    image: p03,
    tag: "Technology",
    title: "AI Solutions",
    desc: "Artificial intelligence helps automate workflows and decision making.",
  },
];
</script>
<template>
  <section class="2xl:pt-[120px] md:pt-20 pt-[60px]">
    <div class="max-w-[583px] block m-auto">
      <h6 class="heading-six text-purple text-center">
        Check Our Latest Projects
      </h6>
      <h2 class="heading-one text-center">
        Improve and enhance our tech projects
      </h2>
    </div>

    <div class="w-full">
      <Swiper
        :autoplay="{ delay: 3000 }"
        :modules="[Autoplay]"
        :slides-per-view="3"
        :space-between="24"
        :loop="true"
        :breakpoints="{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
        class="w-full"
      >
        <SwiperSlide v-for="(item, index) in slides" :key="index">
          <div class="group relative overflow-hidden">
            <img :src="item.image" class="w-full rounded-[14px] object-cover" />

            <div class="w-[85%] absolute right-0 bottom-0">
              <div
                class="bg-[#F7F7F9] rounded-tl-[20px] p-10 flex items-center justify-between shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ease-in-out duration-500"
              >
                <div class="relative">
                  <div class="flex gap-[30px] items-center">
                    <div class="mt-1">
                      <button
                        class="text-xs text-gray-400 border px-2 py-1 rounded"
                      >
                        {{ item.tag }}
                      </button>
                    </div>
                    <h5 class="heading-five text-primary">
                      {{ item.title }}
                    </h5>
                  </div>
                  <div class="flex gap-[47px] items-center mt-6">
                    <p class="paragraph text-text flex-1">
                      {{ item.desc }}
                    </p>

                    <button
                      class="size-[60px] flex items-center justify-center rounded-full bg-primary text-white cursor-pointer shrink-0"
                    >
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
