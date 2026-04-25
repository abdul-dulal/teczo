<script setup>
import banner from "@/assets/img/homeFour/choose-banner.png";

const timeline = [
  {
    number: "01",
    title: "Expertise In Modern Technology",
    description:
      "We love to bring designs to life bringing main developer, and I aim to",
  },
  {
    number: "02",
    title: "Globally Operate Successfully",
    description:
      "We love to bring designs to life bringing main developer, and I aim to",
  },
  {
    number: "03",
    title: "Amazing IT Professional",
    description:
      "We love to bring designs to life bringing main developer, and I aim to",
  },
];
</script>
<template>
  <section class="section-base overflow-hidden">
    <div class="container">
      <div class="grid md:grid-cols-2 2xl:gap-20 lg:gap-10 gap-8">
        <div>
          <h6 class="heading-six text-purple font-bold">
            Why People Choose Us
          </h6>
          <h2 class="heading-one max-w-[481px]">
            Why We are Different from Others
          </h2>

          <div class="relative">
            <div
              v-for="(item, index) in timeline"
              :key="index"
              class="flex items-start gap-8 sm:mb-7 mb-5 relative"
            >
              <!-- line (hide for last item) -->
              <div
                v-if="index !== timeline.length - 1"
                class="absolute left-6 top-12 h-[110%] w-px bg-primary/15"
              ></div>

              <!-- circle -->
              <div>
                <div
                  class="w-12 h-12 flex items-center justify-center rounded-full text-lg font-semibold z-10"
                  :class="
                    index === 0
                      ? 'bg-purple text-white'
                      : 'bg-white border border-primary/15 text-gray-700'
                  "
                >
                  {{ item.number }}
                </div>
              </div>

              <!-- content -->
              <div>
                <h3 class="text-xl font-bold sm:mb-5 mb-4 text-primary">
                  {{ item.title }}
                </h3>
                <p class="paragraph max-w-[340px]">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div
            class="flex flex-wrap gap-2.5 z-9999 relative items-end h-full xl:pb-[50px] xl:pt-0 sm:pt-[40%] pt-[18%]"
          >
            <div class="2xl:p-9 sm:p-6 p-5 bg-primary rounded-[10px]">
              <h2
                class="2xl:text-[46px] sm:text-[40px] text-4xl font-bold text-secondary"
              >
                2586
              </h2>
              <p
                class="lg:text-xl sm:text-lg text-base font-medium text-white sm:leading-6 leading-5 max-w-[187px]"
              >
                Telephone talk with our clients
              </p>
            </div>
            <div class="2xl:p-9 sm:p-6 p-5 bg-white rounded-[10px]">
              <h2
                class="2xl:text-[46px] sm:text-[40px] text-4xl font-bold text-purple"
              >
                589
              </h2>
              <p
                class="lg:text-xl sm:text-lg text-base font-medium text-primary sm:leading-6 leading-5 max-w-[187px]"
              >
                Website Mobile App Design
              </p>
            </div>
          </div>
          <div class="absolute right-0 top-0">
            <img :src="banner" alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
