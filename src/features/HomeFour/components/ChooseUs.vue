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
  <section class="section-base">
    <div class="container">
      <div class="grid grid-cols-2 gap-20">
        <div>
          <h6 class="heading-six text-purple font-bold mb-5">
            Why People Choose Us
          </h6>
          <h2 class="heading-one max-w-[481px] mb-8">
            Why We are Different from Others
          </h2>

          <div class="relative">
            <div
              v-for="(item, index) in timeline"
              :key="index"
              class="flex items-start gap-8 mb-7 relative"
            >
              <!-- line (hide for last item) -->
              <div
                v-if="index !== timeline.length - 1"
                class="absolute left-6 top-12 h-[110%] w-px bg-primary/15"
              ></div>

              <!-- circle -->
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

              <!-- content -->
              <div>
                <h3 class="text-xl font-bold mb-5 text-primary">
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
          <div class="flex gap-2.5 z-9999 relative items-end h-full pb-[50px]">
            <div class="p-9 bg-primary rounded-[10px]">
              <h2 class="text-[46px] font-bold text-secondary">2586</h2>
              <p class="text-xl font-medium text-white leading-6 max-w-[187px]">
                Telephone talk with our clients
              </p>
            </div>
            <div class="p-9 bg-white rounded-[10px]">
              <h2 class="text-[46px] font-bold text-purple">589</h2>
              <p
                class="text-xl font-medium text-primary leading-6 max-w-[187px]"
              >
                Website and Mobile App Design
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
