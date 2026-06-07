<script setup>
import { ArrowRight, Check } from "lucide-vue-next";

const plans = [
  {
    title: "Basic plan",
    price: 265,
    active: false,
    features: [
      "Assessment & strategy consultation",
      "Email & collaboration tools setup",
      "Hardware recommendations",
      "Cloud computing advisory",
      "Basic cybersecurity audit",
    ],
  },
  {
    title: "Standard plan",
    price: 265,
    active: true, // 🔥 middle one highlight
    features: [
      "Assessment & strategy consultation",
      "Email & collaboration tools setup",
      "Hardware recommendations",
      "Cloud computing advisory",
      "Basic cybersecurity audit",
    ],
  },
  {
    title: "Premium plan",
    price: 265,
    active: false,
    features: [
      "Assessment & strategy consultation",
      "Email & collaboration tools setup",
      "Hardware recommendations",
      "Cloud computing advisory",
      "Basic cybersecurity audit",
    ],
  },
];
defineProps({
  isShow: Boolean,
});
</script>

<template>
  <div class="section-base">
    <div class="container">
      <div class="max-w-[640px] mx-auto" :class="isShow ? 'block' : 'hidden'">
        <h6 class="heading-six mb-5 text-center text-purple">
          Our Pricing Plans
        </h6>
        <h2 class="heading-one mb-10 text-center">
          Suitable pricing plans for all customers & owners
        </h2>
      </div>
      <div class="grid grid-cols-3 gap-[30px]">
        <div
          v-for="(plan, i) in plans"
          :key="i"
          :class="[
            'rounded-2xl p-10 border transition-all duration-300',
            plan.active
              ? 'bg-primary text-white shadow-xl '
              : 'bg-white text-black border-gray-200',
          ]"
        >
          <!-- Title -->
          <h6 class="heading-six text-primary mb-5">
            {{ plan.title }}
          </h6>

          <!-- Price -->
          <div class="flex items-center gap-6 mb-8">
            <span
              :class="plan.active ? 'text-secondary' : 'text-purple'"
              class="text-[60px] leading-7 font-bold"
            >
              ${{ plan.price }}
            </span>
            <span class="text-base font-normal font-inter leading-6 opacity-70">
              Per user <br />
              Per month
            </span>
          </div>

          <!-- Button -->
          <button
            :class="[
              'w-full py-4 rounded-md text-base leading-7 font-medium mb-2.5 cursor-pointer  transition',
              plan.active ? 'bg-white text-black ' : 'bg-primary text-white',
            ]"
          >
            Choose Your Plan
          </button>

          <button
            :class="[
              'w-full py-4 border mb-10 rounded-md text-base leading-7 font-medium cursor-pointer  transition',
              plan.active ? ' border-white/15' : ' border-primary/15',
            ]"
          >
            Chat to Sale
          </button>

          <ul
            :class="[
              'space-y-4 text-base font-normal font-inter leading-[30px] mb-8 border-b  pb-7',
              plan.active ? 'border-white/15' : 'border-primary/15',
            ]"
          >
            <li
              v-for="(f, index) in plan.features"
              :key="index"
              class="flex gap-2 items-start"
            >
              <span> <Check /></span>
              <span>{{ f }}</span>
            </li>
          </ul>

          <button
            :class="[
              'flex items-center justify-between w-full text-base font-inter font-medium  cursor-pointer',
              plan.active ? 'text-white' : 'text-primary',
            ]"
          >
            <span>Access full details PDF</span>
            <span> <ArrowRight /></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
