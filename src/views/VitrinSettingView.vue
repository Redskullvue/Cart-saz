<template>
  <div class="w-full">
    <div class="w-full border-b border-dashed border-gray-300">
      <h3>تصویر لوگو</h3>
      <p class="text-gray-500 mt-3 text-sm">تصویر لوگو حتما باید مربع باشد</p>
      <label
        for="product-image"
        class="w-1/2 md:w-1/3 cursor-pointer h-[200px] rounded-lg border border-blue-600 flex items-center justify-center mb-10 text-blue-800 bg-blue-300"
      >
        <Icon icon="gg:add" width="23" height="23" style="color: darkblue" />
        بارگذاری عکس
      </label>
      <input id="product-image" type="file" @change="setLogoImage" />
    </div>
    <div class="w-full mt-4 mb-12">
      <h3>رنگ ویترین</h3>
      <p class="text-gray-500 mt-3 text-sm">
        با توجه به رنگ لوگو ی خود میتوانید از رنگ های زیر استفاده کنید
      </p>
      <div class="grid grid-cols-4 md:grid-cols-6 mt-10 gap-8">
        <div
          class="bg-blue-500 w-[65px] h-[30px] ring-2 ring-offset-4 rounded-lg"
        ></div>
        <div
          class="bg-red-500 w-[65px] h-[30px] ring-2 ring-offset-4 rounded-lg"
        ></div>
        <div
          class="bg-green-500 w-[65px] h-[30px] ring-2 ring-offset-4 rounded-lg"
        ></div>
        <div
          class="bg-orange-500 w-[65px] h-[30px] ring-2 ring-offset-4 rounded-lg"
        ></div>
        <div
          class="bg-yellow-500 w-[65px] h-[30px] ring-2 ring-offset-4 rounded-lg"
        ></div>
      </div>
      <div class="w-full mt-6">
        <label for="">توضیح کوتاه درمورد فروشگاه</label>
        <input
          type="text"
          class="w-full mt-3 rounded-lg border border-gray-300 px-1 py-3"
          placeholder="مثال :‌سرگرمی و ورزشی"
          v-model="store.shopOwnerInformation.shopDescription"
        />
      </div>
      <button
        @click="setCurrentSettings"
        class="w-full rounded-lg text-white bg-blue-500 py-3 px-1 mt-6 transition-colors duration-300 hover:bg-blue-600"
      >
        ذخیره تنظمیات
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useCounterStore } from "@/stores/shoppers";
import { useToast } from "vue-toastification";

const toast = useToast();
const currentImage = ref("");
const store = useCounterStore();

const setLogoImage = (e) => {
  currentImage.value = e.target.files[0].name;
  store.setUserLogo(currentImage.value);
  toast.success("عکس اضافه شد");
};

// This is a little unStandard beacuse i didnt want to change the name or write another function for this
const setCurrentSettings = () => {
  store.submitVitrinContactInfo();
  toast.success("تنظیمات با موفقیت ذخیره شد");
};
</script>

<style scoped>
input[type="file"] {
  display: none;
}
</style>
