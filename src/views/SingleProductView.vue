<template>
  <div class="w-full md:flex items-center justify-center flex-col">
    <div class="w-full border-b border-gray-300 px-4 py-7">
      <router-link :to="'/vitrin/' + store.shopOwnerInformation.shopId"
        >بازگشت به ویترین</router-link
      >
    </div>

    <div class="mt-4 w-full p-6 md:w-[70%]">
      <h2 class="text-blue-500 text-xl md:text-2xl font-bold">
        سیستم صوتی BOSE مدل HK-7709892
      </h2>
      <p class="text-sm text-gray-600 mt-2">کد :‌44021</p>
    </div>

    <!-- Product Silder -->
    <div class="w-full p-6">
      <div class="w-full flex items-center justify-center">
        <img src="../assets/images/single-product.png" alt="Product-image-1" />
      </div>

      <div class="w-full flex items-center justify-center gap-2 mt-6">
        <div class="rounded-full w-[10px] h-[10px] bg-blue-600"></div>
        <div class="rounded-full w-[10px] h-[10px] bg-gray-200"></div>
        <div class="rounded-full w-[10px] h-[10px] bg-gray-200"></div>
        <div class="rounded-full w-[10px] h-[10px] bg-gray-200"></div>
      </div>
    </div>
    <!-- Price -->
    <div class="w-full flex items-center justify-between mt-6 p-6 md:w-[70%]">
      <div>قیمت</div>
      <div class="text-green-500">۲۵۶.۰۰۰ تومان</div>
    </div>

    <!-- Description -->

    <div class="w-full md:w-[70%] p-6">
      <div class="w-full rounded-lg border border-gray-300 mt-6 p-6 mb-14">
        <h2 class="text-gray-700 font-bold">توضیحات</h2>
        <p class="w-full text-gray-400 mt-4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
    </div>
    <button
      class="w-[90%] md:w-[30%] rounded-lg bg-blue-500 text-white py-3 px-1 fixed bottom-4 right-[5%] md:right-[35%]"
    >
      افزودن به سبد خرید
    </button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/shoppers";

const store = useCounterStore();
</script>

<style scoped></style>
