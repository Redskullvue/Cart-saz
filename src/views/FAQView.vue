<template>
  <div class="w-full h-[75vh] overflow-y-auto p-10 md:p-20">
    <h2 class="text-4xl text-blue-600 p-2 font-semibold -mt-10">
      سوالات متداول
    </h2>
    <question-box
      class="mx-auto my-4"
      v-for="(question, index) in questions"
      :key="index"
      :information="question"
      :index="index"
      @openAnswer="openBox"
    />
  </div>
</template>

<script setup>
import questionBox from "@/components/questionBox.vue";
import { ref } from "vue";

const questions = ref([
  {
    title: "کارت ساز چیست و به چه کاری می آید ؟‌",
    info: "کارت ساز ابزاری است برای کسب و کار های آنلاین و کوچک جهت مدیریت بهتر سفارش های مشتری ها و ثبت فاکتور",
    isOpen: false,
  },
  {
    title: "کارت ساز چطور به کسب و کار من کمک میکند ؟‌",
    info: "با مدیریت سفارش های مشتری شما سرعت جواب دهی شما به مشتری بالا تر رفته و بدون نیاز به ارتباط با شما مشتری میتواند خرید های خودش را در سبد خرید خود ثبت کند",
    isOpen: false,
  },
  {
    title: "آیا کارت ساز رایگان است ؟‌",
    info: "بله ! اشتراک اولیه کارت ساز رایگان بوده و صاحبین کسب و کار میتوانند به راحتی ثبت نام و استفاده کنند هرچند که تعداد سبد های خرید ساخته شده محدود خواهد بود ",
    isOpen: false,
  },
  {
    title: "آیا اطلاعات من محفوظ است ؟",
    info: "اطلاعات حساب کاربری شما نزد کارتساز محفوظ خواهد ماند هرچند که اطلاعات کالا های شما و مشتریان دیگر برای عموم قابل مشاهده خواهد بود",
    isOpen: false,
  },
  {
    title: "کارت ساز توسط چه کسانی اداره میشود‌؟",
    info: "این نرم افزار به صورت خصوصی ساخته و توسعه داده شده و توسط تیمی کوچیک از دوستان شما اداره میشود",
    isOpen: false,
  },
]);

const openBox = (boxPos) => {
  questions.value[boxPos].isOpen = !questions.value[boxPos].isOpen;
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 1px;
}
</style>
