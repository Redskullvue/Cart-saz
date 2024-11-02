<template>
  <div
    class="w-full h-[90px] flex items-center justify-between rounded-lg border border-gray-400 py-4 px-2"
  >
    <div class="flex items-center gap-3">
      <img src="../assets/images/product1.png" alt="product-image" />
      <div>
        <h2 class="text-xl font-bold">روغن زیتون</h2>
        <p class="text-gray-600 mt-1">قیمت واحد :‌۲۰.۰۰۰ نومان</p>
      </div>
    </div>
    <div>
      <Icon
        icon="iconamoon:trash-thin"
        width="30"
        height="30"
        class="text-gray-500 transition-colors duration-300 hover:text-red-500 cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
