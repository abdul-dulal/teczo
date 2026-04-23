<script setup>
import banner from "@/assets/img/homeFour/hero-bg.png";
import Button from "@/components/base/Button.vue";
import { servicesFour } from "@/demoData";
</script>
<template>
  <section class="relative">
    <div
      class="w-full bg-cover bg-center bg-no-repeat h-[800px] flex items-center"
      :style="{ backgroundImage: `url(${banner})` }"
    >
      <div class="container">
        <h6 class="mb-5 heading-six text-secondary">Best technology agency</h6>
        <h2
          class="text-[70px] leading-[70px] font-bold max-w-[564px] text-white tracking-[-0.3px] mb-10"
        >
          We Transform Your Idea into Technology
        </h2>
        <Button btnTitle="Get Started" class="bg-secondary text-primary" />
      </div>
    </div>
    <div class="container relative -top-10">
      <div class="grid grid-cols-3 gap-[30px]">
        <div v-for="(service, index) in servicesFour" :key="index">
          <div
            class="p-10 rounded-[10px] shadow group transition-all ease-in-out duration-500"
            :class="
              service.highlight
                ? 'text-white bg-purple  shadow-lg'
                : 'bg-white '
            "
          >
            <div class="flex gap-8">
              <div>
                <component :is="service.icon" class="text-purple" />
              </div>
              <div>
                <h5
                  class="heading-five"
                  :class="service.highlight ? 'text-white' : 'text-primary'"
                >
                  {{ service.title }}
                </h5>
                <p
                  class="paragraph"
                  :class="service.highlight ? 'text-white' : 'text-text'"
                >
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
