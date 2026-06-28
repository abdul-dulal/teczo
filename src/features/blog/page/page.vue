<script setup>
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
import BreadCumb from "@/features/about/components/BreadCumb.vue";
import Blog from "@/features/home/components/Blog.vue";
</script>
<template>
  <div>
    <BreadCumb title="Our Blog" />
    <Blog :showTitle="false" :sliceNumber="6" />
    <FooterTwo />
  </div>
</template>
