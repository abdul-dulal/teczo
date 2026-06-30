<script setup>
import { ref, computed } from "vue";

import logo from "@/assets/img/logo/primary-logo.png";
// Props
const props = defineProps({
  iconColor: {
    type: String,
    default: "black",
  },
});

// Drawer state
const isOpen = ref(false);

// Toggle drawer
const toggleDrawer = () => {
  isOpen.value = !isOpen.value;
};

const barClass = computed(() => {
  return `w-[80px] h-[2px] bg-${props.iconColor}`;
});

const menu = ref([
  {
    title: "Home",
    open: true,
    children: [
      { title: "Home One", link: "/" },
      { title: "Home Two", link: "/HomeTwo" },
    ],
  },
  { title: "About", link: "/about" },
  {
    title: "Services",
    open: true,
    children: [
      { title: "Services", link: "/services" },
      { title: "Service Details", link: "/service-details" },
    ],
  },
  {
    title: "Project",
    open: true,
    children: [
      { title: "Project", link: "/projects" },
      { title: "Project Details", link: "/project-details" },
    ],
  },
  {
    title: "Blog",
    open: true,
    children: [
      { title: "Blog", link: "/blog" },
      { title: "Blog Details", link: "/blog-details" },
    ],
  },
  { title: "Contact", link: "/contact" },
]);

// Toggle submenu
const toggleMenu = (item) => {
  if (item.children) {
    item.open = !item.open;
  }
};

const socials = [
  {
    link: "https://www.facebook.com/",
    icon: `<svg width="16" height="16" fill="white"><path d="M3.13 20V10.87H0V7.32h3.13V4.7C3.13 1.65 5.03 0 7.8 0c1.33 0 2.47.1 2.8.14v3.18h-1.92c-1.5 0-1.8.7-1.8 1.73v2.27h3.59l-.47 3.56H6.88V20H3.13z"/></svg>`,
  },
  {
    link: "https://x.com",
    icon: `<svg width="16" height="16" fill="white"><path d="M15.75 0.96h3.06l-6.7 7.66L20 19.03h-6.17l-4.83-6.32-5.53 6.32H.39l7.17-8.19L0 .96h6.33l4.37 5.77L15.75.96z"/></svg>`,
  },
  {
    link: "https://www.instagram.com/",
    icon: `<svg width="16" height="16" fill="white"><circle cx="10" cy="10" r="4"/></svg>`,
  },
  {
    link: "https://github.com",
    icon: `<svg width="16" height="16" fill="white"><circle cx="10" cy="10" r="5"/></svg>`,
  },
];
</script>
<template>
  <div class="relative xl:hidden block">
    <!-- Toggle Button -->
    <button
      class="relative z-99 w-[30px] h-5 flex flex-col justify-between overflow-hidden"
      @click="toggleDrawer"
    >
      <span :class="barClass"></span>
      <span :class="barClass"></span>
      <span :class="barClass"></span>
    </button>

    <!-- Drawer -->
    <div
      :class="[
        'fixed top-0 right-0 h-screen lg:w-[500px] md:w-[420px] w-[300px] bg-purple border-l border-white text-white transform z-9999 overflow-y-scroll overflow-x-hidden transition-transform duration-500 ease-in-out',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
      @click.stop
    >
      <div class="h-full flex flex-col">
        <!-- Header -->
        <div class="px-[35px] pt-10 pb-2 shrink-0">
          <div
            class="flex justify-between items-center border-b border-white/10 pb-5 mb-[35px]"
          >
            <RouterLink to="/">
              <img :src="logo" alt="Logo" class="cursor-pointer" />
            </RouterLink>

            <button class="text-3xl" @click="toggleDrawer">×</button>
          </div>
        </div>

        <!-- Menu -->
        <div class="px-[35px] pb-5">
          <ul>
            <li v-for="item in menu" :key="item.title" class="relative">
              <!-- Parent -->
              <div
                class="flex justify-between items-center border-b border-white/10 pb-5 cursor-pointer"
                @click="toggleMenu(item)"
              >
                <span>{{ item.title }}</span>

                <span
                  v-if="item.children"
                  :class="[
                    'text-center h-[35px] w-[35px] border border-white/10 rounded text-2xl duration-500',
                    item.open ? '' : 'bg-primary text-white',
                  ]"
                >
                  {{ item.open ? "+" : "-" }}
                </span>
              </div>

              <!-- Child -->
              <ul
                v-if="item.children"
                :class="[
                  'transition-all duration-500 overflow-hidden px-3',
                  item.open ? 'max-h-0' : 'max-h-40',
                ]"
              >
                <li v-for="child in item.children" :key="child.title">
                  <RouterLink
                    :to="child.link"
                    class="capitalize text-[16px] leading-[50px] border-b border-white/10 flex justify-between"
                  >
                    {{ child.title }}
                  </RouterLink>
                </li>
              </ul>

              <!-- Single Link -->
              <RouterLink
                v-if="!item.children"
                :to="item.link"
                class="block mt-3 border-b border-white/10 pb-5"
              >
                {{ item.title }}
              </RouterLink>
            </li>
          </ul>

          <!-- Social -->
          <div class="mt-10">
            <span class="md:text-xl text-base font-bold">
              Subscribe & Follow
            </span>

            <ul class="my-5 flex gap-3">
              <li
                v-for="social in socials"
                :key="social.link"
                class="h-9 w-9 bg-black rounded-full flex items-center justify-center"
              >
                <a :href="social.link" target="_blank" v-html="social.icon"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-9999"
      @click="toggleDrawer"
    ></div>
  </div>
</template>
