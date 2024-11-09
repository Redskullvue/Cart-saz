<template>
  <div
    class="w-full flex flex-col md:flex-row items-center justify-center md:justify-between p-8"
  >
    <div class="flex items-center gap-6">
      <img src="../assets/images/logo.svg" alt="logo" />
      <span class="text-gray-600 hidden md:inline">کارت ساز - ۱۴۰۳</span>
    </div>
    <div class="md:hidden flex items-center justify-center gap-5 mt-5 mb-5">
      <router-link to="/">وبلاگ</router-link>
      <router-link to="/faq">سوالات متداول</router-link>
      <router-link to="/contact-us">تماس با ما</router-link>
    </div>
    <div class="flex items-center gap-5">
      <a href="https://instagram.com/">
        <img src="../assets/images/instagram.svg" alt="instagram" />
      </a>
      <a href="https://telegram.com">
        <img src="../assets/images/telegram.svg" alt="telegram" />
      </a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
