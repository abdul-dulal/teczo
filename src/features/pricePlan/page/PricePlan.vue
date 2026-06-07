<script setup>
import featureImg from "@/assets/img/other/feature.png";
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
import BreadCumb from "@/features/about/components/BreadCumb.vue";
import Feature from "@/features/HomeThree/components/Feature.vue";
import PricePlan from "@/features/HomeTwo/components/PricePlan.vue";
</script>
<template>
  <div>
    <BreadCumb title="Price Plan" />
    <PricePlan :isShow="false" />
    <Feature :img="featureImg" />
    <FooterTwo />
  </div>
</template>
