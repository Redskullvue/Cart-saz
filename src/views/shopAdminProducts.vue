<template>
  <div
    class="w-full h-full grid grid-cols-1 md:grid-cols-3 pb-10 md:p-10 md:gap-4 gap-y-6"
  >
    <productCard
      v-for="(product, index) in products"
      :key="index"
      :data="product"
    />
  </div>
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
