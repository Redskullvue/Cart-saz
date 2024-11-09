<template>
  <div
    class="w-full p-6 flex items-center justify-center flex-col"
    v-if="currentLevel === 1"
  >
    <div
      class="flex md:w-[60%] items-center justify-center flex-col border-b border-gray-300 w-full py-3"
    >
      <h2 class="text-blue-500 text-2xl md:text-3xl font-bold">
        فروشگاه هگزاگون
      </h2>
      <p class="mt-4 text-gray-500">سبد خرید ۲</p>
      <div class="bg-orange-100 text-orange-400 rounded-lg p-4 mt-4 mb-2">
        به خاطز داشته باشید که این لینک ها یک بار مصرف بوده و قابل استفاده مجدد
        نخواهند بود
      </div>
    </div>
    <div
      class="w-full md:w-[60%] flex flex-col mt-4 py-3 border-b border-gray-300"
    >
      <h2 class="w-full font-bold mb-4">محصولات</h2>
      <productCard
        v-for="(product, index) in products"
        :key="index"
        :data="product"
        class="my-2"
      />
    </div>
    <div
      class="w-full md:w-[60%] flex items-center justify-between mt-6 py-3 border-b botder-gray-300"
    >
      <div>مبلغ نهایی سبد خرید‌ :</div>
      <div>۴۹.۰۰۰ تومان</div>
    </div>
    <div class="mt-6 w-full md:w-[60%]">
      <p class="text-sm text-gray-400">
        جهت تکمیل خرید شماره تماس خود را وارد کنید
      </p>
      <input
        type="tel"
        class="mt-2 border rounded-lg border-gray-300 py-3 px-1 w-full focus:outline-none"
        placeholder="شماره تماس"
      />
    </div>

    <div class="w-full flex items-center justify-center mt-6 md:w-[40%]">
      <button
        class="w-full rounded-lg py-3 px-1 text-white bg-blue-500"
        @click="currentLevel = 2"
      >
        تکمیل خرید
      </button>
    </div>
  </div>
  <div
    class="flex w-[100%] h-screen flex-col p-2 items-center justify-center mt-2"
    v-if="currentLevel === 2"
  >
    <h2 class="text-blue-500 text-2xl md:text-3xl font-bold">
      فروشگاه هگزاگون
    </h2>
    <p class="mt-4">کد وارد شده به شماره ۰۹۱۰۲۲۳۲۳۷۸ را وارد کنید</p>
    <div class="w-full flex md:items-center md:justify-center mt-7">
      <input
        type="text"
        class="border border-gray-500 w-[15%] rounded-lg h-16 md:h-28 mx-2"
        maxlength="1"
      />
      <input
        type="text"
        maxlength="1"
        class="border border-gray-500 w-[15%] rounded-lg h-16 md:h-28 mx-2"
      />
      <input
        type="text"
        maxlength="1"
        class="border border-gray-500 w-[15%] rounded-lg h-16 md:h-28 mx-2"
      />
      <input
        type="text"
        maxlength="1"
        class="border border-gray-500 w-[15%] rounded-lg h-16 md:h-28 mx-2"
      />
      <input
        type="text"
        maxlength="1"
        class="border border-gray-500 w-[15%] rounded-lg h-16 md:h-28 mx-2"
      />
    </div>
    <div class="w-full flex items-center justify-center mt-8 md:w-[40%]">
      <button
        class="w-full rounded-lg py-3 px-1 text-white bg-blue-500"
        @click="currentLevel = 3"
      >
        ثبت کد
      </button>
    </div>
  </div>
  <div class="w-full" v-if="currentLevel === 3">This is the level 3</div>
</template>

<script setup>
import productCard from "@/components/productCard.vue";
import { ref } from "vue";

const products = ref([
  {
    title: "روغن زیتون",
    price: "۳۰.۰۰۰",
    img: "product1.png",
  },
  {
    title: "روغن زیتون",
    price: "۳۰.۰۰۰",
    img: "product1.png",
  },
  {
    title: "روغن زیتون",
    price: "۳۰.۰۰۰",
    img: "product1.png",
  },
]);

const currentLevel = ref(1);
</script>

<style scoped></style>
