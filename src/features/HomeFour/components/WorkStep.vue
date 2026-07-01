<script setup>
import step01 from "@/assets/img/homeFour/step01.png";
import step02 from "@/assets/img/homeFour/step02.png";
import step03 from "@/assets/img/homeFour/step03.png";
import step04 from "@/assets/img/homeFour/step04.png";
import wave from "@/assets/img/homeFour/wave.png";

const items = [
  { image: step01 },
  { image: step02 },
  {
    image: step03,
  },
  {
    image: step04,
  },
];
</script>
<template>
  <section class="section-base bg-light-gray">
    <div class="container">
      <h6 class="heading-six text-purple text-center">Our Working Process</h6>
      <h2
        class="heading-one text-primary text-center max-w-[559px] block mx-auto"
      >
        See our easy steps, how actually work
      </h2>

      <div class="pt-5">
        <div class="grid md:grid-cols-4 grid-cols-2 gap-8 relative">
          <div
            class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:block hidden"
          >
            <img :src="wave" class="w-[790px] max-w-none block" alt="Wave" />
          </div>
          <!-- Items -->
          <div
            v-for="(item, index) in items"
            :key="index"
            class="relative z-10 flex flex-col items-center text-center"
          >
            <!-- Circle Image -->
            <div class="relative">
              <div
                class="rounded-full p-[30px] border-2 border-dashed border-purple flex items-center justify-center"
              >
                <img
                  :src="item.image"
                  alt="img"
                  class="rounded-full object-cover"
                />
              </div>

              <!-- Badge -->
              <div class="relative w-[120px] h-[120px]">
                <div
                  class="absolute top-0 left-1/2 -translate-x-1/2 rotate-[12deg]"
                >
                  <svg width="90" height="90" viewBox="0 0 100 100">
                    <!-- Shape -->
                    <path
                      d="M20 10 L75 5 L95 60 L55 95 L10 70 Z"
                      fill="#1F1F2E"
                    />

                    <!-- Text -->
                    <text
                      x="50%"
                      y="55%"
                      text-anchor="middle"
                      fill="white"
                      font-size="20"
                      font-weight="600"
                      transform="rotate(-12 50 50)"
                    >
                      01
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Title -->
            <h3 class="sm:mt-4 mt-0 font-semibold text-lg">Discussion</h3>

            <!-- Description -->
            <p class="text-sm text-gray-500 mt-2 px-4">
              Integer fringilla sed lacus non vene Vivamus turpis ex,suscipit
              sit
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
