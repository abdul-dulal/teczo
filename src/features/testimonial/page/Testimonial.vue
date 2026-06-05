<script setup>
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
import BreadCumb from "@/features/about/components/BreadCumb.vue";
import featureImg from "@/assets/img/other/feature.png";
import ClientFeedback from "../components/ClientFeedback.vue";
</script>
<template>
  <div>
    <BreadCumb title="About Us" />
    <Feature :img="featureImg" />
    <ClientFeedback />
    <FooterTwo />
  </div>
</template>
