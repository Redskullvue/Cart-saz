<template>
  <div class="w-full">
    <div
      class="w-full flex items-center justify-between border border-gray-300 rounded-lg py-3 px-1"
    >
      <p>نمایش اطلاعات تماس</p>
      <ToggleButton />
    </div>
    <div
      class="bg-orange-100 text-orange-500 rounded-lg p-4 text-sm font-thin mt-4"
    >
      درصورتی که فیلد ها رو خالی بگذارید نمایش داده نمیشوند . این اطلاعات صرفا
      جهت نمایش در ویترین بوده و ارتباطی به حساب کاربری کارت ساز شما ندارد
    </div>
    <div class="w-full mt-6">
      <label for="">شماره تلفن</label>
      <input
        type="text"
        placeholder="۰۹۱۰۲۲۳۲۳۷۸"
        class="border border-gray-500 w-full rounded-lg py-3 my-4 px-1"
      />
      <label for="">آیدی اینستاگرام</label>
      <input
        type="text"
        placeholder="onlineshop@"
        class="border border-gray-500 w-full rounded-lg py-3 my-4 px-1"
      />
      <label for="">شماره واتساب</label>
      <input
        type="text"
        placeholder="۰۹۱۰۲۲۳۲۳۷۸"
        class="border border-gray-500 w-full rounded-lg py-3 my-4 px-1"
      />
      <label for="">آدرس فروشگاه</label>
      <input
        type="text"
        placeholder="خیابان مثال - کوچه زیبا"
        class="border border-gray-500 w-full rounded-lg py-3 my-4 px-1"
      />
    </div>
    <div class="w-full flex items-center justify-center mb-10">
      <button
        class="py-3 text-white px-1 rounded-lg bg-blue-500 w-full mt-4 transition-colors duration-300 hover:bg-blue-600"
      >
        تایید
      </button>
    </div>
  </div>
</template>

<script setup>
import ToggleButton from "@/components/ToggleButton.vue";
</script>

<style scoped></style>
