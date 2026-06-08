<script setup>
import { MapPinned, MessageCircleMore, PhoneCall } from "lucide-vue-next";
import logo from "@/assets/img/logo/teczo.png";
import SocialIcon from "./components/SocialIcon.vue";
</script>
<template>
  <footer class="bg-light-gray pt-[250px] -mt-32">
    <div class="container">
      <div class="flex pb-20 justify-between">
        <!-- Newsletter -->
        <div>
          <h3 class="heading-four font-bold mb-6">
            Subscribe to Our Newsletter
          </h3>

          <div class="flex flex-col gap-3 w-[535px]">
            <input
              type="email"
              placeholder="Your email address"
              class="w-full h-[60px] px-7 rounded-full border border-bg/15 outline-none text-base text-text font-inter"
            />

            <button
              class="h-[60px] rounded-full bg-purple text-white text-base font-medium"
            >
              Submit Now
            </button>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-[22px] font-semibold mb-6">Navigations</h3>
          <ul class="space-y-2 text-lg font-medium text-text">
            <li>About us</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Pricing</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>

        <div class="pr-20">
          <h3 class="text-[22px] font-semibold mb-6">Contact Info</h3>
          <ul class="space-y-4 text-lg font-medium text-text">
            <li class="flex gap-4"><PhoneCall /> (+880) 000 88 99</li>
            <li class="flex gap-4"><MessageCircleMore /> contact@info.com</li>
            <li class="flex gap-4 items-start">
              <MapPinned /> 1811 Silverside Rd,<br />Wilmington, DE 19810, USA
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-bg/15 px-10 py-9">
      <div
        class="container px-4 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <!-- Logo -->
        <img :src="logo" alt="Logo" />

        <!-- Copyright -->
        <p class="paragraph font-medium text-text">
          Copyright © 2025 <span class="text-purple-500">Teczo</span>. All
          Rights Reserved.
        </p>

        <SocialIcon />
      </div>
    </div>
  </footer>
</template>
