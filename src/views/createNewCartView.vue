<template>
  <div class="w-full">
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

    <div class="flex items-center justify-center w-full p-10 z-30">
      <button
        class="bg-blue-500 text-white rounded-lg py-3 px-1 w-full md:w-1/3 mt-4"
        @click="addNewProduct"
      >
        افزودن محصول
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import productCard from "@/components/productCard.vue";

const products = ref([
  {
    title: "روغن زیتون",
    price: "۳۰.۰۰۰",
    img: "product1.png",
  },
]);

const addNewProduct = () => {
  products.value.push({
    title: "روغن زیتون",
    price: "۳۰.۰۰۰",
    img: "product1.png",
  });
};
</script>

<style scoped></style>
