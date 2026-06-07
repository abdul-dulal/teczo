<script setup>
import Blog from "@/features/home/components/Blog.vue";
import Agency from "../components/Agency.vue";
import Creative from "../components/Creative.vue";
import Hero from "../components/Hero.vue";
import Management from "../components/Management.vue";
import Marque from "../components/Marque.vue";
import PricePlan from "../components/PricePlan.vue";
import Success from "../components/Success.vue";
import Team from "../components/Team.vue";
import TeamProject from "../components/TeamProject.vue";
import Footer from "@/components/common/footer/Footer.vue";
import OurServices from "../components/OurServices.vue";
</script>
<template>
  <Hero />
  <OurServices />
  <Agency />
  <TeamProject />
  <Success />
  <Creative />
  <Team />
  <Marque />
  <PricePlan :isShow="true" />
  <Management />
  <Blog />
  <Footer />
</template>
