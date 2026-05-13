<script setup>
import TopHeader from "@/components/common/header/TopHeader.vue";
import HeaderThree from "../components/HeaderThree.vue";
import HeroSlider from "../components/HeroSlider.vue";
import Technology from "../components/Technology.vue";
import CustomerService from "../components/CustomerService.vue";
import Counter from "../components/Counter.vue";
import Choose from "../components/Choose.vue";
import Projects from "../components/Projects.vue";
import PricePlan from "@/features/HomeTwo/components/PricePlan.vue";
import Testimonial from "@/features/HomeTwo/components/Testimonial.vue";
import Services from "../components/Services.vue";
import Faq from "../components/Faq.vue";
import ClientSlider from "../components/ClientSlider.vue";
import Feature from "../components/Feature.vue";
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
import banner from "@/assets/img/homeThree/bg.png";
</script>
<template>
  <TopHeader />
  <HeaderThree />
  <HeroSlider />
  <Technology />
  <CustomerService />
  <Counter />
  <Choose />
  <Projects />
  <PricePlan />
  <Testimonial />
  <Services />
  <Faq />
  <ClientSlider />
  <Feature :img="banner" />
  <FooterTwo />
</template>
