<template>
  <div class="w-full flex items-start justify-center mt-20 h-[70vh]">
    <img src="../assets/images/Hero-bg.svg" alt="" class="opacity-60" />
    <div class="absolute flex flex-col items-center justify-center">
      <h1
        class="text-center text-3xl md:text-5xl leading-[70px] font-bold mt-10"
      >
        سامانه مدیریت <span class="text-blue-400">هوشمند</span><br />
        سفارش های اینترنتی
      </h1>
      <button
        class="bg-blue-500 flex text-white rounded-full px-6 py-4 mt-10 gap-2 transition-colors duration-300 hover:bg-blue-600"
      >
        <i
          ><Icon
            icon="icon-park-solid:play"
            width="23"
            height="23"
            style="color: white"
        /></i>
        مشاهده ویدیو معرفی
      </button>
      <p class="mt-10 font-normal md:text-lg text-center">
        کارت ساز آمده تا دیگر نیازی به یادداشت سفارش های خود در دفتر یا سررسید
        نباشید . به راحتی سفارشات خود را <br />
        مدیریت کنید و آن ها را تعیین وضعیت کنید حتی به راحتی برگه ارسال برینت
        کنید و آن را اختصاصی استفاده کنید
      </p>
    </div>
    <Icon
      icon="solar:arrow-down-outline"
      width="23"
      height="23"
      style="color: black; animation-duration: 1s"
      class="absolute bottom-14 md:bottom-[200px] animate-ping"
    />
  </div>
  <!-- Spliter -->
  <div class="w-full flex items-center justify-center h-2">
    <div class="w-2/3 bg-gray-50 h-full"></div>
  </div>

  <div class="w-full flex flex-col items-center justify-center mt-10">
    <div
      class="rounded-full bg-orange-100 text-center text-orange-500 w-32 py-2"
    >
      حالت نمایش
    </div>
    <h2 class="mt-12 md:text-4xl text-2xl font-bold text-center">
      سیستمی کاملا تحت وب و آنلاین
    </h2>
    <p class="text-center mt-8 text-gray-600 font-extralight md:text-lg">
      سیستم کارت ساز کاملا تحت وب اجرا شده و نیاز به هیچ سخت افزاری برای دیتاهای
      خود ندارید <br />
      به راحتی مشتریان را مدیریت کنید و سفارشات خود را به موقع جمع آوری و ارسال
      کنید
    </p>

    <img src="../assets/images/Frame.png" alt="App-frame" class="mt-10" />

    <div
      class="rounded-full bg-orange-100 text-center text-orange-500 w-32 py-2"
    >
      امکانات
    </div>
    <h2 class="mt-12 md:text-4xl text-2xl font-bold text-center">
      جدیدترین مدل مدیریت سبد خرید ها
    </h2>
    <p class="text-center mt-8 text-gray-600 font-extralight md:text-lg">
      بیش از ۱۰۰ فروشگاه سبد خرید های خود را در کارت ساز با امکانات متفاوت این
      سامانه مدیریت می کنند
    </p>

    <div
      class="w-full flex flex-col flex-wrap md:flex-nowrap md:flex-row items-center justify-center gap-12 mt-10 p-14"
    >
      <!-- <div
        class="md:w-1/3 md:h-[400px] w-[90%] border border-dashed border-gray-400 flex items-center justify-center flex-col p-4 rounded-lg"
        v-for="i in 4"
        :key="i"
      >
        <img src="../assets/images/bag-logo.png" alt="bag-logo" class="mb-4" />
        <h3 class="mb-4 text-xl font-bold">ایجاد سبد خرید اختصاصی</h3>
        <p class="text-gray-400 text-center text-lg">
          با ایجاد سبد خرید اختصاصی بدون نیاز به کاربران سبد خریدهای آن هارا
          خودتان بسازیذ و برای هرکدام لینک اختصاصی دریافت کنید
        </p>
      </div> -->
      <serviceCard v-for="card in serviceCards" :key="card" :card-info="card" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import serviceCard from "@/components/serviceCard.vue";

const serviceCards = [
  {
    title: "ایجاد سبد خرید اختصاصی",
    description: `با ایجاد سبد خرید اختصاصی بدون نیاز به کاربران سبد خریدهای آن هارا
          خودتان بسازیذ و برای هرکدام لینک اختصاصی دریافت کنید`,
    img: "",
  },
  {
    title: "ثبت حساب",
    description:
      "در کارت ساز حساب شما ثبت میشود‌ و کسی جز شما نمیتواند وارد حساب شود",
    img: "",
  },
  {
    title: "مدیریت زمان",
    description:
      "به راحتی با ساخت سبد های خرید اختصاصی زمان خود را کاهش دهید و آن را به راحتی مدیریت کنید",
    img: "",
  },
  {
    title: "ثبت محصول",
    description:
      "قبل از هرچیزی محصولات خود را ثبت کنید و برای آنها عکس بگذارید تا در سبد خرید درج شوند",
    img: "",
  },
];
</script>

<style scoped></style>
