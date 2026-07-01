<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner from "@/assets/img/homeThree/testimonial-banner.png";
import { clientTestimonials } from "@/demoData";
import star from "@/assets/img/homeThree/star.svg";
import { ArrowDown, ArrowUp } from "lucide-vue-next";
</script>
<template>
  <section class="bg-purple py-20 relative">
    <div class="">
      <div class="flex flex-wrap items-center justify-between">
        <div
          class="absolute lg:block hidden left-0 top-1/2 -translate-y-1/2 w-[50%]"
        >
          <img :src="banner" alt="Testimonial Banner" />
        </div>
        <div class="lg:block hidden"></div>
        <div
          class="2xl:w-[800px] md:w-[600px] w-full relative border-l sm:pl-[60px] pl-8 border-white/15 2xl:pr-[130px] pr-5"
        >
          <div
            class="absolute lg:top-[40%] -bottom-10 lg:-left-7 left-14 flex lg:flex-col gap-2.5"
          >
            <button
              class="prev-button size-[60px] border bg-purple border-secondary rounded-full flex items-center justify-center cursor-pointer"
            >
              <ArrowUp color="#4bf0c5" />
            </button>
            <button
              class="next-button size-[60px] bg-secondary text-primary rounded-full flex items-center justify-center cursor-pointer"
            >
              <ArrowDown />
            </button>
          </div>
          <div>
            <h6 class="heading-six text-secondary mb-5">Our Testimonials</h6>
            <h2 class="heading-one text-white mb-8">What our customer say?</h2>
          </div>
          <div class="mb-10">
            <Swiper
              :modules="[Navigation]"
              :slides-per-view="1"
              :loop="true"
              :navigation="{
                nextEl: '.next-button',
                prevEl: '.prev-button',
              }"
              class=""
            >
              <SwiperSlide v-for="(item, i) in clientTestimonials" :key="i">
                <div class="">
                  <div
                    class="flex items-center sm:flex-nowrap flex-wrap gap-5 2xl:mb-10 mb-5"
                  >
                    <div
                      class="px-[13px] py-[7px] border flex items-center gap-2.5 border-white/10 w-fit rounded-full"
                    >
                      <div class="flex gap-1">
                        <component :is="star" v-for="i in 5" :key="i" />
                      </div>
                      <p class="text-base font-medium text-white">5</p>
                    </div>
                    <p class="paragraph text-white">
                      Achieving success through over 90% customer satisfaction
                    </p>
                  </div>
                  <h6
                    class="text-xl leading-8 text-white border-b border-white/15 2xl:pb-10 pb-5"
                  >
                    {{ item.text }}
                  </h6>
                  <div class="2xl:mt-[30px] mt-5 flex items-center gap-[18px]">
                    <img
                      :src="item.image"
                      :alt="item.text"
                      class="rounded-full"
                    />
                    <div>
                      <h6 class="heading-six text-white mb-0">
                        {{ item.name }}
                      </h6>
                      <p class="text-sm text-white">{{ item.role }}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
