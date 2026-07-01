<script setup>
import { blogs } from "@/demoData";
import { gsap } from "@/plugins/gsap";
import { useGsapScope } from "@/composables/useGsapScope";

defineProps({
  showTitle: { type: Boolean, default: true },
  sliceNumber: { type: Number, default: 3 },
});

const root = useGsapScope((el) => {
  const heading = el.querySelector(".blog-heading");
  if (heading) {
    gsap.from(heading.children, {
      opacity: 0,
      y: 24,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: heading, start: "top 80%" },
    });
  }

  gsap.from(el.querySelectorAll(".blog-card"), {
    opacity: 0,
    y: 50,
    scale: 0.96,
    duration: 0.7,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: { trigger: el.querySelector(".blog-grid"), start: "top 80%" },
  });
});
</script>

<template>
  <div ref="root" :class="showTitle ? '' : 'section-base'">
    <div class="container">
      <div v-if="showTitle" class="blog-heading max-w-[585px] block mx-auto text-center">
        <h6 class="heading-six text-purple mb-5">Our latest post</h6>
        <h2 class="heading-one mb-7">Read & gather knowledge from our news</h2>
      </div>
      <div class="blog-grid grid lg:grid-cols-3 md:grid-cols-2 xl:gap-[30px] gap-6">
        <div
          v-for="(blog, index) in blogs.slice(0, sliceNumber)"
          :key="index"
          class="blog-card relative"
        >
          <img
            class="w-full rounded-[30px]"
            :src="blog.img"
            :alt="blog.blogTitle"
          />
          <a href="/" class="heading-four my-[30px] text-primary block">
            {{ blog.blogTitle }}
          </a>
          <button
            class="py-[11px] paragraph text-primary px-5 border border-primary/10 rounded-full"
          >
            {{ blog.desc }}
          </button>
          <button
            class="w-[77px] h-20 rounded-[10px] bg-purple absolute top-5 left-5"
          >
            <h4 class="text-[26px] font-semibold text-white">22</h4>
            <p class="text-base font-normal text-white">Jan</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
