<template>
  <div class="w-full p-4">
    <div class="rounded-lg border-gray-300 border p-4">
      <h3 class="text-gray-600 text-xl flex items-center gap-2">
        <Icon icon="solar:shop-broken" width="23" height="23" />
        آدرس دفتر / مغازه
      </h3>
      <p class="text-gray-500 text-sm mt-3">
        تهران ؛ میدان ونک - بلوار میرداماد
      </p>
    </div>
    <div
      class="rounded-lg text-red-500 border-gray-300 border p-4 flex items-center justify-between mt-3"
    >
      <p class="flex items-center gap-2">
        <Icon icon="mdi:instagram" width="26" height="26" style="color: red" />
        صفحه اینستاگرام
      </p>
      <p>@shop-test</p>
    </div>
    <div
      class="rounded-lg text-blue-500 border-gray-300 border p-4 flex items-center justify-between mt-3"
    >
      <p class="flex items-center gap-2">
        <Icon icon="mdi:telegram" width="26" height="26" />
        تلگرام
      </p>
      <p>@shop-telegram</p>
    </div>
    <div
      class="rounded-lg text-green-500 border-gray-300 border p-4 flex items-center justify-between mt-3"
    >
      <p class="flex items-center gap-2">
        <Icon icon="mdi:whatsapp" width="26" height="26" />
        واتساب
      </p>
      <p>۰۹۱۰۲۲۳۲۳۷۸</p>
    </div>
    <div
      class="rounded-lg text-green-500 border-gray-300 border p-4 flex items-center justify-between mt-3"
    >
      <p class="flex items-center gap-2">
        <Icon icon="ic:baseline-phone" width="26" height="26" />
        تماس تلفنی
      </p>
      <p>۰۹۱۰۲۲۳۲۳۷۸</p>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
