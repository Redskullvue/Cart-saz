<template>
  <div class="w-full p-6 md:p-10 flex items-center justify-between">
    <router-link to="/" class="flex items-center">
      <img src="../assets/images/logo.svg" alt="logo" />
    </router-link>

    <div class="w-2/3 flex text-lg justify-center">
      <div class="hidden md:flex items-center justify-end gap-8 w-full">
        <router-link to="/">آبدیت ها</router-link>
        <router-link to="/faq">سوالات متداول</router-link>
        <router-link to="/تماس-با-ما">تماس با ما</router-link>
      </div>
      <router-link
        to="/"
        class="mr-0 md:mr-14 text-blue-400 border border-blue-400 py-2 px-4 rounded-lg min-w-[150px] flex items-center justify-center transition-colors duration-300 hover:bg-blue-500 hover:text-white"
        >ورود یا ثبت نام</router-link
      >
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
