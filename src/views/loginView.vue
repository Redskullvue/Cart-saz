<template>
  <div class="w-full h-screen flex flex-col gap-5 items-center justify-center">
    <button
      class="text-blue-500 absolute text-xl top-4 right-1"
      @click="currentLevel = 1"
      v-if="currentLevel === 2"
    >
      تغییر شماره تلفن
    </button>
    <!-- Section - 1 -> Level-1 -->
    <div v-if="currentLevel != 3">
      <img src="../assets/images/logo2.png" alt="logo" class="mb-6" />
      <h4 class="text-lg font-medium text-center">ورود / ثبت نام فروشگاه</h4>
    </div>
    <div
      class="mt-10 flex items-center justify-center flex-col w-full md:w-1/4"
    >
      <h2 class="mb-4" v-if="currentLevel === 1">
        جهت ورود به حساب ابتدا شماره تماس خود را وارد کنید
      </h2>
      <h2 class="mb-4" v-if="currentLevel === 2">
        کد به شماره وارد شده ارسال شده است لطفا آن را وارد کنید
      </h2>
      <!-- Level 1  -->
      <div
        class="flex border border-gray-500 w-[90%] p-2 rounded-lg"
        v-if="currentLevel === 1"
      >
        <input type="tel" class="w-full py-2 focus:outline-none" />
        <div class="flex p-2 gap-1">
          ۹۸+
          <img src="../assets/images/iran.svg" alt="iran-flag" />
        </div>
      </div>
      <!-- Level 2 -->
      <div
        class="flex w-[90%] p-2 items-center justify-center mt-2"
        v-if="currentLevel === 2"
      >
        <input
          type="text"
          class="border border-gray-500 w-[15%] rounded-lg h-16 mx-2"
        />
        <input
          type="text"
          class="border border-gray-500 w-[15%] rounded-lg h-16 mx-2"
        />
        <input
          type="text"
          class="border border-gray-500 w-[15%] rounded-lg h-16 mx-2"
        />
        <input
          type="text"
          class="border border-gray-500 w-[15%] rounded-lg h-16 mx-2"
        />
        <input
          type="text"
          class="border border-gray-500 w-[15%] rounded-lg h-16 mx-2"
        />
      </div>
      <p class="mt-2 text-gray-600" v-if="currentLevel === 2">
        ارسال مجدد کد تا ۱:۳۰ دقیقه دیگر
      </p>
      <button
        v-if="currentLevel === 1"
        @click="currentLevel = 2"
        class="w-[90%] mt-6 py-4 text-white bg-blue-500 rounded-lg transition-colors duration-300 hover:bg-blue-600"
      >
        ورود
      </button>
      <button
        v-if="currentLevel === 2"
        @click="currentLevel = 3"
        class="w-[90%] mt-6 py-4 text-white bg-blue-500 rounded-lg transition-colors duration-300 hover:bg-blue-600"
      >
        ثبت کد
      </button>
    </div>
    <div class="w-full md:w-[40%] h-screen" v-if="currentLevel === 3">
      <form class="flex flex-col p-10 gap-2">
        <label for="">نام و نام خانوادگی</label>
        <input
          type="text"
          placeholder="مثال : حسن اکبری"
          class="border border-gray-500 rounded-lg py-3 my-4 px-1"
        />
        <label for="">آیدی فروشگاه اینستاگرام</label>
        <input
          type="text"
          placeholder="instagram/redskull"
          class="border border-gray-500 rounded-lg py-3 my-4 px-1"
        />
        <label for="">نام فروشگاه</label>
        <input
          type="text"
          placeholder="برادران مملی به جز علی"
          class="border border-gray-500 rounded-lg py-3 my-4 px-1"
        />
        <label for="">نوع فعالیت فروشگاه</label>
        <select
          name="storeActivity"
          class="bg-white border border-gray-500 rounded-lg py-3 my-4 px-1 text-gray-500"
        >
          <option value="">انتخاب کنید</option>
          <option value="">2</option>
        </select>
        <label for="">ایمیل (اختیاری)</label>
        <input
          type="text"
          placeholder="email@gmail.com"
          class="border border-gray-500 rounded-lg py-3 my-4 px-1"
        />
        <label for="">کد بستی فرستنده (اختیاری)</label>
        <input
          type="text"
          placeholder="کد ۱۱ رقمی"
          class="border border-gray-500 rounded-lg py-3 my-4 px-1"
        />
        <div class="bg-gray-300 text-gray-500 rounded-lg p-4">
          آدرس فرستنده و کد بستی او در برگه سر رسید ثبت خواهد شد بعدا نیز
          میتوانید این بخش رو اصلاح کنید
        </div>

        <input
          type="submit"
          value="تکمیل ثبت نام"
          class="bg-blue-500 mt-4 transition-colors hover:bg-blue-600 duration-300 text-white py-3 rounded-lg"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const currentLevel = ref(1);
</script>

<style scoped></style>
