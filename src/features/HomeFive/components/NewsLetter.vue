<script setup>
import { MessageCircle } from "@lucide/vue";
import circle from "@/assets/img/homefive/circle.png";
</script>
<template>
  <div class="container">
    <div class="py-20 px-[60px] bg-secondary rounded-[20px] relative">
      <div class="absolute right-0 top-10">
        <img :src="circle" alt="Circle" />
      </div>
      <div class="flex items-center justify-between">
        <div>
          <h3 class="heading-three text-primary max-w-[470px] tracking-[-3%]">
            Let’s talk about how we can transform your business!
          </h3>
        </div>
        <div class="flex items-center gap-5">
          <div
            class="bg-purple flex items-center justify-center size-[90px] rounded-full"
          >
            <MessageCircle color="white" />
          </div>
          <div>
            <p class="heading-six font-medium text-purple mb-0">
              Mail us anytime
            </p>
            <a
              href="mailto:Teczooffiicial@gmail.com"
              target="blank"
              class="text-[28px] font-normal border-b border-black"
            >
              Teczooffiicial@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
