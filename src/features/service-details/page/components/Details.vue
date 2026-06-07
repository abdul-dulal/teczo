<script setup>
import { ref } from "vue";
import icon01 from "@/assets/img/service-details/engaging.svg";
import icon02 from "@/assets/img/service-details/marketing.svg";
import icon03 from "@/assets/img/service-details/sales.svg";
import icon04 from "@/assets/img/service-details/campaign.svg";
import icon05 from "@/assets/img/service-details/analytics.svg";
import feature from "@/assets/img/service-details/feature.png";

const services = ref([
  {
    id: 1,
    icon: icon01,
    title: "Enterprise Services",
    image: feature,
    description: "Working in the fields of UX design and product strategy.",
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
      <div class="space-y-5">
        <!-- Menu -->
        <div
          class="rounded-[20px] border border-[#1B1F2E26] p-10 overflow-hidden"
        >
          <button
            v-for="item in services"
            :key="item.id"
            @click="selectService(item)"
            class="w-full flex items-center gap-3 pb-4 pt-3.5 text-lg font-inter font-normal cursor-pointer text-[#838694] border-b border-dashed border-[#1B1F2E26] last:border-b-0 transition-all"
          >
            <component :is="item.icon" class="" />
            {{ item.title }}
          </button>
        </div>

        <div
          class="relative overflow-hidden rounded-xl p-6 text-white bg-[linear-gradient(180deg,_#4BF0C5_0%,_#6C33D9_100%)]"
        >
          <h3 class="font-bold text-lg mb-3">Have any questions</h3>

          <p class="text-sm opacity-90 mb-5">
            We're available for support and consultation.
          </p>

          <button
            class="bg-white text-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
          >
            📧 support@email.com
          </button>

          <div class="mt-4 text-sm font-medium">+1 (555) 123 4567</div>

          <!-- Floating Circle -->
          <div
            class="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/10"
          />
        </div>
      </div>

      <!-- RIGHT CONTENT -->
      <div class="bg-white rounded-xl">
        <img
          :src="activeService.image"
          :alt="activeService.title"
          class="w-full rounded-xl object-cover"
        />

        <h2 class="text-3xl font-bold text-gray-900 mt-8">
          {{ activeService.title }}
        </h2>

        <p class="text-gray-600 mt-4 leading-7">
          {{ activeService.description }}
        </p>

        <p class="text-gray-600 mt-4 leading-7">
          We are committed to providing solutions with quality support and
          long-term business growth.
        </p>

        <!-- Benefits -->
        <div class="mt-10">
          <h3 class="text-2xl font-bold mb-4">Plan Benefits</h3>

          <p class="text-gray-600 mb-8">
            The world of digital innovation is evolving. We help businesses
            create better experiences and measurable growth.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
              >
                ⭐
              </div>

              <div>
                <h4 class="font-semibold text-sm">Better Skills</h4>
                <p class="text-xs text-gray-500">Improve workflow</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
              >
                🚀
              </div>

              <div>
                <h4 class="font-semibold text-sm">Growth Strategy</h4>
                <p class="text-xs text-gray-500">Better performance</p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
              >
                🛡️
              </div>

              <div>
                <h4 class="font-semibold text-sm">Reliable Support</h4>
                <p class="text-xs text-gray-500">Professional team</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stat Card -->
        <div
          class="bg-gray-50 rounded-xl p-6 mt-8 flex flex-col md:flex-row gap-4 items-center"
        >
          <div
            class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-3xl"
          >
            🎯
          </div>

          <div>
            <h4 class="font-semibold">User Driven Strategy</h4>

            <p class="text-gray-600 text-sm mt-2">
              We understand how to deliver complete digital solutions focused on
              measurable business growth and customer satisfaction.
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="mt-10">
          <h3 class="text-2xl font-bold mb-6">Get in Touch With Us</h3>

          <form @submit.prevent="submitForm" class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name*"
                class="border rounded-lg px-4 py-3 outline-none focus:border-[#7557ff]"
              />

              <input
                v-model="form.email"
                type="email"
                placeholder="Your Email Address"
                class="border rounded-lg px-4 py-3 outline-none focus:border-[#7557ff]"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                v-model="form.phone"
                type="text"
                placeholder="Phone Number"
                class="border rounded-lg px-4 py-3 outline-none focus:border-[#7557ff]"
              />

              <select
                v-model="form.service"
                class="border rounded-lg px-4 py-3 outline-none focus:border-[#7557ff]"
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
              class="w-full border rounded-lg px-4 py-3 outline-none focus:border-[#7557ff]"
            />

            <button
              class="w-full py-3 rounded-lg text-white bg-gradient-to-r from-[#7557ff] to-[#48e5c2]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
