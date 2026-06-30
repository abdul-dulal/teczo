<script setup>
import { teamMembers } from "@/demoData";
import fb from "@/assets/img/homeTwo/fb.svg";
import linkedin from "@/assets/img/homeTwo/linkedin.svg";
import twitter from "@/assets/img/homeTwo/twitter.svg";
defineProps({
  showTitle: { type: Boolean, default: true },
  sliceNumber: { type: Number, default: 3 },
});
</script>
<template>
  <div class="section-base">
    <div class="container">
      <div v-if="showTitle">
        <h6 class="heading-six text-purple">Our Team Members</h6>
        <h2 class="heading-one mt-5">Meet with our iT Experets</h2>
      </div>
      <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px] mt-7">
        <div
          v-for="(item, index) in teamMembers.slice(0, sliceNumber)"
          :key="index"
          class="group relative"
        >
          <!-- Image -->
          <img :src="item.img" class="w-full rounded-[20px]" :alt="item.name" />

          <!-- Overlay (optional dark effect) -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 rounded-[20px]"
          ></div>

          <!-- Social Icons -->
          <div
            class="absolute group-hover:bottom-[20%] bottom-0 left-1/2 -translate-x-1/2 bg-secondary flex items-center gap-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-in-out justify-center p-2.5 rounded-[10px] w-fit z-10"
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="size-9 rounded-md border border-primary/10 hover:border-primary hover:border-2 flex items-center justify-center"
            >
              <component
                :is="fb"
                class="text-primary [&_*]:fill-current transition duration-300"
              />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              class="size-9 rounded-md border border-primary/10 hover:border-primary hover:border-2 flex items-center justify-center"
            >
              <component
                :is="twitter"
                class="text-primary [&_*]:fill-current transition duration-300"
              />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              class="size-9 rounded-md border border-primary/10 hover:border-primary hover:border-2 flex items-center justify-center"
            >
              <component
                :is="linkedin"
                class="text-primary [&_*]:fill-current transition duration-300"
              />
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              class="size-9 rounded-md border border-primary/10 hover:border-primary hover:border-2 flex items-center justify-center"
            >
              <component
                :is="twitter"
                class="text-primary [&_*]:fill-current transition duration-300"
              />
            </a>
          </div>

          <!-- Name -->
          <h3 class="heading-three mt-5 text-center">
            {{ item.name }}
          </h3>

          <!-- Designation -->
          <p class="text-gray text-center text-text">
            {{ item.design }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
