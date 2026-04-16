<script setup>
import technology from "@/assets/img/home/technology.png";

import { stats } from "@/demoData";
</script>

<template>
  <div class="section-base">
    <div class="container">
      <div class="grid grid-cols-[35.5%_60%] gap-[60px]">
        <div>
          <h6 class="heading-six text-purple mb-20">Know about ourself</h6>
          <div>
            <img :src="technology" class="w-full h-auto" alt="Technology" />
          </div>
        </div>
        <div>
          <div class="max-w-[665px] mb-[60px]">
            <h2 class="heading-one mb-10">
              We Can Take Your Business to the Next Level.
            </h2>
            <p class="paragraph">
              Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
              suscipit sit amet lorem ut, viverra dictum purus. Sed nec arcu id
              nunc porttitor porta nec nec dui. Vestibulum commodo diam ut enim
              dignissim, condimentum rhoncus arcu gravida.
            </p>
          </div>
          <div class="grid grid-cols-3 gap-5">
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
