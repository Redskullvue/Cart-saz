<template>
  <div
    class="w-[95%] md:w-[40%] rounded-lg py-3 px-1 border border-gray-300 flex items-center justify-around bg-white"
  >
    <router-link
      :to="'/vitrin/' + store.shopOwnerInformation.shopId"
      :class="
        route.path === '/vitrin/' + store.shopOwnerInformation.shopId
          ? 'text-blue-500'
          : 'text-gray-700'
      "
      >محصولات</router-link
    >
    <router-link
      :to="'/vitrin/' + store.shopOwnerInformation.shopId + '/contacts'"
      v-if="store.shopOwnerInformation.showVitrinContact"
      :class="
        route.path === '/vitrin/contacts' ? 'text-blue-500' : 'text-gray-700'
      "
      >تماس با ما</router-link
    >
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useCounterStore } from "@/stores/shoppers";

const store = useCounterStore();
const route = useRoute();
</script>

<style scoped></style>
