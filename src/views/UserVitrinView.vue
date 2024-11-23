<template>
  <div class="w-full">
    <div class="w-full mt-6 p-4">
      <input
        type="text"
        class="rounded-lg py-3 px-1 w-full border border-gray-300"
        placeholder="جستجوی محصول"
      />
    </div>
    <div class="w-full grid grid-cols-2 md:grid-cols-6 mt-4 p-4 gap-4">
      <template
        v-for="product in store.shopOwnerInformation.products"
        :key="product.id"
      >
        <vitrinProductCard :data="product" v-if="product.isShownVitrin" />
      </template>
    </div>
  </div>
</template>

<script setup>
import vitrinProductCard from "@/components/vitrinProductCard.vue";
import { useCounterStore } from "@/stores/shoppers";

const store = useCounterStore();
</script>

<style scoped></style>
