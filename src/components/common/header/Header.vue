<script setup>
import { useRoute } from "vue-router";
import logo from "@/assets/img/logo/primary-logo.png";
import { ArrowUpRight, Search } from "@lucide/vue";

const route = useRoute();

const menu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Pages", path: "/pages" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
</script>

<template>
  <div class="flex items-center h-[90px]">
    <div class="bg-white w-[90%]">
      <div class="max-w-[1640px] px-5 mx-auto">
        <div class="flex items-center 2xl:gap-[135px] gap-10">
          <div>
            <router-link to="/">
              <img :src="logo" alt="Logo" />
            </router-link>
          </div>

          <nav class="hidden lg:flex items-center gap-8 text-sm font-medium">
            <router-link
              v-for="item in menu"
              :key="item.name"
              :to="item.path"
              :class="[
                route.path === item.path ? 'text-purple-700' : 'text-black',
                'hover:text-purple-700 transition-colors text-lg font-medium leading-7',
              ]"
            >
              {{ item.name }}
            </router-link>
          </nav>
        </div>
      </div>
    </div>
    <div className="flex  items-center ">
      <div
        class="flex items-center sm:gap-10 gap-5 bg-secondary rounded-tl-[45px] xl:w-[379px] sm:w-[280px] w-[200px] h-[90px] sm:pl-10 pl-7"
      >
        <button class="">
          <Search />
        </button>

        <div class="flex items-center">
          <button
            class="flex items-center gap-2 bg-purple xl:text-base text-sm text-white leading-7 font-medium xl:px-[30px] px-5 xl:py-3 py-2.5 rounded-full cursor-pointer"
          >
            Contact Us
          </button>
          <button
            class="size-10 rounded-full bg-purple sm:flex hidden items-center justify-center text-white cursor-pointer"
          >
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
