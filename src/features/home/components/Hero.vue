<script setup>
import hero from "@/assets/img/home/hero.png";
import Button from "@/components/base/Button.vue";
import shape from "@/assets/img/home/shape.png";
import star from "@/assets/img/home/star.png";
import starShape from "@/assets/img/home/star-shape.png";
import wave from "@/assets/img/home/wave.png";
</script>

<template>
  <div class="bg-bg overflow-hidden">
    <div class="relative">
      <div class="absolute left-0 -top-10">
        <img :src="shape" class="" alt="Shape" />
      </div>
      <div class="max-w-[1700px] mx-auto relative pt-[100px] pb-[109px]">
        <div class="absolute left-4 bottom-10">
          <img :src="star" alt="Star" />
        </div>
        <div class="absolute right-8 top-16">
          <img :src="starShape" alt="" />
        </div>
        <div class="absolute bottom-20 left-1/2 -translate-x-1/2">
          <img :src="wave" alt="" />
        </div>
        <div class="container">
          <div
            class="grid md:grid-cols-[45%_43%] grid-cols-1 xl:gap-[150px] md:gap-20 gap-10 items-center"
          >
            <div class="z-99">
              <h6 class="heading-six text-secondary">
                Solution for your business
              </h6>
              <h2
                class="2xl:text-[94px] lg:text-[70px] sm:text-[55px] text-[45px] text-white font-bold 2xl:leading-[95px] lg:leading-[70px] sm:leading-[55px] leading-11"
              >
                Technology Solutions for Future
              </h2>
              <Button
                class="bg-secondary text-primary mt-[50px]"
                btnTitle="Discover More"
              />
            </div>
            <div>
              <img :src="hero" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
