<script setup>
import { onMounted, ref } from "vue";
import icon from "@/assets/img/homeThree/cloud.svg";
import Button from "@/components/base/Button.vue";
import robotImg from "@/assets/img/homeThree/robot.png";
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
  <div class="section-base">
    <div class="container overflow-hidden">
      <div class="grid lg:grid-cols-[42%_52%] 2xl:gap-28 gap-6">
        <div>
          <h6 class="heading-six text-purple mb-5">Welcome to Our Teczo</h6>
          <h2 class="heading-one text-primary">
            Best IT Technology Services You Can Trust
          </h2>
          <h6 class="heading-six font-bold text-purple my-6">
            The professional approach to technology.
          </h6>
          <p class="paragraph">
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
            class="bg-transparent border border-primary text-primary mt-3"
          />
        </div>
        <div>
          <img :src="robotImg" alt="Technology" />
        </div>
      </div>
    </div>
  </div>
</template>
