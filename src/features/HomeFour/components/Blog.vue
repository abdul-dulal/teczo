<script setup>
import Button from "@/components/base/Button.vue";
import { blogsFour } from "@/demoData";
</script>

<template>
  <section class="section-base">
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="max-w-[585px]">
          <h6 class="heading-six text-purple">Why People Choose Us</h6>
          <h2 class="heading-one">
            Read & gather knowledge from our latest news
          </h2>
        </div>
        <Button
          btnTitle="View all Post"
          class="bg-transparent border border-primary text-primary"
        />
      </div>
      <div class="grid grid-cols-3 gap-[30px]">
        <div v-for="item in blogsFour" :key="item.id" class="space-y-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img :src="item.author" class="w-10 h-10 rounded-full" />
              <div>
                <h4 class="heading-six font-bold text-primary mb-0">
                  {{ item.name }}
                </h4>
                <p class="text-sm font-normal font-inter text-text">
                  {{ item.role }}
                </p>
              </div>
            </div>

            <p class="text-sm font-normal font-inter text-primary">
              {{ item.date }}
            </p>
          </div>

          <div class="relative rounded-xl overflow-hidden">
            <img :src="item.image" class="w-full object-cover rounded-2xl" />

            <div
              v-if="item.featured"
              class="absolute inset-0 flex items-center justify-center"
            >
              <button
                class="w-12 h-12 rounded-full bg-teal-400 flex items-center justify-center cursor-pointer"
              >
                <span class="text-white text-xl">↗</span>
              </button>
            </div>
          </div>

          <h4 class="heading-four leading-8 font-bold">
            {{ item.title }}
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>
