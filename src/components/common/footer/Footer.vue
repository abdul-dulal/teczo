<script setup>
import logo from "@/assets/img/logo/logo-white.png";
import virtual from "@/assets/img/home/virtual.png";
import wave from "@/assets/img/home/wave02.png";
import { ArrowRight } from "@lucide/vue";
import SocialIcon from "@/features/HomeFive/components/SocialIcon.vue";
</script>

<template>
  <div class="flex mt-[120px] items-center justify-end">
    <button
      class="px-[102px] py-[34px] bg-purple paragraph text-white cursor-pointer"
    >
      Saturday - Thursday : 8:30 am - 10:30 pm
    </button>
    <button
      class="px-[60px] w-[746px] cursor-pointer flex justify-between py-[34px] bg-bg paragraph text-white"
    >
      Call for Appoinment <arrow-right />
    </button>
  </div>
  <div class="bg-bg section-base relative">
    <div class="absolute top-0 right-0">
      <img :src="virtual" alt="Virtual" />
    </div>
    <div class="absolute top-0 left-0">
      <img :src="wave" alt="Wave" />
    </div>
    <div class="container">
      <div class="grid grid-cols-4 gap-[140px] items-start justify-between">
        <div class="space-y-7">
          <img :src="logo" alt="Logo" />
          <p class="paragraph text-white/75 max-w-[273px]">
            Desire to obtain pain of itself because is is pain, but occasionally
            circumstances
          </p>
          <SocialIcon className="bg-white/10 hover:bg-secondary text-primary" />
        </div>
        <div class="space-y-4">
          <h4 class="heading-four text-white">Explore</h4>
          <ul class="paragraph text-white font-medium space-y-3">
            <li class="list-disc">
              <router-link to="/about">About Us</router-link>
            </li>
            <li class="list-disc">
              <router-link to="/about"> Meet our team </router-link>
            </li>
            <li class="list-disc">
              <router-link to="/about"> News & media </router-link>
            </li>
            <li class="list-disc">
              <router-link to="/about"> Our projects </router-link>
            </li>
            <li class="list-disc">
              <router-link to="/about"> Contacts</router-link>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h4 class="heading-four text-white">Service link</h4>
          <ul class="paragraph text-white font-medium space-y-3">
            <li class="list-disc">
              <router-link to="/about">Data visualization </router-link>
            </li>
            <li class="list-disc">
              <router-link to="/about"> UI/UX Designing </router-link>
            </li>
            <li class="list-disc">
              <router-link to="/about"> Digital marketing </router-link>
            </li>
            <li class="list-disc">
              <router-link to="/about">Data analytics </router-link>
            </li>
            <li class="list-disc">
              <router-link to="/about"> Security system</router-link>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h4 class="heading-four text-white">Contact</h4>
          <p class="paragraph">
            401 Broadway, 24th Floor, Orchard View, London
          </p>
          <div class="space-y-6">
            <a
              href="mailto:binuinfo@gmail.com"
              class="flex items-center gap-4 text-white"
            >
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.75 4.75C0.75 1.95 2.35 0.75 4.75 0.75H12.75C15.15 0.75 16.75 1.95 16.75 4.75V10.35C16.75 13.15 15.15 14.35 12.75 14.35H4.75"
                  stroke="#4BF0C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.75 5.15039L10.246 7.15015C9.422 7.80607 8.07 7.80607 7.246 7.15015L4.75 5.15039"
                  stroke="#4BF0C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.75 11.1504H5.55"
                  stroke="#4BF0C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.75 7.94922H3.15"
                  stroke="#4BF0C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>binuinfo@gmail.com</span>
            </a>
            <a
              href="https://wa.me/3331231688"
              target="_blank"
              class="flex items-center gap-4 text-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.6377 0.75C9.6377 0.75 11.593 0.927758 14.0816 3.41637C16.5703 5.90498 16.748 7.86032 16.748 7.86032"
                  stroke="#4BF0C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M9.82227 3.8916C9.82227 3.8916 10.7021 4.14299 12.0219 5.46278C13.3417 6.78256 13.5931 7.66242 13.5931 7.66242"
                  stroke="#4BF0C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M6.11615 3.6991L6.69299 4.7327C7.21355 5.66547 7.00458 6.8891 6.18469 7.70899C6.18469 7.70899 5.1902 8.7035 6.99332 10.5066C8.79641 12.3097 9.79095 11.3152 9.79095 11.3152C10.6108 10.4954 11.8345 10.2864 12.7672 10.807L13.8008 11.3838C15.2093 12.1698 15.3757 14.1451 14.1376 15.3832C13.3937 16.1271 12.4824 16.7059 11.475 16.7441C9.77902 16.8084 6.8989 16.3792 4.00982 13.4901C1.12074 10.601 0.691531 7.72092 0.755823 6.02499C0.794015 5.01755 1.37287 4.10622 2.11679 3.3623C3.35483 2.12426 5.33009 2.2906 6.11615 3.6991Z"
                  stroke="#4BF0C5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>

              <span>(+333) 123-1688</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
