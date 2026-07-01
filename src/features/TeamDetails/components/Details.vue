<script setup>
import member from "@/assets/img/homeTwo/team-member.png";
import { ref } from "vue";
const activeBtn = ref("Dribbble");

const skills = [
  {
    title: "User experience",
    value: 70,
  },
  {
    title: "Development",
    value: 40,
  },
  {
    title: "Space Grotesk",
    value: 80,
  },
];
</script>
<template>
  <div class="section-base">
    <section class="container">
      <div class="grid md:grid-cols-2 xl:gap-16 gap-[30px]">
        <div>
          <img :src="member" alt="Team Member" class="rounded-lg w-full" />
        </div>
        <div>
          <h6 class="heading-six font-normal text-purple mb-3">
            I am a professional business manager
          </h6>
          <h2 class="heading-one font-bold text-primary mb-3">Brandon Hussy</h2>
          <p class="paragraph font-normal font-inter max-w-[570px]">
            On the other hands, we denounce with righteous indignation dislikes
            men who are so beguiled and demoralized by the charms of pleasure of
            the moment so blinded by desire that they cannot foresee the pain
            and trouble that are bound to ensue. <br />
            When he’s not building strong alliances with other creatives,
            project managers and stakeholders alike, you’ll find him giving
            voice to client strategies with key compelling
          </p>
          <h6 class="text-xl font-bold mt-10 mb-5">Portfolio:</h6>
          <div class="flex gap-2.5 items-center">
            <button
              class="px-[27px] py-2.5 border rounded-full cursor-pointer text-sm font-medium font-inter uppercase"
              :class="
                activeBtn == 'Behance'
                  ? 'bg-purple text-white border-purple'
                  : 'border-primary/10 '
              "
              @click="activeBtn = 'Behance'"
            >
              Behance
            </button>
            <button
              class="px-[27px] py-2.5 border border-primary/10 rounded-full cursor-pointer text-sm font-medium font-inter uppercase"
              :class="
                activeBtn == 'Dribbble'
                  ? 'bg-purple text-white border-purple'
                  : 'border-primary/10 '
              "
              @click="activeBtn = 'Dribbble'"
            >
              Dribbble
            </button>
            <button
              class="px-[27px] py-2.5 border border-primary/10 rounded-full cursor-pointer text-sm font-medium font-inter uppercase"
              :class="
                activeBtn == 'Medium'
                  ? 'bg-purple text-white border-purple'
                  : 'border-primary/10 '
              "
              @click="activeBtn = 'Medium'"
            >
              Meduim
            </button>
          </div>
          <h6 class="text-xl font-bold my-5">Follow:</h6>
          <div class="flex gap-2 items-center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="size-11 rounded-full border border-primary/10 hover:border-purple hover:border-2 flex items-center justify-center transition-all ease-in-out duration-500 hover:bg-purple"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 9C18 4.02943 13.9706 0 9 0C4.02943 0 0 4.02943 0 9C0 13.4922 3.29117 17.2155 7.59375 17.8907V11.6016H5.30859V9H7.59375V7.01719C7.59375 4.76156 8.93739 3.51562 10.9932 3.51562C11.9779 3.51562 13.0078 3.69141 13.0078 3.69141V5.90625H11.8729C10.7549 5.90625 10.4062 6.6 10.4062 7.31174V9H12.9023L12.5033 11.6016H10.4062V17.8907C14.7088 17.2155 18 13.4922 18 9Z"
                  fill="#6C33D9"
                />
                <path
                  d="M12.5053 11.6016L12.9043 9H10.4082V7.31174C10.4082 6.60001 10.7569 5.90625 11.8749 5.90625H13.0098V3.69141C13.0098 3.69141 11.9798 3.51562 10.9951 3.51562C8.93934 3.51562 7.5957 4.76156 7.5957 7.01719V9H5.31055V11.6016H7.5957V17.8907C8.05391 17.9626 8.52355 18 9.00195 18C9.48036 18 9.94999 17.9626 10.4082 17.8907V11.6016H12.5053Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              class="size-11 rounded-full border border-primary/10 hover:border-purple hover:border-2 flex items-center justify-center transition-all ease-in-out duration-500 hover:bg-purple group"
            >
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-purple transition-all ease-in-out duration-500 group-hover:text-white"
              >
                <path
                  d="M16 0.00728524C15.3036 0.496661 14.5324 0.870955 13.7164 1.11575C13.2784 0.614052 12.6962 0.25846 12.0488 0.0970684C11.4013 -0.064323 10.7196 -0.023726 10.0961 0.213369C9.47248 0.450463 8.93705 0.872616 8.56217 1.42273C8.18729 1.97285 7.99105 2.62438 8 3.28922V4.01371C6.72192 4.04672 5.45547 3.76435 4.31346 3.19174C3.17145 2.61912 2.18932 1.77405 1.45455 0.731774C1.45455 0.731774 -1.45455 7.25217 5.09091 10.1501C3.59311 11.1629 1.80884 11.6708 0 11.5991C6.54545 15.2216 14.5455 11.5991 14.5455 3.26748C14.5448 3.06568 14.5253 2.86438 14.4873 2.66616C15.2295 1.93696 15.7533 1.01629 16 0.00728524Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="http://instagram.com/"
              target="_blank"
              class="size-11 rounded-full border border-primary/10 hover:border-purple hover:border-2 flex items-center justify-center transition-all ease-in-out duration-500 hover:bg-purple group"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="text-purple transition-all ease-in-out duration-500 group-hover:text-white"
              >
                <path
                  d="M10.2603 4.73779C11.5166 4.73779 12.7214 5.23685 13.6098 6.12519C14.4981 7.01352 14.9972 8.21836 14.9972 9.47466V15.001H11.8393V9.47466C11.8393 9.05589 11.6729 8.65428 11.3768 8.35817C11.0807 8.06206 10.6791 7.8957 10.2603 7.8957C9.84154 7.8957 9.43992 8.06206 9.14381 8.35817C8.8477 8.65428 8.68135 9.05589 8.68135 9.47466V15.001H5.52344V9.47466C5.52344 8.21836 6.0225 7.01352 6.91083 6.12519C7.79917 5.23685 9.00401 4.73779 10.2603 4.73779Z"
                  fill="currentColor"
                />
                <path
                  d="M3.15791 5.52783H0V15.0016H3.15791V5.52783Z"
                  fill="currentColor"
                />
                <path
                  d="M1.57895 3.15791C2.45099 3.15791 3.15791 2.45099 3.15791 1.57895C3.15791 0.706922 2.45099 0 1.57895 0C0.706922 0 0 0.706922 0 1.57895C0 2.45099 0.706922 3.15791 1.57895 3.15791Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div class="my-5">
            <h3 class="heading-three">Professional skills</h3>
            <p class="paragraph my-5 max-w-[500px]">
              I approach every client relationship with a unique & invigorating
              perspective coupled with an unwavering energy
            </p>
            <div
              v-for="item in skills"
              :key="item.title"
              class="mb-8 last:mb-0 max-w-[645px]"
            >
              <!-- Title -->
              <h3 class="mb-4 text-lg font-medium leading-3">
                {{ item.title }}
              </h3>

              <!-- Progress Wrapper -->
              <div class="relative">
                <!-- Gray Line -->
                <div class="h-[7px] w-full rounded-full bg-[#dddddd]"></div>

                <!-- Purple Line -->
                <div
                  class="absolute left-0 top-0 h-[7px] rounded-full bg-[#7C3AED]"
                  :style="{ width: `${item.value}%` }"
                ></div>

                <!-- Circle -->
                <div
                  class="absolute top-1/2 flex h-[38px] w-[38px] shrink-0 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[#7C3AED] bg-white text-[15px] font-medium leading-none text-[#7C3AED] shadow-[0_2px_6px_rgba(124,58,237,0.35)]"
                  :style="{ left: `calc(${item.value}% - 19px)` }"
                >
                  {{ item.value }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
