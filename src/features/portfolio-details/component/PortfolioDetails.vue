<script setup>
import SocialIcon from "@/features/HomeFive/components/SocialIcon.vue";
</script>
<template>
  <section class="section-base">
    <div class="container">
      <div class="grid grid-cols-[31%_60%] gap-[30px]">
        <div class="bg-purple rounded-[20px] p-10">
          <div>
            <p class="text-lg font-medium text-white leading-6">Client</p>
            <h3
              class="text-[30px] mt-3 font-medium text-white border-b border-white/20 pb-6"
            >
              Binu Tech Company
            </h3>
          </div>
          <div class="mt-6">
            <p class="text-lg font-medium text-white leading-6">Date</p>
            <h3
              class="text-[30px] mt-3 font-medium text-white border-b border-white/20 pb-6"
            >
              Janu 2025
            </h3>
          </div>
          <div class="mt-6">
            <p class="text-lg font-medium text-white leading-6">Website</p>
            <h3
              class="text-[30px] mt-3 font-medium text-white border-b border-white/20 pb-6"
            >
              www.binu.com
            </h3>
          </div>
          <div class="mt-6">
            <p class="text-lg font-medium text-white leading-6">Value</p>
            <h3
              class="text-[30px] mt-3 font-medium text-white border-b border-white/20 pb-6"
            >
              $256.36
            </h3>
          </div>
          <div class="mt-6">
            <SocialIcon className="bg-white hover:bg-secondary " />
          </div>
        </div>
        <div>div3</div>
      </div>
    </div>
  </section>
</template>
