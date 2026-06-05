<script setup>
import vector from "@/assets/img/homefive/vector.png";
import author01 from "@/assets/img/homefive/client01.png";
import author02 from "@/assets/img/homefive/client02.png";
import author03 from "@/assets/img/homefive/client03.png";
import author04 from "@/assets/img/homefive/client04.png";
import { Quote } from "lucide-vue-next";

const testimonials = [
  {
    image: author01,
  },
  {
    image: author02,
  },
  {
    image: author03,
  },
  {
    image: author04,
  },
];
</script>

<template>
  <section class="section-base">
    <div class="container">
      <div class="grid sm:grid-cols-2 gap-[30px]">
        <div v-for="(item, index) in testimonials" :key="index">
          <div
            class="relative bg-white rounded-2xl shadow-md p-6 overflow-hidden"
            :style="{ backgroundImage: `url(${banner})` }"
          >
            <div class="absolute top-0 left-0">
              <img :src="vector" alt="Vector" />
            </div>

            <div
              class="flex md:flex-nowrap flex-wrap items-center gap-[30px] px-10"
            >
              <div class="relative">
                <div class="w-[120px] h-[120px]">
                  <img
                    :src="item.image"
                    class="rounded-full object-cover w-full h-full"
                    alt="user"
                  />
                </div>
                <div
                  class="size-10 flex items-center justify-center rounded-full bg-secondary absolute top-0 left-0"
                >
                  <Quote />
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
        </div>
      </div>
    </div>
  </section>
</template>
