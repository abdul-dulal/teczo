<template>
  <div class="py-10 space-y-8 overflow-hidden">
    <div class="marquee-wrapper rotate-2 z-999 bg-secondary">
      <div class="marquee-track left">
        <div class="marquee-content">
          <span v-for="item in items" :key="item">
            {{ item }} <span class="dot">•</span>
          </span>
        </div>

        <div class="marquee-content">
          <span v-for="item in items" :key="item + '-dup'">
            {{ item }} <span class="dot">•</span>
          </span>
        </div>
      </div>
    </div>

    <div class="marquee-wrapper -rotate-3 -mt-14 bg-purple">
      <div class="marquee-track right">
        <div class="marquee-content">
          <span v-for="item in items" :key="item" class="text-white">
            {{ item }} <span class="dot">•</span>
          </span>
        </div>

        <div class="marquee-content">
          <span v-for="item in items" :key="item + '-dup'" class="text-white">
            {{ item }} <span class="dot">•</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  "Marketing",
  "Creative agency",
  "Digital marketing",
  "Product marketing",
  "Research marketing",
  "Website marketing",
];
</script>

<style scoped>
.marquee-wrapper {
  overflow: hidden;
  position: relative;
  padding: 16px 0;
}

.marquee-track {
  display: flex;
  width: max-content;
}

.marquee-content {
  display: flex;
  gap: 50px;
  padding: 0 30px;
  font-size: 30px;
  font-weight: 500;
  white-space: nowrap;
}

.dot {
  margin-left: 20px;
  opacity: 0.6;
}

.marquee-track.left {
  animation: scrollLeft 30s linear infinite;
}

.marquee-track.right {
  animation: scrollRight 30s linear infinite;
}

@keyframes scrollLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scrollRight {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
