<template>
  <div class="w-full h-full">
    <!-- Filter Section -->
    <div
      class="w-full flex md:justify-around items-center flex-nowrap overflow-x-auto mb-10"
    >
      <div
        class="cursor-pointer transition-colors duration-300 mx-6"
        @click="currentStatus = 'all'"
        :class="currentStatus === 'all' ? 'text-blue-500 font-bold ' : ''"
      >
        همه
      </div>
      <div
        class="cursor-pointer transition-colors duration-300 mx-6"
        @click="currentStatus = 'waiting'"
        :class="currentStatus === 'waiting' ? 'text-blue-500 font-bold  ' : ''"
      >
        منتظر تکمیل
      </div>
      <div
        class="cursor-pointer transition-colors duration-300 mx-6"
        @click="currentStatus = 'ready'"
        :class="currentStatus === 'ready' ? 'text-blue-500 font-bold ' : ''"
      >
        آماده ارسال
      </div>
      <div class="cursor-pointer transition-colors duration-300 mx-6">
        تمام شده
      </div>
      <div
        class="cursor-pointer transition-colors duration-300 mx-6"
        @click="currentStatus = 'canceled'"
        :class="currentStatus === 'canceled' ? 'text-blue-500 font-bold ' : ''"
      >
        لغو شده
      </div>
    </div>

    <!-- Carts Section -->
    <div class="w-full md:p-10 grid md:grid-cols-3 grid-cols-1 gap-4 mb-10">
      <Cart v-for="cart in currentItems" :key="cart.id" :data="cart" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

import Cart from "@/components/Cart.vue";
import { useCounterStore } from "@/stores/shoppers";

const store = useCounterStore();

const currentStatus = ref("all");
const currentItems = ref(store.shopOwnerInformation.createdCarts);

watch(currentStatus, (newVal) => {
  if (newVal === "all") {
    currentItems.value = store.shopOwnerInformation.createdCarts;
  }
  if (newVal === "ready") {
    currentItems.value = store.shopOwnerInformation.createdCarts;
    currentItems.value = currentItems.value.filter(
      (item) => item.status === "ready"
    );
  }
  if (newVal === "waiting") {
    currentItems.value = store.shopOwnerInformation.createdCarts;
    currentItems.value = currentItems.value.filter(
      (item) => item.status === "waiting"
    );
  }
  if (newVal === "canceled") {
    currentItems.value = store.shopOwnerInformation.createdCarts;
    currentItems.value = currentItems.value.filter(
      (item) => item.status === "canceled"
    );
  }
});
</script>

<style scoped></style>
