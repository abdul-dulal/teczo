<script setup>
import { ref, onMounted } from "vue";
import business from "@/assets/img/home/business.png";
import shape from "@/assets/img/home/in-shape.png";
import star from "@/assets/img/home/color-start.png";
import wave from "@/assets/img/home/color-wave.png";

const progressList = ref([
  { label: "Website & App Development", value: 80, current: 0 },
  { label: "IT Solution & Management", value: 95, current: 0 },
  { label: "Digital Marketing", value: 65, current: 0 },
]);

onMounted(() => {
  progressList.value.forEach((item, index) => {
    setTimeout(() => {
      item.current = item.value;
    }, index * 300);
  });
});
</script>

<template>
  <div class="relative w-full overflow-hidden">
    <!-- BACKGROUND LAYER (outside container) -->
    <div class="absolute inset-0 grid grid-cols-2">
      <div class="bg-purple rounded-tr-[140px]"></div>
      <div class="bg-light-gray rounded-tl-[140px]"></div>
    </div>

    <div class="max-w-[1600px] mx-auto px-5 relative z-10">
      <div class="grid grid-cols-2">
        <div class="relative bg-purple rounded-tr-[140px] pr-20 py-20">
          <div class="absolute top-[15%] right-[22%]">
            <img :src="shape" alt="Shape" />
          </div>
          <div class="absolute bottom-10 left-[16%]">
            <img :src="star" alt="Star" />
          </div>
          <img :src="business" alt="Business" />
        </div>

        <div class="relative bg-light-gray rounded-tl-[140px] pl-20 py-20">
          <div class="absolute bottom-0 -right-[20%]">
            <img :src="wave" alt="Wave" />
          </div>

          <div>
            <h6 class="heading-six text-purple mb-5">
              Our technology progress
            </h6>

            <h2 class="heading-one mb-6">
              Increasing business success with technology
            </h2>

            <p class="paragraph mb-10">
              Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
              suscipit sit amet lorem dictum purus. Sed nec arcu id nunc
              porttitor porta nec nec dui. Vestibulum comm ut enim dignissim,
              condimentum rhoncus arcu gravida.
            </p>
          </div>

          <div v-for="(item, index) in progressList" :key="index">
            <div class="flex justify-between text-primary">
              <span class="heading-six font-bold mb-2.5">{{ item.label }}</span>
              <span class="heading-six font-bold mb-4">{{ item.value }}%</span>
            </div>

            <div class="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="h-full bg-purple-600 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: item.current + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
