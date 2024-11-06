<template>
  <div v-if="!isCartCreated" class="w-full">
    <div class="w-full">
      <input
        type="text"
        class="rounded-lg border w-full border-gray-400 py-3 px-1"
        placeholder="جستجوی محصول"
      />
    </div>
    <div
      class="w-full h-full grid grid-cols-1 md:grid-cols-3 pb-10 md:p-10 md:gap-4 gap-y-6 mt-4"
    >
      <productCard
        v-for="(product, index) in products"
        :key="index"
        :data="product"
      />
    </div>
    <h2
      v-if="products.length < 1"
      class="w-full text-center text-2xl mt-8 text-gray-400"
    >
      هنوز محصولی رو اضافه نکردید
    </h2>

    <div
      class="flex items-center justify-center w-full mb-10 md:p-10 z-30 gap-4"
    >
      <button
        class="border border-blue-500 text-blue-500 rounded-lg py-3 px-1 w-full md:w-1/3 mt-4"
        @click="addNewProduct"
      >
        افزودن محصول
      </button>
      <button
        class="bg-blue-500 text-white rounded-lg py-3 px-1 w-full md:w-1/3 mt-4"
        @click="createCart"
      >
        ساخت سبد خرید
      </button>
    </div>
  </div>
  <div v-else class="w-full">
    <div class="w-full flex flex-col items-center justify-center">
      <img src="../assets/images/created.svg" alt="created" />
      <h2 class="w-full text-center mt-6 text-xl">
        سبدخرید ۲ با موفقیت ساخته شد
      </h2>
      <a href="#" class="text-blue-500 underline underline-offset-4 mt-4">
        https://cartsaz.ir/c232131
      </a>
      <div class="w-full border-b border-gray-300 py-4">
        <button
          class="w-full rounded-lg bg-gray-100 py-3 mt-4 flex gap-2 items-center justify-center"
        >
          <Icon
            icon="solar:copy-linear"
            width="23"
            height="23"
            style="color: black"
          />
          کبی لینک
        </button>
      </div>
      <h2 class="w-full text-center text-lg text-gray-700 mt-4">
        اشتراک گذاری در
      </h2>
      <div class="w-full flex items-center justify-center gap-4 mt-8">
        <button
          class="flex items-center justify-center gap-2 bg-purple-600 rounded-lg py-3 px-1 w-full text-white"
        >
          <Icon
            icon="mdi:instagram"
            width="23"
            height="23"
            style="color: white"
          />
          اینستاگرام
        </button>
        <button
          class="flex items-center justify-center gap-2 bg-green-600 rounded-lg py-3 px-1 w-full text-white"
        >
          <Icon
            icon="ic:baseline-whatsapp"
            width="23"
            height="23"
            style="color: white"
          />
          واتساب
        </button>
      </div>
      <router-link
        to="/dashboard/carts"
        class="w-full flex items-center justify-center py-3 px-1 text-white bg-blue-500 gap-2 rounded-lg mt-6 mb-10"
      >
        <Icon icon="f7:return" width="23" height="23" style="color: white" />
        بازگشت به سبدهای خرید
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import productCard from "@/components/productCard.vue";

const products = ref([
  {
    title: "روغن زیتون",
    price: "۳۰.۰۰۰",
    img: "product1.png",
  },
]);

const isCartCreated = ref(false);

const addNewProduct = () => {
  products.value.push({
    title: "روغن زیتون",
    price: "۳۰.۰۰۰",
    img: "product1.png",
  });
};

const createCart = () => {
  isCartCreated.value = true;
};
</script>

<style scoped></style>
