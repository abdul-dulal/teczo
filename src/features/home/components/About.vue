<script setup>
import technology from "@/assets/img/home/technology.png";
import project from "@/assets/img/home/project.png";
import keyword from "@/assets/img/home/keyword.png";
import management from "@/assets/img/home/management.png";
import { stats } from "@/demoData";
</script>

<template>
  <div class="py-[120px]">
    <div class="container">
      <div class="grid grid-cols-[35.5%_53%] gap-[88px]">
        <div>
          <h6 class="heading-six text-purple">Know about ourself</h6>
          <div>
            <img :src="technology" class="w-full h-auto" alt="Technology" />
          </div>
        </div>
        <div>
          <h2 class="heading-one mb-10 max-w-[612px]">
            We Can Take Your Business to the Next Level.
          </h2>
          <p class="paragraph">
            Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
            suscipit sit amet lorem ut, viverra dictum purus. Sed nec arcu id
            nunc porttitor porta nec nec dui. Vestibulum commodo diam ut enim
            dignissim, condimentum rhoncus arcu gravida.
          </p>
          <div class="grid grid-cols-3">
            <div v-for="(item, index) in stats" :key="index">
              <img src="item.img" alt="item.title" />
              <h6 class="heading-six"></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
