<script setup>
import { ref } from "vue";
import hero from "@/assets/img/home/hero.png";
import Button from "@/components/base/Button.vue";
import shape from "@/assets/img/home/shape.png";
import star from "@/assets/img/home/star.png";
import starShape from "@/assets/img/home/star-shape.png";
import wave from "@/assets/img/home/wave.png";
import { gsap, ScrollTrigger, SplitText } from "@/plugins/gsap";
import { useGsapScope } from "@/composables/useGsapScope";

const eyebrowRef = ref(null);
const headingRef = ref(null);
const buttonRef = ref(null);
const heroImageRef = ref(null);
const shapeRef = ref(null);
const starRef = ref(null);
const starShapeRef = ref(null);
const waveRef = ref(null);

const root = useGsapScope(() => {
  const split = new SplitText(headingRef.value, { type: "words" });

  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .from(eyebrowRef.value, { y: 20, opacity: 0, duration: 0.6 })
    .from(split.words, { y: 40, opacity: 0, duration: 0.7, stagger: 0.06 }, "-=0.3")
    .from(buttonRef.value, { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
    .from(heroImageRef.value, { scale: 0.92, opacity: 0, duration: 0.9 }, "-=0.6")
    .from(
      [shapeRef.value, starRef.value, starShapeRef.value, waveRef.value],
      { opacity: 0, duration: 0.8, stagger: 0.1 },
      "-=0.7"
    );

  gsap.to(starRef.value, {
    yPercent: -20,
    ease: "none",
    scrollTrigger: { trigger: root.value, start: "top top", end: "bottom top", scrub: true },
  });
  gsap.to(starShapeRef.value, {
    yPercent: 20,
    ease: "none",
    scrollTrigger: { trigger: root.value, start: "top top", end: "bottom top", scrub: true },
  });
  gsap.to(waveRef.value, {
    yPercent: -15,
    ease: "none",
    scrollTrigger: { trigger: root.value, start: "top top", end: "bottom top", scrub: true },
  });
});
</script>

<template>
  <div ref="root" class="bg-bg overflow-hidden">
    <div class="relative">
      <div ref="shapeRef" class="absolute left-0 -top-10">
        <img :src="shape" class="" alt="Shape" />
      </div>
      <div class="max-w-[1700px] mx-auto relative pt-[100px] pb-[109px]">
        <div ref="starRef" class="absolute left-4 bottom-10">
          <img :src="star" alt="Star" />
        </div>
        <div ref="starShapeRef" class="absolute right-8 top-16">
          <img :src="starShape" alt="" />
        </div>
        <div ref="waveRef" class="absolute bottom-20 left-1/2 -translate-x-1/2">
          <img :src="wave" alt="" />
        </div>
        <div class="container">
          <div
            class="grid md:grid-cols-[45%_43%] grid-cols-1 xl:gap-[150px] md:gap-20 gap-10 items-center"
          >
            <div class="z-99">
              <h6 ref="eyebrowRef" class="heading-six text-secondary">
                Solution for your business
              </h6>
              <h2
                ref="headingRef"
                class="2xl:text-[94px] lg:text-[70px] sm:text-[55px] text-[45px] text-white font-bold 2xl:leading-[95px] lg:leading-[70px] sm:leading-[55px] leading-11"
              >
                Technology Solutions for Future
              </h2>
              <div ref="buttonRef">
                <Button
                  class="bg-secondary text-primary mt-[50px]"
                  btnTitle="Discover More"
                />
              </div>
            </div>
            <div ref="heroImageRef">
              <img :src="hero" alt="Hero" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
