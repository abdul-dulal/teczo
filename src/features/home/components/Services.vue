<script setup>
import Button from "@/components/base/Button.vue";
import { services } from "@/demoData";
</script>

<template>
  <div class="py-[120px] bg-[#F7F7F9]">
    <div class="max-w-[1790px] mx-auto">
      <div class="max-w-[651px] mx-auto">
        <h6 class="heading-six text-center">Our service</h6>
        <h2 class="heading-one text-center my-[30px]">
          Service we are always try to provide our customers
        </h2>
      </div>
      <div class="grid grid-cols-4 gap-[30px]">
        <div v-for="(service, index) in services" :key="index">
          <div class="p-5 bg-white rounded-[20px]">
            <img :src="service.img" :alt="service.serviceName" />
            <h4 class="heading-four py-[22px]">{{ service.serviceName }}</h4>
            <p class="paragraph pb-20">
              Integer fringilla sed lacus non venenatis. Viva mus turpis ex,
              suscipit sit amet lorem
            </p>
          </div>
          <div
            class="w-60 h-20 rounded-[40px] bg-[#F7F7F9] block m-auto relative -top-10 pt-[15px] px-5"
          >
            <div class="block m-auto w-full">
              <Button
                btnTitle="Read More"
                class="border border-[#1B1F2E] bg-transparent text-primary hover:bg-purple hover:text-white hover:border-transparent px-4 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
