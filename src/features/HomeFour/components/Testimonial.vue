<script setup>
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import banner from "@/assets/img/homeFour/testimonial-banner.png";
import t01 from "@/assets/img/homeFour/t01.png";
import t02 from "@/assets/img/homeFour/t02.png";
import t03 from "@/assets/img/homeFour/t03.png";
import star from "@/assets/img/homeThree/star.svg";
import quote from "@/assets/img/homeFour/quote.png";
import { clientFeedback } from "@/demoData";
import logo from "@/assets/img/homeThree/c03.png";
</script>

<template>
  <section class="section-base">
    <div class="max-w-[1158px] block mx-auto">
      <h6 class="heading-six text-purple text-center">Our Clients Feedback</h6>
      <h2 class="heading-one text-primary text-center">What customer saying</h2>
      <div class="flex justify-between">
        <div class="relative max-w-[450px]">
          <img :src="banner" alt="Banner" class="rounded-[20px]" />
          <div
            class="bg-white rounded-full p-[25px] w-fit shadow-[10px_0px_30px_0px_#201A2E1A] absolute -right-[70px] top-1/2 -translate-y-1/2"
          >
            <img :src="t01" alt="Testmonial" />
            <img :src="t02" alt="Testimonial" />
            <img :src="t03" alt="Testimonial" />
          </div>
        </div>
        <div class="max-w-[538px]">
          <div>
            <div>
              <Swiper
                :modules="[Navigation]"
                :slides-per-view="1"
                :loop="true"
                :navigation="{
                  nextEl: '.next-button',
                  prevEl: '.prev-button',
                }"
                class="mt-5"
              >
                <SwiperSlide v-for="(item, i) in clientFeedback" :key="i">
                  <div class="flex gap-[30px] items-center">
                    <img :src="logo" alt="Client Logo" />
                    <span class="flex gap-1">
                      <component
                        :is="star"
                        v-for="i in 5"
                        :key="i"
                        class="text-purple [&_*]:fill-current [&_*]:!fill-current transition-all ease-in-out duration-500"
                    /></span>
                  </div>
                  <h5 class="heading-five text-primary my-4">
                    {{ item.title }}
                  </h5>
                  <div>
                    <div class="flex gap-[30px]">
                      <div class="w-20 h-[30px] mt-1.5">
                        <img :src="quote" class="w-full h-full" alt="Quote" />
                      </div>
                      <div>
                        <p class="paragraph text-text">{{ item.review }}</p>
                        <p class="paragraph text-purple mt-[35px]">
                          {{ item.dsgn }}
                        </p>
                        <h6 class="text-xl font-bold text-primary mt-4">
                          {{ item.name }}
                        </h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div class="flex items-center gap-2 mt-12">
                <button
                  class="prev-button size-10 border border-purple rounded-full flex items-center justify-center cursor-pointer"
                >
                  <ArrowLeft />
                </button>
                <button
                  class="next-button size-10 border border-purple text-primary rounded-full flex items-center justify-center cursor-pointer"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
