<script setup>
import { useRoute } from "vue-router";
import logo from "@/assets/img/logo/primary-logo.png";
import { ArrowUpRight, Search } from "@lucide/vue";
import SearchPopup from "./SearchPopup.vue";
import Drawer from "./Drawer.vue";
import { ref } from "vue";
import { menu } from "@/demoData";

const route = useRoute();
const isSearchOpen = ref(false);
</script>

<template>
  <div class="relative">
    <div
      class="max-w-[1700px] h-[90px] px-5 mx-auto flex sm:gap-10 gap-4 items-center"
    >
      <!-- LEFT -->
      <div class="w-full h-full">
        <div
          class="flex w-full h-full items-center 2xl:gap-[135px] sm:gap-10 gap-2.5"
        >
          <!-- LOGO -->
          <div>
            <router-link to="/">
              <img :src="logo" alt="Logo" />
            </router-link>
          </div>

          <!-- MOBILE DRAWER -->
          <Drawer iconColor="black" />

          <!-- NAV -->
          <nav class="hidden lg:flex items-center gap-8 text-sm font-medium">
            <div v-for="item in menu" :key="item.name" class="relative group">
              <!-- MAIN MENU -->
              <router-link
                :to="item.path"
                :class="[
                  route.path === item.path ? 'text-purple-700' : 'text-black',
                  'hover:text-purple-700 transition-colors text-lg font-medium leading-7',
                ]"
              >
                {{ item.name }}
              </router-link>

              <!-- DROPDOWN -->
              <div
                v-if="item.children"
                class="absolute left-0 top-full mt-3 w-52 bg-white shadow-lg rounded-lg opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-9999"
              >
                <router-link
                  v-for="child in item.children"
                  :key="child.name"
                  :to="child.path"
                  class="block px-4 py-2 text-lg font-medium text-black hover:bg-purple-100 hover:text-purple-700"
                >
                  {{ child.name }}
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <!-- RIGHT SECTION -->
      <div
        class="xl:w-[379px] sm:w-[280px] w-[190px] h-[90px] bg-secondary rounded-tl-[45px] z-999"
      >
        <div class="flex items-center w-full overflow-hidden">
          <div
            class="flex items-center sm:gap-10 gap-4 bg-secondary rounded-tl-[45px] xl:w-[290px] sm:w-[280px] w-[190px] h-[90px] sm:pl-10 pl-5"
          >
            <!-- SEARCH -->
            <button class="cursor-pointer" @click="isSearchOpen = true">
              <Search />
            </button>

            <!-- CTA -->
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

        <!-- SEARCH POPUP -->
        <SearchPopup v-model:searchPopup="isSearchOpen" />
      </div>
    </div>

    <!-- RIGHT BACKGROUND SHAPE -->
    <div
      class="w-[15%] h-full absolute right-0 top-0 rounded-tl-[45px] bg-secondary"
    ></div>
  </div>
</template>
