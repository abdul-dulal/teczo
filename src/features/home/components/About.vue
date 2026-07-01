<script setup>
import technology from "@/assets/img/home/technology.png";

import { stats } from "@/demoData";
import { gsap, ScrollTrigger } from "@/plugins/gsap";
import { useGsapScope } from "@/composables/useGsapScope";
import { animateCountUp } from "@/utils/animateCountUp";

const root = useGsapScope((el) => {
  gsap.from(el.querySelector(".about-eyebrow"), {
    opacity: 0,
    y: 24,
    duration: 0.7,
    ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 80%" },
  });

  gsap.from(el.querySelector(".about-image"), {
    opacity: 0,
    scale: 0.94,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: { trigger: el, start: "top 75%" },
  });

  gsap.from(el.querySelectorAll(".about-text > *"), {
    opacity: 0,
    y: 24,
    duration: 0.7,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: { trigger: el.querySelector(".about-text"), start: "top 80%" },
  });

  const cards = el.querySelectorAll(".stat-card");
  gsap.from(cards, {
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el.querySelector(".stat-grid"),
      start: "top 80%",
      onEnter: () => {
        cards.forEach((card) => {
          const numberEl = card.querySelector(".stat-number");
          animateCountUp(numberEl, numberEl.dataset.value);
        });
      },
    },
  });
});
</script>

<template>
  <div ref="root" class="section-base">
    <div class="container">
      <div
        class="grid md:grid-cols-[35.5%_60%] 2xl:gap-[60px] lg:gap-12 gap-[30px]"
      >
        <div>
          <h6 class="about-eyebrow heading-six text-purple lg:mb-20 mb-10">
            Know about ourself
          </h6>
          <div class="about-image">
            <img :src="technology" class="w-full h-auto" alt="Technology" />
          </div>
        </div>
        <div>
          <div class="about-text max-w-[665px] 2xl:mb-[60px] lg:mb-10 mb-6">
            <h2 class="heading-one">
              We Can Take Your Business to the Next Level.
            </h2>
            <p class="paragraph">
              Integer fringilla sed lacus non venenatis. Vivamus turpis ex,
              suscipit sit amet lorem ut, viverra dictum purus. Sed nec arcu id
              nunc porttitor porta nec nec dui. Vestibulum commodo diam ut enim
              dignissim, condimentum rhoncus arcu gravida.
            </p>
          </div>
          <div class="stat-grid grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
            <div v-for="(item, index) in stats" :key="index" class="stat-card">
              <img :src="item.img" alt="item.title" />
              <h4 class="text-[60px] font-bold leading-[60px] mt-[30px]">
                <span class="stat-number" :data-value="item.number">0</span>
              </h4>
              <h6 class="heading-six">{{ item.title }}</h6>
              <p class="paragraph">
                Integer fringilla sed lacus non venenatis. Vivamus turpis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
