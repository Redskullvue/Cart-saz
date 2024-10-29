<template>
  <div
    class="w-full flex flex-col md:flex-row items-center justify-center md:justify-between p-8"
  >
    <div class="flex items-center gap-6">
      <img src="../assets/images/logo.svg" alt="logo" />
      <span class="text-gray-600 hidden md:inline">کارت ساز - ۱۴۰۳</span>
    </div>
    <div class="md:hidden flex items-center justify-center gap-5 mt-5 mb-5">
      <router-link to="/">آبدیت ها</router-link>
      <router-link to="/">سوالات متداول</router-link>
      <router-link to="/تماس-با-ما">تماس با ما</router-link>
    </div>
    <div class="flex items-center gap-5">
      <img src="../assets/images/instagram.svg" alt="instagram" />
      <img src="../assets/images/telegram.svg" alt="telegram" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
