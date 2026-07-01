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
        <div
          class="grid lg:grid-cols-[60%_32%] 2xl:gap-[100px] lg:gap-20 gap-10"
        >
          <div class="order-2 lg:order-1">
            <BlogDetails />
          </div>
          <div class="order-1 lg:order-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
    <FooterTwo />
  </div>
</template>
