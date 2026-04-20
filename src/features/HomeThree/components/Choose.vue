<script setup>
import quality from "@/assets/img/homeThree/quality.png";
import team from "@/assets/img/homeThree/team.png";
import project from "@/assets/img/homeThree/project.png";
import smart from "@/assets/img/homeThree/smart.png";
const cards = [
  {
    title: "Quality Service",
    icon: quality,
    active: false,
  },
  {
    title: "Professional Team",
    icon: team,
    active: false,
  },
  {
    title: "Project Analysis",
    icon: project,
    active: true,
  },
  {
    title: "Smart Solutions",
    icon: smart,
    active: false,
  },
];
</script>

<template>
  <div class="bg-gradient-to-b from-[#E4DAF6] to-white section-base">
    <div class="max-w-[1295px] mx-auto">
      <div class="flex items-end justify-between mb-16">
        <div class="max-w-[550px]">
          <h6 class="heading-six mb-5 text-purple">Agency benefits</h6>
          <h2 class="heading-one text-primary">
            Why you should choose our agency?
          </h2>
        </div>
        <div class="max-w-[509px]">
          <p class="paragraph text-text">
            Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
            suscipit sit amet lorem ut, viverra dictum purus. Sed nec arcu id
            nunc ut enim dignissim, condimentum rhoncus arcu gravida.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="grid grid-cols-4 gap-12">
        <div v-for="(item, i) in cards" :key="i" class="relative">
          <div
            class="absolute inset-0 bg-[#cfcbd9] rounded-2xl rotate-[-8deg] translate-x-0 -translate-y-1"
          ></div>

          <div
            class="relative h-[308px] rounded-2xl p-6 flex flex-col justify-between shadow-md heading-five font-bold"
            :class="
              item.active ? 'bg-purple text-white' : 'bg-[#4BF0C5] text-primary'
            "
          >
            <img :src="item.icon" class="w-10 h-10" />

            <h3 class="">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
