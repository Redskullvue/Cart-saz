<template>
  <div class="w-full">
    <div class="w-full flex items-center justify-center">
      <img src="../assets/images/qrcode.png" alt="qr-code" />
    </div>
    <button
      class="bg-gray-200 rounded-lg py-3 px-1 w-full mt-6 flex items-center justify-center gap-2"
    >
      <Icon
        icon="material-symbols-light:print-outline"
        width="26"
        height="26"
        style="color: black"
      />
      برینت مسقیم
    </button>
    <button
      class="bg-blue-500 rounded-lg py-3 px-1 w-full mt-2 text-white flex items-center justify-center gap-2"
    >
      <Icon
        icon="tabler:download"
        width="26"
        height="26"
        style="color: white"
      />
      دانلود تصویر
    </button>

    <p class="mt-6 text-gray-600 font-extralight">
      این QR کد اختصاصی ویترین شماست که میتوانید آن را چاب کتید و آن را در مغازه
      یا فروشگاه خود درج کنید تا کاربران با اسکن این تصویر به ویترین شما بیایند
      و حصولات شما رو ببینند
    </p>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
