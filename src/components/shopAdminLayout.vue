<template>
  <header
    class="w-full md:h-20 border-b border-gray-500 py-3 px-12 flex flex-col md:flex-row items-center justify-between"
  >
    <div class="font-bold text-xl">{{ route.meta.title }}</div>
    <div class="w-full md:w-max flex md:mt-0 mt-4 justify-around">
      <router-link
        to="/dashboard/cart/add"
        class="rounded-lg bg-blue-500 text-white py-3 mx-2 w-24 flex items-center justify-center text-sm md:text-lg md:w-32"
      >
        افزودن سبد خرید
      </router-link>
      <router-link
        to="/dashboard/createproduct"
        class="rounded-lg bg-black cursor-pointer text-white py-3 text-sm md:text-lg w-24 md:w-32 flex items-center justify-center"
      >
        ثبت محصول
      </router-link>
      <router-link
        to="/dashboard/vitrin"
        class="rounded-lg border border-blue-500 text-blue-500 cursor-pointer py-3 px-2 flex items-center w-24 mx-2 justify-center text-sm md:text-lg md:hidden"
      >
        ویترین
      </router-link>
    </div>
  </header>
  <div class="flex">
    <div class="mr-20 py-10 mt-10 w-[200px] hidden md:block">
      <shopAdminSideBar />
    </div>
    <div class="p-10 mt-2 md:mt-10 w-full">
      <router-view />
    </div>
  </div>
  <div class="fixed md:hidden bottom-0 w-full"><shopAdminNav /></div>
</template>

<script setup>
import shopAdminSideBar from "./shopAdminSideBar.vue";
import shopAdminNav from "./shopAdminNav.vue";

import { useRoute } from "vue-router";

const route = useRoute();
</script>
