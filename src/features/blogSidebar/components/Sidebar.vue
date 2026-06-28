<script setup>
import { ChevronRight, Clock4, UserPen } from "lucide-vue-next";
import lp01 from "@/assets/img/blog/lp01.png";
import lp02 from "@/assets/img/blog/lp02.png";
import lp03 from "@/assets/img/blog/lp03.png";
import icon01 from "@/assets/img/blog/user.svg";
import icon02 from "@/assets/img/blog/dev.svg";
import icon03 from "@/assets/img/blog/app.svg";
import icon04 from "@/assets/img/blog/seo.svg";
import icon05 from "@/assets/img/blog/ill.svg";

const posts = [
  {
    id: 1,
    title: "Intuitive Header by Choose a Pre-Built Header",
    date: "April 24, 2024",
    image: lp01,
  },
  {
    id: 2,
    title: "Intuitive Header by Choose a Pre-Built Header",
    date: "June 17, 2024",
    image: lp02,
  },
  {
    id: 3,
    title: "Intuitive Header by Choose a Pre-Built Header",
    date: "May 12, 2024",
    image: lp03,
  },
];

const categories = [
  { name: "Content Management", icon: icon01 },
  { name: "Development", icon: icon02 },
  { name: "Mobile Application", icon: icon03 },
  { name: "SEO Analytics", icon: icon04 },
  { name: "Illustration", icon: icon05 },
];

const tags = [
  { name: "Technology" },
  { name: "Digital" },
  { name: "Marketing" },
  { name: "Solutions" },
  { name: "Site analytics" },
  { name: "User" },
];
</script>
<template>
  <aside class="w-full space-y-8">
    <!-- Search -->
    <div>
      <div class="relative">
        <input
          type="text"
          placeholder="Enter your keywords..."
          class="shadow-[0px_1px_3px_0px_rgba(3,4,28,0.10)] bg-light-gray w-full h-[60px] rounded-xl text-[#5C6972] px-6 text-[15px]"
        />

        <svg
          class="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>

    <!-- Latest Post -->
    <div>
      <h3 class="text-[22px] font-bold leading-7 my-[30px] text-bg">
        Latest Post
      </h3>

      <div class="flex flex-col gap-1.5">
        <div
          v-for="post in posts"
          :key="post.id"
          class="flex gap-3 shadow-[0px_1px_3px_0px_#03041C1A] p-3 bg-light-gray"
        >
          <img
            :src="post.image"
            class="h-[90px] w-[90px] rounded-md object-cover"
          />

          <div>
            <h4 class="text-lg font-bold text-bg leading-5">
              {{ post.title }}
            </h4>

            <p class="flex items-center gap-2 mt-4 text-[14px] text-[#5C6972]">
              <Clock4 size="12" />{{ post.date }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <div class="rounded-2xl bg-light-gray p-10">
      <h3 class="text-[22px] font-bold leading-7 mb-[30px] text-bg">
        Categories
      </h3>

      <div class="space-y-3">
        <div
          v-for="category in categories"
          :key="category.name"
          class="flex items-center gap-3"
        >
          <div
            class="flex items-center justify-between rounded-lg bg-white px-6 py-[22px] shadow-sm cursor-pointer hover:shadow-lg group w-full"
          >
            <div class="flex gap-4 items-center">
              <component :is="category.icon" class="transition duration-300" />
              <span
                class="text-base font-medium leading-0 text-[#5C6972] group-hover:text-purple"
              >
                {{ category.name }}</span
              >
            </div>

            <span> <ChevronRight size="16" color="#5C6972" /></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tags -->
    <div>
      <h3 class="text-[22px] font-bold leading-7 mb-[30px] text-bg">Tags</h3>

      <div class="flex flex-wrap gap-2.5">
        <button
          v-for="tag in tags"
          :key="tag.name"
          class="rounded-[10px] px-[19px] py-3 text-lg font-medium bg-light-gray text-[#5C6972] hover:bg-purple-600 hover:text-white cursor-pointer transition-all ease-in-out duration-500"
        >
          {{ tag.name }}
        </button>
      </div>
    </div>
  </aside>
</template>
