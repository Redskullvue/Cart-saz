<template>
  <div class="w-full h-full">
    <div class="w-full border-b border-gray-300">
      <h2 class="text-4xl text-blue-500">فروشگاه هگزاگون</h2>
      <h4 class="text-gray-600 mt-2 mb-3">محمد شکروی خوش آمدید</h4>
    </div>
    <div
      class="w-full flex flex-col md:flex-row justify-center mt-10 overflow-y-scroll"
    >
      <div class="w-full md:w-1/2 p-5">
        <h2 class="flex items-center gap-2 text-3xl">
          <Icon
            icon="ph:dot-fill"
            width="35"
            height="35"
            style="color: #5c61ff"
          />
          آخرین سبدهای خرید
        </h2>
      </div>
      <div class="w-full md:w-1/2 p-5">
        <h2 class="flex items-center gap-2 text-3xl mb-6">
          <Icon
            icon="ph:dot-fill"
            width="35"
            height="35"
            style="color: #5c61ff"
          />
          آخرین محصولات
        </h2>
        <div
          class="border border-gray-400 w-full py-4 px-3 my-4 rounded-lg flex justify-between items-center"
          v-for="i in 4"
          :key="i"
        >
          <h4 class="text-xl">عسل شانه ای</h4>
          <p>۲۵۰.۰۰۰ تومان</p>
        </div>
        <div class="w-full flex items-center justify-center mt-10">
          <button
            class="rounded-full w-56 py-3 bg-gray-100 flex justify-center gap-2"
          >
            مشاهده همه
            <Icon
              icon="mingcute:arrow-left-line"
              width="23"
              height="23"
              style="color: black"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>
