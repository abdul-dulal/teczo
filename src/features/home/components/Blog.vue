<script setup>
import { blogs } from "@/demoData";
defineProps({
  showTitle: { type: Boolean, default: true },
  sliceNumber: { type: Number, default: 3 },
});
</script>

<template>
  <div :class="showTitle ? '' : 'section-base'">
    <div class="container">
      <div v-if="showTitle" class="max-w-[585px] block mx-auto text-center">
        <h6 class="heading-six text-purple mb-5">Our latest post</h6>
        <h2 class="heading-one mb-7">Read & gather knowledge from our news</h2>
      </div>
      <div class="grid grid-cols-3 gap-[30px]">
        <div v-for="(blog, index) in blogs" :key="index" class="relative">
          <img
            class="w-full rounded-[30px]"
            :src="blog.img"
            :alt="blog.blogTitle"
          />
          <a href="/" class="heading-four my-[30px] text-primary block">
            {{ blog.blogTitle }}
          </a>
          <button
            class="py-[11px] paragraph text-primary px-5 border border-primary/10 rounded-full"
          >
            {{ blog.desc }}
          </button>
          <button
            class="w-[77px] h-20 rounded-[10px] bg-purple absolute top-5 left-5"
          >
            <h4 class="text-[26px] font-semibold text-white">22</h4>
            <p class="text-base font-normal text-white">Jan</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
