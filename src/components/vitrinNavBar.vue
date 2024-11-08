<template>
  <div
    class="w-[95%] rounded-lg py-3 px-1 border border-gray-300 flex items-center justify-around bg-white"
  >
    <router-link
      to="/vitrin"
      :class="route.path === '/vitrin' ? 'text-blue-500' : 'text-gray-700'"
      >محصولات</router-link
    >
    <router-link
      to="/vitrin/contacts"
      :class="
        route.path === '/vitrin/contacts' ? 'text-blue-500' : 'text-gray-700'
      "
      >تماس با ما</router-link
    >
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped></style>
