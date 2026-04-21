<script setup>
import { ChevronUp, MoveUpRight } from "lucide-vue-next";
import { ref } from "vue";
import banner from "@/assets/img/homeThree/faq-banner.png";

const activeIndex = ref(1);

const faqs = ref([
  {
    question: "How Do You Help Startups With Product Development?",
    answer:
      "Yes, we offer ongoing maintenance services to keep your landscape looking its best year-round. From lawn care and seasonal clean-ups to irrigation system maintenance and plant care, we ensure your landscape remains healthy and vibrant.",
  },
  {
    question: "Do You Provide Financial Planning And Forecasting?",
    answer:
      "Yes, we offer ongoing maintenance services to keep your landscape looking its best year-round. From lawn care and seasonal clean-ups to irrigation system maintenance and plant care, we ensure your landscape remains healthy and vibrant.",
  },
  {
    question: "How Do You Help Startups With Product Development?",
    answer:
      "Yes, we offer ongoing maintenance services to keep your landscape looking its best year-round. From lawn care and seasonal clean-ups to irrigation system maintenance and plant care, we ensure your landscape remains healthy and vibrant.",
  },
  {
    question: "How do you help startups with product development?",
    highlight: "",
    answer:
      "Yes, we offer ongoing maintenance services to keep your landscape looking its best year-round. From lawn care and seasonal clean-ups to irrigation system maintenance and plant care, we ensure your landscape remains healthy and vibrant.",
  },
]);

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section class="section-base relative overflow-hidden">
    <div class="absolute left-0 top-1/2 -translate-y-1/2">
      <img :src="banner" alt="Faq Banner" />
      <div
        class="absolute right-[60px] p-[30px] bottom-[60px] bg-[linear-gradient(239.18deg,rgba(255,255,255,0.08)_17.93%,rgba(255,255,255,0.02)_81.51%)] size-[260px] rounded-[15px] backdrop-blur-2xl"
      >
        <div class="flex flex-col justify-between h-full">
          <button class="text-secondary flex justify-end cursor-pointer">
            <MoveUpRight size="35" />
          </button>
          <h6
            class="heading-six text-white max-w-[180px] font-inter tracking-[-0.2px]"
          >
            Wanna know about our technology agency?
          </h6>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="grid grid-cols-2">
        <div></div>
        <div class="">
          <div>
            <h6 class="heading-six text-purple mb-4">Check Our Faq</h6>
            <h2 class="heading-one text-primary max-w-[530px] mb-8">
              What people ask about our tech agency
            </h2>
          </div>
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="bg-white rounded-2xl border border-primary/10 transition-all duration-300 mb-6 relative"
          >
            <div class="w-20 h-[22px] bg-white absolute -top-3 left-10 z-999">
              Question
            </div>

            <button
              @click="toggle(index)"
              class="w-full flex items-center justify-between px-7 pt-[17px] pb-6 text-left"
            >
              <h3
                class="text-xl font-medium leading-8"
                :class="activeIndex === index ? 'text-purple' : ''"
              >
                {{ item.question }}
              </h3>

              <!-- Arrow Button -->
              <div
                class="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300"
                :class="
                  activeIndex === index
                    ? 'bg-purple-600 text-white rotate-180'
                    : 'bg-gray-100 text-gray-500'
                "
              >
                <ChevronUp />
              </div>
            </button>

            <!-- Answer -->
            <div
              class="grid transition-all duration-300 ease-in-out"
              :style="{
                gridTemplateRows: activeIndex === index ? '1fr' : '0fr',
              }"
            >
              <div class="overflow-hidden">
                <div class="px-5 pb-8">
                  <h4 class="text-sm font-medium text-purple-600">
                    {{ item.highlight }}
                  </h4>

                  <p class="text-sm text-text leading-6">
                    {{ item.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
