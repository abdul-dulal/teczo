<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap, ScrollTrigger } from "@/plugins/gsap";
import Header from "@/components/common/header/Header.vue";
import TopHeader from "@/components/common/header/TopHeader.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Services from "../components/Services.vue";
import Showcase from "../components/Showcase.vue";
import Award from "../components/Award.vue";
import Solution from "../components/Solution.vue";
import Slider from "../components/Slider.vue";
import Business from "../components/Business.vue";
import Faq from "../components/Faq.vue";
import Blog from "../components/Blog.vue";
import Footer from "@/components/common/footer/Footer.vue";

const topBarRef = ref(null);
const progressBarRef = ref(null);
let ctx;
const previousScrollBehavior = document.documentElement.style.scrollBehavior;

onMounted(() => {
  document.documentElement.style.scrollBehavior = "smooth";

  ctx = gsap.context(() => {
    gsap.from(topBarRef.value, {
      y: -40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (progressBarRef.value) {
          progressBarRef.value.style.width = `${self.progress * 100}%`;
        }
      },
    });
  });
});

onBeforeUnmount(() => {
  document.documentElement.style.scrollBehavior = previousScrollBehavior;
  ctx?.revert();
});
</script>

<template>
  <div
    ref="progressBarRef"
    class="fixed top-0 left-0 h-[3px] bg-secondary z-9999 w-0 pointer-events-none"
  ></div>
  <div ref="topBarRef">
    <TopHeader />
    <Header />
  </div>
  <Hero />
  <About />
  <Services />
  <Showcase />
  <Award />
  <Solution />
  <Slider />
  <Business />
  <Faq />
  <Blog />
  <Footer />
</template>
