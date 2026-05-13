<script setup>
import Technology from "@/features/HomeThree/components/Technology.vue";
import BreadCumb from "../components/BreadCumb.vue";
import Solution from "@/features/home/components/Solution.vue";
import ClientTestimonial from "@/features/HomeFive/components/ClientTestimonial.vue";
import Business from "@/features/HomeFive/components/Business.vue";
import Team from "@/features/HomeTwo/components/Team.vue";
import Feature from "@/features/HomeThree/components/Feature.vue";
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
import featureImg from "@/assets/img/other/feature.png";
</script>
<template>
  <div>
    <BreadCumb title="About Us" />
    <Technology />
    <Solution />
    <ClientTestimonial />
    <Business />
    <Team />
    <Feature :img="featureImg" />
    <FooterTwo />
  </div>
</template>
