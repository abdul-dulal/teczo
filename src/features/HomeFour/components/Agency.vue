<script>
import banner from "@/assets/img/homeFour/agency bg.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { itService } from "@/demoData";
</script>

<template>
  <section
    class="bg-bg section-base"
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
      <div class="relative ml-0 w-[calc(100vw-10px)] mr-10 overflow-visible">
        <Swiper
          :slides-per-view="4"
          :space-between="30"
          :loop="true"
          :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }"
          class="w-full"
        >
          <SwiperSlide
            v-for="card in itService"
            :key="card.id"
            class="relative min-w-[260px] rounded-xl p-6 transition-all duration-300"
            :class="
              card.active
                ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white'
                : 'bg-white text-gray-800'
            "
          >
            <div>
              <!-- Title -->
              <h3 class="font-semibold text-lg mb-2">
                {{ card.title }}
              </h3>

              <!-- Description -->
              <p class="text-sm opacity-70 mb-6">
                {{ card.description }}
              </p>

              <!-- Bottom Image + Arrow -->
              <div class="flex items-center justify-between">
                <div class="relative">
                  <img
                    :src="card.image"
                    class="w-16 h-16 rounded-full object-cover"
                  />
                  <!-- Arrow -->
                  <div
                    class="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center"
                  >
                    →
                  </div>
                </div>
              </div>

              <!-- Big Background Number -->
              <span
                class="absolute right-4 bottom-4 text-5xl font-bold opacity-10"
              >
                {{ card.number }}
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
