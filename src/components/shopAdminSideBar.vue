<template>
  <div
    class="w-full rounded-lg border border-gray-500 h-[250px] p-6 flex flex-col items-center justify-center gap-7"
  >
    <router-link to="/" class="w-full flex gap-2">
      <Icon icon="mynaui:home" width="23" height="23" style="color: black" />
      خانه
    </router-link>
    <router-link to="/" class="w-full flex gap-2">
      <Icon
        icon="solar:cart-line-duotone"
        width="23"
        height="23"
        style="color: black"
      />
      سبدهای خرید
    </router-link>
    <router-link to="/" class="w-full flex gap-2">
      <Icon icon="tabler:cube" width="23" height="23" style="color: black" />
      محصولات
    </router-link>
    <router-link to="/" class="w-full flex gap-2">
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

<style scoped></style>
