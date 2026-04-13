<script setup>
defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["closeModal"]);
const closeModal = () => {
  emit("closeModal");
};
</script>

<template>
  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    @click.self="closeModal"
  >
    <div class="bg-black rounded-xl overflow-hidden w-[90%] max-w-3xl relative">
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-2 right-3 text-white text-2xl"
      >
        ✕
      </button>

      <!-- Video -->
      <iframe
        class="w-full h-[400px]"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Video"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
