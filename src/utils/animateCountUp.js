import { gsap } from "@/plugins/gsap";

// Animates a numeric string like "140k", "20x", "95%" by counting up the
// leading number while keeping its prefix/suffix intact.
export function animateCountUp(el, rawValue, options = {}) {
  const match = String(rawValue).match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  if (!match) {
    el.textContent = rawValue;
    return;
  }

  const [, prefix, numberPart, suffix] = match;
  const endValue = parseFloat(numberPart);
  const decimals = numberPart.includes(".") ? numberPart.split(".")[1].length : 0;
  const obj = { val: 0 };

  return gsap.to(obj, {
    val: endValue,
    duration: options.duration ?? 1.6,
    ease: options.ease ?? "power2.out",
    onUpdate: () => {
      el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
    },
  });
}
