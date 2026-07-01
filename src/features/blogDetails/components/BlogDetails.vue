<script setup>
import feature from "@/assets/img/blog/feature.png";
import { Check } from "lucide-vue-next";
import feature01 from "@/assets/img/blog/feature01.png";
import feature02 from "@/assets/img/blog/feature02.png";

import author01 from "@/assets/img/blog/author02.png";
import author02 from "@/assets/img/blog/author03.png";

const features = [
  "Say goodbye to bank fees.",
  "Leverage agile frameworks to provide",
  "Capitalize on low hanging fruit",
  "Deposit funds easily, securely.",
];
const tags = [
  { name: "Technology" },
  { name: "Digital" },
  { name: "Marketing" },
  { name: "Solutions" },

  { name: "User" },
];
const comments = [
  {
    id: 1,
    name: "Hanvor Vai",
    date: "July 14, 2022",
    image: author01,
    message:
      "One's of the best template out there, design, code quality, updates etc everything you need guys, but if you won't regret it!",
  },
  {
    id: 2,
    name: "Alexander Ljung",
    date: "July 16, 2022",
    image: author02,
    message:
      "This time the user is awesome! But I had one small issue with link option in a particular portfolio. The other day.",
  },
];
</script>
<template>
  <div>
    <div class="relative">
      <img class="mb-6 rounded-xl" :src="feature" alt="Feature" />
      <div class="flex items-center gap-3 absolute bottom-[30px] right-[30px]">
        <button
          class="cursor-pointer py-[9px] px-2.5 text-xs font-bold uppercase bg-secondary text-black rounded"
        >
          UI Design
        </button>
        <button
          class="cursor-pointer py-[9px] px-2.5 text-xs font-bold uppercase bg-white text-bg rounded"
        >
          UI Design
        </button>
      </div>
    </div>
    <div class="flex items-center gap-3.5 my-6">
      <button
        class="px-5 py-2 text-sm font-medium text-[#5C6972] border border-[#1B1F2E1A] rounded-full"
      >
        Resources
      </button>
      <p class="text-sm font-medium text-[#5C6972]">April 12, 2025</p>
    </div>
    <div>
      <h3
        class="sm:text-[34px] text-[28px] font-bold text-black md:leading-11 leading-9 sm:mb-[30px] mb-6"
      >
        Best data analytics events now
      </h3>
      <p class="paragraph text-[#5C6972]">
        While you want your sales team to be spending most of their time
        prospecting and selling, making sure they have the time and space to
        keep the CRM up to date is critical. Remember to factor in time for
        these tasks when setting goals and benchmarks for them. Provide sales
        support where you can to ensure your sales team is spending.
      </p>
      <p class="paragraph text-[#5C6972] my-6">
        Bring to the table win-win survival strategies to ensure proactive
        domination. At the end of the day, going forward, a new normal that has
        evolved.!
      </p>
      <ul class="space-y-3">
        <li
          v-for="(item, index) in features"
          :key="index"
          class="flex items-center gap-2.5 text-base font-medium text-bg"
        >
          <span
            class="flex size-5 items-center justify-center rounded-full bg-light-gray"
          >
            <Check size="12px" color="#6C33D9" />
          </span>

          <span>{{ item }}</span>
        </li>
      </ul>
      <div class="mt-6">
        <h3
          class="sm:text-[34px] text-[28px] font-bold text-black md:leading-11 leading-9 sm:mb-[30px] mb-6"
        >
          Best data analytics events now
        </h3>
        <p class="paragraph text-[#5C6972] my-6">
          Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis
          tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue.
          Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis
          odio vitae sem lobortis.
        </p>
      </div>
      <div class="grid sm:grid-cols-2 gap-[30px]">
        <img class="rounded-xl" :src="feature01" alt="Feature" />
        <img class="rounded-xl" :src="feature02" alt="Feature" />
      </div>
      <div class="mt-8">
        <h3
          class="sm:text-[34px] text-[28px] font-bold text-black md:leading-11 leading-9 sm:mb-[30px] mb-6"
        >
          Learning from Failure
        </h3>
        <p class="paragraph text-[#5C6972] my-6">
          The European languages are members of the same family. Their separate
          existence is a myth. For science europe uses the same vocabulary.
        </p>
      </div>
      <ul class="space-y-2 pt-3 lg:ml-0 ml-5">
        <li class="text-base leading-6 text-bg list-disc">
          Get yourself comfortable.
        </li>
        <li class="text-base leading-6 text-bg list-disc">
          Manage your workspace and organize your desk.
        </li>
        <li class="text-base leading-6 text-bg list-disc">
          Keep In touch with your co-workers.
        </li>
      </ul>
      <div class="flex items-center gap-2 mt-10">
        <h3 class="text-base font-semibold leading-7 text-bg">Tags:</h3>

        <div class="flex flex-wrap gap-2.5">
          <button
            v-for="tag in tags"
            :key="tag.name"
            class="md:px-[19px] px-[15px] md:py-3 py-2 sm:text-lg text-base font-medium border border-[#1B1F2E1A] rounded-full text-[#5C6972]"
          >
            {{ tag.name }}
          </button>
        </div>
      </div>
    </div>

    <div>
      <h2
        class="sm:text-[34px] text-[28px] font-bold text-black md:leading-11 leading-9 sm:mb-[30px] mb-6"
      >
        Comments (2)
      </h2>

      <!-- Comment Item -->
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6"
      >
        <div class="flex gap-4">
          <img
            :src="comment.image"
            :alt="comment.name"
            class="w-20 h-20 rounded-full object-cover"
          />

          <div class="flex-1">
            <p class="text-[13px] font-medium text-[#5C6972] mb-1">
              {{ comment.date }}
            </p>

            <h4 class="font-bold text-bg text-xl">
              {{ comment.name }}
            </h4>

            <p class="text-[#5C6972] text-base mt-2 leading-6">
              {{ comment.message }}
            </p>

            <button
              class="mt-4 px-[18px] py-2 text-sm font-bold bg-purple text-white rounded-[10px] hover:bg-violet-700 transition"
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Reply Form -->
    <div class="mt-14">
      <h2 class="text-[34px] font-bold text-black leading-6 mb-[30px]">
        Leave Your Reply
      </h2>

      <form class="space-y-5">
        <div class="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Your name*"
            class="h-[60px] px-5 border border-gray-200 rounded-base focus[#838694]-none focus:ring-1 focus:ring-purple focus:outline-none rounded-[10px] text-text"
          />

          <input
            type="email"
            placeholder="Your email address*"
            class="h-[60px] px-5 border border-gray-200 rounded-base focus[#838694]-none focus:ring-1 focus:ring-purple focus:outline-none rounded-[10px] text-text"
          />
        </div>

        <div class="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Phone number"
            class="h-[60px] px-5 border border-gray-200 rounded-base focus[#838694]-none focus:ring-1 focus:ring-purple focus:outline-none rounded-[10px] text-text"
          />

          <select
            class="h-[60px] px-5 border border-gray-200 rounded-base focus[#838694]-none focus:ring-1 focus:ring-purple focus:outline-none rounded-[10px] text-text"
          >
            <option>Select service</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>SEO</option>
          </select>
        </div>

        <textarea
          rows="6"
          placeholder="How can we help you? Feel free to get in touch!"
          class="w-full p-5 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple text-text"
        ></textarea>

        <button
          type="submit"
          class="w-full bg-secondary text-bg text-base font-medium px-16 py-6 rounded-[10px] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>
