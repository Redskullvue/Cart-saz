<template>
  <div class="w-full h-full">
    <!-- Filter Section -->
    <div
      class="w-full flex md:justify-around items-center flex-nowrap overflow-x-auto mb-10"
    >
      <div
        class="cursor-pointer text-blue-500 font-bold transition-colors duration-300 mx-6"
      >
        همه
      </div>
      <div class="cursor-pointer transition-colors duration-300 mx-6">
        منتظر تکمیل
      </div>
      <div class="cursor-pointer transition-colors duration-300 mx-6">
        آماده ارسال
      </div>
      <div class="cursor-pointer transition-colors duration-300 mx-6">
        تمام شده
      </div>
      <div class="cursor-pointer transition-colors duration-300 mx-6">
        لغو شده
      </div>
    </div>

    <!-- Carts Section -->
    <div class="w-full md:p-10 grid md:grid-cols-3 grid-cols-1 gap-4 mb-10">
      <Cart v-for="i in 5" :key="i" />
    </div>
  </div>
</template>

<script setup>
import Cart from "@/components/Cart.vue";
</script>

<style scoped></style>
