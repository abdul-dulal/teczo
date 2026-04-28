<script setup>
import { servicesFive } from "@/demoData";
import { Cpu, RefreshCw, Monitor } from "lucide-vue-next";

const icons = {
  cpu: Cpu,
  "refresh-cw": RefreshCw,
  monitor: Monitor,
};

const getIcon = (name) => icons[name];
</script>
<template>
  <section class="bg-bg section-base">
    <div class="container">
      <h6 class="heading-six text-secondary text-center">
        Best technology agency
      </h6>
      <h2
        class="heading-one max-w-[523px] block mx-auto text-center text-white"
      >
        We provide our clients best IT services
      </h2>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 relative">
        <div
          class="hidden md:block absolute top-1/2 left-0 w-full border-t border-dashed border-cyan-400 opacity-40"
        ></div>

        <div
          v-for="item in servicesFive"
          :key="item.id"
          class="relative rounded-2xl overflow-hidden transition-all duration-300"
          :class="
            item.active
              ? 'bg-teal-400 text-black scale-105'
              : 'bg-[#1e293b] text-white'
          "
        >
          <!-- Image -->
          <img :src="item.image" class="w-full h-48 object-cover" />

          <!-- Content -->
          <div class="p-6 relative">
            <!-- Icon -->
            <div
              class="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center rounded-lg shadow-lg"
              :class="
                item.active
                  ? 'bg-purple-600 text-white'
                  : 'bg-cyan-400 text-black'
              "
            >
              <component :is="getIcon(item.icon)" class="w-5 h-5" />
            </div>

            <h3 class="mt-6 font-semibold text-lg">
              {{ item.title }}
            </h3>

            <p class="mt-2 text-sm opacity-80">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
