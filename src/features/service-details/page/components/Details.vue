<script setup>
import { ref } from "vue";
import icon01 from "@/assets/img/service-details/engaging.svg";
import icon02 from "@/assets/img/service-details/marketing.svg";
import icon03 from "@/assets/img/service-details/sales.svg";
import icon04 from "@/assets/img/service-details/campaign.svg";
import icon05 from "@/assets/img/service-details/analytics.svg";
import feature from "@/assets/img/service-details/feature.png";
import { Mail, Phone } from "lucide-vue-next";
import contact from "@/assets//img/service-details/contact.png";
import target from "@/assets/img/service-details/target.png";

const services = ref([
  {
    id: 1,
    icon: icon01,
    title: "Enterprise Services",
    image: feature,
    description: "",
  },
  {
    id: 2,
    icon: icon02,
    title: "Marketing Research",
    image: feature,
    description: "Research-driven marketing solutions for business growth.",
  },
  {
    id: 3,
    icon: icon03,
    title: "Sales Development",
    image: feature,
    description: "Sales strategies that improve conversion and revenue.",
  },
  {
    id: 4,
    icon: icon04,
    title: "Marketing Consulting",
    image: feature,
    description: "Consulting solutions tailored to your business goals.",
  },
  {
    id: 5,
    icon: icon05,
    title: "SEO Analytics",
    image: feature,
    description: "Advanced SEO and analytics for better visibility.",
  },
]);

const activeService = ref(services.value[1]);

const form = ref({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const selectService = (item) => {
  activeService.value = item;
  form.value.service = item.title;
};

const submitForm = () => {
  console.log("Form Data:", form.value);
};
</script>

<template>
  <section class="section-base">
    <div class="container grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-20">
      <!-- LEFT SIDEBAR -->
      <div class="space-y-10">
        <!-- Menu -->
        <div
          class="rounded-[20px] border border-[#1B1F2E26] px-8 py-[30px] overflow-hidden"
        >
          <button
            v-for="item in services"
            :key="item.id"
            @click="selectService(item)"
            class="w-full flex items-center gap-3 pb-4 last:pb-0 pt-3.5 text-lg font-inter font-normal cursor-pointer border-b border-dashed border-[#1B1F2E26] last:border-b-0 transition-all"
          >
            <component :is="item.icon" class="" />
            {{ item.title }}
          </button>
        </div>

        <div
          class="relative overflow-hidden rounded-[20px] px-8 py-[30px] text-white bg-[linear-gradient(180deg,_#4BF0C5_0%,_#6C33D9_100%)]"
        >
          <h5 class="font-bold text-xl mb-4">Have any questions</h5>

          <p class="text-sm text-white/75 mb-5 max-w-[260px]">
            We unleash your business potential by maximize business innovation
          </p>

          <button
            class="bg-white flex items-center gap-1.5 justify-center text-gray-700 px-4 py-4 rounded-lg text-sm font-normal cursor-pointer"
          >
            <mail size="14" /> binu@mail.com
          </button>
          <button
            class="bg-transparente flex items-center gap-1.5 justify-center mt-2.5 px-4 py-4 rounded-lg text-sm font-normal cursor-pointer border border-white/25 text-white"
          >
            <phone size="14" />+123 2365 56894
          </button>

          <!-- Floating Circle -->
          <div class="absolute bottom-0 right-8">
            <img
              :src="contact"
              alt="Contact"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl">
        <img
          :src="activeService.image"
          :alt="activeService.title"
          class="w-full rounded-xl object-cover"
        />

        <h3 class="heading-three font-bold text-gray-900 mt-8">
          {{ activeService.title }}
        </h3>

        <p class="text-lg font-normal text-[#5C6972] mt-4 leading-7">
          IT company content is important for a number of reasons. First, it can
          help you attract to be potential customers. When you create content
          that is relevant to your target audience, you position yourself as an
          expert in your field and increase the chances that potential customers
          will find you. IT company content can help you educate potential
          customers about your products and services.
        </p>

        <p class="text-lg font-normal text-[#5C6972] mt-4 leading-7">
          We are committed to providing our clients with the highest quality IT
          services and support. We understand that IT is essential for your
          business, and we will work tirelessly to help you achieve your
          business goals.
        </p>

        <!-- Benefits -->
        <div class="mt-10">
          <h3 class="font-bold mb-4 heading-three">Plan Benefits</h3>

          <p class="text-lg font-normal text-[#5C6972] mb-8">
            The world of mobile is constantly evolving, and with it, the way we
            interact with our devices. As mobile UX designers, it's our job to
            stay ahead of the curve and create experiences that are both
            intuitive and engaging.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
              >
                ⭐
              </div>

              <div>
                <h4 class="font-bold text-base">
                  Client with <br />
                  audience
                </h4>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
              >
                🚀
              </div>

              <div>
                <h4 class="font-bold text-base">
                  Coordinate with <br />
                  agencies
                </h4>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
              >
                🛡️
              </div>

              <div>
                <h4 class="font-bold text-base">
                  Pull your social <br />
                  data studies
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-[#F7F7F9] rounded-[20px] px-8 py-6 mt-8 flex flex-col md:flex-row gap-4 items-center"
        >
          <div>
            <div class="size-[125px]">
              <img :src="target" alt="Target" />
            </div>
          </div>

          <div>
            <p class="text-text text-base font-normal mt-2">
              We understand that in today's competitive online world, a strong
              SEO strategy is crucial for businesses to succeed. Our data-driven
              approach and in-depth industry knowledge enable.
            </p>
            <h5 class="text-xl font-medium">
              Liza Olivers |
              <span class="text-lg text-text ml-1">Marketing manager</span>
            </h5>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="mt-10">
          <h3 class="heading-three mb-8">Get in Touch With Us</h3>

          <form @submit.prevent="submitForm" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name*"
                class="border rounded-lg p-6 outline-none focus:border-purple border-[#1B1F2E26] text-text"
              />

              <input
                v-model="form.email"
                type="email"
                placeholder="Your Email Address"
                class="border rounded-lg p-6 outline-none focus:border-purple border-[#1B1F2E26] text-text"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                v-model="form.phone"
                type="text"
                placeholder="Phone Number"
                class="border rounded-lg p-6 outline-none focus:border-purple border-[#1B1F2E26] text-text"
              />

              <select
                v-model="form.service"
                class="border rounded-lg p-6 outline-none focus:border-purple border-[#1B1F2E26] text-text"
              >
                <option value="">Select Service</option>

                <option
                  v-for="item in services"
                  :key="item.id"
                  :value="item.title"
                >
                  {{ item.title }}
                </option>
              </select>
            </div>

            <textarea
              v-model="form.message"
              rows="5"
              placeholder="How can we help you?"
              class="w-full border rounded-lg p-6 outline-none focus:border-purple border-[#1B1F2E26] text-text"
            />

            <button
              class="w-full py-3 rounded-lg bg-secondary text-base font-medium text-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
