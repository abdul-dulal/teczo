<script setup>
import { Clock, Globe } from "@lucide/vue";
import { ref } from "vue";
const selectedOption = ref("en");
const options = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "Dutch", value: "ds" },
];
</script>
<template>
  <div class="bg-primary">
    <div class="max-w-[1640px] px-5 mx-auto py-[15px]">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div><Clock size="16" color="white" /></div>
          <div>
            <p class="text-sm font-medium leading-5 text-white">
              Monday - Friday : 8:30 AM to 6:30 PM
            </p>
          </div>
        </div>
        <div class="flex items-center">
          <div>
            <Globe size="16" color="white" />
          </div>
          <div class="">
            <select
              v-model="selectedOption"
              class="text-white focus:outline-none"
            >
              <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
                class="text-black"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
