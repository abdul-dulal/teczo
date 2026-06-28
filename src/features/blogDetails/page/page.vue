<script setup>
import FooterTwo from "@/components/common/footer/FooterTwo.vue";
import BreadCumb from "@/features/about/components/BreadCumb.vue";
import Sidebar from "@/features/blogSidebar/components/Sidebar.vue";
import BlogDetails from "../components/BlogDetails.vue";
</script>
<template>
  <div>
    <BreadCumb title="Blog Details" />
    <div class="section-base">
      <div class="container">
        <div class="grid grid-cols-[60%_32%] gap-[100px]">
          <BlogDetails />
          <Sidebar />
        </div>
      </div>
    </div>
    <FooterTwo />
  </div>
</template>
