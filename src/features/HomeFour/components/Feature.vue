<script setup>
import banner from "@/assets/img/homeFour/feature-banner.png";
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
  <section
    class="w-full bg-no-repeat bg-cover bg-center 2xl:h-[600px] h-[400px] overflow-hidden xl:mt-0 mt-14"
    :style="{ backgroundImage: `url(${banner})` }"
  >
    <div class="relative flex items-center justify-center h-full">
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <!-- Circle -->
        <div
          class="relative sm:w-[200px] w-[180px] sm:h-[200px] h-[180px] rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center"
        >
          <!-- Rotating Text -->
          <div
            class="absolute w-full h-full p-2 animate-spin-slow pointer-events-none"
          >
            <svg viewBox="0 0 200 200" class="w-full h-full">
              <path
                id="circlePath"
                d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                fill="none"
              />
              <text fill="white" font-size="18" letter-spacing="3">
                <textPath href="#circlePath">
                  INTRO - PLAY - VIDEO - INTRO - PLAY - VIDEO
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <!-- BUTTON (outside blur container) -->
        <button
          class="absolute w-[60px] h-[60px] bg-white text-black cursor-pointer pointer-events-auto rounded-full flex items-center justify-center shadow-lg"
          @click="openModal"
        >
          ▶
        </button>
      </div>
    </div>
    <VideoModal :showModal="showModal" @closeModal="closeModal" />
  </section>
</template>

<style scoped>
@keyframes spinSlow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spinSlow 12s linear infinite;
}
</style>
