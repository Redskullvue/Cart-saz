<template>
  <div class="w-full">
    <div class="w-full p-4 border-b border-gray-300">
      <h2 class="w-full text-lg">مشخصات گیرنده</h2>
      <!-- Row 1 -->
      <div class="w-full flex justify-between items-center my-6">
        <div class="w-1/2">
          <small class="text-gray-500">نام گیرنده</small>
          <p class="mt-2">احسان عزتی</p>
        </div>
        <div class="w-1/2">
          <small class="text-gray-500">شماره گیرنده</small>
          <p class="mt-2">۰۹۱۰۲۲۳۲۳۷۸</p>
        </div>
      </div>
      <!-- Row 2 -->
      <div class="w-full my-6">
        <small class="text-gray-500">آدرس گیرنده</small>
        <p class="mt-2">تهران - میدان امامت - خیابان جدیدی</p>
      </div>
      <!-- Row 3 -->
      <div class="w-full my-6">
        <small class="text-gray-500">کدبستی</small>
        <p class="mt-2">۱۲۳۱۲۳۱۲۳۱</p>
      </div>
      <!-- Row 4 -->
      <div class="w-full my-6">
        <small class="text-gray-500">توضیحات</small>
        <p class="mt-2">--</p>
      </div>
      <!-- Row-5 -->
      <div class="w-full flex items-center justify-center">
        <button
          class="bg-gray-200 rounded-lg py-3 px-1 w-full flex gap-2 items-center justify-center"
        >
          <Icon
            icon="el:download"
            width="20"
            height="20"
            style="color: black"
          />
          دانلود برگه ارسال سفارش
        </button>
      </div>
    </div>
    <!-- Selected Products -->
    <div class="w-full mb-6">
      <h2 class="w-full">محصولات</h2>
      <div class="w-full mt-6">
        <productCard
          v-for="(product, index) in products"
          :key="index"
          :data="product"
          class="my-4"
        />
      </div>
    </div>
    <!-- Full Payed Price For Cart -->
    <div class="w-full flex items-center justify-between mb-6">
      <div class="text-gray-500">مبلغ کل :‌</div>
      <div>۲.۵۰۰.۰۰۰ تومان</div>
    </div>
    <!-- Buttons Section -->
    <div class="w-full mb-12 flex items-center justify-between gap-4">
      <button
        class="text-red-600 flex items-center justify-center gap-2 bg-red-100 rounded-lg py-3 w-1/2 transition-colors duration-300 hover:bg-red-200"
      >
        <Icon
          icon="healthicons:no-outline"
          width="23"
          height="23"
          class="text-red-600"
        />
        لغو کامل
      </button>
      <button
        class="text-white bg-blue-500 rounded-lg py-3 w-1/2 flex gap-2 items-center justify-center transition-colors duration-300 hover:bg-blue-600"
      >
        <Icon
          icon="teenyicons:tick-circle-outline"
          width="20"
          height="20"
          style="color: white"
        />
        انجام سفارش
      </button>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

import productCard from "@/components/productCard.vue";
import { ref } from "vue";

const products = ref([
  {
    title: "روغن زیتون",
    price: "۳۰.۰۰۰",
    img: "product1.png",
  },
  {
    title: "چایی کیسه ای",
    price: "۵۰.۰۰۰",
    img: "product2.png",
  },
  {
    title: "سیب زمینی",
    price: "۷۰.۰۰۰",
    img: "product3.png",
  },
  {
    title: "ماست برنجی",
    price: "۹۰.۰۰۰",
  },
]);
</script>

<style scoped></style>
