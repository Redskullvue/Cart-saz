<template>
  <div
    class="w-full rounded-lg border border-gray-500 h-[250px] p-6 flex flex-col items-center justify-center gap-7"
  >
    <router-link
      to="/dashboard/main"
      class="w-full flex gap-2"
      :class="route.path === '/dashboard/main' ? 'text-blue-500 ' : ''"
    >
      <Icon icon="mynaui:home" width="23" height="23" />
      خانه
    </router-link>
    <router-link
      to="/dashboard/vitrin"
      class="w-full flex gap-2"
      :class="route.path === '/dashboard/vitrin' ? 'text-blue-500 ' : ''"
    >
      <Icon icon="solar:shop-broken" width="23" height="23" />
      ویترین
    </router-link>
    <router-link
      to="/dashboard/carts"
      class="w-full flex gap-2"
      :class="route.path === '/dashboard/carts' ? 'text-blue-500 ' : ''"
    >
      <Icon icon="solar:cart-line-duotone" width="23" height="23" />
      سبدهای خرید
    </router-link>
    <router-link
      to="/dashboard/products"
      class="w-full flex gap-2"
      :class="route.path === '/dashboard/products' ? 'text-blue-500 ' : ''"
    >
      <Icon icon="tabler:cube" width="23" height="23" />
      محصولات
    </router-link>
    <router-link
      to="/dashboard/profile"
      class="w-full flex gap-2"
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

<style scoped></style>
