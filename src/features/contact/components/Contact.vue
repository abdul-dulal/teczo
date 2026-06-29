<script setup>
import phoneIcon from "@/assets/img/contact/phone.png";
import emailIcon from "@/assets/img/contact/email.png";
import messageIcon from "@/assets/img/contact/message.png";
import vector from "@/assets/img/contact/vector.png";
</script>
<template>
  <section class="section-base">
    <div class="container">
      <div class="grid grid-cols-3 gap-[30px]">
        <div
          class="shadow-[0px_20px_30px_-10px_#03041C0F] bg-white p-10 flex items-center justify-center border border-[#1B1F2E1A]"
        >
          <div class="text-center">
            <img :src="phoneIcon" class="block m-auto" alt="PhoneIcon" />
            <p
              class="text-lg inline-block font-medium leading-5 text-[#5C6972] border-b border-[#5C6972] mt-5"
            >
              Contact
            </p>
            <h4 class="text-[22px] font-medium leading-7 text-bg mt-4">
              location@website.com <br />
              +(602) 762 472 96
            </h4>
          </div>
        </div>
        <div
          class="shadow-[0px_20px_30px_-10px_#03041C0F] bg-white p-10 flex items-center justify-center border border-[#1B1F2E1A]"
        >
          <div class="text-center">
            <img :src="emailIcon" class="block m-auto" alt="PhoneIcon" />
            <p
              class="text-lg inline-block font-medium leading-5 text-[#5C6972] border-b border-[#5C6972] mt-5"
            >
              Location
            </p>
            <h4 class="text-[22px] font-medium leading-7 text-bg mt-4">
              88 New South Head Rd, <br />
              Triple, New York
            </h4>
          </div>
        </div>
        <div
          class="shadow-[0px_20px_30px_-10px_#03041C0F] bg-white p-10 flex items-center justify-center border border-[#1B1F2E1A]"
        >
          <div class="text-center">
            <img :src="messageIcon" class="block m-auto" alt="PhoneIcon" />
            <p
              class="text-lg inline-block font-medium leading-5 text-[#5C6972] border-b border-[#5C6972] mt-5"
            >
              Social Media
            </p>
            <h4 class="text-[22px] font-medium leading-7 text-bg mt-4">
              Follow on social media
            </h4>
            <div class="flex items-center justify-center gap-3 mt-4">
              <a href="">
                <svg
                  width="10"
                  height="17"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0H7.27273C6.0672 0 4.91104 0.431005 4.05861 1.1982C3.20617 1.96539 2.72727 3.00593 2.72727 4.09091V6.54545H0V9.81818H2.72727V16.3636H6.36364V9.81818H9.09091L10 6.54545H6.36364V4.09091C6.36364 3.87391 6.45942 3.66581 6.6299 3.51237C6.80039 3.35893 7.03162 3.27273 7.27273 3.27273H10V0Z"
                    fill="#5C6972"
                  />
                </svg>
              </a>
              <a href=""
                ><svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 0.00822739C17.2165 0.560891 16.349 0.98359 15.4309 1.26005C14.9382 0.693464 14.2833 0.291885 13.5548 0.109622C12.8264 -0.0726414 12.0596 -0.0267944 11.3581 0.240962C10.6565 0.508718 10.0542 0.985465 9.63244 1.60672C9.2107 2.22798 8.98993 2.96378 9 3.71459V4.53277C7.56215 4.57006 6.13741 4.25117 4.85264 3.6045C3.56788 2.95784 2.46299 2.00348 1.63636 0.826409C1.63636 0.826409 -1.63636 8.19005 5.72727 11.4628C4.04225 12.6066 2.03495 13.1801 0 13.0991C7.36364 17.19 16.3636 13.0991 16.3636 3.69005C16.3629 3.46214 16.341 3.23481 16.2982 3.01096C17.1332 2.18745 17.7225 1.14772 18 0.00822739Z"
                    fill="#6C33D9"
                  />
                </svg>
              </a>
              <a href="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6001 5.40094C14.0325 5.40094 15.4062 5.96996 16.4191 6.98282C17.432 7.99569 18.001 9.36942 18.001 10.8018V17.1029H14.4004V10.8018C14.4004 10.3244 14.2107 9.86645 13.8731 9.52883C13.5355 9.1912 13.0776 9.00153 12.6001 9.00153C12.1226 9.00153 11.6647 9.1912 11.3271 9.52883C10.9895 9.86645 10.7998 10.3244 10.7998 10.8018V17.1029H7.19922V10.8018C7.19922 9.36942 7.76824 7.99569 8.7811 6.98282C9.79396 5.96996 11.1677 5.40094 12.6001 5.40094Z"
                    fill="#5C6972"
                  />
                  <path
                    d="M3.60059 6.30109H0V17.1029H3.60059V6.30109Z"
                    fill="#5C6972"
                  />
                  <path
                    d="M1.8003 3.60059C2.79457 3.60059 3.60059 2.79457 3.60059 1.8003C3.60059 0.80602 2.79457 0 1.8003 0C0.80602 0 0 0.80602 0 1.8003C0 2.79457 0.80602 3.60059 1.8003 3.60059Z"
                    fill="#5C6972"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8 mt-20">
        <div class="relative">
          <div class="max-w-[428px]">
            <h6 class="heading-six text-purple">Get in Touch With Us</h6>
            <h2 class="heading-one my-4">Lets start work together</h2>
            <p>Just tell us your requirements and we will help you!</p>
            <h4 class="text-2xl font-medium left-6 text-purple mt-5">
              +(800) 2563 123
            </h4>
            <p class="text-[#5C6972]">info@company.com</p>
          </div>
          <div class="absolute right-0 bottom-0">
            <img :src="vector" alt="vector" />
          </div>
        </div>
        <div
          class="shadow-[0px_20px_60px_-6px_#1B1F2E14] bg-white p-10 border-t-3 rounded-t-2xl border-purple"
        >
          <form>
            <div class="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Full name"
                class="h-14 bg-[#F7F7F9] text-[#5C6972] focus:right-2 ring-purple rounded-[10px] focus:outline-none w-full px-6"
              />
              <input
                type="text"
                placeholder="Email Address"
                class="h-14 bg-[#F7F7F9] text-[#5C6972] focus:right-2 ring-purple rounded-[10px] focus:outline-none w-full px-6"
              />
              <input
                type="text"
                placeholder="+88017"
                class="h-14 bg-[#F7F7F9] text-[#5C6972] focus:right-2 ring-purple rounded-[10px] focus:outline-none w-full px-6"
              />
              <input
                type="text"
                placeholder="Website"
                class="h-14 bg-[#F7F7F9] text-[#5C6972] focus:right-2 ring-purple rounded-[10px] focus:outline-none w-full px-6"
              />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Message"
              class="h-40 mt-5 bg-[#F7F7F9] text-[#5C6972] focus:right-2 ring-purple rounded-[10px] focus:outline-none w-full px-6"
            ></textarea>
            <button
              type="submit"
              class="h-14 bg-secondary mt-5 w-full rounded-[10px] text-base font-medium leading-6 text-bg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
