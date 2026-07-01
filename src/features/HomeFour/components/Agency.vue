<script setup>
import banner from "@/assets/img/homeFour/agency bg.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { itService } from "@/demoData";
import { ArrowUpRight } from "lucide-vue-next";
import { Autoplay } from "swiper/modules";
</script>

<template>
  <section
    class="bg-bg section-base overflow-hidden"
    :style="{ backgroundImage: `url(${banner})` }"
  >
    <div class="container">
      <div class="max-w-[523px] block mx-auto">
        <h6 class="heading-six text-secondary mb-5 text-center">
          Best Technology Agency
        </h6>
        <h2 class="heading-one mb-8 text-white text-center">
          We Provide Our Clients Best IT Services
        </h2>
      </div>
      <div
        class="relative ml-0 xl:w-[calc(100vw-10px)] xl:mr-10 mr-0 overflow-visible"
      >
        <Swiper
          :modules="[Autoplay]"
          :autoplay="{ delay: 3000 }"
          :slides-per-view="1"
          :space-between="25"
          :loop="true"
          :breakpoints="{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1224: { slidesPerView: 4 },
          }"
          class="w-full"
        >
          <SwiperSlide v-for="card in itService" :key="card.id">
            <div
              class="relative rounded-xl 2xl:px-10 px-7 2x:py-[50px] py-10 bg-white group hover:bg-purple transition-all ease-in-out duration-500"
            >
              <div>
                <!-- Title -->
                <h5
                  class="heading-five font-bold text-primary mb-5 transition-all ease-in-out duration-500 group-hover:text-white"
                >
                  {{ card.title }}
                </h5>

                <p
                  class="paragraph text-text mb-8 transition-all ease-in-out duration-500 group-hover:text-white/75"
                >
                  {{ card.description }}
                </p>

                <div class="flex items-center justify-between">
                  <div class="flex items-center justify-between">
                    <div class="relative">
                      <img
                        :src="card.image"
                        class="rounded-full object-cover"
                      />

                      <button
                        class="absolute -top-2 -right-2 2xl:size-[60px] size-12 bg-secondary rounded-full flex items-center justify-center group-hover:rotate-45 transition-all ease-in-out duration-500 cursor-pointer"
                      >
                        <ArrowUpRight />
                      </button>
                    </div>
                  </div>
                  <div
                    class="text-[100px] text-[#F7F7F9] group-hover:text-[#F7F7F926] transition-all ease-in-out duration-300 font-semibold font-inter"
                  >
                    {{ card.number }}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
