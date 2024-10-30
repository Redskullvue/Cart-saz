<template>
  <div class="h-[75vh] w-full p-32 flex">
    <div class="md:w-1/2 w-full h-full">
      <h1 class="text-blue-500 text-4xl font-bold">تماس با ما</h1>
      <p class="text-lg mt-6 text-gray-700">
        جهت ارتباط با ما میتوناید از یکی از مسیر های زیر استفاده کنید
      </p>
      <div class="flex flex-col items-start mt-6 gap-4">
        <button
          class="border border-red-500 w-full md:w-1/3 py-4 rounded-xl text-red-700 flex items-center justify-center gap-2"
        >
          <Icon
            icon="basil:instagram-solid"
            width="23"
            height="23"
            style="color: #bd0065"
          />
          مسیج در اینستاگرام
        </button>
        <button
          class="border border-green-500 text-green-600 rounded-xl py-4 w-full md:w-1/3 flex items-center justify-center gap-2"
        >
          <Icon icon="logos:whatsapp-icon" width="23" height="23" />
          تماس در واتس آب
        </button>
      </div>
      <div class="mt-16 flex flex-col gap-6">
        <p class="text-lg text-gray-700">
          همچنین میتوانید از ایمیل زیر برای برقراری ارتباط استفاده کنید
        </p>
        <a class="text-blue-600 underline underline-offset-6 text-xl" href="#"
          >info@Cartsaz.com</a
        >
      </div>
    </div>
    <div class="w-1/2 h-full md:flex items-center justify-center hidden">
      <img src="../assets/images/contactus.png" alt="contact-us" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
