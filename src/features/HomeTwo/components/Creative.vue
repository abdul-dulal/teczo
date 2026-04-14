<script setup>
import banner from "@/assets/img/homeTwo/banner.png";
import shape from "@/assets/img/homeTwo/side-shape.png";
import VideoModal from "@/features/home/components/VideoModal.vue";
import { ref } from "vue";

let showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>
<template>
  <div
    class="h-[610px] w-full bg-cover relative"
    :style="{
      backgroundImage: `
      linear-gradient(180deg, rgba(27,31,46,0.3) 0%, #1B1F2E 100%),
      url(${banner})
    `,
    }"
  >
    <div class="absolute right-0 top-[10%]">
      <img :src="shape" alt="Shape" />
    </div>
    <div class="absolute -bottom-16 right-0">
      <h2 class="text-[150px] text-white/20 font-bold tracking-[-10px]">
        Solutions
      </h2>
    </div>
    <div class="container flex items-end h-full">
      <div class="mb-[90px]">
        <div class="max-w-[400px]">
          <h3 class="heading-three text-white mb-10">
            Together we can make world creative
          </h3>
        </div>
        <div class="flex items-center gap-4">
          <button
            @click="openModal"
            class="size-[70px] bg-secondary z-999 relative rounded-full flex items-center justify-center cursor-pointer text-2xl"
          >
            ▶
          </button>
          <div>
            <p class="text-sm font-normal text-white/80">Click to watch</p>
            <h5 class="text-xl font-medium text-white">See how it works</h5>
          </div>
        </div>
      </div>
      <VideoModal :showModal="showModal" @closeModal="closeModal" />
    </div>
  </div>
</template>
