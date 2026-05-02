<script setup>
import { servicesFive } from "@/demoData";
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

      <div class="grid md:grid-cols-3 gap-6 relative">
        <div
          v-for="item in servicesFive"
          :key="item.id"
          class="group relative rounded-[20px] overflow-hidden transition-all p-[15px] border border-white/10 hover:bg-secondary ease-in-out duration-500"
        >
          <!-- Image -->
          <img :src="item.image" class="w-full object-cover rounded-2xl" />

          <!-- Content -->
          <div class="p-6 relative">
            <div
              class="absolute -top-16 left-7 size-[100px] flex items-center justify-center rounded-[10px] bg-secondary group-hover:bg-purple transition-all ease-in-out duration-500"
            >
              <component
                :is="item.icon"
                class="text-primary group-hover:text-white [&_*]:fill-current [&_*]:!fill-current transition-all ease-in-out duration-500"
              />
            </div>

            <h3
              class="heading-four text-white mt-6 group-hover:text-primary transition-all ease-in-out duration-500"
            >
              {{ item.title }}
            </h3>

            <p
              class="paragraph text-text group-hover:text-primary transition-all ease-in-out duration-500"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
