<script setup>
import dev from "@/assets/img/homeTwo/dev.svg";
import it from "@/assets/img/homeTwo/it.svg";
import bigImg from "@/assets/img/homeTwo/bigImg.png";
</script>
<template>
  <div class="pt-24 mb-[120px]">
    <div class="bg-purple section-base relative">
      <div class="absolute -top-[10%] right-0">
        <img :src="bigImg" alt="Big Image" />
      </div>
      <div class="container">
        <div class="max-w-[517px]">
          <h6 class="text-secondary heading-six">Tech Management</h6>
          <h2 class="heading-one my-6 text-white">
            Your Success with the best iT solutions
          </h2>
          <p class="paragraph text-white/75">
            Each demo built with will look different. You can customize almost
            anything in the appearance of your website with only a few clicks.
            Each demo built with will look different.
          </p>
          <div class="flex gap-6 group my-10">
            <div>
              <div
                class="size-20 rounded-full group-hover:bg-secondary transition-all ease-in-out duration-500 bg-white flex items-center justify-center"
              >
                <component
                  :is="dev"
                  class="text-primary [&_*]:fill-current transition duration-300"
                />
              </div>
            </div>
            <div class="max-w-[349px]">
              <h4 class="heading-four font-medium text-white">
                End to end development
              </h4>
              <p class="heading-six font-normal text-white/75">
                Each demo built with will look different. You can customize
                almost anything
              </p>
            </div>
          </div>
          <div class="flex gap-6 group">
            <div>
              <div
                class="size-20 rounded-full group-hover:bg-secondary transition-all ease-in-out duration-500 bg-white flex items-center justify-center"
              >
                <component
                  :is="it"
                  class="text-primary [&_*]:fill-current transition duration-300"
                />
              </div>
            </div>
            <div class="max-w-[349px]">
              <h4 class="heading-four font-medium text-white">
                Software IT outsource
              </h4>
              <p class="heading-six font-normal text-white/75">
                Each demo built with will look different. You can customize
                almost anything
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>
