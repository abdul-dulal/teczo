<script setup>
import { computed } from "vue";

// Props
const props = defineProps({
  searchPopup: {
    type: Boolean,
    required: true,
  },
});

// Emits
const emit = defineEmits(["update:searchPopup"]);

// Close popup
const closePopup = () => {
  emit("update:searchPopup", false);
};

// Handle submit
const handleSubmit = () => {
  // your logic here
};

const popupStyle = computed(() => {
  return props.searchPopup
    ? {
        transitionDuration: "0.7s",
        transitionTimingFunction: "cubic-bezier(0.9, 0.03, 0, 0.96)",
        transitionDelay: "0.7s",
        zIndex: 9999,
      }
    : {
        transitionDuration: "0.8s",
        transitionTimingFunction: "cubic-bezier(0.9, 0.03, 0, 0.96)",
        transitionDelay: "0.8s",
      };
});
</script>
<template>
  <div>
    <!-- Overlay -->
    <div
      :class="[
        'fixed inset-0 bg-[rgba(0,0,0,0.6)] w-full h-full transition-all ease-in-out',
        searchPopup
          ? 'translate-y-0 delay-100 duration-[.8s]'
          : '-translate-y-full duration-500 delay-700',
      ]"
      style="z-index: 9999; cursor: url(/img/close.png), auto"
      @click="closePopup"
    >
      <!-- Popup -->
      <div
        :style="popupStyle"
        :class="[
          'w-full h-[250px] inset-0 z-9999 cursor-auto bg-white fixed',
          searchPopup
            ? 'top-0 visible opacity-100'
            : 'invisible opacity-0 left-0 -top-full',
        ]"
        @click.stop
      >
        <div class="top-[43%] translate-y-[-50%] relative z-2">
          <div class="container mx-auto">
            <div class="text-center">
              <div class="relative">
                <form
                  @submit.prevent="handleSubmit"
                  class="flex justify-center items-center"
                >
                  <div class="relative w-[70%]">
                    <input
                      type="search"
                      name="s"
                      placeholder="What are you looking for?"
                      class="w-full h-16 text-xl border-[1.5px] border-black/45 outline-none pl-12 pr-4 rounded-2xl shadow text-black/45 font-medium placeholder:text-black/45 transition-all duration-300 ease-in-out focus:placeholder-transparent"
                    />
                    <button type="submit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-black/45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010 17.5 7.5 7.5 0 0016.65 16.65z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Popup -->
    </div>
  </div>
</template>
