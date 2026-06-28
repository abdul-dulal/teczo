<script setup>
import SocialIcon from "@/features/HomeFive/components/SocialIcon.vue";
import feature from "@/assets/img/portfolio/feature.png";
import quote from "@/assets/img/portfolio/quote.png";
import team01 from "@/assets/img/portfolio/team-work-01.png";
import team02 from "@/assets/img/portfolio/team-work-02.png";
import Portfolio from "@/features/portfolio/components/Portfolio.vue";
</script>
<template>
  <section class="section-base">
    <div class="container">
      <div class="grid grid-cols-[31%_60%] gap-[30px]">
        <div class="bg-purple rounded-[20px] p-10">
          <div>
            <p class="text-lg font-medium text-white leading-6">Client</p>
            <h3
              class="text-[30px] mt-3 font-medium text-white border-b border-white/20 pb-6"
            >
              Binu Tech Company
            </h3>
          </div>
          <div class="mt-3">
            <p class="text-lg font-medium text-white leading-6">Date</p>
            <h3
              class="text-[30px] mt-3 font-medium text-white border-b border-white/20 pb-6"
            >
              Janu 2025
            </h3>
          </div>
          <div class="mt-3">
            <p class="text-lg font-medium text-white leading-6">Website</p>
            <h3
              class="text-[30px] mt-3 font-medium text-white border-b border-white/20 pb-6"
            >
              www.binu.com
            </h3>
          </div>
          <div class="mt-3">
            <p class="text-lg font-medium text-white leading-6">Value</p>
            <h3
              class="text-[30px] mt-3 font-medium text-white border-b border-white/20 pb-6"
            >
              $256.36
            </h3>
          </div>
          <div class="mt-3">
            <SocialIcon className="bg-white hover:bg-secondary " />
          </div>
        </div>
        <div>
          <img class="rounded-[20px]" :src="feature" alt="Feature" />
        </div>
      </div>
      <div class="mt-10">
        <h2 class="text-[40px] font-bold leading-[55px]">
          Improve and Innovate with the Tech Trends
        </h2>
        <p class="heading-six text-[#5C6972] mt-10 font-inter">
          With worldwide annual spend on digital advertising surpassing $325
          billion, it’s no surprise that different approaches to online
          marketing are becoming available. One of these new approache marketing
          or digital performance marketing. Keep reading to learn all about
          performance marketing, from how it works to how it compares to digital
          marketing. Plus, get insight into the benefits and risks of
          performance marketing and how it can affect your company’s long-term
          success and profitability. Performance marketing is an approach to
          digital marketing or advertising where businesses only pay when a
          specific result occurs. This result could be a new lead, sale, or
          other outcome agreed upon by the advertiser and business.
        </p>
        <p class="heading-six text-[#5C6972] mt-6 font-inter">
          Performance marketing involves channels such as affiliate marketing,
          online The main thing that separates performance marketing from other
          types of marketing is the way businesses pay for their campaigns.
          Rather than paying up front or by month, advertisers pay when a
          specific action takes place. You might enlist a marketing company’s
          help to bring your branding to more individuals by having these
          marketers promote your business to prospective customers. The hope is
          that users will complete a form to learn more about your company and
          become a lead.
        </p>
      </div>
      <div class="flex items-center gap-3">
        <div>
          <img :src="quote" alt="Quote" />
        </div>
        <h5 class="text-xl font-medium leading-7 text-[#1B1F2E] max-w-[770px]">
          “I cannot give you the formula for success, but I can give you the
          formula for failure. It is: Try to please everybody.”
        </h5>
      </div>

      <div class="grid grid-cols-2 gap-[30px] my-10">
        <img :src="team01" class="rounded-xl" alt="Team" />
        <img :src="team02" class="rounded-xl" alt="Team" />
      </div>
      <div>
        <h2 class="text-[40px] font-bold leading-[55px]">Process & Results</h2>
        <p class="heading-six text-[#5C6972] mt-6 font-inter">
          With worldwide annual spend on digital advertising surpassing $325
          billion, it’s no surprise that different approaches to online
          marketing are becoming available. One of these new approache marketing
          or digital performance marketing. Keep reading to learn all about
          performance marketing, from how it works to how it compares to digital
          marketing. Plus, get insight into the benefits and risks of
          performance marketing and how it can affect your company’s long-term
          success and profitability. Performance marketing is an approach to
          digital marketing or advertising where businesses only pay when a
          specific result occurs. This result could be a new lead, sale, or
          other outcome agreed upon by the advertiser and business.
        </p>
      </div>

      <div class="mt-20">
        <h2 class="heading-one text-center">our related projects</h2>

        <Portfolio :showgap="false" />
      </div>
    </div>
  </section>
</template>
