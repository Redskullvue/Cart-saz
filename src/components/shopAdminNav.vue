<template>
  <div
    class="w-full h-16 border-t border-gray-500 bg-gray-50 flex items-center"
  >
    <router-link
      to="/dashboard/main"
      class="w-full flex items-center flex-col justify-center"
      :class="route.path === '/dashboard/main' ? 'text-blue-500 ' : ''"
    >
      <Icon icon="mynaui:home" width="23" height="23" />
      خانه
    </router-link>
    <router-link
      to="/dashboard/carts"
      class="w-full flex items-center flex-col justify-center"
      :class="route.path === '/dashboard/carts' ? 'text-blue-500 ' : ''"
    >
      <Icon icon="solar:cart-line-duotone" width="23" height="23" />
      سبدهای خرید
    </router-link>
    <router-link
      to="/dashboard/products"
      class="w-full flex items-center flex-col justify-center"
      :class="route.path === '/dashboard/products' ? 'text-blue-500 ' : ''"
    >
      <Icon icon="tabler:cube" width="23" height="23" />
      محصولات
    </router-link>

    <router-link
      to="/dashboard/profile"
      class="w-full flex items-center flex-col justify-center"
      :class="route.path === '/dashboard/profile' ? 'text-blue-500 ' : ''"
    >
      <Icon icon="dashicons:admin-users" width="23" height="23" />
      حساب کاربری
    </router-link>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

import { useRoute } from "vue-router";

const route = useRoute();
</script>
