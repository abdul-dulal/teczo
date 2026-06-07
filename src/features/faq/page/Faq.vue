<script setup>
import featureImg from "@/assets/img/other/feature.png";
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
import BreadCumb from "@/features/about/components/BreadCumb.vue";
import Faq from "@/features/home/components/Faq.vue";
import OurFaq from "@/features/HomeThree/components/Faq.vue";
import Feature from "@/features/HomeThree/components/Feature.vue";
</script>
<template>
  <div>
    <BreadCumb title="Our Faq" />
    <OurFaq />
    <Faq />
    <Feature :img="featureImg" />
    <FooterTwo />
  </div>
</template>
