<template>
  <div
    class="w-full h-full grid md:grid-cols-2 grid-cols-1 md:gap-6 items-center justify-center"
  >
    <div class="flex flex-col">
      <div for="">*عنوان محصول</div>
      <input
        type="text"
        placeholder="لباس مردانه"
        class="border border-gray-400 rounded-lg py-3 my-4 px-1"
      />
    </div>
    <div class="flex flex-col">
      <div for="">قیمت</div>
      <div class="w-full border flex border-gray-400 rounded-lg py-3 my-4 px-1">
        <input
          type="text"
          placeholder="۳۰.۰۰۰"
          class="w-11/12 focus:outline-none"
        />
        <span class="text-gray-500 font-light"> تومان</span>
      </div>
    </div>
    <div class="flex flex-col">
      <div for="">کد محصول</div>
      <input
        type="text"
        placeholder="با توجه به نیاز خود"
        class="border border-gray-400 rounded-lg py-3 my-4 px-1"
      />
    </div>
    <div class="flex flex-col">
      <div for="">دسته بندی</div>
      <input
        type="text"
        placeholder="اکسسوری"
        class="border border-gray-400 rounded-lg py-3 my-4 px-1"
      />
    </div>
    <div class="flex flex-col">
      <div for="">توضیحات</div>
      <input
        class="border border-gray-400 rounded-lg py-3 h-[130px] my-4 px-1"
      />
    </div>
    <div
      class="border border-gray-400 rounded-lg py-3 px-1 self-center my-6 md:mt-10 mb-4 max-h-[50px] flex justify-between"
    >
      <p class="text-gray-500 font-light">نمایش در ویترین</p>
      <div
        @click="toggleVitrin = !toggleVitrin"
        class="rounded-full w-14 h-7 p-1 flex flex-row-reverse items-center justify-between cursor-pointer"
        :class="toggleVitrin ? 'bg-blue-600' : 'bg-gray-300'"
      >
        <div
          class="w-6 h-6 rounded-full border bg-white transition-all duration-300"
          :class="toggleVitrin ? ' translate-x-6' : ''"
        ></div>
      </div>
    </div>
    <!-- Upload Pictures -->
    <div class="w-full flex gap-2">
      <div
        class="w-1/2 md:w-1/3 cursor-pointer h-[200px] rounded-lg border border-blue-600 flex items-center justify-center mb-10 text-blue-800 bg-blue-300"
      >
        <Icon icon="gg:add" width="23" height="23" style="color: darkblue" />
        بارگذاری عکس
      </div>
    </div>
    <div class="w-full flex items-center justify-center mb-12">
      <button
        class="w-full bg-blue-500 text-white py-3 rounded-lg transition-colors duration-300 hover:bg-blue-600"
      >
        ثبت محصول
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const toggleVitrin = ref(true);
</script>

<style scoped></style>
