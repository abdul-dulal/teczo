<script setup>
import robort from "@/assets/img/homeFour/robort.png";
import man from "@/assets/img/homeFour/man.png";
import arrowbig from "@/assets/img/homeFour/arrow-big.png";
import arrow from "@/assets/img/homeFour/arrow.png";
import { onMounted, ref } from "vue";
import Button from "@/components/base/Button.vue";
import icon from "@/assets/img/homeThree/cloud.svg";
import circle from "@/assets/img/homeFour/circle.png";

const progressList = ref([{ label: "Technology", value: 85, current: 0 }]);
onMounted(() => {
  progressList.value.forEach((item, index) => {
    setTimeout(() => {
      item.current = item.value;
    }, index * 300);
  });
});
</script>
<template>
  <section class="section-base relative">
    <div class="absolute right-0 bottom-[100px]">
      <img :src="circle" alt="Circle" />
    </div>
    <div class="container">
      <div class="grid grid-cols-2 gap-20">
        <div class="relative">
          <img :src="robort" alt="Robort" />
          <div class="absolute right-0 bottom-10">
            <img :src="man" alt="Man" />
          </div>
          <div class="absolute right-[10%] top-5">
            <div class="relative">
              <img :src="arrowbig" alt="Arrow" />
              <img class="absolute top-10 -left-2" :src="arrow" alt="Arrow" />
            </div>
          </div>

          <div
            class="absolute -left-6 bottom-4 w-[114px] h-[151px] bg-purple rounded-[10px] transform rotate-[-199deg] z-0"
          ></div>

          <div
            class="absolute left-0 bottom-0 bg-white w-[152px] h-[150px] z-10 rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] flex flex-col items-center justify-center"
          >
            <h2 class="heading-one text-primary font-bold">12+</h2>
            <p class="max-w-[100px] paragraph text-text">Top agency awards</p>
          </div>
        </div>
        <div>
          <h6 class="heading-six mb-5">Welcome to Our Teczo</h6>
          <h2 class="heading-one max-w-[514px] mb-8">
            Best IT Technology Services You Can Trust
          </h2>
          <h5 class="heading-six font-bold text-purple mb-6">
            The professional approach to technology.
          </h5>
          <p class="paragraph text-text max-w-[509px] mb-6">
            Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
            suscipit sit amet lorem ut, viverra dictum purus. Sed nec arcu id
            nunc ut enim dignissim, condimentum rhoncus arcu gravida.
          </p>

          <div class="my-8 flex justify-between items-center">
            <div class="flex gap-[15px]">
              <div>
                <component :is="icon" class="mt-1" />
              </div>
              <div class="">
                <h6 class="heading-six text-purple">Cloud Based</h6>
                <p class="paragraph text-text">
                  Integer fringilla sed lacus non venenatis. Vivamus turpis
                </p>
              </div>
            </div>
            <div class="flex gap-[15px]">
              <div>
                <component :is="icon" class="mt-1" />
              </div>
              <div>
                <h6 class="heading-six text-purple">Full backup</h6>
                <p class="paragraph text-text">
                  Integer fringilla sed lacus non venenatis. Vivamus turpis
                </p>
              </div>
            </div>
          </div>
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
          <Button
            btnTitle="Discover More"
            class="bg-transparent border border-primary text-primary py-[25px] mt-3"
          />
        </div>
      </div>
    </div>
  </section>
</template>
