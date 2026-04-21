<script setup>
import banner from "@/assets/img/homeThree/bg.png";
import Button from "@/components/base/Button.vue";
</script>
<template>
  <section
    class="w-full bg-cover bg-center bg-no-repeat section-base"
    :style="{ backgroundImage: `url(${banner})` }"
  >
    <div class="container">
      <h2 class="text-white heading-one max-w-[521px] tracking-[-.3px]">
        We are always ready to develop your sight
      </h2>

      <Button
        class="bg-secondary text-primary mt-[50px] py-4"
        btnTitle="Let’s Contact Us"
      />
    </div>
  </section>
</template>
