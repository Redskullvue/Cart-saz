<template>
  <div
    class="w-full h-16 border-t border-gray-500 bg-gray-50 flex items-center"
  >
    <router-link
      to="/"
      class="w-full flex items-center flex-col justify-center"
    >
      <Icon icon="mynaui:home" width="23" height="23" style="color: black" />
      خانه
    </router-link>
    <router-link
      to="/"
      class="w-full flex items-center flex-col justify-center"
    >
      <Icon
        icon="solar:cart-line-duotone"
        width="23"
        height="23"
        style="color: black"
      />
      سبدهای خرید
    </router-link>
    <router-link
      to="/"
      class="w-full flex items-center flex-col justify-center"
    >
      <Icon icon="tabler:cube" width="23" height="23" style="color: black" />
      محصولات
    </router-link>

    <router-link
      to="/"
      class="w-full flex items-center flex-col justify-center"
    >
      <Icon
        icon="dashicons:admin-users"
        width="23"
        height="23"
        style="color: black"
      />
      حساب کاربری
    </router-link>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
