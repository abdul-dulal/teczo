<script setup>
import { onMounted, ref } from "vue";

const progressList = ref([
  { label: "Technology", value: 85, current: 0 },
  { label: "Data Security", value: 95, current: 0 },
  { label: "IT Management", value: 90, current: 0 },
  { label: "Solutions", value: 70, current: 0 },
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
  <div class="section-base">
    <div class="container">
      <h2 class="heading-one max-w-[644px] mb-10">
        Preparing for your success, we provide truly prominent IT Solutions
      </h2>
      <div class="grid lg:grid-cols-[54%_40%] gap-[6%]">
        <div class="flex sm:flex-row flex-col items-center gap-10">
          <div>
            <div
              class="w-[308px] h-[280px] bg-purple rounded-[20px] flex items-center justify-center"
            >
              <div>
                <h2
                  class="text-[120px] font-bold leading-[55px] text-secondary"
                >
                  25
                </h2>
                <p class="heading-six mt-6 text-white">Years of experience</p>
              </div>
            </div>
          </div>
          <div>
            <p class="paragraph text-text">
              Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
              suscipit sit amet lorem ut, viverra dictum purus. Sed nec arcu id
              nunc ut enim dignissim, condimentum rhoncus
            </p>
            <button class="heading-six underline">Contact With Us</button>
          </div>
        </div>
        <div>
          <div v-for="(item, index) in progressList" :key="index">
            <div class="flex justify-between text-primary mb-3">
              <span class="heading-six font-bold">{{ item.label }}</span>
              <span class="heading-six font-bold">{{ item.value }}%</span>
            </div>

            <div
              class="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-6"
            >
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
