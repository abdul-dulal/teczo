<script setup>
import featureImg from "@/assets/img/other/feature.png";
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
import BreadCumb from "@/features/about/components/BreadCumb.vue";
import Feature from "@/features/HomeThree/components/Feature.vue";
import Details from "../components/Details.vue";
</script>
<template>
  <BreadCumb title="Team Details" />
  <Details />
  <Feature :img="featureImg" />
  <FooterTwo />
</template>
