<script setup>
import women from "@/assets/img/homeTwo/img_01.png";
import development from "@/assets/img/homeTwo/development.png";
import outsource from "@/assets/img/homeTwo/outsource.png";
import Button from "@/components/base/Button.vue";
import video from "@/assets/img/homeTwo/video.png";
import { ref } from "vue";
import VideoModal from "@/features/home/components/VideoModal.vue";

let showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>
<template>
  <div class="bg-light-purple section-base">
    <div class="max-w-[1180px] block mx-auto px-5">
      <div class="grid grid-cols-[40%_50%] gap-28">
        <div class="relative">
          <img :src="women" alt="Women" />
          <div
            class="absolute bottom-[22%] -left-[14%] bg-white rounded-[10px] shadow"
          >
            <div
              class="w-40 h-[124px] flex items-center justify-center"
              :style="{ backgroundImage: `url(${video})` }"
            >
              <button
                @click="openModal"
                class="size-10 bg-secondary z-999 relative rounded-full flex items-center justify-center cursor-pointer"
              >
                ▶
              </button>
            </div>
            <div>
              <p class="text-base font-bold py-6 text-center">
                Watch our <br />
                video
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="space-y-6">
            <h6 class="heading-six text-purple">Best technology agency</h6>
            <h2 class="heading-one">
              Exclusive technology to provide IT solutions
            </h2>
            <p class="heading-six font-normal text-text">
              Each demo built with will look different. You can customize almost
              anything in the appearance of your website with only a few clicks.
              Each demo built with will look different.
            </p>
            <div class="flex gap-6">
              <div>
                <div
                  class="size-20 rounded-full bg-purple flex items-center justify-center"
                >
                  <img :src="development" alt="Development" />
                </div>
              </div>
              <div class="max-w-[349px]">
                <h4 class="heading-four font-medium">End to end development</h4>
                <p class="heading-six font-normal text-text">
                  Each demo built with will look different. You can customize
                  almost anything
                </p>
              </div>
            </div>
            <div class="flex gap-6">
              <div>
                <div
                  class="size-20 rounded-full bg-purple flex items-center justify-center"
                >
                  <img :src="outsource" alt="Outsource" />
                </div>
              </div>
              <div class="max-w-[349px]">
                <h4 class="heading-four font-medium">Software IT outsource</h4>
                <p class="heading-six font-normal text-text">
                  Each demo built with will look different. You can customize
                  almost anything
                </p>
              </div>
            </div>
            <Button
              btnTitle="Discover More"
              class="bg-secondary text-primary"
            />
          </div>
          <VideoModal :showModal="showModal" @closeModal="closeModal" />
        </div>
      </div>
    </div>
  </div>
</template>
