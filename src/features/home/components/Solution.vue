<script setup>
import { ref } from "vue";
import solution from "@/assets/img/home/solution.png";
import bright from "@/assets/img/home/bright.png";
import { Check } from "@lucide/vue";
import tips from "@/assets/img/home/tips.png";
import Button from "@/components/base/Button.vue";

const showModal = ref(false);

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
        <div class="relative ml-0 w-[calc(100vw-10px)] mr-10 overflow-visible">
          <div class="px-6 flex gap-[8%]">
            <div class="max-w-[530px] text-white">
              <h6 class="heading-six text-secondary mb-5">Tech Management</h6>

              <h2 class="heading-one text-white">
                The Best Source For <br />
                IT Solutions
              </h2>

              <p class="paragraph mt-5">
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

            <div class="relative flex items-stretch h-[520px]">
              <!-- Left Section -->
              <div
                class="bg-purple w-[220px] h-full flex flex-col items-center justify-around rounded-bl-[20px] relative"
              >
                <!-- Play Button -->
                <div class="p-2 border border-white rounded-full">
                  <button
                    @click="openModal"
                    class="w-20 h-20 rounded-full bg-secondary flex items-center justify-center hover:scale-110 transition cursor-pointer text-[28px]"
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

        <div
          v-if="showModal"
          class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          @click.self="closeModal"
        >
          <div
            class="bg-black rounded-xl overflow-hidden w-[90%] max-w-3xl relative"
          >
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute top-2 right-3 text-white text-2xl"
            >
              ✕
            </button>

            <!-- Video -->
            <iframe
              class="w-full h-[400px]"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full bg-cover bg-center bg-no-repeat section-base"
      :style="{ backgroundImage: `url(${tips})` }"
    >
      <h2
        class="max-w-[860px] block m-auto text-center text-[70px] leading-[75px] font-bold text-white"
      >
        Best technology solution in your fingertips
      </h2>
      <div class="flex items-center justify-center">
        <Button
          class="bg-secondary text-primary mt-[50px] py-4"
          btnTitle="Discover More"
        />
      </div>
    </div>
  </div>
</template>
