<script setup>
import { blogs } from "@/demoData";
</script>

<template>
  <div class="container">
    <div class="max-w-[585px] block mx-auto text-center">
      <h6 class="heading-six text-purple mb-5">Our latest post</h6>
      <h2 class="heading-one mb-7">Read & gather knowledge from our news</h2>
    </div>
    <div class="grid grid-cols-3 gap-[30px]">
      <div v-for="(blog, index) in blogs" :key="index">
        <img
          class="w-full rounded-[30px]"
          :src="blog.img"
          :alt="blog.blogTitle"
        />
        <h4 class="heading-four my-[30px] text-primary">
          {{ blog.blogTitle }}
        </h4>
        <button
          class="py-[11px] paragraph text-primary px-5 border border-primary/10 rounded-full"
        >
          {{ blog.desc }}
        </button>
      </div>
    </div>
  </div>
</template>
