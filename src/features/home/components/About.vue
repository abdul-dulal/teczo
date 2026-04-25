<script setup>
import technology from "@/assets/img/home/technology.png";

import { stats } from "@/demoData";
</script>

<template>
  <div class="section-base">
    <div class="container">
      <div
        class="grid md:grid-cols-[35.5%_60%] 2xl:gap-[60px] lg:gap-12 gap-[30px]"
      >
        <div>
          <h6 class="heading-six text-purple lg:mb-20 mb-10">
            Know about ourself
          </h6>
          <div>
            <img :src="technology" class="w-full h-auto" alt="Technology" />
          </div>
        </div>
        <div>
          <div class="max-w-[665px] 2xl:mb-[60px] lg:mb-10 mb-6">
            <h2 class="heading-one">
              We Can Take Your Business to the Next Level.
            </h2>
            <p class="paragraph">
              Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
              suscipit sit amet lorem ut, viverra dictum purus. Sed nec arcu id
              nunc porttitor porta nec nec dui. Vestibulum commodo diam ut enim
              dignissim, condimentum rhoncus arcu gravida.
            </p>
          </div>
          <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
            <div v-for="(item, index) in stats" :key="index">
              <img :src="item.img" alt="item.title" />
              <h4 class="text-[60px] font-bold leading-[60px] mt-[30px]">
                {{ item.number }}
              </h4>
              <h6 class="heading-six">{{ item.title }}</h6>
              <p class="paragraph">
                Integer fringilla sed lacus non venenatis. Vivamus turpis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
