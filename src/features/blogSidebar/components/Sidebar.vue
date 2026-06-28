<script setup>
const posts = [
  {
    id: 1,
    title: "Intuitive Header by Choose a Pre-Built Header",
    date: "April 24, 2024",
    image: "https://picsum.photos/100?1",
  },
  {
    id: 2,
    title: "Intuitive Header by Choose a Pre-Built Header",
    date: "June 17, 2024",
    image: "https://picsum.photos/100?2",
  },
  {
    id: 3,
    title: "Intuitive Header by Choose a Pre-Built Header",
    date: "May 12, 2024",
    image: "https://picsum.photos/100?3",
  },
];

const categories = [
  { name: "Content Management", active: false },
  { name: "Development", active: true },
  { name: "Mobile Application", active: false },
  { name: "SEO Analytics", active: false },
  { name: "Illustration", active: false },
];

const tags = [
  { name: "Technology", active: false },
  { name: "Digital", active: true },
  { name: "Marketing", active: false },
  { name: "Solutions", active: false },
  { name: "Site analytics", active: false },
  { name: "User", active: false },
];
</script>
<template>
  <aside class="w-full space-y-8">
    <!-- Search -->
    <div>
      <div class="relative">
        <input
          type="text"
          placeholder="Enter your keywords..."
          class="shadow-[0px_1px_3px_0px_rgba(3,4,28,0.10)] bg-light-gray w-full h-[60px] rounded-xl text-[#5C6972] px-6 text-[15px]"
        />

        <svg
          class="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>

    <!-- Latest Post -->
    <div>
      <h3 class="font-semibold text-gray-800 mb-4">Latest Post</h3>

      <div class="space-y-3">
        <div
          v-for="post in posts"
          :key="post.id"
          class="flex gap-3 rounded-lg bg-white p-3 shadow-sm"
        >
          <img :src="post.image" class="h-16 w-16 rounded-md object-cover" />

          <div>
            <h4 class="text-xs font-medium text-gray-800 leading-5">
              {{ post.title }}
            </h4>

            <p class="mt-2 text-[11px] text-gray-500">
              {{ post.date }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Categories -->
    <div class="rounded-2xl bg-[#F7F7F9] p-5">
      <h3 class="mb-4 font-semibold text-gray-800">Categories</h3>

      <div class="space-y-3">
        <div
          v-for="category in categories"
          :key="category.name"
          class="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm cursor-pointer hover:bg-purple-50"
          :class="
            category.active
              ? 'text-purple-600 border-l-2 border-purple-600'
              : 'text-gray-600'
          "
        >
          <span class="text-sm">{{ category.name }}</span>

          <span>›</span>
        </div>
      </div>
    </div>

    <!-- Tags -->
    <div>
      <h3 class="mb-4 font-semibold text-gray-800">Tags</h3>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag.name"
          class="rounded-md px-3 py-1 text-xs"
          :class="
            tag.active
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-500'
          "
        >
          {{ tag.name }}
        </span>
      </div>
    </div>
  </aside>
</template>
