<template>
  <div
    class="w-full h-full grid grid-cols-1 md:grid-cols-3 pb-10 md:p-10 md:gap-4 gap-y-6"
  >
    <productCard
      v-for="(product, index) in store.shopOwnerInformation.products"
      :key="index"
      :data="product"
    />
  </div>
</template>

<script setup>
import productCard from "@/components/productCard.vue";
import { useCounterStore } from "@/stores/shoppers";

const store = useCounterStore();
</script>

<style scoped></style>
