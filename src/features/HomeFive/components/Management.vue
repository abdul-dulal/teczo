<script setup>
import { ref } from "vue";
import solution from "@/assets/img/home/solution.png";
import bright from "@/assets/img/home/bright.png";
import { Check } from "@lucide/vue";
import tips from "@/assets/img/home/tips.png";
import Button from "@/components/base/Button.vue";
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
  <div>
    <div class="bg-bg section-base w-full overflow-hidden">
      <div class="container">
        <div
          class="relative ml-0 md:w-[calc(100vw-10px)] md:mr-10 overflow-visible"
        >
          <div class="flex md:flex-row flex-col gap-[8%]">
            <div class="max-w-[530px] text-white">
              <h6 class="heading-six text-secondary">Tech Management</h6>

              <h2 class="heading-one text-white">
                The Best Source For <br />
                IT Solutions
              </h2>

              <p class="paragraph">
                Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
                suscipit sit amet lorem ut, viverra dictum purus. Sed nec arcu
                id nunc ut enim dignissim, condimentum rhoncus arcu gravida.
              </p>
              <div class="flex gap-[30px] items-center py-6">
                <img :src="bright" alt="Bright" />
                <h6 class="heading-six max-w-[255px] text-white">
                  We are doing the right thing by follow the right way
                </h6>
              </div>

              <div class="space-y-4 paragraph text-white/75">
                <div class="flex items-center gap-[15px]">
                  <div
                    class="size-6 flex items-center justify-center bg-[#323543] rounded-full"
                  >
                    <Check size="18" color="#4BF0C5" />
                  </div>
                  <p>We Are Doing The Right Thing</p>
                </div>
                <div class="flex items-center gap-[15px]">
                  <div
                    class="size-6 flex items-center justify-center bg-[#323543] rounded-full"
                  >
                    <Check size="18" color="#4BF0C5" />
                  </div>
                  <p>Development of Financial Models</p>
                </div>
                <div class="flex items-center gap-[15px]">
                  <div
                    class="size-6 flex items-center justify-center bg-[#323543] rounded-full"
                  >
                    <Check size="18" color="#4BF0C5" />
                  </div>
                  <p>Corporate Financial Advisory</p>
                </div>
                <div class="flex items-center gap-[15px]">
                  <div
                    class="size-6 flex items-center justify-center bg-[#323543] rounded-full"
                  >
                    <Check size="18" color="#4BF0C5" />
                  </div>
                  <p>Valuation Services</p>
                </div>
              </div>
            </div>

            <div
              class="relative flex items-stretch md:h-[520px] h-[400px] md:mt-0 mt-8"
            >
              <!-- Left Section -->
              <div
                class="bg-purple w-[220px] h-full flex flex-col items-center justify-around rounded-bl-[20px] relative"
              >
                <!-- Play Button -->
                <div class="sm:p-2 p-1.5 border border-white rounded-full">
                  <button
                    @click="openModal"
                    class="sm:w-20 w-16 sm:h-20 h-16 rounded-full bg-secondary flex items-center justify-center hover:scale-110 transition cursor-pointer sm:text-[28px] text-2xl"
                  >
                    ▶
                  </button>
                </div>

                <h6 class="text-white heading-six max-w-32">
                  Professional IT technology services you can trust
                </h6>
              </div>

              <!-- Image -->
              <div class="relative w-full h-full">
                <img
                  :src="solution"
                  alt="Solution"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <VideoModal :showModal="showModal" @closeModal="closeModal" />
      </div>
    </div>
  </div>
</template>
