<script setup>
import vector from "@/assets/img/homefive/vector.png";
import author01 from "@/assets/img/homefive/client01.png";
import author02 from "@/assets/img/homefive/client02.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    image: author01,
  },
  {
    image: author02,
  },
  {
    image: author01,
  },
  {
    image: author02,
  },
];
</script>

<template>
  <section class="section-base">
    <div class="container">
      <h6 class="heading-six text-purple text-center">Our Clients Feedback</h6>
      <h2 class="heading-one max-w-[523px] text-center block m-auto">
        What our client saying about our agency
      </h2>

      <Swiper
        :autoplay="{ delay: 3000 }"
        :modules="[Autoplay]"
        :slides-per-view="2"
        :space-between="24"
        :loop="true"
        :breakpoints="{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }"
        class="w-full mt-10"
      >
        <SwiperSlide v-for="(item, index) in testimonials" :key="index">
          <div
            class="relative bg-white rounded-2xl shadow-md p-6 overflow-hidden"
            :style="{ backgroundImage: `url(${banner})` }"
          >
            <div class="absolute top-0 left-0">
              <img :src="vector" alt="Vector" />
            </div>

            <div class="flex items-center gap-[30px] px-10">
              <div>
                <div class="w-[120px] h-[120px]">
                  <img
                    :src="item.image"
                    class="rounded-full object-cover w-full h-full"
                    alt="user"
                  />
                </div>
              </div>
              <div>
                <div class="flex gap-1 mb-4">
                  <span v-for="i in 5" :key="i" class="text-purple">★</span>
                </div>

                <p class="heading-six font-normal text-text leading-[26px]">
                  Each demo built with will look different. You can customize
                  almost anything in the appearance of your website with only a
                  few clicks. Each demo built
                </p>
                <div class="flex items-center gap-[30px]">
                  <h5 class="heading-five text-primary">Richard Vanman</h5>
                  <p class="paragraph text-purple font-inter font-normal">
                    Designer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="mt-10 mx-auto w-full text-center">
        <button
          class="w-[141px] h-[41px] bg-secondary rounded-full text-base font-bold uppercase"
        >
          HURRAH !
        </button>
        <p class="paragraph font-medium text-primary inline ml-3">
          Let’s make something together better.
        </p>
      </div>
    </div>
  </section>
</template>
