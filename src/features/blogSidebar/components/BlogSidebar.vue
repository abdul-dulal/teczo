<script setup>
import { blogData } from "@/demoData/index.js";
import Sidebar from "./Sidebar.vue";
import author from "@/assets/img/blog/author.png";
</script>
<template>
  <div class="section-base">
    <div class="container">
      <div class="grid grid-cols-[60%_32%] gap-[100px]">
        <div>
          <div v-for="(item, index) in blogData" :key="index">
            <div>
              <img class="mb-6" :src="item.img" alt="blog" />
              <div class="flex items-center gap-3.5 mb-6">
                <button
                  class="px-5 py-2 text-sm font-medium text-[#5C6972] border border-[#1B1F2E1A] rounded-full"
                >
                  Resources
                </button>
                <p class="text-sm font-medium text-[#5C6972]">April 12, 2025</p>
              </div>
              <h3 class="text-[34px] font-bold text-black leading-6 mb-[30px]">
                {{ item.title }}
              </h3>
              <p class="paragraph mb-6">
                Bndulgence diminution so discovered mr apartments. Are off under
                folly death wrote cause her way spite. Plan upon yet way get
                cold spot its week. Almost do am or limits hearts. Resolve
                parties but why she shewing. She sang know now
              </p>
              <div class="flex items-center gap-3 mb-10">
                <img :src="author" alt="Author" />
                <div>
                  <p class="text-base font-semibold text-[#242E45]">
                    Fletch Skinner
                  </p>
                  <p class="text-[13px] font-normal text-[#878898] leading-4">
                    CEO Dulalix
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  </div>
</template>
