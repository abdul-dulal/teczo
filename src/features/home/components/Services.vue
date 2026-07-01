<script setup>
import Button from "@/components/base/Button.vue";
import { services } from "@/demoData";
import { ArrowUpRight } from "lucide-vue-next";
import { gsap } from "@/plugins/gsap";
import { useGsapScope } from "@/composables/useGsapScope";

const root = useGsapScope((el) => {
  gsap.from(el.querySelectorAll(".services-heading > *"), {
    opacity: 0,
    y: 24,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: { trigger: el.querySelector(".services-heading"), start: "top 80%" },
  });

  gsap.from(el.querySelectorAll(".service-card"), {
    opacity: 0,
    y: 50,
    scale: 0.95,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: { trigger: el.querySelector(".service-grid"), start: "top 80%" },
  });
});
</script>

<template>
  <div ref="root" class="section-base bg-[#F7F7F9]">
    <div class="max-w-[1790px] mx-auto px-5">
      <div class="services-heading max-w-[651px] mx-auto">
        <h6 class="heading-six text-center">Our service</h6>
        <h2 class="heading-one text-center sm:my-[30px] my-6">
          Service we are always try to provide our customers
        </h2>
      </div>
      <div class="service-grid grid xl:grid-cols-4 sm:grid-cols-2 gap-[30px]">
        <div v-for="(service, index) in services" :key="index" class="service-card">
          <div class="p-5 bg-white rounded-[20px]">
            <img :src="service.img" :alt="service.serviceName" />
            <h4
              class="2xl:text-[26px] text-[22px] font-semibold text-primary py-[22px]"
            >
              {{ service.serviceName }}
            </h4>
            <p class="paragraph pb-20">
              Integer fringilla sed lacus non venenatis. Viva mus turpis ex,
              suscipit sit amet lorem
            </p>
          </div>
          <div
            class="w-[210px] h-20 rounded-[40px] bg-[#F7F7F9] block m-auto relative -top-10 pt-[15px]"
          >
            <div class="block m-auto w-full">
              <div class="flex items-center justify-center gap-0">
                <button
                  class="flex items-center bg-purple text-white xl:text-base text-sm leading-7 font-medium 2xl:px-5 px-3 2xl:py-4 py-2.5 rounded-full cursor-pointer"
                >
                  Read More
                </button>

                <button
                  class="2xl:size-[50px] size-10 rounded-full bg-purple flex items-center justify-center text-white cursor-pointer"
                >
                  <ArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
