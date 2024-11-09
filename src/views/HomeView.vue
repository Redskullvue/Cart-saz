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
  </div>
  <!-- Spliter -->
  <div class="w-full flex items-center justify-center h-2">
    <div class="w-2/3 bg-gray-100 h-full"></div>
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
      <serviceCard v-for="card in serviceCards" :key="card" :card-info="card" />
    </div>

    <!-- Signup-now section -->
    <div
      class="w-full signup-section h-[250px] mt-10 flex item-scenter justify-center"
    >
      <img
        src="../assets/images/signup.jpg"
        alt="signup"
        class="object-cover w-full max-h-[250px] saturate-50"
      />
      <div
        class="absolute bg-black w-full max-h-[250px] h-[250px] opacity-55"
      ></div>
      <div class="absolute mt-10">
        <h2 class="text-white text-center text-3xl md:text-4xl">
          همین حالا ثبت نام کنید !
        </h2>
        <p class="text-white text-center text-base md:text-lg mt-4">
          ثبت نام در کارت ساز رایگان است. همین الان ثبت نام کنید وکارت ساز را
          تست کنید
        </p>
        <div class="flex items-center justify-center mt-6">
          <router-link
            to="/login"
            class="rounded-full w-52 flex justify-center gap-4 py-4 bg-orange-500 text-center px-4 transition-colors duration-300 hover:bg-orange-600"
          >
            <Icon
              icon="mynaui:edit-one-solid"
              width="23"
              height="23"
              style="color: white"
            />
            <span class="text-white">ثبت نام رایگان</span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- About_CartSaz -->
    <div class="w-full mt-10 p-10">
      <h2 class="text-4xl">
        <span class="text-blue-400">کارت ساز</span> چیست ؟‌
      </h2>
      <p class="text-xl text-gray-700 mt-6">
        کارت ساز یک سیستم نوین است که به شما اجازه میدهد برای مشتریان خود سبد
        خرید اختصاصی ایجاد کنید و بعدا با ارسال لینک از آنها بخواهید که سبد خرید
        خود را کامل کنند در این حالت شما دیگرنیازی به یادداشت موارد خواسته شده
        ندارید و به راحتی میتوانید سفارشات خود را ثبت کنید کارت ساز آمده است تا
        زمان شما مدیریت شود مشتریان خود را رهگیری کنید سفارشات را طبقه بندی کنید
        کارت ساز نهایت تلاش را برای خدمت رسانی بهشما انجام خواهد داد
      </p>
    </div>
    <div class="w-full flex items-center justify-center h-2">
      <div class="w-2/3 bg-gray-100 h-full"></div>
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
    img: "service-pic-1.png",
  },
  {
    title: "ثبت حساب",
    description:
      "در کارت ساز حساب شما ثبت میشود‌ و کسی جز شما نمیتواند وارد حساب شود",
    img: "service-pic-2.png",
  },
  {
    title: "مدیریت زمان",
    description:
      "به راحتی با ساخت سبد های خرید اختصاصی زمان خود را کاهش دهید و آن را به راحتی مدیریت کنید",
    img: "service-pic-3.png",
  },
  {
    title: "ثبت محصول",
    description:
      "قبل از هرچیزی محصولات خود را ثبت کنید و برای آنها عکس بگذارید تا در سبد خرید درج شوند",
    img: "service-pic-4.png",
  },
];
</script>

<style scoped></style>
