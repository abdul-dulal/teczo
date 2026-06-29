<script setup>
import errorImg from "@/assets/img/contact/error.png";
import Button from "@/components/base/Button.vue";
</script>
<template>
  <div class="text-center section-base">
    <div class="container">
      <div class="flex flex-col items-center justify-center">
        <img :src="errorImg" alt="Error Image" />

        <h2 class="heading-one my-8">Oops! Page not Found</h2>

        <div class="block m-auto">
          <Button
            class="bg-secondary text-primary py-4 block"
            btnTitle="Back to Home"
          />
        </div>
      </div>
    </div>
  </div>
</template>
