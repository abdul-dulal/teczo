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
      <div class="flex items-center justify-between">
        <div class="absolute left-0 top-1/2 -translate-y-1/2">
          <img :src="banner" alt="Testimonial Banner" />
        </div>
        <div></div>
        <div
          class="max-w-[800px] relative border-l pl-[60px] border-white/15 pr-[130px]"
        >
          <div class="absolute top-[40%] -left-7 flex flex-col gap-2.5">
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
                  <div class="flex items-center gap-5 mb-10">
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
                    class="text-xl leading-8 text-white border-b border-white/15 pb-10"
                  >
                    {{ item.text }}
                  </h6>
                  <div class="mt-[30px] flex items-center gap-[18px]">
                    <img
                      :src="item.image"
                      :alt="item.text"
                      class="rounded-full"
                    />
                    <div>
                      <h6 class="heading-six text-white">{{ item.name }}</h6>
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
