<script setup>
import featureImg from "@/assets/img/other/feature.png";
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
import BreadCumb from "@/features/about/components/BreadCumb.vue";
import Feature from "@/features/HomeThree/components/Feature.vue";
import OurServices from "@/features/HomeTwo/components/OurServices.vue";
</script>
<template>
  <div>
    <BreadCumb title="Our Services" />
    <OurServices :isShow="false" />
    <Feature :img="featureImg" />
    <FooterTwo />
  </div>
</template>
