<script setup>
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
import BreadCumb from "@/features/about/components/BreadCumb.vue";
import featureImg from "@/assets/img/other/feature.png";
import Feature from "@/features/HomeThree/components/Feature.vue";
import Portfolio from "../components/Portfolio.vue";
</script>
<template>
  <div>
    <BreadCumb title="Our Portfolio" />
    <Portfolio :sliceNumber="6" />
    <Feature :img="featureImg" />
    <FooterTwo />
  </div>
</template>
