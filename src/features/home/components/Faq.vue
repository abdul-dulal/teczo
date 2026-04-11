<script setup>
import InputField from "@/components/common/InputField.vue";
import { faqs } from "@/demoData";
import { ref } from "vue";
import { reactive } from "vue";

const activeIndex = ref(2); // default open like image

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = () => {
  console.log("Form Data:", { ...form });
};
</script>

<template>
  <div class="section-base">
    <div class="container">
      <div class="grid grid-cols-2 gap-20">
        <div class="">
          <div class="mb-6">
            <h6 class="text-purple heading-six mb-[30px]">
              Our Question And Answer
            </h6>
            <h2 class="heading-one mb-10 max-w-[380px]">
              See Frequently Asked Questions
            </h2>
          </div>

          <div class="space-y-5">
            <div
              v-for="(item, index) in faqs"
              :key="index"
              class="rounded-2xl transition-all duration-500 cursor-pointer z-999"
            >
              <button
                @click="toggle(index)"
                class="w-full flex items-center justify-between px-[30px] py-6 rounded-full transition-all duration-500 cursor-pointer"
                :class="
                  activeIndex === index
                    ? 'bg-gray-900 text-white'
                    : 'bg-light-gray text-gray-900'
                "
              >
                <span class="heading-six text-left">
                  {{ item.question }}
                </span>

                <svg
                  class="w-5 h-5 transition-transform duration-300"
                  :class="{ 'rotate-180': activeIndex === index }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <transition name="faq">
                <div
                  v-if="activeIndex === index"
                  class="paragraph px-[30px] bg-light-gray pt-14 pb-5 rounded-bl-[30px] rounded-br-[30px] -mt-10 relative -z-99"
                >
                  {{ item.answer }}
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="border-t-8 border-primary rounded-[20px]">
          <div class="bg-secondary rounded-[20px] -mt-1">
            <div class="w-full rounded-2xl p-[60px]">
              <h6 class="mb-6 heading-six text-purple">Contact Us</h6>
              <h2 class="heading-one mb-7">Let’s Contact With Us</h2>

              <!-- Form -->
              <form @submit.prevent="handleSubmit" class="space-y-[15px]">
                <input-field
                  v-model="form.name"
                  placeholder="Your full name*"
                  type="name"
                />
                <input-field
                  v-model="form.email"
                  placeholder="Write your email*"
                  type="text"
                />
                <input-field
                  v-model="form.phone"
                  placeholder="Your phone number"
                  type="text"
                />

                <textarea
                  v-model="form.message"
                  placeholder="Write your message"
                  rows="4"
                  class="w-full rounded-[10px] text-sm font-normal border border-primary bg-transparent px-4 py-3 outline-none placeholder:text-primary"
                ></textarea>

                <!-- Button -->
                <button
                  type="submit"
                  class="w-full text-base rounded-[20px] leading-7 bg-purple py-6 text-white font-medium transition cursor-pointer"
                >
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-enter-from,
.faq-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-5px);
}

.faq-enter-to,
.faq-leave-from {
  max-height: 200px;
  opacity: 1;
  transform: translateY(0);
}
</style>
