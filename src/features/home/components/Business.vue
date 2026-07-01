<script setup>
import { ref } from "vue";
import business from "@/assets/img/home/business.png";
import shape from "@/assets/img/home/in-shape.png";
import star from "@/assets/img/home/color-start.png";
import wave from "@/assets/img/home/color-wave.png";
import { gsap, ScrollTrigger } from "@/plugins/gsap";
import { useGsapScope } from "@/composables/useGsapScope";

const progressList = ref([
  { label: "Website & App Development", value: 80, current: 0 },
  { label: "IT Solution & Management", value: 95, current: 0 },
  { label: "Digital Marketing", value: 65, current: 0 },
]);

const root = useGsapScope((el) => {
  gsap.from(el.querySelector(".business-media"), {
    opacity: 0,
    x: -40,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: { trigger: el.querySelector(".business-media"), start: "top 80%" },
  });

  gsap.from(el.querySelectorAll(".business-text > *"), {
    opacity: 0,
    y: 24,
    duration: 0.7,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: { trigger: el.querySelector(".business-text"), start: "top 80%" },
  });

  const bars = el.querySelectorAll(".progress-bar-fill");
  gsap.set(bars, { scaleX: 0 });

  ScrollTrigger.create({
    trigger: el.querySelector(".progress-block"),
    start: "top 80%",
    once: true,
    onEnter: () => {
      progressList.value.forEach((item, index) => {
        gsap.to(bars[index], {
          scaleX: item.value / 100,
          duration: 1.4,
          delay: index * 0.15,
          ease: "power2.out",
        });
        gsap.to(item, {
          current: item.value,
          duration: 1.4,
          delay: index * 0.15,
          ease: "power2.out",
        });
      });
    },
  });
});
</script>

<template>
  <div ref="root" class="relative w-full overflow-hidden">
    <div class="absolute inset-0 grid grid-cols-2">
      <div class="bg-purple rounded-tr-[140px]"></div>
      <div class="bg-light-gray rounded-tl-[140px]"></div>
    </div>

    <div class="max-w-[1600px] mx-auto px-5 relative z-10">
      <div class="grid lg:grid-cols-2">
        <div class="business-media relative bg-purple rounded-tr-[140px] pr-20 py-20">
          <div class="absolute top-[15%] right-[22%]">
            <img :src="shape" alt="Shape" />
          </div>
          <div class="absolute bottom-10 left-[16%]">
            <img :src="star" alt="Star" />
          </div>
          <img :src="business" alt="Business" />
        </div>

        <div
          class="relative bg-light-gray rounded-tl-[140px] lg:pl-20 pl-10 py-20"
        >
          <div class="absolute bottom-0 -right-[20%]">
            <img :src="wave" alt="Wave" />
          </div>

          <div class="business-text">
            <h6 class="heading-six text-purple mb-5">
              Our technology progress
            </h6>

            <h2 class="heading-one mb-6">
              Increasing business success with technology
            </h2>

            <p class="paragraph mb-10">
              Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
              suscipit sit amet lorem dictum purus. Sed nec arcu id nunc
              porttitor porta nec nec dui. Vestibulum comm ut enim dignissim,
              condimentum rhoncus arcu gravida.
            </p>
          </div>

          <div class="progress-block">
            <div v-for="(item, index) in progressList" :key="index">
              <div class="flex justify-between text-primary">
                <span class="heading-six font-bold mb-2.5">{{ item.label }}</span>
                <span class="heading-six font-bold mb-4">{{ Math.round(item.current) }}%</span>
              </div>

              <div class="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  class="progress-bar-fill h-full w-full bg-purple-600 rounded-full origin-left"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
