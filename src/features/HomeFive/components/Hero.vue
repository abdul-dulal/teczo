<script setup>
import author01 from "@/assets/img/homefive/author01.png";
import author02 from "@/assets/img/homefive/author02.png";
import author03 from "@/assets/img/homefive/author03.png";
import banner from "@/assets/img/homefive/hero-banner.png";
import Button from "@/components/base/Button.vue";
</script>
<template>
  <section class="max-w-[1700px] mx-auto px-5 pt-[30px]">
    <div class="grid md:grid-cols-2 gap-[30px]">
      <div class="2xl:p-[110px] sm:p-12 p-10 bg-secondary rounded-[20px]">
        <div class="max-w-[493px] flex-col">
          <div>
            <h2
              class="md:text-[60px] sm:text-[40px] text-[35px] md:leading-16 leading-10 font-bold"
            >
              Reliable and Secure Managed IT Services.
            </h2>
            <div class="sm:mt-10 mt-5 flex gap-4 items-center">
              <div class="flex items-center">
                <img :src="author01" alt="Author" />
                <img :src="author02" class="-ml-2" alt="Author" />
                <img :src="author03" class="-ml-2" alt="Author" />
              </div>
              <h2 class="sm:text-[40px] text-[26px] font-bold text-purple">
                4k
              </h2>
              <p
                class="max-w-[77px] paragraph text-primary font-inter leading-[18px]"
              >
                Satisfied customers
              </p>
            </div>
          </div>
          <div class="2xl:mt-[85px] sm:mt-10 mt-5">
            <p class="text-lg font-normal leading-[26px]">
              In today's competitive business, the demand for efficient and
              cost-effective IT solutions.
            </p>
            <Button
              btnTitle="Get Started"
              class="bg-transparent border border-primary text-primary mt-[35px]"
            />
          </div>
        </div>
      </div>
      <div>
        <img :src="banner" alt="Banner" />
      </div>
    </div>
  </section>
</template>
