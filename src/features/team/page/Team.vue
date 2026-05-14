<script setup>
import BreadCumb from "@/features/about/components/BreadCumb.vue";
import Team from "@/features/HomeTwo/components/Team.vue";
import featureImg from "@/assets/img/other/feature.png";
import Feature from "@/features/HomeThree/components/Feature.vue";
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
</script>
<template>
  <BreadCumb title="Our Team" />
  <Team :showTitle="false" :sliceNumber="6" />
  <Feature :img="featureImg" />
  <FooterTwo />
</template>
