import { onMounted, onBeforeUnmount, ref } from "vue";
import { gsap } from "@/plugins/gsap";

// Runs `setup(rootEl)` inside a gsap.context scoped to the returned root ref,
// so every tween/ScrollTrigger created inside is automatically reverted on unmount.
export function useGsapScope(setup) {
  const root = ref(null);
  let ctx;

  onMounted(() => {
    ctx = gsap.context(() => setup(root.value), root.value);
  });

  onBeforeUnmount(() => {
    ctx?.revert();
  });

  return root;
}
